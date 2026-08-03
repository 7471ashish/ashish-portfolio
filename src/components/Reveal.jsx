import React, { forwardRef } from "react";
import { useReveal } from "../hooks/useReveal.js";

/**
 * Fade-and-rise wrapper for the scroll-reveal effect.
 * `as` lets you choose the rendered tag (div, article, etc.),
 * and it forwards a ref so children can also attach behavior
 * (e.g. the project card's mouse-tilt glow) to the same node.
 */
const Reveal = forwardRef(function Reveal(
  { as: Tag = "div", className = "", children, ...rest },
  forwardedRef
) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={(node) => {
        ref.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Reveal;
