# P07 — Nhãn dán decal

Ngày: 12/10/2026. Bản xem thử cục bộ; chưa triển khai hosting.

## Đường dẫn và nguồn chỉnh sửa

- VI: /danh-muc/nhan-dan-decal/
- EN: /en/adhesive-labels/
- Nội dung VI/EN: build-labels.mjs.
- Giao diện: dist/labels.css, kế thừa dist/folding.css.
- Gallery: dist/folding.js qua data-product-group="label".
- Điều hướng/ngôn ngữ/biểu mẫu: dist/app.js.
- Build chung tạo 14 đường dẫn. Kiểm tra riêng: npm run test:labels.
- Menu, footer, nhóm thứ năm Trang chủ/P02 và thanh nhóm P03/P04/P05/P06 dẫn vào P07. Nhãn hàng & catalog tiếp tục dùng bộ lọc P02.

## Sáu phần theo kế hoạch 6.2

1. Hero: breadcrumb, H1 “Nhãn dán decal”, thông điệp “Gắn thông tin. Gửi dấu ấn.”, ảnh thật nhãn đỏ dạng cuộn, CTA tư vấn nhóm, link xem mẫu, mở ảnh gốc. Thanh chuyển sáu nhóm dưới hero.
2. Hình dạng & nội dung: ba mẫu thật minh họa nhãn mã vạch chữ nhật, nhãn thông tin in đỏ và nhãn tròn ký hiệu “2”. Nội dung nói về khả năng đọc, thứ tự thông tin và vùng dán.
3. Bề mặt, vật liệu & cách dán: ảnh cận thật nhãn đỏ; ba nội dung gồm bề mặt/môi trường, vật liệu/mặt in, cuộn/cách sử dụng. Nút tư vấn mở yêu cầu theo nhóm decal.
4. Thư viện: ba mẫu ảnh thật, ba cột desktop/tablet, một cột điện thoại. Không thêm bộ lọc cho thư viện chỉ ba mẫu; mỗi mẫu có xem ảnh đầy đủ và yêu cầu mẫu.
5. Sáu FAQ: mô tả bề mặt, điều kiện sử dụng, kích thước/hình dạng, thông số máy dán, chữ nhỏ/mã vạch, mẫu/báo giá.
6. CTA cuối: gửi kích thước, bề mặt, điều kiện và số lượng; báo giá, mẫu, liên kết nhà máy hiện có. Sơ đồ nhãn cuộn là trang trí vector, không phải bản vẽ kỹ thuật.

## Ảnh sản phẩm thật

| Mẫu | Mã ảnh gốc |
|---|---|
| Nhãn mã vạch dạng cuộn | 032A5339 |
| Nhãn in đỏ dạng cuộn | 032A5328 |
| Nhãn tròn ký hiệu 2 dạng cuộn | 032A5337 |

Nguồn: thư mục ảnh người dùng đã cung cấp, đối chiếu product-image-sources.json. Bitmap sản phẩm giữ nguyên. SVG mask trong dist/assets/label-masks chỉ hiển thị ảnh nguồn theo đường bao, kết hợp bóng CSS bên ngoài. Không tạo chữ in, nhãn mới hoặc khách hàng mới. Gallery luôn hiển thị ảnh gốc đầy đủ.

Tên 032A5337 đổi từ “Nhãn khuyến mại dạng cuộn” thành “Nhãn tròn ký hiệu 2 dạng cuộn”, mô tả đúng nội dung nhìn thấy thay vì suy đoán mục đích. Đồng bộ prepare-catalog.mjs, product-image-sources.json và dist/product-data.js.

Mã ảnh là mã tham khảo, không phải SKU. Các ảnh hiện có đều dạng cuộn. Không suy đoán giấy/nhựa, lớp keo, chống nước/chống lạnh, an toàn tiếp xúc thực phẩm, điều kiện máy hay khả năng quét mã từ ảnh. Nội dung hướng khách cung cấp nhu cầu và kiểm tra mẫu.

## Nền riêng — ImageGen

Dùng công cụ ImageGen tích hợp; chỉ tạo nền trống, không dùng CLI/API. Tệp cuối: dist/assets/label-paper-stage.webp. Khung nhãn giữ ảnh thật trên mặt giấy ngà, nền sage và ánh sáng dịu. Typography Playfair Display 600 / Be Vietnam Pro, xanh rừng và CTA tím mận tiếp nối thiết kế đã chốt.

Prompt cuối:
> Create a photorealistic EMPTY high-end editorial photography background for a collection of adhesive label rolls, landscape 3:2. No labels, rolls, products, packages, printed marks, text or logos. A continuous softly lit warm ivory matte paper working surface occupies the lower 80 percent. At the far back a curved desaturated sage sheet gently sweeps upward, with only a tiny blurred leafy branch at the far upper right. Subtle paper fibres, creamy studio daylight from upper left, very low contrast, no strong shadows, no pedestal. Center and entire foreground are empty and flat for compositing genuine photographed rolls later. Camera looking downward approximately 35 degrees, natural lens perspective, sophisticated tactile editorial set, restrained ivory and sage palette, fine believable materials, generous clear space.

## Chức năng và biểu mẫu

- VI/EN với đường dẫn riêng, giữ hash khi chuyển ngôn ngữ.
- Ba gallery ảnh gốc; mỗi mẫu một ảnh nên nút trước/sau vô hiệu. Có mở ảnh gốc ở tab riêng.
- Xem mẫu dùng chuột/chạm/bàn phím; Escape đóng và trả focus cho nút mở.
- Yêu cầu chung điền nhóm nhan-dan-decal, kích thước/hình dạng, vật liệu bề mặt dán, môi trường, cách dán và số lượng.
- Yêu cầu theo mẫu giữ tên/mã ảnh đúng. Nguồn email: “Nhãn dán decal HotPrint”.
- Biểu mẫu tiếp tục chuẩn bị email, khách gửi qua ứng dụng email. Chưa có backend nhận yêu cầu; không hiển thị gửi thành công giả.

## Kiểm chứng hoàn tất

- Build và kiểm tra cú pháp đạt.
- P07: 12 tổ hợp VI/EN × 1672/1440/1024/768/390/320px, đủ sáu phần và ba mẫu, ảnh/mặt nạ tải đúng, không tràn ngang hoặc lỗi JavaScript/404.
- Gallery cả ba mẫu, ảnh gốc, nút ảnh đơn, focus khi đóng, VI/EN, báo giá nhóm/mẫu, yêu cầu mẫu, FAQ bàn phím, điều hướng P01/P02/P06 đạt.
- P03/P04/P05/P06 và sáu nhóm P02 đã chạy kiểm tra hồi quy, đều đạt.
- Đã xem screenshot desktop, điện thoại, toàn trang và từng ảnh sản phẩm.

Mã nguồn mới đang lưu tại workspace; chưa đẩy repo hoặc triển khai hosting trong yêu cầu này.


Cập nhật P08: Nhãn hàng & catalog dẫn vào `/danh-muc/nhan-hang-catalog/` / `/en/hang-tags-catalogues/`. Cả sáu nhóm đã có trang riêng; build chung tạo 16 đường dẫn.
