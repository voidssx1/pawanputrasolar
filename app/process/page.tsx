import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionHead, { LinkArrow } from "@/components/section-head";
import Reveal from "@/components/reveal";
import FaqAccordion from "@/components/faq-accordion";
import ContactSection from "@/components/contact-section";
import { processFaqs } from "@/lib/faqs";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The Pawanputra process: free roof survey, system design, subsidy and DISCOM approvals, installation, net metering and handover in 4–6 weeks.",
  alternates: { canonical: "/process" },
};

const steps = [
  {
    n: "01",
    t: "Free roof survey",
    d: "A trained surveyor measures the roof, checks the electrical panel and meter, photographs the mounting points and maps shade through the day. You get a straight answer on what the roof can carry — before any money changes hands.",
    time: "Day 1–2",
  },
  {
    n: "02",
    t: "System design & proposal",
    d: "We size the array from your consumption, choose the inverter and layout, and produce an itemised proposal with a conservative generation range. If a smaller system serves you better, we say so.",
    time: "Day 3–5",
  },
  {
    n: "03",
    t: "Subsidy & DISCOM application",
    d: "The PM Surya Ghar application, feasibility approval and net-metering file are prepared and submitted. We keep the reference numbers and follow up; you sign where required.",
    time: "Week 1–2",
  },
  {
    n: "04",
    t: "Installation",
    d: "Material is checked against the approved bill of materials, then installation is sequenced around your routine. Rails, earthing, conduit and protection are completed before panels go up.",
    time: "Week 2–4",
  },
  {
    n: "05",
    t: "Inspection & net meter",
    d: "The DISCOM inspects the installation and installs the net meter. We coordinate the visit, correct any observations and confirm the commissioning report.",
    time: "Week 4–5",
  },
  {
    n: "06",
    t: "Handover & service",
    d: "A walkthrough of the system, the monitoring app and the warranty file. Cleaning and performance checks follow on an agreed schedule — the relationship does not end at commissioning.",
    time: "Week 5–6",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            Four to six weeks. <em>No runaround.</em>
          </>
        }
        lede="Solar is a 25-year decision made in a few weeks. This is the sequence we run — who does what, what it takes, and where timelines can slip."
        meta={[
          { label: "Typical timeline", value: "4–6 weeks" },
          { label: "Site surveys", value: "Free, no obligation" },
          { label: "Paperwork", value: "Handled by us" },
          { label: "Workmanship", value: "5-year warranty" },
        ]}
        image="/images/crew-install.webp"
        imageAlt="Two technicians installing solar panels on a Delhi rooftop"
        captionLeft="Installation day · Delhi NCR"
        captionRight="Safety gear, planned cable routes"
        priority
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="01 — The sequence"
            title={
              <>
                From first measurement to <em>first unit.</em>
              </>
            }
            lede="Every project gets a named project manager, a written schedule and a single point of contact. No handoffs between sales and execution."
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

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">02 — Your part</p>
          </div>
          <div className="split__body">
            <h2>
              What we need from you — <em>and what we handle.</em>
            </h2>
            <div className="feature-grid" style={{ marginTop: 0 }}>
              <div className="feature" style={{ background: "var(--paper)" }}>
                <span className="feature__num">You provide</span>
                <h3 style={{ marginTop: 14 }}>The basics</h3>
                <ul style={{ display: "grid", gap: 8, fontSize: 13, color: "var(--ink-soft)" }}>
                  {[
                    "Recent electricity bill",
                    "Roof access for the survey",
                    "Proof of ownership or NOC",
                    "A decision-maker for approvals",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: 8 }}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature" style={{ background: "var(--paper)" }}>
                <span className="feature__num">We handle</span>
                <h3 style={{ marginTop: 14 }}>The rest</h3>
                <ul style={{ display: "grid", gap: 8, fontSize: 13, color: "var(--ink-soft)" }}>
                  {[
                    "Design, BOQ and structural checks",
                    "Subsidy and DISCOM paperwork",
                    "Installation, safety and commissioning",
                    "Monitoring, cleaning and service",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: 8 }}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feature" style={{ background: "var(--paper)" }}>
                <span className="feature__num">Honest note</span>
                <h3 style={{ marginTop: 14 }}>What can slow it down</h3>
                <ul style={{ display: "grid", gap: 8, fontSize: 13, color: "var(--ink-soft)" }}>
                  {[
                    "DISCOM inspection queues",
                    "Society AGM or NOC timelines",
                    "Structural strengthening, if needed",
                    "Monsoon and unsafe roof conditions",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", gap: 8 }}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="note-strip">
              We would rather tell you about a delay than quietly miss a date.
              Your project manager shares status at each milestone.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="container faq-grid">
          <div className="faq-side">
            <p className="eyebrow">03 — Process FAQs</p>
            <h2>
              The details that <em>matter.</em>
            </h2>
            <p>
              Survey, timelines, warranties, outages and roof suitability. If
              your question is missing, call{" "}
              <a className="text-link" href="tel:+919805845213">
                +91 98058 45213
              </a>
              .
            </p>
            <LinkLink />
          </div>
          <FaqAccordion items={processFaqs} defaultOpen={-1} />
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Book the <em>first visit.</em>
          </>
        }
        lede="The survey is free and carries no obligation. You will know what the roof can carry, what it will cost and what it will save."
        formHeading="Book a free survey"
        formEyebrow="4–6 week timeline"
        formNote="We will call within one working day to confirm a suitable slot."
      />
    </>
  );
}

function LinkLink() {
  return (
    <Link className="link-arrow" href="/subsidy">
      Check subsidy eligibility
    </Link>
  );
}
