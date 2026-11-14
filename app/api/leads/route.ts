import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
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

  const lead = {
    ...parsed.data,
    source: "website",
    page: request.headers.get("referer") || "",
    receivedAt: new Date().toISOString(),
  };

  let storedLocally = false;
  try {
    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(
      path.join(dir, "leads.jsonl"),
      `${JSON.stringify(lead)}\n`,
      "utf8",
    );
    storedLocally = true;
  } catch (error) {
    console.error("Lead persistence failed", error);
  }

  let delivered = false;
  if (process.env.LEADS_WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.LEADS_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(6000),
      });
      delivered = response.ok;
      if (!response.ok) {
        console.error("Lead webhook rejected the lead", response.status);
      }
    } catch (error) {
      console.error("Lead webhook failed", error);
    }
  }

  if (!storedLocally && !delivered) {
    return NextResponse.json(
      { ok: false, error: "We could not save your request. Please call us." },
      { status: 500 },
    );
  }

  const result = estimate(parsed.data.bill || 3000, false);
  return NextResponse.json({ ok: true, kw: result.kw });
}
