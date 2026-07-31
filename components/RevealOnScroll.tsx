"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
  direction = "up",
}: RevealOnScrollProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const getDirectionStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-8";
      case "down":
        return "-translate-y-8";
      case "left":
        return "translate-x-8";
      case "right":
        return "-translate-x-8";
      case "none":
        return "";
      default:
        return "translate-y-8";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${getDirectionStyles()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
