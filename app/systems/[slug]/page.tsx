import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHead, { LinkArrow } from "@/components/section-head";
import FaqAccordion from "@/components/faq-accordion";
import ContactSection from "@/components/contact-section";
import { Check, ArrowUR } from "@/components/icons";
import { getSystem, systems } from "@/lib/systems";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return systems.map((system) => ({ slug: system.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) return {};
  return {
    title: `${system.name} Solar Systems`,
    description: `${system.name} rooftop solar in Delhi NCR — ${system.summary}`,
    alternates: { canonical: `/systems/${system.slug}` },
  };
}

export default async function SystemPage({ params }: Params) {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) notFound();

  const others = systems.filter((item) => item.slug !== system.slug);

  return (
    <>
      <PageHero
        eyebrow={`Systems · ${system.kicker}`}
        title={
          <>
            {system.name}. <em>{system.tagline}</em>
          </>
        }
        lede={system.summary}
        meta={[
          { label: "Typical size", value: system.sizes },
          { label: "Battery", value: system.battery },
          { label: "Subsidy", value: system.subsidy },
          { label: "Payback", value: system.payback },
        ]}
        image={system.image}
        imageAlt={system.imageAlt}
        captionLeft={`${system.name} · designed for Delhi NCR`}
        captionRight={system.sizes}
        priority
      />

      <section className="section section--tight">
        <div className="container">
          <div className="split">
            <div className="split__label">
              <p className="eyebrow">01 — Is it right for you</p>
            </div>
            <div className="split__body">
              <h2>
                The honest fit for <em>{system.name.toLowerCase()}.</em>
              </h2>
              <p className="lede">
                We recommend this system when the brief matches one of these
                three conditions. If it does not, we will say so.
              </p>
              <ul className="check-list">
                {system.bestFor.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="feature-grid mt-48">
            {system.ideal.map((item, index) => (
              <Reveal className="feature" key={item.title} delay={index * 0.06}>
                <span className="feature__num">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container">
          <SectionHead
            eyebrow="02 — What's inside"
            title={
              <>
                A complete system, <em>not a panel count.</em>
              </>
            }
            lede="These are the components we specify and price. Anything missing from a competing quote is usually missing for a reason."
          />
          <div className="feature-grid">
            {system.components.map((component, index) => (
              <Reveal className="feature" key={component.name} delay={index * 0.04}>
                <span className="feature__num">0{index + 1}</span>
                <h3>{component.name}</h3>
                <p>{component.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="03 — How it runs"
            title={
              <>
                Survey, install, <em>commission.</em>
              </>
            }
            lede="Three stages, one accountable team. The same sequence applies whether the roof is a villa or a warehouse."
          />
          <div className="process-list">
            {system.steps.map((step, index) => (
              <Reveal className="process-row" key={step.title}>
                <span className="process-row__num">0{index + 1}</span>
                <h3>{step.title}</h3>
                <div className="process-row__body">
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight on-dark">
        <div className="container split">
          <div className="split__label">
            <p className="eyebrow">04 — Watchouts</p>
          </div>
          <div className="split__body">
            <h2>
              What this system <em>will not do.</em>
            </h2>
            <p className="lede">
              Every design has a boundary. We would rather draw it before you
              pay than explain it afterwards.
            </p>
            <ul className="check-list check-list--dark">
              {system.watchouts.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">—</span>
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
            eyebrow="05 — Compare"
            title={
              <>
                Three systems, <em>one decision.</em>
              </>
            }
            lede="The same roof can carry any of them. The difference is what you want to happen when the grid goes down — and how much capital you want to lock into batteries."
          />
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>System</th>
                  <th>Typical size</th>
                  <th>Battery</th>
                  <th>Subsidy</th>
                  <th>Payback</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                {systems.map((item) => (
                  <tr
                    key={item.slug}
                    className={item.slug === system.slug ? "is-current" : ""}
                  >
                    <td>
                      <Link href={`/systems/${item.slug}`}>
                        <b>{item.name}</b>
                      </Link>
                    </td>
                    <td>{item.sizes}</td>
                    <td>{item.battery}</td>
                    <td>{item.subsidy}</td>
                    <td>{item.payback}</td>
                    <td>{item.short}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-24">
            <LinkArrow href="/quote">Get a system-specific quote</LinkArrow>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container faq-grid">
          <div className="faq-side">
            <p className="eyebrow">06 — {system.name} FAQs</p>
            <h2>
              Straight <em>answers.</em>
            </h2>
            <p>
              Still weighing it up? Compare the other two routes or ask us
              directly — we will tell you which one we would put on our own
              roof.
            </p>
            <div className="stack-16">
              {others.map((item) => (
                <Link className="text-link" href={`/systems/${item.slug}`} key={item.slug}>
                  {item.name} systems
                  <ArrowUR size={14} />
                </Link>
              ))}
            </div>
          </div>
          <FaqAccordion items={system.faqs} />
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Talk it through <em>on your roof.</em>
          </>
        }
        lede={`A free survey confirms whether a ${system.name.toLowerCase()} design suits the building, the load and the budget.`}
        formHeading={`Request a ${system.name.toLowerCase()} survey`}
        formEyebrow="No obligation"
      />
    </>
  );
}
