# Consultation, retired sample requests and full serif typography

Implemented 17 October 2026 from the owner's explicit request. Applies to Vietnamese, English and Simplified Chinese.

## Consultation

Four sections: an editorial paper-notebook invitation; three clickable discussion topics; a grouped appointment form and preparation note; three next steps. `build-consultation.mjs` now inherits the quote base directly and passes it to `consultation-layout.mjs`. `dist/consultation.css` styles the full page; `dist/consultation.js` selects a topic and focuses the form. Keep validation, timezone handling, contextual links, optional meeting fields, consent, attachments and email review. No available slots, confirmed appointment or server receipt is invented.

Image generation mode: built-in image_gen, photorealistic-natural, generated decorative still life. No company/product/employee photo is represented. Final assets: `dist/assets/consultation-notebook-v2.webp` and `dist/assets/consultation-notebook-v2-small.webp`. Original generation: `exec-f57cfbb0-bbde-46e9-ab0f-6e26734ee0f6.png`.

Final prompt:

> Use case: photorealistic-natural. Asset type: landscape editorial illustration for a premium Vietnamese paper packaging company's consultation booking page. Create a quiet invitation to a thoughtful design conversation: an open blank ivory notebook, a dark forest-green pencil resting diagonally, a few blank cream and muted sage paper sheets with subtly different tactile textures, on a warm travertine desk by a sunlit window. A delicate olive branch enters from the upper right, soft natural leaf shadows fall across the desk and blank paper. Composition: close editorial still life, landscape 3:2, objects grouped mostly on the right and centre, generous warm ivory negative space at left; the entire scene will sit beside live webpage typography. Refined warm cream, sage and forest green palette, realistic fine paper grain and soft contact shadows, natural afternoon light. No people, no branding, no text, no letters, no numbers, no calendars with fake dates, no packaging products, no watermark. Decorative concept image, not a photo of a real company office.

## Sample request retirement

Removed builder, published VI/EN/ZH sample-request HTML, sample-only styling, navigation, card/modal/gallery CTAs, request routing, receipt/address form code, sample request FAQs and relevant terms/status copy. Removed routes from language inventory (69 remaining pages). Vercel permanently redirects old sample-request URLs to the corresponding consultation page. Product photography, educational material about checking packaging, and saved visual references remain; references can be discussed during consultation. They do not request physical sample delivery.

## Typography

`dist/editorial-content.css` is loaded after `editorial-headings.css`. Playfair Display variable 400–900, from the official google/fonts repository, supplies readable body/interface weights. Existing licensed Playfair Display 600 remains the approved heading face. CJK uses system serif fallbacks. Body, headings, menus, buttons and form text share the serif family, with separate reading, utility, metadata, form and display scales. Paragraph leading 1.75–1.85; form input text >=16px. Rebalanced two-column contact cards and homepage contact area after feature removal; benefit headings and tablet grids have explicit narrower scales. Fixed header clearance added to consultation; small-screen category navigation wraps.

## Verification

- Build and static deployment integrity: 69 pages, 67 products, original approved homepage hero hashes unchanged.
- Consultation QA: 18 language/viewport combinations plus required field errors, proposed dates, timezone boundary, invalid times, online/in-person conditional fields, attachments, clipboard fallback, field preservation when switching language and contextual entry points.
- `qa-content-refresh.mjs`: 69 pages × desktop/tablet/mobile; scans visible text overflow, JS errors, retired actions/links and visible request copy; representative screenshots.
- `qa-editorial-headings.mjs`: approved font, heading bounds and dark-panel contrast across 276 views.
- Existing images and logos remain unchanged. New illustration and font assets are local and deployed with the site.
