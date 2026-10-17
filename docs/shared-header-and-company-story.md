# Shared navigation and complete company story — 17 October 2026

## Scope

The owner requested consistent top-bar dimensions across every page and a complete, visually coordinated transfer of the information on https://hotprint.vn/ve-chung-toi/. The official company page was read on 17 October 2026. Its substantive company content is now represented in VI, EN and Simplified Chinese; advertising/third-party website credits are not part of the company story.

## Shared header

`dist/shared-header.css` is appended last by `apply-theme.mjs` to all 69 pages. It owns the bar geometry in both initial and scrolled states: 88px desktop/tablet and 72px at <=650px. The logo has viewport-specific fixed widths (200/176/148/122px), retaining its original image and 336:73 crop. Navigation, languages, quote action, gaps and container widths are consistent between pages. At <=1100px the shared menu replaces desktop links; its tablet panel is explicitly styled. Sticky placement keeps the bar in normal flow, avoiding the previous relative-to-fixed layout shift. Legacy main offsets are neutralized. The body typography and approved imagery are retained.

## Source-to-section coverage

| Official source content | Current presentation |
| --- | --- |
| Hoang Thi Group company identity and Care/Trust business philosophy | `#triet-ly`, full Vietnamese philosophy quotation and translations |
| Foundation on 6 September 2004; paper boxes, bags, tags/labels; cosmetics, pharmaceuticals, food, retail | `#cau-chuyen`, complete company introduction |
| Over two decades; Australian branch in 2018 and international ambition | `#cau-chuyen`, timeline and `#dau-moc` |
| Mission for employees, customers, suppliers and society | `#gia-tri`, four mission panels; career development, best prices/stable quality/schedules, mutual benefit/exclusivity, humanitarian contribution |
| 100% quality and warranty; maximum supply response; continuous improvement/resource development | `#cam-ket`, three explicit customer commitments |
| Printing/prepress/postpress engineering training at the University of Technology and Education; operations engineers; accumulated experience | `#con-nguoi`; experience anchored to 2004 to avoid a stale annually changing count |
| Integrated production, digital management, multi-level QA/QC, traceability and order timelines | `#nha-may` and `#he-thong-van-hanh` |
| ISO 9001:2015, FSC® C204689 and G7 | `#chung-nhan`, simple text panels; no invented badge, certificate image, date, scope or warranty terms |
| Company name, tax code 3600693834, phone, office/factory addresses and email | Existing complete shared footer |

`about-company-content.mjs` supplies bilingual additions and their Chinese translations, merged by `build-chinese.mjs`. `dist/about-company.css` styles the new sections. Existing team and quality-reference images, their original links, five other real company photographs, the product carousel and consultation/quote actions remain intact. A six-link in-page index navigates the expanded story. There are twelve content sections.

## Validation

- Build, syntax and deployment integrity: 69 routes, 67 products, 531 local references, approved homepage image preserved.
- `qa-shared-header.mjs`: 414 route/viewport checks, identical geometry before/after scrolling, no overflow or JS errors; desktop dropdown and mobile/tablet menus.
- `qa-about-reference.mjs`: 18 language/viewport combinations, all original image proportions, twelve sections, carousel, language switching, history control and request links.
- `qa-content-refresh.mjs`: 207 page/viewport combinations, text overflow and retired feature checks.
- Visual review: desktop and phone hero, full page, tablet menu, mission and certification sections.
