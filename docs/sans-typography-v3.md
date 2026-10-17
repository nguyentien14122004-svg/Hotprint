# Hệ chữ sans theo mẫu chủ website — 18/10/2026

Mẫu mới là tiêu đề Trang chủ “Ý tưởng phẳng. Ấn tượng đa chiều.” với kiểu chữ không chân đậm. Yêu cầu này thay thế yêu cầu Playfair trước đây. Dùng Be Vietnam Pro có sẵn trong dự án, phục vụ tại chỗ qua `HotPrint Sans`, đủ trọng lượng 400/500/600/700/800. Tiếng Việt/Anh và chữ số dùng cùng họ chữ; chữ Trung dùng sans hệ thống tương ứng. Không tải font từ dịch vụ bên ngoài.

## Phân cấp và bố cục

- H1 đậm 800, H2 700, H3–H6 600. Màu xanh #466343 theo mẫu; tiêu đề trên nền tối tiếp tục màu ngà tương phản.
- Trang chủ dùng display 46–88px trên desktop, 34–48px trên mobile; giữ hai ý riêng. Các hero hai cột tư vấn/báo giá/chính sách có thang nhỏ hơn, khoảng cách riêng để không lấn ảnh.
- Đoạn văn dùng nét 400, 16–19px và giãn dòng 1.7–1.8. Mục lục 14px, nhãn biểu mẫu 15px, ô nhập tối thiểu 16px. Tiêu đề nhỏ/nhãn lợi ích/chú thích không bị phóng lớn theo tiêu đề chính.
- Khối liên hệ nhanh báo giá dùng tiêu đề 20px; mục chính trong biểu mẫu vẫn 27–34px. Khối chính sách giữ chiều dài dòng và mục lục bám theo vị trí đọc.
- Menu danh mục chia ba cột trên tablet, hai cột trên mobile. Lợi ích Hộp giấy mềm chia hai cột trên điện thoại. Chú thích ảnh trang chủ và nhãn quy trình không chồng nhau; giữ đầy đủ ảnh và chú thích minh họa.
- Dấu & dùng hình thông thường của Be Vietnam Pro; chữ số lining/tabular. Không còn cần font ghép riêng cho & và số vì cả nội dung đã dùng cùng họ sans.
- Header vẫn 88px desktop/tablet và 72px mobile. Logo, ảnh sản phẩm/nhân sự, nội dung và liên kết bản đồ được giữ.

## Nguồn và kiểm tra

Sửa `dist/editorial-headings.css`, `dist/editorial-content.css`. Không thêm một lớp typography cạnh tranh mới. Các trang được build qua cơ chế chung hiện tại, đủ 69 route.

`qa-editorial-headings.mjs` kiểm tra font tiêu đề, giới hạn hiển thị và tương phản nền tối trên 276 lượt xem. `qa-content-refresh.mjs` kiểm tra font mọi nội dung hiển thị, tràn chữ, lỗi JavaScript và tính năng mẫu đã gỡ trên 207 lượt xem. `qa-shared-header.mjs` kiểm tra 414 lượt xem với hình học header trước/sau cuộn. `qa-policy-editorial.mjs` kiểm tra 42 tổ hợp trang/ngôn ngữ/kích thước.

Đã đối chiếu ảnh chụp desktop/mobile của Trang chủ, Hộp giấy mềm, Về HotPrint, Báo giá, Tư vấn và Chính sách. Không tạo lại ảnh có chữ in trên sản phẩm hoặc logo vì đó là hình ảnh gốc đã duyệt.
