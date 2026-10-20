import type { RefObject } from "react";

export const scrollToRef = (ref?: RefObject<HTMLElement>) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  ref?.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
};