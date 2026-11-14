"use client";

import { useState } from "react";
import { Check, Phone } from "@/components/icons";
import { estimate } from "@/lib/calculator";
import { site } from "@/lib/site";

type Errors = Record<string, string>;

type LeadFormProps = {
  eyebrow?: string;
  heading?: string;
  note?: string;
  compact?: boolean;
};

export default function LeadForm({
  eyebrow = "Free site survey",
  heading = "Tell us about your roof.",
  note = "A 2-minute form. We call you back within one working day.",
  compact = false,
}: LeadFormProps) {
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const [firstName, setFirstName] = useState("there");
  const [kw, setKw] = useState(3);

  function validate(data: FormData) {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").replace(/\D/g, "");
    const bill = String(data.get("bill") || "");
    const city = String(data.get("city") || "");
    const segment = String(data.get("segment") || "");

    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(phone)) {
      next.phone = "Enter a valid 10-digit mobile number.";
    }
    if (!bill) next.bill = "Select a bill range.";
    if (!city) next.city = "Select your city.";
    if (!segment) next.segment = "Select a property type.";
    return next;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const next = validate(data);
    setErrors(next);
    setStatus("");

    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setBusy(true);
    const bill = Number(data.get("bill") || 3000);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          bill,
          city: data.get("city"),
          segment: data.get("segment"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });

      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Something went wrong.");
      }

      setFirstName(String(data.get("name") || "there").trim().split(" ")[0]);
      setKw(Number(payload.kw) || estimate(bill).kw);
      setSent(true);
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "We could not send that. Please call us instead.",
      );
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="form-card">
        <div className="form-success" aria-live="polite">
          <div className="form-success__icon">
            <Check size={20} />
          </div>
          <h3>Thanks, {firstName}.</h3>
          <p>
            Based on your bill, a <b>{kw} kW</b> system looks like a sensible
            starting point. Calling is the fastest way to lock a survey slot —
            your enquiry is already with our Delhi team.
          </p>
          <a className="btn btn--full" href={site.phoneHref}>
            Call {site.phoneDisplay}
            <Phone />
          </a>
          <button
            type="button"
            className="form-reset"
            onClick={() => {
              setSent(false);
              setStatus("");
            }}
          >
            Send another enquiry
          </button>
          <p className="form-note">
            Prefer we call you? We do that too — Mon–Sat, 9:30 AM to 7:00 PM.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <div className="form-head">
        <h3>{heading}</h3>
        <span>{eyebrow}</span>
      </div>
      <form onSubmit={onSubmit} noValidate>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        />

        <div className={`field ${errors.name ? "is-invalid" : ""}`}>
          <label htmlFor="lead-name">Your name</label>
          <input
            id="lead-name"
            name="name"
            type="text"
            placeholder="e.g. Rajesh Kumar"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <small className="field-error">{errors.name}</small>}
        </div>

        <div className={`field ${errors.phone ? "is-invalid" : ""}`}>
          <label htmlFor="lead-phone">Mobile number</label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            placeholder="10-digit mobile number"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <small className="field-error">{errors.phone}</small>}
        </div>

        <div className="field-row">
          <div className={`field ${errors.bill ? "is-invalid" : ""}`}>
            <label htmlFor="lead-bill">Monthly bill</label>
            <select
              id="lead-bill"
              name="bill"
              defaultValue=""
              aria-invalid={Boolean(errors.bill)}
            >
              <option value="" disabled>
                Select range
              </option>
              <option value="1500">Under ₹2,000</option>
              <option value="3000">₹2,000 – ₹4,000</option>
              <option value="6000">₹4,000 – ₹8,000</option>
              <option value="11000">₹8,000 – ₹15,000</option>
              <option value="18000">₹15,000+</option>
              <option value="0">Not sure yet</option>
            </select>
            {errors.bill && <small className="field-error">{errors.bill}</small>}
          </div>

          <div className={`field ${errors.city ? "is-invalid" : ""}`}>
            <label htmlFor="lead-city">City</label>
            <select
              id="lead-city"
              name="city"
              defaultValue=""
              aria-invalid={Boolean(errors.city)}
            >
              <option value="" disabled>
                Select city
              </option>
              {site.areas.map((area) => (
                <option key={area}>{area}</option>
              ))}
              <option>Other</option>
            </select>
            {errors.city && <small className="field-error">{errors.city}</small>}
          </div>
        </div>

        <div className={`field ${errors.segment ? "is-invalid" : ""}`}>
          <label htmlFor="lead-segment">Property type</label>
          <select
            id="lead-segment"
            name="segment"
            defaultValue=""
            aria-invalid={Boolean(errors.segment)}
          >
            <option value="" disabled>
              Select property
            </option>
            <option value="home">Home / villa</option>
            <option value="business">Factory, office or shop</option>
            <option value="society">Housing society</option>
          </select>
          {errors.segment && (
            <small className="field-error">{errors.segment}</small>
          )}
        </div>

        {!compact && (
          <div className="field">
            <label htmlFor="lead-message">
              Anything else? <span style={{ opacity: 0.6 }}>(optional)</span>
            </label>
            <textarea
              id="lead-message"
              name="message"
              rows={2}
              placeholder="Roof type, battery backup, timeline…"
            />
          </div>
        )}

        <button className="btn btn--full" type="submit" disabled={busy}>
          {busy ? "Sending…" : "Request my free survey"}
        </button>

        {status && (
          <p className="form-status" role="alert">
            {status}{" "}
            <a href={site.phoneHref} className="text-link">
              Call us
            </a>
          </p>
        )}

        <p className="form-note">
          {note} Your details are used only to respond to this enquiry. No
          spam, ever.
        </p>
      </form>
    </div>
  );
}
