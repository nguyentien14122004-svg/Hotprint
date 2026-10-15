# P10 — Về HotPrint, 15/10/2026

This replaces the previous six-section About page. Reference: codex-clipboard-920f7c99-ca2e-4af9-aa6a-9a94502b7a65.png. Preserve the original logo, use genuine company photographs, reduce text, and follow the reference's cream/green/brown editorial rhythm.

## Layout and factual content

Eight sections: introduction, brand story, four values, people, production, milestones, a manual product carousel, and green contact panel. Full shared navigation and footer remain. History expands on demand; six product families rotate in groups of three on desktop or one on mobile. Quote and consultation links use the existing request workflow, including the company-documentation context. Language switches preserve the current section.

The official About page, https://hotprint.vn/ve-chung-toi/, was checked on 15 October 2026. It states Hoàng Thị's establishment on 6 September 2004 and its Australian branch in 2018. These are historical milestones, not annual performance claims. The other figures (6 families, 67 website samples) are computed from the current product data. The reference's unverified customer/staff/project totals and testimonials were replaced with actual sample photographs and grounded information. No new certification claim or AI company portrait/exterior is introduced.

## Photo selection

All 39 supplied factory/activity JPGs were reviewed. No exterior photograph was available, so the hero shows the actual production floor rather than an invented building.

| Role | Source ID |
| --- | --- |
| Hero, production overview | 032A5054 |
| Story, care in finishing | 032A4938 |
| People, team activity | 032A5101 |
| Equipment operation | 032A5028 |
| Surface finishing | 032A5030 |
| Inspection | 032A5134 |
| Packaging finishing | 032A5146 |

These existing files under `dist/assets/factory` are mapped in `factory-image-sources.json`. Photos retain their full aspect ratio and content. Botanical decoration and paper frames sit outside the photographs. Their existing light and shadows remain unchanged.

The six sample IDs are 032A5293, 032A5315, 032A5331, 032A5366, 032A5328 and 032A5353. Original product pixels, existing masks and separate floor shadows are reused from the product library. These are styled photographic compositions, not a newly photographed shoot. Links open the corresponding product family.

## Source files

- `build-about.mjs`: entry point importing `build-about-reference.mjs`.
- `build-about-reference.mjs`: VI/EN content, shared header/footer and factual figures.
- `dist/about-reference-v2.css`: scoped layout, responsive design, locally loaded Vietnamese-capable editorial font.
- `dist/about-product-placement.css`: six existing library geometries, masks and shadow alignment.
- `dist/about-reference.js`: manual carousel and language-anchor preservation.
- `build-chinese.mjs`, `locales/zh-Hans.json`: Simplified Chinese content and formatted headings.
- `qa-about-reference.mjs`: current About checks; `npm run test:about` points here. The old `about.css` and `qa-about.mjs` are historical and not the current implementation.

## ImageGen asset

Mode: built-in ImageGen, generation of an empty decorative environment only. Saved asset: `dist/assets/about-botanical-paper-v2.webp`. Converted to WebP for the website. No person, factory, product, logo or packaging artwork was generated or edited.

Final prompt:

> Use case: photorealistic-natural. Asset type: empty botanical paper backdrop for the About page of a Vietnamese paper packaging company. Landscape 3:2. A completely flat warm ivory uncoated paper surface with extremely subtle fine natural fibers, diffuse warm window light from upper left. Muted olive foliage only at the far left bottom corner and far right top corner, small realistic leaves and soft restrained contact shadows, center 85 percent blank and evenly lit for website text and separate real photographs. Warm beige #E7DFD1, ivory #F7F2E8, muted natural green #5E7D5A. Quiet premium editorial photography, no bokeh or harsh spotlight. No products, no packaging, no people, no buildings, no company signs, no text, no logo, no icons, no furniture, no CGI. This is only a restrained decorative background; all people and company photos will be real and placed separately.

## Verification

Run `npm run build`, `npm run check`, `npm run verify:deployment`, and `npm run test:about`. Set `QA_ORIGIN` to the preview or deployed origin when needed.

Browser checks cover VI/EN/中文 at 1920, 1440, 1024, 768, 390 and 320 pixels; full photo proportions, font loading, original logo, carousel/dots/resizing, keyboard history expansion, request contexts, navigation, language anchors, asset responses and browser errors. Desktop and phone screenshots are inspected visually, including Vietnamese diacritics. The homepage hero and product category pages are outside this change.
