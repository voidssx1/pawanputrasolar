import Link from "next/link";
import { ArrowUR } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--head-h) + 90px)", minHeight: "80svh" }}>
      <div className="container">
        <p className="eyebrow">404 — Off the roof</p>
        <h1 style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", margin: "18px 0 22px", lineHeight: 0.92 }}>
          This page
          <br />
          <em className="serif forest">caught no sun.</em>
        </h1>
        <p className="lede" style={{ marginBottom: 28 }}>
          The address does not exist, or it has moved. Head back to the home
          page, or call us and we will point you in the right direction.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="btn" href="/">
            Back to home
            <ArrowUR />
          </Link>
          <Link className="btn btn--line" href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
