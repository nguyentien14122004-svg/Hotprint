# Hệ tiêu đề chung — 17/10/2026

Theo yêu cầu chủ website, đồng bộ toàn bộ tiêu đề và nhãn đầu phần theo mẫu hero Hộp giấy mềm: serif Playfair đứng, màu xanh rừng đậm #343f2d, chữ có tương phản nét thanh/đậm, tracking −0.04em và nhãn nhỏ viết hoa giãn chữ.

## Triển khai

- `dist/editorial-headings.css`: nguồn typography chung. Dùng cùng tệp Playfair Display có dấu tiếng Việt đã dùng tại hero mẫu (`assets/playfair-display-600.ttf`), khai báo tên riêng HotPrint Display để không phụ thuộc trang nào đã tải font.
- H1: 40–76px trên desktop, 36–48px trên điện thoại; H2: 30–48px và 29–36px; H3: 20–26px, mobile 22px. Một số phần hướng dẫn/biểu mẫu/cột hẹp dùng thang nhỏ hơn. Hero Hộp giấy mềm giữ tỷ lệ mẫu gốc.
- Tiêu đề dùng kiểu đứng đồng nhất, bỏ màu nâu và chữ nghiêng ở các đoạn nhấn trong heading. Giữ nguyên ngữ nghĩa em/strong trong HTML.
- Nhãn phía trên: Be Vietnam Pro, 10–13px, chữ hoa, tracking 0.22em. Nội dung mô tả, điều hướng, nhãn nhập liệu và nút giữ font sans để dễ sử dụng.
- Các khối nền xanh/ảnh tối được khai báo màu tiêu đề ngà #fffaf0 để bảo đảm tương phản. Bao gồm Nhà máy ở Trang chủ, quy trình nhà máy, CTA xanh và các khối liên hệ.
- Tiếng Trung dùng serif CJK phù hợp (Songti/SimSun), tracking 0 và line-height 1.22; giữ cùng phân cấp.
- `apply-theme.mjs` gắn stylesheet cuối ở cả 72 trang, sau theme và Chinese. Các khai báo !important có chủ đích chỉ kiểm soát typography trên các selector cũ; không đổi bố cục, ảnh, nội dung hoặc hành động.
- Các dòng display được viết dưới dạng paragraph (callout Túi giấy, tiêu đề phụ Liên hệ) cũng dùng cùng họ chữ. Văn bản có sẵn bên trong bitmap sản phẩm/ảnh tham chiếu được giữ nguyên.

## Xác minh

- So sánh HTML với HEAD trước thay đổi: toàn bộ 72 trang chỉ thêm link stylesheet, nội dung/ảnh/liên kết/hành động không đổi.
- `npm run test:headings`: 72 trang × 1440/1024/390/320px = 288 lượt. Kiểm tra font được áp dụng, chữ không tràn ngang, tiêu đề không vượt ra khỏi section, tương phản màu tại các vùng nền tối và lỗi JavaScript.
- Kết quả: 288 lượt đạt, không lỗi JavaScript, không vấn đề hình học. Report `qa/headings/report.json`.
- Rà soát ảnh chụp Trang chủ, Liên hệ, Về chúng tôi, sản phẩm, các nhóm bao bì, Nhà máy và Báo giá; điều chỉnh các vùng nền tối sau lượt kiểm tra đầu tiên.
- `npm run build`, `npm run verify:deployment`, `node --check apply-theme.mjs`, `node --check qa-editorial-headings.mjs`, `git diff --check`.

Ảnh và logo không tạo lại; không dùng Imagegen cho thay đổi hệ chữ này.
