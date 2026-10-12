# P13 — Yêu cầu mẫu

VI: `/yeu-cau-mau/`. EN: `/en/request-a-sample/`. Bản xem trước hoàn thành ngày 13/10/2026. Build chung hiện tạo 13 trang × VI/EN = 26 đường dẫn.

## Ba phần theo kế hoạch

1. **Giới thiệu:** “Cùng xem và cảm nhận mẫu bao bì”, mô tả cấu trúc, vật liệu và hoàn thiện, hotline/Zalo, hướng dẫn khi chưa biết chọn mẫu. Hai ảnh thật 032A5293 và 032A5315 từ thư viện người dùng cung cấp, giữ nguyên hình và thương hiệu.
2. **Biểu mẫu một trang:** liên hệ, loại mẫu muốn trao đổi, nhóm bao bì, mẫu quan tâm và mục đích sử dụng. Số lượng mẫu, cách nhận, địa chỉ và tệp là tùy chọn. Có đồng ý sử dụng thông tin và chuẩn bị email.
3. **Hướng dẫn:** phân biệt mẫu tham khảo và mẫu theo dự án, giải thích cần trao đổi cấu trúc/khả năng chứa/nội dung in, cùng điều kiện nhận mẫu. Không đưa mẫu đã gửi yêu cầu thành một đơn hàng hoặc lô đang vận chuyển.

## Trường và lựa chọn

- Họ tên, công ty, email hoặc điện thoại, nhóm sản phẩm, loại mẫu và mục đích sử dụng là bắt buộc.
- Ba lựa chọn loại mẫu: Mẫu tham khảo; Mẫu theo dự án; Cần tư vấn. Không chọn sẵn. “Mẫu tham khảo” là đề nghị trao đổi, không tuyên bố mẫu đang có sẵn để giao ngay.
- Nhóm bao bì gồm sáu nhóm và Chưa rõ — cần tư vấn. Mẫu quan tâm có thể để trống khi chưa biết mẫu phù hợp.
- Mục đích dùng mẫu 10–3.000 ký tự. Khách có thể mô tả việc thử sản phẩm, đánh giá cấu trúc hoặc trao đổi phương án.
- Cách nhận: Cần trao đổi thêm; Đề nghị nhận trực tiếp; Mong muốn giao mẫu. Chọn giao mẫu mới hiện địa chỉ. Địa chỉ không bắt buộc, có thể bổ sung sau. Khi chuyển sang cách nhận khác, địa chỉ đã nhập được giữ trên trang nhưng không đưa vào email nếu không đề nghị giao mẫu.
- Số lượng mẫu và tệp là tùy chọn; không có MOQ, giá tự động hoặc cam kết miễn phí/miễn phí vận chuyển.

## Mẫu thật và danh sách quan tâm

- Nút yêu cầu mẫu từ cửa sổ sản phẩm truyền mã ảnh; trang tra lại dữ liệu thật, điền tên/nhóm và hiện ảnh để khách kiểm tra.
- Có thể nhận `models` gồm các mã mẫu hợp lệ, tối đa sáu; mã không có trong thư viện bị bỏ qua. Mọi ảnh lấy từ `/assets/products/`, không tạo lại bằng AI.
- Nếu khách đã lưu mẫu trong thư viện, có nút **Dùng các mẫu đã chọn trong thư viện**. Chỉ đưa các mẫu vào yêu cầu khi khách chủ động nhấn nút. Nhiều nhóm khác nhau được điền “Chưa rõ — cần tư vấn”.
- Có nút bỏ từng mẫu; tên/mã trong trường Mẫu quan tâm được cập nhật. Khách có thể sửa trường này bằng nội dung riêng; khi đó ảnh chọn tự động được bỏ để tránh hiển thị một danh sách không còn khớp.
- Chuyển VI/EN giữ dữ liệu nhập, checkbox, loại mẫu, cách nhận và tệp. Tên mẫu tự động được hiển thị theo ngôn ngữ mới; nội dung khách đã sửa thủ công giữ nguyên.
- Liên kết thư viện mở tab mới để khách xem mẫu mà vẫn giữ biểu mẫu đang nhập.

## Gửi và điều kiện nhận

- Nút **Tiếp tục gửi qua email** chuẩn bị nội dung để khách kiểm tra và gửi trong ứng dụng email. Có mở lại email, sao chép và ô sao chép thủ công.
- HotPrint cần xác nhận khả năng cung cấp, phạm vi mẫu, điều kiện, chi phí và cách nhận. Không hiển thị “Đã nhận yêu cầu mẫu”, mã yêu cầu giả, lịch giao hoặc trạng thái vận chuyển.
- Tệp PDF/JPG/PNG tối đa ba tệp, mỗi tệp 10 MB, dùng chung kiểm tra với P12. Tệp được chọn cục bộ để ghi tên vào email; khách cần đính kèm lại trong email. Chưa có upload/tiếp nhận phía máy chủ.
- Không lưu thông tin liên hệ/địa chỉ vào URL hoặc localStorage. Dữ liệu cá nhân chỉ tồn tại trong trang đang mở. Danh sách mẫu đã lưu là các mã ảnh đã có từ tính năng thư viện, không chứa thông tin khách.

## Thiết kế và mã nguồn

- Bộ màu xanh tự nhiên/be/nâu đất; Playfair Display và Be Vietnam Pro. Dùng cùng thiết kế và xử lý biểu mẫu P12, thêm lựa chọn loại mẫu, ảnh kiểm tra mẫu và cách nhận.
- Radio dùng điều khiển native, nhãn có diện tích nhấn rõ; lỗi đặt dưới trường. Điện thoại dùng một cột, chữ nhập 16 px.
- Thanh liên hệ nổi không hiện trên P13 để nút Báo giá không cạnh tranh với yêu cầu mẫu đang nhập. Hotline/Zalo vẫn có trong giới thiệu và footer.
- Nền giấy dùng lại `dist/assets/contact-paper-v1.webp`, tài nguyên Imagegen đã chốt. Prompt gốc trong `docs/contact-page.md`. Không sinh ảnh sản phẩm/nhân sự mới hoặc sửa hero Trang chủ.
- `build-sample-request.mjs` lấy cấu trúc P12 đã build rồi tạo bản P13 với nội dung/lựa chọn riêng; chạy sau `build-quote.mjs`. Không sửa HTML sinh ra trực tiếp.
- CSS chung `dist/quote.css`, phần riêng `dist/sample-request.css`. Bộ xử lý chung `dist/quote.js` dùng `mode: sample` để xử lý loại mẫu, mẫu đã chọn và địa chỉ; các ID q-/qp- được giữ để dùng chung. Điều hướng ở `dist/app.js`.
- Các nút `data-request="sample"` trên toàn website dẫn vào P13; nút báo giá dẫn P12. Tư vấn đã chuyển sang P14, xem `consultation-request.md`. Footer có liên kết Yêu cầu mẫu.
- Bản thử noindex; chưa push/deploy trong yêu cầu này.

## Kiểm tra hoàn tất

- `npm run build`, `npm run check`.
- `npm run test:sample-request`: 12 tổ hợp VI/EN × 1920/1440/1024/768/390/320 px; ba phần, không tràn ngang hoặc lỗi JS/HTTP, ảnh tải đủ.
- Kiểm tra trường bắt buộc/loại mẫu, nhóm cần tư vấn, địa chỉ không bắt buộc, giữ dữ liệu khi chuyển ngôn ngữ, loại địa chỉ khỏi email khi không chọn giao mẫu, chuẩn bị nội dung và sao chép dự phòng.
- Kiểm tra mẫu thật, bỏ mẫu, sửa tay, danh sách thư viện, mã không hợp lệ, chọn nhiều mẫu trên điện thoại và chuyển từ sáu nhóm/chi tiết mẫu/Trang chủ/Liên hệ/Về HotPrint.
- Kiểm tra hồi quy P12, thư viện sản phẩm, Nhãn dán decal, Liên hệ và Trang chủ đạt với điều hướng mẫu mới. Kiểm tra tương phản nền phẳng không phát hiện lỗi; đã xem desktop/mobile.
- Kết quả `qa/sample-request-report.json`, `qa/sample-request-contrast-audit.json`; ảnh `qa/sample-request-*.png`. Kiểm tra không gửi email hoặc upload tệp.
