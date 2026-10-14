# Nhãn dán decal — reference redesign, 15 October 2026

Current P07 direction: follow the owner's botanical label reference, preserve the original logo, use the company's real products, and reduce unnecessary copy.

## Scope and authentic samples

Seven existing catalog records remain visible: 032A5339, 032A5328, 032A5337, HP6427, HP6425, HP6423, HP6420.
Hero: the original high-resolution red roll 032A5328. Its long unrolled strip, core, print and liner remain intact.
The four website-sourced products keep their actual artwork and colours, rather than copying the invented white, brown or HotPrint-branded examples in the mockup.
Sources are recorded in product-image-sources.json and official-products.json; original images in dist/assets/products are unchanged.

Layout: hero; six-category navigation; three label types; intentional print close-up; three compact material notes; seven-card four-column library; six FAQs; quotation/sample/factory CTA; three-slide manual original-photo showcase; complete shared footer.
The footer uses published company information, not the reference image's invented address/hours/form. No unverified adhesive performance or machine specifications are promised.

## Files

- build-labels.mjs — VI/EN markup and short copy.
- dist/labels-reference-v2.css — page-scoped reference layout, responsive.
- dist/labels-reference.js — application filter, URL/back/refresh/language persistence, manual carousel and model context.
- prepare-label-layout.mjs — proportional placement from existing source masks and registered floor-shadow geometry.
- label-photo-layout.json, dist/label-photo-placement.css, dist/assets/label-shadows-v2/ — reproducible layout and ground shadows.
- dist/folding.js — shared original-photo dialog; new filter controller does not run legacy filtering.
- locales/zh-Hans.json — Simplified Chinese copy.
- qa-labels.mjs — browser checks.

The 10:9 frame preserves original source geometry. Source contours retain printed details; shadows sit on the ground rather than around every edge. Only the close-up banner deliberately magnifies/crops the source; full originals are always available.

## ImageGen

Mode: built-in ImageGen, empty background only. Final selected asset: dist/assets/label-hero-empty-v2.webp.
Reuse the previously approved empty card stage dist/assets/rigid-catalog-empty-v2.webp and botanical accent dist/assets/carton-olive-branch-v4.webp.
Generated backgrounds never contain replacement products or labels. Product bitmap files and original logo remain untouched.

Final prompt:

> Use case product-mockup: EMPTY background photograph for an adhesive label website, panoramic 3:1. Premium sunlit ivory atelier, warm beige cream #E7DFD1, subtle natural green olive sprigs, pale matte travertine. Camera looking downward 35 degrees with a 70mm lens. Broad spacious stone table top fills the RIGHT 60 percent from y=35 percent to bottom edge. Uninterrupted flat empty area x48-91 percent y40-94 percent must support a label roll and its unrolled strip later; do not draw products or their shadows. A very thin stone front edge may appear only at extreme bottom, below y=96 percent. Warm plaster back wall, faint soft window shadows. Left 42 percent quiet creamy empty negative space for dark typography. Small delicate green branches at top right, tiny sprig near far bottom left, distant small stone block at far right only; no leaf or object across center placement area. Soft broad commercial studio daylight from upper left, gentle natural contrast, fine authentic stone texture, no artificial blur. Elegant real photograph, realistic perspective, no labels, no rolls, no packaging, no text, no logos, no artificial CGI, no harsh spotlight or blown white.

## Verification

Run npm run build, npm run check, npm run verify:deployment, npm run test:labels.
Browser coverage: VI/EN/简体中文 at 1920, 1440, 1024, 768, 390 and 320 px; all seven original-photo dialogs; filter counts 3/2/2; back/refresh and language state; no horizontal overflow; source aspect ratios within 1%; original logo; quotation/sample/consultation context; FAQ keyboard operation; manual carousel and sample context; internal footer/category links.
Local screenshots and reports are under ignored qa/. Verify the deployed Vercel page before reporting publication complete.

