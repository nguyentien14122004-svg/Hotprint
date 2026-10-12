# P17 — Điều kiện gửi yêu cầu

VI: `/dieu-kien-gui-yeu-cau/`. EN: `/en/request-terms/`. Bản xem trước 13/10/2026; hiện 17 trang cố định × VI/EN + 6 bài × VI/EN = 46 đường dẫn.

## Nội dung và thiết kế

Năm mục theo kế hoạch: bản chất của yêu cầu; trao đổi/báo giá; mẫu/lịch tư vấn; tệp/nội dung thiết kế; liên hệ/điều chỉnh. Hero serif, giấy be, chữ xanh/nâu, ghi chú phạm vi bên phải. Mục lục máy tính bám theo trang, thu gọn được bằng bàn phím; điện thoại xếp dọc. Khối mẫu/lịch riêng trên giấy sáng giúp đọc và dẫn vào P13/P14. Không thêm wizard, checkout hoặc checkbox chấp nhận mới.

Nội dung mô tả hành vi hiện có: form chỉ chuẩn bị email; khách kiểm tra/đính kèm/gửi; chưa có backend, upload, mã tiếp nhận, đặt hàng hoặc xác nhận lịch tự động. Quy cách, giá, điều kiện mẫu và thời gian được trao đổi riêng. Không tự đặt mức cọc, thời hạn báo giá, phí mẫu, lịch giao, giới hạn trách nhiệm, luật áp dụng hoặc nghĩa vụ hợp đồng mới. Đây là bản nội dung cần công ty rà soát trước công bố chính thức, không phải hợp đồng bán hàng đã được phê duyệt.

Thông tin liên hệ được đối chiếu với [Liên hệ HotPrint](https://hotprint.vn/lien-he/) và [Trang chủ HotPrint](https://hotprint.vn/) ngày 13/10/2026. Không mở rộng các mô tả quảng bá trên trang cũ thành cam kết miễn phí/giao hàng cho tất cả yêu cầu. Quy tắc chia sẻ tài liệu là hướng dẫn tránh gửi tài nguyên không được phép, không đặt điều khoản chuyển giao quyền sở hữu thiết kế.

Tệp PDF/JPG/PNG tối đa ba tệp, mỗi tệp 10 MB khớp kiểm tra form. Chọn tệp chỉ ghi tên; tệp định dạng khác/dung lượng lớn cần trao đổi kênh bàn giao. Gửi tệp không là tự duyệt in. Giữ liên kết P16 để đọc về xử lý dữ liệu.

## Tài nguyên và mã nguồn

- `build-terms.mjs`: nội dung VI/EN và cấu trúc; chạy sau `build-privacy.mjs`, trước theme trong build chung.
- `dist/privacy.css`: layout tài liệu dùng chung. `dist/terms.css`: hero/khối mẫu-lịch/liên kết riêng; không tải privacy.js vì không có chức năng storage trên P17.
- Dùng lại nền giấy trống Imagegen `about-paper-v1.webp`, prompt tại `about-hotprint.md`. Biểu tượng tài liệu được dựng bằng SVG, không cần ảnh bitmap mới hoặc ảnh sản phẩm giả. Hero Trang chủ giữ nguyên.
- `dist/app.js`: tiêu đề/ngôn ngữ/P17 links; các trigger terms cũ dẫn trang mới ở thẻ mới. Footer `dist/index.html` dẫn trang cùng ngôn ngữ.
- `build-quote.mjs`: thêm liên kết điều kiện mở thẻ mới trong vùng consent. P13/P14 kế thừa, đổi VI/EN giữ form và cập nhật URL điều kiện. Không thêm một đồng ý bắt buộc hoặc đăng ký quảng cáo.

## Kiểm tra và bàn giao

Build/check/verify: 46 trang, 36 mẫu thật, đủ tài nguyên và hero giữ hash. `npm run test:terms` kiểm tra 12 tổ hợp VI/EN × 1920/1440/1024/768/390/320 px; năm mục, mục lục/anchor/bàn phím, liên kết footer, sáu form giữ nội dung khi mở điều kiện, đổi ngôn ngữ, CTA tới báo giá/mẫu/tư vấn/riêng tư/liên hệ và lỗi JS/HTTP. Chữ trên nền phẳng được audit; nền giấy xem bằng screenshot.

`HANDOFF.md`, README, AGENTS và kế hoạch cập nhật tới P17. Chưa triển khai P18 đã nhận yêu cầu vì backend chưa lưu thật. Bản thử giữ noindex, chưa deploy hoặc đồng bộ GitHub trong yêu cầu thiết kế này.
