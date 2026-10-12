# Căn chỉnh theo ảnh mẫu — 12/10/2026

Yêu cầu ưu tiên mới nhất: dựng giao diện thật sát từng chi tiết ảnh tham chiếu 1672 × 941. Không dùng nguyên ảnh thiết kế chứa chữ/nút làm website. Tài liệu này thay thế lựa chọn font/hero trong bản cập nhật đầu ngày.

## Các mốc tại kích thước tham chiếu

| Thành phần | Vị trí / kích thước |
|---|---|
| Header | cao 96 px |
| Logo gốc | x76, rộng 212 px |
| Tiêu đề | x151, y254; Playfair Display 600, 80 px, dòng 86 px; cân chiều rộng chữ theo mẫu |
| Mô tả | x152, y446; Be Vietnam Pro 22 px |
| Nút chính | x152, y518; 320 × 74 px, tím mận |
| Báo giá | x507; cùng hàng nút chính |
| Ba lợi ích | x115, y663; vòng biểu tượng 49 px |
| Đường phân cách | x115, y750; rộng 640 px |
| Chiều cao hero | 845 px, ngay dưới header |

Các mốc co theo tỷ lệ màn hình từ 1100 px trở lên. Tablet và mobile giữ bố cục thích ứng, không thu cả trang thành một ảnh nhỏ. VI/EN được kiểm tra riêng.

Đã bỏ breadcrumb nhìn thấy và nút/nhãn nổi trên ảnh ở desktop vì không có trong mẫu. Logo vẫn về Trang chủ. Chiếc hộp là vùng bấm mở ảnh gốc, có nhãn truy cập và viền focus bàn phím. Trên mobile vẫn có nút “Xem mẫu thật”. Các số 06+ và 36+ theo mẫu; thư viện hiện có đúng 6 nhóm và 36 mẫu, không tuyên bố thêm số lượng cụ thể.

Phông được đối chiếu thị giác từ ảnh, không có tệp thiết kế/font gốc để chứng thực tên font. Playfair Display 600 được lưu cục bộ kèm OFL từ Google Fonts. Sản phẩm vẫn dùng `032A5293-large.webp`, không sửa thương hiệu/chữ in. Chỉ dùng phép biến đổi bố cục CSS; do ảnh gốc có ánh sáng và góc chụp khác ảnh tham chiếu, không tuyên bố trùng tuyệt đối từng pixel.

## Tài nguyên nền riêng

`dist/assets/botanical-reference-background.webp` — tạo bằng công cụ image_gen tích hợp từ ảnh tham chiếu, chỉ giữ chất liệu giấy, đá và cây. Toàn bộ hộp, chữ, logo, nút, số liệu, biểu tượng đã bỏ khỏi tài nguyên; chúng được dựng độc lập trong HTML/CSS hoặc dùng ảnh sản phẩm thật. Nền cũ không còn dùng cho hero desktop.

Prompt đầy đủ:

Edit this supplied website reference into a BACKGROUND-ONLY web asset with the SAME exact composition, materials, botanical details, colors and lighting. Output landscape same aspect ratio 1672:941. Remove the complete top navigation bar (top 96px) and extend the hero background up to fill that area, but keep ALL other elements at their original image coordinates. Remove ALL text, numbers, logos, buttons, icons, separators, underline strokes, the little green leaf next to the headline, and importantly remove the entire green product box with all of its printed artwork. Inpaint those areas naturally. Preserve the beautiful ivory textured paper across the left, finely hand-drawn botanical leaf engraving at left edge, the curved paper boundary from x694 y96 to approx x800 y420, muted forest/sage paper in upper middle, engraved leaf detail behind where box was, sunlit porous ivory stone slabs on right, blurry natural real leaves upper right and bottom, and especially the little potted plant in bottom center. Result must be a clean empty photographic/decorative BACKGROUND PLATE ONLY. No product, no lettering, no UI, no branding, no icons, no border lines. We will overlay the real untouched product photograph plus live HTML text and buttons ourselves. Match reference exactly rather than invent a new arrangement. Leave left region legible and empty of all text.

## Kiểm tra

- `qa-reference.mjs`: ảnh chụp đúng 1672 × 941 và số đo DOM, lưu trong `qa/` (không xuất bản).
- `qa-botanical.mjs`: 10 tổ hợp VI/EN × 1440/1024/768/390/320, ảnh/font tải, không tràn ngang, khám phá, báo giá, mở ảnh gốc, Trang chủ VI/EN đều đạt.
- `qa-products.mjs`: kiểm tra thư viện, tìm/lọc/phân trang, điều hướng và mobile đạt.
- `npm run check`: đạt. Đã xem ảnh chụp cùng kích thước mẫu và mobile.

Chỉ cập nhật preview cục bộ cổng 4174. Chưa deploy hoặc đẩy thay đổi mới lên GitHub.
