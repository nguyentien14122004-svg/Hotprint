# P03 — Hộp giấy mềm: thiết kế editorial theo mẫu mới

Ngày 14/10/2026. Áp dụng riêng ba đường dẫn `/danh-muc/hop-giay-mem/`, `/en/folding-cartons/`, `/zh/folding-cartons/`. Yêu cầu: bám bố cục, kiểu chữ, lá trang trí và bóng đổ trong mẫu do chủ website cung cấp; giữ chính xác sản phẩm HotPrint.

## Bố cục và vận hành

- Header kem gọn, logo nguyên bản và VI/EN/中文. Hero hai cột 43/57, tiêu đề Playfair Display, nội dung Be Vietnam Pro, nền botanical và khung ảnh bo nhẹ.
- Điều hướng sáu nhóm; phần cấu trúc có ba thẻ đánh số, chữ phía trên ảnh trên desktop; chuyển thành thẻ ngang trên điện thoại.
- Dải ảnh cận cảnh Lévinia hồng, tiếp theo là ba cột vật liệu với biểu tượng nét mảnh. Ảnh thật không có hoa văn hoa như hình tham chiếu nên giữ nguyên thiết kế thực tế của sản phẩm.
- Thư viện đầy đủ **13 mẫu**, bốn cột desktop, ba cột tablet, hai cột điện thoại (một cột dưới 360px). Bộ lọc thực phẩm 4, mỹ phẩm 3, tiêu dùng 3, y tế 3. Không đưa Maison Marou `032A5316` về nhóm này: sản phẩm thuộc hộp cứng theo xác nhận chủ website.
- Sáu câu hỏi dạng mở rộng, CTA báo giá/mẫu/nhà máy, bộ ảnh lớn cuối trang chuyển thủ công với 7 mẫu chụp gốc. Nút trước/sau hỗ trợ bàn phím; mã mẫu hiện tại đi đúng vào báo giá và yêu cầu mẫu. Không tự chuyển ảnh, không dựng tiếp nhận đơn hàng.
- Cửa sổ xem ảnh vẫn hiển thị ảnh gốc và các góc phụ. Footer giữ thông tin công ty và địa chỉ đã xác nhận, không sao chép địa chỉ minh họa trong mẫu.

## Đối chiếu ảnh và lựa chọn

Đã duyệt contact sheet toàn bộ 64 JPG trong thư mục ảnh do chủ website cung cấp, đồng thời đối chiếu lại API công khai của hotprint.vn ngày 14/10/2026. Có 9 mục chính thức trong nhóm Hộp giấy mềm, đều có ảnh và đã được ánh xạ trong `official-catalog-audit.json`; trang mới giữ toàn bộ 13 mẫu hợp nhất từ ảnh chủ website và website công ty.

- Hero: `032A5315` — Bitter Melon Artichoke; đúng nhóm, ảnh nguồn rõ và phối xanh/kem phù hợp bố cục tham chiếu.
- Cấu trúc: `032A5312` Premium Durian / mặt hộp liền, `032A5318` Wesser / cửa sổ, `032A5320` GE UltraPro / tai treo. Không dùng sản phẩm giả trong ảnh mẫu.
- Cận cảnh và bộ ảnh cuối: `032A5267` Lévinia hồng thật, không tạo lại bề mặt hay nhãn hiệu.
- Giữ nguyên các bitmap ảnh sản phẩm. Các mặt nạ CSS chỉ hiển thị vùng sản phẩm thật. Ảnh bổ sung từ hotprint.vn dùng các mặt nạ chính thức hiện có; không vẽ lại chữ trên bao bì.

## Nền và bóng

Nền mới: `dist/assets/folding-editorial-stage-v2.webp`, tạo bằng **imagegen tích hợp**, không dùng API/CLI. Nền không chứa sản phẩm hay chữ. Bàn đá kem liên tục, tường sage, nhánh lá viền, ánh sáng từ trên trái. Mặt bàn không có cạnh bệ cắt qua đáy hộp.

Prompt đã dùng:

> Use case: photorealistic-natural. Asset type: empty photographic studio backdrop for a real folding carton website hero; no products, no text. Create a luxurious, believable editorial still life SET ONLY, horizontal 3:2 composition. Camera elevated at approximately 40 degrees looking down, 70mm lens. Bottom 75% of the frame is a continuous warm ivory limestone tabletop, very fine real stone texture, NO pedestal edges crossing this area; full uninterrupted surface for placement of a product from x20%-85%, y25%-85%. Background upper 25% is softly textured muted sage olive plaster wall. A single small rough limestone block at extreme right edge, behind future product. Very delicate live olive leaves at extreme top left and upper right edges, and softly defocused tiny sprig in bottom left corner, occupying less than 8% of frame. Sunlight from UPPER LEFT, soft natural shadows cast gently toward LOWER RIGHT. Subtle dappled leaf shadows only around periphery, center well lit and quiet. Palette warm cream #E7DFD1, muted sage #5E7D5A, soft warm stone; restrained premium botanical product photography. Natural texture, no glossy computer rendering, no arch backdrop, no packages, no boxes, no branding, no lettering. Leave center and lower surface empty, no fake product shadow in center. An actual convincing photographed environment.

Bảy bóng riêng `dist/assets/folding-shadows/*.svg` kế thừa dấu đáy từ `library-grounding.mjs`, tăng nhẹ mật độ bóng tiếp xúc và bóng đổ trên nền mới. Bóng và ảnh cùng hệ tọa độ 3:2, cùng scale/position; không dùng drop-shadow ôm quanh cạnh trên của hộp. Sáu ảnh chính thức dùng bóng sàn/mặt nạ đã đăng ký trong `official-catalog.css`. Đây là ảnh thật được trình bày trên bối cảnh thiết kế; ảnh gốc luôn mở được qua nút xem chi tiết.

## Điểm chỉnh và kiểm tra

- Nguồn nội dung: `build-folding.mjs`.
- Style riêng: `dist/folding-reference.css`, toàn bộ scope `.fold-reference` hoặc body chứa trang này, không đổi năm trang danh mục khác.
- Carousel riêng: `dist/folding-reference.js`; dialog/bộ lọc giữ `dist/folding.js` dùng chung.
- Bản dịch: `locales/zh-Hans.json`; build Chinese hỗ trợ dịch thêm `aria-roledescription`.
- `npm run test:folding`: 18 viewport/ngôn ngữ, đủ mẫu, kiểm tra biên đa giác sản phẩm không bị crop, bộ lọc/URL, góc ảnh, bàn phím FAQ/carousel, báo giá và mẫu đúng ngữ cảnh.
- `node qa-catalog-completeness.mjs`: đủ 67 mẫu trong 18 đường dẫn danh mục và cửa sổ thông tin.
- `npm run check`, `npm run verify:site`, `npm run verify:deployment`: mã, tài nguyên, 72 đường dẫn và hash ảnh hero Trang chủ được giữ nguyên.

Các ảnh website chính thức có độ phân giải và góc chụp khác nhau, được giữ trung thực; không thay bằng phiên bản AI chi tiết hơn nhưng sai sản phẩm. Không tuyên bố các bối cảnh studio được tạo là ảnh chụp tại nhà máy.
