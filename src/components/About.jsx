import React from "react";
import Reveal from "./Reveal.jsx";
import { SKILL_GROUPS } from "../data/siteData.js";

const STATS = [
  ["8.53", "CGPA"],
  ["500+", "LEETCODE SOLVED"],
  ["TOP 416", "ADOBE HACKATHON"],
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
                , where I work across software engineering, Generative AI,
                Machine Learning, and Data Structures &amp; Algorithms.
              </p>
              <p>
                My current focus is building intelligent systems using{" "}
                <strong className="font-medium text-text">
                  LLMs, Agentic AI, LangChain, LangGraph, and RAG
                </strong>{" "}
                while also developing reliable backend and full-stack
                applications.
              </p>
              <p>
                I enjoy building complete products — from AI agents and RAG
                pipelines to responsive web applications and deployed ML
                systems.
              </p>
              <p>
                My core computer science foundation is built on{" "}
                <strong className="font-medium text-text">
                  Data Structures &amp; Algorithms, Operating Systems, Computer
                  Networks, Object-Oriented Programming, and DBMS
                </strong>
                .
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
