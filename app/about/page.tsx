import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import SectionHead from "@/components/section-head";
import Reveal from "@/components/reveal";
import ImageReveal from "@/components/image-reveal";
import ContactSection from "@/components/contact-section";
import { site } from "@/lib/site";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pawanputra Solar Solutions is a Delhi NCR rooftop solar company built around engineering, transparent numbers and long-term service.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pawanputra"
        title={
          <>
            Solar, without the <em>theatre.</em>
          </>
        }
        lede="We are a Delhi NCR rooftop solar company built around a simple idea: the system should be designed by the people who install it, and supported by the people who sold it."
        meta={[
          { label: "Based in", value: "Uttam Nagar, New Delhi" },
          { label: "Coverage", value: "Delhi NCR · 6 districts" },
          { label: "Focus", value: "Homes · C&I · Societies" },
          { label: "Team", value: "Engineers & electricians" },
        ]}
        image="/images/workshop.webp"
        imageAlt="The Pawanputra team reviewing solar roof plans in their workshop"
        captionLeft="The workshop · Uttam Nagar, New Delhi"
        captionRight="Plans before panels"
        priority
      />

      <section className="section">
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">01 — Why we exist</p>
          </div>
          <div className="split__body">
            <h2>
              The market has a <em>trust problem.</em>
            </h2>
            <p className="lede">
              Rooftop solar is sold with promises of 90% savings and
              two-year paybacks. The truth is more specific: it depends on your
              tariff, your daytime load, your roof and the quality of the
              installation. We built Pawanputra to sell that truth — with the
              engineering to back it up.
            </p>
            <p className="lede" style={{ marginTop: 18 }}>
              One team surveys, designs, installs and services. The person who
              measures your roof knows what the installation crew will face.
              The person who files your subsidy knows what the DISCOM will ask
              for. That continuity is the product.
            </p>
            <ul className="check-list" style={{ marginTop: 26 }}>
              {[
                "Systems sized from consumption and shade, not a target",
                "Itemised proposals with named panel and inverter models",
                "Subsidy, net metering and DISCOM follow-up handled in-house",
                "Service and performance reviews after commissioning",
              ].map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container">
          <SectionHead
            eyebrow="02 — What we stand on"
            title={
              <>
                Four commitments we can be <em>held to.</em>
              </>
            }
            lede="Not values on a wall. Things you can check in a proposal, on site or after handover."
          />
          <div className="feature-grid">
            {[
              {
                n: "01",
                t: "Honest sizing",
                d: "If a 3 kW system serves you, we will not sell a 5 kW one. If the roof cannot carry what you need, we will say so.",
              },
              {
                n: "02",
                t: "Named components",
                d: "Panel wattage, inverter model, mounting and protection are specified. No vague “Tier-1” language in the quote.",
              },
              {
                n: "03",
                t: "Documented work",
                d: "You receive the layout, test reports, warranty documents and net-meter file in one handover pack.",
              },
              {
                n: "04",
                t: "Service that answers",
                d: "A real person on the phone after commissioning. Cleaning, checks and performance reviews on a schedule.",
              },
            ].map((item) => (
              <Reveal className="feature" key={item.n}>
                <span className="feature__num">{item.n}</span>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-portrait">
          <div className="about-portrait__media">
            <ImageReveal
              src="/images/engineer-portrait.webp"
              alt="A Pawanputra solar engineer on a Delhi rooftop with a tablet"
              sizes="(max-width: 760px) 100vw, 45vw"
              absolute
            />
            <span className="about-portrait__tag">
              On the roof, not just in the brochure
            </span>
          </div>
          <div className="about-portrait__copy">
            <p className="eyebrow">03 — The standard</p>
            <h2>
              The person who designs it <em>signs off on it.</em>
            </h2>
            <p>
              A solar system is only as good as its weakest detail — a shaded
              string, a loose MC4 connector, an undersized cable, a mounting
              foot that was never engineered for the roof. Our designers work
              with the installation crew, and our project managers inspect what
              was actually built.
            </p>
            <p>
              We are small enough to care about every roof and structured
              enough to run a project properly. That is deliberate.
            </p>
            <p className="big-quote" style={{ marginTop: 30 }}>
              “A good installation is boring. It just <span>keeps working.</span>”
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight on-dark">
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">04 — The fine print</p>
          </div>
          <div className="split__body">
            <h2 style={{ color: "var(--bone)" }}>
              What we <em style={{ color: "var(--sun)" }}>won’t</em> do.
            </h2>
            <ul className="check-list" style={{ borderColor: "rgba(241,237,226,.18)" }}>
              {[
                "Promise a specific subsidy amount before eligibility is confirmed.",
                "Quote a payback without stating the tariff and generation assumptions.",
                "Hide the cost of structure, cabling or net-metering coordination.",
                "Install a system we would not be willing to service for the next decade.",
                "Use high-pressure deadlines to rush a 25-year decision.",
              ].map((item) => (
                <li key={item} style={{ color: "rgba(241,237,226,.78)", borderColor: "rgba(241,237,226,.16)" }}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 24, fontSize: 13, color: "rgba(241,237,226,.6)", maxWidth: "56ch" }}>
              Registered office: {site.address.line1}, {site.address.line2},{" "}
              {site.address.city} {site.address.pin}. Call{" "}
              <a className="text-link" href={site.phoneHref} style={{ color: "var(--sun)" }}>
                {site.phoneDisplay}
              </a>{" "}
              for company and project enquiries.
            </p>
          </div>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Meet the team <em>on your roof.</em>
          </>
        }
        lede="A survey is the fastest way to judge whether we know what we are talking about. It is free, and there is no obligation."
        formHeading="Book a free survey"
        formEyebrow="Delhi NCR"
      />
    </>
  );
}
