import type { ReactNode } from "react";
import LeadForm from "@/components/lead-form";
import { Clock, Phone, Pin } from "@/components/icons";
import { site } from "@/lib/site";

export default function ContactSection({
  heading,
  lede,
  formHeading,
  formEyebrow,
  formNote,
}: {
  heading: ReactNode;
  lede: string;
  formHeading?: string;
  formEyebrow?: string;
  formNote?: string;
}) {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Start here</p>
          <h2>{heading}</h2>
          <p>{lede}</p>

          <div className="contact-details">
            <a href={site.phoneHref}>
              <Phone />
              <span>
                <strong>Call the Delhi team</strong>
                {site.phoneDisplay}
              </span>
            </a>
            <div>
              <Pin />
              <span>
                <strong>Office</strong>
                {site.address.line1}, {site.address.line2}, {site.address.city}{" "}
                {site.address.pin}
              </span>
            </div>
            <div>
              <Clock />
              <span>
                <strong>Hours</strong>
                {site.hours}
              </span>
            </div>
          </div>

          <p className="contact-hours">
            Serving {site.areas.join(" · ")}. Site surveys are free and carry no
            obligation.
          </p>
        </div>

        <LeadForm
          heading={formHeading}
          eyebrow={formEyebrow}
          note={formNote}
          compact
        />
      </div>
    </section>
  );
}
