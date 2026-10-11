# Tổng quan sản phẩm — P02

Trang VI: `/san-pham/`. Trang EN: `/en/products/`. Menu và sáu nhóm Trang chủ dẫn vào trang mới. Các trang giới thiệu/nhà máy chưa triển khai vẫn dùng nguồn hiện có.

## Nội dung và thiết kế

Năm phần theo kế hoạch: mở đầu, sáu nhóm cấu trúc, thư viện mẫu, ba bước bắt đầu, tư vấn. Thiết kế tiếp nối Trang chủ: xanh rừng, giấy ngà, xanh sage, tím mận; nhãn số, nét bế và nếp gấp được vẽ bằng CSS/SVG. Không thay thiết kế sáu biểu tượng ở Trang chủ.

36 mẫu từ 48 ảnh gốc trong thư mục người dùng cung cấp `HÌnh sản phẩm`. Tất cả ảnh trưng bày trên trang P02 là ảnh thật; không dùng ảnh AI. Chỉ xoay theo EXIF, thu nhỏ và nén WebP. Không cắt sản phẩm, không thay nhãn hiệu, không chỉnh màu sản phẩm, không xóa nền hoặc tạo vật thể mới. Khung và màu bên ngoài ảnh là giao diện. Nguồn từng ảnh ghi trong `product-image-sources.json`.

Mã tham khảo trên giao diện là tên tệp ảnh, không phải mã hàng chính thức. Các tên mô tả dựa trên nội dung nhìn thấy trong ảnh. Không tự suy đoán kích thước, định lượng giấy, MOQ, giá, thời gian sản xuất hoặc chứng nhận. Ảnh thể hiện mẫu tham khảo, không tuyên bố quan hệ đối tác hay quyền sử dụng thương hiệu ngoài phạm vi ảnh sản phẩm được chủ website cung cấp.

## Hành vi

- 12 mẫu mỗi trang, ba trang mặc định; ba cột desktop, hai cột tablet, một cột điện thoại nhỏ để xem rõ sản phẩm.
- Tìm theo tên VI/EN, thương hiệu có trong tên mẫu, mã ảnh hoặc tên nhóm; không phân biệt dấu tiếng Việt.
- Lọc sáu nhóm; mobile dùng cửa sổ Áp dụng/Đặt lại, đóng cửa sổ chưa áp dụng không đổi kết quả.
- `q`, `group`, `page` được giữ trong URL khi tải lại, quay lại và đổi ngôn ngữ.
- Chi tiết mẫu hiển thị ảnh lớn, các góc ảnh có sẵn, số ảnh, yêu cầu mẫu và báo giá theo đúng mẫu. Ảnh không tải được có thông báo thay thế.
- Biểu mẫu điền sẵn tên/mã mẫu/nhóm, nguồn yêu cầu là Tổng quan sản phẩm. Biểu mẫu chuẩn bị email; khách phải gửi qua ứng dụng email. Chưa có lưu yêu cầu phía máy chủ, đơn hàng, thanh toán hay tính giá tự động.

## Chỉnh sửa

- `prepare-catalog.mjs`: danh sách mẫu và tạo ảnh tối ưu từ ảnh gốc. Chỉ chạy khi thay ảnh/danh sách. Cần thư mục nguồn tại workspace và thư viện sharp của runtime.
- `dist/product-data.js`: danh sách mẫu được sinh ra.
- `build-products.mjs`: dựng HTML VI/EN từ phần dùng chung của Trang chủ. Chạy sau khi sửa header/footer/dialog chung hoặc cấu trúc P02.
- `dist/products.css`: toàn bộ thiết kế P02.
- `dist/products.js`: bản dịch P02, tìm kiếm, lọc, phân trang và thư viện ảnh.
- `dist/app.js`: menu, ngôn ngữ và cửa sổ liên hệ dùng chung.
- `qa-products.mjs`: kiểm tra trình duyệt, 10 tổ hợp VI/EN × 1440/1024/768/390/320 và các luồng thao tác chính. Kết quả/ảnh trong `qa/` không xuất bản.

Trang thử giữ `noindex,nofollow`. Website dùng cùng Site công khai của tài khoản mới, không thay đổi hotprint.vn.
