"use client";

import { useEffect } from "react";

export function HomeAnimations() {
  useEffect(() => {
    let cleanup = () => {};

    const init = async () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      await document.fonts.ready;

      const { initHomeAnimations } = await import("@/lib/gsap-text-reveal");
      cleanup = initHomeAnimations();
    };

    void init();

    return () => cleanup();
  }, []);

  return null;
}
