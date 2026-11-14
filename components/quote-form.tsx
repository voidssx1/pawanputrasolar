"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUR, Check, Phone } from "@/components/icons";
import { estimate } from "@/lib/calculator";
import { site } from "@/lib/site";

type Segment = "home" | "business" | "society";
type Errors = Record<string, string>;

type QuoteData = {
  segment: Segment | "";
  ownership: string;
  city: string;
  pincode: string;
  bill: string;
  roofType: string;
  roofArea: string;
  backup: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  company: string;
};

const initialData: QuoteData = {
  segment: "",
  ownership: "",
  city: "",
  pincode: "",
  bill: "",
  roofType: "",
  roofArea: "",
  backup: "",
  timeline: "",
  name: "",
  phone: "",
  email: "",
  message: "",
  company: "",
};

const segments: { value: Segment; label: string; note: string }[] = [
  { value: "home", label: "Home / villa", note: "3–20 kW" },
  { value: "business", label: "Business", note: "Factory, office, shop" },
  { value: "society", label: "Housing society", note: "Common areas" },
];

const steps = ["The property", "The load", "Your details"];

function validateStep(step: number, data: QuoteData): Errors {
  const next: Errors = {};
  if (step === 0) {
    if (!data.segment) next.segment = "Choose a property type.";
    if (!data.ownership) next.ownership = "Select ownership.";
    if (!data.city) next.city = "Select your city.";
    if (!/^\d{6}$/.test(data.pincode)) next.pincode = "Enter a 6-digit PIN code.";
  }
  if (step === 1) {
    if (!data.bill) next.bill = "Select a monthly bill range.";
    if (!data.roofType) next.roofType = "Select a roof type.";
    if (!data.roofArea) next.roofArea = "Select an approximate area.";
    if (!data.backup) next.backup = "Choose a backup preference.";
    if (!data.timeline) next.timeline = "Select a timeline.";
  }
  if (step === 2) {
    if (data.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\D/g, ""))) {
      next.phone = "Enter a valid 10-digit mobile number.";
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "That email does not look right.";
    }
  }
  return next;
}

export default function QuoteForm() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuoteData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [kw, setKw] = useState(3);

  function update<K extends keyof QuoteData>(key: K, value: QuoteData[K]) {
    setData((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key as string];
      return next;
    });
  }

  function next() {
    const found = validateStep(step, data);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStep((value) => Math.min(2, value + 1));
  }

  function back() {
    setErrors({});
    setStatus("");
    setStep((value) => Math.max(0, value - 1));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const found = validateStep(2, data);
    setErrors(found);
    if (Object.keys(found).length) return;

    setBusy(true);
    setStatus("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          bill: Number(data.bill || 3000),
        }),
      });
      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Something went wrong.");
      }
      setKw(Number(payload.kw) || estimate(Number(data.bill) || 3000).kw);
      setSent(true);
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
      <div className="quote-card quote-card--done">
        <div className="form-success" aria-live="polite">
          <div className="form-success__icon">
            <Check size={20} />
          </div>
          <h3>Thanks, {data.name.trim().split(" ")[0] || "there"}.</h3>
          <p>
            Your brief is with the Delhi team. Based on the bill, a{" "}
            <b>{kw} kW</b> system is the sensible starting point — the survey
            will confirm the layout, the roof works and the final subsidy
            amount.
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
              setStep(0);
              setData(initialData);
              setStatus("");
            }}
          >
            Start another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quote-card">
      <div className="quote-head">
        <div>
          <span className="quote-head__eyebrow">Detailed quote request</span>
          <h3>
            Step {step + 1} <i>/ 3</i>
          </h3>
        </div>
        <span className="quote-head__time">2 minutes</span>
      </div>

      <div className="quote-progress" aria-hidden="true">
        {steps.map((label, index) => (
          <div
            key={label}
            className={`quote-progress__item ${
              index <= step ? "is-active" : ""
            }`}
          >
            <span />
            <small>{label}</small>
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} noValidate>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={data.company}
          onChange={(event) => update("company", event.target.value)}
          style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            className="quote-step"
            initial={reduced ? false : { opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? undefined : { opacity: 0, x: -26 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && (
              <>
                <p className="quote-question">
                  What are we putting <em>solar on?</em>
                </p>
                <div
                  className={`option-grid ${
                    errors.segment ? "is-invalid" : ""
                  }`}
                  role="radiogroup"
                  aria-label="Property type"
                >
                  {segments.map((segment) => (
                    <button
                      type="button"
                      key={segment.value}
                      role="radio"
                      aria-checked={data.segment === segment.value}
                      className={`option ${
                        data.segment === segment.value ? "is-selected" : ""
                      }`}
                      onClick={() => update("segment", segment.value)}
                    >
                      <b>{segment.label}</b>
                      <span>{segment.note}</span>
                    </button>
                  ))}
                </div>
                {errors.segment && (
                  <small className="field-error">{errors.segment}</small>
                )}

                <div className="field-row">
                  <div className={`field ${errors.ownership ? "is-invalid" : ""}`}>
                    <label htmlFor="q-ownership">Ownership</label>
                    <select
                      id="q-ownership"
                      value={data.ownership}
                      onChange={(event) => update("ownership", event.target.value)}
                      aria-invalid={Boolean(errors.ownership)}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="owned">Owned and occupied</option>
                      <option value="owned-rented">Owned, tenanted</option>
                      <option value="rented">Rented</option>
                      <option value="committee">Society / committee</option>
                    </select>
                    {errors.ownership && (
                      <small className="field-error">{errors.ownership}</small>
                    )}
                  </div>

                  <div className={`field ${errors.city ? "is-invalid" : ""}`}>
                    <label htmlFor="q-city">City</label>
                    <select
                      id="q-city"
                      value={data.city}
                      onChange={(event) => update("city", event.target.value)}
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
                    {errors.city && (
                      <small className="field-error">{errors.city}</small>
                    )}
                  </div>
                </div>

                <div className={`field ${errors.pincode ? "is-invalid" : ""}`}>
                  <label htmlFor="q-pincode">PIN code</label>
                  <input
                    id="q-pincode"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="6-digit PIN code"
                    autoComplete="postal-code"
                    value={data.pincode}
                    onChange={(event) =>
                      update("pincode", event.target.value.replace(/\D/g, ""))
                    }
                    aria-invalid={Boolean(errors.pincode)}
                  />
                  {errors.pincode && (
                    <small className="field-error">{errors.pincode}</small>
                  )}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <p className="quote-question">
                  Tell us about the <em>load.</em>
                </p>
                <div className={`field ${errors.bill ? "is-invalid" : ""}`}>
                  <label htmlFor="q-bill">Monthly electricity bill</label>
                  <select
                    id="q-bill"
                    value={data.bill}
                    onChange={(event) => update("bill", event.target.value)}
                    aria-invalid={Boolean(errors.bill)}
                  >
                    <option value="" disabled>
                      Select range
                    </option>
                    <option value="1500">Under ₹2,000</option>
                    <option value="3000">₹2,000 – ₹4,000</option>
                    <option value="6000">₹4,000 – ₹8,000</option>
                    <option value="11000">₹8,000 – ₹15,000</option>
                    <option value="18000">₹15,000 – ₹30,000</option>
                    <option value="40000">Above ₹30,000</option>
                    <option value="0">Not sure yet</option>
                  </select>
                  {errors.bill && (
                    <small className="field-error">{errors.bill}</small>
                  )}
                </div>

                <div className="field-row">
                  <div className={`field ${errors.roofType ? "is-invalid" : ""}`}>
                    <label htmlFor="q-roof">Roof type</label>
                    <select
                      id="q-roof"
                      value={data.roofType}
                      onChange={(event) => update("roofType", event.target.value)}
                      aria-invalid={Boolean(errors.roofType)}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="rcc">RCC terrace</option>
                      <option value="metal">Metal sheet</option>
                      <option value="tiles">Tiled / sloping</option>
                      <option value="ground">Ground mount</option>
                      <option value="unsure">Not sure</option>
                    </select>
                    {errors.roofType && (
                      <small className="field-error">{errors.roofType}</small>
                    )}
                  </div>

                  <div className={`field ${errors.roofArea ? "is-invalid" : ""}`}>
                    <label htmlFor="q-area">Usable roof area</label>
                    <select
                      id="q-area"
                      value={data.roofArea}
                      onChange={(event) => update("roofArea", event.target.value)}
                      aria-invalid={Boolean(errors.roofArea)}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="under-300">Under 300 sq ft</option>
                      <option value="300-600">300 – 600 sq ft</option>
                      <option value="600-1200">600 – 1,200 sq ft</option>
                      <option value="1200-2500">1,200 – 2,500 sq ft</option>
                      <option value="2500-plus">2,500+ sq ft</option>
                      <option value="unsure">Not sure</option>
                    </select>
                    {errors.roofArea && (
                      <small className="field-error">{errors.roofArea}</small>
                    )}
                  </div>
                </div>

                <div
                  className={`field ${errors.backup ? "is-invalid" : ""}`}
                  role="radiogroup"
                  aria-label="Battery backup"
                >
                  <label>Battery backup</label>
                  <div className="choice-row">
                    {[
                      ["none", "Not needed"],
                      ["essential", "Essential circuits"],
                      ["whole", "Whole property"],
                      ["unsure", "Advise me"],
                    ].map(([value, label]) => (
                      <button
                        type="button"
                        key={value}
                        role="radio"
                        aria-checked={data.backup === value}
                        className={`choice ${
                          data.backup === value ? "is-selected" : ""
                        }`}
                        onClick={() => update("backup", value)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  {errors.backup && (
                    <small className="field-error">{errors.backup}</small>
                  )}
                </div>

                <div
                  className={`field ${errors.timeline ? "is-invalid" : ""}`}
                  role="radiogroup"
                  aria-label="Timeline"
                >
                  <label>Timeline</label>
                  <div className="choice-row">
                    {[
                      ["now", "As soon as possible"],
                      ["1-3", "1–3 months"],
                      ["3-6", "3–6 months"],
                      ["research", "Still researching"],
                    ].map(([value, label]) => (
                      <button
                        type="button"
                        key={value}
                        role="radio"
                        aria-checked={data.timeline === value}
                        className={`choice ${
                          data.timeline === value ? "is-selected" : ""
                        }`}
                        onClick={() => update("timeline", value)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  {errors.timeline && (
                    <small className="field-error">{errors.timeline}</small>
                  )}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="quote-question">
                  Where do we send <em>the quote?</em>
                </p>
                <div className={`field ${errors.name ? "is-invalid" : ""}`}>
                  <label htmlFor="q-name">Your name</label>
                  <input
                    id="q-name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Rajesh Kumar"
                    value={data.name}
                    onChange={(event) => update("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <small className="field-error">{errors.name}</small>
                  )}
                </div>

                <div className="field-row">
                  <div className={`field ${errors.phone ? "is-invalid" : ""}`}>
                    <label htmlFor="q-phone">Mobile number</label>
                    <input
                      id="q-phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="10-digit mobile"
                      value={data.phone}
                      onChange={(event) => update("phone", event.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && (
                      <small className="field-error">{errors.phone}</small>
                    )}
                  </div>

                  <div className={`field ${errors.email ? "is-invalid" : ""}`}>
                    <label htmlFor="q-email">
                      Email <span style={{ opacity: 0.55 }}>(optional)</span>
                    </label>
                    <input
                      id="q-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={data.email}
                      onChange={(event) => update("email", event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                      <small className="field-error">{errors.email}</small>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="q-message">
                    Anything else? <span style={{ opacity: 0.55 }}>(optional)</span>
                  </label>
                  <textarea
                    id="q-message"
                    rows={3}
                    placeholder="Roof access, existing wiring, battery plans, deadlines…"
                    value={data.message}
                    onChange={(event) => update("message", event.target.value)}
                  />
                </div>

                <div className="quote-summary">
                  <span>Your brief</span>
                  <p>
                    {segments.find((item) => item.value === data.segment)?.label}
                    {" · "}
                    {data.city}
                    {data.bill && data.bill !== "0"
                      ? ` · ~₹${Number(data.bill).toLocaleString("en-IN")}/month`
                      : ""}
                    {data.backup ? ` · backup: ${data.backup}` : ""}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {status && (
          <p className="form-status" role="alert">
            {status}{" "}
            <a href={site.phoneHref} className="text-link">
              Call us
            </a>
          </p>
        )}

        <div className="quote-actions">
          {step > 0 ? (
            <button type="button" className="btn btn--line" onClick={back}>
              Back
            </button>
          ) : (
            <span className="quote-actions__note">
              No spam. No obligation. One call back.
            </span>
          )}

          {step < 2 ? (
            <button type="button" className="btn btn--sun" onClick={next}>
              Continue
              <ArrowUR />
            </button>
          ) : (
            <button type="submit" className="btn btn--sun" disabled={busy}>
              {busy ? "Sending…" : "Send my quote request"}
              <ArrowUR />
            </button>
          )}
        </div>

        <p className="form-note">
          Your details are used only to prepare this quote. We do not sell or
          share them.
        </p>
      </form>
    </div>
  );
}
