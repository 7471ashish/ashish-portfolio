import React, { useCallback, useRef } from "react";
import Reveal from "./Reveal.jsx";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const onMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    card.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  }, []);

  return (
    <Reveal
      as="article"
      ref={cardRef}
      onMouseMove={onMouseMove}
      className={`group relative flex flex-col min-h-[290px] overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#3a3140] ${
        project.wide ? "md:col-span-2" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(249,115,22,0.14), transparent 45%)",
        }}
      />
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-muted-2">{project.index}</span>
        <div className="flex gap-3">
          {project.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted border-b border-transparent transition-colors hover:text-hot hover:border-hot"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold">{project.title}</h3>
      <p className={`mt-3 flex-grow text-[14.5px] text-muted ${project.wide ? "md:max-w-[70%]" : ""}`}>
        {project.desc}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-blue-500/30 bg-blue-500/[0.06] px-2.5 py-1 font-mono text-[11.5px] text-cool"
          >
            {s}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
