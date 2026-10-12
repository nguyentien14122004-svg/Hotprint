# P09 — Nhà máy HotPrint

Cập nhật 12/10/2026. VI `/nha-may/`, EN `/en/factory/`. Bản xem thử cục bộ; chưa triển khai lên hosting.

## Bảy phần theo kế hoạch

1. Mở đầu: “Nơi ý tưởng được hiện thực hóa”, panorama thật 032A5054, khám phá quy trình và đặt lịch trao đổi. Nền giấy ngà, chữ Playfair Display 600, CTA tím mận.
2. Tổng quan: bốn chủ đề con người, quy trình, thiết bị, chất lượng; mỗi chủ đề dẫn tới phần liên quan.
3. Quy trình: sáu bước từ yêu cầu đến bàn giao, sơ đồ SVG, mô tả và điểm đối chiếu. Đây là khung trao đổi theo đơn hàng, không khẳng định mọi sản phẩm qua cùng một dây chuyền.
4. Thiết bị: ba tab theo nhiệm vụ, ảnh thật 032A5028, 032A5018, 032A5034. Hỗ trợ phím trái/phải/Home/End. Không suy đoán tên máy, công suất hay thông số từ ảnh.
5. Chất lượng: trước sản xuất, trong công đoạn, trước bàn giao; ảnh thật 032A5134 và 032A4953. Nút trao đổi hồ sơ chất lượng điền đúng nội dung vào biểu mẫu.
6. Con người: tám ảnh thật, bố cục lớn/nhỏ, cửa sổ ảnh đầy đủ, điều hướng, thumbnail, mở ảnh riêng, Escape và trả focus.
7. Liên hệ: tư vấn, báo giá riêng, điện thoại, email, địa chỉ và bản đồ. Không tự xác nhận lịch hoặc quyền thăm nhà máy.

## Hình ảnh và căn cứ nội dung

- 12 ảnh từ thư mục chủ website cung cấp `Hình nhà máy`, danh sách ở `factory-image-sources.json`. WebP lớn 2000 px, nhỏ 800 px; chỉ xoay EXIF, thu nhỏ, nén. Không tạo nhân sự, thiết bị hoặc chỉnh sửa nội dung ảnh bằng AI.
- Chú thích dựa trên thao tác nhìn thấy, không gán máy cho công nghệ hay công suất chưa được xác nhận.
- Nội dung tham khảo nguồn công ty: https://hotprint.vn/, https://hotprint.vn/san-xuat-bao-bi/, https://hotprint.vn/in-an-bao-bi/; đối chiếu ngày 12/10/2026. Địa chỉ giữ cách công bố của website nguồn.
- Chưa có tài liệu chứng nhận hiện hành/phạm vi áp dụng và hồ sơ năng lực PDF được kiểm chứng: không đăng huy hiệu chứng nhận, không có nút tải tệp giả. Khách có thể yêu cầu trao đổi hồ sơ.
- Không dùng số liệu diện tích, sản lượng, số máy hoặc thời hạn sản xuất chưa xác minh.

## Asset trang trí ImageGen

Chế độ built-in, generate; chỉ tạo nền giấy không có sản phẩm/người/thiết bị. Asset đã lưu trong dự án: `dist/assets/factory-paper-texture.webp`.

Prompt cuối:

> A subtle abstract ivory paper texture for a luxury Vietnamese packaging manufacturer website, landscape 3:2. No factory, machines, people, products, words or logos. Quiet matte cream paper, soft broad desaturated sage folded-paper curves only along far left and top right edges, very fine natural cellulose texture, gentle diffuse light, nearly uniform ivory center left empty for readable text. Restrained sophisticated editorial background, organic paper material study, no strong shadows or busy patterns.

## Chỉnh sửa và hành vi

- Nội dung VI/EN: `build-factory.mjs`. Giao diện: `dist/factory.css`. Tab và gallery: `dist/factory.js`.
- Build chung `npm run build` sinh 18 đường dẫn. Menu Nhà máy, banner Trang chủ và liên kết cuối sáu trang nhóm đều đi vào trang mới, đúng ngôn ngữ.
- `dist/app.js` quản lý VI/EN, tiêu đề và yêu cầu từ Nhà máy. Đổi ngôn ngữ giữ query/hash. Biểu mẫu tư vấn kỹ thuật/chất lượng/báo giá có nội dung riêng, không điền sai danh mục sản phẩm.
- Biểu mẫu chỉ chuẩn bị email trong ứng dụng email của khách. Chưa có tiếp nhận phía máy chủ, chưa xác nhận gửi hoặc lịch hẹn.
- Kiểm tra: `npm run check`, `npm run test:factory`. Trình duyệt dùng Playwright/Chrome và NODE_PATH của runtime, hoặc môi trường đã cài Playwright.

## Kiểm tra hoàn tất

- VI/EN × 1672, 1440, 1024, 768, 390, 320 px: 12 tổ hợp, không tràn ngang, ảnh tải đủ, không lỗi JavaScript/HTTP.
- Bảy phần, một H1; tab bàn phím, thư viện ảnh, điều hướng vòng, thumbnail, Escape và trả focus.
- Ngôn ngữ giữ anchor, menu điện thoại, liên kết từ Trang chủ và trang danh mục.
- Biểu mẫu chất lượng/kỹ thuật/tư vấn/báo giá đúng ngữ cảnh, trường ngày chỉ ở tư vấn.
- Kiểm tra hồi quy Tổng quan sản phẩm (10 tổ hợp) và Nhãn hàng & catalog (12 tổ hợp) thành công sau thay đổi điều hướng chung.
- Đã xem ảnh chụp desktop và mobile, sửa tỷ lệ ảnh phần chất lượng và nhịp lưới ảnh. Kết quả chi tiết lưu `qa/factory-report.json`, không đưa ảnh QA lên hosting.
