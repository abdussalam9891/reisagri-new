# Reis Agri Trading — Design & Build Plan
### Reference: Olam Agri (olamagri.com) — scoped down for a 6-page launch site

> **Read this before you build anything.** This plan takes Olam's *patterns*, not their *stack*. Olam is a 33-year, $40B+ agribusiness with a performance engineering team keeping jQuery + Slick + Locomotive Scroll + a custom animation engine from tanking their Core Web Vitals. You're building in vanilla html + js  + Tailwind. Bolting their exact stack onto yours will cause hydration bugs, not credibility. Steal the choreography. Rebuild the engine.

---

## 0. Quick Reference (the whole plan in one screen)

| Decision | Answer |
|---|---|
| Accent colors | **1 total** — orange (~`#E8720F`, sample exact value from design file), used for CTAs, stat numbers, underlines. No second accent. |
| Base colors | Black `#181818` (dark base, reused from Banshiwala's codebase), cream `#F2ECE1` (light), white |
| Headings font | Fraunces — every `h1`–`h6`, no exceptions |
| Body font | Inter — every paragraph, button, label |
| Type scale ceiling | Stop at the 1230px breakpoint values — don't build for 1920px+ |
| Animation library | Framer Motion (`whileInView`) — no jQuery, no Locomotive Scroll |
| Carousel library | Embla or Swiper — not Slick |
| Hero animation | ONE `clip-path` image-reveal per page, nowhere else |
| Interactive map | Skip for launch — static "Where We Source" grid instead |
| Contact form | Hardcoded dropdowns — not JSON-driven like Olam's |
| Reduced motion | Every animation must respect `prefers-reduced-motion` (see §3) |
| Pages | Home / About / Products / Global Sourcing / Why Reis Agri Trading / Contact |

Everything below is the reasoning and detail behind each row. If you're moving fast, this table is your checklist — the sections below are what to read when you need to justify or implement a specific decision.

---

## 1. Color System

**Second correction, and the last one before build.** First draft: terracotta + gold. Second draft (matched to the actual coded homepage): navy + beige + gold. Now, a third and final input arrived — the logo and homepage mockup you shared show the palette actually chosen: **orange + black + cream.** This isn't me flip-flopping; it's the plan catching up to a decision that was already made (bold/ambitious brand direction, not heritage) but hadn't reached this document yet. Navy+gold was a reasonable guess *before* that decision existed — it's the wrong guess now that it does.

**Practical cost worth naming:** the navy/beige/gold homepage HTML built two turns ago in this thread needs its color classes redone to match this. That's real rework, not free. Budget for it rather than being surprised by it later.

Olam's actual palette (`colors.css`) has ~10 accent hues because they color-code distinct businesses, origins, and product lines across a huge site. **You have 6 pages and 6 commodities — one accent color is the correct amount**, regardless of which specific hue wins.

### Reis Agri Trading palette (final, 1 accent)

| Role | Color | Use |
|---|---|---|
| Black (dark base) | `#181818` | Header, hero, dark section backgrounds, footer — reused from the Banshiwala codebase's exact dark value |
| Cream (light base) | `#F2ECE1` | Section backgrounds, alternating with white |
| White | `#FFFFFF` | Section backgrounds |
| **Orange (accent)** | `~#E8720F` — **sample the exact hex from your design file**, this is a close estimate read off a phone-camera screenshot, not a precise value | CTAs, stat numbers, link underlines, section markers |

**Reality check, still true across all three drafts:** one accent, consistently applied, is what reads as intentional — not the specific hue chosen. That held for terracotta, held for gold, holds for orange. Don't let a second accent creep in during build just because orange feels energetic and you're tempted to pair it with something.

### At a glance
```
#181818   black   — dark backgrounds, footer
#F2ECE1   cream   — light section backgrounds
#FFFFFF   white   — light section backgrounds (alternates with cream)
#E8720F   orange  — the one accent: CTAs, stats, underlines (verify exact hex)
```


### Product-origin color coding (optional, small-scale version of Olam's map feature)
Olam hardcodes a color per sourcing country (India `#00904d`, Thailand `#009cdd`, etc.) for their interactive map. You could do a **much simpler** version: one small color chip per product category (rice / sugar / spices / grains / pulses / maize) used ONLY as a tiny accent tag on product cards — not a full interactive map. Building Olam's map component (custom hover states, per-country data panels, SVG/image overlay positioning) is a multi-week feature on its own. Skip it for launch. Revisit post-launch if you have bandwidth.

---

## 2. Typography

Olam's actual desktop scale (`typography.css`, ≥1230px breakpoint):

| Element | Olam size/line-height | Reis Agri Trading equivalent (Fraunces / Inter) |
|---|---|---|
| H1 | 65px / 72px | Fraunces, same scale — hero headline |
| H2 | 56px / 68px | Fraunces — section titles |
| H3 | 48px / 55px | Fraunces — subsection titles |
| H4 | 40px / 48px | Fraunces — card/feature titles |
| H5 | 32px / 40px | Fraunces, lighter weight |
| H6 | 24px / 26px | Inter medium — small headers |
| Body (p1/p2) | 20px/26px, 18px/25px | Inter regular |

Olam uses two font *roles* (`--font-family-secondary` for all headings, `--font-family-primary` for body) — this maps directly onto your existing Fraunces (secondary/display) + Inter (primary/body) decision. No changes needed there; just apply the same **role discipline**: every heading tag uses Fraunces, every paragraph/button uses Inter. Don't let a body paragraph accidentally render in Fraunces — instant "unfinished template" tell.

Olam scales type again at 1920px+ (H1 jumps to 100px) because they're designed for large external monitors. For a launch site, **cap your scale at the 1230px breakpoint values** — don't chase ultra-wide unless analytics later show it's needed. One less thing to test.

---

## 3. Animation System (the real value in the reference)

Olam's actual keyframes, translated to what you'll build:

| Olam effect | What it does | Reis Agri Trading implementation |
|---|---|---|
| `slide-up` | opacity 0→1, translateY 50%→0, 0.6s | Framer Motion `initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}}` |
| `slide-left` / `slide-right` | opacity 0→1, translateX ±50%→0, 0.6s | Same pattern, `x` instead of `y` — use for alternating text/image rows |
| `bubble` | scale 0→1, opacity 0→1, 0.6s | Use sparingly — icon reveals in a feature grid |
| `image-reveal` | scale 1.2→1 + clip-path wipe, 1.5s | This is Olam's signature hero move. Framer Motion: animate `clipPath` from `inset(0 0 100% 0)` to `inset(0 0 0 0)` alongside a scale — use ONCE per page, on your single most important image (hero or "who we are" photo). Overusing this cheapens it. |
| `[data-animate="true"]` + scroll trigger | Everything starts invisible, animates in on scroll | Framer Motion's `whileInView` + `viewport={{ once: true }}` gives you this for free — no IntersectionObserver code needed |
| Locomotive Scroll (smooth scroll physics) | **Skip this.** | Adds real complexity and accessibility/scroll-jank risk for marginal visual gain. Native scroll + `whileInView` gets you 90% of the feel. |
| Slick carousel (jQuery) | **Skip this.** | Use Embla Carousel or Swiper (React-native, no jQuery). |

**Rule of thumb for a 6-page site:** one hero image-reveal per page max, alternating slide-left/slide-right for text+image rows, ease/opacity fades for everything else. If every element on the page animates, nothing feels special — Olam gets away with heavy animation because their pages are long and sparse; don't over-animate a shorter page.

### 3.1 What Olam's code doesn't show but you should still add

Their CSS didn't need to specify these because their JS handles it separately — but they matter for how "finished" the site feels:

- **Stagger on grids.** When a row of cards (product-category, tile-carousel, vision tiles) enters, don't fire all cards at once — offset each by ~80-100ms. Framer Motion: wrap the grid in a parent with `variants` + `staggerChildren: 0.08`. This single detail is what separates "animated" from "professionally animated."
- **Hover microinteractions.** Olam's link underline (`background-size: 0 → 100%` on hover, 0.3s) is a nice, cheap detail worth copying exactly — it's just a CSS transition, no JS needed. Add the same treatment to nav links and inline text links. For product cards, a subtle `scale(1.02)` + shadow lift on hover (150-200ms) reads as intentional without being flashy.
- **Easing.** Olam mixes `linear` (their basic slides) with `cubic-bezier(0.15, 0, 0.2, 1)` (their premium moves — image-reveal, slow parallax slides). Use linear/ease for small UI transitions (hover, underline), and that same cubic-bezier curve for anything larger than ~150px of movement (hero reveals, big section entrances) — it decelerates naturally instead of stopping abruptly, which is what makes it feel expensive.
- **Reduced motion.** Olam's code doesn't appear to handle `prefers-reduced-motion` — that's a genuine gap in their implementation, not something to copy. Wrap your Framer Motion config so users with that OS setting get instant appearance instead of the full slide/reveal. In Framer Motion: check `useReducedMotion()` and drop `y`/`x`/`scale` offsets to 0 when true, keep only the opacity fade. This is a real accessibility requirement, not a nice-to-have — build it in from the start rather than retrofitting it later.
- **Performance budget.** Set yourself a rule before you build: no more than one `whileInView` animation should be capable of firing on-screen at the same time in the initial viewport (excluding staggered children of a single grid, which count as one). If scrolling to a new section ever triggers 4+ independent animations simultaneously, dial it back — that's the moment a mid-range phone starts dropping frames.

---

## 4. Layout Patterns (mapped to Reis Agri Trading's 6 pages)

Olam's actual block types, and which ones are worth rebuilding at your scale:

| Olam block | Worth building? | Reis Agri Trading use |
|---|---|---|
| `leaf-banner` (hero, layered cutout images) | Simplified version, yes | Homepage hero — one strong image + headline, skip the multi-image cutout grid |
| `sticky-menu` (in-page jump nav) | Yes, cheap to build | Useful on Products page if it's long (rice/sugar/spices/grains/pulses/maize sections) |
| `two-column-text` | Yes | Standard content sections across all pages |
| interactive origin `map` | **No — skip for launch** | Too much custom dev for a 6-page MVP. Replace with a static "Where We Source" section: simple grid of countries/regions with flag or icon, no interactivity |
| `tile-carousel` (icon + text, colored underline) | Yes, simplified | "Why Reis Agri Trading" / value props section — 4-5 tiles, ONE shared accent color for underlines, not one-per-tile like Olam |
| `product-category` (alternating image grid) | Yes | Products page — rice/sugar/spices/grains/pulses/maize grid |
| `three-icon-banner` (brand/logo grid) | Only if relevant | Skip unless Reis Agri Trading has partner/certification logos to show |
| `vision` (mission tiles with data points) | Yes, condensed | About page — 3-4 tiles max (not Olam's 9), your actual differentiators: reliability, African market focus, sourcing quality |
| `content-image-slider` | Optional | Could work for a "how we work" step-through on About |
| `featured-news` | **No** | You don't have a newsroom yet — skip until you do |
| `contact-us-form-v2` | Yes, simplified | Contact page — name, email, company, country, product interest, message. Skip Olam's dynamic country/category JSON-driven dropdowns; hardcode your country/product list, it's 6 products not 50. |

### Suggested 6-page structure
1. **Home** — hero (image-reveal), value props (tile-carousel style), product category teaser, CTA
2. **About** — company story, vision/mission tiles, founding info (New Delhi, 2022)
3. **Products** — rice, sugar, spices, grains, pulses, maize — alternating image/text grid (product-category pattern)
4. **Global Sourcing / Markets** — static "Where We Source" section (Africa focus), no interactive map
5. **Why Reis Agri Trading / Quality** — trust signals, differentiators, condensed vision tiles
6. **Contact** — simplified contact-us-form-v2

---

## 5. Tech Stack Mapping

| Olam uses | You use instead |
|---|---|
| Vanilla JS + custom `Animation`/`TextAnimation` classes | Framer Motion |
| jQuery + Slick carousel | Embla Carousel (React) |
| Locomotive Scroll | Skip — native scroll |
| Adobe AEM (enterprise CMS) | Next.js + your existing Supabase setup |
| Vimeo modal video | Skip unless you actually have video assets — don't build a video modal system for content you don't have yet |

---

## 6. Before You Build — Stress Test Checklist

- [ ] Have you picked exactly 2 accent colors and written them down, so you don't drift to 5 mid-build?
- [ ] Is every `<h1>`–`<h6>` actually using Fraunces and every paragraph actually using Inter — checked in the browser, not assumed?
- [ ] Does each page have **one** hero-level animation (image-reveal), not five competing entrance effects?
- [ ] Did you cut the interactive map and dynamic form dropdowns from scope, or are they quietly still on your to-do list eating time you don't have?
- [ ] Does the Products page's alternating image grid actually work with real product photography you have, or are you planning around stock images you haven't sourced yet?
- [ ] Have you tested scroll-reveal animations on a mid-range Android phone (not just your dev laptop) — Framer Motion is lighter than Olam's stack but still needs a real mobile check, especially since your audience includes African markets where connection speed and device tier vary more than a Delhi/US audience.


























Priority order for building
✅ Hero
Product Categories
About Reis Agri Trading
Why Choose Us
Export Process
Featured Commodities
Global Presence
Certifications
Testimonials
FAQ
CTA

This order gives visitors the right flow: attention → credibility → capability → proof → action, which is exactly what a B2B export website should achieve.




Navbar
Hero
Product Categories
About
Why Choose Us
Export Process
Featured Products
Global Presence
Certifications
Testimonials
FAQ
CTA
Footer
