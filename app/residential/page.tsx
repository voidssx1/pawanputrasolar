import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionHead, { LinkArrow } from "@/components/section-head";
import Reveal from "@/components/reveal";
import FaqAccordion from "@/components/faq-accordion";
import ContactSection from "@/components/contact-section";
import { residentialFaqs } from "@/lib/faqs";
import { estimate, inr } from "@/lib/calculator";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Home Rooftop Solar",
  description:
    "Home rooftop solar in Delhi NCR: on-grid, hybrid and off-grid systems from 3 to 20 kW, with PM Surya Ghar subsidy and net metering handled.",
  alternates: { canonical: "/residential" },
};

const systems = [
  {
    tag: "Most common",
    title: "On-grid",
    body: "The simplest, lowest-cost route when outages are rare. Your solar runs the home by day and exports surplus to the grid.",
    points: ["No battery cost", "Net metering credits", "Lowest maintenance"],
  },
  {
    tag: "Outage-ready",
    title: "Hybrid",
    body: "Solar plus a battery for selected circuits. Lights, fans, internet and refrigeration keep running when the grid does not.",
    points: ["Battery backup", "Choose critical circuits", "Expandable later"],
  },
  {
    tag: "Off-grid",
    title: "Standalone",
    body: "For farmhouses or sites without a dependable connection. Sized around daily consumption and autonomy, not a grid tariff.",
    points: ["Battery bank", "Independent supply", "Careful load planning"],
  },
];

const included = [
  "Written, itemised proposal before payment",
  "Roof measurement and shade mapping",
  "Structural mounting with wind-rated fixings",
  "DC and AC protection, earthing and surge devices",
  "PM Surya Ghar subsidy application",
  "DISCOM net-metering coordination",
  "Monitoring app setup and handover",
  "5-year workmanship warranty",
];

const rows = [2000, 3000, 6000, 10000, 15000].map((bill) =>
  estimate(bill),
);

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Solar for homes"
        title={
          <>
            A home that <em>earns.</em>
          </>
        }
        lede="Rooftop solar sized from your bills and your roof — not a brochure. From the first measurement to the net meter, one team stays accountable."
        meta={[
          { label: "System range", value: "3–20 kW" },
          { label: "Timeline", value: "4–6 weeks" },
          { label: "Subsidy", value: "Up to ₹1.08 L" },
          { label: "Warranty", value: "25 yrs performance" },
        ]}
        image="/images/family-home.webp"
        imageAlt="An Indian family reading together in a sunlit living room"
        captionLeft="The point of solar is the life inside, not the hardware on top."
        captionRight="Residential · Delhi NCR"
        priority
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="01 — System types"
            title={
              <>
                Three ways to go <em>solar.</em>
              </>
            }
            lede="The right choice depends on your outage pattern, roof and budget. We recommend the simplest system that meets the brief."
          />
          <div className="model-grid">
            {systems.map((system) => (
              <Reveal className="model-card" key={system.title}>
                <span className="model-card__tag">{system.tag}</span>
                <h3>{system.title}</h3>
                <p>{system.body}</p>
                <ul>
                  {system.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <p className="note-strip">
            Most Delhi NCR homes are best served by on-grid or a modest hybrid.
            If you want backup for specific circuits, tell the surveyor — it is
            cheaper to plan it before the inverter is ordered.
          </p>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">02 — Scope</p>
          </div>
          <div className="split__body">
            <h2>
              What a Pawanputra installation <em>actually includes.</em>
            </h2>
            <p className="lede">
              A solar quote is easy to make look cheap. These are the pieces we
              refuse to leave out — and the pieces your subsidy approval
              depends on.
            </p>
            <ul className="check-list">
              {included.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="03 — The maths"
            title={
              <>
                A realistic <em>savings table.</em>
              </>
            }
            lede="These are indicative residential numbers for Delhi NCR, after central subsidy and the Delhi top-up. Your survey will confirm the final system size."
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
            *Indicative only: ₹8/unit, 4.2 units per kW per day, 90% bill
            offset, ₹58,000/kW installed cost, central subsidy up to ₹78,000
            plus Delhi top-up. Eligibility and final subsidy are confirmed by
            the DISCOM and the scheme portal.
          </p>
          <div className="mt-24">
            <LinkArrow href="/subsidy#calculator">Run your own numbers</LinkArrow>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="split">
            <div className="split__label">
              <p className="eyebrow">04 — Before you buy</p>
            </div>
            <div className="split__body">
              <h2>
                Five things worth checking in <em>any</em> solar quote.
              </h2>
              <div className="feature-grid">
                {[
                  {
                    n: "01",
                    t: "Panel and inverter models",
                    d: "Ask for the exact make, wattage and warranty document — not “Tier-1” as a phrase.",
                  },
                  {
                    n: "02",
                    t: "Mounting and cable routing",
                    d: "Rails, clamps, earthing and conduit should be specified. This is where cheap installations hide.",
                  },
                  {
                    n: "03",
                    t: "Subsidy responsibility",
                    d: "Confirm in writing who files, who follows up and what happens if the application is delayed.",
                  },
                  {
                    n: "04",
                    t: "Shade and layout study",
                    d: "A single shaded panel can pull down a whole string. The layout should account for the water tank, trees and parapets.",
                  },
                  {
                    n: "05",
                    t: "Service after handover",
                    d: "Cleaning, monitoring and an annual electrical check matter more in Delhi's dust than most brochures admit.",
                  },
                  {
                    n: "06",
                    t: "The payment schedule",
                    d: "Tie payments to milestones: material dispatch, installation, net meter and handover. Avoid large advance-only demands.",
                  },
                ].map((feature) => (
                  <Reveal className="feature" key={feature.n}>
                    <span className="feature__num">{feature.n}</span>
                    <h3>{feature.t}</h3>
                    <p>{feature.d}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container faq-grid">
          <div className="faq-side">
            <p className="eyebrow">05 — Home FAQs</p>
            <h2>
              Before the <em>first call.</em>
            </h2>
            <p>
              The answers we give on the phone, written down. Still unsure?
              Call us on{" "}
              <a className="text-link" href="tel:+919805845213">
                +91 98058 45213
              </a>
              .
            </p>
            <Link className="link-arrow" href="/process#faqs">
              More FAQs
            </Link>
          </div>
          <FaqAccordion items={residentialFaqs} />
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Have a roof in mind? <em>Let’s measure it.</em>
          </>
        }
        lede="A free survey tells you what the roof can carry, where the array should sit and what the system will realistically save."
        formHeading="Book a home survey"
        formEyebrow="Free · no obligation"
      />
    </>
  );
}
