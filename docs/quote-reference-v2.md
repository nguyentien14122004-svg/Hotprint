# P12 — Yêu cầu báo giá, 15/10/2026

Reference: codex-clipboard-dcd52e44-f63d-4cc6-b78b-4e9406011634.png. This is the current P12 presentation, replacing the earlier sidebar/form layout. Original HotPrint logo, full shared footer and the existing email preparation workflow are preserved.

## Presentation

Paper-and-leaf hero with serif green/brown heading; quick-contact strip; a short assistance panel beside a real factory photograph; a rounded project panel with guidance on the left and the form on the right; conditional email-ready panel; three processing stages; contact strip and green final CTA. Copy is shortened in Vietnamese, English and Simplified Chinese. Mobile uses one column and 16px form controls.

The reference's fictional factory worker is replaced by original company photograph `032A4938` (factory source inventory, reviewed with the 39 supplied activity/factory photographs). The full image retains its proportions, content, lighting and shadows. No company person, factory or packaging has been generated. The hero uses unbranded paper swatches as decoration, not a product in the company's catalogue. Product-specific entry links still resolve the real category and sample name from the 67-record product dataset.

## Form behaviour

- Name, company, product group, requirements and consent remain required; contact requires email **or** phone.
- Quantity, dimensions and preferred date remain in the optional disclosure. File selection is visible outside it: up to three PDF/JPG/PNG files of 10 MB each. Files remain local and must be attached again in the email application.
- Preserve values, consent, selected files and the prepared email across VI/EN/中文 changes. No personal data is put into the URL or persistent storage.
- “Nội dung yêu cầu đã sẵn sàng” appears only after validation. It means an email draft is prepared, not that HotPrint received or accepted the request. Copy, reopen email and request-sending guidance remain available; edits invalidate the prepared state.
- Field-level errors, first-error focus, clipboard fallback, category/model prefilling and mobile menu behaviour are preserved.

## Maintenance and isolation

`quote-reference-layout.mjs` supplies P12 copy and layout using the existing form fields. `build-quote.mjs` exports the legacy base as `quoteBasePages` for `build-sample-request.mjs`; this prevents P12's redesign from changing the sample and consultation pages, which historically derive from the quote template. Their generated HTML remains unchanged.

`dist/quote-reference-v2.css` is loaded only by P12. Shared `dist/quote.css` and `dist/quote.js` remain unchanged. Chinese translations live in `locales/zh-Hans.json`. Do not replace the email flow with a fake server receipt or show the ready panel before submission.

## Generated decorative asset

Mode: built-in ImageGen, new empty environment. Project path: `dist/assets/quote-paper-hero-v2.webp`. It is a WebP conversion of the generated original, separate from all real company photos. Existing `about-botanical-paper-v2.webp` and olive leaf decoration are reused for secondary panels.

Final prompt:

> Photorealistic-natural editorial website hero background, landscape 3:2. A warm ivory uncoated paper desk with three blank tactile paper swatches in sage green, kraft beige and cream arranged only in the lower right quarter, a slender realistic olive branch entering from upper right. Soft afternoon daylight from upper left, physically believable subtle contact shadows under the paper and leaf shadows toward lower right. The entire left 58 percent must be plain softly lit warm ivory negative space for web typography. Premium natural paper packaging mood, subtle fibers, gentle tonal variation, no strong horizon, no pedestal, no bokeh, no CGI. No finished products, no packaging brands, no logos, no text, no people, no invented company material. Palette #F5F0E4 #E7DFD1 #5E7D5A. Composition quiet and restrained, paper layers have real thickness and delicate shadows.

## Verification

Run `npm run build`, `npm run check`, `npm run verify:deployment`, `npm run test:quote`. `QA_ORIGIN` can point to a preview server or Vercel.

The browser suite checks 18 VI/EN/中文 viewport combinations (1920, 1440, 1024, 768, 390, 320), original logo and photo proportions, form validation, clipboard/fallback, file type/count/size/removal, optional details, category/model entry points, mobile navigation, language retention, ready-panel invalidation and browser/asset errors. Desktop, mobile and the prepared state are inspected visually. Tests prevent mailto navigation and never send an email.
