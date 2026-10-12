# P18 — Xác nhận gửi yêu cầu

VI: `/da-gui-yeu-cau/`. EN: `/en/request-status/`. Bản xem trước 13/10/2026. Website có 18 trang cố định × VI/EN và 6 bài × VI/EN = 48 đường dẫn.

## Ba phần theo kế hoạch, gắn với hệ thống hiện tại

1. **Trạng thái:** hero “Một bước nữa. Kiểm tra việc gửi.” Nhãn không có xác nhận tiếp nhận, hướng dẫn kiểm tra email và một tờ ghi chú cách liên hệ. Không dùng dấu tích thành công hoặc lời cảm ơn ngụ ý đã nhận.
2. **Thông tin đối chiếu:** loại yêu cầu nếu được mang từ form; trạng thái tiếp nhận chưa xác nhận; mã chưa được cấp; nơi kiểm tra việc gửi trong ứng dụng email. Mở trực tiếp không có ngữ cảnh sẽ có ba liên kết chọn form. Không có tên/email/nội dung/tệp khách.
3. **Bước tiếp theo:** kiểm tra email/đính kèm/gửi; làm rõ tiếp nhận qua liên hệ; cùng thống nhất báo giá, mẫu hoặc tư vấn. Nút xem sản phẩm, hotline có hỗ trợ máy tính, Zalo và các liên kết P16/P17/Liên hệ.

Đây là giao diện P18 và hướng dẫn kiểm tra việc gửi **đang dùng được với cơ chế email hiện tại**, không phải tính năng xác nhận máy chủ đã tiếp nhận. Kế hoạch yêu cầu chỉ hiển thị đã nhận/mã/tóm tắt sau khi máy chủ lưu thật. Backend/CRM và thông báo tiếp nhận chưa có; vì vậy bản này không hiển thị trạng thái thành công đó. Không tự thêm mã, người phụ trách, SLA, lịch hẹn, số đơn hoặc email xác nhận.

## Luồng từ P12/P13/P14

- Sau khi form hợp lệ và chuẩn bị email, vùng `qp-ready` có liên kết **Kiểm tra việc gửi yêu cầu**, mở thẻ mới để giữ dữ liệu đang nhập.
- URL chỉ có `type=quote|sample|consult`, tương ứng nhãn và gợi ý về phạm vi yêu cầu. Loại này là ngữ cảnh hiển thị, không phải bằng chứng đã gửi/đã nhận.
- Link chỉ có href khi form đã chuẩn bị hợp lệ; khi khách sửa nội dung, vùng ready ẩn và href bị gỡ. Mở lại sau khi chuẩn bị lại, hoặc đổi VI/EN, có đúng ngôn ngữ và type.
- Không tự chuyển khách khỏi form khi nhấn gửi; khách vẫn có nội dung, email và sao chép tại thẻ cũ. Link “Mở biểu mẫu mới nếu cần” chỉ là form trống; hướng dẫn quay lại thẻ cũ để xem bản đang soạn.
- Không truyền nội dung mailto/contact/message/files, không thêm cookie/sessionStorage/localStorage cho P18. Không liên kết trang này trong footer như một trang thành công chung.
- Các tham số `state`, `confirmed`, `code`, `requestId` hoặc type không hợp lệ không cấp quyền xác nhận. JS chỉ nhận ba type biết trước, bỏ các query khác; không dùng innerHTML từ URL. VI/EN giữ type và hash.
- Mọi trang P18 giữ `noindex,nofollow`, kể cả khi sau này các trang marketing được cho index.

## Thiết kế và tài nguyên

Natural Green/Warm Beige/Earthy Brown, Playfair Display 600 và Be Vietnam Pro. Layout hai cột hero, giấy sáng, nét email đơn giản SVG và đường chia mảnh. Phần đối chiếu thành một cột trên điện thoại, chữ đọc 16 px; CTA đủ diện tích nhấn, giảm chuyển động theo tùy chọn hệ thống.

Dùng lại nền giấy trống Imagegen `about-paper-v1.webp`, prompt gốc tại `about-hotprint.md`. Không cần bitmap mới: biểu tượng email và trạng thái được dựng trong mã. Không thay ảnh thật, logo hoặc hero Trang chủ đã chốt.

## Mã nguồn

- `build-request-status.mjs`: ba phần, dữ liệu loại yêu cầu/VI/EN; build sau P17, trước áp dụng theme.
- `dist/request-status.css`: thiết kế responsive. `dist/request-status.js`: chọn type biết trước và giữ liên kết ngôn ngữ; không xử lý tiếp nhận.
- `build-quote.mjs`: thêm link trong vùng ready; P13/P14 kế thừa. `dist/quote.js`: tạo/gỡ/cập nhật link theo trạng thái chuẩn bị. Logic kiểm tra và nội dung email được giữ.
- `dist/app.js`: title/lang route P18; đổi ngôn ngữ mở cùng trang. `verify-site.mjs` cập nhật 48 đường dẫn.

## Kiểm tra

Build/check/verify đủ 48 trang, 36 mẫu thật, tài nguyên và hash hero. `npm run test:request-status`: 12 tổ hợp VI/EN × 1920/1440/1024/768/390/320 px; ba phần, không tràn ngang, noindex, sáu form dẫn đúng type và giữ dữ liệu, thay nội dung vô hiệu link cũ, ngôn ngữ, query giả không tạo success/mã, links mẫu/sản phẩm/điều kiện và modal gọi điện/focus. Kiểm tra lại quote/sample-request/consultation vì có thêm link dùng chung. Audit nền phẳng không có lỗi tương phản, screenshot desktop/mobile được xem trực tiếp.

Báo cáo/screenshot: `qa/request-status-report.json`, `qa/request-status-*.png`, `qa/request-status-contrast-audit.json`. Chưa push/deploy trong yêu cầu thiết kế này.

## Khi bổ sung backend

Trạng thái đã tiếp nhận chỉ được bật từ kết quả tiếp nhận do máy chủ xác minh, sau lưu thành công, với mã và tóm tắt thực. Không dùng query hoặc localStorage làm bằng chứng. Cần thiết kế quyền truy cập bản ghi và tránh dữ liệu cá nhân trong URL; email xác nhận tiếp nhận phải phân biệt với xác nhận lịch/báo giá/hợp đồng. Nếu không có bản ghi hợp lệ, tiếp tục dùng hướng dẫn không có xác nhận như bản hiện tại.
