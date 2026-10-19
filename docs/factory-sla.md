# Company-profile SLA and final quote action — 19 October 2026

The owner supplied a technical SLA slide and requested an additional section in Company profile plus a correction to the square, underlined quotation button in its final contact panel. The owner explicitly confirmed 98% on-time delivery and under 1% defect/complaint rate in the conversation.

`factory-sla.mjs` contains the VI/EN copy and Chinese dictionary. Eight rows preserve the supplied thresholds, timing, measurement methods and reporting frequency: Delta E ≤3.0 per lot with shift measurements; 98% delivery across rolling 12 months; below 1% per lot with monthly complaint-lot/total-lot reporting; quotation response within 4 working hours from a complete request; complaint action plan within 48 hours of formal written notice; confirmed production-defect returns within 5 days; Friday production reporting by email/Zalo; QC retrieval within 4 working hours with 24-month retention. Dedicated Account Manager and tailored SLA for partners above VND 1 billion/month are included from the supplied content.

These are presented as owner-provided service commitments, not independently audited historical performance. The original slide's broad claims about other suppliers were not repeated. The rate note preserves the supplied lot-based measurement, rather than changing it to a percentage of defective individual items.

The section `#cam-ket-sla` follows the production process. The existing equipment, quality, people and contact sections become 05–08. The page index has six links. `dist/factory-sla.css` uses the approved green/ivory palette and shared sans typography. A semantic table with scope/roles becomes labelled rows on mobile; all eight entries remain visible. Four summary metrics and a partnership note complete the section.

The final `.fp-secondary` quotation action now has padding, a rounded pill border, the same minimum height as consultation, no underline and a visible keyboard focus outline. Both actions use their existing form navigation. Existing imagery, gallery, tabs, common header/footer and email are preserved.

QA: `node qa-factory-sla.mjs` covers VI/EN/中文 at 1920, 1440, 1024, 768, 390 and 320px, checks 8 SLA rows, 8 page sections, 6 index links, no overflow, translated headings, equal CTA heights, form destinations and original gallery/tab keyboard behavior. Screenshots are in ignored `qa/`. `npm run build`, `npm run check` and `npm run verify:deployment` also apply.
