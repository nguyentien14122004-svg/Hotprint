# P05 — Hộp cứng cao cấp
Ngày: 12/10/2026. Bản thử cục bộ, chưa triển khai hosting.

## Đường dẫn và triển khai
- VI: /danh-muc/hop-cung-cao-cap/
- EN: /en/premium-rigid-boxes/
- Nội dung: build-rigid.mjs. CSS: dist/rigid.css, kế thừa dist/folding.css.
- Dùng chung gallery và bộ lọc dist/folding.js qua data-product-group="rigid".
- Menu, footer, nhóm Trang chủ, ô thứ ba P02 và thanh nhóm P03/P04 dẫn vào P05.
- Build chung tạo 10 đường dẫn. npm run test:rigid kiểm tra riêng P05.
- Giữ nhóm dữ liệu rigid và slug bộ lọc hop-cao-cap; không đổi dữ liệu sản phẩm cũ.

## Sáu phần theo kế hoạch 6.2
1. Mở đầu: breadcrumb, “Hộp cứng cao cấp”, thông điệp “Một lần mở. Một ấn tượng ở lại.”, ảnh thật Eton/Tretorn hé nắp, CTA tư vấn theo nhóm, liên kết thư viện, mở hai góc ảnh gốc. Khung vòm trên nền đá ngà/sage.
2. Dáng hộp & trải nghiệm: Eton/Tretorn nắp rời, NMN Nano Collagen hộp quà sản phẩm, hộp họa tiết rồng mặt rộng. Nội dung nói rõ phần quan sát được và phần cần trao đổi.
3. Lớp bọc & hoàn thiện: ảnh cận thật hộp nâu viền vàng (032A5254); lớp bọc/bề mặt, điểm nhấn trên mặt in và khay/cách lấy sản phẩm. Không tự dựng ảnh nội thất khi thư viện không có.
4. Thư viện: chín mẫu, ba cột desktop/hai tablet/một mobile. Bộ lọc thời trang & thương hiệu (2), hộp quà sản phẩm (3), quà tặng & dịp đặc biệt (4). Mỗi mẫu có xem ảnh gốc/các góc đã có, yêu cầu mẫu và báo giá theo mẫu.
5. Sáu FAQ về mẫu cấu trúc so với mẫu in, khay, nắp, nhận diện, điều chỉnh mẫu và báo giá/lịch thực hiện.
6. CTA cuối về trải nghiệm thương hiệu: báo giá, yêu cầu mẫu, liên kết nhà máy hiện có. Sơ đồ hộp và nắp rời chỉ là trang trí vector, không phải khuôn sản xuất.

## Nguồn ảnh
Tất cả ảnh lấy nguyên từ tài sản đã nhập từ thư mục người dùng cung cấp, đối chiếu product-image-sources.json:
| Mẫu | Mã ảnh gốc |
|---|---|
| Hộp họa tiết thực vật / Sâm Ngọc Linh | 032A5293, 032A5292, 032A5360 |
| Eton / Tretorn | 032A5308, 032A5286 |
| NMN Nano Collagen | 032A5246, 032A5244 |
| GANT | 032A5255 |
| Hộp nâu viền vàng | 032A5309, 032A5254 |
| Kỷ niệm 30 năm | 032A5257 |
| Họa tiết rồng | 032A5356 |
| Quà 2024 / ACB | 032A5282 |
| Hộp màu cam / SHB | 032A5363 |

Không sửa bitmap sản phẩm, logo, chữ in hoặc màu sản phẩm. Chỉ khung cắt CSS, tỷ lệ hiển thị và bóng bên ngoài; mép từng mẫu đã xem lại trên ảnh gốc. Gallery luôn hiển thị ảnh gốc đầy đủ. Mã ảnh là mã tham khảo, không phải SKU. Không suy đoán kết cấu khay, nam châm, loại lõi, công nghệ bề mặt, chứng nhận, MOQ, giá hay thời gian.

## Nền riêng — ImageGen
Dùng ImageGen tích hợp, không dùng CLI/API. Chỉ tạo nền trống, không tạo sản phẩm. Tệp cuối: dist/assets/rigid-studio-stage.webp.
Prompt:
> Photorealistic EMPTY luxury packaging photography set, landscape 3:2. Absolutely no products, no boxes, no letters or branding. An expansive continuous warm ivory fine limestone tabletop occupying 85 percent, softly curving into a pale desaturated sage backdrop. At the very far left edge a gently folded ivory cotton cloth, only small portion, minimal. Tiny blurred natural leaves in upper right corner only. Very soft diffused daylight upper left, no direct sun, subtle delicate shadows far edges only. Central area and entire lower foreground completely empty, flat, evenly lit, usable to place original photographed objects later. Camera 35 degrees looking downward, natural normal lens perspective. Sophisticated editorial still life, restrained warm champagne and sage, quiet real material grain, clean and believable, no podium or geometry crossing center.

## Tương tác và kiểm tra
- VI/EN, bộ lọc có URL, tải lại/đổi ngôn ngữ giữ trạng thái.
- Gallery Eton/Tretorn hai ảnh, các mẫu khác theo số góc thật có sẵn.
- Yêu cầu theo nhóm hỏi kích thước/số món, kiểu nắp/khay và số lượng; yêu cầu theo mẫu giữ tên/mã chính xác.
- Biểu mẫu chỉ chuẩn bị email như toàn website; chưa có backend nhận yêu cầu.
- Build/cú pháp đạt; P05 qua 12 tổ hợp VI/EN × 1672/1440/1024/768/390/320px, không tràn ngang, không lỗi JS/404.
- Kiểm tra bộ lọc 2/3/4/9, gallery, báo giá theo nhóm/mẫu, FAQ bàn phím, điều hướng từ P01/P02.
- P03, P04 và sáu nhóm P02 đã kiểm tra hồi quy, đều đạt.
- Đã xem ảnh chụp desktop/mobile/toàn trang, sửa mép GANT/SHB/ACB và kiểm chứng lại ảnh cuối.


Cập nhật điều hướng P06: nhóm Túi giấy dẫn vào `/danh-muc/tui-giay/` / `/en/paper-bags/`; hai nhóm nhãn/catalog còn dùng bộ lọc P02. Build chung hiện tạo 12 đường dẫn.

Cập nhật P07: Nhãn dán decal dẫn vào `/danh-muc/nhan-dan-decal/` / `/en/adhesive-labels/`; Nhãn hàng & catalog còn dùng bộ lọc P02. Build chung hiện tạo 14 đường dẫn.

Cập nhật P08: Nhãn hàng & catalog dẫn vào `/danh-muc/nhan-hang-catalog/` / `/en/hang-tags-catalogues/`. Cả sáu nhóm đã có trang riêng; build chung tạo 16 đường dẫn.
