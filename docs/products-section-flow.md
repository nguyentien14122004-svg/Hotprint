# Chuyển tiếp giữa các phần — Khám phá sản phẩm

16/10/2026. Theo ảnh tham chiếu của chủ website: thay các đường nối ngang tách biệt bằng nền giấy liên tục, đường cong kem và dải xanh nhạt. Phạm vi `/san-pham/`, `/en/products/`, `/zh/products/`.

- Hero có chuyển màu nhẹ ở mép dưới; danh mục và thư viện cùng nền giấy sáng.
- Khối Cùng phát triển có mép cong trên/dưới, khoảng thở để trang trí không che nội dung.
- Khối liên hệ dùng cùng hệ đường cong, ảnh nền hòa vào giấy; trên mobile ảnh chuyển nhẹ sang phần chữ.
- Footer trang sản phẩm dùng cùng màu giấy, bỏ đường viền trên.
- Ảnh, sản phẩm, logo, nội dung, bộ lọc và hành động không đổi. Không tạo lại bitmap; đường cong là SVG trang trí, `aria-hidden`, không nhận tương tác.

Tệp chính: `dist/products-section-flow.css`; bốn SVG trong `products-template.html`; stylesheet được gắn bằng `build-products.mjs`. CSS chỉ scope trang tổng quan sản phẩm, không áp tự động lên các trang danh mục.

Đã kiểm tra ảnh desktop/mobile và chạy `qa-collaboration-reference.mjs`: 18 bố cục VI/EN/ZH, sáu tuyến yêu cầu mẫu/tư vấn, không tràn ngang, không cắt chữ/nút, không lỗi JS hay tài nguyên. `npm run verify:deployment` đạt 72 trang và 67 sản phẩm.
