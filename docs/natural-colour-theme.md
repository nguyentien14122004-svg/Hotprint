# Bộ màu mới — Natural Green / Warm Beige / Earthy Brown

Yêu cầu mới nhất của chủ website thay thế màu xanh rừng/mist/tím mận trước đây. Áp dụng cho toàn bộ website đã xây dựng, hiện gồm 16 trang cố định × VI/EN + 6 bài × VI/EN = 44 đường dẫn sau khi thêm P10 Về HotPrint, P11 Liên hệ, P12 Yêu cầu báo giá, P13 Yêu cầu mẫu, P14 Đặt lịch tư vấn , P15 Kiến thức bao bì và P16 Chính sách riêng tư. Kiểm tra 18 đường dẫn bên dưới ghi lại lần đổi màu trước; P10 và P11 có kiểm tra riêng trong `about-hotprint.md`, `contact-page.md`.

## Màu và vai trò

| Màu | Mã | Vai trò |
| --- | --- | --- |
| Natural Green | `#5E7D5A` | Logo hiển thị, mảng xanh liên hệ, đường hành trình, điểm nhấn và chi tiết thiên nhiên |
| Warm Beige | `#E7DFD1` | Nền chính, header, danh mục, liên hệ, footer |
| Earthy Brown | `#8A6A55` | Nút hành động chính, nét nhấn và chi tiết mẫu |
| Xanh đậm | `#496344` | Chữ lớn, nền quy trình Nhà máy |
| Xanh mực | `#344D36` | Chữ nội dung, menu, biểu mẫu |
| Xanh dịu đậm | `#53624E` | Chú thích và nội dung phụ |
| Nâu chữ | `#76543E` | Liên kết, chữ nhỏ màu nâu để đọc rõ trên nền be |
| Nâu hover | `#70513E` | Trạng thái hover và CTA trên mảng xanh |
| Giấy sáng | `#F7F2E8` | Bản trải hộp, cửa sổ ảnh, giấy ghi chú, biểu mẫu |
| Be phụ | `#EFE8DC` | Phân lớp nền và vùng thiết bị |
| Đường viền | `#C3BCAC` | Đường bế, đường chia và viền |

Màu xanh và nâu đậm là các sắc độ hỗ trợ đọc chữ nhỏ. Không dùng màu chữ thấp tương phản chỉ để khớp đúng mã màu chủ đạo.

## Chi tiết theo mẫu tham chiếu

- Trang chủ (điều chỉnh theo yêu cầu mới nhất): giữ nguyên toàn bộ ảnh `hero-hotprint-v3.webp` và bản nhỏ cùng tỷ lệ 3:2, gồm hộp, hoa văn, lá cây, ánh sáng và bóng đổ. Đã bỏ lớp màu phủ; chỉ đổi nền CSS bên ngoài ảnh sang be ấm. Không crop, kéo giãn, phóng lớn để lấp khung, phủ màu hoặc tạo lại ảnh. Ảnh hiển thị đầy đủ trên máy tính và điện thoại; phần danh mục không phủ lên mép ảnh. Bố cục hộp trải → hộp mở → thành phẩm, chữ và các điểm hành trình được giữ. Không đặt screenshot tham chiếu lên website.
- Logo giữ nguyên tệp, biểu tượng và chữ HotPrint; bộ lọc SVG chỉ đổi màu pixel theo alpha sang xanh tự nhiên. Dòng ISO vẫn ẩn qua khung CSS.
- Bản trải hộp sáu nhóm dùng nền giấy sáng, viền xanh và đường gấp be; nền ngoài chuyển sang be ấm với nét giấy nhẹ.
- Liên hệ theo tinh thần mẫu: thẻ điện thoại xanh tự nhiên, đường liên hệ trên be, ghi chú yêu cầu mẫu sáng màu và nút nâu. Chữ nghiêng ở tiêu đề dùng nâu đất.
- Menu, footer, thanh liên hệ điện thoại, các dialog, trường nhập, checkbox/radio, bộ lọc và trạng thái focus dùng chung bộ màu.
- Tổng quan sản phẩm và sáu trang nhóm chuyển CTA tím sang nâu, chữ xanh đậm, nền giấy/be. Bóng khung có sắc nâu nhẹ. Ảnh sản phẩm gốc và nhãn hiệu không chỉnh sửa màu.
- Nhà máy: nền be, quy trình xanh đậm, thiết bị nền be phụ, mảng liên hệ xanh tự nhiên; mọi ảnh nhà máy thật giữ nguyên.
- Màu đỏ báo lỗi và màu nhận diện Zalo phục vụ chức năng, giữ để người dùng nhận biết.

## Mã nguồn và lưu ý tiếp tục

- Bộ màu tập trung: `dist/natural-theme.css`, biến `--tone-*`.
- Các CSS trang cũ đã chuyển 519 giá trị màu sang token, gồm cả màu có alpha. Không sửa ngược về mã tím/xanh rừng cũ.
- `apply-theme.mjs` đặt stylesheet cuối `<head>` và cập nhật theme-color trên tất cả HTML. Chạy cuối `build-products.mjs`; build lại vẫn giữ bộ màu.
- Logo đổi màu bằng filter `brand-natural-color` trong SVG dùng chung ở `dist/index.html`.
- Tệp ảnh sản phẩm/nhà máy/logo gốc không thay đổi. SVG nền trang trí `collection-atmosphere.svg` đã chuyển sang sắc be/nâu.
- Không tạo ảnh AI mới cho lần đổi màu này; hình concept HotPrint đã được duyệt vẫn có chú thích minh họa.
- Build, kiểm tra cú pháp: `npm run build`, `npm run check`. Kiểm tra theme: `npm run test:theme`.

## Kiểm tra hoàn tất

- Khôi phục hero: kiểm tra VI/EN ở 1920, 1440, 1200, 1024, 820, 768, 390 và 320 px; ảnh đúng tỷ lệ 3:2, nằm trọn khung, không bị danh mục che, không filter/lớp màu phủ, không tràn ngang; nút báo giá mở được. Hai tệp WebP giữ nguyên SHA-256. Kết quả `qa/restored-hero-report.json`; ảnh kiểm tra `qa/restored-hero-*.png`. Màn hình hẹp dành vùng riêng cho chữ để không kéo giãn ảnh.
- 18 đường dẫn × 1440, 768, 390, 320 px = 72 tổ hợp: không tràn ngang, ảnh tải đủ, không lỗi JS/HTTP, VI/EN và CTA đúng màu.
- Kiểm tra hồi quy Trang chủ/liên hệ, Tổng quan sản phẩm, Nhà máy và sáu danh mục: menu, mẫu thật, bộ lọc, gallery, tư vấn, báo giá, bàn phím, đổi ngôn ngữ thành công.
- Đã xem bản chụp giao diện các nhóm trang, chỉnh màu chữ trên nền xanh và các liên kết nâu nhạt.
- Kiểm tra tương phản tự động cho chữ trên nền màu phẳng. Các vùng chữ trên ảnh/gradient được xem riêng; kiểm tra tự động không coi màu thân trang là nền của ảnh.
- Kết quả ở `qa/natural-theme-report.json`, `qa/natural-contrast-audit.json`, ảnh `qa/natural-page-*.png`; QA không được xuất bản.

Bản thử cục bộ; chưa push GitHub hoặc deploy hosting trong yêu cầu này. Biểu mẫu tiếp tục chuẩn bị email, chưa tiếp nhận tự động phía máy chủ.
