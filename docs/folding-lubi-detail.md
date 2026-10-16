# Dải ảnh hộp LUBI — 16/10/2026

Thay dải cận cảnh Lévinia theo yêu cầu mới bằng bộ ba hộp LUBI từ ảnh chủ website cung cấp. Hai cột 62/38, ảnh nguyên khung không phóng cắt, nền kem và chữ gọn. Nút ảnh và liên kết mở đúng ảnh gốc LUBI, không mở nhầm Lévinia. Đồng bộ VI/EN/中文. Không thay hero hoặc 13 mẫu trong thư viện.

Ảnh trình bày được dựng bằng **image_gen tích hợp**, không dùng CLI; không gọi đây là ảnh gốc hay dùng để xác nhận chi tiết chữ nhỏ. Ảnh gốc được giữ nguyên cả dấu nguồn, chỉ chuyển WebP lossless.

Tệp: `dist/assets/folding-lubi-detail-v1.webp` (1800px), `dist/assets/folding-lubi-detail-v1-small.webp` (800px), `dist/assets/lubi-supplied-original.webp` (ảnh gốc). Chỉnh markup ở `build-folding.mjs`, CSS cuối `dist/folding-reference.css`.

Prompt cuối:

```text
Create a photorealistic website product banner, landscape 2.8:1 ratio, no interface and no added text. Input 1 is the composition/style reference: reproduce ONLY its left-hand photograph, not its webpage or text panel. Input 2 is the exact product identity reference: three coral LUBI cosmetics folding cartons stacked two below and one centered above. Preserve their packaging artwork, LUBI logo, Korean flag marks, white label panels, printed text, relative arrangement, proportions, and coral color faithfully; never redesign or invent the packaging. Place this exact three-carton group on a pale ivory travertine slab, centered with comfortable breathing room, all boxes fully visible. Background is a soft warm cream plaster wall, a small blurred olive-green branch entering upper left, delicate small white flowers at lower left and far right, soft off-white linen at lower left. Match the reference's quiet warm daylight, natural soft contact shadows beneath the boxes and gentle cast shadows falling rightwards. Product should occupy about 57% of frame width and 83% of frame height, with breathing room above and below; photograph taken at product level with slight view of top and left sides. Paper must look matte, tactile and real. Keep scene muted cream and sage with the product's original coral as focal point. Avoid floating boxes, hard cutout halos, pasted-on appearance, excessive saturation, extra boxes, warped typography, invented labels, watermark changes, CGI gloss, oversized leaves, cropped edges. Output only the photographic scene, not a screenshot.
```
