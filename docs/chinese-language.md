# Tiếng Trung giản thể — 13/10/2026

Chủ website đã chọn **tiếng Trung giản thể (简体中文)**. Thanh chuyển ngữ có **VI / EN / 中文** trên toàn website, kể cả màn hình nhỏ.

## Phạm vi

- 24 đường dẫn `/zh/`: 18 trang cố định và 6 bài kiến thức. Cấu trúc giống `/en/`, thay tiền tố bằng `/zh/`. Tổng cộng 72 đường dẫn HTML cho ba ngôn ngữ.
- Menu, chân trang, nội dung, biểu mẫu, thông báo lỗi, danh sách mẫu, thư viện ảnh và nội dung email được dịch bằng từ điển cục bộ. Không gọi dịch vụ dịch bên ngoài, không cần API key hay tài khoản cũ.
- Chuyển ngữ tới trang tương ứng, giữ truy vấn/anchor. Các form và thư viện sản phẩm đổi ngôn ngữ ngay trên trang; thông tin người dùng, tệp đã chọn và consent được giữ.
- Tìm kiếm sản phẩm chấp nhận tên mô tả tiếng Trung, tiếng Việt, tiếng Anh, thương hiệu và mã ảnh. Tìm kiếm kiến thức nhận từ khóa tiếng Trung.
- Giữ tên pháp lý tiếng Việt, địa chỉ gốc, tên thương hiệu, mã mẫu và định danh múi giờ IANA. Không dịch hoặc sửa chữ trong ảnh thật.
- Giữ nguyên hero Trang chủ, ảnh sản phẩm/nhà máy, logo, bố cục và bộ màu đã duyệt. Kiểu chữ CJK dùng font sẵn có trên thiết bị: Microsoft YaHei/PingFang SC cho nội dung, Songti SC/SimSun cho tiêu đề serif; không tải font từ bên thứ ba. Có thể khác nhẹ giữa hệ điều hành.
- Biểu mẫu vẫn chỉ chuẩn bị email. Bản tiếng Trung không thay cơ chế gửi, tự upload, tạo đơn hàng hoặc xác nhận đã nhận/đặt lịch. Các bản nội dung cần công ty duyệt vẫn giữ phạm vi đó trong bản dịch.

## Nơi chỉnh

- `locales/zh-Hans.json`: bản dịch có khóa là nội dung nguồn; mỗi lần đổi nội dung VI/EN, cập nhật khóa dịch tương ứng. Không dùng từ điển này để dịch nội dung khách nhập.
- `build-chinese.mjs`: tạo 24 trang tiếng Trung từ nội dung nguồn hiện có; xử lý headline theo ngữ cảnh và nút đổi ngôn ngữ có thể dùng khi JavaScript tắt. Chạy sau các builder VI/EN, trước theme.
- `dist/zh-dictionary.js`: tài nguyên sinh tự động, không chỉnh riêng.
- `dist/i18n.js`: hàm dịch nội bộ và đường dẫn ba ngôn ngữ. Các controller dùng bản dịch tại nơi tạo nội dung động, không dùng dịch vụ ngoài hoặc MutationObserver dịch DOM.
- `dist/chinese.css`: kiểu chữ CJK và nút chuyển ngữ. Không thay font VI/EN hay chỉnh hình ảnh.
- `dist/language-routes.json`: bảng 24 bộ URL, sinh khi build.

## Kiểm tra

Chạy `npm run build`, `npm run check`, `npm run verify:deployment`, sau đó `npm run test:chinese` khi preview cổng 4174 đang chạy và có Playwright/Chrome. Script kiểm tra 24 trang × 1440/390/320 px, ba nút chuyển ngữ, tìm kiếm Trung, gallery của sáu danh mục, context mẫu/báo giá, ba form, giữ thông tin/tệp/consent, email Trung và hướng dẫn trạng thái không xác nhận tiếp nhận. `HOTPRINT_QA_ORIGIN` cho phép kiểm tra URL khác.

Giữ kiểm tra VI/EN hiện có cho quote, consultation, knowledge, products và sample request. `verify:site` kiểm tra đủ 72 trang và hash của hero đã duyệt.
