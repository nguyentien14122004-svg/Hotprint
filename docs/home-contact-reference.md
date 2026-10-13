# Homepage contact section — reference match, 13 October 2026

Scope: only the homepage “Biến ý tưởng thành bao bì” section, `#lien-he.connection-reference`, in Vietnamese, English and Simplified Chinese. Latest user-supplied reference overrides the former two-route studio design. Product overview also has an ID `lien-he`, so every new section selector must include `.connection-reference`.

## Design and interaction

- At the 1968px reference width: 88.2% content width (max 1736px); title and introduction start near x128 and x640. Three cards have relative widths 605:523:580 and 14px gaps. Main cards begin near y267; the green note begins 9px below them.
- Warm paper, soft foliage at opposite corners, green photographic stationery card, thin rounded middle panel, botanical sample photograph with a cream caption area. Earth-brown round arrows/CTA.
- Be Vietnam Pro for readable interface text, Georgia italic for the large second title line, Times New Roman italic for the sample heading (Georgia on the tested Windows machine separates the Vietnamese compound accent in “cầu”). Chinese uses the existing CJK font stack.
- Three middle routes: Zalo, consultation, detailed quote. The quotation and sample controls retain the existing internal form navigation; phone/email/Zalo retain verified contacts.
- Tablet uses two cards plus a wide sample card; phone stacks all cards with usable controls. No new backend, automatic pricing, sample availability or booking promises.
- Source HTML: `dist/index.html`; styles: `dist/contact-studio.css`; new VI/EN strings: `dist/app.js`; Chinese strings: `locales/zh-Hans.json`. Build regenerates `/en/` and `/zh/`.

## Image provenance

The user supplied the new reference image directly on 13 October 2026. Built-in Imagegen removed the interface text/icons from that reference, retaining the HotPrint concept stationery and botanical packaging. This is illustrative HotPrint concept artwork, not a claimed additional manufactured customer product. The sample photo alt text explicitly identifies it as concept packaging. No catalogue or factory photographs changed.

Files packaged from the clean reference plate:
- `dist/assets/contact-background-reference.webp`: clean full reference plate. CSS clips out both photo rectangles, exposing only outer paper and foliage.
- `dist/assets/contact-direct-reference.webp`: green stationery photograph region.
- `dist/assets/contact-sample-reference.webp`: botanical packaging photograph region.

The photographs are individual raster assets. All visible headings, contact details, descriptions, labels and buttons are selectable/localized HTML, with SVG icons. The supplied screenshot is not displayed as the website.

Imagegen prompt (built-in editing, one clean plate):
> Edit the attached exact website reference at the same 1968:799 aspect ratio. Remove all UI text, icons, buttons, rules, borders, phone/email, headings and footer bullets, filling from surrounding material. Preserve the left green photo rectangle, its paper, natural light, leaves and cream HotPrint stationery; preserve printed HotPrint on the physical stationery. Preserve the right botanical HotPrint boxes, bag, cup and stationery with their printed artwork, removing only its overlaid label. Preserve the warm beige paper and foliage in opposite outer corners. Keep photo rectangles at their original positions and framing. No additional objects, products or website text.

## Validation

`npm run build`, `npm run check`, `npm run verify:deployment`, `npm run test:home-contact`.
Browser QA covers VI/EN/中文 at 1968, 1440, 1024, 768, 390 and 320px, text/page overflow, loaded imagery, all 12 internal CTA routes, telephone/email/Zalo targets and in-place language switching. Screenshots/reports are in ignored `qa/`.
The deployment verifier confirms original homepage hero hashes are unchanged. This local preview is the review version; pushing `main` will trigger Vercel deployment.
