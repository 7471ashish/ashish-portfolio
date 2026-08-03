import React from "react";
import Reveal from "./Reveal.jsx";
import { EDUCATION } from "../data/siteData.js";

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1140px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-3.5 block font-mono text-[13px] text-hot">
            04 / EDUCATION
          </span>
          <h2 className="text-[28px] font-semibold sm:text-[36px] lg:text-[42px]">
            Academic background
          </h2>
        </Reveal>

        <Reveal className="grid gap-5 md:grid-cols-3">
          {EDUCATION.map((edu) => (
            <div
              key={edu.school}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <div className="font-mono text-xs text-muted-2">{edu.year}</div>
              <div className="mt-2.5 font-display text-[26px] font-bold">
                {edu.score}{" "}
                {edu.scoreLabel && (
                  <span className="text-sm text-muted-2">{edu.scoreLabel}</span>
                )}
              </div>
              <div className="mt-1.5 text-[13.5px] text-muted">
                {edu.school}
                <br />
                {edu.sub}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
