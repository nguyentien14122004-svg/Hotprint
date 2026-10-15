# Kiến thức bao bì — hoàn thiện hình ảnh và trang đọc

Ngày 16/10/2026. Tiếp nối bố cục v2, xử lý ba điểm chủ website đánh dấu: ảnh bài nổi bật, sáu thẻ hướng dẫn và trang đọc bài.

## Kết quả

- Ảnh nổi bật trên nền đá ngà, chuyển nhẹ sang phần chữ; ánh sáng, bóng tiếp xúc và lá nhỏ đồng bộ với các ảnh bài viết.
- Thẻ bài có biểu tượng chủ đề, số bài, ba từ khóa và liên kết đọc rõ ràng. Ảnh nhân sự nhà máy giữ nguyên.
- Trang đọc có ba lối đi nhanh, mục lục đánh dấu vị trí cuộn, thanh tiến độ và danh sách chuẩn bị riêng cho từng bài. Người đọc chọn mục rồi sao chép ghi chú; không gửi thông tin hoặc lưu dữ liệu này.
- Giữ tìm kiếm, bộ lọc, URL, logo, điều hướng, các bài viết và ba ngôn ngữ. Mỗi bài có liên kết mở ảnh gốc.

## Tệp triển khai

- `build-knowledge.mjs`, `knowledge-editorial.mjs`: bố cục và dựng trang.
- `knowledge-details.mjs`: biểu tượng, từ khóa, liên kết phần bài và checklist.
- `dist/knowledge-details-v3.css`, `dist/knowledge-reading.js`: giao diện và tương tác.
- `locales/zh-Hans.json`: nội dung Trung giản thể.
- `dist/assets/knowledge-photos-v3/`: ảnh đã chỉnh, bản 720px và bản `-large.webp` 1536px.

## Ảnh và cách thực hiện

Dùng **công cụ image_gen tích hợp, chế độ chỉnh sửa**, mỗi ảnh một lần gọi với ảnh gốc làm edit target. Không dùng CLI. Năm mã ảnh: `032A5293`, `032A5315`, `032A5353`, `032A5325`, `032A5308`. Tên tệp đầu ra là `<mã>.webp` và `<mã>-large.webp` trong thư mục trên. Đây là ảnh trình bày đã xử lý nền/ánh sáng; không khẳng định chi tiết bản chỉnh trùng từng pixel với ảnh gốc. Bản gốc vẫn ở `dist/assets/products/<mã>-large.webp` và được liên kết trực tiếp trong bài để đối chiếu chi tiết in. Ảnh nhà máy `032A4938` không chỉnh bằng AI.

Prompt cuối dùng cho cả năm ảnh:

```text
Edit the provided ORIGINAL product photograph. This is background replacement and natural grounding ONLY, not a product redesign. Keep the exact product, camera angle, silhouette, proportions, every original printed letter, logo, artwork, cut edge, handle, green/yellow color and number of objects unchanged. Do not redraw or reinterpret any printing. Replace the cold gray/white background with a warm ivory matte limestone tabletop, very fine subtle texture, no horizon line, continuous warm ivory behind. Retain the original product placement and its full extent, around 10% breathing room. Add believable soft contact occlusion directly under every edge touching the tabletop, with a single soft daylight source from upper left and restrained shadows extending lower right. Small softly defocused olive leaves at extreme upper right corner and faint leaf shadows at upper left corner ONLY, no leaves touching or covering any product. An elegant editorial photograph for a packaging journal, same ivory/forest green/earth brown palette across the set. No stage edge through the product, no floating product, no halo, no oversized foliage, no cutout seam, no artificial gloss, no heavy blur, no new objects, no added text. 3:2 landscape output. Preserve every pixel of the printed product as faithfully as possible; all work should be outside the product.
```

## Kiểm tra

`npm run test:knowledge-details`: 15 kích thước trang tổng quan, 18 bài × 3 kích thước, liên kết ảnh gốc, thao tác bàn phím, checkbox, sao chép chỉ các mục đã chọn và mục lục theo cuộn ở VI/EN/ZH. Không có lỗi JavaScript hoặc tài nguyên thất bại.

`npm run test:knowledge`: kiểm tra tìm kiếm/bộ lọc/điều hướng hiện có và 12 bài VI/EN. `npm run build`, `npm run check`, `npm run verify:deployment` kiểm tra toàn bộ bản xuất tĩnh.
