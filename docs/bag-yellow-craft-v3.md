# Túi vàng — khối chi tiết Túi giấy, 16/10/2026

## Phạm vi
Theo screenshot chủ website, thay túi Socola trong khối “Từ chiếc túi đến dấu ấn riêng” bằng túi vàng Trung Thu họa tiết chim. Hero túi đỏ vẫn giữ nguyên.

- Model ảnh gốc: **032A5311**, đối chiếu ảnh chủ website gửi với `dist/assets/products/032A5311-large.webp`.
- Ảnh dựng cảnh: `dist/assets/bag-yellow-craft-v3.webp` (1706×922), bản nhỏ `dist/assets/bag-yellow-craft-v3-small.webp` (1100 px).
- Toàn cảnh giữ vị trí túi, nền đá, quai dây và bóng tiếp xúc theo mẫu. Nội dung HTML sửa lỗi “Túi chiếc túi” trong ảnh mẫu thành “Từ chiếc túi”.
- Ba thẻ giấy/quai/hoàn thiện và tiêu đề chuyển lên trên khung ảnh, không bỏ nội dung.
- Desktop/tablet hiển thị toàn ảnh, callout bên phải. Mobile cắt phần trống bên phải, giữ đủ túi, callout xuống dưới.
- Nút + mở ảnh gốc 032A5311. “Trao đổi thiết kế” chuyển trang tư vấn với category=tui-giay và model=032A5311.
- Logo, footer, 15 gallery, carousel và hero đỏ không đổi.

## Imagegen
Mode: built-in edit. Edit target:
`C:/Users/OS/AppData/Local/Temp/codex-clipboard-d0d0f1c8-0506-4e34-adec-c957db728610.png`.
Ảnh gốc được đối chiếu:
`C:/Users/OS/AppData/Local/Temp/codex-clipboard-9ce01ddd-3d24-4df6-a92d-5c7a27c8a67f.png`.
Raw output:
`C:/Users/OS/.codex/generated_images/01a12964-a877-7ac3-8cca-efcc4a064e82/exec-dd8ac9e8-69b8-4ec5-a220-b0965ce01542.png`.
Ảnh trình bày đã được chỉnh bằng AI, không tuyên bố đồng nhất từng pixel hoặc ảnh chụp nguyên bản. Ảnh sản phẩm gốc truy cập qua nút +. Sharp chỉ nén/resize WebP.

### Final prompt
Precise edit of the supplied website composition. Remove ONLY the text on the right and its brown rounded call-to-action button and arrow. Reconstruct the warm softly sunlit cream wall beneath them. Also remove the narrow blank cream screenshot border along the top and bottom and the narrow cream strip / rounded UI panel at the extreme left by seamlessly extending the adjacent photographic scene into those areas. Keep the same 1705:922 canvas, framing and product placement. Preserve the yellow Trung Thu Doan Vien paper gift bag exactly as pictured: its printed cranes and flowers, white braided rope, yellow top, geometry, size and position. Preserve the travertine tabletop, all real contact shadows beneath the bag and rope, soft cast shadows, white flowers, green foliage at top left and blurry foreground leaves at bottom right. Preserve the warm light direction, paper texture, stone pores and original colours. Do not redesign or move the product. Do not add any text or buttons. Output only a seamless photograph with clear negative space on the right for real HTML text.

## Kiểm tra
Build 72 trang, verify:deployment 515 tham chiếu pass. QA 18 viewport/ngôn ngữ VI/EN/ZH, 15 gallery ảnh gốc, search/filter/history, FAQ, carousel, quote/sample/consult và logo/footer pass. Bổ sung kiểm tra nút mở ảnh vàng và query model tư vấn. Xem trực quan 1440/768/390 sau decode ảnh; không tràn hoặc méo hình.

Sửa `build-bags.mjs`, cuối `dist/bags-reference-v2.css`, và `locales/zh-Hans.json`.

