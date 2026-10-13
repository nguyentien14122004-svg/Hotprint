# Bổ sung danh mục và cửa sổ chi tiết — 14/10/2026

## Kiểm kê và phân loại

Đối chiếu Store API công khai `https://hotprint.vn/wp-json/wc/store/v1/products?per_page=100`: 55 mục, gồm 54 có ảnh và 1 không có ảnh. Trong 54 mục có ảnh, 23 đã có trong thư viện dưới tên/góc chụp khác, 31 được bổ sung. Thư viện hiện có **67 mẫu**, giữ thứ tự và mã ảnh của 36 mẫu cũ.

| Nhóm | Số mẫu |
| --- | ---: |
| Hộp giấy mềm | 13 |
| Hộp carton in màu | 11 |
| Hộp cứng cao cấp | 13 |
| Túi giấy | 15 |
| Nhãn dán decal | 7 |
| Nhãn hàng & catalog | 8 |

Chủ website xác nhận Maison Marou `032A5316` là **hộp cứng**: chuyển dữ liệu, nhãn và yêu cầu sang `rigid` / `hop-cao-cap`; gỡ ảnh khỏi minh họa cấu trúc trang hộp giấy mềm, thay bằng Premium Durian. Bản chuẩn bị ảnh cũng đã sửa để không tái tạo lỗi phân loại.

Mục Hộp yến sào `6981` chưa có ảnh: tạm giữ ngoài thư viện theo trả lời của chủ website “cập những sản phẩm ... hiển thị ảnh đầy đủ trước”. Không dựng ảnh hoặc mẫu thay thế.

`official-catalog-audit.json` lưu toàn bộ 55 kết quả đối chiếu; `official-products.json` lưu 31 bản ghi bổ sung, URL gốc, phân loại và ngôn ngữ. `catalog-support.mjs` kiểm tra mỗi mẫu có nhóm ứng dụng; build báo lỗi nếu có mẫu chưa được phân vào bộ lọc. Sáu trang danh mục và thư viện dùng cùng `product-data.js`.

## Hình ảnh

Ảnh mới lấy trực tiếp từ hotprint.vn, giữ chữ và nhận diện sản phẩm. Các nguồn cũ gồm cả ảnh chụp và ảnh minh họa được website công bố; không mô tả tất cả là ảnh chụp mới do HotPrint thực hiện. Cửa sổ chi tiết mẫu nhập ghi “Hình ảnh từ website HotPrint”.

Ảnh WebP gốc không tách nền, không chỉnh màu, không nâng kích thước vượt ảnh nguồn. Mở ảnh lớn vẫn thấy toàn bộ ảnh gốc. Lớp trình bày trên thẻ là SVG mask và bóng tiếp xúc riêng, tạo bởi `official-product-presentation.mjs`; không có sản phẩm AI mới. Nền studio dùng lại `library-studio-paper.webp`, cân kích thước/vị trí từng sản phẩm, tránh bóng viền toàn vật thể. 31 mẫu có cùng cách trình bày tại thư viện và trang nhóm.

Ảnh nguồn 400–800 px nên độ sắc nét bị giới hạn bởi tài liệu đang công bố; không suy diễn chi tiết in để tăng độ nét.

## Cửa sổ chi tiết

`product-detail-reference.css` dựng lại phần thông tin đúng tinh thần mẫu: nền ngà, bóng lá nhẹ, tiêu đề Playfair Display, mã tham khảo, thẻ bằng chứng có camera và vạch đứng, nút báo giá nâu, nút yêu cầu mẫu viền, bookmark, dòng điều kiện có biểu tượng thông tin. Vẫn giữ ảnh gốc, chuyển góc ảnh, đóng bằng Escape và các luồng gửi yêu cầu hiện có.

## Xác minh

- `node qa-catalog-completeness.mjs`: đủ 67 mã duy nhất; 54 mục có ảnh được đối chiếu; 18 trang danh mục VI/EN/中文, toàn bộ bộ lọc; 12 bố cục modal; ngữ cảnh yêu cầu mẫu mới và Maison Marou.
- `node qa-library-reference.mjs`: 18 kích thước/ngôn ngữ, 6 trang thư viện, 67 ảnh và bóng riêng, tìm kiếm/sắp xếp/bộ lọc/chọn tối đa 6 mẫu/chuyển ngữ.
- `npm run verify:site`, `npm run verify:deployment`: 72 đường dẫn, tài nguyên đầy đủ, hero Trang chủ giữ nguyên.

Build triển khai chỉ cần `npm run build`, không cần nguồn PNG/JPG, công cụ ảnh hay kết nối hotprint.vn. Script `import-official-catalog.mjs` là công cụ bảo trì tùy chọn: cần snapshot API tại `qa/official-inventory-0.txt`, các PNG tại `qa/official-photos/` và Sharp; không nằm trong build. Không chạy lại trên snapshot mới trước khi kiểm kê ánh xạ và phân loại.
