import React, { useEffect, useRef } from "react";

/**
 * Cursor-reactive Grad-CAM-style glow behind the hero section.
 * Pure Canvas API — this part can't be expressed in Tailwind/JSX,
 * so React just owns the ref + effect lifecycle around the same
 * imperative drawing code the static site used.
 */
export default function HeatCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.parentElement;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w, h, mx, my, tx, ty, raf;

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    mx = tx = w / 2;
    my = ty = h * 0.4;

    function onMove(e) {
      const r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
    }
    hero.addEventListener("mousemove", onMove);

    const stops = [
      [0.0, "30,58,138"],
      [0.25, "59,130,246"],
      [0.5, "6,182,212"],
      [0.72, "245,158,11"],
      [1.0, "239,68,68"],
    ];

    function draw() {
      if (!reduceMotion) {
        mx += (tx - mx) * 0.06;
        my += (ty - my) * 0.06;
      } else {
        mx = w / 2;
        my = h * 0.4;
      }
      ctx.clearRect(0, 0, w, h);
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, Math.max(w, h) * 0.42);
      stops.forEach(([v, c]) =>
        grad.addColorStop(v, `rgba(${c},${v === 0 ? 0.32 : (1 - v) * 0.28})`)
      );
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      hero.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-55 pointer-events-none"
    />
  );
}
