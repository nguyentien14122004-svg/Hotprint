# P08 — Nhãn hàng & catalog, 15/10/2026

This replaces the earlier P08 layout. User reference: codex-clipboard-eecb8a71-b138-4488-ae34-28f3c7b04eeb.png. Preserve the original HotPrint logo and genuine product artwork; reduce copy. The reference's invented substitute brands are not used.

## Layout and behaviour

Hero with real TRU-CANINE tags; six-category navigation with the sixth highlighted; two tag/publication directions; three paper/layout/finishing notes; four-column library; six FAQs; consultation/quote/sample/factory links; manual three-product carousel; full shared footer. On mobile the sections stack, with two library columns (one at 360px and below).

All eight records are present: 032A5353, 032A5364, 032A5323, 032A5325, HP6435, HP6433, HP6431 and HP6429. Filters contain five product tags and three publications. Preserve the actual 2025 calendar artwork and the real WEbuild, EYAN, fragile-label and instruction-booklet photographs from the official site. Do not substitute the mockup's invented books or labels.

Original photos remain unchanged under `dist/assets/products`. Gallery for 032A5353 includes 032A5353, 032A5283 and 032A5284. Other items each have their original image. The sample and quotation buttons carry the correct product/category context. Filters preserve their URL state across language changes, refresh and browser Back. Forms retain the existing email-preparation workflow.

## Source and maintenance

- `build-tags-catalogues.mjs`: VI/EN page, original-photo dialog, full shared header/footer.
- `dist/catalog-reference-v2.css`: page-scoped reference styling.
- `dist/catalog-reference.js`: filtering and manual carousel.
- `prepare-catalog-layout.mjs`, `catalog-photo-layout.json`, `dist/catalog-photo-placement.css`: per-source geometry and intact silhouette fitting in 10:9 frames.
- `dist/assets/catalog-shadows-v2`: contact/cast shadows, separate from original product pixels; flat tag silhouette includes the real die-cut openings.
- `locales/zh-Hans.json` and `build-chinese.mjs`: Simplified Chinese text and heading.

The page is a styled composition of original photographs on a generated empty backdrop, not a newly photographed product shoot. The original-photo dialog remains available. No generated product, lettering or logo is used. Homepage hero and other category designs are unchanged.

## ImageGen asset

Mode: built-in ImageGen, generation of an empty environment only. Saved project asset: `dist/assets/catalog-stone-empty-v2.webp`. Converted to WebP without altering any product images.

Final prompt:

> Use case: photorealistic-natural. Create an EMPTY commercial stationery photography backdrop, landscape 3:2. Warm ivory and very pale beige natural limestone tabletop, viewed obliquely from 45 degrees above. Entire center and right 80% must be a SINGLE uninterrupted wide FLAT stone surface, no raised podium, no steps or blocks, so flat printed tags can later rest naturally anywhere. Subtle real travertine pores and restrained warm daylight from upper left casting very soft olive-leaf shadows toward lower right. Tiny olive branches only in extreme top right and bottom left corners, never covering central placement area. Left 42% nearly blank softly lit ivory negative space for web text. Cream, warm beige, muted natural green. Editorial natural photography, tactile matte stone, quiet balanced illumination. No products, no paper, no book, no tags, no text, no logo, no people. No horizon cutting through product area, no artificial bokeh, no CGI, no glossy surface, no pedestal.

## Verification

Run `npm run build`, `npm run check`, `npm run verify:deployment`, `npm run test:tags`.

Browser coverage: VI/EN/中文 at 1920, 1440, 1024, 768, 390 and 320px; all eight dialogs and three TRU-CANINE angles; keyboard close/focus return; source image ratios and silhouette bounds; filters 5/3/8, URL history, language and refresh; quotation/sample/consultation context; carousel state and sample context; FAQ keyboard; category/footer links; original logo. Screenshots and report are in ignored `qa/`. Confirm Vercel's deployed revision before announcing publication.
