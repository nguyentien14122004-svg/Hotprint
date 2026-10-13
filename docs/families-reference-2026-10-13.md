# Product families — reference and grounded photography, 13 October 2026

## Scope and source

The latest user reference replaces only P02's six-category section (`#nhom-san-pham`). Keep the approved product hero, full library, other pages and original image files. The user also requested realistic product shadows and GitHub synchronization, including the completed homepage contact update.

Edit `products-template.html`, `dist/products.js`, `dist/products-families-reference.css`. The new stylesheet follows `products-lighting.css`; all new rules are scoped to `#nhom-san-pham`. `build-products.mjs` includes it, and builds Vietnamese, English and Simplified Chinese. New translations are in products.js and `locales/zh-Hans.json`.

## Reference geometry

At 1672px viewport the content is approximately 1482px wide, with 545:442:464 column proportions, 16px gutters and 269/252px row heights. All six cards align by column. Heading uses Playfair Display and a brown Times New Roman italic second line, followed by the supplied introduction. Muted green icons, cream paper, natural stone stages, pale olive foliage, fine contour lines, small sample counts and the three service notes follow the reference.

The original logo and product hero are retained; the reference header is shared navigation, not a request to replace the approved logo artwork.

## Live family filter

Six real buttons use `aria-pressed`, a labelled group and a polite result announcement. `family` is a separate query key from the full library's `group` and `q`.

- All products: six families.
- Paper packaging: three box families and paper bags.
- Paper boxes: folding cartons, printed corrugated boxes and rigid boxes.
- Paper bags, Labels & decals, Other print: their individual family.

Filtering preserves original card indices, imagery and corresponding category links. Query survives refresh, history navigation and language switching. It does not overwrite the full library's search, selection or category filter. Mobile uses wrapping 44px filter targets and a single column of cards.

## Genuine product images and shadows

All six original files are unchanged: 032A5315, 032A5366, 032A5293, 032A5331, 032A5339 and 032A5353, in `dist/assets/products/`. Existing polygon cutout windows and the tag-hole mask reveal those original pixels. No generated text/brand/product substitutes are used.

Each photograph has three independent CSS layers:
1. A small edge shadow, under one pixel, to remove a hard pasted outline.
2. A contact shadow derived from its own footprint, tight and darker where it touches the stone.
3. A soft cast shadow offset right/down, matching upper-left stage light. Upright cartons and bags use broader blur; rolled labels use shorter shadows; thin tags have a restrained 1–2px displacement.

Original aspect ratios are preserved. Product placement and shadows share the same width/position/rotation variables, so shadows stay attached when cards resize. No hover animation lifts products away from the contact shadow. Mobile placements keep products inside their cards and preserve readable text.

## Image generation and packaged assets

Built-in Imagegen was used only to derive EMPTY stages from the user-supplied reference. The clean atlas was visually checked to contain no products or interface text. Packaged assets:
- `dist/assets/families-reference-outer.webp` — outer paper/foliage plate; CSS masks the six interior rectangles out of the decorative layer.
- `dist/assets/families-reference-1.webp` through `families-reference-6.webp` — six blank natural stone stages.

Prompt:
> Precise edit, background-only plate matching the attached 1672x941 reference. Remove all interface text, icons, logo, buttons, filters and all six product objects. Preserve card rectangles at (93,317,545,269), (654,317,442,269), (1112,317,464,269), (93,603,545,252), (654,603,442,252), (1112,603,464,252). Preserve cream paper swooshes, sage backdrop, travertine stages, foliage and leaf shadows in their original positions. Reconstruct clean empty stone where products stood, with no ridges crossing footprints. Preserve warm beige outer paper, fine contour lines, botanical linework and olive foliage at opposite corners. No products, packaging, brands, text or UI. Real original product cutouts will be placed separately in HTML.

## Validation

`npm run build`, `npm run check`, `npm run verify:deployment`, `npm run test:families-reference`, `npm run test:browser`, `npm run test:home-contact`.
New QA checks VI/EN/中文 at 1672, 1440, 1024, 768, 390 and 320px; six real image paths/counts, filter results/persistence/history, 18 corresponding category destinations, language switching, no horizontal overflow or failed assets. Existing browser QA covers library search, gallery and selection. Homepage contact QA covers the other pending update. Screenshots and reports are in ignored `qa/`.
