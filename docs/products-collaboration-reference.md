# Hai phần kết nối dự án — 14/10/2026

Phạm vi: P02.4 “Cùng phát triển bao bì của bạn” và P02.5 “Dành chỗ cho ý tưởng mới” trên `/san-pham/`, `/en/products/`, `/zh/products/`. Thiết kế theo hai ảnh tham chiếu chủ website cung cấp ngày 14/10. Không đổi Trang chủ, thư viện mẫu thật hoặc trang danh mục riêng.

## Giao diện

- P02.4: nền kem có lá góc trên phải/dưới trái, bóng lá, mảng sage và nét cong thấp; dòng mở đầu có nét mảnh bên trái; tiêu đề serif xanh và phần cuối italic nâu. Nút yêu cầu mẫu bên phải. Ba cột bằng nhau, biểu tượng tài liệu/bút/hộp trong vòng tròn, đường nối có chấm đầu, số nghiêng 01–03, tiêu đề và mô tả thật bằng HTML. Trên điện thoại chuyển thành ba bước dọc, lá nền giữ ở góc thay vì kéo giãn hình.
- P02.5: bộ minh họa bao bì HotPrint trên bệ đá bên trái, tiêu đề và lời dẫn ở giữa, nút tư vấn cùng Gọi điện/Zalo bên phải. Nền ảnh là lớp độc lập, không chứa chữ/nút của website. Điện thoại đưa hình lên trước nội dung, tránh cắt hộp.
- Playfair Display cho tiêu đề, Times New Roman/Georgia italic cho điểm nhấn, Be Vietnam Pro cho nội dung và thao tác. Nút nâu đất, chữ xanh; hình có màu kem ấm theo mẫu. Trung giản thể dùng serif CJK phù hợp.

## Tệp và cách sửa

- `products-template.html`: cấu trúc thật của hai phần.
- `dist/products-collaboration-reference.css`: CSS chỉ scope `.process-reference` và `.consult-reference`.
- `dist/products.js`, `locales/zh-Hans.json`: chuỗi chia tiêu đề và mô tả ảnh ở ba ngôn ngữ.
- `build-products.mjs`: gắn stylesheet. Build tạo ba HTML và từ điển Trung như luồng cũ.
- `dist/assets/products-process-botanical.webp`, `dist/assets/products-consult-botanical.webp`: hai tài nguyên nền (2172×724), tối ưu WebP. Ảnh hộp ở khối tư vấn là **minh họa thiết kế theo ảnh tham chiếu**, không bổ sung vào danh sách sản phẩm thật; có nhãn truy cập tương ứng. Mọi ảnh sản phẩm gốc và hero Trang chủ giữ nguyên.
- `qa-collaboration-reference.mjs`: 18 tổ hợp ngôn ngữ/kích thước, ba bước, kiểm tra nội dung không bị cắt/tràn, nút tối thiểu 44px và sáu đường dẫn yêu cầu mẫu/tư vấn. Không gọi điện hoặc gửi tin nhắn thật trong QA.

## Hành vi và xác minh

Nút mẫu đi đến trang yêu cầu mẫu, nút trao đổi đến trang đặt lịch tư vấn theo ngôn ngữ. Số điện thoại `+84903032686`, Zalo `https://zalo.me/0903032686` giữ nguyên. Không tạo gửi yêu cầu/lịch xác nhận giả.

Đã kiểm tra 1920/1440/1024/768/390/320px ở VI/EN/中文, nút điều hướng, nội dung và tài nguyên; không lỗi JavaScript/HTTP. `npm run check` và `npm run verify:deployment` đạt 72 trang/36 mẫu, hero đã duyệt giữ nguyên.

## Tài nguyên Imagegen

Dùng công cụ built-in ở chế độ edit hai ảnh tham chiếu; giữ bản nguồn, lưu kết quả riêng. Không dùng ảnh chụp thiết kế chứa chữ làm giao diện.

Prompt nền ba bước:

> Edit this reference into an EMPTY website background asset, retain exactly the ultra wide 3:1 composition and botanical cream background. Remove ALL text, all numerals, the button, arrows, all three circle icons and their horizontal connecting lines. Inpaint those regions seamlessly with matching cream paper. Preserve the realistic upper right green leaves, soft leaf shadows, lower left leaves, pale sage organic curves in bottom corners and subtle bottom curved line exactly as reference. Central 85 percent must be calm clear warm cream #eee7d7, same restrained grain and light. No new objects, no text, no UI. This is only a background layer; all typography and controls will be real HTML.

Prompt nền tư vấn:

> Edit the supplied ultra-wide banner into a BACKGROUND ONLY asset, preserve 5:1 aspect ratio and exact composition. KEEP intact the leftmost quarter photography: green HotPrint concept gift box with gold botanical print, cream hanging HotPrint tag, green thank-you card, pale rough limestone pedestal, foliage and their authentic shadows. Preserve brand writing ON THE PHYSICAL PRODUCTS. Remove ALL website/interface typography outside that physical still-life: the top eyebrow, heading, paragraph, brown button, telephone and Zalo links and all arrows. Seamlessly replace these removed UI areas with the existing warm cream background. Keep right edge soft foliage and leaf shadows, exact soft lighting. Do not draw any additional text, products, UI controls, or change artwork on the left. Center and right should be unobstructed cream to overlay real HTML. This is an approved brand concept illustration, not a catalogue product photo.

Công cụ trả cả hai ảnh ở tỷ lệ 3:1. Khối tư vấn desktop dùng vùng nền trung tâm trong banner khoảng 5:1, giữ đủ hộp/thẻ; trên điện thoại dùng khung ảnh riêng. Đây là bản diễn giải responsive từ mẫu, không tuyên bố trùng từng pixel hoặc là ảnh chụp sản phẩm thực tế mới.
