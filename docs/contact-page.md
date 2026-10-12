# P11 — Liên hệ

Trang VI: `/lien-he/`. Trang EN: `/en/contact/`. Bản xem trước hoàn thành ngày 13/10/2026. Build chung hiện tạo 11 trang × VI/EN = 22 đường dẫn. Liên kết Liên hệ có ở footer và menu điện thoại toàn website; header giữ ba mục Sản phẩm, Nhà máy, Về HotPrint như kế hoạch.

## Bốn phần theo kế hoạch

1. **Mở đầu:** H1 “Kết nối với HotPrint”, câu hướng dẫn, nút Chia sẻ nhu cầu cuộn tới phần 4 và Gọi HotPrint. Hình thư giấy được dựng bằng HTML/CSS/SVG và logo gốc; không dùng ảnh chụp thiết kế làm giao diện. Phần minh họa nằm ngoài ảnh công ty, không ảnh hưởng hero Trang chủ.
2. **Kênh liên hệ:** điện thoại 0903.032.686, Zalo, email info@hotprint.vn. Mỗi kênh có hành động rõ ràng. Có sao chép số điện thoại; nếu trình duyệt không cho sao chép, hiện ô nội dung để khách chọn và sao chép thủ công. Không đặt giờ tiếp nhận hoặc thời hạn phản hồi chưa được xác nhận.
3. **Địa điểm:** tách trụ sở và nhà máy, sao chép địa chỉ, mở tìm kiếm Google Maps riêng theo từng địa chỉ, đề nghị lịch gặp và liên kết Nhà máy. Ảnh 032A5054 là ảnh bên trong không gian sản xuất thật, không mô tả là ảnh trụ sở hoặc ảnh mặt tiền.
4. **Chọn nhu cầu:** Báo giá, Yêu cầu mẫu, Đặt lịch tư vấn. Ba nút dùng biểu mẫu hiện có, điền ngữ cảnh phù hợp; không tạo thêm một biểu mẫu liên hệ tổng quát thứ tư. Lời hướng dẫn nói rõ biểu mẫu chuẩn bị email để khách kiểm tra và gửi qua ứng dụng email. Có liên kết giải thích sử dụng thông tin.

## Thiết kế

- Xanh tự nhiên #5E7D5A, be ấm #E7DFD1, nâu đất #8A6A55; chữ xanh đậm và nâu đậm theo theme chung.
- Playfair Display 600 cho tiêu đề, Be Vietnam Pro cho nội dung. Thư giấy lệch nhẹ, nét hộp, đường chia và chất giấy tạo bản sắc gần với trang Về HotPrint.
- Nút và vùng tương tác tối thiểu 44 px; bố cục ba kênh/ba nhu cầu chuyển thành một cột trên màn hình nhỏ. Giảm chuyển động theo thiết lập trình duyệt.
- Ảnh nhà máy gốc hiển thị đầy đủ tỷ lệ, không crop, phủ màu hoặc tạo lại. Logo gốc chỉ ẩn dòng ISO và dùng màu nhận diện hiện tại như các trang khác.

## Thông tin đã đối chiếu

Nguồn: [Liên hệ — website chính thức HotPrint](https://hotprint.vn/lien-he/), đối chiếu 13/10/2026.

- Điện thoại: 0903.032.686. Email: info@hotprint.vn.
- Đã đọc liên kết công khai trong HTML chính thức: `https://zalo.me/0903032686`; đây là đường dẫn công ty đang công bố, không tự suy từ hotline.
- Trụ sở: 9B Đường 1A, KCN Biên Hòa 2, Đồng Nai.
- Nhà máy: 999 Nguyễn Thiện Thuật, Khu Phố 1, Phường An Hoà, TP. Biên Hoà, Đồng Nai.
- Chủ website đã xác nhận ngày 13/10/2026: giữ hai địa chỉ đang công bố. Website chính thức chưa cung cấp ghim Google Maps được kiểm chứng trong trang Liên hệ; vì vậy nút ghi **Tìm trên Google Maps** và mở tìm kiếm theo địa chỉ, không dựng bản đồ giả/tọa độ hoặc khẳng định đã xác minh vị trí thực. Cần thay bằng đường dẫn Maps chính thức và địa chỉ hành chính hiện hành khi công ty cung cấp trước khi xuất bản chính thức.

## Mã nguồn và hành vi

- `build-contact.mjs`: nội dung bốn phần VI/EN, tạo hai đường dẫn.
- `dist/contact-page.css`: thiết kế riêng. `dist/contact-page.js`: sao chép và phương án thủ công.
- `dist/app.js`: tiêu đề, điều hướng/ngôn ngữ, ngữ cảnh yêu cầu và nguồn email của trang Liên hệ. Chuyển VI/EN giữ hash phần đang xem.
- Biểu mẫu vẫn dùng cùng cơ chế chuẩn bị email; không có tiếp nhận trên máy chủ, lưu tệp hoặc thông báo “đã gửi” giả. Lịch gặp/lịch tư vấn là đề nghị và cần HotPrint xác nhận.
- Bản thử giữ noindex, chưa push/deploy trong yêu cầu này.

## Kiểm tra hoàn tất

- `npm run build`, `npm run check`.
- `npm run test:contact-page`: 12 tổ hợp VI/EN × 1920/1440/1024/768/390/320 px; đủ bốn phần, ảnh tải đủ, không tràn ngang hoặc lỗi JS/HTTP, đúng kênh liên hệ và hai liên kết Maps riêng.
- Đã kiểm tra ba loại yêu cầu, đề nghị lịch gặp, nút gọi trên máy tính, sao chép số/địa chỉ và phương án khi clipboard bị chặn, thông báo bắt buộc, chính sách thông tin, menu điện thoại, chuyển ngôn ngữ giữ hash và các liên kết từ nhóm trang cũ.
- Kiểm tra tương phản chữ trên nền phẳng đạt; nền giấy được xem bằng bản chụp giao diện. Kiểm tra hồi quy Trang chủ/liên hệ và Về HotPrint đạt.
- Kết quả `qa/contact-page-report.json`, `qa/contact-page-contrast-audit.json`; bản chụp `qa/contact-page-*.png`. Tệp QA không xuất bản.

## Nền giấy và Imagegen

Tài nguyên AI mới duy nhất: `dist/assets/contact-paper-v1.webp`, 1536×1024, khoảng 136 KB. Dùng công cụ Imagegen tích hợp, giữ ảnh PNG gốc trong generated_images và lưu bản WebP vào dự án. Nền này chỉ là giấy trang trí; không có người, sản phẩm, logo, nhà máy hoặc bản đồ tạo sinh.

Prompt đã dùng:

```text
Use case: photorealistic-natural. Asset type: decorative empty paper background for the Contact page of HotPrint, a Vietnamese paper packaging brand. Create a refined landscape 3:2 photograph of a blank warm beige paper tabletop, with fine subtle fibers and a broad very gentle diagonal shadow cast by one empty ivory sheet just entering the far upper right corner. Only a small restrained out-of-focus leafy shadow on the extreme right edge. Left and center 80% evenly lit and completely blank for website typography. Colors #E7DFD1 warm beige, #F7F2E8 ivory, low contrast sage #5E7D5A shadow. Tactile, quiet, editorial, real material texture, no glossy 3D rendering. No words, logos, stamps, handwriting, pens, products, boxes, branded packaging, factory, people, maps, pins, phones, UI, borders or watermark. A decorative paper surface only; no company imagery is to be generated.
```
