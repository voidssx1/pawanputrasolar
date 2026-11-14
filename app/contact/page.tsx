import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import LeadForm from "@/components/lead-form";
import { Clock, Phone, Pin } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Survey",
  description:
    "Book a free rooftop solar survey in Delhi NCR. Call +91 98058 45213 or send an enquiry — we respond within one working day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s talk about <em>your roof.</em>
          </>
        }
        lede="Tell us what you pay each month and where the building is. We will call to understand the roof, then arrange a free survey if it looks worthwhile."
        meta={[
          { label: "Call", value: site.phoneDisplay },
          { label: "Hours", value: "Mon–Sat · 9:30–19:00" },
          { label: "Office", value: "Uttam Nagar, New Delhi" },
          { label: "Response", value: "Within 1 working day" },
        ]}
      />

      <section className="section">
        <div className="container contact-page-grid">
          <div className="contact-side">
            <p className="eyebrow">Reach us directly</p>
            <h2>A real person, not a call centre.</h2>
            <p>
              The fastest route is a phone call during office hours. If we are
              on a roof, leave a message and we will call back the same day.
            </p>

            <div className="contact-facts">
              <div className="contact-fact">
                <span>Phone</span>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </div>
              <div className="contact-fact">
                <span>Office</span>
                <b>
                  {site.address.line1}, {site.address.line2}
                  <br />
                  {site.address.city} {site.address.pin}
                </b>
              </div>
              <div className="contact-fact">
                <span>Hours</span>
                <b>{site.hours}</b>
              </div>
              <div className="contact-fact">
                <span>Service area</span>
                <div className="area-chips">
                  {site.areas.map((area) => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="map-frame">
              <iframe
                title="Pawanputra Solar Solutions office location in Uttam Nagar, New Delhi"
                src="https://www.google.com/maps?q=Uttam%20Nagar%2C%20New%20Delhi%20110059&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="next-steps">
              <h3>What happens next</h3>
              <ol>
                <li>
                  <b>01</b>We call to confirm the roof address, building type
                  and average bill.
                </li>
                <li>
                  <b>02</b>A surveyor visits, measures the roof and maps shade.
                  No charge.
                </li>
                <li>
                  <b>03</b>You receive a written layout, generation estimate and
                  itemised quote.
                </li>
                <li>
                  <b>04</b>If you proceed, we handle the subsidy and DISCOM
                  file. If not, no follow-up pressure.
                </li>
              </ol>
            </div>
          </div>

          <LeadForm
            heading="Request a free survey"
            eyebrow="2-minute form"
            note="We call back within one working day."
          />
        </div>
      </section>

      <section className="section section--tight" style={{ background: "var(--paper)" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", maxWidth: "52ch" }}>
            <Phone size={20} />
            <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>
              Prefer a call? Reach the Delhi team on{" "}
              <a className="text-link" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>{" "}
              — Mon to Sat, 9:30 AM to 7:00 PM.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", maxWidth: "52ch" }}>
            <Pin size={20} />
            <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>
              {site.address.line1}, {site.address.line2}, {site.address.city}{" "}
              {site.address.pin}.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", maxWidth: "52ch" }}>
            <Clock size={20} />
            <p style={{ fontSize: 14, color: "var(--ink-soft)" }}>
              Site surveys are free. Bring a recent bill if you have one handy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
