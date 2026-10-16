# Catalog WEbuild — khối 06 / Cùng bắt đầu

Ngày: 17/10/2026.

## Phạm vi
Thay lịch và thẻ treo trong khối cuối bằng bộ catalog WEbuild theo ảnh tham chiếu. Giữ hero lịch để bàn, 8 mẫu thư viện, carousel, logo và footer đầy đủ. Quote/sample/original của khối dùng HP6435 (Catalog bìa cứng), đối chiếu ảnh thư viện khớp với ảnh sản phẩm thứ ba. Ảnh thứ tư là tài liệu tham khảo khác, không thêm vào bố cục vì mẫu đích không có bộ đó.

## Bảo toàn ảnh
Ảnh gốc 2021×778 được chuyển WebP lossless, so sánh RGBA nguồn và bản lưu bằng nhau. Lớp ảnh tham chiếu luôn phủ lên toàn bộ sản phẩm, trang in và bóng. Chỉ vùng chữ bên trái dùng nền đã xóa chữ bằng Imagegen. Hai mép nối trong vùng nền trống dùng CSS mask gradient; không crop hoặc biến dạng khung ảnh. Mobile chữ/nút trên ảnh nguyên khung.

## Tài sản và chế độ
Mode: Imagegen built-in edit (hai lượt), không dùng CLI.
- Nguồn: C:/Users/OS/AppData/Local/Temp/codex-clipboard-9f575505-8161-434b-b1ef-5d47f915e89c.png.
- Bản xử lý: C:/Users/OS/.codex/generated_images/01a12964-a877-7ac3-8cca-efcc4a064e82/exec-44005ab3-1025-4624-990f-b1034556a185.png.
- Workspace nền: dist/assets/catalog-webuild-final-clean-v3.webp.
- Workspace ảnh nguyên mẫu: dist/assets/catalog-webuild-final-reference-v3.webp.

### Prompt chính
Precise localized edit of this supplied wide website photograph. Remove only all website text and UI on the LEFT: the 06 eyebrow and line, the two-line Vietnamese headline, and the three buttons/links/arrows. Reconstruct the warm cream wall, stone and soft sunlight exactly underneath those removed marks. Preserve original 2021:778 aspect ratio and framing. Keep all products on the RIGHT exactly unchanged: the WEbuild white and blue brochure, navy spiral bound catalogue, open magazine, all printed logos, letters, photographs, fine details, page curvature, binding, overlaps, positions, proportions and every contact/cast shadow. Keep stone tabletop, diagonal edge, top-right leaves, blurred bottom-left leaves and lighting untouched. No new text, objects or redesign. The left side becomes empty negative space for live HTML. Edit target is the attached image; do not treat it as a loose style reference.

### Prompt chỉnh cuối
Remove ONLY the tiny brown right-pointing arrow remaining on the stone at x=41%, y=50.5% in this image. Fill that tiny area with the matching travertine texture. Keep everything else exactly unchanged, including all catalogues, print, shadows, leaves, dimensions and composition. No other edits.

## Kiểm tra
- 72 routes, 67 sản phẩm; 522 tham chiếu và 628 file static hợp lệ.
- 18 tổ hợp VI/EN/ZH × 1920/1440/1024/768/390/320; 8 ảnh gốc, filter/history/languages, quote/sample HP6435, carousel, bàn phím, logo/footer/điều hướng đạt.
- Kiểm tra trực quan 1440 và 390; sản phẩm, bóng nguyên khung; chữ và nút thật.
- Node syntax và diff whitespace đạt.

Sửa build-tags-catalogues.mjs và CSS .catalog-final-webuild trong dist/catalog-reference-v2.css. Anchor #catalog-final-title.
