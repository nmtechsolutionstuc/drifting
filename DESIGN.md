# Design

<!-- impeccable:design-schema 1 -->

## World

Street-culture magazine cover / fanzine, not a product catalog. The page reads as a hand-set cover: scattered, angled cover-line callouts carry offers and product tags instead of a centered hero-then-grid template. Direction won the concept-seed roll against the assigned "skate deck/griptape" candidate (seed key `9dba2328`, challenger `posters-covers-sleeves-movida-scene-magazine`), raised with a per-character cascading reveal borrowed from a declined split-flap-board challenger.

## Palette

Color strategy: Committed (one saturated ink carries 30-60% of key fields against a near-black ground).

- `--color-ink` `#0e0d0c` — page ground
- `--color-ink-soft` `#171513` — alternating section ground
- `--color-bone` `#f3f1ec` — primary text / logo ink
- `--color-bone-dim` `#cfccc3` — secondary text
- `--color-flare` `#ff3d8a` — hot pink ink, primary accent/callouts
- `--color-acid` `#c6ff3d` — acid green ink, secondary accent/CTAs
- `--color-rust` `#ff6a3d` — tertiary accent (look tags)

Dark ground is a deliberate choice for a Persuade/streetwear surface at night-scroll scale, not a default.

## Typography

- Display (`font-display`): Bebas Neue — masthead, headlines, giant ghost words. Uppercase, tight tracking, condensed.
- Body/UI (`font-body`): Archivo — paragraphs, nav, form fields.
- Kicker/label (`font-mono`): Space Mono — all-caps tracked labels, tags, buttons, table headers.

## Components & patterns

- **Misregistered link** (`.misregister`): cheap-print chromatic-offset hover state (pink/green ghost copies offset ±2px) used on nav links and the hero's "Ver colección" link.
- **Grain overlay** (`.grain`): SVG feTurbulence noise, `mix-blend-mode: overlay`, used on Hero, the mobile nav sheet, and Newsletter.
- **Scattered cover-line tag**: small mono-uppercase chip on a solid ink-color background, rotated a few degrees, used for hero callouts and product-card tags. Rotation stays a per-card accent, never applied to full card bodies (commerce grid keeps a clean aligned grid for usability).
- **Giant ghost word**: oversized Bebas Neue word at ~6% bone opacity behind hero/newsletter content ("FLOW", "DRIFT").
- **Marquee trust bar**: looped horizontal scroll of icon + label pairs, `animate-marquee` (22s linear).

## Hero motion (brief-pinned, translated)

Carried over from the reference "TOONHUB" carousel mechanic (`motion-site.md`), fully reskinned:

- 4 hero character renders in `center` / `left` / `right` / `back` roles, one role per look, rotating via `navigate('next' | 'prev')` with a 650ms animation lock.
- Per-role transform/blur/opacity/position crossfade over `650ms cubic-bezier(0.4,0,0.2,1)`.
- Reference's per-slide background hue-cycle was translated into a per-look ink tag color (pink/acid/rust) on the active look's kicker, keeping the near-black ground commitment intact.
- Reference's giant ghost wordmark ("3D SHAPE") became "FLOW", tying directly to the brand claim.
- Reference's bottom-right "DISCOVER IT" link became "Ver colección" with the misregister hover treatment.

Respects `prefers-reduced-motion` globally (animation/transition durations collapse to ~0).

## Content rules honored

- No fabricated prices/discounts — product cards route to "Consultar por WhatsApp" instead of invented pricing.
- Example testimonials are explicitly labeled "Ejemplo — reemplazar por reseñas reales", not presented as real.
- Size chart is explicitly labeled as reference measurements to confirm over WhatsApp, not asserted as exact real specs.
- Every product CTA and the newsletter's implicit next step routes to WhatsApp/Instagram — there is no cart/checkout.

## Known accepted risk

Several product photos and all 4 hero character renders show visible third-party trademarks (Mercedes-Benz, BMW Motorsport, Chevrolet, KTM, Puma on caps/apparel; a Chrome Hearts–style print). Flagged explicitly to the user, who chose to proceed with the assets as-is. See `PRODUCT.md` → Evidence on Hand for detail. Do not re-flag.

## Hero fixes (post-launch)

- **Per-character scale correction**: the 4 hero renders have inconsistent source aspect ratios (0.8/0.75/0.667/0.667) against the carousel's fixed 0.6 box aspect, so `object-fit: contain` rendered them at different effective sizes (75-90% box fill). Added a `sizeCorrection` multiplier per look in `Hero.tsx` (1.2 / 1.125 / 1 / 1) so all 4 render at the same absolute pixel height.
- **Transform-origin bottom-anchor**: `transform: scale()` on the carousel items defaulted to scaling from the box center, which pushed bottom-anchored (`bottom: 0`) boxes past the viewport and clipped characters' feet — worse the larger the scale/correction. Fixed by setting `transformOrigin: "bottom center"` so scaling only grows upward (trades a bit of headroom clipping for full feet visibility, the right trade for fashion photography).
- **"LOOK 0X" tag position**: was anchored inside the character wrapper near its top edge, which for the tall "center" role landed almost exactly under the navbar. Moved it to the fixed cover-line layer at a safe `top-24` offset, keyed off `activeIndex` instead of per-look conditional rendering.
- **Reduced-motion transition duration**: the `prefers-reduced-motion` override used `0.001ms` instead of `0s`, which could leave the compositor mid-interpolation on an effectively-zero-but-nonzero transition. Changed to `0s !important` for a guaranteed instant, unambiguous final value.

## Provenance

All raster assets are the user-provided photography from `C:\Users\nmart\Pictures\assets-drifting`, converted to WebP (quality 82, longest edge capped at 1400px) for performance and copied into `src/assets/`. No generated or stock imagery was introduced.

## Verification performed

TypeScript build (`tsc -b`), `oxlint`, and `vite build` all pass clean. All images confirmed loaded (`naturalWidth > 0`, `complete: true`) via the dev server. DOM/computed-style inspection confirms every section renders with correct copy, contrast, and links. A full visual screenshot pass could not run this session because the user's Browser pane panel was closed (screenshots return blank while hidden); structural verification substituted for it. Recommend a quick visual pass once the panel is open, particularly the hero carousel motion and mobile breakpoints.
