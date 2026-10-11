# Website HotPrint

Bản thiết kế website HotPrint đang phát triển, gồm **Trang chủ** và **Tổng quan sản phẩm**, hỗ trợ tiếng Việt/tiếng Anh và điện thoại. Mã nguồn HTML/CSS/JavaScript thuần, có thể triển khai trên dịch vụ hosting tĩnh, không phụ thuộc tài khoản ChatGPT để chạy.

## Chạy trên máy

Cài Node.js 20 trở lên, mở thư mục dự án và chạy:

```sh
npm run dev
```

Mở http://127.0.0.1:4174/ hoặc http://127.0.0.1:4174/san-pham/. Nhấn Ctrl+C để dừng. Website chạy không cần cài thư viện bổ sung.

| Trang | Tiếng Việt | Tiếng Anh |
| --- | --- | --- |
| Trang chủ | `/` | `/en/` |
| Tổng quan sản phẩm | `/san-pham/` | `/en/products/` |

## Chỉnh sửa và tạo bản cập nhật

- `dist/index.html`: nội dung Trang chủ, header, footer, các cửa sổ liên hệ dùng chung.
- `dist/styles.css`, `dist/refinements.css`, `dist/contact-studio.css`: giao diện Trang chủ và phần dùng chung.
- `dist/app.js`: VI/EN, điều hướng, cửa sổ liên hệ và biểu mẫu.
- `build-products.mjs`: cấu trúc trang Tổng quan sản phẩm; lấy header/footer dùng chung từ Trang chủ.
- `dist/products.css`, `dist/products.js`: thiết kế, bản dịch, tìm kiếm, bộ lọc, phân trang, thư viện ảnh sản phẩm.
- `dist/product-data.js`: 36 mẫu tham khảo; tên, nhóm và các góc ảnh.
- `dist/assets/`: toàn bộ hình ảnh, logo và phông chữ cần để chạy website.

Sau khi sửa HTML hoặc cấu trúc trang, chạy:

```sh
npm run build
npm run check
```

Các tệp trong `dist/` được lưu trong repo và là bản dùng để xuất bản. Không sửa trực tiếp các tệp HTML đã sinh ở `dist/en/` hoặc `dist/san-pham/`; chúng được tạo lại khi build.

## Ảnh sản phẩm

Trang Tổng quan sản phẩm dùng **36 mẫu từ 48 ảnh gốc do chủ website cung cấp**, giữ nguyên sản phẩm và nhãn hiệu. Ảnh chỉ được xoay đúng hướng, thu nhỏ và nén WebP; khung/nền giao diện ở bên ngoài ảnh. Nguồn được ghi trong `product-image-sources.json`. Mã 032A… là mã ảnh tham khảo, không phải mã hàng chính thức.

Ảnh hero Trang chủ là thiết kế minh họa HotPrint đã được duyệt ở giai đoạn trước, có chú thích minh họa trên giao diện. Không dùng ảnh này làm bằng chứng sản phẩm đã sản xuất.

Ảnh WebP đã có đủ trong repo; không cần ảnh JPG gốc để chạy website. Nếu cần tạo lại ảnh, cài công cụ tùy chọn `npm install --no-save sharp`, rồi chạy:

```sh
node prepare-catalog.mjs "/duong-dan-den-thu-muc-anh-goc"
```

Thư mục nguồn chứa các tệp `032A5293.JPG`, v.v. Không tự thêm ảnh thương hiệu hoặc sản phẩm chưa được chủ website xác nhận.

## Xuất bản với Cloudflare Pages

Kết nối repo này với một dự án Cloudflare Pages thuộc tài khoản cố định của công ty:

- Production branch: `main`.
- Framework preset: `None`.
- Build command: `npm run build`.
- Build output directory: `dist`.
- Root directory: để trống (gốc repo).

Sau khi kết nối và triển khai lần đầu, các bản cập nhật đẩy lên `main` sẽ được Cloudflare triển khai theo cấu hình của dự án. Đưa mã vào GitHub **chưa tự tạo website trực tuyến**. Không có cấu hình hosting hay quyền truy cập tài khoản Sites cũ trong repo này.

## Tiếp tục khi đổi tài khoản Codex

Mở lại thư mục này, hoặc clone repo trên máy khác. Yêu cầu Codex đọc `AGENTS.md`, `PRODUCTS.md` và `docs/ke-hoach-website.md` trước khi sửa. Quyền đẩy lên GitHub và quyền hosting vẫn phải thuộc tài khoản được bạn cấp phép; đổi tài khoản Codex không tự cấp các quyền đó. Không lưu mật khẩu hoặc token trong repo.

## Kiểm tra

Kiểm tra cú pháp: `npm run check`. Kiểm tra trình duyệt tùy chọn: cài `npm install --no-save playwright`, bảo đảm có Google Chrome, chạy website ở cổng 4174 rồi `npm run test:browser`. Script kiểm tra VI/EN × 1440/1024/768/390/320, tìm kiếm không dấu, nhóm, phân trang, quay lại, bộ lọc mobile, thư viện ảnh và mẫu điền sẵn. Kết quả trong `qa/` được bỏ qua bởi Git.

## Phạm vi hiện tại

- Biểu mẫu chuẩn bị email; khách kiểm tra và gửi trong ứng dụng email. Chưa có máy chủ lưu yêu cầu hoặc trang quản trị.
- Báo giá riêng theo nhu cầu; không có tính giá tự động, thanh toán hay giỏ hàng.
- Các trang nội dung khác chưa được xây mới; một số liên kết dẫn về website chính thức hotprint.vn.
- Bản thử vẫn có `noindex,nofollow`; chỉ bỏ khi chủ website quyết định ra mắt chính thức.
- Không tự thay đổi website hotprint.vn hoặc cấu hình tên miền hiện có.

Xem thêm [chi tiết trang sản phẩm](PRODUCTS.md), [kế hoạch website](docs/ke-hoach-website.md) và [lịch sử quyết định thiết kế](docs/lich-su-thiet-ke.md).

Hình ảnh và nhãn hiệu trong repo không được cấp giấy phép tái sử dụng chung. Phông Be Vietnam Pro có giấy phép riêng tại `dist/assets/OFL-BeVietnamPro.txt`.
