# Khám phá sản phẩm — hero theo mẫu, 16/10/2026

Thay phần trưng bày đầu trang `/san-pham/`, `/en/products/`, `/zh/products/` theo ảnh `codex-clipboard-d3a23e8a-8f30-412b-8211-cb05ba436c77.png` (1672 × 941) do chủ website cung cấp. Logo gốc, thư viện 67 mẫu, sáu nhóm sản phẩm và các phần bên dưới giữ nguyên.

## Nơi chỉnh

- `products-template.html`: chữ/nút/biểu tượng thật và vùng ảnh.
- `dist/products-hero-reference-v3.css`: bố cục riêng, nạp sau products-lighting.css qua build-products.mjs. Đây là phiên bản hiện tại của hero P02.
- `dist/products.js`, `locales/zh-Hans.json`: nội dung ba ngôn ngữ.
- `qa-products-hero-v3.mjs`: 21 tổ hợp (1672, 1440, 1100, 1024, 768, 390, 320 px × VI/EN/ZH), kiểm tra tràn ngang/chồng chữ, khám phá/báo giá/ảnh gốc và Escape.

## Ảnh và bảo toàn chi tiết

`dist/assets/products-hero-reference-v3.webp` là bản WebP lossless của ảnh mẫu. Vùng bên phải được hiển thị trực tiếp, không dựng lại chiếc hộp, không đổi hình in, phối cảnh, lá hay bóng tiếp xúc bằng CSS. Ở 1672 px, thanh đầu cao 87 px, hero cao 854 px, ảnh đặt y=-87 px. Mặt nạ chuyển tiếp từ x=46.8% đến 50%, trước cạnh hộp. Trên điện thoại, ảnh xuống dưới nội dung và khung hiển thị lấy vùng x=772..1672, y=150..941; giữ toàn bộ hộp.

`dist/assets/products-hero-empty-v3.webp` là nền trống cho phần chữ bên trái. Chế độ **built-in Imagegen, edit**, tham chiếu ảnh người dùng; không dùng CLI. Phần hộp trong nền được xóa, nhưng phần ảnh sản phẩm được hiển thị trên website lấy từ bản gốc lossless bên trên. Nút trên ảnh mở ảnh sản phẩm gốc `032A5293` từ thư viện hiện có.

Prompt cuối:

> Edit this website reference into an empty background plate, retain exactly the same canvas dimensions 1672x941 and camera perspective. Remove all UI: the navigation bar in the top 87 pixels, logo, all text in left half, headline leaf icon, buttons, underline and the three benefit icons. Seamlessly inpaint the LEFT HALF as the same warm ivory photographic paper with the existing soft natural leaf shadows, matching brightness and color at x800. Also remove the green product box on the right and fill its footprint with natural pale stone. Preserve all other stone and foliage positions and original light. No new objects, no text, no products, no logos. Do not shift or resize anything. This asset will only provide the left/background area; the intact original right-side product photograph will be displayed separately in the website to preserve all printed details and its real reference shadow.

## Kiểm tra

Build, syntax check và verify:deployment đạt: 72 trang, 67 sản phẩm, 488 liên kết tài nguyên nội bộ. Bộ kiểm tra hero đạt 21 tổ hợp và 6 luồng thao tác trên desktop/mobile. Đã xem ảnh chụp 1672 × 941 và 390 × 941. Bản desktop giữ bố cục ảnh mẫu; chữ là HTML để dịch và thao tác, màn hình nhỏ được bố trí lại.
