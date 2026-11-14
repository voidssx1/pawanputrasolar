import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { ArrowUR, Sun } from "@/components/icons";
import { guides } from "@/lib/guides";
import ContactSection from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Solar Guides & Field Notes",
  description:
    "Plain-language guides to PM Surya Ghar subsidy, rooftop system sizing and housing society solar in Delhi NCR — written by the team that installs the systems.",
  alternates: { canonical: "/guides" },
};

const topics = [
  "PM Surya Ghar subsidy slabs",
  "Delhi vs UP vs Haryana rules",
  "Roof area and shade",
  "On-grid vs hybrid vs off-grid",
  "RWA resolutions and NOCs",
  "Net metering timelines",
  "Panel and inverter warranties",
  "Cleaning and performance",
];

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title={
          <>
            Everything we explain <em>on a roof.</em>
          </>
        }
        lede="Subsidy rules, sizing maths and society process — written in plain language, with the caveats left in. No lead magnet, no gate."
        meta={[
          { label: "Guides", value: `${guides.length} in-depth` },
          { label: "Updated", value: "November 2026" },
          { label: "Reading", value: "7–9 minutes" },
          { label: "Cost", value: "Free" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="guide-index">
            {guides.map((guide, index) => (
              <Reveal key={guide.slug} delay={index * 0.06}>
                <Link href={`/guides/${guide.slug}`} className="guide-row">
                  <span className="guide-row__num">0{index + 1}</span>
                  <div className="guide-row__main">
                    <div className="guide-row__meta">
                      <span>{guide.category}</span>
                      <span>{guide.readTime}</span>
                    </div>
                    <h2>{guide.title}</h2>
                    <p>{guide.excerpt}</p>
                  </div>
                  <span className="guide-row__arrow">
                    <ArrowUR />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">Also covered</p>
          </div>
          <div className="split__body">
            <h2>
              The small questions that <em>decide the project.</em>
            </h2>
            <p className="lede">
              Ask us any of these on the phone or during the survey. There is
              no question too basic when the asset is meant to last 25 years.
            </p>
            <ul className="topic-list">
              {topics.map((topic) => (
                <li key={topic}>
                  <Sun size={12} />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Still have a <em>question?</em>
          </>
        }
        lede="Send it with your bill and city. We will answer in plain language, and tell you if solar is not the right spend yet."
        formHeading="Ask the Delhi team"
        formEyebrow="No sales script"
      />
    </>
  );
}
