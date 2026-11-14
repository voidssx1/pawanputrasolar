import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ProjectsGrid from "@/components/projects-grid";
import ContactSection from "@/components/contact-section";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Representative rooftop solar projects across homes, businesses and housing societies in Delhi NCR — system sizes, savings and design notes.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Quiet roofs. <em>Serious output.</em>
          </>
        }
        lede="A cross-section of the roof shapes we work with — a villa, a factory, a society clubhouse, an ordinary terrace. Project examples are representative scenarios; client names are withheld."
        meta={[
          { label: "Segments", value: "Homes · C&I · Societies" },
          { label: "Geography", value: "Delhi NCR" },
          { label: "Range shown", value: "5.2 kW – 240 kW" },
          { label: "Data", value: "Representative" },
        ]}
        image="/images/panel-macro.webp"
        imageAlt="Close-up of solar panel cells reflecting the late sun"
        captionLeft="Glass, silicon and Delhi light"
        captionRight="Representative project imagery"
        priority
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 10 }}>
            <div className="split__label">
              <p className="eyebrow">Project index</p>
            </div>
            <div className="split__body">
              <p className="lede">
                Filter by the kind of roof. Each scenario shows the system size,
                the design constraint that shaped it and the outcome we would
                expect from that brief.
              </p>
            </div>
          </div>

          <ProjectsGrid projects={projects} />

          <p className="note-strip" style={{ maxWidth: "78ch" }}>
            Representative scenarios, not client case studies. Names, exact
            locations and some performance figures are illustrative and are
            intended to show typical project scope. Verified references are
            available on request during a survey.
          </p>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Your roof could be <em>next.</em>
          </>
        }
        lede="Tell us the building type and your average bill. We will tell you what is realistically possible before you commit to a survey."
        formHeading="Start a project"
        formEyebrow="Delhi NCR"
      />
    </>
  );
}
