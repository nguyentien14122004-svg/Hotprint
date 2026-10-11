# Hướng dẫn tiếp tục website HotPrint

## Dự án và ưu tiên

Repo này là bản mã nguồn độc lập với tài khoản Codex/Sites. Chủ website trao đổi bằng tiếng Việt, ưu tiên lời giải thích đơn giản. Đọc README.md, PRODUCTS.md và docs/ke-hoach-website.md trước khi sửa. Yêu cầu mới nhất của người dùng được ưu tiên hơn các lựa chọn cũ trong lịch sử.

## Yêu cầu đã chốt

- Đối tượng chính: bộ phận mua hàng của doanh nghiệp. Mục tiêu: thể hiện thương hiệu, sản phẩm thật và năng lực nhà máy, tạo yêu cầu tư vấn/báo giá.
- Giữ nguyên logo, biểu tượng và tên HotPrint. Ẩn dòng ISO 9001 bằng khung CSS như hiện tại, không vẽ lại biểu tượng.
- Giữ VI/EN và giao diện đáp ứng máy tính, máy tính bảng, điện thoại.
- Phong cách xanh rừng, giấy ngà, sage, thiên nhiên và nếp gấp bao bì. CTA hiện dùng tím mận. Sáu biểu tượng trong bản trải hộp ở Trang chủ phải được giữ theo yêu cầu đã chốt; không đổi bố cục đó nếu chưa được yêu cầu.
- Ảnh sản phẩm mới phải lấy từ tệp chủ website cung cấp hoặc website chính thức hotprint.vn. Không dựng sản phẩm, nhãn hiệu hoặc khách hàng giả. Có thể thiết kế khung/nền bên ngoài, không làm sai sản phẩm.
- Hero Trang chủ hiện có là concept HotPrint được duyệt trước đó và phải giữ chú thích minh họa. Thư viện sản phẩm chỉ dùng ảnh thật.
- Không có báo giá tự động, biểu mẫu báo giá theo bước, checkout hay tuyên bố chứng nhận/MOQ/thông số không có nguồn.
- Liên hệ qua điện thoại, Zalo, email, yêu cầu mẫu và lịch tư vấn. Biểu mẫu hiện chỉ chuẩn bị email; không được hiển thị đã gửi khi chưa có hệ thống tiếp nhận thật.

## Làm việc

- Sửa Trang chủ ở dist/index.html; sửa cấu trúc trang sản phẩm ở build-products.mjs. Chạy npm run build để đồng bộ bốn đường dẫn, rồi npm run check.
- Dùng ảnh có sẵn trong dist/assets. product-image-sources.json lưu nguồn ảnh. Đừng đưa ảnh gốc dung lượng lớn hoặc tài liệu riêng tư lên repo khi không cần.
- Kiểm tra màn hình nhỏ, bộ lọc, tìm kiếm, đổi ngôn ngữ và điều hướng sau thay đổi liên quan.
- Không thêm ID dự án .openai cũ. Không dùng lại quyền truy cập hoặc thông tin đăng nhập của tài khoản trước. Không tự tạo thêm Site khi người dùng chỉ yêu cầu sửa mã.
- Xuất bản theo dịch vụ hosting đã được cấu hình và quyền thực tế. Mã được đẩy lên GitHub không đồng nghĩa đã triển khai trực tuyến.
- Bảo toàn nội dung đang có; không force-push. Không thêm token, mật khẩu, hồ sơ Codex, .env hoặc đường dẫn người dùng cục bộ vào repo.
