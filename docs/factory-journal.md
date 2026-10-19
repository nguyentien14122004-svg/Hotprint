# Cận cảnh sản xuất — 19/10/2026

Trang Hồ sơ doanh nghiệp có thêm bốn ảnh do chủ website cung cấp, tại `#cong-doan-thuc-te` trong phần thiết bị. Bố cục nối ảnh chế bản lớn, hai ảnh thiết bị YAMAHA/NIKKO, rồi ảnh kiểm tra hộp MAROU. Dùng hệ sans và màu xanh–kem đang áp dụng; ảnh giữ toàn khung, khung giấy và bóng nhẹ. Điện thoại xếp một cột.

Nguồn nội dung/bản dịch: `factory-journal.mjs`; giao diện `dist/factory-journal.css`, hành vi `dist/factory-journal.js`. Mỗi ảnh mở cửa sổ xem lớn, Escape đóng và trả focus về nút. Liên kết ảnh gốc mở riêng. Giữ thư viện tám ảnh cũ, tab thiết bị, SLA và các CTA.

## Ảnh và nguồn gốc

Chủ website yêu cầu làm nét trước khi đưa lên web. Dùng Imagegen **built-in edit mode** chỉnh ánh sáng/độ rõ của bốn ảnh cung cấp. Đây là bản đã xử lý bằng AI, không phải ảnh gốc chưa chỉnh và không được coi là tư liệu để đọc chính xác chữ nhỏ trên máy. Bản gốc cung cấp vẫn truy cập được ở từng ảnh. Không bổ sung thông số công suất, chứng nhận hay tốc độ máy từ hình ảnh.

Các tệp triển khai nằm trong `dist/assets/factory-journal/`:

| Ảnh | Bản đã xử lý | Bản nhỏ | Bản gốc lossless |
| --- | --- | --- | --- |
| Chế bản | prepress.webp | prepress-small.webp | prepress-original.webp |
| Kiểm tra hộp | inspection.webp | inspection-small.webp | inspection-original.webp |
| Thiết bị YAMAHA | automation.webp | automation-small.webp | automation-original.webp |
| Thiết bị NIKKO | diecut.webp | diecut-small.webp | diecut-original.webp |

Bản hiển thị rộng khoảng 1.488–1.562 px, bản nhỏ 800 px; bản gốc 2.560 px. Độ rõ cảm nhận được cải thiện, không tuyên bố số pixel tăng so với gốc. WebP tối ưu việc tải; bản gốc chỉ tải khi người xem mở liên kết.

## Prompt chỉnh ảnh

Áp dụng riêng cho từng ảnh (edit target); không ghép các ảnh thành một cảnh:

> Conservative restoration of this exact real factory photograph for a HotPrint corporate website. Improve perceived sharpness, reduce noise/compression and slight haze, lift dark shadows mildly, neutral natural colours. Preserve original full framing/aspect ratio, person face identity expression hands pose hair clothing, machinery geometry wires controls and all products in exact positions. Preserve all visible words and logos exactly, especially MAISON MAROU BONBONS, YAMAHA or NIKKO JY-106 where present. Do not invent new text or new objects; no replacements, no beautification, no stylized lighting or HDR halos. High fidelity documentary photo enhancement only. High-resolution full-frame image.

## Kiểm tra

`qa-factory-journal.mjs`: VI/EN/中文, 5 chiều rộng 320–1440 px, 60 lượt mở/đóng ảnh, khôi phục focus, ảnh gốc, không tràn ngang hoặc lỗi trình duyệt. `qa-factory-sla.mjs` kiểm tra lại tab/thư viện/CTA/SLA hiện có. `npm run verify:deployment` kiểm tra đường dẫn và tài nguyên. Báo cáo và ảnh kiểm tra lưu ở `qa/`, không đưa vào Deploy.

Deploy chỉ cần cập nhật ba HTML trang, từ điển Trung, CSS/JS mới và 12 WebP. Không thêm tài liệu này hay nguồn build vào Deploy.
