import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type CharRevealOptions = {
  stagger?: number;
  delay?: number;
  scrollTrigger?: ScrollTrigger.Vars;
};

export function revealAllAnimatedElements() {
  gsap.set(".hero h1, .head-split, .load, .nav-load", {
    opacity: 1,
    y: 0,
    filter: "none",
    clearProps: "transform,filter",
  });
}

export function createCharReveal(
  element: Element,
  { stagger = 0.035, delay = 0.2, scrollTrigger }: CharRevealOptions = {},
) {
  return SplitText.create(element, {
    type: "lines,words,chars",
    autoSplit: true,
    onSplit: (self) => {
      gsap.set(element, { opacity: 1 });
      return gsap.from(self.chars, {
        opacity: 0,
        y: 14,
        filter: "blur(8px)",
        duration: 0.75,
        ease: "power2.out",
        stagger,
        delay,
        immediateRender: !scrollTrigger,
        scrollTrigger,
      });
    },
  });
}

export function initHomeAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    revealAllAnimatedElements();
    return () => {};
  }

  const splits: SplitText[] = [];

  try {
    gsap.fromTo(
      ".nav-load",
      { opacity: 0, y: -18 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.35, ease: "power2.out" },
    );

    gsap.fromTo(
      ".hero .load",
      { opacity: 0, y: 42 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power2.out",
        delay: 0.95,
        stagger: 0.22,
      },
    );

    const titleEl = document.querySelector(".hero h1");
    if (titleEl) {
      splits.push(
        createCharReveal(titleEl, {
          stagger: 0.05,
          delay: 0.35,
        }),
      );
    }

    document.querySelectorAll(".head-split").forEach((heading) => {
      splits.push(
        createCharReveal(heading, {
          stagger: 0.04,
          delay: 0.1,
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }),
      );
    });
  } catch (error) {
    console.error("GSAP animation init failed:", error);
    revealAllAnimatedElements();
  }

  return () => {
    splits.forEach((split) => split.kill());
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf(".nav-load, .hero .load, .hero h1, .head-split");
  };
}
