"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/project-card";
import type { Project } from "@/lib/projects";

const filters = ["All", "Home", "Business", "Society"] as const;
type Filter = (typeof filters)[number];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.segment === filter),
    [filter, projects],
  );

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            type="button"
            key={item}
            className={`filter-btn ${filter === item ? "is-active" : ""}`}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item === "All" ? `All (${projects.length})` : item}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </>
  );
}
