# Hộp cứng cao cấp — reference redesign, 14 October 2026

This revision replaces the previous P05 six-section layout with the owner's new botanical reference. Only the rigid-box page is redesigned. The approved homepage hero and other product categories are unchanged.

## Reference and product decision

Match the supplied composition: transparent header, full-width hero, five feature columns, a material-detail panel, four-column product grid, five FAQs, green contact band and complete footer. Use real company photographs instead of the fictional packaging colours/artwork in the mockup. All **13 rigid products** in the catalog remain present; Maison Marou stays classified as rigid.

Hero: **032A5309, brown gift box with gold border**, chosen for the original photograph's resolution, wide box proportions and visible finishing. The finishing close-up is an enlarged crop of the same real photograph. Gallery retains both original angles, 032A5309 and 032A5254.

Sources: existing company-supplied library photographs and `product-image-sources.json`; official imported records in `official-products.json`. The official Pierre Cardin page confirms its rigid-box category: https://hotprint.vn/san-pham/hop-giay-hop-giay-pierre-cardin/ . Do not copy dimensions from that page without confirmation. No product artwork is generated or repainted.

## Implementation

- `build-rigid.mjs`: markup, bilingual copy, authentic catalog, full shared footer and original-photo dialog.
- `dist/rigid-reference-v2.css`: page-scoped layout and responsive styles. Shared theme loads later, so page-specific heading/header overrides must retain adequate specificity.
- `dist/rigid-reference.js`: accent-insensitive search, application filters, URL/history/language state, inherited sample-list awareness.
- `dist/folding.js`: shared original gallery; skip legacy filter handling when the new rigid library exists.
- `dist/rigid-photo-placement.css`: per-photo source canvas coordinates. Products and ground shadows share one transform. Clipped source canvas never overflows the photo frame.
- `prepare-rigid-layout.mjs`, `rigid-photo-layout.json`: reproducible layout metadata; no image pixels are modified. Existing source contours and floor-shadow SVGs are reused. Do not apply drop shadows to the complete box outline.
- `locales/zh-Hans.json`, `build-chinese.mjs`: simplified Chinese page copy and headline order.

All original product image files remain unchanged. Generated files contain **only empty scenes**. Foreground products remain actual source images rendered with existing contours; contact and cast shadows use the source-coordinate floor geometry. Do not replace these with AI-redrawn packaging.

## Image generation

Mode: built-in ImageGen, not CLI/API. Images were inspected and copied into the project as WebP files. Final saved assets:

- `dist/assets/rigid-hero-empty-v2.webp`
- `dist/assets/rigid-catalog-empty-v2.webp`

Existing `dist/assets/carton-olive-branch-v4.webp` is reused for small botanical accents.

Final hero prompt:

> Create a photorealistic empty background plate for a premium rigid-box website hero. Landscape 3:1 composition. Warm ivory beige plaster wall, a broad pale travertine stone plinth occupying the right 58 percent and bottom quarter. TOP SURFACE of plinth is gently sloped in perspective, camera sees the top and thin rough front edge; center top at x72% y79% left fully clear for placement of a landscape rectangular real box. Entire left 43% is clean warm cream negative space for typography. Delicate olive-green leaves from upper right and tiny leaves at lower left of stone, never cross the central product placement. Soft daylight from upper LEFT, soft delicate botanical shadows falling toward right on wall. Quiet realistic photography, matte limestone and subtle grain, restrained natural green warm beige earthy brown palette. No products, no boxes, no text, no logos, no artificial depth blur, no blown highlights, no hard spotlight. Match refined organic botanical commercial packaging photography. Output only the empty photograph.

Final catalog prompt:

> Use case product-mockup EMPTY PHOTOGRAPHY BACKGROUND ONLY for a grid of real rigid gift boxes. 4:3 landscape image. Quiet warm cream limestone tabletop fills lower 70% seamlessly, ivory plaster wall upper30%, gently rounded horizon not a bold line. Camera looking slightly downward at product table with 70mm lens, subtle natural pale travertine grain, small softly out of focus olive leaf at far upper left corner and at extreme lower right edge only, clear entire central 85% for real product. Soft broad natural window daylight upper LEFT, subtle foliage shadow falls to right background. Refined matte organic commercial product photography, soft low contrast, restrained beige/sage, no glare. No product, no boxes, no objects on the center, no text/logo, no invented shadows of absent products, no dramatic bokeh, no floating props.

## Validation

`npm run build`, `npm run check`, `npm run verify:deployment`, and updated `qa-rigid.mjs`.
Browser QA covers VI/EN/ZH at 1920, 1440, 1024, 768, 390 and 320px; all 13 original galleries, image decoding, no horizontal overflow, correct grid columns, accent-insensitive search, application counts (brand 4, gift 5, occasion 4), reset/empty result, reload/back/language state, quote/sample/consultation context, keyboard FAQs, category navigation and footer links. Visual review includes desktop and mobile captures and real source contact sheet. The header navigation was reordered after the initial QA; the final deployed run verifies the same suite again.

The UI adapts to actual product shapes and names, so it should not be described as pixel-identical to the reference's fictional packaging. No dimension filter was invented: the available filter uses verified application groups.
