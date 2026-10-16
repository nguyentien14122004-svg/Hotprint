# Hero Nhãn dán decal — ảnh mẫu cuộn đỏ, 17/10/2026

## Thay đổi
Thay lớp ghép sản phẩm/nền ở phần đầu trang bằng nguyên ảnh mẫu chủ website cung cấp. Bố cục chữ trái, ảnh phải ở desktop; tablet/mobile chữ trên, ảnh dưới. Ảnh luôn đủ khung, không kéo giãn hoặc cắt. Giữ logo, 6 nhóm điều hướng, 7 sản phẩm thư viện, các khối còn lại và footer đầy đủ.

- Input: `C:/Users/OS/AppData/Local/Temp/codex-clipboard-da65b419-6c70-433d-890c-0c392d051847.png`.
- Output: `dist/assets/label-hero-red-roll-v3.webp`, **1704×923**, lossless.
- Đối chiếu RGBA sau decode: bằng nhau từng pixel. Không Imagegen, không vẽ lại, không phủ gradient lên ảnh, không tạo bóng CSS mới.
- Ảnh sản phẩm gốc: `dist/assets/products/032A5328-large.webp`, đối chiếu ảnh chủ website `codex-clipboard-1734fc54-0f6c-4d3e-afed-1eeb85e014c7.png`.
- Nút + mở original gallery model **032A5328**; báo giá/yêu cầu mẫu trong dialog giữ model/category đúng.

## Tệp chỉnh
`build-labels.mjs`, cuối `dist/labels-reference-v2.css` (.label-hero-reference), `locales/zh-Hans.json`, `qa-labels.mjs`. Anchor ảnh `#label-hero-photo`.

## Kiểm tra
Build 72 routes; verify:deployment 517 tham chiếu pass. QA 18 viewport VI/EN/ZH (1920/1440/1024/768/390/320); không tràn ngang; tỷ lệ ảnh hero bằng ảnh nguồn, object-fit contain; 7 gallery ảnh gốc, filter/history/ngôn ngữ, request context, carousel, FAQ keyboard, liên kết và logo/footer pass. Xem trực quan 1440 và 390.

