import React from "react";
import Reveal from "./Reveal.jsx";
import { SKILL_GROUPS } from "../data/siteData.js";

const STATS = [
  ["8.43", "CGPA"],
  ["5+", "SHIPPED PROJECTS"],
  ["4", "CONDITIONS DIAGNOSED BY MODEL"],
];

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1140px] px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <span className="mb-3.5 block font-mono text-[13px] text-hot">
              01 / ABOUT
            </span>
            <div className="space-y-4 text-[15.5px] text-muted">
              <p>
                I'm currently pursuing my{" "}
                <strong className="font-medium text-text">
                  B.Tech in Information Technology at IIIT Una
                </strong>
                , where I split my time between core CS coursework and shipping
                end-to-end AI/ML projects — from model training to production
                deployment.
              </p>
              <p>
                My focus areas are{" "}
                <strong className="font-medium text-text">
                  deep learning for medical imaging
                </strong>{" "}
                and{" "}
                <strong className="font-medium text-text">
                  full-stack web development
                </strong>
                . I care about models that are interpretable, not just accurate —
                which is why Grad-CAM explainability shows up across most of my
                computer vision work.
              </p>
              <p>
                Outside of ML, I build and ship full-stack apps with the MERN
                stack, and I compete in Arduino-based robotics events at my
                college's tech fest.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-10">
              {STATS.map(([num, label]) => (
                <div key={label}>
                  <div className="bg-heat-grad bg-clip-text font-display text-[30px] font-bold text-transparent">
                    {num}
                  </div>
                  <div className="mt-1 font-mono text-[12.5px] text-muted-2">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="mb-6">
                <h4 className="mb-3 font-mono text-[13px] uppercase tracking-wider text-muted">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.chips.map((chip) => (
                    <span
                      key={chip}
                      className="cursor-default rounded-md border border-line bg-surface px-3.5 py-1.5 font-mono text-[13px] text-muted transition-all hover:border-transparent hover:bg-heat-grad hover:font-medium hover:text-bg"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
