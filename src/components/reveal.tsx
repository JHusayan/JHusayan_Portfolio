import React from "react";

type Dir = "up" | "left" | "right" | "none";

const hidden: Record<Dir, string> = {
  up: "translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  none: "",
};

interface RevealProps {
  show: boolean;
  direction?: Dir;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

const Reveal = ({ show, direction = "up", delay = 0, className = "", children }: RevealProps) => (
  <div
    className={`transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none ${
      show ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hidden[direction]}`
    } ${className}`}
    style={{ transitionDelay: show ? `${delay}ms` : "0ms" }}
  >
    {children}
  </div>
);

export default Reveal;