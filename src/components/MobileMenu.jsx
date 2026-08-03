import React from "react";
import { NAV_LINKS } from "../data/siteData.js";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-x-0 top-[72px] bottom-0 z-[900] flex flex-col gap-7 bg-bg px-8 py-10 font-display text-[22px] md:hidden">
      {NAV_LINKS.map((l) => (
        <a key={l.href} href={l.href} onClick={onClose}>
          {l.label}
        </a>
      ))}
    </div>
  );
}
