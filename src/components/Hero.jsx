import React from "react";
import HeatCanvas from "./HeatCanvas.jsx";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
      <HeatCanvas />
      <div
        className="pointer-events-none absolute inset-0 z-0 [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_20%,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-8">
        <div className="mb-[22px] flex items-center gap-2.5 font-mono text-[13px] text-hot before:h-px before:w-6 before:bg-hot">
          B.TECH IT · IIIT UNA · CGPA 8.43
        </div>
        <h1 className="max-w-[920px] font-display text-[40px] leading-[1.02] sm:text-[56px] lg:text-[82px]">
          Building AI systems
          <br />
          that show their{" "}
          <span className="bg-heat-grad bg-clip-text text-transparent">
            reasoning.
          </span>
        </h1>
        <p className="mt-6 max-w-[560px] text-[17px] text-muted">
          I'm Ashish — a full-stack developer and ML engineer who trains models,
          then insists on explaining why they made the call. Grad-CAM heatmaps,
          deployed apps, and clean APIs are my usual toolkit.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-text px-6 py-3.5 text-sm font-medium text-bg transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(249,115,22,0.45)]"
          >
            View projects ↓
          </a>
          <a
            href="https://github.com/7471ashish"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-6 py-3.5 text-sm text-muted transition-all hover:border-cool hover:text-text"
          >
            GitHub ↗
          </a>
          <a
            href="https://huggingface.co/Ashish7471"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-6 py-3.5 text-sm text-muted transition-all hover:border-cool hover:text-text"
          >
            Hugging Face ↗
          </a>
        </div>
      </div>
      <div className="absolute bottom-9 left-8 hidden items-center gap-2.5 font-mono text-xs text-muted-2 sm:flex">
        <div className="h-[30px] w-px bg-gradient-to-b from-muted-2 to-transparent" />
        scroll
      </div>
    </section>
  );
}
