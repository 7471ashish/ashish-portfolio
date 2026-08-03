import React from "react";
import { CONTACT_ITEMS } from "../data/siteData.js";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 pb-16 text-center lg:py-[120px]">
      <div className="mx-auto max-w-[1140px] px-8">
        <span className="mb-3.5 block font-mono text-[13px] text-hot">
          05 / CONTACT
        </span>
        <h2 className="mx-auto max-w-[760px] text-[32px] font-semibold sm:text-[44px] lg:text-[58px]">
          Let's build something
          <br />
          worth explaining.
        </h2>
        <p className="mx-auto mt-4.5 max-w-[560px] text-base text-muted">
          Open to internships, collaborations, and interesting problems. Reach
          out however works for you.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:bansalashish346@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-text px-6 py-3.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(249,115,22,0.45)]"
          >
            Email me ↗
          </a>
          <a
            href="https://linkedin.com/in/ashish-bansal"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-6 py-3.5 text-sm text-muted transition-all hover:border-cool hover:text-text"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-line md:grid-cols-4">
          {CONTACT_ITEMS.map(({ k, v, href }) => (
            <div
              key={k}
              className="border-b border-r border-line p-6 text-left transition-colors last:border-r-0 hover:bg-surface md:border-b-0"
            >
              <div className="font-mono text-[11.5px] uppercase tracking-wider text-muted-2">
                {k}
              </div>
              <div className="mt-2 text-[14.5px]">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {v}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
