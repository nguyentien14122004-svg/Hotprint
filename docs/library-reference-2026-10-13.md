# Thư viện sản phẩm thực tế — mẫu mới 13/10/2026

## Hiệu chỉnh mới nhất: phối cảnh và bóng tiếp xúc

Bản hiệu chỉnh sau phản hồi của chủ website thay nền đá trong **riêng thư viện P02.3** bằng mặt giấy studio kem liên tục `library-studio-paper.webp`. Không còn cạnh bệ đá có góc nhìn xung đột với ảnh sản phẩm. Khung hình nền thay đổi nhẹ theo nhóm nhưng không lật chiều ánh sáng. Nền trang vẫn chính xác `#e7dfd1`; các tài nguyên đá cũ được giữ để bảo toàn lịch sử, hiện không dùng trong thư viện.

36 ảnh gốc, đường dẫn, dữ liệu, thứ tự, thương hiệu, màu in và mask cũ giữ nguyên. Không chỉnh bitmap sản phẩm, không filter/blend/opacity lên ảnh. Tỷ lệ khung ảnh gốc 3:2 không biến dạng. Căn lại vùng hiển thị theo biên của từng vật thể, chừa khoảng trống phía trên cho nút chọn mẫu và phía dưới cho bóng.

`library-grounding.mjs` lưu các đáy hộp/túi, đường cong chân cuộn nhãn và mặt nạ thẻ phẳng trong hệ tọa độ ảnh gốc. Chạy `node library-grounding.mjs` để dựng lại 36 SVG trong `dist/assets/library-shadows/`. Các SVG là bóng trang trí riêng: bóng tiếp xúc, bóng môi trường và bóng đổ mềm về phía dưới bên phải. Thẻ phẳng dùng bóng ngắn theo mask, không áp bóng khối hộp lên chúng. Bỏ hoàn toàn drop-shadow ôm viền sản phẩm/quai túi. Ảnh và bóng dùng chung vị trí, chiều rộng và tỷ lệ để không lệch khi responsive.

Đây là cách trình bày ảnh gốc trên nền bổ sung, không phải bộ ảnh đã chụp lại cùng một trường quay. Hướng sáng và độ nét vốn có trong ảnh gốc vẫn được giữ; không tuyên bố bóng mô phỏng là phép đo ánh sáng thực tế. Muốn hoàn toàn đồng nhất ánh sáng trên vật liệu cần chụp lại sản phẩm thật.

Typography đã sửa: serif cho tiêu đề, Be Vietnam Pro cho mô tả/bộ lọc/nút; tiêu đề sản phẩm 17px desktop, không cắt tên. Container tối đa 1480px, ba/hai/một cột; nút chọn và phóng ảnh có vùng bấm tối thiểu 44px. Các chức năng hiện hữu giữ nguyên.

Nền trống được tạo bằng Imagegen, chỉ chứa giấy/lá/ánh sáng, không chứa sản phẩm hoặc thương hiệu. Prompt:

> Photorealistic empty tabletop photographic background, 1536x1024 landscape. Premium organic editorial packaging studio, calm creamy warm ivory art paper surface, matte fine natural grain, nuanced beige matching #e7dfd1 and #f3eee3. Entire frame is one continuous ground plane seen looking down obliquely at 45 degrees. No wall, horizon, seams, steps, stone blocks or plinths. Soft window daylight from upper left; diffused olive leaf shadows restricted to far margins; center 85 percent clear. Tiny defocused sage leaves at extreme top right. No products, packages, text, logo, UI or central objects. Background clean plate; products and contact shadows added independently.

Kiểm tra: đối chiếu trực quan 36 mẫu trên ba trang với ảnh gốc; kiểm tra ba ngôn ngữ ở 1920/1440/1056/768/390/320px; kiểm tra đăng ký vị trí ảnh–bóng, tỷ lệ ảnh, không filter ảnh, nền beige đúng mã, tìm kiếm/lọc/sắp xếp/gallery/chọn mẫu. `npm run check`, `npm run verify:deployment`, `npm run test:library-reference` là các lệnh xác minh. Các mô tả nền đá và bóng CSS ở phần dưới là lịch sử của phiên bản trước hiệu chỉnh.

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
