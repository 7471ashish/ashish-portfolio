import React from "react";
import { NAV_LINKS } from "../data/siteData.js";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-[1000] border-b border-line bg-bg/72 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1140px] items-center justify-between px-8">
        <div className="flex items-center gap-2 font-mono text-[15px]">
          <span className="h-2 w-2 rounded-full bg-heat-grad animate-pulse" />
          ashish.bansal
        </div>

        <div className="hidden gap-9 text-sm text-muted md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-text">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-line px-[18px] py-[9px] font-mono text-[13px] transition-all hover:border-hot hover:shadow-[0_0_24px_-8px_#F97316] md:inline-block"
        >
          Get in touch →
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex flex-col gap-[5px] p-1.5 md:hidden"
        >
          <span className="block h-0.5 w-[22px] bg-text" />
          <span className="block h-0.5 w-[22px] bg-text" />
          <span className="block h-0.5 w-[22px] bg-text" />
        </button>
      </nav>
    </header>
  );
}
