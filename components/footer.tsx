import Link from "next/link";
import Image from "next/image";
import { cityLinks, footerNav, site } from "@/lib/site";
import { Phone, Pin } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label="Pawanputra Solar Solutions — home">
              <Image src="/brand/logo-mark.png" alt="" width={48} height={37} />
              <span className="brand__type">
                <span className="brand__name">Pawanputra</span>
                <span className="brand__sub">Solar Solutions</span>
              </span>
            </Link>
            <p className="footer-tag">Surya ki shakti. Aapke ghar.</p>
            <p className="footer-desc">
              Rooftop solar for homes, businesses and housing societies across
              Delhi NCR. Designed, installed and maintained by one team.
            </p>
            <div className="footer-contact">
              <a href={site.phoneHref}>
                <Phone />
                {site.phoneDisplay}
              </a>
              <p>
                <Pin />
                {site.address.line1}, {site.address.line2}, {site.address.city}{" "}
                {site.address.pin}
              </p>
            </div>
          </div>

          {footerNav.map((column) => (
            <div className="footer-col" key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-areas">
          <span>Serving</span>
          {cityLinks.map((city) => (
            <Link href={city.href} key={city.href}>
              {city.label}
            </Link>
          ))}
        </div>

        <p className="footer-wordmark" aria-hidden="true">
          Pawanputra
        </p>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            Subsidy, tariff and savings figures are indicative and subject to
            eligibility, DISCOM approval and current scheme rules. Project
            examples are representative scenarios.
          </p>
          <div className="footer-legal">
            <Link href="/subsidy">Subsidy terms</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
