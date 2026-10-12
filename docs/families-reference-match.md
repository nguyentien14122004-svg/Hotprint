# Sáu nhóm sản phẩm theo mẫu — 12/10/2026

## Phạm vi

Thay phần P02.2 “Bao bì nào dành cho bạn?” theo ảnh mẫu mới nhất, giữ hero đã chốt và các phần thư viện/quy trình/tư vấn. Nội dung, tiêu đề, biểu tượng, số mẫu và các liên kết đều là HTML/SVG hoạt động độc lập. Không dùng ảnh chụp thiết kế chứa chữ hoặc sản phẩm làm giao diện.

## Bố cục tham chiếu 1672 × 941

- Tiêu đề phụ bắt đầu x105/y42, có gạch mảnh bên phải. Tiêu đề Playfair Display 600, 76 px, lá nhỏ cạnh cuối câu. Mô tả đặt bên phải tại x1145.
- Hai hàng có độ rộng khác nhau: hàng đầu 612/430/478 px, cao 342 px; hàng dưới 531/502/485 px, cao 319 px. Khoảng cách 14–16 px, lề trái 63 px, hàng đầu bắt đầu tại y212, hàng dưới y569.
- Mỗi ô có vòng biểu tượng nền ngà, tiêu đề serif, mô tả, liên kết tím mận có gạch dưới/mũi tên, số mẫu và đoạn gạch mảnh. Bo góc 14 px, viền sáng mảnh.
- Nền giấy ngà, đường cong giấy, đá sáng và bóng cây được tách khỏi ảnh sản phẩm thật. Trên desktop các tỷ lệ bám mẫu; tablet hai cột, mobile một cột để đọc và bấm được.

## Ảnh và nguồn

| Nhóm | Ảnh thật | Số mẫu hiện tại |
|---|---|---|
| Hộp giấy mềm | 032A5315 — Bitter Melon Artichoke | 8 |
| Hộp carton in màu | 032A5366 — hộp bộ chảo Cookever | 4 |
| Hộp cứng cao cấp | 032A5293 — hộp Sâm Ngọc Linh | 9 |
| Túi giấy | 032A5331 — Karl Lagerfeld | 8 |
| Nhãn dán decal | 032A5339 — cuộn nhãn mã vạch | 3 |
| Nhãn hàng & catalog | 032A5353 — nhãn TRU Canine | 4 |

Các tệp gốc thuộc kho người dùng cung cấp, đã có nguồn trong `product-image-sources.json`. Dùng bản WebP `-large` và cửa sổ cắt CSS theo đường bao. Không vẽ lại sản phẩm, chữ in, thương hiệu hoặc thay màu. Hình cuộn Viet Farm và thẻ “Natural Product” trong ảnh tham chiếu không được dùng vì chưa có ảnh sản phẩm tương ứng đã xác nhận. Góc chụp/chi tiết sản phẩm thật vì vậy có khác ảnh tham chiếu. Số mẫu được tính động từ dữ liệu, không viết cứng trên giao diện.

## Chức năng

Bấm bất kỳ vị trí trong ô hoặc nhấn Enter khi focus sẽ lọc đúng nhóm ở thư viện, cập nhật URL và chuyển focus tới tiêu đề thư viện. Đổi VI/EN giữ nhóm đang chọn. Tôn trọng reduced-motion; có focus viền tím mận. Không có tính giá hay giỏ hàng.

## Tệp chỉnh sửa

- `products-template.html`: phần tiêu đề và khung sáu nhóm.
- `dist/products.js`: render, tên VI/EN, ảnh, số mẫu và hành vi liên kết.
- `dist/products-families.css`: bố cục và kiểu chữ; chỉ tác động phần `.family-gallery`.
- `dist/family-photo-windows.css`: tọa độ khung nền và đường bao ảnh gốc.
- `dist/assets/families-empty-atlas.webp`: sáu bối cảnh trống. Mỗi ô lấy đúng vùng nền qua CSS và vẫn là một thành phần độc lập.
- `dist/assets/families-outer.webp`: nền ngoài các ô.

Hai nền được tạo bằng **image_gen tích hợp**, chỉ chứa bối cảnh trang trí, không chứa sản phẩm/chữ/logo. Ảnh sản phẩm được đặt riêng bằng HTML. Chạy `npm run build` sau khi sửa template để đồng bộ VI/EN.

## Prompt Imagegen

### Nền sáu ô

Edit this supplied reference into a BACKGROUND-ONLY asset atlas for a real coded website. Keep the exact 1672:941 aspect ratio, all six card bounds, the ivory paper texture, curved paper masks inside each card, pale limestone platforms, sage sheets, blurry real foliage, sunlight and shadow, and the outer page background exactly where they are. REMOVE every product completely: the Bitter Melon box, cookware box, green gift box, shopping bag including handles, all label rolls/sheets, and all hang tags/strings. Inpaint those areas with the existing empty stone/paper surfaces. Also REMOVE ALL text, numbers, letters, logos, icons including their circular discs, underlines, arrows, separators, and the small green leaf next to the heading. Preserve ONLY the six empty natural material photographic settings inside their same card shapes and the background foliage. Absolutely no product, text, UI symbols or branding anywhere. Each card's left side stays quiet ivory for live HTML typography. Match this reference faithfully, no new layout. This is an atlas of EMPTY backgrounds; real original product photographs and all UI will be separate HTML/CSS layers.

### Nền ngoài

Create a background-only edit from this reference, exact same landscape aspect ratio 1672:941. Remove ALL six cards completely, every product, every word and number, all icons, circles, lines, arrows, and the heading's little green leaf. Fill the entire center with the reference's uninterrupted pale warm ivory-sage paper background. Preserve the fine botanical leaf engraving only on the far left upper edge, and the real blurred green foliage and its soft natural shadows only in the far top right corner and far bottom left corner. The center and 90% of the canvas must be clear light warm ivory paper with very subtle real fiber texture. No stone platforms, no cards, no objects, no logos, no letters, no buttons. Match the outer background and botanical style of the supplied reference exactly. Decorative background for a real HTML webpage.

## Kiểm tra và trạng thái

Đã hoàn tất: `qa-families.mjs` đạt cả 12 tổ hợp, 6 liên kết, bàn phím và giữ nhóm khi đổi ngôn ngữ; `qa-products.mjs` đạt 10 tổ hợp và các luồng thư viện/Trang chủ, không có lỗi JavaScript hoặc ảnh hỏng; `npm run check` đạt. Đã sửa chiều rộng tối thiểu của ô để không bị cắt trên mobile, xem lại ảnh chụp VI/EN desktop và điện thoại. Trang chủ, sản phẩm VI/EN trả HTTP 200.

`qa-families.mjs` kiểm tra 12 tổ hợp VI/EN × 1672/1440/1024/768/390/320, ảnh tải, 6 ô, số lượng đúng, từng ô nằm trong màn hình, 6 liên kết, Enter bằng bàn phím và ngôn ngữ giữ trạng thái. Ảnh đối chiếu cùng kích thước mẫu và ảnh mobile trong `qa/` không xuất bản. Preview tại `/san-pham/#nhom-san-pham`, cổng 4174. Chưa deploy hoặc đẩy thay đổi mới lên GitHub.
