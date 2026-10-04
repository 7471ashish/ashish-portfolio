import React from "react";
import Reveal from "./Reveal.jsx";
import { EDUCATION } from "../data/siteData.js";

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1140px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-3.5 block font-mono text-[13px] text-hot">
            05 / EDUCATION
          </span>
          <h2 className="text-[28px] font-semibold sm:text-[36px] lg:text-[42px]">
            Academic background
          </h2>
          <p className="mt-3.5 text-[15.5px] text-muted">
            Formal education in Information Technology and foundational sciences.
          </p>
        </Reveal>

        <Reveal className="grid gap-5 md:grid-cols-3">
          {EDUCATION.map((edu) => (
            <div
              key={edu.school}
              className="flex flex-col justify-between rounded-xl border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:border-[#3a3140]"
            >
              <div>
                <div className="font-mono text-xs text-muted-2">{edu.year}</div>
                <div className="mt-2.5 font-display text-[26px] font-bold">
                  {edu.score}{" "}
                  {edu.scoreLabel && (
                    <span className="text-sm font-mono text-muted-2">
                      {edu.scoreLabel}
                    </span>
                  )}
                </div>
                <div className="mt-2 text-[14px] font-medium text-text">
                  {edu.school}
                </div>
                <div className="mt-0.5 text-[13px] text-muted">{edu.sub}</div>
              </div>
              {edu.extra && (
                <div className="mt-4 pt-3 border-t border-line/60 font-mono text-[11.5px] text-muted-2 leading-relaxed">
                  {edu.extra}
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
