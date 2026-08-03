import React from "react";
import Reveal from "./Reveal.jsx";
import { ACHIEVEMENTS } from "../data/siteData.js";

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-line py-24 lg:py-[120px]">
      <div className="mx-auto max-w-[1140px] px-8">
        <Reveal className="mb-14 max-w-[640px]">
          <span className="mb-3.5 block font-mono text-[13px] text-hot">
            03 / ACHIEVEMENTS
          </span>
          <h2 className="text-[28px] font-semibold sm:text-[36px] lg:text-[42px]">
            Robotics &amp; competitions
          </h2>
          <p className="mt-3.5 text-[15.5px] text-muted">
            Results from Aavesh Techfest, IIIT Una's technical club I'm an active
            member of.
          </p>
        </Reveal>

        <Reveal className="relative border-l border-line pl-8">
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={item.event}
              className={`relative ${i === ACHIEVEMENTS.length - 1 ? "" : "pb-10"}`}
            >
              <span className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full border-2 border-hot bg-bg" />
              <div className="font-display text-[16.5px] font-medium">
                <span className="bg-heat-grad bg-clip-text text-transparent">
                  {item.place}
                </span>{" "}
                — {item.event}
              </div>
              <div className="mt-1 font-mono text-[12.5px] text-muted-2">{item.year}</div>
              <p className="mt-2.5 max-w-[600px] text-[14.5px] text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
