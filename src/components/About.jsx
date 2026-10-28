import React from "react";
import Reveal from "./Reveal.jsx";
import { SKILL_GROUPS } from "../data/siteData.js";

const STATS = [
  ["8.53", "CGPA (IIIT UNA)"],
  ["1000+", "PROBLEMS SOLVED"],
  ["TOP 416", "ADOBE HACKATHON"],
  ["98.2%", "DIAGNOSTIC ACCURACY"],
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
                I'm pursuing my{" "}
                <strong className="font-medium text-text">
                  Bachelor of Technology in Information Technology at IIIT Una
                </strong>
                , working across Artificial Intelligence, Generative AI,
                Full-Stack Development, and Algorithmic Problem Solving.
              </p>
              <p>
                I recently worked as an{" "}
                <strong className="font-medium text-text">SDE Intern at VRV Group</strong>{" "}
                engineering interactive portal frontends with React.js, Tailwind CSS, and Framer Motion,
                and delivered a multi-page client website as a{" "}
                <strong className="font-medium text-text">Freelance Web Developer for DRB &amp; Company</strong>.
              </p>
              <p>
                My current focus is building intelligent systems using{" "}
                <strong className="font-medium text-text">
                  LLMs, Agentic AI, LangChain, LangGraph, and RAG
                </strong>
                , alongside fine-tuning computer vision &amp; deep learning models
                (EfficientNetB0, Grad-CAM).
              </p>
              <p>
                I have solved{" "}
                <strong className="font-medium text-text">1000+ coding problems</strong>{" "}
                (500+ on LeetCode) and placed among the{" "}
                <strong className="font-medium text-text">Top 416 out of 1.05 lakh teams (Top 0.4%)</strong>{" "}
                in the Adobe Hackathon 2026.
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
