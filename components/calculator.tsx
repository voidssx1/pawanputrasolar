"use client";

import { useId, useMemo, useState } from "react";
import { estimate, inr } from "@/lib/calculator";
import { site } from "@/lib/site";
import { Phone } from "@/components/icons";

type CalculatorProps = {
  compact?: boolean;
  initialBill?: number;
};

export default function Calculator({
  compact = false,
  initialBill = 3000,
}: CalculatorProps) {
  const id = useId();
  const [bill, setBill] = useState(initialBill);
  const [battery, setBattery] = useState(false);

  const result = useMemo(() => estimate(bill, battery), [bill, battery]);
  const pct = ((bill - 500) / (20000 - 500)) * 100;
  const subsidyShare = result.total
    ? Math.min(100, Math.round((result.subsidy / result.total) * 100))
    : 0;

  return (
    <div className="calc-panel">
      <div className="calc-topline">
        <div>
          <label htmlFor={`${id}-bill`}>Average monthly bill</label>
          <small>Slide to your usual electricity bill</small>
        </div>
        <output className="calc-bill" htmlFor={`${id}-bill`}>
          {inr(bill)}
        </output>
      </div>

      <div className="calc-range">
        <input
          id={`${id}-bill`}
          type="range"
          min={500}
          max={20000}
          step={100}
          value={bill}
          onChange={(event) => setBill(Number(event.target.value))}
          style={{ "--p": `${pct}%` } as React.CSSProperties}
          aria-valuetext={`${inr(bill)} per month`}
        />
        <div className="calc-scale">
          <span>₹500</span>
          <span>₹20,000</span>
        </div>
      </div>

      <div className="calc-battery">
        <div className="calc-battery__copy">
          <strong>Add battery backup</strong>
          <span>Keep essentials running during outages</span>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={battery}
          aria-label="Add battery backup"
          className="switch"
          onClick={() => setBattery((value) => !value)}
        />
      </div>

      <div className="calc-investment" aria-live="polite">
        <div>
          <label>Your investment after subsidy</label>
          <b>{inr(result.net)}</b>
        </div>
        <small>
          {result.batteryCost ? (
            <>
              incl. {inr(result.batteryCost)} battery
              <br />
            </>
          ) : null}
          <s>{inr(result.gross)}</s> − {inr(result.subsidy)} subsidy
        </small>
      </div>

      <div className="calc-stats">
        <div className="calc-stat">
          <span>Monthly saving</span>
          <b className="green">{inr(result.monthlySaving)}</b>
        </div>
        <div className="calc-stat">
          <span>New monthly bill</span>
          <b>{inr(result.newBill)}</b>
        </div>
        <div className="calc-stat">
          <span>System size</span>
          <b>{result.kw % 1 === 0 ? result.kw : result.kw.toFixed(1)} kW</b>
        </div>
        <div className="calc-stat">
          <span>Est. payback</span>
          <b>{result.payback.toFixed(1)} yrs</b>
        </div>
      </div>

      <div className="calc-bar" aria-hidden="true">
        <i style={{ width: `${subsidyShare}%` }} />
        <i style={{ width: `${100 - subsidyShare}%` }} />
      </div>
      <div className="calc-legend" aria-hidden="true">
        <span>Subsidy</span>
        <span>You pay</span>
      </div>

      <a className="btn btn--sun btn--full" href={site.phoneHref}>
        Get this plan on call
        <Phone />
      </a>

      {result.batteryCost ? (
        <p className="calc-note">
          Battery backup included at an indicative {inr(30000)}/kW.
        </p>
      ) : null}

      {!compact && (
        <p className="calc-disclaimer">
          Indicative only. Assumes ₹8/unit, 4.2 units per kW per day and a
          Delhi/NCR state top-up. Final numbers are confirmed after a free roof
          survey. Subsidy rules vary by state and eligibility.
        </p>
      )}
    </div>
  );
}
