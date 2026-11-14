import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHead, { LinkArrow } from "@/components/section-head";
import FaqAccordion from "@/components/faq-accordion";
import ContactSection from "@/components/contact-section";
import Marquee from "@/components/marquee";
import { ArrowUR, Check } from "@/components/icons";
import { cities, getCity } from "@/lib/cities";
import { systems } from "@/lib/systems";

type Params = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `Rooftop Solar in ${city.name}`,
    description: `Rooftop solar in ${city.name} — engineered systems for homes, businesses and societies, with subsidy paperwork and ${city.discom.split("(")[0].trim()} net metering handled.`,
    alternates: { canonical: `/solar/${city.slug}` },
  };
}

export default async function CityPage({ params }: Params) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const others = cities.filter((item) => item.slug !== city.slug).slice(0, 5);
  const discom = city.discom
    .split(",")[0]
    .replace(/\s*\(.*?\)\s*/g, "")
    .trim();

  return (
    <>
      <PageHero
        eyebrow={`Rooftop solar · ${city.name}`}
        title={
          <>
            Solar in {city.name}, <em>done properly.</em>
          </>
        }
        lede={city.intro}
        meta={[
          { label: "DISCOM", value: discom },
          { label: "State", value: city.state },
          { label: "Typical home", value: "3–10 kW" },
          { label: "Survey", value: "Free, no obligation" },
        ]}
        image={city.image}
        imageAlt={city.imageAlt}
        captionLeft={`${city.name} · representative installation`}
        captionRight="Delhi NCR"
        priority
      />

      <Marquee
        items={[`Solar in ${city.name}`, "Homes", "Businesses", "Societies"]}
        duration={36}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="01 — Local realities"
            title={
              <>
                What changes in <em>{city.name}.</em>
              </>
            }
            lede="The physics of solar does not change across NCR. The roof stock, the DISCOM and the approval sequence do."
          />

          <div className="feature-grid">
            {city.local.map((item, index) => (
              <Reveal className="feature" key={item.title} delay={index * 0.06}>
                <span className="feature__num">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>

          <p className="note-strip">{city.note}</p>
        </div>
      </section>

      <section className="section section--tight on-dark">
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">02 — Subsidy</p>
          </div>
          <div className="split__body">
            <h2>
              The support you can <em>actually claim.</em>
            </h2>
            <p className="lede">
              Central PM Surya Ghar support is slab-based: ₹30,000 for the
              first kilowatt, ₹60,000 for two, and a ₹78,000 cap from three
              kilowatts upward. State top-ups depend on where the roof is and
              the notification in force.
            </p>
            <ul className="check-list check-list--dark">
              <li>
                <Check />
                DCR modules and a registered vendor
              </li>
              <li>
                <Check />
                Residential connection in the applicant&apos;s name
              </li>
              <li>
                <Check />
                Net-metering application through {discom}
              </li>
              <li>
                <Check />
                Written confirmation of the eligible amount
              </li>
            </ul>
            <div className="mt-24">
              <LinkArrow href="/subsidy">See the full subsidy picture</LinkArrow>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="03 — What we install"
            title={
              <>
                Any roof. <em>One standard.</em>
              </>
            }
            lede="On-grid for payback, hybrid for backup, off-grid for independence. We size the system around the building, not a preferred SKU."
          />

          <div className="model-grid">
            {systems.map((system) => (
              <Reveal className="model-card" key={system.slug}>
                <span className="model-card__tag">{system.short}</span>
                <h3>{system.name}</h3>
                <p>{system.tagline}</p>
                <ul>
                  <li>{system.sizes}</li>
                  <li>Battery: {system.battery}</li>
                  <li>Subsidy: {system.subsidy}</li>
                </ul>
                <Link className="model-card__link" href={`/systems/${system.slug}`}>
                  Explore {system.name.toLowerCase()}
                  <ArrowUR size={14} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">04 — Coverage</p>
          </div>
          <div className="split__body">
            <h2>
              The parts of {city.name} <em>we know by name.</em>
            </h2>
            <p className="lede">
              Survey routes are grouped by zone. Tell us the area and we will
              fit you into the nearest visit instead of making you wait for a
              separate trip.
            </p>
            <div className="area-tags">
              {city.areas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
            <div className="area-nearby">
              <span>Also serving</span>
              {others.map((item) => (
                <Link href={`/solar/${item.slug}`} key={item.slug}>
                  {item.name}
                  <ArrowUR size={12} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-grid">
          <div className="faq-side">
            <p className="eyebrow">05 — {city.name} FAQs</p>
            <h2>
              Local <em>questions.</em>
            </h2>
            <p>
              The answers we give in {city.name} most often. For anything
              specific to your meter or roof, a survey is the fastest route.
            </p>
            <LinkArrow href="/quote">Get a detailed quote</LinkArrow>
          </div>
          <FaqAccordion items={city.faqs} />
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Book a survey in <em>{city.name}.</em>
          </>
        }
        lede={`Tell us the area and what you pay each month. We will call to understand the roof, then arrange a free visit in ${city.name}.`}
        formHeading={`Survey request · ${city.name}`}
        formEyebrow="Free · no obligation"
      />
    </>
  );
}
