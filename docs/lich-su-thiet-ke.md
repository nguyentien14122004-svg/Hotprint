# Trang chủ HotPrint

Website HTML/CSS/JavaScript, bám sáu vùng của mẫu đã chốt và kế hoạch Bước 1.

## Chạy tại máy

Chạy `npm run dev` trong thư mục này rồi mở http://127.0.0.1:4174.

## Tệp chỉnh sửa

- `dist/index.html`: nội dung và cấu trúc Trang chủ.
- `dist/styles.css`: thiết kế desktop, tablet và điện thoại.
- `dist/app.js`: chuyển VI/EN, menu, các cửa sổ liên hệ và kiểm tra biểu mẫu.
- `dist/assets`: logo gốc, ảnh minh họa bao bì, ảnh nhà máy thật và phông chữ cục bộ.
- `dist/en/index.html`: bản HTML khởi đầu tiếng Anh, đồng bộ lại từ bản gốc khi thay cấu trúc.

## Phạm vi bản đầu

Menu, sáu ô sản phẩm, chuyển ngôn ngữ, liên hệ điện thoại/Zalo/email, bàn phím, các trạng thái biểu mẫu và giao diện điện thoại đã được xây dựng. Các trang nội dung chưa xây mới dẫn tới đúng nội dung trên hotprint.vn, mở trong thẻ mới; nội dung hiện hữu có thể chỉ có tiếng Việt.

Ba loại yêu cầu chuẩn bị email; chỉ gửi khi người dùng hoàn tất trong ứng dụng email. Không có thông báo gửi thành công giả, không lưu dữ liệu vào máy chủ và chưa có khu vực quản trị yêu cầu. Cần nối backend ở giai đoạn xây các trang biểu mẫu. Chính sách hiển thị mô tả đúng cơ chế liên hệ hiện tại, chưa thay thế chính sách cho toàn website tương lai.

Logo gốc: https://hotprint.vn/wp-content/uploads/2025/04/logo-logo.png. Dòng ISO 9001 được ẩn bằng khung cắt CSS; biểu tượng và chữ HotPrint giữ nguyên điểm ảnh của bản gốc.
Liên kết Zalo được đối chiếu HTML công khai của hotprint.vn: https://zalo.me/0903032686.
Ảnh nhà máy: Hình nhà máy/032A5054.JPG. Ảnh hero mới là thiết kế minh họa mang thương hiệu HotPrint, tạo bằng image_gen theo phương án 3 người dùng cho phép. Nền giấy ngà, họa tiết lá và hoa dập nổi với chi tiết tím mận. Không thể hiện đây là sản phẩm đã sản xuất. Chú thích này hiển thị ngay dưới hero. Prompt đầy đủ tại hero-v3-prompt.md; tài nguyên dùng trên trang là dist/assets/hero-hotprint-v3.webp và hero-hotprint-v3-small.webp.

Đã xem 64 ảnh gốc trong HÌnh sản phẩm. Các ảnh product-*.webp đã được chuẩn bị nhưng không sử dụng trong Trang chủ theo yêu cầu sửa mới nhất: giữ nguyên sáu biểu tượng trong bản trải hộp; chỉ nâng cấp nền sau khu vực này. Không có tuyên bố quan hệ khách hàng/đối tác dựa trên ảnh sản phẩm.

Thông tin chân trang đối chiếu https://hotprint.vn/lien-he/ và https://hotprint.vn/ ngày 11/10/2026: pháp nhân, mã số thuế, hai địa chỉ, điện thoại và email. Địa chỉ giữ nguyên như nguồn hiện tại. Liên kết bản đồ là tìm kiếm địa chỉ nhà máy, không khẳng định một mã địa điểm chưa xác minh.

Đây là website độc lập tạo theo yêu cầu người dùng trên tài khoản mới: https://hotprint-studio.perkyvine128.chatgpt.site. Người dùng chọn “Bất kỳ ai có đường dẫn”; xuất bản công khai theo lựa chọn này. Website hotprint.vn và dự án tài khoản cũ không thay đổi. Bản thử đặt noindex. Khi xây các trang tiếp theo cần thay các URL sang trang mới, bổ sung máy chủ tiếp nhận, chính sách thực tế và gỡ noindex chỉ ở lần ra mắt chính thức.

Thiết kế cuối sau điều chỉnh nằm trong dist/refinements.css: tiêu đề gọn hơn khoảng 35%, nút hành động tím mận #633F52 (chữ trắng, tương phản trên 8:1), giữ nguyên bản trải hộp và sáu biểu tượng của thiết kế ban đầu. Chỉ đổi nền khu danh mục: lớp màu giấy/sage, nét mềm và bóng lá. Khu liên hệ hai cột và chân trang bốn cột được giữ lại từ lần sửa trước; thu về một/hai cột trên điện thoại. Logo giữ nguyên biểu tượng, không còn dòng ISO trong header hoặc footer.

Lần sửa khu liên hệ: dist/contact-studio.css thay khu hai cột lớn bằng bố cục bàn mẫu bao bì. Tiêu đề sans và chữ nghiêng Georgia, lời mời + nút báo giá ở phía trên; hotline/email, Zalo/tư vấn, thẻ mẫu minh họa ở phía dưới. Ảnh mẫu tái sử dụng ảnh concept đã duyệt, không tạo thêm tuyên bố về sản phẩm thật. Đã kiểm tra 12 tổ hợp ngôn ngữ/kích thước (VI/EN × 1920/1440/1024/768/390/320): không tràn ngang, ảnh tải đủ, các cửa sổ báo giá/tư vấn/mẫu và điện thoại hoạt động.
