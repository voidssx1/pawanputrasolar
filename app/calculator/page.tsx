import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import Calculator from "@/components/calculator";
import SectionHead, { LinkArrow } from "@/components/section-head";
import ContactSection from "@/components/contact-section";
import FaqAccordion from "@/components/faq-accordion";
import { estimate, inr } from "@/lib/calculator";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Solar Savings Calculator",
  description:
    "Estimate rooftop solar system size, PM Surya Ghar subsidy, monthly saving and payback for Delhi NCR — with or without battery backup.",
  alternates: { canonical: "/calculator" },
};

const rows = [2000, 3000, 6000, 10000, 15000].map((bill) =>
  estimate(bill, false),
);

const assumptions = [
  "A generation model of 4.2 units per kW per day, before shading losses.",
  "A retail rate of about ₹8 per unit for Delhi NCR calculations.",
  "An installed cost of about ₹58,000 per kW for residential systems.",
  "Central subsidy up to ₹78,000 plus the Delhi top-up where applicable.",
  "90% of the bill offset by solar in the first year.",
];

const faqs = [
  {
    q: "Why does the calculator ask for a bill instead of a roof size?",
    a: "Your consumption is the honest starting point. A roof can often hold more panels than your bill justifies, and oversizing strands capital.",
  },
  {
    q: "Does the estimate include the subsidy?",
    a: "Yes — the investment figure is shown after central subsidy and, for Delhi, the state top-up. The gross price before subsidy is shown alongside it.",
  },
  {
    q: "How accurate is the battery option?",
    a: "It adds a modelled battery cost per kWh and does not change the solar generation. The real battery size depends on which circuits you want to keep running.",
  },
  {
    q: "What happens after I get an estimate?",
    a: "You can share the enquiry with us or simply use the number to compare quotes. A free survey confirms the layout, shading and final size.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Savings calculator"
        title={
          <>
            Start with the <em>bill.</em>
          </>
        }
        lede="Move the slider to your usual monthly bill. We will model system size, subsidy, monthly saving and payback before you speak to anyone."
        meta={[
          { label: "No sign-up", value: "Instant result" },
          { label: "Battery", value: "Optional" },
          { label: "Subsidy", value: "Delhi NCR modelled" },
          { label: "Accuracy", value: "Indicative" },
        ]}
      />

      <section className="section calc-section" id="calculator">
        <div className="container calc-grid">
          <Reveal className="calc-copy">
            <p className="eyebrow">01 — Your numbers</p>
            <h2>
              A realistic <em>starting point.</em>
            </h2>
            <p>
              No phone number, no email gate. The model is deliberately
              conservative; a shaded roof or an unusual tariff will move the
              answer, and the survey closes that gap.
            </p>
            <ul className="calc-points">
              <li>Central subsidy and Delhi top-up modelled</li>
              <li>Battery backup added or removed in one tap</li>
              <li>Payback based on net investment, not gross price</li>
              <li>Typical sizes from 1 to 10 kW</li>
            </ul>
            <div className="mt-24">
              <LinkArrow href="/quote">Turn this into a quote</LinkArrow>
            </div>
          </Reveal>
          <Reveal delay={0.1} y={18}>
            <Calculator />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container">
          <SectionHead
            eyebrow="02 — The maths"
            title={
              <>
                Five bills, <em>five answers.</em>
              </>
            }
            lede="Indicative residential numbers for Delhi NCR, after central subsidy and the Delhi top-up. Your survey confirms the final size."
          />
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Monthly bill</th>
                  <th>System size</th>
                  <th>Subsidy</th>
                  <th>Net investment</th>
                  <th>Monthly saving*</th>
                  <th>Payback</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.bill}>
                    <td>{inr(row.bill)}</td>
                    <td>
                      <b>{row.kw} kW</b>
                    </td>
                    <td>{inr(row.subsidy)}</td>
                    <td>
                      <b>{inr(row.net)}</b>
                    </td>
                    <td>{inr(row.monthlySaving)}</td>
                    <td>{row.payback.toFixed(1)} yrs</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note-strip">
            *Indicative only. The full set of assumptions is below. Subsidy
            eligibility, DISCOM charges and final system size are confirmed in
            writing after a survey.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">03 — Assumptions</p>
          </div>
          <div className="split__body">
            <h2>
              What the model <em>assumes.</em>
            </h2>
            <p className="lede">
              We publish the working so you can challenge it. Any honest quote
              should survive a look at the assumptions.
            </p>
            <ul className="check-list">
              {assumptions.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-40">
              <p className="eyebrow">What moves the answer</p>
              <ul className="calc-points mt-24">
                <li>Shading from trees, tanks and neighbouring floors</li>
                <li>Your DISCOM tariff and fixed charges</li>
                <li>Roof orientation and tilt</li>
                <li>How much of the daytime load is actually yours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight on-dark">
        <div className="container">
          <div className="split">
            <div className="split__label">
              <p className="eyebrow">04 — Free survey</p>
            </div>
            <div className="split__body">
              <h2>
                The calculator is the start. <em>The roof decides the rest.</em>
              </h2>
              <p className="lede">
                A surveyor measures usable area, maps shade through the day and
                checks the meter room. You get a written layout and an itemised
                quote — not a revised guess.
              </p>
              <div className="stack-16">
                <LinkArrow href="/quote">Book the detailed quote</LinkArrow>
                <LinkArrow href="/guides/right-size-rooftop">
                  Read the sizing guide
                </LinkArrow>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container faq-grid">
          <div className="faq-side">
            <p className="eyebrow">05 — Calculator FAQs</p>
            <h2>
              Honest <em>caveats.</em>
            </h2>
            <p>
              The estimate is a planning tool. Use it to sanity-check a quote,
              not to replace a survey.
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Get the number <em>checked.</em>
          </>
        }
        lede="Send the bill and the city. We will confirm the size, the subsidy and the net cost before you commit to a survey slot."
        formHeading="Check my estimate"
        formEyebrow="Free · one call"
      />
    </>
  );
}
