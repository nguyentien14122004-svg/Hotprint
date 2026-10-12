# P16 — Chính sách riêng tư

VI: `/chinh-sach-rieng-tu/`. EN: `/en/privacy/`. Bản xem trước ngày 13/10/2026. Website có 16 trang cố định × VI/EN và 6 bài × VI/EN = 44 đường dẫn.

## Thiết kế theo kế hoạch

Hero chữ serif xanh/nâu trên giấy be, giới thiệu ngắn và một tờ ghi chú phạm vi. Nội dung dưới hero có đúng năm phần:

1. Thông tin trên website: liên hệ, nội dung dự án, tệp, mẫu đã lưu và tìm kiếm.
2. Mục đích sử dụng: soạn yêu cầu báo giá/mẫu/tư vấn để khách kiểm tra và gửi email.
3. Tiếp cận và dịch vụ liên quan: phân biệt website với email, Zalo, Google Maps và website cũ; ghi rõ phần vận hành chưa xác minh.
4. Lưu giữ và yêu cầu: trạng thái dữ liệu trên trang/trình duyệt, xóa mẫu lưu, giới hạn của việc xóa này và liên hệ về thông tin đã gửi.
5. Liên hệ về dữ liệu: tên công ty, mã số thuế, trụ sở, email, hotline, liên kết Liên hệ.

Mục lục bám theo trang trên máy tính, có thể thu gọn và dùng bàn phím. Bản điện thoại xếp dọc, khối dữ liệu thành một cột. Font đọc 16 px; nội dung tối đa khoảng 760 px; anchor chừa khoảng header. Chỉ nền giấy trống đã duyệt `about-paper-v1.webp` được dùng lại từ Imagegen; prompt ở `about-hotprint.md`. Biểu tượng đơn giản là SVG cùng hệ nét. Không cần ảnh sản phẩm, nhân sự hoặc bitmap AI mới cho chính sách.

## Cơ sở đã kiểm tra

Chủ website yêu cầu tìm thông tin vận hành trên website công ty. Đã kiểm tra ngày 13/10/2026:

- [Trang chủ chính thức](https://hotprint.vn/) và [Liên hệ chính thức](https://hotprint.vn/lien-he/) để đối chiếu tên, mã số thuế, trụ sở, email và hotline.
- [Sitemap trang](https://hotprint.vn/wp-sitemap-posts-page-1.xml): 14 URL trang công khai trả về, không thấy trang chính sách trong danh sách này.
- API trang WordPress tìm `privacy`, `policy` trả danh sách rỗng; tìm `bảo` trả trang album/trang chủ/Về chúng tôi, không có chính sách riêng tư trong kết quả.
- `/privacy-policy/` và `/chinh-sach-bao-mat/` trên website cũ trả HTTP 404 khi kiểm tra trực tiếp. Đây không là chứng minh công ty không có quy định nội bộ.
- Chưa xác minh thời hạn lưu email/tệp/hồ sơ, phân quyền nhân sự, bên cung cấp email/hosting hoặc bên xử lý sau tiếp nhận từ các trang công khai đã kiểm tra. Không tự đặt một số ngày, danh sách nhân sự hoặc đơn vị dịch vụ.
- [Cổng Chính phủ — Luật 91/2025/QH15](https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=) công bố ngày hiệu lực 01/01/2026. Tài liệu này là nguồn bối cảnh để người phụ trách rà soát, không là cơ sở khẳng định bản preview đã tuân thủ toàn bộ yêu cầu pháp lý.

Nội dung mới mô tả hành vi đã kiểm tra trong mã nguồn của **website đang thiết kế**. Không lấy biểu mẫu WordPress hiện hữu để suy đoán cách tiếp nhận của bản mới; không coi các thiết lập chưa công bố là sự thật. Trang có nhãn bản xem trước và ghi rõ cần HotPrint rà soát vận hành/pháp lý trước khi công bố chính sách chính thức.

## Hành vi website đúng với nội dung

- Biểu mẫu mới giữ dữ liệu trong bộ nhớ trang, không tự POST/lưu hồ sơ hoặc upload; chỉ chuẩn bị mailto. Khách kiểm tra/gửi/đính kèm trong ứng dụng email. Không tuyên bố chỉ cần mở biểu mẫu là HotPrint đã nhận dữ liệu.
- Chọn tệp chỉ đọc tên, kích thước/loại để kiểm tra và ghi tên vào email. Nội dung tệp không được upload bởi mã website. Sao chép ghi nội dung vào clipboard khi khách nhấn nút.
- `hotprint-sample-selection` lưu mã ảnh đã chọn trong localStorage. Thông tin liên hệ, ghi chú và tệp không được lưu vào localStorage. Browser autofill, clipboard và ứng dụng email có cách lưu riêng.
- Từ khóa/bộ lọc ở URL để chia sẻ; chính sách nhắc tránh nhập dữ liệu riêng tư vào tìm kiếm.
- Mã website không tích hợp công cụ quảng cáo/analytics hoặc tự đặt cookie theo dõi. Không mở rộng thành khẳng định hosting không có access logs hoặc email không lưu thông tin.
- Không tự hứa mã hóa, thời gian xử lý yêu cầu dữ liệu, xóa toàn bộ hồ sơ, bán/không bán dữ liệu, truyền dữ liệu xuyên biên giới hoặc không có bên thứ ba khi chưa có căn cứ vận hành.

## Chức năng xóa danh sách mẫu

Nút trên P16 chỉ xóa key `hotprint-sample-selection` của origin đang xem. Không xóa key khác, email/tin nhắn đã gửi, clipboard hoặc các mã mẫu đã được người dùng đưa vào form đang mở. Nút bị vô hiệu khi không có key; trạng thái nói rõ kết quả. Nếu storage bị chặn, hướng dẫn dùng cài đặt trình duyệt.

Thư viện P02 lắng nghe storage event để cập nhật số mẫu/tray/shortlist ở các thẻ khác sau khi key bị xóa. P13/P14 cập nhật nút dùng danh sách đã lưu, tra lại danh sách khi nhấn nút; dữ liệu form hoặc mẫu đã chọn cho yêu cầu hiện tại được giữ. Chưa triển khai chức năng xóa dữ liệu trên hệ thống email/CRM; việc này cần quy trình tiếp nhận thật của công ty.

## Liên kết và ngôn ngữ

- Footer toàn website là liên kết nội bộ tới P16, thay nội dung riêng tư ngắn trong modal cũ.
- Các trang báo giá/mẫu/tư vấn và phần giải thích ở Liên hệ mở P16 trong thẻ mới, có dấu mở ngoài và nhãn thích hợp; giữ bản form đang soạn. `rel=noopener` dùng cho các liên kết này.
- Các nút `data-info=privacy` cũ còn trong template tương thích được chuyển tới P16; modal vẫn dùng cho điện thoại/điều kiện gửi yêu cầu hiện chưa được tách riêng.
- VI/EN giữ anchor cùng mục; không đưa người đang xem chính sách về Trang chủ khi đổi ngôn ngữ.

## Mã nguồn và kiểm tra

- Nội dung/layout: `build-privacy.mjs`; chạy sau P15, trước `apply-theme.mjs`. Không sửa trực tiếp HTML sinh ra.
- Giao diện: `dist/privacy.css`. Xóa mẫu/trạng thái storage: `dist/privacy.js`.
- Điều hướng: `dist/app.js`, footer `dist/index.html`, liên kết nguồn `build-quote.mjs`/`build-contact.mjs`. `quote.css` hỗ trợ anchor trong vùng consent.
- Đồng bộ saved references: `dist/products.js`, `dist/quote.js`. Không đổi yêu cầu bắt buộc hoặc quy trình chuẩn bị email.
- `npm run build`, `npm run check`, `npm run test:privacy`: 12 tổ hợp VI/EN × 1920/1440/1024/768/390/320 px; năm mục, ngôn ngữ/anchor, mục lục bàn phím, liên kết từ sáu form, dữ liệu form không mất, xóa đúng key, cập nhật giữa các thẻ, storage bị chặn, điều hướng và lỗi JS/HTTP.
- Kiểm tra lại sample-request, consultation, quote, atelier và contact-page vì có thay đổi liên kết/storage dùng chung. Audit chữ trên nền phẳng không phát hiện lỗi; hero nền giấy được xem trực tiếp.
- Báo cáo/screenshot ở `qa/privacy-report.json`, `qa/privacy-*.png`, `qa/privacy-contrast-audit.json`. Preview noindex; chưa push/deploy hoặc áp dụng chính sách mới lên website thật.

## Trước công bố chính thức

HotPrint cần xác nhận thời hạn/tiêu chí lưu dữ liệu sau tiếp nhận, các vai trò/bên xử lý và dịch vụ thực dùng, quy trình nhận/xác minh yêu cầu dữ liệu và cấu hình hosting. Nội dung sau đó cần được rà soát phù hợp hoạt động thực và pháp luật áp dụng. Khi thêm backend/CRM/upload/analytics, cập nhật chính sách tương ứng trước khi dùng tính năng đó.
