# Chính sách riêng tư và Điều kiện gửi yêu cầu — 17/10/2026

Hai trang dùng bố cục tài liệu ấm áp, đồng bộ với các trang HotPrint đã duyệt: nền ngà, xanh rừng, nút nâu đất, ảnh hồ sơ giấy có bóng lá tự nhiên. Phần mở đầu riêng cho từng trang, ba ý chính có liên kết, mục lục bám theo vị trí đọc, năm mục nội dung và lời mời liên hệ cuối trang. Mobile chuyển về một cột. Chữ Playfair được phân cỡ riêng cho tiêu đề, nội dung dài, mục lục và ghi chú; giữ ký tự & thông thường và thanh đầu trang chung.

Nguồn: `policy-layout.mjs`, `dist/policy-editorial.css`, `dist/policy-editorial.js`; gọi từ `build-privacy.mjs` và `build-terms.mjs`. Bản dịch Trung đăng ký qua `policyChinese` trong `build-chinese.mjs`. Sáu route VI/EN/中文 giữ nguyên URL. Anchor cũ `#mau-va-lich` chuyển sang `#lich-tu-van`.

Không bổ sung điều khoản hợp đồng hoặc cam kết pháp lý mới. Giữ mô tả đúng cơ chế chuẩn bị email, khách tự gửi, chưa có hệ thống tiếp nhận tự động. Liên kết từ biểu mẫu mở thẻ mới và giữ bản nháp. Nút xóa ảnh tham khảo chỉ xóa danh sách ảnh lưu trên trình duyệt, không phải hồ sơ trên máy chủ.

Đã gỡ các câu còn sót về yêu cầu mẫu trong nội dung chính sách/điều kiện. Tính năng yêu cầu mẫu vẫn bị loại bỏ trên toàn site; URL cũ chuyển sang tư vấn. Ảnh sản phẩm tham khảo và bài viết kỹ thuật về kiểm tra bao bì không phải dịch vụ yêu cầu mẫu và được giữ lại.

## Ảnh trang trí

Chế độ: **built-in image_gen**. Cảnh hồ sơ giấy được tạo mới, chỉ trang trí; không mô tả văn phòng thật, tài liệu thật, bảo mật hay chứng nhận của công ty.

Tệp dùng trên website:

- `dist/assets/policy-paper-folder-v2.webp` (1536 × 1024).
- `dist/assets/policy-paper-folder-v2-small.webp` (800 × 533).

Ảnh gốc tạo ra: `exec-f51eb2ad-9b5b-49d4-9ff5-daba05e5d086.png`.

Prompt cuối:

> Use case: photorealistic-natural. Asset type: shared editorial still-life image for a Vietnamese premium paper-packaging website's Privacy and Request Terms pages. Create a calm, thoughtful arrangement of a closed muted sage paper document folder, two blank ivory sheets partly tucked underneath, and one simple dark forest-green pencil, resting on a warm cream travertine desk. A small olive branch enters one upper corner, casting soft natural leaf shadows. Real tactile paper fibres, fine stone pores, warm window light, restrained soft contact shadows. Landscape 3:2 composition, objects centered with generous breathing room around them, suitable for a framed image beside live headings; all text is added separately in HTML. Palette warm ivory, sage green, earthy beige. No writing, no logos, no seals, no badges, no padlock, no security claims, no people, no company office or products, no watermark. Decorative still life, not evidence of real data storage or legal certification.

## Kiểm tra

- Build và deployment integrity: 69 trang, 67 sản phẩm, ảnh hero gốc giữ nguyên.
- `qa-privacy.mjs`: 12 tổ hợp ngôn ngữ/kích thước; mục lục, đổi ngôn ngữ, xóa đúng dữ liệu tham khảo, đồng bộ giữa các tab, trình duyệt chặn lưu trữ và giữ bản nháp khi mở chính sách.
- `qa-terms.mjs`: 12 tổ hợp; liên kết báo giá/tư vấn/liên hệ/chính sách, mục lục, ngôn ngữ và giữ bản nháp.
- `qa-policy-editorial.mjs`: 42 tổ hợp, sáu route, màn hình 320–1920px và điện thoại ngang; hình ảnh, font chữ, tràn nội dung, mục lục hiện hành, bàn phím, anchor cũ, reflow ở viewport thu hẹp.
- `qa-content-refresh.mjs`: 207 lượt xem toàn website, không tràn chữ, không lỗi JavaScript, không có CTA/link yêu cầu mẫu hoặc câu yêu cầu mẫu còn hiển thị.
- Kiểm tra trực quan hero desktop/mobile và vùng nội dung dài VI/中文. Các ảnh sản phẩm, nhân sự, nhà máy và logo đã duyệt giữ nguyên.
