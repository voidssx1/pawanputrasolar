import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionHead, { LinkArrow } from "@/components/section-head";
import Reveal from "@/components/reveal";
import FaqAccordion from "@/components/faq-accordion";
import ContactSection from "@/components/contact-section";
import { societyFaqs } from "@/lib/faqs";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Solar for Housing Societies",
  description:
    "Common-area rooftop solar for housing societies and apartment complexes in Delhi NCR. 30–500 kW systems with AGM, NOC and DISCOM support.",
  alternates: { canonical: "/societies" },
};

const benefits = [
  "Lifts, pumps and corridor lighting move to solar",
  "Common-meter consumption falls from day one",
  "Predictable generation reports for residents",
  "Lower maintenance-charge pressure",
  "A visible, fundable sustainability upgrade",
  "Shade planning across multiple tower roofs",
];

const models = [
  {
    tag: "Society-owned",
    title: "CAPEX",
    body: "The society funds the system and owns the savings. Best where the sinking fund or a one-time contribution is available.",
    points: ["Full savings to the society", "Asset on society books", "Simple long-term ownership"],
  },
  {
    tag: "Developer-owned",
    title: "OPEX / lease",
    body: "A third party installs and owns the system; the society buys solar power at an agreed rate for the term.",
    points: ["No large upfront outflow", "Fixed or indexed tariff", "Defined handover terms"],
  },
  {
    tag: "Resident benefit",
    title: "Shared savings",
    body: "Savings can reduce maintenance charges, fund repairs or build a reserve. The committee decides the accounting.",
    points: ["Transparent monthly reporting", "Committee-controlled use", "Resident communication pack"],
  },
];

const steps = [
  {
    n: "01",
    t: "Preliminary roof study",
    d: "We review Google imagery, common-meter data and roof access, then shortlist viable roofs and sizes.",
    time: "Week 1",
  },
  {
    n: "02",
    t: "AGM presentation",
    d: "A clear proposal with generation, savings, ownership model and draft resolution for the committee.",
    time: "Week 2–3",
  },
  {
    n: "03",
    t: "Detailed survey & design",
    d: "Structural checks, shade mapping, cable routes and a 3D layout across the selected roofs.",
    time: "Week 3–4",
  },
  {
    n: "04",
    t: "Approvals & installation",
    d: "DISCOM NOC, interconnection application, safety plan and phased installation with minimal disruption.",
    time: "Week 5–10",
  },
  {
    n: "05",
    t: "Reporting & service",
    d: "Monthly generation and offset reports, cleaning schedules and an annual performance review.",
    time: "Ongoing",
  },
];

export default function SocietiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solar for housing societies"
        title={
          <>
            Savings for the <em>whole building.</em>
          </>
        }
        lede="Put common-area loads on daylight. We design, install and maintain society solar — and handle the AGM, NOC and DISCOM trail that usually stalls it."
        meta={[
          { label: "System range", value: "30–500 kW" },
          { label: "Typical roofs", value: "Clubhouse + towers" },
          { label: "Model", value: "CAPEX or OPEX" },
          { label: "Support", value: "AGM · NOC · DISCOM" },
        ]}
        image="/images/society-aerial.webp"
        imageAlt="Aerial view of solar arrays on apartment society rooftops in Delhi NCR"
        captionLeft="Common-area solar · NCR society"
        captionRight="Representative installation"
        priority
      />

      <section className="section">
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">01 — The case</p>
          </div>
          <div className="split__body">
            <h2>
              The common meter is the <em>quiet leak.</em>
            </h2>
            <p className="lede">
              Lifts, pumps, corridor lights and clubhouse air-conditioning run
              through the day — exactly when solar generates. A common-area
              array offsets that load without touching individual resident
              connections.
            </p>
            <ul className="check-list">
              {benefits.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <p className="note-strip">
              Society solar works best when the common meter is separate and
              the roof has unshaded area. We confirm both before proposing a
              size.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container">
          <SectionHead
            eyebrow="02 — Who owns what"
            title={
              <>
                Three ways a society can <em>structure it.</em>
              </>
            }
            lede="Ownership affects cash flow, accounting and how savings reach residents. We model the options for your committee."
          />
          <div className="model-grid">
            {models.map((model) => (
              <Reveal className="model-card" key={model.title}>
                <span className="model-card__tag">{model.tag}</span>
                <h3>{model.title}</h3>
                <p>{model.body}</p>
                <ul>
                  {model.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="03 — The route"
            title={
              <>
                From AGM to <em>meter reading.</em>
              </>
            }
            lede="A society decision involves more people than a home. This is the sequence we run, with the committee in the loop at every step."
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
          <div className="mt-40" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link className="btn" href="/contact">
              Request an AGM proposal
            </Link>
            <LinkArrow href="/projects">See a society scenario</LinkArrow>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container faq-grid">
          <div className="faq-side">
            <p className="eyebrow">04 — Society FAQs</p>
            <h2>
              Questions from the <em>committee room.</em>
            </h2>
            <p>
              Approvals, common-meter accounting, roof access and resident
              communication — answered plainly.
            </p>
          </div>
          <FaqAccordion items={societyFaqs} />
        </div>
      </section>

      <ContactSection
        heading={
          <>
            A better line item for the <em>AGM.</em>
          </>
        }
        lede="Send us the society name, tower count and approximate common-area bill. We will prepare a first-pass proposal for the committee."
        formHeading="Request a society proposal"
        formEyebrow="Society desk"
      />
    </>
  );
}
