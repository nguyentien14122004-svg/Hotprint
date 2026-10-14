# Carton reference rebuild — 14 October 2026

Supersedes both prior carton layouts. The owner rejected ff42f82 and supplied a new full-page reference. They explicitly chose **the reference layout with only genuine carton products**, rather than the 12 mixed-family products in the picture.

## Layout and scope

- Full-bleed photographic hero and transparent header, large upright/italic Playfair heading, brown capsule action.
- Four circular benefit icons immediately below the hero; no extra category navigation row inserted here.
- Reference proportions measured at 1024 px: hero/header together 310 px, four benefits about 118 px, 81% width catalogue, three columns with 16 px gaps, wide 16:9 product windows.
- Eleven real classified carton models. No non-carton filler to force a 12-card count; original product IDs, labels, galleries and request context remain intact.
- Search, application/selection filters, sort, saved samples (maximum six across the site), original-photo gallery and request buttons remain functional.
- Compact contact banner and footer match the reference hierarchy. Company addresses, all six category links, request/contact/knowledge/privacy/terms links and back-to-top remain in the keyboard-accessible **Company information & all navigation** disclosure. No links or forms removed.
- Responsive layouts and Vietnamese/English/Simplified Chinese retained. Home page and other category designs untouched.

The supplied design includes different products and a shorter final row of photos. We retain accurate product proportions and full photos rather than cropping packaging or inventing the missing twelfth product. This is not a claim of literal pixel identity.

## Root cause of the rejected images

The old preparation pipeline used `removeAlpha().joinChannel(...)` in one Sharp pipeline. The final PNG had **three channels and no alpha**, despite the generated mask being correct. This retained the rectangular grey/white source background, hiding the intended contact shadows. The previous decode-only browser tests could not detect that visual defect.

`prepare-carton-reference.cjs` now explicitly assembles RGB and mask bytes into a four-channel RGBA buffer, verifies both transparent and opaque regions and confirms `hasAlpha` before compositing. The four legacy contours are versioned independently in `carton-source-contours.json`, so changing CSS cannot break photo preparation.

All product artwork is resampled from the original company photos, never generatively redrawn. No colour/lettering/logo changes. Ground/contact/cast layers are composited at the same coordinates as each source; images are exported together to avoid responsive separation. The original gallery remains available.

## Assets

- `dist/assets/carton-hero-empty-v4.webp`: empty photographic environment.
- `dist/assets/carton-catalog-empty-v4.webp`: empty catalogue stage.
- `dist/assets/carton-olive-branch-v4.webp`: transparent botanical decoration.
- `dist/assets/carton-hero-v4.webp`: empty environment plus genuine Cookever source pixels and floor shadow.
- `dist/assets/carton-studio-v4/*.webp`: eleven 1440 × 810 final photographs.
- `dist/assets/carton-studio-v4/manifest.json`: source paths and placement bounds.

Four quieter compositions (USPA, Milk Pan, cherry carton, open shoe carton) reuse the empty ivory plate `carton-studio-empty-v3.webp`; its built-in ImageGen prompt is retained in `carton-photo-repair-2026-10-14.md`. This is only the empty background, not any rejected v3 composite.

## ImageGen prompts and execution

Built-in ImageGen mode, no CLI/API fallback. A preliminary Cookever scene generated product details, so it is **not shipped**. Only its empty environment was retained after product removal; real source pixels were then composited into it.

Hero empty environment prompt (edit of the preliminary scene):

> Precise object removal. Remove ONLY the Cookever carton box and its own contact/cast shadow from this photograph. Fill its area with the continuous existing ivory plaster and travertine slab. Preserve the entire composition, exact stone slab geometry and perspective, leaves, foliage shadows, warm light, color, camera angle and 3:1 aspect ratio. This must become a completely EMPTY product stage for placing actual unmodified product pixels. No boxes, products, labels, text or logo. Do not add or reposition props. Keep left 48% quiet empty cream for website text. Return same wide dimensions.

Catalogue stage prompt (reference image supplied for visual style):

> Generate a single EMPTY photographic product backdrop matching the catalog product photos in this website reference. No product, no packaging, no lettering, no UI. Landscape 12:7 composition, 1440x840. Creamy pale travertine slab takes whole bottom portion, with the stone front lip visible only below y90%; large unobstructed slab top available across x8%-94% and y35%-90%. Camera 38 degrees above surface to match photographed cartons. Seamless warm ivory plaster background with a hint of soft sage curved wall at upper-left. Only 3 small olive leaves entering upper-left edge and 2 lower-right edge, absolutely nothing central. Diffused daylight from upper-left, very delicate leaf shadows at corners, surface largely evenly lit, quiet natural pores and refined warm muted ivory colors, no yellow tint. Real photographic still life studio not CGI. No hard horizon, large foliage, bokeh, props, shadows of nonexistent products. This is the empty plate for later compositing unchanged authentic product photographs with contact shadows.

Transparent branch prompt:

> Photorealistic small olive branch isolated on a genuinely transparent background, no backdrop, no text, no pot. A single graceful slender twig entering from the lower-left, extending diagonally toward upper-right, with 7 elegant narrow olive-green leaves and two small side twigs. Real leaf veins and natural slightly curled edges, restrained muted sage greens, diffuse warm upper-left daylight. The full branch must be inside the frame with transparent margins, no clipped leaves, no cast shadow on a background. Botanical decoration for a warm ivory premium packaging website; refined, natural and delicate, not illustration or 3D. Landscape 3:2.

## Maintenance and verification

Edit `build-carton.mjs`, `dist/carton-reference-v4.css` and existing `dist/carton-reference.js`. Old carton.css/carton-repair.css are no longer loaded on this page. Photo preparation is optional and requires Sharp; website build does not.

Run `npm run build`, `npm run check`, `npm run verify:deployment`, `node qa-carton.mjs`. Browser checks cover 18 viewport/language pairs, all 11 image decodes, disclosure access, shared selection, filters/sort/history/language switches, original gallery and quote/sample/consultation context. Inspect generated contact sheets and screenshots as well: image decode and route checks alone are not visual-quality evidence.
