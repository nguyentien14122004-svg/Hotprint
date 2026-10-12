# P03 — Hộp giấy mềm

Ngày: 12/10/2026. Bản preview; chưa triển khai hosting.

## Đường dẫn

- VI: `/danh-muc/hop-giay-mem/`
- EN: `/en/folding-cartons/`

Trang riêng gồm sáu phần theo mục 6.2 của kế hoạch. Header, footer, menu, thông tin công ty và biểu mẫu liên hệ dùng chung. Menu, danh mục Trang chủ và ô đầu tiên trong P02 dẫn vào P03; nhóm carton dẫn vào P04, nhóm hộp cứng dẫn vào P05, ba nhóm còn lại tiếp tục dùng bộ lọc P02.

## Sáu phần

1. Mở đầu: breadcrumb, H1 Hộp giấy mềm, thông điệp ngắn, ảnh Bitter Melon Artichoke thật trên nền riêng, báo giá theo nhóm, liên kết thư viện, nút mở ảnh gốc. Thanh chuyển nhóm nằm ngay sau hero.
2. Ứng dụng và cấu trúc: ba mẫu thật minh họa mặt hộp liền (Maison Marou), cửa sổ (Wesser), tai treo (GE UltraPro). Không suy đoán kết cấu đáy, chất liệu, khả năng chịu tải hay tuyên bố mọi cấu trúc đều sẵn có.
3. Vật liệu và hoàn thiện: cận ảnh gốc Lévinia, ba nội dung trao đổi gồm giấy/độ đứng, màu/mặt in, bề mặt/chi tiết. Không tự đặt định lượng, công nghệ phủ hoặc chứng nhận.
4. Mẫu thực tế: tám mẫu từ dữ liệu hiện có, bộ lọc thực phẩm & đồ uống (3), hương thơm & mỹ phẩm (2), hàng tiêu dùng (3). Bộ lọc giữ trong URL khi tải lại và đổi VI/EN. Nhấn ảnh hoặc tên mở ảnh gốc; có yêu cầu mẫu và báo giá điền sẵn.
5. Sáu FAQ mở độc lập bằng chuột, chạm hoặc bàn phím: thông tin báo giá, sản phẩm thật, thiết kế, mẫu thử, số lượng/thời gian, khả năng điều chỉnh.
6. Liên hệ cuối: báo giá nhóm, yêu cầu mẫu, liên kết vùng nhà máy hiện có trên Trang chủ. Sơ đồ hộp là trang trí vector, không phải khuôn kỹ thuật để sản xuất.

## Nguồn ảnh thật

Tất cả ảnh sản phẩm có trong `product-image-sources.json`, nguồn thư mục `HÌnh sản phẩm` do chủ website cung cấp. Không sửa tệp bitmap sản phẩm. Khung cắt CSS hiển thị chủ thể trên nền riêng, không vẽ lại chữ, logo hay thương hiệu. Cửa sổ xem mẫu luôn hiển thị ảnh đầy đủ, có các góc ảnh thật đã có trong dữ liệu.

| Mã ảnh | Mẫu | Góc ảnh có sẵn |
|---|---|---|
| 032A5315 | Bitter Melon Artichoke | 5315 |
| 032A5316 | Maison Marou | 5316 |
| 032A5267 | Lévinia hồng | 5267 |
| 032A5320 | GE UltraPro | 5320, 5259 |
| 032A5268 | Lévinia vàng | 5268, 5298 |
| 032A5318 | Wesser, hộp cửa sổ | 5318 |
| 032A5312 | Premium Durian | 5312, 5249 |
| 032A5313 | Hộp đồ họa số 6 | 5313 |

Mô tả cũ của ảnh 032A5318 là MP; đã đối chiếu ảnh gốc thấy Wesser và cập nhật tên trong nguồn tạo catalog, dữ liệu hiển thị và bảng nguồn. Không thay ảnh.

## Thiết kế và triển khai

- Giữ hệ màu giấy ngà, xanh rừng/sage và CTA tím mận. Serif Playfair Display 600, nội dung Be Vietnam Pro; không áp hệ màu/font gợi ý tự động trái thiết kế đã chốt.
- Nền giấy cong và ánh sáng dịu, ảnh thật cắt theo đường bao, bóng tiếp xúc; không dùng ảnh chụp thiết kế làm giao diện.
- `build-folding.mjs`: nội dung và bản dịch tĩnh VI/EN; chạy từ `build-products.mjs`.
- `dist/folding.css`: phạm vi trang P03, layout đáp ứng và các khung ảnh theo mẫu gốc.
- `dist/folding.js`: bộ lọc URL, cửa sổ ảnh, chuyển góc ảnh, xử lý ảnh lỗi.
- `dist/app.js`: đường dẫn nhóm, chuyển VI/EN theo trang, điền nhóm cho biểu mẫu và ghi đúng nguồn email.
- Biểu mẫu chỉ chuẩn bị email để khách gửi qua ứng dụng email. Không có tính giá tự động, mua ngay, xử lý đơn hàng hay thông báo đã gửi giả.
- Không đặt canonical hoặc domain triển khai giả. Giữ noindex trong bản preview.

## Nền ImageGen

Tạo bằng công cụ ImageGen tích hợp. Đầu ra không chứa sản phẩm, thương hiệu hoặc chữ. Nền được tối ưu thành `dist/assets/folding-paper-stage.webp` (1800 px, WebP quality 86) và được lưu trong repo để website chạy độc lập với tài khoản tạo ảnh.

Prompt đầy đủ:

Use case: photorealistic-natural. Asset type: empty photographic stage for an elegant Vietnamese folding-carton manufacturer website. Landscape 3:2 image. Art direction: quiet editorial still-life photography, forest/sage and warm ivory, natural handmade paper rather than busy rocks. A broad matte ivory paper-covered display table fills the lower half, with a very low thin limestone riser on the right half. The table top is a continuous empty plane seen at a gentle elevated three-quarter angle. Background is a large curved sage-green sheet of thick textured paper gently bending into a cream wall, diagonal graceful paper edge. Small out-of-focus real botanical leaves only at the extreme upper-right edge and bottom-left edge, leaving the central and right 70 percent completely empty for an actual product photo to be overlaid. Soft diffuse window light from upper left, neutral white balance matching studio catalog photos, delicate ambient shadows, tactile fine-grain paper, restrained photographic realism. No hard patches of sunlight, no product, no box, no package, no branding, no letters, no illustration of packaging, no text, no icons, no UI. Image is BACKGROUND ONLY.

## Kiểm tra

- `npm run build`, `npm run check`.
- `qa-folding.mjs`: 12 tổ hợp VI/EN × 1672, 1440, 1024, 768, 390, 320; 6 phần, 8 mẫu, không tràn ngang/ảnh lỗi/lỗi JavaScript, bộ lọc, tải lại, đổi ngôn ngữ, chuyển góc ảnh, báo giá điền sẵn, FAQ bàn phím, điều hướng từ P01/P02.
- Kiểm tra ảnh chụp từng vùng: hero desktop/mobile, ứng dụng, vật liệu, thư viện.
- Kiểm tra hồi quy P02 bằng `qa-products.mjs`, `qa-families.mjs`; ô Hộp giấy mềm chuyển sang trang riêng, năm ô còn lại giữ chức năng lọc.
- Các bản thay đổi vẫn ở workspace, không tự đẩy GitHub hoặc deploy.

Cập nhật điều hướng P06: nhóm Túi giấy dẫn vào `/danh-muc/tui-giay/` / `/en/paper-bags/`; hai nhóm nhãn/catalog còn dùng bộ lọc P02. Build chung hiện tạo 12 đường dẫn.

Cập nhật P07: Nhãn dán decal dẫn vào `/danh-muc/nhan-dan-decal/` / `/en/adhesive-labels/`; Nhãn hàng & catalog còn dùng bộ lọc P02. Build chung hiện tạo 14 đường dẫn.

Cập nhật P08: Nhãn hàng & catalog dẫn vào `/danh-muc/nhan-hang-catalog/` / `/en/hang-tags-catalogues/`. Cả sáu nhóm đã có trang riêng; build chung tạo 16 đường dẫn.
