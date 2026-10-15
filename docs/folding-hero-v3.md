# Hộp giấy mềm — hero theo mẫu mới

Ngày 16/10/2026. Thay riêng phần trình bày đầu trang VI/EN/ZH; các phần cấu trúc, vật liệu, 13 mẫu, bộ lọc, ảnh gốc, FAQ và footer tiếp tục hoạt động.

## Thiết kế

Nền ảnh tràn tỷ lệ 1.91:1, tiêu đề serif hai dòng bên trái, bốn biểu tượng nét mảnh, CTA xanh. Bàn đá ấm, bóng cửa sổ, bệ tròn, khay bên trái, bình gốm bên phải và câu nhấn được bố trí theo ảnh tham chiếu. Giữ logo HotPrint gốc và đủ sáu điều hướng nhóm sản phẩm. Từ 1200px trở xuống, chữ tách phía trên ảnh để không che sản phẩm; điện thoại thu hẹp phần tường trống bên trái bằng khung CSS, không kéo giãn sản phẩm.

Ảnh thứ hai (cụm hộp mỹ phẩm LUBI) và thứ ba (hộp khăn giấy hoa văn lá) do chủ website cung cấp được dùng làm đầu vào. Không dùng nhãn EURI/GLOW & MORE trong mẫu bố cục. Đây là ảnh dựng cảnh từ ảnh tham chiếu bằng AI, không phải ảnh chụp nguyên bản hoặc cam kết in trùng từng pixel. Không thêm các sản phẩm này vào danh mục 13 mẫu đã xác minh hoặc tự nhận là dự án đã sản xuất. Các ảnh gốc trong thư viện không thay đổi.

## Tệp và kiểm tra

- `folding-hero-v3.mjs`: markup thật, chữ dịch VI/EN và icon SVG.
- `dist/folding-hero-v3.css`: bố cục riêng hero, responsive và trạng thái focus.
- `build-folding.mjs`: tích hợp hero và preload đúng kích thước màn hình.
- `dist/assets/folding-hero-v3.webp`: ảnh cảnh 2400px.
- `dist/assets/folding-hero-v3-mobile.webp`: cùng ảnh, bản nhẹ 1200px.
- `locales/zh-Hans.json`: bản dịch mới.

`npm run test:folding-hero`: 24 bố cục VI/EN/ZH, liên kết khám phá, bốn điểm nhấn, sáu nhóm và 13 mẫu.
`npm run test:folding`: 18 bố cục toàn trang, bộ lọc, modal ảnh gốc, đổi ngôn ngữ, carousel bàn phím và thông tin nhóm đi vào báo giá/mẫu.

## Imagegen

Dùng **image_gen tích hợp, chế độ edit**, không dùng CLI. Reference 1: ảnh bố cục chủ website gửi; reference 2: hộp LUBI; reference 3: hộp khăn giấy. Đã xem kết quả và kiểm tra không có chữ HTML đè lên sản phẩm. Prompt cuối:

```text
Create a photorealistic website hero scene by editing reference 1. Reference 1 is the exact composition, lighting, set design and shadows to match. Reference 2 is the actual coral LUBI cosmetic carton stack to insert in place of the three EURI cartons; reference 3 is the actual colorful rectangular floral tissue box to insert in place of the GLOW & MORE box. Preserve the identity, artwork, typography, proportions, and colors of products 2 and 3 faithfully, do not rebrand them EURI or GLOW & MORE. Keep the original three-box arrangement from reference 2 on the right of the set with contact shadows where boxes meet and on the tabletop. Put the tissue box in the lower middle foreground on the round limestone plinth with natural contact shadow. Retain reference 1 warm limestone table, ivory wall, sunlight through the window from upper left, coherent directional cast shadows, warm soft contrast, neutral ceramic vase with small dried flowers at far right, small ribbed ceramic object far right and tray at bottom left. No invented printed stationery in foreground. CRITICAL: Output the hero SCENE ONLY in a 1.91:1 wide landscape image, no website header, logo, navigation, title, body copy, icons, buttons, handwritten quote or UI. The entire upper-left 48% and middle-left area to 67% height is empty softly lit warm ivory wall for real HTML text. Match reference 1 scene coordinates after removal of header and lower navigation: coral stack at x58-93%, y20-81%, tissue box x23-59% y59-91%; do not let products intersect left text zone. Photographic perspective and shadows must be physically consistent and products must rest firmly on surfaces. No white outline or floating cutout effect, no oversaturated colors, no fake glossy material, no blurred printing, no cropped product. Preserve existing source markings where visible. High resolution.
```
