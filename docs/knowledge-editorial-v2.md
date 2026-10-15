# Kiến thức bao bì — sổ tay editorial, 16/10/2026

Thiết kế lại trang tổng quan và giao diện đọc sáu bài viết theo phong cách đã duyệt: nền ngà, xanh tự nhiên, nâu đất, serif Playfair và chữ nội dung Be Vietnam Pro. Giữ logo gốc, dữ liệu bài và các đường dẫn cũ. Thay thế mô tả bố cục P15 trước đây, không thay nội dung chuyên môn.

## Bố cục và chức năng

- Hero bàn thiết kế giấy: ảnh minh họa concept, tiêu đề ngắn, nút đọc và tìm chủ đề.
- Ba lối đọc: chuẩn bị dự án, chuẩn bị thiết kế, chọn/duyệt mẫu; dẫn đến bài thật.
- Bài nổi bật về chuẩn bị yêu cầu báo giá, dùng ảnh thật của HotPrint.
- Tìm kiếm không dấu, bốn chủ đề và tất cả bài; trạng thái rỗng/reset/history/chuyển ngữ giữ nguyên.
- Sáu thẻ ảnh lớn. Ảnh sản phẩm và nhân sự nguyên bản, không tạo thêm sản phẩm hoặc thay nhãn hiệu.
- Khối tư vấn xanh có điện thoại, lịch tư vấn và khám phá sản phẩm.
- Trang đọc: tiêu đề serif, ảnh giới thiệu, mục lục, nội dung dễ đọc, tóm tắt, tài liệu và bài liên quan. Giữ sơ đồ cấu trúc/tràn lề ở bài tương ứng.
- Đồng bộ VI/EN/中文, responsive, focus và reduced motion. Bỏ chú thích nguồn ảnh dài không cần thiết theo yêu cầu trước.

## Chỉnh sửa và chạy

- `knowledge-editorial.mjs`: hero và bài nổi bật.
- `build-knowledge.mjs`: dựng tổng quan và sáu bài × VI/EN, nạp stylesheet mới.
- `dist/knowledge-editorial-v2.css`: thiết kế hiện tại; kế thừa knowledge.css cho các hành vi cơ bản.
- `knowledge-content.mjs`: sáu bài hiện có, không sửa trong lần thiết kế này.
- `dist/knowledge.js`: tìm kiếm/bộ lọc hiện có, không đổi.
- `locales/zh-Hans.json`, `build-chinese.mjs`: bản Trung giản thể.
- `npm run build`, `npm run check`, `npm run verify:deployment`.
- `npm run test:knowledge`, `npm run test:knowledge-editorial` (Chrome/Playwright; `QA_ORIGIN` để đổi địa chỉ).

## Hình minh họa và prompt

Tệp cuối: `dist/assets/knowledge-atelier-v2.webp`, 1536 × 1024. **Built-in Imagegen, generate**, không CLI. Bàn giấy không nhãn hiệu là minh họa ý tưởng, không giả danh ảnh sản phẩm/nhà máy HotPrint. Alt của ảnh mô tả rõ là minh họa. Ảnh nguyên bản trong các bài không chỉnh sửa. Chuyển đầu ra sang WebP quality 90 để dùng trên website.

Prompt cuối:

> Create an exquisitely photorealistic editorial still-life for a premium Vietnamese packaging knowledge journal. Wide horizontal 3:2 composition, 1800x1200 if possible. A thoughtfully arranged paper designer's workbench, warm ivory handmade paper tabletop and pale limestone, a fan of thick unbranded paper swatches in forest green, sage, ivory and kraft, one blank unfolded small kraft carton dieline with real creases, a partly assembled plain ivory folding box, a natural wood pencil and a slim brass ruler without readable numbers. Everything arranged compactly in the RIGHT two thirds, beautifully visible and physically grounded with accurate soft contact shadows cast to lower right from single natural window light upper left. A delicate olive branch entering from upper right edge, subtle leaf shadow on upper background, no excessive props. Left third quiet warm ivory negative space. Premium tactile matte paper fibres, restrained earthy palette, real photography, natural perspective, soft sunlit air without haze, no floating objects, no cutout seams, no render/plastic look. No logos, text, letters, branding, UI, watermarks, people or hands. This is a conceptual illustration of paper and packaging design, not a company product photograph.

## Xác minh

Bộ kiểm tra hiện có đạt 12 kích thước/ngôn ngữ VI/EN, 12 trang bài viết, tìm kiếm không dấu, lọc, history, URL/ngôn ngữ/mục lục, luồng báo giá/mẫu/tư vấn và liên kết footer. Bộ bổ sung đạt 15 kích thước/ngôn ngữ VI/EN/ZH, 9 lối đọc, 3 liên kết nổi bật, 6 bài tiếng Trung và tìm kiếm tiếng Trung. Không lỗi JavaScript hoặc tài nguyên 404. Đã xem ảnh desktop/mobile. Verify deployment đạt 72 trang, 67 sản phẩm, 490 tài nguyên nội bộ; hero trang chủ giữ nguyên.
