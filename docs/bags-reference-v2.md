# Túi giấy — reference redesign, 15 October 2026

This is the current P06 design. It replaces the earlier eight-product page while preserving all 15 genuine paper-bag records now available in the catalog. The owner requested the supplied warm window/travertine reference, the original HotPrint logo, and less copy.

## Layout and content

- Karl Lagerfeld 032A5331 hero, short introduction, quotation and collection links.
- Six useful section anchors rather than unverified delivery/quantity promises.
- Three authentic bag styles: Karl Lagerfeld, Socola, bird-pattern gift bag.
- Three compact paper/handle/design notes and the Socola bag.
- Fifteen products in a five-column desktop grid; three/two/one columns at smaller widths.
- Search by name/brand/photo ID and filters for fashion, gifts and wide bags. Counts: 6 / 8 / 1.
- Six short FAQs and a four-slide manual photo showcase.
- Shared original logo and complete footer, including the owner's confirmed published addresses.

The mockup's invented bags, dimensions and claims are not copied. Original-photo dialogs remain available. Requests carry the correct group and model to the existing quotation/sample/consultation forms. Those forms prepare email; they do not pretend to submit an order.

## Authentic photography

Hero and cards use untouched original product WebPs. Existing source contours include the handles and handle holes. Shadow SVGs use the actual floor footprint, with contact, ambient and directional cast components. Products and shadows share the same placement transform. No whole-outline drop shadow, AI-redrawn packaging or logo replacement is used.

The first empty scene was rejected during visual QA: its shallow shelf could not support the bag's full photographed footprint. The final v3 scene has a broad tabletop seen from above. This avoids the rear base apparently touching a vertical wall and the front corner hanging over the stone edge.

New background asset: `dist/assets/bag-hero-empty-v3.webp`.
Reused empty card background: `dist/assets/rigid-catalog-empty-v2.webp`.
Reused botanical accent: `dist/assets/carton-olive-branch-v4.webp`.
Product sources: `product-image-sources.json`, `official-products.json`, and the company-supplied library. Official photos remain in `dist/assets/products`; no source product file changed.

## Implementation

- `build-bags.mjs`: VI/EN structure; Chinese generated through the shared dictionary.
- `dist/bags-reference-v2.css`: page-scoped reference layout and responsive rules.
- `dist/bags-reference.js`: search, filter, URL/history/language state, manual carousel.
- `prepare-bag-layout.mjs`: derives proportional placement from existing masks and prepares page-specific ground-shadow SVGs.
- `bag-photo-layout.json`, `dist/bag-photo-placement.css`, `dist/assets/bag-shadows-v2/`: generated reproducible layout metadata/shadows.
- `dist/folding.js`: shared original-photo viewer; skips legacy filters for this new page.
- `locales/zh-Hans.json`: new Simplified Chinese copy, including accessible names.
- `qa-bags.mjs`: responsive and interaction checks.

Each image frame remains 10:9 so its source canvas is never stretched. Do not give a photo frame an arbitrary width and height without preserving this aspect ratio. Product images keep their intrinsic proportions.

## Image generation

Mode: built-in ImageGen. Only the EMPTY background is generated; the source product stays untouched. The selected output was copied to the project asset path above. The original intermediate output remains under the app's generated-images directory; deployment does not depend on that directory.

Final prompt:

> Use case: product-mockup, EMPTY PHOTOGRAPHIC BACKGROUND PLATE ONLY, panoramic 3:1 website hero. A warm cream sunlit atelier with a white wooden window at the extreme right. CRITICAL COMPOSITION: camera elevated looking DOWN 35 degrees, not eye-level. A very deep, broad pale travertine tabletop fills the entire lower 65 percent of the RIGHT TWO THIRDS. Its BACK edge is at y=35 percent; its FRONT edge must be below y=96 percent, nearly outside the frame. The area x58-90 percent y40-94 percent is ALL uninterrupted flat stone TOP SURFACE in perspective, absolutely no wall or vertical face there. This empty area will later hold a tall shopping bag photographed from above; the entire bottom diamond-shaped footprint extends from x61 y70 to x80 y54 to x83 y75 to x66 y89. Do not draw that footprint or a bag. Left 42 percent is softly luminous warm ivory negative space, subtle seamless gradient for text. Small olive leaves only at upper extreme right and lower extreme left; no leaves over center. Broad soft daylight from upper LEFT, restrained gentle leaf shadows and realistic matte fine stone pores. High-end real interior product photography, warm beige #E7DFD1, natural green, 70mm lens. No product, no bag, no boxes, no writing, no logos, no CGI, no bokeh, no harsh shadows, no floating objects. Avoid a narrow shelf: this is a deep spacious tabletop photographed downward.

## Validation

`npm run build`, `npm run check`, `npm run verify:deployment`, `npm run test:bags`.
Browser coverage: VI/EN/简体中文 at 1920, 1440, 1024, 768, 390 and 320 px; 15 original galleries; no horizontal overflow; image aspect ratios within 1%; logo source unchanged; search without Vietnamese accents; empty/reset; browser back and refresh; language query preservation; FAQ keyboard; carousel/dots; sample and quotation model context; consultation; all internal footer links and category navigation.
Screenshots and reports are local QA artifacts under ignored `qa/`.

