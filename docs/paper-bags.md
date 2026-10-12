# P06 — Túi giấy
Ngày: 12/10/2026. Bản xem thử cục bộ.

## Đường dẫn và nguồn
- VI: /danh-muc/tui-giay/
- EN: /en/paper-bags/
- Nội dung: build-bags.mjs. CSS: dist/bags.css, kế thừa dist/folding.css.
- Gallery và bộ lọc: dist/folding.js qua data-product-group="bag".
- Menu, footer, nhóm thứ tư Trang chủ/P02 và thanh nhóm P03/P04/P05 dẫn vào P06.
- Build chung tạo 12 đường dẫn. Kiểm tra riêng: npm run test:bags.
- Nhóm dữ liệu bag, slug yêu cầu tui-giay.

## Sáu phần theo kế hoạch 6.2
1. Hero: breadcrumb, H1 “Túi giấy”, “Mang theo sản phẩm. Mang theo dấu ấn.”, ảnh thật Karl Lagerfeld, tư vấn theo nhóm, link thư viện, mở ảnh gốc. Thanh chuyển sáu nhóm ngay sau hero.
2. Dáng túi & cách sử dụng: Karl Lagerfeld dáng đứng/mặt rộng; Sô-Cô-La dáng ngang/hông rộng; túi quà họa tiết chim. Nội dung dựa trên chi tiết nhìn thấy, chọn kích thước và tỷ lệ theo sản phẩm.
3. Giấy, quai & hoàn thiện: ảnh cận thật Sô-Cô-La; giấy/độ đứng, quai/điểm gắn, hông/đáy/mặt in. Nút trao đổi vật liệu theo nhóm.
4. Thư viện tám mẫu: 4 cột desktop lớn, 3 laptop, 2 tablet, 1 điện thoại. Bộ lọc thời trang & bán lẻ (4), dáng ngang (1), túi quà & họa tiết (3), tất cả (8).
5. Sáu FAQ: tải trọng, kích thước, chọn quai, mẫu giấy/quai/màu, thiết kế đồng bộ với hộp, điều kiện đơn hàng.
6. CTA cuối: báo giá, yêu cầu mẫu, liên kết nhà máy hiện có. Sơ đồ túi là trang trí vector, không phải bản vẽ kỹ thuật.

## Ảnh thật
| Mẫu | Mã ảnh gốc |
|---|---|
| Karl Lagerfeld | 032A5331 |
| Sô-Cô-La | 032A5355 |
| Túi quà họa tiết chim | 032A5311, 032A5248 |
| Túi quà họa tiết hoa | 032A5336 |
| XXiS | 032A5332 |
| Levi’s | 032A5329 |
| GAP | 032A5357 |
| Sanestco Khánh Hòa | 032A5321 |

Nguồn: thư mục ảnh người dùng đã cung cấp, đối chiếu product-image-sources.json. Các bitmap sản phẩm giữ nguyên. Khung dùng SVG mask trong dist/assets/bag-masks và bóng CSS: chỉ hiển thị pixel ảnh nguồn, bao gồm quai thật; khoảng trống giữa quai để lộ nền. Ảnh gốc đầy đủ luôn có trong gallery.

Tên 032A5332 được chỉnh từ XXS thành XXiS; 032A5321 từ Kim Hỷ thành Sanestco Khánh Hòa theo chữ trên ảnh thật. Đồng bộ prepare-catalog.mjs, product-image-sources.json, product-data.js để lần chuẩn bị ảnh sau không khôi phục tên sai.

Mã ảnh là mã tham khảo, không phải SKU. Không suy đoán tải trọng, định lượng giấy, loại vật liệu quai, công nghệ hoàn thiện hay chứng nhận từ ảnh. Nội dung chỉ dẫn khách trao đổi theo sản phẩm và kiểm tra mẫu.

## Nền riêng — ImageGen
Dùng ImageGen tích hợp, chỉ tạo nền trống. Tệp cuối: dist/assets/bag-paper-stage.webp.
Prompt:
> Create a photorealistic EMPTY editorial photography background for a premium paper shopping bag collection, landscape 3:2. No bags, no products, no letters, no logos, no packaging. Large flat warm ivory matte paper tabletop fills the lower 85 percent, gently continuous with a pale sage green wall above. A broad curved sage paper sheet at far left edge only, tiny out-of-focus olive leaves at the far upper right edge. Fine tactile paper fibres and subtle material texture, restrained cream and sage palette. Soft broad diffuse studio daylight from upper left, very gentle edge shadows, absolutely no strong sun shadows or pedestal. Entire central area and bottom foreground are empty, evenly lit and uninterrupted for faithful original photographed bags to be placed later. Normal lens, camera looking slightly downward approximately 25 degrees, elegant real editorial photography, natural and understated.

Phong cách tiếp nối: giấy ngà, sage, xanh rừng, tím mận; Playfair Display 600 và Be Vietnam Pro. Nền sợi giấy và ánh sáng dịu giúp giữ ảnh sản phẩm thật tự nhiên, không vẽ lại chữ hay logo.

## Chức năng
- VI/EN, URL bộ lọc, giữ lọc khi tải lại và đổi ngôn ngữ.
- Xem ảnh lớn, góc ảnh thật bổ sung của mẫu họa tiết chim; các mẫu một ảnh vô hiệu nút trước/sau.
- Nút xem ảnh dùng bàn phím, Escape đóng và trả focus.
- Yêu cầu theo nhóm hỏi ngang × hông × cao, tổng trọng lượng, quai/mục đích sử dụng, số lượng.
- Yêu cầu theo mẫu giữ tên và mã ảnh chính xác; nguồn email là Túi giấy HotPrint.
- Giữ cơ chế chuẩn bị email của website, chưa có dịch vụ nhận biểu mẫu phía máy chủ.

## Kiểm chứng
Build/cú pháp, 12 tổ hợp VI/EN × 1672/1440/1024/768/390/320px, số phần/số mẫu, ảnh/mặt nạ tải được, không tràn ngang/lỗi JS/404; bộ lọc 4/1/3/8, VI/EN, gallery, báo giá đúng nhóm/mẫu, FAQ bàn phím và điều hướng. Rà lại P03/P04/P05 và sáu nhóm P02 sau thay đổi điều hướng. Đã xem ảnh toàn trang, hero và từng ảnh quai.


Cập nhật P07: Nhãn dán decal dẫn vào `/danh-muc/nhan-dan-decal/` / `/en/adhesive-labels/`; Nhãn hàng & catalog còn dùng bộ lọc P02. Build chung hiện tạo 14 đường dẫn.

Cập nhật P08: Nhãn hàng & catalog dẫn vào `/danh-muc/nhan-hang-catalog/` / `/en/hang-tags-catalogues/`. Cả sáu nhóm đã có trang riêng; build chung tạo 16 đường dẫn.
