import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/reveal";
import Calculator from "@/components/calculator";
import FaqAccordion from "@/components/faq-accordion";
import ContactSection from "@/components/contact-section";
import { processFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";
import {
  ArrowUR,
  Building,
  Chart,
  Check,
  Home,
  Pin,
  Shield,
  Sun,
  Users,
  Wrench,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Rooftop Solar in Delhi NCR — Pawanputra Solar Solutions",
  description:
    "Rooftop solar for homes, businesses and housing societies across Delhi NCR. Engineered systems, subsidy paperwork handled, installation in 4–6 weeks.",
  alternates: { canonical: "/" },
};

const solarFor = [
  {
    href: "/residential",
    title: "Homes",
    note: "3–20 kW · Save up to 90% on bills",
    body: "Sized from your bills and your roof, with the subsidy file and net metering handled end to end.",
    image: "/images/family-home.webp",
    alt: "A family at home in Delhi with rooftop solar",
    icon: <Home />,
  },
  {
    href: "/societies",
    title: "Housing societies",
    note: "30–500 kW · Common areas",
    body: "Put lifts, pumps and corridor lighting on daylight. AGM, NOC and DISCOM support included.",
    image: "/images/society-aerial.webp",
    alt: "Aerial view of solar panels on apartment society rooftops",
    icon: <Users />,
  },
  {
    href: "/commercial",
    title: "Commercial",
    note: "50 kW – 1 MW+ · Capex or OPEX",
    body: "Industrial-grade arrays for factories, warehouses and offices — modelled honestly.",
    image: "/images/commercial-roof.webp",
    alt: "Large solar array covering a warehouse roof",
    icon: <Building />,
  },
];

const trust = [
  {
    title: "Guaranteed savings",
    body: "Every quote is modelled from your consumption, tariff and roof — not a brochure number.",
    image: "/images/house-close.webp",
    alt: "Close view of a rooftop solar installation",
  },
  {
    title: "Hassle-free process",
    body: "Survey, design, subsidy, net metering and installation are handled directly by our team.",
    image: "/images/crew-install.webp",
    alt: "Technicians installing solar panels on a Delhi rooftop",
  },
  {
    title: "Storm-rated structure",
    body: "Wind-rated mounting, planned cable routes and documented electrical checks on every roof.",
    image: "/images/panel-macro.webp",
    alt: "Close-up of a solar panel and mounting frame",
  },
  {
    title: "Reliable after-sales",
    body: "Cleaning, performance reviews and a service number that answers after handover.",
    image: "/images/engineer-portrait.webp",
    alt: "Pawanputra service engineer on a rooftop",
  },
];

const promise = [
  {
    title: "Sized from data",
    body: "Bills, load profile and shade decide the system — not a sales target.",
    icon: <Chart />,
  },
  {
    title: "Subsidy, tracked",
    body: "The PM Surya Ghar file and DISCOM follow-ups sit with our team.",
    icon: <Shield />,
  },
  {
    title: "Service for the life of the asset",
    body: "Cleaning, checks and annual reviews, long after the cheque clears.",
    icon: <Wrench />,
  },
];

const journey = [
  {
    title: "Free home visit & rooftop survey",
    body: "We measure the roof, inspect the meter room and map shade through the day. You get a straight answer on what the roof can carry.",
  },
  {
    title: "Design & written proposal",
    body: "A panel layout, generation estimate and itemised quote. The system is sized to your consumption — not to a brochure.",
  },
  {
    title: "Installation & subsidy support",
    body: "Our team installs the system and handles the paperwork, including the subsidy application and net-metering file.",
  },
  {
    title: "Solar on. You save. We maintain.",
    body: "Net meter installed, monitoring configured, a full walkthrough and a documented warranty file. Then we stay reachable.",
  },
];

const voices = [
  {
    quote:
      "The surveyor told us a 5 kW system was enough. Two other quotes wanted 8. Six months in, the bill is down to the meter charge.",
    who: "Homeowner",
    where: "Dwarka, Delhi",
  },
  {
    quote:
      "The subsidy file was the part we dreaded. Their team filed it, followed up and showed us the credit on the portal.",
    who: "Homeowner",
    where: "Noida",
  },
  {
    quote:
      "Our lifts and corridor lights now run on the terrace. The AGM approved it after seeing the numbers in writing.",
    who: "RWA secretary",
    where: "Gurugram",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__media">
          <Image
            src="/images/hero-rooftop-wide.webp"
            alt="A rooftop solar array on a contemporary Delhi home at golden hour"
            fill
            priority
            sizes="100vw"
            className="img-cover"
          />
        </div>
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <span className="home-hero__pill">
              <Sun size={15} />
              Rooftop solar · Delhi NCR
            </span>
            <h1>
              Your roof.
              <br />
              <em>Your power plant.</em>
            </h1>
            <p>
              Rooftop solar for homes, businesses and societies across Delhi
              NCR — the survey, the subsidy paperwork, the installation and
              the net meter, all handled by one team.
            </p>
            <div className="home-hero__actions">
              <Link className="btn btn--white btn--lg" href="/quote">
                Get a free consultation
                <ArrowUR />
              </Link>
              <a className="btn btn--ghost btn--lg" href="#calculator">
                Estimate my savings
              </a>
            </div>
          </div>
        </div>
        <div className="container home-hero__foot">
          <span>
            <Check size={15} />
            Free roof survey · no obligation
          </span>
          <span>
            <Shield size={15} />
            PM Surya Ghar support up to ₹1.08 L
          </span>
          <span>
            <Pin size={15} />
            Delhi · Noida · Gurugram · Ghaziabad
          </span>
        </div>
      </section>

      <div className="assurance-bar">
        <div className="container assurance-bar__inner">
          {[
            "PM Surya Ghar registered",
            "Net metering handled",
            "25-year performance warranty",
            "Service in six NCR districts",
          ].map((item) => (
            <span key={item}>
              <Check size={15} />
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="section solar-for">
        <div className="container">
          <div className="center-head">
            <h2>Get solar for</h2>
            <p>
              The system changes with the building. The survey, the engineering
              and the accountability do not.
            </p>
          </div>
          <div className="solar-cards">
            {solarFor.map((card, index) => (
              <Reveal delay={index * 0.06} key={card.href}>
                <Link href={card.href} className="solar-card">
                  <div className="solar-card__media">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 760px) 90vw, 33vw"
                      className="img-cover"
                    />
                    <span className="solar-card__icon">{card.icon}</span>
                  </div>
                  <div className="solar-card__head">
                    <h3>{card.title}</h3>
                    <span className="solar-card__arrow">
                      <ArrowUR />
                    </span>
                  </div>
                  <span className="solar-card__note">{card.note}</span>
                  <p>{card.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container">
          <div className="center-head">
            <h2>Why families across Delhi NCR trust us</h2>
            <p>
              A solar system is a 25-year decision. These are the four things
              that decide whether it performs.
            </p>
          </div>
          <div className="trust-grid">
            {trust.map((item, index) => (
              <Reveal className="trust-card" delay={index * 0.05} key={item.title}>
                <div className="trust-card__media">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 760px) 90vw, 25vw"
                    className="img-cover"
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="promise-band">
        <div className="container promise-band__inner">
          <div className="promise-band__copy">
            <span className="promise-band__eyebrow">The Pawanputra promise</span>
            <h2>
              Performance,
              <br />
              <em>in writing.</em>
            </h2>
            <p>
              A solar proposal should be specific enough to be checked. Ours
              names the equipment, the generation estimate, the subsidy and the
              service terms — before you pay anything.
            </p>
            <Link className="btn btn--white" href="/process">
              See how we work
              <ArrowUR />
            </Link>
          </div>
          <div className="promise-band__list">
            {promise.map((item) => (
              <div className="promise-item" key={item.title}>
                <span className="promise-item__icon">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="promise-band__mark" aria-hidden="true">
          <Sun size={210} />
        </span>
      </section>

      <section className="section impact-section">
        <div className="container">
          <div className="center-head">
            <h2>Built for this climate</h2>
            <p>
              Delhi roofs are dusty, hot and exposed. The design has to account
              for all three.
            </p>
          </div>
          <div className="impact-grid">
            {[
              { icon: <Pin />, value: "6", label: "Districts served" },
              { icon: <Wrench />, value: "4–6", label: "Weeks, survey to meter" },
              { icon: <Shield />, value: "25 yrs", label: "Performance warranty" },
              { icon: <Sun />, value: "₹1.08 L", label: "Maximum combined support" },
            ].map((stat, index) => (
              <Reveal className="impact-card" delay={index * 0.05} key={stat.label}>
                <span className="impact-card__icon">{stat.icon}</span>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </Reveal>
            ))}
          </div>
          <div className="impact-strip">
            <p>
              <Pin />
              We survey and service Delhi, Noida, Greater Noida, Ghaziabad,
              Gurugram and Faridabad.
            </p>
            <a className="btn" href="#calculator">
              Unlock your solar savings
              <ArrowUR />
            </a>
          </div>
        </div>
      </section>

      <section className="section calc-section" id="calculator">
        <div className="container calc-grid">
          <div className="calc-copy">
            <span className="eyebrow">Savings calculator</span>
            <h2>
              Calculate your <em>savings.</em>
            </h2>
            <p>
              Move the slider to your usual monthly bill. We will model system
              size, subsidy, monthly saving and payback before you speak to
              anyone.
            </p>
            <ul className="calc-points">
              <li>
                <Check /> Sized on real usage, not a sales target
              </li>
              <li>
                <Check /> Central subsidy and Delhi top-up modelled
              </li>
              <li>
                <Check /> Battery backup can be added or removed
              </li>
              <li>
                <Check /> Final numbers confirmed by a free roof survey
              </li>
            </ul>
            <Link className="link-arrow" href="/calculator">
              Open the full calculator
              <ArrowUR />
            </Link>
          </div>
          <div className="calc-panel-wrap">
            <Calculator />
          </div>
        </div>
      </section>

      <section className="see-solar">
        <div className="see-solar__copy">
          <span className="eyebrow">Before you buy</span>
          <h2>
            See a working roof
            <br />
            <em>before you pay.</em>
          </h2>
          <p>
            Walk a live installation, understand the mounting and see the
            subsidy maths in person. One visit clears more doubt than ten
            phone calls.
          </p>
          <ul className="check-list check-list--dark">
            {[
              "See our mounting and cable routing up close",
              "Get a 3D layout for your own roof",
              "Understand cleaning and maintenance",
              "See savings, financing and payback in person",
            ].map((item) => (
              <li key={item}>
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <Link className="btn btn--outline-light" href="/contact">
            Book a roof visit
            <ArrowUR />
          </Link>
        </div>
        <div className="see-solar__media">
          <Image
            src="/images/hero-rooftop-portrait.webp"
            alt="A working rooftop solar installation at sunset"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="img-cover"
          />
        </div>
      </section>

      <section className="section journey-section">
        <div className="container journey-grid">
          <div className="journey-copy">
            <span className="eyebrow">The process</span>
            <h2>
              We handle everything.
              <br />
              <em>You just save.</em>
            </h2>
            <p>
              One team stays accountable from the first measurement to the final
              meter reading. No handoffs, no forgotten files.
            </p>
            <div className="journey-steps">
              {journey.map((step, index) => (
                <div className="journey-step" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link className="link-arrow" href="/process">
              See the full process
              <ArrowUR />
            </Link>
          </div>
          <div className="journey-media">
            <Image
              src="/images/crew-install.webp"
              alt="Pawanputra technicians installing a solar panel on a Delhi rooftop"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="img-cover"
            />
          </div>
        </div>
      </section>

      <section className="monitor-section">
        <div className="container monitor-grid">
          <div className="monitor-copy">
            <span className="eyebrow">Monitoring</span>
            <h2>
              Watch every <em>unit.</em>
            </h2>
            <p>
              Generation, savings and service history in one place. We configure
              the dashboard at handover and walk you through it — so you always
              know what the roof is doing.
            </p>
            <ul className="check-list">
              <li>
                <Check /> Live generation and daily totals
              </li>
              <li>
                <Check /> Alerts when output drops
              </li>
              <li>
                <Check /> Annual performance review
              </li>
            </ul>
            <Link className="link-arrow" href="/process">
              How monitoring works
              <ArrowUR />
            </Link>
          </div>
          <div className="monitor-media">
            <div className="monitor-card">
              <div className="monitor-card__head">
                <span>
                  <Sun size={16} /> Live system
                </span>
                <span className="monitor-card__status">
                  <i /> Synced
                </span>
              </div>
              <b className="monitor-card__value">
                14.2 <small>units today</small>
              </b>
              <div className="monitor-card__bars" aria-hidden="true">
                {[32, 48, 62, 74, 88, 96, 90, 78, 64, 46, 30, 18].map(
                  (height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  ),
                )}
              </div>
              <div className="monitor-card__stats">
                <div>
                  <span>This month</span>
                  <b>382 units</b>
                </div>
                <div>
                  <span>Saved</span>
                  <b>₹3,056</b>
                </div>
                <div>
                  <span>System</span>
                  <b>6.4 kWp</b>
                </div>
              </div>
            </div>
            <span className="monitor-tag monitor-tag--a">
              <Chart size={15} /> Generating
            </span>
            <span className="monitor-tag monitor-tag--b">
              <Check size={15} /> Service due in 4 months
            </span>
          </div>
        </div>
      </section>

      <section className="section voices-section">
        <div className="container">
          <div className="center-head">
            <h2>What owners tell us</h2>
            <p>
              The same themes come up after handover: a smaller bill, a clear
              file and a team that answers.
            </p>
          </div>
          <div className="voices-grid">
            {voices.map((voice, index) => (
              <Reveal className="voice-card" delay={index * 0.06} key={voice.where}>
                <p>“{voice.quote}”</p>
                <div>
                  <span className="voice-card__avatar">
                    {voice.who.charAt(0)}
                  </span>
                  <span>
                    <b>{voice.who}</b>
                    {voice.where}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="voices-note">
            Representative owner feedback. Names and exact sites withheld;
            savings vary with tariff, usage and roof conditions.
          </p>
        </div>
      </section>

      <section className="section faq-home">
        <div className="container">
          <div className="faq-home__head">
            <h2>Frequently asked questions</h2>
            <span className="faq-pill">All your questions, answered.</span>
          </div>
          <div className="faq-columns">
            <FaqAccordion items={processFaqs.slice(0, 3)} />
            <FaqAccordion items={processFaqs.slice(3, 6)} />
          </div>
          <Link className="link-arrow" href="/process#faqs">
            Read all FAQs
            <ArrowUR />
          </Link>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Start with a <em>free survey.</em>
          </>
        }
        lede="Tell us where you are and what you pay each month. We will call to understand the roof, then set up a no-obligation visit."
        formHeading="Book a free consultation"
        formEyebrow="Mon–Sat"
      />
    </>
  );
}
