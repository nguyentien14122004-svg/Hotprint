# P08 — Nhãn hàng & catalog

Ngày: 12/10/2026. Bản xem thử cục bộ.

## Đường dẫn và mã nguồn
- VI: /danh-muc/nhan-hang-catalog/
- EN: /en/hang-tags-catalogues/
- Nội dung: build-tags-catalogues.mjs. CSS: dist/tags-catalogues.css kế thừa dist/folding.css.
- Gallery/bộ lọc chung: dist/folding.js qua data-product-group="catalog".
- Menu, footer, nhóm thứ sáu P01/P02 và thanh nhóm P03–P07 dẫn vào P08.
- Cả sáu nhóm sản phẩm hiện có trang riêng. Các bộ lọc của thư viện tổng quan P02 vẫn hoạt động.
- Build chung tạo 16 đường dẫn VI/EN. Kiểm tra P08: npm run test:tags.

## Sáu phần theo kế hoạch
1. Hero: breadcrumb, tên nhóm, “Một thẻ nhãn. Một câu chuyện mở ra.”, ảnh thật thẻ TRU-CANINE, mở ba góc gốc, tư vấn theo nhóm và xem mẫu. Thanh chuyển nhóm ngay dưới.
2. Hai hướng rõ ràng: A thẻ nhãn sản phẩm, B catalog & ấn phẩm. Khối A nói nhận diện/thông tin, hai mặt/lỗ/khe/cách gắn. Khối B nói người đọc, khổ, nội dung, số trang, giấy bìa/ruột/cách đóng cuốn. Ảnh khối B là lịch để bàn thật, có chú thích rõ.
3. Giấy, bố cục & hoàn thiện: hai mặt thẻ thật TRU-CANINE; cảm giác giấy, nội dung/ảnh được duyệt, lỗ/khe hoặc đóng cuốn. Nút trao đổi riêng.
4. Bốn mẫu: bộ lọc tất cả (4), thẻ nhãn sản phẩm (3), ấn phẩm thương hiệu (1). Hai cột desktop/tablet, một cột mobile. Xem ảnh gốc, góc đã có, yêu cầu mẫu, báo giá.
5. Sáu FAQ: yêu cầu thẻ/catalog khác nhau, số trang/khổ, thiếu nội dung, lỗ/khe, mẫu giấy/màu/bố cục và báo giá.
6. CTA cuối: loại thẻ/ấn phẩm, khổ, số trang và số lượng; báo giá, mẫu, phần nhà máy hiện có. Vector thẻ/cuốn chỉ là trang trí.

## Ảnh thật và giới hạn
| Mẫu | Ảnh gốc |
|---|---|
| Thẻ TRU-CANINE họa tiết rừng | 032A5353, 032A5283, 032A5284 |
| Lịch để bàn 2025 | 032A5364 |
| Nhãn hàng dạng thẻ dài | 032A5323 |
| Nhãn hàng minh họa màu vàng | 032A5325 |

Nguồn: ảnh người dùng cung cấp, đối chiếu product-image-sources.json. Bitmap sản phẩm giữ nguyên. Mặt nạ SVG dist/assets/tag-masks theo đường bao/khe thật, bóng CSS bên ngoài. Gallery hiển thị ảnh đầy đủ. Mã ảnh không phải SKU. Chứng nhận in trên mẫu lịch thuộc nội dung mẫu, không phải tuyên bố chứng nhận HotPrint.

Thư viện hiện chưa có ảnh catalog thật. Không tạo catalog giả hoặc đổi lịch thành catalog. Trang nêu rõ mẫu lịch, tách phần tư vấn catalog khỏi ảnh mẫu; khi có ảnh được chủ website xác nhận, có thể bổ sung vào dữ liệu. Không tự công bố loại giấy, công nghệ phủ, loại đóng cuốn, MOQ, giá hoặc thời gian.

## Thiết kế và nền
Playfair Display 600, Be Vietnam Pro; ngà/sage/xanh rừng, CTA mận. Bố cục hai hướng tạo nội dung riêng P08; thư viện hai cột giúp xem rõ những thẻ nhỏ.

ImageGen tích hợp chỉ tạo nền trống. Tệp: dist/assets/tags-paper-stage.webp. Không dùng CLI/API.
Prompt cuối:
> Photorealistic EMPTY luxury print atelier photographic set, landscape 3:2. No printed objects, tags, books, calendars, logos or text. Warm ivory fine textured paper flat tabletop covering the lower 85 percent, continuous softly curving into muted pale olive sage backdrop. Far upper right only a tiny out-of-focus leafy twig, upper left only a subtle curved ivory sheet edge. Camera looks downward at 45 degrees, natural normal lens. Broad soft diffuse daylight from upper left, evenly lit central and lower area, subtle real fibre grain, extremely restrained edge shadows, no pedestals or hard shapes across the scene. Entire center empty for later displaying original photographs of paper tags. Refined editorial materials photography, delicate cream/sage, natural and quiet.

## Biểu mẫu và tương tác
- VI/EN và trạng thái bộ lọc giữ qua URL/tải lại/đổi ngôn ngữ.
- Thẻ TRU-CANINE có ba ảnh, lịch/thẻ khác một ảnh; nút ảnh đơn vô hiệu.
- Escape đóng gallery, trả focus; FAQ dùng bàn phím.
- Yêu cầu nhóm nhan-hang-catalog hỏi loại thẻ/ấn phẩm, khổ, số mặt hoặc trang gồm bìa, lỗ/khe/đóng cuốn, số lượng.
- Theo mẫu: tên/mã ảnh và nhóm đúng. Nguồn email riêng P08.
- Biểu mẫu chỉ chuẩn bị email như toàn website, chưa có backend gửi yêu cầu.

## Kiểm chứng
- Build/cú pháp đạt; 12 tổ hợp VI/EN × 1672/1440/1024/768/390/320px; sáu phần/bốn mẫu, không tràn ngang/lỗi JS/404.
- Bộ lọc 3/1/4, tải lại/VIEN, ba góc TRU-CANINE, ảnh đơn lịch, quote/mẫu, FAQ bàn phím, điều hướng.
- Đã xem desktop/mobile/toàn trang và từng ảnh, giảm tỷ lệ thẻ vàng để nằm trọn trong khung.
- Kiểm tra hồi quy P03–P07 và điều hướng sáu nhóm VI/EN P02.
- Bản lưu trong workspace, chưa đẩy GitHub hoặc deploy theo yêu cầu này.
