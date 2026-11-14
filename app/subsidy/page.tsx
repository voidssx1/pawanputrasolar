import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionHead, { LinkArrow } from "@/components/section-head";
import Calculator from "@/components/calculator";
import FaqAccordion from "@/components/faq-accordion";
import ContactSection from "@/components/contact-section";
import Reveal from "@/components/reveal";
import { subsidyFaqs } from "@/lib/faqs";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Subsidy & Pricing",
  description:
    "PM Surya Ghar subsidy explained for Delhi NCR: ₹30,000 per kW up to 2 kW, ₹18,000 for the third kW, ₹78,000 cap, and Delhi's top-up up to ₹1.08 lakh for 3 kW.",
  alternates: { canonical: "/subsidy" },
};

const slabs = [
  { size: "1 kW", central: "₹30,000", state: "₹10,000", total: "₹40,000" },
  { size: "2 kW", central: "₹60,000", state: "₹20,000", total: "₹80,000" },
  { size: "3 kW", central: "₹78,000", state: "₹30,000", total: "₹1,08,000" },
  { size: "Above 3 kW", central: "₹78,000 cap", state: "Top-up capped", total: "Up to ₹1,08,000" },
];

const steps = [
  {
    n: "01",
    t: "Apply through a registered vendor",
    d: "The application is filed on the national portal with your consumer number, roof details and chosen system size. We prepare it with you.",
    time: "Day 1",
  },
  {
    n: "02",
    t: "Feasibility & approval",
    d: "The DISCOM reviews the connection and sanctions the capacity. This is where queue times vary most between circles.",
    time: "1–3 weeks",
  },
  {
    n: "03",
    t: "Install and commission",
    d: "The system is installed to the approved design, tested and commissioned. Photographs and test reports are uploaded.",
    time: "2–4 weeks",
  },
  {
    n: "04",
    t: "Net meter & inspection",
    d: "The DISCOM inspects the installation and installs the bidirectional meter. The commissioning certificate completes the file.",
    time: "1–2 weeks",
  },
  {
    n: "05",
    t: "Subsidy disbursement",
    d: "The subsidy is credited to the homeowner's bank account after verification. Timelines depend on the portal and DISCOM.",
    time: "Varies",
  },
];

export default function SubsidyPage() {
  return (
    <>
      <PageHero
        eyebrow="Subsidy & pricing"
        title={
          <>
            The subsidy, <em>unpacked.</em>
          </>
        }
        lede="PM Surya Ghar can cover a meaningful slice of a home system. The rules are specific, the caps are real, and the paperwork is where most applications stall. Here is the honest picture for Delhi NCR."
        meta={[
          { label: "Central cap", value: "₹78,000" },
          { label: "Delhi top-up", value: "Up to ₹30,000" },
          { label: "3 kW total", value: "Up to ₹1.08 L" },
          { label: "Who files", value: "We do" },
        ]}
        image="/images/dusk-home.webp"
        imageAlt="A modern Indian home at dusk with rooftop solar panels"
        captionLeft="Residential rooftop · Delhi NCR"
        captionRight="Scheme rules reviewed November 2026"
        priority
      />

      <section className="section">
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">01 — The basics</p>
          </div>
          <div className="split__body">
            <h2>
              A capital subsidy, <em>not a discount.</em>
            </h2>
            <p className="lede">
              Under PM Surya Ghar: Muft Bijli Yojana, eligible residential
              consumers receive central financial assistance based on the
              sanctioned system size. Delhi adds a state top-up for eligible
              connections. The money is disbursed after installation,
              inspection and net-meter commissioning — not at the time of sale.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>System size</th>
                    <th>Central support</th>
                    <th>Delhi top-up*</th>
                    <th>Indicative total</th>
                  </tr>
                </thead>
                <tbody>
                  {slabs.map((row) => (
                    <tr key={row.size}>
                      <td>
                        <b>{row.size}</b>
                      </td>
                      <td>{row.central}</td>
                      <td>{row.state}</td>
                      <td>
                        <b>{row.total}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note-strip">
              *State top-up is subject to Delhi government rules and
              availability. Central support for residential systems is capped at
              ₹78,000. Commercial and society common-area systems follow
              separate schemes and do not receive the residential subsidy.
              Always confirm current rules on the official portal before
              committing.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">02 — Eligibility</p>
          </div>
          <div className="split__body">
            <h2>
              Who can actually <em>claim it.</em>
            </h2>
            <div className="feature-grid" style={{ marginTop: 0 }}>
              <div className="feature" style={{ background: "var(--paper)" }}>
                <span className="feature__num">Eligibility</span>
                <h3 style={{ marginTop: 12 }}>The essentials</h3>
                <ul style={{ display: "grid", gap: 8, fontSize: 13, color: "var(--ink-soft)" }}>
                  {[
                    "Indian homeowner",
                    "Own or have clear rights to the roof",
                    "Active residential electricity connection",
                    "Installation through a registered vendor",
                    "Net metering enabled by the DISCOM",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: 8 }}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature" style={{ background: "var(--paper)" }}>
                <span className="feature__num">Documents</span>
                <h3 style={{ marginTop: 12 }}>Keep these handy</h3>
                <ul style={{ display: "grid", gap: 8, fontSize: 13, color: "var(--ink-soft)" }}>
                  {[
                    "Latest electricity bill",
                    "Identity and address proof",
                    "Proof of roof ownership / NOC",
                    "Bank account details",
                    "Roof photographs for the portal",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: 8 }}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature" style={{ background: "var(--paper)" }}>
                <span className="feature__num">Watch-outs</span>
                <h3 style={{ marginTop: 12 }}>Common reasons for delay</h3>
                <ul style={{ display: "grid", gap: 8, fontSize: 13, color: "var(--ink-soft)" }}>
                  {[
                    "Name mismatch across bill and bank",
                    "Unapproved vendor or system change",
                    "Missing commissioning documents",
                    "DISCOM inspection queue",
                    "Duplicate application on one connection",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: 8 }}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="03 — The sequence"
            title={
              <>
                How the money <em>actually moves.</em>
              </>
            }
            lede="The subsidy is a reimbursement process, not an upfront discount. Knowing the order of events avoids unpleasant surprises."
          />
          <div className="process-list">
            {steps.map((step) => (
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

      <section className="section calc-section" id="calculator">
        <div className="container calc-grid">
          <div className="calc-copy">
            <p className="eyebrow">04 — Calculator</p>
            <h2>
              Put your bill <em>in.</em>
            </h2>
            <p>
              The calculator models central support, a Delhi top-up and a
              90% bill offset. It is a planning tool, not a quotation — the
              survey and DISCOM sanction decide the final numbers.
            </p>
            <ul className="calc-points">
              <li>₹30,000/kW for the first 2 kW</li>
              <li>₹18,000 for the third kW</li>
              <li>₹78,000 central cap</li>
              <li>Delhi top-up modelled up to 3 kW</li>
            </ul>
            <p style={{ marginTop: 22, fontSize: 12 }}>
              Questions about eligibility?{" "}
              <a className="text-link" href="tel:+919805845213" style={{ color: "var(--sun)" }}>
                Call +91 98058 45213
              </a>
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      <section className="section">
        <div className="container faq-grid">
          <div className="faq-side">
            <p className="eyebrow">05 — Subsidy FAQs</p>
            <h2>
              Before you <em>count on it.</em>
            </h2>
            <p>
              Eligibility, calculation, timing and batteries. The answers that
              keep expectations honest.
            </p>
            <Link className="link-arrow" href="/process">
              See the full process
            </Link>
          </div>
          <FaqAccordion items={subsidyFaqs} />
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Claim it once. <em>Claim it right.</em>
          </>
        }
        lede="We prepare the application, coordinate the DISCOM file and keep the documents moving. You sign where needed — we handle the queue."
        formHeading="Check my eligibility"
        formEyebrow="Subsidy desk"
      />
    </>
  );
}
