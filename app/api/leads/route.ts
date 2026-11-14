import { NextResponse } from "next/server";
import { z } from "zod";
import { estimate } from "@/lib/calculator";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .transform((value) => value.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, ""))
    .refine((value) => /^[6-9]\d{9}$/.test(value), "Invalid Indian mobile number"),
  bill: z.coerce.number().min(0).max(1000000),
  city: z.string().trim().min(2).max(80),
  segment: z.enum(["home", "business", "society"]),
  message: z.string().trim().max(600).optional().default(""),
  company: z.string().max(0).optional().default(""),
  ownership: z.string().trim().max(40).optional().default(""),
  pincode: z
    .union([z.literal(""), z.string().regex(/^\d{6}$/)])
    .optional()
    .default(""),
  email: z
    .union([z.literal(""), z.string().trim().email().max(120)])
    .optional()
    .default(""),
  roofType: z.string().trim().max(40).optional().default(""),
  roofArea: z.string().trim().max(40).optional().default(""),
  backup: z.string().trim().max(40).optional().default(""),
  timeline: z.string().trim().max(40).optional().default(""),
});

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const attempts = new Map<string, { count: number; reset: number }>();

function rateLimited(key: string) {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || entry.reset < now) {
    attempts.set(key, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please call us instead." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check your name, mobile number and selections.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  if (parsed.data.company) {
    return NextResponse.json({ ok: true, kw: 3 });
  }

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  const webhookSecret = process.env.LEADS_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    console.error("Lead webhook is not configured: LEADS_WEBHOOK_URL and LEADS_WEBHOOK_SECRET are required.");
    return NextResponse.json(
      { ok: false, error: "Lead delivery is temporarily unavailable. Please call us instead." },
      { status: 503 },
    );
  }

  const lead = {
    ...parsed.data,
    source: "website",
    page: request.headers.get("referer") || "",
    receivedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...lead, secret: webhookSecret }),
      signal: AbortSignal.timeout(10000),
    });

    const responseText = await response.text();
    let webhookResult: { ok?: boolean; error?: string } = {};
    try {
      webhookResult = JSON.parse(responseText);
    } catch {
      console.error("Lead webhook returned a non-JSON response", response.status);
    }

    if (!response.ok || webhookResult.ok !== true) {
      console.error("Lead webhook rejected the lead", {
        status: response.status,
        error: webhookResult.error || "Webhook did not confirm success",
      });
      return NextResponse.json(
        { ok: false, error: "Lead delivery failed. Please try again or call us." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Lead webhook failed", error);
    return NextResponse.json(
      { ok: false, error: "Lead delivery failed. Please try again or call us." },
      { status: 502 },
    );
  }

  const result = estimate(parsed.data.bill || 3000, false);
  return NextResponse.json({ ok: true, kw: result.kw });
}
