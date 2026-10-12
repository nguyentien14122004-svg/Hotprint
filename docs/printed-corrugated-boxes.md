# P04 — Hộp carton in màu

Ngày: 12/10/2026. Bản xem thử cục bộ; chưa xuất bản hosting.

## Đường dẫn và nguồn
- VI: /danh-muc/hop-carton-in-mau/
- EN: /en/printed-corrugated-boxes/
- Nội dung: build-carton.mjs. Giao diện: dist/carton.css kế thừa dist/folding.css.
- Hành vi ảnh/bộ lọc: dist/folding.js, chọn nhóm qua data-product-group. Menu, VI/EN và biểu mẫu: dist/app.js.
- Build chung: npm run build. Kiểm tra riêng: npm run test:carton.
- Điều hướng từ menu, footer, Trang chủ, ô thứ hai của P02 và thanh nhóm P03 dẫn vào P04. Nhóm hộp cứng đã dẫn vào P05; ba nhóm chưa triển khai vẫn dẫn đến bộ lọc P02.

## Sáu phần theo kế hoạch 6.2
1. Hero: breadcrumb, H1 riêng, thông điệp “Chỉn chu trên kệ. Sẵn sàng cho hành trình.”, ảnh thật Cookever, mở hai góc ảnh gốc, tư vấn hộp carton và tới thư viện mẫu. Thanh chuyển sáu nhóm phía dưới.
2. Ứng dụng & cấu trúc: ba mẫu Cookever, USPA Sport và DC Shoes; nội dung về không gian bên trong, độ vừa, xếp hộp, đóng mở và vận chuyển.
3. Vật liệu & mặt in: cận ảnh thật Milk Pan; trao đổi lớp giấy/kết cấu, mặt in/nhận diện và chèn giữ/vận chuyển. Nút tư vấn mở yêu cầu theo nhóm carton.
4. Thư viện: bốn mẫu thật, hai cột lớn trên máy tính, một cột trên điện thoại. Bộ lọc tất cả / gia dụng & nhà bếp / giày dép & thời trang; số lượng tự tính; mở ảnh, ảnh góc khác nếu có, yêu cầu mẫu hoặc báo giá theo đúng mẫu.
5. Sáu câu hỏi: thông tin kết cấu, chọn sóng qua ảnh, sản phẩm dễ vỡ, duyệt mẫu, chuẩn bị màu in, số lượng/giá/thời gian.
6. Liên hệ cuối: kích thước, trọng lượng, số lượng, cách vận chuyển; báo giá, mẫu và liên kết phần nhà máy hiện có.

## Ảnh thật và giới hạn nội dung
| Mã tham khảo | Mẫu | Ảnh gốc có sẵn |
|---|---|---|
| 032A5366 | Cookever — hộp bộ chảo | 032A5366, 032A5367 |
| 032A5358 | USPA Sport | 032A5358 |
| 032A5326 | Milk Pan / lilly pots | 032A5326 |
| 032A5361 | DC Shoes | 032A5361 |

Nguồn: thư mục ảnh chủ website cung cấp; đối chiếu product-image-sources.json. Các tệp sản phẩm dist/assets/products/*-large.webp giữ nguyên. Không tạo sản phẩm/nhãn mới; chỉ khung hiển thị CSS theo đường bao và bóng bên ngoài. Modal luôn cho xem ảnh đầy đủ. Mã tham khảo là tên tệp ảnh, không phải SKU chính thức.

Không suy đoán loại sóng, độ dày, chịu tải, giấy chứng nhận, MOQ hay thời gian từ ảnh. Đây là mẫu tham khảo và phương án cần trao đổi, không cam kết thông số sản xuất.

## Thiết kế
Playfair Display 600 và Be Vietnam Pro, xanh rừng/giấy ngà/sage/tím mận theo hướng đã duyệt. Nền giấy cuộn được dùng để gợi vật liệu và hòa với ảnh hộp. Ảnh hero nằm trọn trên nền, không bị chú thích che. Mỗi mẫu thật được giữ tỷ lệ. Màn hình nhỏ có ảnh lớn, liên kết chạm tối thiểu 44px, FAQ dùng bàn phím, focus rõ và tôn trọng reduced motion.

## Nền riêng — ImageGen
Dùng công cụ ImageGen tích hợp, không dùng API/CLI. Tệp cuối: dist/assets/carton-paper-stage.webp. Nền trống không chứa sản phẩm hay thương hiệu.

Prompt cuối:
> Create a photorealistic EMPTY photographic background for a luxury Vietnamese packaging website. Landscape 3:2. No products, no boxes, no lettering, no logo. Entire lower 80 percent is an uninterrupted matte warm ivory paper tabletop, seamlessly curved into a desaturated olive sage paper backdrop at top. Upper right corner only has a restrained out-of-focus natural leafy twig. Upper left a curved folded kraft paper sheet at far edge, unobtrusive. Camera looking down at tabletop approximately 40 degrees, normal lens. Very soft broad studio daylight from upper left, low contrast, delicate genuine paper grain, creamy neutral light, no hard shadows, no pedestal, no horizon cutting through foreground. Center and bottom fully empty for later faithful compositing of original photographed packaging; visual quiet, high-end editorial materials study, organic minimalism, realistic and understated.

## Biểu mẫu
Giữ cơ chế chuẩn bị email hiện có. Các nút trên trang điền nhóm hop-carton; yêu cầu theo mẫu có tên và mã ảnh chính xác. Yêu cầu chung hỏi thêm trọng lượng và cách đóng gói/vận chuyển. Nguồn email là “Hộp carton in màu HotPrint”. Chưa có dịch vụ nhận yêu cầu trên máy chủ; không báo gửi thành công giả.

## Kiểm chứng
- Build và kiểm tra cú pháp đạt.
- P04: VI/EN tại 1672, 1440, 1024, 768, 390, 320px; sáu phần, bốn mẫu, không tràn ngang, không lỗi JavaScript hay ảnh/đường dẫn 404.
- Bộ lọc, tải lại, VI/EN giữ trạng thái; gallery Cookever hai góc; báo giá đúng nhóm/mẫu; FAQ bằng bàn phím; đường dẫn P01/P02 đạt.
- P03 và P02 danh mục đã chạy kiểm tra hồi quy 12 tổ hợp mỗi trang; tất cả đạt.
- Đã xem ảnh toàn trang và ảnh riêng phần đầu trên máy tính, điện thoại.


Cập nhật điều hướng P06: nhóm Túi giấy dẫn vào `/danh-muc/tui-giay/` / `/en/paper-bags/`; hai nhóm nhãn/catalog còn dùng bộ lọc P02. Build chung hiện tạo 12 đường dẫn.

Cập nhật P07: Nhãn dán decal dẫn vào `/danh-muc/nhan-dan-decal/` / `/en/adhesive-labels/`; Nhãn hàng & catalog còn dùng bộ lọc P02. Build chung hiện tạo 14 đường dẫn.

Cập nhật P08: Nhãn hàng & catalog dẫn vào `/danh-muc/nhan-hang-catalog/` / `/en/hang-tags-catalogues/`. Cả sáu nhóm đã có trang riêng; build chung tạo 16 đường dẫn.
