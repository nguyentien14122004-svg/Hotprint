# Bộ túi–hộp vàng và xanh — Ảnh thực tế Túi giấy, 16/10/2026

Theo screenshot chủ website, thay slide KARL đầu tiên ở #anh-thuc-te bằng bộ quà **HP7073**. Hero đỏ và khối chi tiết túi vàng giữ nguyên.

## Ảnh
- Dùng trực tiếp ảnh thiết kế được cung cấp: `C:/Users/OS/AppData/Local/Temp/codex-clipboard-be508615-59c7-438e-93ee-a18da861fb45.png`.
- Asset: `dist/assets/bag-gift-set-showcase-v1.webp`, 2066×761, WebP **lossless**.
- Đã so sánh toàn bộ dữ liệu RGBA sau decode: bằng nhau từng pixel. Không dùng AI vẽ lại, không sửa bóng, không crop, không phủ chữ hoặc màu lên ảnh.
- Ảnh gốc sản phẩm đã đối chiếu với `dist/assets/products/HP7073-large.webp` và ảnh người dùng `codex-clipboard-71438b62-b1dd-48ae-9a12-192cf14dc59b.png`.

## Bố cục
Ảnh nguyên khung tràn chiều rộng. Chuyển tiêu đề, tên mẫu, nút xem ảnh gốc và điều hướng lên trên ảnh để giữ toàn bộ bố cục mẫu, cả ở mobile. Slide sau vẫn có 032A5355, 032A5311, 032A5357; 15 mẫu thư viện không đổi. Nút ảnh gốc và báo giá/yêu cầu mẫu từ dialog trỏ HP7073.

Sửa: `build-bags.mjs`, `dist/bags-reference.js`, CSS cuối `dist/bags-reference-v2.css` (.bag-real-set), từ điển ZH.

## Kiểm tra
- Build 72 routes, verify:deployment 516 tham chiếu pass.
- QA 18 viewport/ngôn ngữ, 15 gallery gốc, tìm/lọc/history, FAQ, carousel, requests, logo và footer pass.
- Kiểm tra thêm tỷ lệ ảnh hiển thị khớp ảnh nguồn, object-fit contain ở 1440/768/390; ảnh gốc HP7073 và cả báo giá/yêu cầu mẫu đúng ngữ cảnh.
- Xem trực quan toàn cảnh, mobile, và slide kế tiếp.

