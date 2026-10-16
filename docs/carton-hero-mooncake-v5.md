# Đầu trang carton — hộp bánh trung thu

16/10/2026: Thay ảnh Cookever ở đầu trang bằng chính ảnh bố cục đầu tiên chủ website cung cấp: hộp đỏ, bệ đá ngà, hoa trắng và bóng lá. Không tạo lại ảnh bằng AI. Chuyển PNG sang WebP lossless, giữ nguyên 2172 × 724 pixel và màu ảnh. Tệp `dist/assets/carton-hero-mooncake-v5.webp`.

Markup trong `build-carton.mjs`; CSS cuối `dist/carton-reference-v4.css`. Desktop >1100px giữ nguyên khung 3:1 và bỏ lớp phủ màu. Tablet tách chữ phía trên ảnh nguyên khung. Điện thoại hiển thị phần phải của cảnh, giữ trọn hộp và bóng tiếp xúc. Logo, tiêu đề, nút và 11 mẫu thư viện tiếp tục hoạt động. Nút phóng to mở ảnh gốc HP6410 đúng mẫu hộp bánh trung thu, không phải Cookever. Bản dịch đồng bộ VI/EN/中文.

Kiểm tra: build, verify:deployment, qa-carton.mjs và ảnh chụp 1440/1100/390px. Ảnh mẫu trình bày có khác biệt nhỏ với ảnh gốc (ví dụ logo trên nắp); dùng ảnh gốc trong cửa sổ chi tiết để đối chiếu thông tin sản phẩm.
