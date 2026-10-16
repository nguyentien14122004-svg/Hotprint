# Túi giấy — hero túi đỏ, 16/10/2026

Phạm vi đã được chủ website xác nhận: trang Túi giấy, thay túi KARL ở đầu trang bằng túi đỏ trong mẫu. Không thay hero carton.

## Thành phẩm
- Ảnh hero: `dist/assets/bag-hero-red-v4.webp` (2066×761); bản nhỏ `dist/assets/bag-hero-red-v4-small.webp` (1200 px).
- Chữ và nút là HTML thật, hỗ trợ VI/EN/ZH; giữ logo và toàn bộ footer.
- Máy tính dùng toàn cảnh theo tỷ lệ mẫu; tablet xếp chữ trên ảnh; điện thoại cắt vùng cảnh bên phải, giữ toàn bộ túi và bóng tiếp xúc.
- Nút + mở đúng ảnh gốc **032A5336** (Túi quà họa tiết hoa). 032A5311 là túi vàng họa tiết chim, KHÔNG dùng làm đích của hero đỏ.
- Giữ 15 mẫu thư viện và carousel cũ. Báo giá/yêu cầu mẫu trong cửa sổ ảnh giữ ngữ cảnh 032A5336.
- Sửa trong `build-bags.mjs`, CSS cuối `dist/bags-reference-v2.css`.

## Ảnh và chế độ
Built-in Imagegen, edit. Dùng ảnh thiết kế chủ website gửi làm edit target, xóa chữ/nút để đặt HTML. Không tuyên bố ảnh AI đồng nhất từng pixel; ảnh gốc sản phẩm vẫn có thể mở.
Input: `C:/Users/OS/AppData/Local/Temp/codex-clipboard-b97b1a54-50c2-4b43-a03d-9abb7d2a2dc4.png`.
Raw output: `C:/Users/OS/.codex/generated_images/01a12964-a877-7ac3-8cca-efcc4a064e82/exec-19248297-65d6-46ed-b8d2-5b6417468a8e.png`.
Sharp chỉ nén/đổi kích thước WebP.

### Final prompt
Precise image edit. This is the supplied final website hero reference. Remove ONLY all typography and UI elements from the LEFT side: the eyebrow, horizontal rule, title, subtitle, description, green button, arrow icons and underlined link. Seamlessly reconstruct the existing warm ivory backdrop under those letters and UI. Preserve absolutely everything else: the red bird-pattern gift bag on the right, its exact artwork, rope handle, yellow top, proportions, printed details, position and size; travertine tabletop with its diagonal left edge, window at right, all white flowers, green leaves, fallen petals, foreground blur, sunlight, contact and cast shadows, framing and original colours. Do not redraw, reposition or redesign the product. Do not add or remove any photographic props. Retain the same 2067:761 wide aspect ratio and composition. The left 40 percent should become clean softly lit warm cream negative space for real HTML text. Output the photograph only, no lettering or buttons anywhere outside the existing product artwork.

## Kiểm tra
Build 72 routes và verify deployment pass. QA Túi giấy 18 kích thước/ngôn ngữ, 15 gallery gốc, filter/search/history, requests, FAQ, carousel, navigation pass. Sau đối chiếu ảnh sửa hero model sang 032A5336 và kiểm tra lại ảnh gốc, báo giá, yêu cầu mẫu. Xem trực quan desktop 1440 và mobile 390, tablet 1100. Không tràn ngang.

