import React from "react";
import Reveal from "./Reveal.jsx";
import { EXPERIENCE } from "../data/siteData.js";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1140px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-3.5 block font-mono text-[13px] text-hot">
            02 / EXPERIENCE
          </span>
          <h2 className="text-[28px] font-semibold sm:text-[36px] lg:text-[42px]">
            Work experience
          </h2>
          <p className="mt-3.5 text-[15.5px] text-muted">
            Production frontend engineering and modular component architecture.
          </p>
        </Reveal>

        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <Reveal
              key={`${exp.company}-${exp.role}`}
              as="article"
              className="rounded-2xl border border-line bg-surface p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#3a3140]"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">
                    {exp.role}{" "}
                    <span className="text-muted-2 font-normal">at</span>{" "}
                    <span className="bg-heat-grad bg-clip-text text-transparent">
                      {exp.company}
                    </span>
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-2">
                    <span>{exp.location}</span>
                    <span>·</span>
                    <span>{exp.mode}</span>
                  </div>
                </div>
                <div className="font-mono text-xs text-hot sm:text-right">
                  {exp.period}
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-[14.5px] text-muted">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 pt-2 border-t border-line/60">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-blue-500/30 bg-blue-500/[0.06] px-2.5 py-1 font-mono text-[11.5px] text-cool"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
