# Tổng quan sản phẩm — P02

Trang VI: `/san-pham/`. Trang EN: `/en/products/`. Menu và sáu nhóm Trang chủ dẫn vào trang mới. Trang Nhà máy đã có `/nha-may/` và `/en/factory/`, xem `docs/factory.md`. Trang Về HotPrint đã có `/ve-chung-toi/` và `/en/about/`, xem `docs/about-hotprint.md`.

P03 Hộp giấy mềm đã có trang riêng tại `/danh-muc/hop-giay-mem/` và `/en/folding-cartons/`, xem `docs/folding-cartons.md`. Ô nhóm đầu tiên và menu hiện dẫn vào P03; nhóm Hộp carton in màu dẫn vào P04, nhóm Hộp cứng cao cấp dẫn vào P05, nhóm Túi giấy dẫn vào P06, nhóm Nhãn dán decal dẫn vào P07, Nhãn hàng & catalog dẫn vào P08. Tất cả sáu ô nhóm hiện dẫn đến trang riêng; bộ lọc trong thư viện tổng quan vẫn hoạt động. Bộ lọc Hộp giấy mềm trong thư viện P02 vẫn hoạt động.

## Nội dung và thiết kế

**Bộ màu hiện tại toàn website:** xanh tự nhiên #5E7D5A, be ấm #E7DFD1, nâu đất #8A6A55. Đọc `docs/natural-colour-theme.md`. Phần mô tả CTA tím mận và xanh rừng bên dưới ghi lại giai đoạn trước.

**Chỉnh ảnh mới nhất:** [hòa hợp sản phẩm và nền](docs/product-photo-integration.md). Hero bỏ hàng 06+/36+/tư vấn; ánh sáng nền dịu hơn, bóng tiếp xúc riêng và tỷ lệ ảnh gốc. CSS cuối `products-lighting.css`.

**Cập nhật sáu nhóm theo mẫu mới:** xem `docs/families-reference-match.md`. Bố cục hai hàng có độ rộng khác nhau, serif Playfair Display, ảnh thật trên nền giấy/đá; CSS riêng `products-families.css`. Thay thiết kế danh mục giấy gấp cũ trên trang sản phẩm, không thay danh mục ở Trang chủ.

Hero cập nhật 12/10/2026 theo mẫu người dùng: “Nâng tầm sản phẩm Việt.”, serif Playfair Display 600, nút tím mận, ảnh hộp Sâm Ngọc Linh thật ghép bằng CSS trên nền đá riêng. Xem `docs/hero-reference-match.md`, `docs/product-photo-integration.md` và `dist/products-botanical.css`. Mô tả hero trong Product Atelier trước đó là lịch sử, không phải bản hiện tại.

Năm phần theo kế hoạch: mở đầu, sáu nhóm cấu trúc, thư viện mẫu, ba bước bắt đầu, tư vấn. Thiết kế tiếp nối Trang chủ: xanh rừng, giấy ngà, xanh sage, tím mận; nhãn số, nét bế và nếp gấp được vẽ bằng CSS/SVG. Không thay thiết kế sáu biểu tượng ở Trang chủ.

36 mẫu từ 48 ảnh gốc trong thư mục người dùng cung cấp `HÌnh sản phẩm`. Các ảnh sản phẩm vẫn là ảnh thật, chỉ xoay theo EXIF, thu nhỏ và nén WebP. Bản Product Atelier dùng khung cắt CSS theo đường bao cho hero và hai ảnh hộp, giữ nguyên tệp ảnh, màu, chữ và thương hiệu. Ảnh đầy đủ luôn có trong cửa sổ chi tiết. Nền giấy trống `atelier-paper.webp` được tạo bằng Imagegen; không chứa sản phẩm hoặc thương hiệu. Bản thử tách nền bằng AI làm thay đổi nét in đã bị loại. Nguồn ảnh gốc ghi trong `product-image-sources.json`; hướng thiết kế và prompt nền ở `docs/product-atelier-direction.md`.

Mã tham khảo trên giao diện là tên tệp ảnh, không phải mã hàng chính thức. Các tên mô tả dựa trên nội dung nhìn thấy trong ảnh. Không tự suy đoán kích thước, định lượng giấy, MOQ, giá, thời gian sản xuất hoặc chứng nhận. Ảnh thể hiện mẫu tham khảo, không tuyên bố quan hệ đối tác hay quyền sử dụng thương hiệu ngoài phạm vi ảnh sản phẩm được chủ website cung cấp.

## Hành vi

- 12 mẫu mỗi trang, ba trang mặc định; ba cột desktop, hai cột tablet, một cột điện thoại nhỏ để xem rõ sản phẩm.
- Tìm theo tên VI/EN, thương hiệu có trong tên mẫu, mã ảnh hoặc tên nhóm; không phân biệt dấu tiếng Việt.
- Lọc sáu nhóm; mobile dùng cửa sổ Áp dụng/Đặt lại, đóng cửa sổ chưa áp dụng không đổi kết quả.
- `q`, `group`, `page` được giữ trong URL khi tải lại, quay lại và đổi ngôn ngữ.
- Chi tiết mẫu hiển thị ảnh lớn, các góc ảnh có sẵn, số ảnh, yêu cầu mẫu và báo giá theo đúng mẫu. Ảnh không tải được có thông báo thay thế.
- Biểu mẫu điền sẵn tên/mã mẫu/nhóm, nguồn yêu cầu là Tổng quan sản phẩm. Biểu mẫu chuẩn bị email; khách phải gửi qua ứng dụng email. Chưa có lưu yêu cầu phía máy chủ, đơn hàng, thanh toán hay tính giá tự động.
- Danh sách chọn tối đa 6 mẫu để tư vấn chung. Chỉ lưu mã ảnh trong localStorage của trình duyệt; có thể bỏ chọn. Không phải giỏ hàng, không so giá, không tự gửi dữ liệu. Khi yêu cầu tư vấn, tên/mã các mẫu được điền vào phần mô tả.
- Có mô tả lựa chọn cấu trúc theo nhóm khi lọc; không tự đặt thông số. Hover hiện góc ảnh thứ hai nếu có; nút chi tiết vẫn hoạt động bằng chạm hoặc bàn phím.

## Chỉnh sửa

- `prepare-catalog.mjs`: danh sách mẫu và tạo ảnh tối ưu từ ảnh gốc. Chỉ chạy khi thay ảnh/danh sách. Cần thư mục nguồn tại workspace và thư viện sharp của runtime.
- `dist/product-data.js`: danh sách mẫu được sinh ra.
- `products-template.html`: cấu trúc năm phần và các dialog của P02. `build-products.mjs` dựng HTML VI/EN từ template và phần dùng chung của Trang chủ.
- `dist/products.css`: toàn bộ thiết kế P02.
- `dist/products-atelier.css`: thiết kế Product Atelier mới, bố cục giấy gấp và cách trưng bày ảnh.
- `dist/products.js`: bản dịch P02, tìm kiếm, lọc, phân trang và thư viện ảnh.
- `dist/app.js`: menu, ngôn ngữ và cửa sổ liên hệ dùng chung.
- `qa-products.mjs`: kiểm tra trình duyệt, 10 tổ hợp VI/EN × 1440/1024/768/390/320 và các luồng thao tác chính. Kết quả/ảnh trong `qa/` không xuất bản.

Trang thử giữ `noindex,nofollow`. Bản mới được kiểm tra bằng preview cục bộ trước khi chủ website duyệt deploy; không thay đổi hotprint.vn. `qa-atelier.mjs` kiểm tra chọn mẫu, giới hạn 6 mẫu, lưu trên trình duyệt, VI/EN, điền yêu cầu chung và điện thoại.


P04 Hộp carton in màu: `/danh-muc/hop-carton-in-mau/`, `/en/printed-corrugated-boxes/`. Bốn mẫu thật Cookever, USPA Sport, Milk Pan, DC Shoes. Xem `docs/printed-corrugated-boxes.md`.

P05 Hộp cứng cao cấp: `/danh-muc/hop-cung-cao-cap/`, `/en/premium-rigid-boxes/`. Chín mẫu thật, xem `docs/premium-rigid-boxes.md`.

P06 Túi giấy: `/danh-muc/tui-giay/`, `/en/paper-bags/`. Tám mẫu thật; xem `docs/paper-bags.md`. Tên XXiS và Sanestco Khánh Hòa đã chỉnh theo ảnh gốc.

P07 Nhãn dán decal: `/danh-muc/nhan-dan-decal/`, `/en/adhesive-labels/`. Ba mẫu thật, xem `docs/adhesive-labels.md`. Mẫu 032A5337 gọi theo hình dạng/ký hiệu thay vì suy đoán công dụng.

P08 Nhãn hàng & catalog: `/danh-muc/nhan-hang-catalog/`, `/en/hang-tags-catalogues/`. Bốn mẫu thật (ba thẻ, một lịch), xem `docs/hang-tags-catalogues.md`. Thư viện chưa có ảnh catalog thật.
