import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type CharRevealOptions = {
  stagger?: number;
  delay?: number;
  scrollTrigger?: ScrollTrigger.Vars;
};

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
        y: 10,
        filter: "blur(8px)",
        duration: 0.5,
        ease: "power2.out",
        stagger,
        delay,
        scrollTrigger,
      });
    },
  });
}

export function initHomeAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return () => {};

  const splits: SplitText[] = [];

  const titleEl = document.querySelector(".hero h1");
  if (titleEl) {
    splits.push(
      createCharReveal(titleEl, {
        stagger: 0.035,
        delay: 0.2,
      }),
    );
  }

  gsap.from(".nav-load", {
    opacity: 0,
    y: -14,
    duration: 0.9,
    delay: 0.2,
  });

  gsap.from(".hero .load", {
    opacity: 0,
    y: 34,
    duration: 0.6,
    ease: "power2.out",
    delay: 0.55,
    stagger: 0.13,
  });

  document.querySelectorAll(".head-split").forEach((heading) => {
    splits.push(
      createCharReveal(heading, {
        stagger: 0.025,
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          once: true,
        },
      }),
    );
  });

  return () => {
    splits.forEach((split) => split.kill());
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf(".nav-load, .hero .load, .hero h1, .head-split");
  };
}
