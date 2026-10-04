import React, { useState } from "react";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { PROJECTS } from "../data/siteData.js";

const FILTERS = [
  ["all", "All"],
  ["ai", "AI & Agents"],
  ["web", "Web & Full-Stack"],
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter(
          (p) => p.cat === filter || (p.cats && p.cats.includes(filter))
        );

  return (
    <section id="work" className="border-t border-line py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1140px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-3.5 block font-mono text-[13px] text-hot">
            03 / PROJECTS
          </span>
          <h2 className="text-[28px] font-semibold sm:text-[36px] lg:text-[42px]">
            Featured projects
          </h2>
          <p className="mt-3.5 text-[15.5px] text-muted">
            Autonomous AI agents, deep learning diagnostic systems, and
            production web platforms engineered from end to end.
          </p>
        </Reveal>

        <Reveal className="mb-11 flex flex-wrap gap-2.5">
          {FILTERS.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-full border px-4 py-2 font-mono text-[13px] transition-all ${
                filter === key
                  ? "border-text bg-text text-bg"
                  : "border-line text-muted hover:text-text"
              }`}
            >
              {label}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
