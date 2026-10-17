# Liên hệ — Lời mời cùng tạo nên bao bì (17/10/2026)

## Thiết kế

Toàn bộ bốn phần được thiết kế lại: mở đầu có phong thư xanh trên bàn đá sáng, ba lối vào nhanh; ba kênh liên hệ như những tấm thiệp giấy; hai địa chỉ bên ảnh nhà máy thật có khung và bóng nhẹ; ba lựa chọn báo giá, mẫu và tư vấn với gợi ý chuẩn bị thông tin.

Giữ màu xanh tự nhiên, kem giấy, nâu đất và Playfair Display/Be Vietnam Pro. Giữ logo, footer đầy đủ, mọi thông tin liên hệ và hai địa chỉ đã được chủ website xác nhận. Ảnh nhà máy 032A5054 hiển thị đầy đủ tỷ lệ, không tạo lại hoặc phủ màu. Trang có VI/EN/中文; điện thoại có bố cục riêng và toàn bộ nội dung vẫn truy cập được.

Nút gọi, Zalo, email, Maps, sao chép địa chỉ/số điện thoại giữ hành vi cũ. Thêm sao chép email với thông báo và phương án thủ công khi clipboard bị chặn. Các yêu cầu vẫn dẫn vào biểu mẫu chuyên biệt và chỉ chuẩn bị email để khách kiểm tra/gửi; không thêm hệ thống tiếp nhận hoặc thông báo đã nhận giả.

## Tài nguyên Imagegen

Chế độ: built-in Imagegen, generate, `photorealistic-natural`; không dùng CLI/API fallback.

- Gốc: `C:/Users/OS/.codex/generated_images/01a12964-a877-7ac3-8cca-efcc4a064e82/exec-fda3cb45-b14c-47e8-ae7e-e5cdb135811f.png`
- Tệp dự án: `dist/assets/contact-invitation-v2.webp` (1536×1024, 399788 byte).
- Bản nhỏ: `dist/assets/contact-invitation-v2-small.webp` (900×600, 94036 byte).
- Ảnh là phong cảnh giấy trang trí; không được mô tả là sản phẩm hay cơ sở thật của công ty. Toàn bộ chữ và điều hướng là HTML.

Prompt cuối:

```text
Use case: photorealistic-natural. Asset type: decorative full-width website Contact hero for a premium Vietnamese paper packaging studio. Create an editorial landscape photograph, 3:2 ratio. A sunlit warm ivory plaster wall meets a beautiful pale travertine desk. RIGHT HALF ONLY: a large open unbranded deep sage-green paper envelope with a pristine blank ivory invitation card protruding, a small fan of tactile unprinted ivory, kraft and muted sage paper swatches, one elegant wooden pencil. Invitation and envelope occupy rightmost 45% and lower 70%, camera at slight overhead angle showing believable paper edges and folds. Upper right corner has a natural olive branch with a few leaves, tiny white blossoms, casting long soft diagonal shadows. LEFT 50% is completely empty softly lit warm cream wall and surface for dark live website typography, extremely quiet low contrast there. Warm natural sunlight from upper left, delicate realistic contact shadows underneath stationery, exquisite tactile paper fibers and stone pores. Palette cream #F4EDDE, sage #5E7D5A, muted earthy brown #8A6A55. Restrained premium art direction, welcoming human warmth, not a flat lay, no oversaturation. No text, letters, logos, printing, watermark, frames, people, buildings, phone, map or UI. Generic decorative stationery only, not a company product photograph.
```

## Kiểm tra

- `npm run build`, `npm run check`, `npm run verify:deployment`: đạt, 72 trang và 67 sản phẩm.
- `qa-contact-page.mjs`: 21 tổ hợp VI/EN/中文 × 1920,1440,1024,768,390,375,320 px. Không lỗi JS/HTTP/tràn ngang; ảnh tải đầy đủ.
- Kiểm tra ba luồng yêu cầu và ngữ cảnh lịch ghé thăm ở cả ba ngôn ngữ; gọi trên desktop; sao chép điện thoại/email và fallback địa chỉ; chuyển ngữ giữ anchor; mở chính sách riêng tư; báo lỗi trường bắt buộc; menu mobile và link từ các trang khác.
- Xem trực tiếp ảnh chụp desktop/mobile và hero tiếng Trung. Chuyển động tương tác tắt khi prefers-reduced-motion; nút liên hệ có focus rõ và vùng chạm tối thiểu 44px.
- Kết quả: `qa/contact-page-report.json`; ảnh chụp `qa/contact-page-*.png` (không xuất bản).

UI/UX Pro Max đã được truy vấn design-system và UX trước triển khai. Gợi ý mặc định glass/pink không phù hợp yêu cầu đồng bộ nên giữ hệ màu, kiểu chữ và chất liệu đã được duyệt; áp dụng hướng dẫn về tương phản, responsive, focus, kích thước vùng chạm và chuyển động.
