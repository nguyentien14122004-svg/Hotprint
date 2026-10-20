# Chuyển đổi giữ hotprint.vn — 20/10/2026

Theo yêu cầu hoàn thành bốn việc chuyển đổi: bảo toàn URL, SEO production, bảo toàn email tên miền và kiểm tra đầu-cuối. Chưa có đường quản trị/hosting nên không được mô tả đã chuyển tên miền hoặc đã xác nhận gửi/nhận/lưu yêu cầu thật.

## Đã triển khai

- Snapshot công khai `migration/legacy-content.json`: 14 trang, 9 bài, 55 sản phẩm, 182 bản ghi media tại lượt lấy ngày 20/10 (khảo sát 19/10 có 183). Không phải database backup.
- `build-legacy.mjs`: 78 trang VI mới trong hệ giao diện hiện tại; giữ 89 URL chính qua trang thật hoặc chuyển hướng tương đương. Giữ 55 permalink sản phẩm, không thêm sản phẩm không ảnh vào thư viện 67 mẫu. Thêm liên kết trang chi tiết cho 54 mẫu đã ánh xạ. Ngôn ngữ EN/中文 trên nội dung VI cũ dẫn tới nhóm tương ứng, không giả là đã dịch toàn bài.
- 620 tệp công khai được mirror nguyên byte tại `/wp-content/uploads/`; hash/nguồn trong `migration/media-manifest.json`. Giữ cả biến thể ảnh đã được tham chiếu. HTML nội dung được lọc bởi sanitize-html; loại script/style/form/iframe và CSS cũ.
- Chuyển hướng danh mục đổi tên, shortlinks và attachment query ở `vercel.json`, sinh từ `migration/route-manifest.json`. Không redirect shortlink trang chủ về chính `/` để tránh vòng lặp khi nền tảng giữ query.
- `build-seo.mjs`: canonical tuyệt đối về hotprint.vn, hreflang tương ứng đúng 23 nhóm VI/EN/中文, Open Graph, JSON-LD có căn cứ, robots và sitemap. Không thêm giá 0/offers hay review giả. 143 URL được đưa vào sitemap; ba trang trạng thái và một danh mục trống giữ noindex. 404 trả mã 404 thật.
- HTTP X-Robots-Tag `noindex,nofollow` trên mọi host ngoài hotprint.vn/www.hotprint.vn; bản Vercel vẫn noindex qua header dù HTML sẵn sàng production. Phải xác minh header sau deploy.
- `build-apache.mjs` sinh `.htaccess` cho gói static trên Apache/LiteSpeed. Chưa thử trên hosting công ty. `server.mjs` tiếp tục chỉ là preview, không phải backend production.
- `check-migration-dns.mjs` ghi/đối chiếu DNS công khai: MX Google, SPF, DMARC và TXT xác minh được giữ; chưa sửa DNS. Không biết toàn bộ zone hoặc selector DKIM.

## Giới hạn vận hành còn tồn tại

Form mới vẫn chuẩn bị email. QA kiểm tra xác thực đầu vào, chọn tệp, nội dung thư nháp, múi giờ và giữ dữ liệu khi đổi ngôn ngữ; không xác minh gửi thư, lưu server, upload hoặc xác nhận lịch thật. Cần phiên quản trị và hệ thống tiếp nhận được cấu hình để kiểm tra các bước đó.

Chưa thay A/NS, chưa thêm domain vào hosting mới, chưa xác nhận hộp thư Info hay DKIM, chưa kiểm tra HTTPS trên nơi phục vụ hotprint.vn sau chuyển. Không coi đối chiếu DNS công khai là hoàn thành cutover email.

## Build / xuất bản

`npm run build` sinh nội dung, SEO và cấu hình. Vercel đọc vercel.json trước build: luôn chạy build và đưa bản vercel.json đã sinh vào commit trước khi push; không dựa vào chỉnh config trong giai đoạn build trên Vercel. Sau cập nhật snapshot phải kiểm kê lại trước khi xuất bản.

`npm run test:migration`, `npm run test:migration-dns`, `npm run verify:deployment`; `qa-quote.mjs` và `qa-consultation.mjs` kiểm tra hành vi hiện tại. Báo cáo ở qa/, không đưa vào Deploy. Sau deploy phải kiểm tra redirect thực trên Vercel, đặc biệt query và preview noindex, vì server preview không thay thế kiểm tra nền tảng.

Deploy chỉ chứa runtime, ảnh/tệp, cấu hình static; không chứa snapshot nguồn, package/node_modules, báo cáo hoặc dữ liệu riêng tư WordPress. Không chép bộ static này đè WordPress production trước khi kế hoạch backend và cutover được chốt/kiểm tra.
