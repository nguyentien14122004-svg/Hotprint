# Thư viện sản phẩm thực tế — mẫu mới 13/10/2026

## Thiết kế và hành vi

Chỉ đổi P02.3 `#thu-vien` trên trang Tổng quan sản phẩm. Bố cục theo ảnh chủ website cung cấp: tiêu đề serif xanh và nghiêng nâu, lời dẫn, nút mở mẫu ở bên phải, thanh tìm kiếm bo mềm liền khối, thông tin kết quả và sắp xếp, ba cột thẻ bo góc trên desktop. Tablet hai cột, điện thoại một cột. Giữ các phần hero, sáu danh mục, Trang chủ và các trang khác.

Giữ đủ 36 mẫu, 12 mẫu mỗi trang. Số kết quả là dữ liệu thật, không cố định “12 sản phẩm” khi đang có 36. Tìm kiếm tên/thương hiệu/mã ảnh và không dấu, lọc nhóm, phân trang, mở gallery ảnh gốc, lưu tối đa sáu mẫu và VI/EN/中文 vẫn hoạt động. Thêm sắp xếp mặc định/tên/mẫu đã chọn trước; query `sort` giữ khi reload, quay lại, chuyển ngữ.

Hai nút trên thẻ cùng cập nhật một danh sách tham khảo: “Chọn mẫu” và “Thêm vào mẫu”. Không tạo giỏ mua hàng, giá tự động hoặc thanh toán. Ảnh gốc luôn mở được trong gallery; các góc ảnh phụ vẫn có tại đó.

## Ảnh và bảo toàn nhận diện

Tất cả 36 ảnh sản phẩm là ảnh thật đang có trong `/assets/products/`. Không đổi byte ảnh gốc, màu in, thương hiệu hoặc hình dáng. `library-photo-windows.css` tái sử dụng polygon và SVG mask đã có ở sáu trang danh mục, căn tỷ lệ theo giới hạn vật thể. Bóng sát vật thể và bóng mềm nằm ngoài ảnh qua CSS; không thêm sản phẩm mới bằng AI.

Imagegen built-in chỉ tạo sáu nền trống mới: `dist/assets/library-stone-1.webp` đến `library-stone-6.webp` (720×540). Tách sáu ô từ atlas được chọn; bỏ mép đường chia atlas và tối ưu WebP. Một atlas thử góc máy thấp không được dùng. Góc lá ngoài thư viện dùng phần góc trên của nền trang trí đã có, không đưa các sản phẩm concept vào thư viện.

Prompt cuối dùng với công cụ built-in:

> Produce an EMPTY PRODUCT PHOTO BACKGROUND atlas, 3 columns x 2 rows, six equal4:3panels, total1536x768. CRITICAL CAMERA: camera pointed DOWN toward the ground at 55 DEGREES, like photographing the TOP of a rectangular box on a table. DO NOT use front-facing camera. NO upright walls or horizon lines. Each entire panel is a continuous matte warm ivory stone tabletop viewed from above, with natural photographic pores and subtle diagonal leaf shadows. Palette light warm beige #e7dfd1, cream, sage. Soft daylight from upper left. Six panels: 1 a large flat rough-edged travertine slab fills 85% of image, leaf tips at left edge. 2 uninterrupted cream tabletop and leaf shadows at upper left, blurred leaves extreme upper right. 3 flat broad stone slab fills frame except small foliage upper right. 4 large rectangular travertine tile diagonal filling80% frame with delicate leaves extreme lower left. 5 uninterrupted pale limestone tabletop with shadows at upper left and a little foliage extreme lower right. 6 flat travertine tile diagonal fills85%frame with leaves only at extreme bottom left. Center80% of each panel must be EMPTY and unobstructed, no products, boxes, labels, text, UI, borders or gutters. Expensive natural editorial product photography, subdued shadows, no yellow tint. The support surface must fill the image allowing a large real product to be composited later from x15%-85% and y12%-88%. Exactly six clean plates. No plants or objects in center.

## Nguồn và kiểm tra

- `products-template.html`: cấu trúc.
- `dist/products-library-reference.css`: giao diện chỉ scope thư viện.
- `dist/library-photo-windows.css`: vị trí, tỷ lệ, mask và nền của từng mã mẫu.
- `dist/products.js`: nội dung VI/EN, sort và nút lưu mẫu; `locales/zh-Hans.json`: tiếng Trung.
- `build-products.mjs` gắn hai CSS mới; chạy build để đồng bộ VI/EN/中文.
- `qa-library-reference.mjs`: 18 tổ hợp màn hình/ngôn ngữ, 36 ảnh trên ba trang, tìm kiếm không dấu, sắp xếp/reload, gallery gốc, trạng thái hai nút chọn mẫu, giới hạn sáu mẫu, bộ lọc mobile, chuyển ngữ và empty state. Đã đạt, không lỗi JavaScript/tài nguyên.
- QA sản phẩm cũ đạt 10 tổ hợp và các chức năng/điều hướng. Build/check/verify:deployment đạt, hero gốc được giữ nguyên.
