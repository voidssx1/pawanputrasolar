import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionHead, { LinkArrow } from "@/components/section-head";
import Reveal from "@/components/reveal";
import FaqAccordion from "@/components/faq-accordion";
import ContactSection from "@/components/contact-section";
import { commercialFaqs } from "@/lib/faqs";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Commercial Solar",
  description:
    "Commercial and industrial rooftop solar in Delhi NCR. 50 kW to 1 MW+ systems with capex, OPEX and PPA models, engineering and monitoring.",
  alternates: { canonical: "/commercial" },
};

const models = [
  {
    tag: "Own it",
    title: "Capex",
    body: "You fund and own the asset. The cleanest long-term economics if you have the capital and can use depreciation benefits.",
    points: ["Full savings retained", "Accelerated depreciation potential", "Asset on your books"],
  },
  {
    tag: "Lower upfront",
    title: "OPEX / lease",
    body: "A developer owns the system and you pay for the solar power or lease the asset. Lower initial outflow, shared economics.",
    points: ["Minimal capex", "Fixed or indexed tariff", "Defined term and buyout"],
  },
  {
    tag: "Zero investment",
    title: "PPA",
    body: "Buy solar units at an agreed discount to the grid tariff for the term of the agreement. The developer carries the asset.",
    points: ["No upfront cost", "Discounted units", "Long-term contract"],
  },
];

const sizes = [
  { size: "50 kW", area: "4,500–5,500 sq ft", cost: "₹18–25 L", gen: "~76,000 units/yr" },
  { size: "100 kW", area: "9,000–11,000 sq ft", cost: "₹30–45 L", gen: "~1.53 L units/yr" },
  { size: "250 kW", area: "22,000–27,000 sq ft", cost: "₹75 L–1.2 Cr", gen: "~3.8 L units/yr" },
  { size: "500 kW", area: "45,000–55,000 sq ft", cost: "₹1.5–2.5 Cr", gen: "~7.6 L units/yr" },
  { size: "1 MW", area: "90,000–1.1 L sq ft", cost: "₹3–5 Cr", gen: "~15.3 L units/yr" },
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Solar for businesses"
        title={
          <>
            Power for the <em>shop floor.</em>
          </>
        }
        lede="Industrial-grade rooftop solar for factories, warehouses and offices across Delhi NCR — engineered around your load profile, not a generic kW number."
        meta={[
          { label: "System range", value: "50 kW – 1 MW+" },
          { label: "Ownership", value: "Capex · OPEX · PPA" },
          { label: "Design", value: "3D layout + shade study" },
          { label: "Monitoring", value: "String-level alerts" },
        ]}
        image="/images/commercial-roof.webp"
        imageAlt="Aerial view of a large warehouse rooftop solar installation"
        captionLeft="Commercial rooftop · NCR industrial belt"
        captionRight="Representative installation"
        priority
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="01 — Where it fits"
            title={
              <>
                A roof with a <em>day job.</em>
              </>
            }
            lede="Commercial solar works best where consumption and generation overlap. We model the load before we recommend a single panel."
          />
          <div className="feature-grid">
            {[
              {
                n: "01",
                t: "Factories & manufacturing",
                d: "Day-shift loads, motor-heavy demand and large sheds. Phased installation around production windows.",
              },
              {
                n: "02",
                t: "Warehouses & logistics",
                d: "Expansive metal roofs, predictable daytime load and good structural access for ballasted or rail-mounted arrays.",
              },
              {
                n: "03",
                t: "Corporate offices",
                d: "HVAC-led consumption with a strong daytime profile. Solar plus critical-load backup where needed.",
              },
              {
                n: "04",
                t: "Education campuses",
                d: "Hostels, labs and classrooms with long daylight hours and a visible sustainability story.",
              },
              {
                n: "05",
                t: "Hospitality & retail",
                d: "Hotels, banquet halls and large retail formats with steady day-to-night demand and tariff exposure.",
              },
              {
                n: "06",
                t: "Cold storage",
                d: "High, flat load profiles where solar can offset a meaningful share of a power-intensive operation.",
              },
            ].map((sector) => (
              <Reveal className="feature" key={sector.n}>
                <span className="feature__num">{sector.n}</span>
                <h3>{sector.t}</h3>
                <p>{sector.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container">
          <SectionHead
            eyebrow="02 — Ownership models"
            title={
              <>
                Three ways to <em>fund it.</em>
              </>
            }
            lede="The technical system is similar. The balance sheet is not. We model all three when financing is part of the brief."
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
          <p className="note-strip">
            Tax treatment, depreciation and contract terms depend on your
            entity and the financier. We provide the technical and generation
            inputs; your CA and legal advisor should confirm the financial
            treatment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">03 — Engineering</p>
          </div>
          <div className="split__body">
            <h2>
              The design work happens <em>before</em> the crane arrives.
            </h2>
            <p className="lede">
              A commercial roof has more constraints than a home: structural
              capacity, cable distances, transformer limits and production
              schedules. We resolve them on paper first.
            </p>
            <ul className="check-list">
              {[
                "Structural review of the existing roof and purlins",
                "3D layout with shadow analysis across the year",
                "String design matched to inverter MPPT windows",
                "Cable routing, trenching and interconnection plan",
                "Earthing, lightning and surge protection design",
                "DISCOM interconnection and protection coordination",
                "Phased installation plan around production",
                "String-level monitoring and monthly generation report",
              ].map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-24">
              <LinkArrow href="/process">How a project runs</LinkArrow>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight on-dark">
        <div className="container">
          <SectionHead
            eyebrow="04 — Scale"
            title={
              <>
                What different sizes <em>look like.</em>
              </>
            }
            lede="Indicative planning ranges for NCR rooftops. Final cost and yield depend on panel technology, structure, interconnection and site access."
          />
          <div className="table-wrap">
            <table className="data-table" style={{ color: "var(--bone)" }}>
              <thead>
                <tr>
                  <th style={{ color: "rgba(241,237,226,.6)", borderColor: "rgba(241,237,226,.35)" }}>System</th>
                  <th style={{ color: "rgba(241,237,226,.6)", borderColor: "rgba(241,237,226,.35)" }}>Roof area</th>
                  <th style={{ color: "rgba(241,237,226,.6)", borderColor: "rgba(241,237,226,.35)" }}>Indicative cost</th>
                  <th style={{ color: "rgba(241,237,226,.6)", borderColor: "rgba(241,237,226,.35)" }}>Est. generation</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((row) => (
                  <tr key={row.size}>
                    <td style={{ color: "var(--bone)", borderColor: "rgba(241,237,226,.16)" }}>
                      <b style={{ color: "var(--bone)" }}>{row.size}</b>
                    </td>
                    <td style={{ color: "rgba(241,237,226,.72)", borderColor: "rgba(241,237,226,.16)" }}>{row.area}</td>
                    <td style={{ color: "rgba(241,237,226,.72)", borderColor: "rgba(241,237,226,.16)" }}>{row.cost}</td>
                    <td style={{ color: "rgba(241,237,226,.72)", borderColor: "rgba(241,237,226,.16)" }}>{row.gen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note-strip" style={{ color: "rgba(241,237,226,.65)", borderColor: "var(--sun)" }}>
            Generation assumes 4.2 units per kW per day. Commercial tariffs,
            demand charges and net-metering rules vary by state and DISCOM.
            These figures are for planning conversations, not a quotation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container faq-grid">
          <div className="faq-side">
            <p className="eyebrow">05 — Business FAQs</p>
            <h2>
              The boardroom <em>questions.</em>
            </h2>
            <p>
              Capex, production downtime, tax and monitoring — the questions
              that matter before a purchase order.
            </p>
            <Link className="link-arrow" href="/contact">
              Talk to an engineer
            </Link>
          </div>
          <FaqAccordion items={commercialFaqs} />
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Put a number on <em>your roof.</em>
          </>
        }
        lede="Share your monthly consumption and roof area. We will come back with a load-matched system size and an honest generation estimate."
        formHeading="Request a commercial survey"
        formEyebrow="C&I team"
      />
    </>
  );
}
