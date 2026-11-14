import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";
import SectionHead, { LinkArrow } from "@/components/section-head";
import FaqAccordion from "@/components/faq-accordion";
import ContactSection from "@/components/contact-section";
import { Check, ArrowUR } from "@/components/icons";
import { getGuide, guides } from "@/lib/guides";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: "article",
    },
  };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function GuidePage({ params }: Params) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = guides.filter((item) => item.slug !== guide.slug);

  return (
    <>
      <PageHero
        eyebrow={`Guides · ${guide.category}`}
        title={guide.title}
        lede={guide.subtitle}
        meta={[
          { label: "Category", value: guide.category },
          { label: "Reading time", value: guide.readTime },
          { label: "Published", value: guide.date },
          { label: "By", value: "Pawanputra engineering" },
        ]}
        image={guide.image}
        imageAlt={guide.imageAlt}
        captionLeft="Field notes · Delhi NCR"
        captionRight={guide.category}
      />

      <article className="article">
        <div className="container article-grid">
          <aside className="article-aside">
            <p className="eyebrow">On this page</p>
            <nav aria-label="Article sections">
              {guide.sections.map((section, index) => (
                <a href={`#${slugify(section.heading)}`} key={section.heading}>
                  <span>0{index + 1}</span>
                  {section.heading}
                </a>
              ))}
            </nav>
            <div className="article-aside__cta">
              <p>Want this checked against your actual roof?</p>
              <Link className="link-arrow" href="/quote">
                Get a quote
                <ArrowUR size={14} />
              </Link>
            </div>
          </aside>

          <div className="article-body">
            <p className="article-intro">{guide.intro}</p>

            {guide.sections.map((section) => (
              <section key={section.heading} id={slugify(section.heading)}>
                <h2>{section.heading}</h2>
                {section.paras?.map((para) => (
                  <p key={para}>{para}</p>
                ))}
                {section.list && (
                  <ul className="article-list">
                    {section.list.map((item) => (
                      <li key={item}>
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="table-wrap">
                    <table className="data-table">
                      <thead>
                        <tr>
                          {section.table.head.map((cell) => (
                            <th key={cell}>{cell}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("-")}>
                            {row.map((cell) => (
                              <td key={cell}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.note && (
                  <p className="article-note">{section.note}</p>
                )}
              </section>
            ))}

            <div className="takeaways">
              <p className="eyebrow">The short version</p>
              <ul>
                {guide.takeaways.map((item) => (
                  <li key={item}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <section className="section" style={{ background: "var(--paper)" }}>
        <div className="container faq-grid">
          <div className="faq-side">
            <p className="eyebrow">Questions</p>
            <h2>
              Asked on the <em>phone.</em>
            </h2>
            <p>
              These are the follow-ups we hear most after sharing this guide.
              For anything roof-specific, book the survey.
            </p>
            <LinkArrow href="/quote">Get a detailed quote</LinkArrow>
          </div>
          <FaqAccordion items={guide.faqs} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead
            eyebrow="Keep reading"
            title={
              <>
                The next <em>useful thing.</em>
              </>
            }
          />
          <div className="guide-grid">
            {related.map((item) => (
              <Link
                href={`/guides/${item.slug}`}
                className="guide-card"
                key={item.slug}
              >
                <div className="guide-card__meta">
                  <span>{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span className="guide-card__more">
                  Read the guide
                  <ArrowUR />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Ask about <em>this guide.</em>
          </>
        }
        lede="Share the bill and the roof details. We will tell you what the system should be — and what it should cost."
        formHeading="Ask about this guide"
        formEyebrow="Delhi NCR team"
      />
    </>
  );
}
