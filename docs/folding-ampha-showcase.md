# AMPHA 3B — trưng bày cuối trang Hộp giấy mềm

16/10/2026: Thay slide mở đầu Lévinia bằng mẫu AMPHA 3B theo ảnh chủ website cung cấp. Mẫu này đã có trong thư viện chính thức với ID `HP6388`; không thêm mẫu trùng. Ảnh trình bày trên đá ngà, hoa trắng và lá xanh. Giữ các slide sau và điều khiển carousel. Báo giá/yêu cầu mẫu mặc định chuyển đúng HP6388; cửa sổ chi tiết vẫn mở ảnh gốc `/assets/products/HP6388-large.webp`.

Ảnh dựng bằng **image_gen tích hợp**, không dùng CLI. Không dùng bản dựng cảnh để xác nhận chữ nhỏ hay thông số in. Caption dẫn xem ảnh gốc; không gọi bản dựng là ảnh chụp nguyên bản. Bản desktop và mobile dùng ảnh nguyên khung, không cắt sản phẩm.

Tệp: `dist/assets/folding-ampha-showcase-v1.webp` (1800px), `dist/assets/folding-ampha-showcase-v1-small.webp` (800px). Markup: `build-folding.mjs`; CSS `.fold-ampha-photo` ở cuối `dist/folding-reference.css`. Bản dịch trong `locales/zh-Hans.json`. Kiểm tra bằng `qa-folding.mjs`, gồm đúng ngữ cảnh HP6388, ảnh gốc, carousel và 18 bố cục VI/EN/中文.

Prompt cuối:

```text
Use case: compositing. Create a photorealistic product photograph for a website showcase, landscape aspect ratio 2.1:1. Input 1 is the layout and photography reference; reproduce ONLY the photograph on its right, no website text, green panel, buttons, captions or interface. Input 2 is the exact product to preserve: one ivory AMPHA 3B carton, curved AMPHA 3B lettering, vitamin line, SOFTGEL text, yellow/black/red overlapping circle symbol, small US flag, red USA PHARM.,JSC text lower left, 100 SOFTGELS marking lower right. Preserve the actual artwork, proportions, colours and typography without inventing or correcting packaging text. Use the supplied carton, not a generic medicine box. The box stands upright naturally on pale ivory travertine, center-left in the frame, with its whole front visible and only a small left-side and top view as in reference 1. Product occupies approximately 42% of image width and 70% of height, with generous margin around every edge. Cream stone wall behind, warm soft sunlight from upper left, coherent soft contact shadow under the box and subtle cast shadow to right. Small white flowers and dark olive leaves on the far right; a small out-of-focus leaf at the lower left foreground. Muted natural beige/sage palette, accurate off-white box with matte paper surface; photographic realism, no CGI shine, no floating product, no cutout halo, no oversaturation, no extra products, no clipped edges, no added branding or watermark. Output only the finished photographic scene.
```
