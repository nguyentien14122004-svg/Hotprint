# Shared footer and contact email — 19 October 2026

The owner requested removal of the decorative HotPrint signature below the home contact email, exact email spelling `Info@HotPrint.vn` throughout the website and consistent footer sizing across every page.

The home source is `dist/index.html`. Only `.note-signature` was removed; the genuine logo and branded stationery photograph remain. All website email text, mailto recipients, copy values, policy translations and form handoff sources use `Info@HotPrint.vn`. Quote and consultation still prepare drafts for the visitor to review and send; nothing is sent automatically.

`dist/shared-footer.css` is attached last by `apply-theme.mjs` on all 69 routes. Its scoped overrides prevent older category styles from shrinking the footer. Desktop uses a maximum 1440px content area, four columns, a 176px logo, 18px headings and 14px content. Tablet uses two columns. Mobile has a 160px logo, full-width identity/address blocks, two navigation columns and room for the existing bottom contact bar. Heights follow content rather than clipping translations inside a fixed-height box.

`node qa-shared-footer.mjs` checks 69 routes at 1920, 1440, 768, 390 and 320px (345 views). It compares footer dimensions, inner width, logo dimensions and column widths across every page of each language, verifies heading/link sizes, no overflow, exact mailto casing and absence of the removed signature. Desktop/mobile screenshots reviewed. Six quote/consultation forms and the contact email copy value were also checked for the new recipient, without sending email. Build, syntax and deployment validation pass.
