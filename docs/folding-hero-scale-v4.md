# Điều chỉnh kích thước sản phẩm đầu trang Hộp giấy mềm

16/10/2026: Theo yêu cầu chủ website, giảm kích thước cụm hộp mỹ phẩm và hộp khăn giấy khoảng 15% so với bản d07fe04. Giữ bố cục trang, chữ, nút, logo và các nhóm sản phẩm. Bệ đá có thêm khoảng trống quanh sản phẩm; bóng tiếp xúc được chỉnh theo tỷ lệ mới.

Ảnh chỉnh bằng **image_gen tích hợp**, chế độ edit từ ảnh v3, không dùng CLI. Tệp dùng trên trang: `dist/assets/folding-hero-v4.webp` (2400px) và `dist/assets/folding-hero-v4-mobile.webp` (1200px). Bản v3 được giữ để đối chiếu. Đây vẫn là ảnh dựng cảnh, không phải ảnh gốc chưa xử lý.

Prompt cuối:

```text
Edit this existing hero photograph with ONE precise adjustment only: reduce the displayed physical size of the entire three-box coral LUBI stack to approximately 85% of its current width and height, anchored at its bottom center where it meets the stone table. Also reduce the foreground floral tissue box to approximately 85% of its current width and height, anchored at the bottom center where it rests on the round stone plinth. Maintain the exact original relative arrangement of the three coral boxes. Keep all product branding, lettering, labels, artwork, colors, geometry and perspective unchanged; do not redesign or retype the packaging. Keep the round stone plinth unchanged in size and position so slightly more stone is visible around the smaller tissue box. Keep the entire image framing, camera, table, ivory wall, window light and shadows, vase, dried flowers, tray and ceramic props unchanged. Seamlessly reconstruct only the small background areas revealed by shrinking the products. Adjust only the products' contact/cast shadows proportionally so they remain grounded and physically correct under the same light. Preserve the warm photographic look. No new objects, no text overlays, no cropping, no added foliage. Same wide 1.91:1 image. This is a subtle scale reduction, not a new composition.
```

Kiểm tra bản dựng, tài nguyên và 24 bố cục hero ba ngôn ngữ bằng `qa-folding-hero-v3.mjs`; xem ảnh thực tế desktop/mobile sau thay đổi.
