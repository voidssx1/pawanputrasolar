import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import QuoteForm from "@/components/quote-form";
import Reveal from "@/components/reveal";
import SectionHead from "@/components/section-head";
import { Check, Clock, Phone, Pin } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Detailed Solar Quote",
  description:
    "A three-step quote request for rooftop solar in Delhi NCR — property, load and contact details. No obligation, no call-centre.",
  alternates: { canonical: "/quote" },
};

const includes = [
  "A written system size and panel layout after survey",
  "Itemised pricing: modules, inverter, structure, cabling, net metering",
  "The eligible subsidy amount shown separately",
  "A generation estimate based on your actual consumption",
  "A named project contact — not a rotating sales desk",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Detailed quote"
        title={
          <>
            Three steps.
            <br />
            <em>A proper number.</em>
          </>
        }
        lede="Enough detail to size the system honestly — property, load, roof and contact. Two minutes now saves a week of guesswork."
        meta={[
          { label: "Time", value: "About 2 minutes" },
          { label: "Steps", value: "3" },
          { label: "Cost", value: "Free" },
          { label: "Response", value: "1 working day" },
        ]}
      />

      <section className="section quote-section">
        <div className="container quote-layout">
          <div className="quote-side">
            <p className="eyebrow">What you get</p>
            <h2>
              A quote built from <em>your roof.</em>
            </h2>
            <p>
              We do not send a per-kilowatt rate card and call it a quote. The
              brief below tells us what to check before anyone visits.
            </p>
            <ul className="check-list check-list--single">
              {includes.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>

            <div className="quote-contact">
              <a href={site.phoneHref}>
                <Phone />
                <span>
                  <small>Prefer to talk?</small>
                  {site.phoneDisplay}
                </span>
              </a>
              <p>
                <Pin />
                {site.address.line1}, {site.address.line2}, {site.address.city}{" "}
                {site.address.pin}
              </p>
              <p>
                <Clock />
                {site.hours}
              </p>
            </div>
          </div>

          <div className="quote-form-wrap">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container">
          <SectionHead
            eyebrow="After you send"
            title={
              <>
                What happens <em>next.</em>
              </>
            }
            lede="Three working steps. No drip campaign, no repeated calls unless you ask for them."
          />
          <div className="process-list">
            {[
              {
                n: "01",
                t: "We read the brief",
                d: "An engineer checks the city, bill, roof type and backup preference, then calls once to fill the gaps.",
                time: "Within 1 working day",
              },
              {
                n: "02",
                t: "Free roof survey",
                d: "Measurement, shade mapping and meter-room check. You get a straight answer on what the roof can carry.",
                time: "Day 2–4",
              },
              {
                n: "03",
                t: "Written quote",
                d: "Panel layout, generation estimate, itemised cost, subsidy and net-metering responsibility — in one document.",
                time: "Day 4–5",
              },
            ].map((step) => (
              <Reveal className="process-row" key={step.n}>
                <span className="process-row__num">{step.n}</span>
                <h3>{step.t}</h3>
                <div className="process-row__body">
                  <p>{step.d}</p>
                  <span>{step.time}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
