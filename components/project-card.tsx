import Link from "next/link";
import ImageReveal from "@/components/image-reveal";
import type { Project } from "@/lib/projects";
import { ArrowUR } from "@/components/icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <ImageReveal
          src={project.image}
          alt={project.title}
          sizes="(max-width: 760px) 100vw, 50vw"
          absolute
        />
      </div>
      <div className="project-card__meta">
        <span>
          {project.segment} · {project.place}
        </span>
        <span>{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="project-card__stats">
        <div>
          <b>{project.size}</b>
          <span>System</span>
        </div>
        <div>
          <b>{project.metric}</b>
          <span>{project.metricLabel}</span>
        </div>
        <div style={{ marginLeft: "auto", alignSelf: "center" }}>
          <Link
            className="project-card__go"
            href="/contact"
            aria-label="Plan a similar rooftop system"
          >
            <ArrowUR size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}
