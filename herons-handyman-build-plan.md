# Herons Handyman — Website Build Plan

**For:** Claude Code build session
**Structural reference:** PlumFix (https://plumfix.framer.website/)
**Services section reference:** HandGrid (https://handgrid.framer.ai/)
**Brand:** Herons Handyman
**Non-negotiable:** The final build must closely mirror the *proportions, spacing, shapes, and motifs* of the two reference templates — not a generic Tailwind/shadcn-default look. Every section below names which template it's copying and what specifically to match.

---

## 1. Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) + TypeScript | Standard for Claude Code, good image/perf tooling |
| Styling | Tailwind CSS | Fast to match exact spacing/radius values from screenshots |
| Animation | Framer Motion | Both source templates are built in Framer — Framer Motion gets the closest "native" feel for fades/slides/`whileInView` reveals |
| Parallax / advanced scroll | GSAP + ScrollTrigger (only if Framer Motion's scroll-linked values feel too limited for the hero) | Layered parallax depth |
| Icons | lucide-react | Clean line icons matching both templates' icon style |
| Images | next/image | Responsive, optimized |
| Component polish | shadcn/ui primitives (accordion, dialog) restyled to match palette; **21st.dev for inspiration on secondary components** (testimonial card variants, FAQ styling, stat counters) — use it to refine details, not to replace the page structure below |

---

## 2. Design System

### Color tokens
```
--navy:  #03045E   // darkest — hero base, footer, overlays, headline text on light bg
--blue:  #0077B6   // primary brand blue — nav active state, links, icon fills, secondary buttons
--sky:   #CAF0F8   // light blue — alternating section backgrounds, card fills
--mint:  #e6fdfd   // near-white — subtle section alternation with pure white
--gold:  #ffd60a   // accent only — CTA buttons, one highlighted word per headline, stat numbers, hover states
```

**Application map** (mirrors PlumFix's black/red + HandGrid's white/black/orange, remapped):
- **Hero:** navy gradient over photo, white headline, one **gold** accent word (same trick as PlumFix's red "PLUMBING"), gold primary CTA
- **Services grid (HandGrid style):** white or mint background, icon squares filled sky/blue, gold on hover
- **Why Choose Us / alternating rows:** sky and mint bands alternating with white
- **Stats band:** solid navy background, white numbers, gold for the "+" or unit
- **Testimonials / Gallery / Team:** white background, soft sky-tinted card shadows
- **Footer:** navy background, white text, gold link-hover state

### Typography
- **Display/headline font:** a bold condensed face (Anton, Bebas Neue, or Archivo Black) — replicates the oversized, condensed impact of PlumFix's hero type and watermark text
- **Body font:** clean grotesque (Inter or General Sans) for everything else
- Avoid defaulting to Inter for headlines — that's the #1 thing that makes a Tailwind build look generic

### Shape language
- Pill-shaped buttons, icon riding inside a small circle on the trailing edge — copy this exactly from both templates, it's a shared signature
- Large radius (16–24px) on all photo containers and cards
- Generous vertical section padding — both templates feel airy, not dense

---

## 3. Site Structure — PlumFix skeleton + HandGrid services section

1. **Sticky nav** — logo left, links centered, phone-number pill button right (both templates share this pattern)
2. **Hero (PlumFix structure, stands out per your ask):**
   - Oversized faint "HERONS" watermark text bleeding behind the headline (PlumFix's ghost-text "PLUMFIX" trick)
   - Dark navy gradient over a full-bleed photo of a Herons technician
   - Small pill tag above headline ("Trusted Local Handyman" style)
   - Bold stacked headline, one line in **gold**
   - Two CTAs: solid gold "Book a Job" + outline "Learn More"
   - Floating stat card over the photo (e.g. "500+ Jobs Completed" / "24/7 Callouts") — PlumFix's floating card motif
   - **3-layer parallax on scroll:** watermark text slowest, photo mid-speed, foreground content fastest — this is the main "premium" signal
3. **Trust bar** — logo row, subtle fade-in stagger (PlumFix)
4. **Stats band** — full-width navy strip, animated count-up numbers on scroll-into-view (PlumFix)
5. **Services (HandGrid structure, dropped in here):**
   - Icon-in-colored-square cards, 3×2 grid
   - Short label + one-line description per service
   - Hover: card lifts, icon swaps to gold fill
   - Content: Herons' actual service list (repairs, carpentry, painting, small electrical/plumbing, assembly, renovations — swap for the real list)
6. **Why Choose Us** — PlumFix's alternating image/text zig-zag rows, each row slides in from alternating left/right on scroll
7. **Testimonials** — PlumFix's card carousel with reviewer photo + star rating, slide/fade on scroll, autoplay with pause-on-hover
8. **Gallery** — completed-job photo grid, lightbox on click, staggered grid reveal (PlumFix)
9. **Team** — headshot cards, name/role, subtle hover tilt (PlumFix)
10. **FAQ** — accordion, smooth height animation (PlumFix)
11. **Final CTA banner** — navy/gold, reprises the hero's watermark-text motif for bookend consistency
12. **Footer** — navy, nav links, contact info, socials (PlumFix)

---

## 4. Animation Spec

- **Entrance reveals:** Framer Motion `whileInView`, fade + `translateY(24px → 0)`, children staggered 0.08–0.12s apart, `viewport={{ once: true }}`, custom eased curve (avoid default bounce — bounce reads as "template," not premium)
- **Hero parallax:** 3 layers at different scroll-speed multipliers (~0.2x / 0.4x / 1x)
- **Sticky nav:** shrinks + gains a blurred background once scrolled past hero
- **Stats:** number count-up triggered on viewport entry
- **Buttons:** hover → scale 1.03, shadow lift, icon nudges right a few px
- **Gallery:** staggered grid fade-in; lightbox modal fade + scale
- **Testimonial carousel:** horizontal slide, autoplay, pause on hover
- **Accessibility:** respect `prefers-reduced-motion` — disable parallax/autoplay for users who have it set

---

## 5. Assets & Content Needed (before/while building)
- Logo mark for "Herons Handyman" (a heron motif would tie the name to the mark)
- **Photography: stock, sourced with a deliberate mix of skin tones (brown, light, white) across every photo-driven section** — hero technician shot, why-choose-us rows, testimonial reviewer photos, team headshots, and any people visible in gallery/completed-job shots. Mix within each section rather than clustering one skin tone per section (e.g. don't make the whole team one tone and testimonials another).
- Copy: headline + accent word, service list + one-liners, 3–5 testimonials, FAQ questions, stats (years active, jobs completed, satisfaction rate)

---

## 6. Build Phases (sequence for Claude Code)

1. **Scaffold** — Next.js + Tailwind + Framer Motion, set color tokens and fonts in `tailwind.config`
2. **Static structure pass** — build every section above with correct layout/spacing/proportions, no animation yet, placeholder copy/images
3. **Content pass** — drop in real Herons copy and imagery
4. **Animation pass** — add entrance reveals, hero parallax, counters, hover states
5. **Responsive pass** — mobile breakpoints (hero stacks, nav collapses to hamburger — matching both templates' mobile behavior)
6. **Polish pass** — image optimization, reduced-motion fallback, Lighthouse/perf check

---

## 7. Guardrail Instruction for Claude Code
Explicitly reference the two live template URLs and the structure above when generating each section — match pill-button shapes, large rounded photo containers, the oversized watermark-text hero motif, and the colored icon-square service cards precisely. Use 21st.dev only to refine secondary component details (testimonial card, FAQ, stat counter styling), not to substitute in a different page structure or generic layout.
