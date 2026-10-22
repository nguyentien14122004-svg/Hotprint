# Đối tác trang chủ — thứ tự ưu tiên và tự chạy, 23/10/2026

Yêu cầu mới nhất của chủ website: thiết kế gọn như Khang Thành / Go-Pak, **một hàng logo độc lập trượt từng ô như Khang Thành**. Không dùng ảnh cắt trên bao bì, chữ gõ thay logo, thẻ sản phẩm, tiêu đề lớn hai dòng hoặc lưới “Xem tất cả”.

Khối `#doi-tac` nằm giữa `#nha-may` và `#lien-he` trên ba trang chủ VI/EN/中文. Tiêu đề căn trái dùng heading-font/heading-ink/heading-tracking chung; nền chuyển từ tone-surface sang tone-beige nối với phần liên hệ; nút nâu đất bo tròn và đường phân cách cùng token chung. Một hàng, logo giữ tỷ lệ và màu thương hiệu.

## Danh sách và nguồn

27 logo độc lập hiển thị. Có 10 thương hiệu được thay từ ảnh cắt bằng tệp logo chính thức: Cookever, ETON, GE, Phú Lộc Trường, SKYE Footwear, the350F, Kinh Đô, Marc O’Polo, Pierre Cardin và Shinpoong. Biti’s nâng lên SVG từ header chính thức, BEINCO và ONISHI dùng tệp rõ nét từ website hãng.

`home-partners-data.json` giữ đủ 51 mục kiểm kê: 27 mục `kind: logo, status: verified` và 24 mục `pending`. Builder chỉ xuất 27 mục đã có logo xác minh. Những trường crop và ảnh sản phẩm đã gỡ hoàn toàn. Xem [bảng nguồn và danh sách chờ](partner-logo-review.md) và `partner-logo-sources.json`.

Bảy tên chưa chắc từ đợt kiểm kê ban đầu tiếp tục loại trừ theo lựa chọn của chủ website. Không lấy khách hàng của đối thủ làm đối tác HotPrint. Ảnh bao bì dùng để nhận diện thương hiệu, không tự chứng minh hợp đồng trực tiếp hiện tại. Logo SHB dùng nhận diện đã có trong tư liệu; không tuyên bố đó là phiên bản mới nhất. Tài liệu nội bộ Nature Việt Nam không xuất bản.

## Chuyển động và khả năng truy cập

- Chủ website yêu cầu bỏ nút Tiếp tục/Tạm dừng: đã gỡ markup, nhãn dịch, CSS và xử lý nút.
- Đối chiếu trực tiếp [cấu hình Khang Thành](https://khangthanh.com/js/jcarousel.responsive.js) ngày 23/10/2026: vòng tròn, mũi tên ±1, tự chuyển mỗi 2500ms, dừng khi hover. Không sao chép thương hiệu hoặc nội dung đối thủ.
- HotPrint chuyển đúng một ô logo theo nhịp 2500ms: trượt easing 400ms, nghỉ khoảng 2100ms. Một hàng với số ô nguyên theo chiều rộng; không thay toàn bộ nhóm và không dùng fade. Ba nhóm giống nhau giúp nối vòng cả hai chiều.
- Mỗi lần bấm mũi tên, nhấn phím trái/phải hoặc vuốt đều đi một ô. Các lần bấm liên tiếp được xếp hàng. Hover và focus bàn phím dừng tự chuyển; rời vùng tương tác sẽ tự tiếp tục. Ngoài màn hình/tab ẩn cũng dừng tự động.
- Theo yêu cầu tự chạy trong preview reduced-motion của chủ website, vẫn tự chuyển, với thời gian trượt ngắn 240ms. Không thay cài đặt hệ thống hoặc chuyển động phần khác.
- Bản lặp có aria-hidden và inert; nhóm gốc ở giữa có alt và nhãn đầy đủ. Không JavaScript: chỉ hiện nhóm gốc cuộn ngang thủ công. Điện thoại hỗ trợ vuốt, mũi tên ẩn như bố cục trước.
- Tệp logo lưu cục bộ, không gọi website hãng trong lúc khách xem trang.

## Nguồn triển khai và kiểm tra

`build-home-partners.mjs`, `home-partners-data.json`, `dist/home-partners.css/js`. Build chèn sau legacy, trước theme/SEO. Chạy `npm run build`, `npm run check`, `npm run verify:deployment`. Với máy chủ cục bộ, chạy `npm run test:partners` (Playwright/Chrome).

QA: 12 tổ hợp ba ngôn ngữ × 1440/768/390/320px; tải đủ 27 logo, đúng vị trí, một hàng, không tràn trang; xác nhận khoảng nghỉ, vị trí trung gian khi trượt, tự chuyển và mũi tên một ô, bấm liên tiếp, nối vòng cả hai chiều, hover/offscreen, vuốt, chuyển ngữ, reduced-motion và không JavaScript. Ảnh hiện tại: qa/partners/v6-section-1440.png và v6-section-390.png. Build, syntax và verify:deployment đều đạt.

Đây là thay đổi cục bộ, chưa xuất bản.


## Thứ tự biên tập

`displayPriority` trong home-partners-data.json quyết định thứ tự ổn định trên mọi ngôn ngữ. Ưu tiên tổng hợp mức độ nhận diện thương hiệu/quy mô hoạt động và độ gắn với bao bì giấy qua mẫu HotPrint, không phải bảng xếp hạng doanh thu hay giá trị hợp đồng.

ORION → Kinh Đô → Thiên Long → Biti’s → Levi’s → GAP → GANT → KARL LAGERFELD → MARC O’POLO → Pierre Cardin → TRETORN → ETON → DC Shoes → Maison Marou → the350F → BEINCO → Shinpoong → GE → Cookever → WESSER → ONISHI → SKYE → ROTHMANS → Lily → Phú Lộc Trường → ACB → SHB.

Đầu dải là bánh kẹo/hộp bánh, văn phòng phẩm, hộp giày và túi bán lẻ; tiếp theo là các thương hiệu quốc tế trong thời trang, thương hiệu thực phẩm chuyên biệt, dược/đồ gia dụng/dụng cụ, nhóm bán lẻ nhỏ hơn và in ấn; ngân hàng ở cuối do mẫu là hộp quà. Không ngụ ý Maison Marou nhỏ hơn mọi thương hiệu đứng trước theo một thước đo tài chính đã kiểm toán.

