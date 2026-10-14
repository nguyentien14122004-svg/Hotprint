# P04 — repair after owner review, 14 October 2026

This supersedes the two-product hero, independent CSS shadow layers and compact footer in carton-reference-2026-10-14.md.

## Changes

- Replace the disconnected Cookever/USPA hero with one genuine SAMONO carton (HP7107 / owner source 032A5280). Enlarge opens the original photograph.
- Recompose all 11 carton photographs on a continuous limestone surface. Product, contact and cast shadow are exported together at 1440 × 1080, so responsive layout cannot detach the shadow.
- Replace the abruptly cropped botanical CTA with a consistently padded two-column contact section. Quote, sample, consultation, telephone and Zalo actions work.
- Restore the complete shared footer from dist/index.html: company, published addresses/map, six categories, company/contact/request/knowledge routes, privacy, request terms, back to top. Restore breadcrumbs and six-category navigation.

## Product invariants

No product is AI-generated. Original product pixels are resized uniformly and masked; artwork, geometry, labels and colours are not repainted. No saturation, relighting, sharpening or colour filter is applied to products. Final WebP compression: quality 94. Existing originals and shared gallery data remain unchanged.

Sources are owner photographs 032A5366, 032A5358, 032A5326, 032A5361; clearer local originals for HP7107/HP7106; official website images HP7094/HP6410/HP6408/HP6406/HP6404. Resolutions differ; processing does not invent printed detail.

The owner brief permits deterministic compositing when generative editing cannot preserve artwork exactly. prepare-carton-studio.cjs uses Sharp for asset preparation only. Three shadow layers use each source's floor polygon: narrow contact, soft near occlusion and lower-right cast. No generic ellipse or upright-object drop shadow. Pizza/cake/shoe contours were refined, including handle holes and lid notches. The house carton has an actual open gap below its front panel.

## Assets and prompt

Built-in ImageGen generated the empty background only. No CLI/API fallback; no products submitted for generative redraw.

- Background: dist/assets/carton-studio-empty-v3.webp
- Eleven final images: dist/assets/carton-studio-v3/{product-id}.webp
- Source/bounds record: dist/assets/carton-studio-v3/manifest.json

Prompt:

> Generate a photographic EMPTY product photography studio backdrop, landscape 4:3, 1536x1152. Absolutely no product, no boxes, no text, logos, labels or UI. Pale warm honed limestone tabletop continuous across whole frame, ultra subtle real pores and mineral grain, not a noisy rough rock. Camera above table at about 42 degrees looking downward; tabletop fills lower 90 percent, seamless warm ivory plaster sweep at top, no hard horizon and no plinth lip/steps. Huge diffused softbox upper left, subdued lighting and no hard sunbeams; right slightly darker, consistent soft light. Central 80 percent unobstructed empty surface, same lighting and focus all the way. Two or three small desaturated olive leaves at far upper right edge only, occupy under 6 percent, never enter central area. Color ivory #F3EBDD, pale limestone #D8CCB6, subtle sage #5F795A. Authentic quiet high end commercial still life photography, moderate depth of field. No artificial bokeh, no HDR, no CGI, no decorative shadows across center, no props, no floating dust. This is a calm photographic background plate for later compositing actual owner product pixels and physically accurate contact shadows.

## Code and checks

- build-carton.mjs: page markup, real source labels and request context.
- dist/carton-repair.css: scoped revision after carton.css; 4:3 photos use contain, never cover cropping.
- qa-carton.mjs: 18 VI/EN/ZH viewport checks, 11 photo decodes, full footer and six categories, search/filter/sort, cross-tab shortlist, original gallery, quote/sample/consultation context, internal footer destinations return 200.
- Build, syntax and deployment verification pass; approved homepage hero, 67 products and 72 routes retained.
- Visual review: full page, mobile spacing, all 11 photographs, handle/lid holes and contact edges. Photographic appearance is a visual assessment, not proved by automated tests.
