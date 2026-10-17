# Maison Marou finishing presentation — 18 October 2026

The owner supplied a target composition, the previous brown-box section and the original Maison Marou photograph. Only the `#hoan-thien` section of Premium rigid boxes changes. The hero, 13-product library and other approved scenes remain intact.

`dist/assets/rigid-marou-finishing-reference.webp` is a lossless encoding of the supplied 2152 × 731 composition. Decoded RGB pixels were compared with the supplied PNG and are identical. An SVG display clip keeps only the central photograph and diagonal stone foreground; the product, gold lettering, orange lid, foliage and cast shadow are not regenerated or retouched. The baked reference text is outside the displayed clip.

`build-rigid.mjs` supplies real translated copy, four finishing rows and the consultation action. The photo opens the existing original-image gallery for `032A5316`, Maison Marou. `dist/rigid-marou-finishing.css` controls the scoped layout. The latest approved Be Vietnam Pro typography remains in use rather than returning to the older serif in the reference.

Desktop uses the reference three-column composition. Below 1100px the introduction precedes the photograph and feature panel. At 650px and below the photograph and four rows stack without distorting the product. The full rectangular photograph area is retained; the diagonal decorative overflow is contained on smaller displays.

Validation: build, syntax checks and deployment verification pass (69 pages, 67 products). Browser checks cover VI/EN/中文 at 1920, 1440, 1024, 768, 390 and 320px: no horizontal overflow, all four features and 13 products present, photograph proportions retained, correct original-image gallery opens and closes. Desktop and mobile screenshots inspected.
