# P12 — Yêu cầu báo giá

Trang VI: `/yeu-cau-bao-gia/`. Trang EN: `/en/request-a-quote/`. Bản xem trước hoàn thành ngày 13/10/2026. Build chung hiện tạo 12 trang × VI/EN = 24 đường dẫn.

## Ba phần theo kế hoạch

1. **Giới thiệu yêu cầu:** “Chia sẻ nhu cầu bao bì của bạn”, hướng dẫn ngắn, hotline và Zalo. Khách chưa biết quy cách vẫn có thể mô tả sản phẩm để trao đổi. Ảnh 032A4938 thật từ thư mục nhà máy được dùng trong cột giới thiệu trên máy tính; không tạo nhân sự hoặc sản phẩm AI.
2. **Biểu mẫu trên một trang:** thông tin liên hệ, nhóm bao bì, mẫu tham khảo và mô tả nhu cầu. Thông tin bổ sung nằm trong một vùng mở rộng tùy chọn ngay trên trang, không phải wizard hoặc các bước báo giá. Có đồng ý sử dụng thông tin, hướng dẫn gửi email và sao chép dự phòng.
3. **Hướng dẫn sau khi gửi email:** kiểm tra yêu cầu, trao đổi cấu trúc/vật liệu và thống nhất báo giá riêng. Không công bố giá, lời hứa phản hồi theo giờ hoặc thời gian giao chưa được thống nhất.

## Trường và hành vi

- Họ tên 2–100 ký tự và công ty là bắt buộc.
- Chỉ cần email hoặc điện thoại; kiểm tra định dạng, hỗ trợ số quốc tế. Không bắt buộc cả hai.
- Nhóm sản phẩm bắt buộc: sáu nhóm đã có hoặc “Chưa rõ — cần tư vấn”. Mặc định chưa chọn nhóm để khách chủ động lựa chọn.
- Mẫu tham khảo tùy chọn; nếu đi từ mẫu sản phẩm, tên/mã ảnh và nhóm được điền sẵn, khách vẫn sửa hoặc bỏ được.
- Mô tả 20–3.000 ký tự. Số lượng, kích thước và ngày cần hàng là tùy chọn; không đặt MOQ hoặc tính giá tự động.
- Ngày mong muốn không nhận ngày quá khứ. Đây là đề nghị, không phải lịch giao đã xác nhận.
- Đồng ý sử dụng thông tin không chọn sẵn; có liên kết giải thích thông tin được dùng để trao đổi yêu cầu.
- Đổi VI/EN ngay trên trang giữ giá trị đã nhập, lựa chọn nhóm, checkbox và danh sách tệp. Không đưa thông tin cá nhân vào URL hoặc lưu bản nháp lên máy chủ/trình duyệt. Giá trị chỉ tồn tại trong trang đang mở; tải lại trang sẽ bỏ thông tin khách nhập.
- Lỗi nằm cạnh trường liên quan; đưa focus tới lỗi đầu, giữ các giá trị khác.

## Gửi email và tệp — đúng khả năng bản thử

- Website hiện chưa có hệ thống tiếp nhận yêu cầu trên máy chủ. Nút **Tiếp tục gửi qua email** chuẩn bị nội dung và mở ứng dụng email. Người dùng cần kiểm tra và hoàn tất gửi trong ứng dụng đó. Khi chuẩn bị xong, có Mở lại email, Sao chép yêu cầu và ô sao chép thủ công nếu clipboard bị chặn.
- Không hiển thị “Đã nhận/đã gửi yêu cầu”, không tạo mã yêu cầu giả, không xác nhận đơn hàng hoặc cuộc hẹn.
- Tệp tham khảo: tối đa ba PDF/JPG/PNG, mỗi tệp 10 MB, kiểm tra phía trình duyệt và có nút bỏ từng tệp. Tệp chưa hợp lệ không xóa các trường đã nhập hoặc những tệp hợp lệ đã chọn.
- Tệp chỉ được chọn cục bộ; **tên tệp** được đưa vào nội dung email. Mailto không tự đính kèm tệp, vì vậy hướng dẫn yêu cầu khách đính kèm lại trong email trước khi gửi. Không mô tả đây là tính năng upload. Khi bổ sung backend thật, cần quy trình tiếp nhận, kiểm tra và lưu tệp riêng như kế hoạch.
- Không tự gửi email hoặc tin nhắn. Nền tảng chỉ hỗ trợ khách chuẩn bị và tự thực hiện gửi.

## Kết nối vào website

- Các nút `data-request="quote"` trên toàn website chuyển sang P12. Nút trên chính P12 đưa khách tới biểu mẫu.
- Từ các nhóm sản phẩm, truyền nhóm đúng. Từ mẫu trong cửa sổ chi tiết, truyền mã mẫu và tra lại dữ liệu ảnh thật để điền tên. URL chỉ chứa nhóm và mã ảnh, không chứa thông tin cá nhân.
- Báo giá có liên kết riêng ở footer. Yêu cầu mẫu đã chuyển sang P13; tư vấn và danh sách mẫu tư vấn chuyển sang P14. Bộ xử lý quote.js được dùng chung với P13 qua mode sample và P14 qua mode consult.
- `qa-quote-link.mjs` kiểm tra hành vi điều hướng mới cho các bài QA cũ; các bài kiểm tra danh mục, Nhà máy, Về HotPrint, Liên hệ và theme đã được điều chỉnh từ kiểm tra modal báo giá sang trang P12.

## Thiết kế và tài nguyên

- Dùng bộ màu xanh tự nhiên/be/nâu đất; Playfair Display 600 và Be Vietnam Pro. Máy tính chia cột giới thiệu và biểu mẫu khoảng 35/65; điện thoại xếp dọc, trường nhập một cột và chữ nhập 16 px.
- Giữ nguyên ảnh thật, logo và hero Trang chủ. Không crop hoặc tạo lại ảnh đã chốt.
- Dùng lại nền giấy Imagegen đã duyệt `dist/assets/contact-paper-v1.webp`; không tạo thêm sản phẩm/ảnh nhà máy. Nền và prompt gốc được ghi trong `docs/contact-page.md`. Không cần sinh lại bitmap cho biểu mẫu; hình khối và biểu tượng dùng HTML/CSS/SVG.
- Nội dung: `build-quote.mjs`; thiết kế `dist/quote.css`; ngôn ngữ/kiểm tra/chuẩn bị email/tệp ở `dist/quote.js`. Điều hướng dùng chung ở `dist/app.js`.
- Bản thử noindex; chưa push hoặc deploy trong yêu cầu này.

## Kiểm tra hoàn tất

- `npm run build`, `npm run check`.
- `npm run test:quote`: 12 tổ hợp VI/EN × 1920/1440/1024/768/390/320 px; không tràn ngang hoặc lỗi JS/HTTP, đủ ba phần, các trường bắt buộc, nhóm chưa rõ, ngày quá khứ, email sai, mô tả ngắn.
- Kiểm tra đổi ngôn ngữ/quay lại giữ dữ liệu, chuẩn bị email đúng nội dung, sao chép và phương án clipboard bị chặn, tệp sai định dạng/quá 10 MB/quá ba tệp, bỏ tệp, điền mẫu thật, điều hướng từ sáu nhóm và các nhóm trang chung.
- Kiểm tra hồi quy sáu danh mục, Nhà máy, Về HotPrint, Liên hệ và Trang chủ/liên hệ đã đạt với hành vi báo giá mới. Chữ trên nền phẳng được kiểm tra tương phản riêng; đã xem desktop và mobile.
- Kết quả `qa/quote-report.json`, `qa/quote-contrast-audit.json`; bản chụp `qa/quote-*.png`. Kiểm tra không gửi email hoặc upload tệp.
