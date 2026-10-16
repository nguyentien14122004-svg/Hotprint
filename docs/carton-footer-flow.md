# Chuyển tiếp và chân trang carton đầy đủ

16/10/2026: Theo yêu cầu chủ website, bỏ chân trang rút gọn và disclosure. Trang carton dùng lại nguyên footer chung của các danh mục: nhận diện công ty/mã số thuế, trụ sở/nhà máy/bản đồ, sáu nhóm sản phẩm, về công ty/liên hệ/báo giá/mẫu/tư vấn/nhà máy/kiến thức, điện thoại/email/Zalo, riêng tư/điều kiện/về đầu trang. Tất cả hiển thị trực tiếp; không đưa vào mục thu gọn. Ba liên kết yêu cầu vẫn mang ngữ cảnh carton.

Khối liên hệ cuối danh mục đổi từ thẻ xanh cạnh cứng sang dải nền kem–sage nhạt dần về nền giấy ở hai đầu. Giảm cành lá và thêm khoảng thở. Footer tiếp tục cùng màu giấy, bỏ đường cắt trên cùng.

Chỉnh `build-carton.mjs` và CSS `.carton-flow`, `.carton-footer-full` ở cuối `dist/carton-reference-v4.css`. Không thay ảnh hero đã duyệt. Dựng VI/EN/中文. `qa-carton.mjs` kiểm tra 18 bố cục, footer luôn hiện, 6 danh mục, các đường dẫn/yêu cầu và chức năng thư viện. Ghi chú footer rút gọn trong tài liệu v4 là lịch sử, không khôi phục.
