# P14 — Đặt lịch tư vấn

VI: `/dat-lich-tu-van/`. EN: `/en/request-a-consultation/`. Bản xem trước hoàn thành ngày 13/10/2026. Build chung tạo 14 trang × VI/EN = 28 đường dẫn.

## Ba phần theo kế hoạch

1. **Giới thiệu:** “Đề nghị lịch tư vấn cùng HotPrint”, giải thích đây là lịch mong muốn để hai bên thống nhất. Hotline, Zalo, gợi ý chuẩn bị nội dung, múi giờ của HotPrint và ảnh thật đội ngũ trong hoạt động tại công ty (032A5101). Không mô tả ảnh này là một buổi tư vấn thực tế.
2. **Biểu mẫu một trang:** liên hệ, chủ đề, nhóm bao bì/mẫu quan tâm, ghi chú, ngày và khoảng giờ mong muốn, múi giờ, hình thức gặp. Tài liệu nằm trong vùng mở rộng tùy chọn; không có wizard. Đồng ý dùng thông tin và tiếp tục chuẩn bị email.
3. **Hướng dẫn:** chuẩn bị nội dung, thống nhất thời gian/múi giờ và xác nhận hình thức/địa điểm. Có liên kết về trang Liên hệ.

## Trường và hành vi

- Bắt buộc: họ tên 2–100 ký tự, công ty, email hoặc điện thoại, chủ đề tư vấn và đồng ý sử dụng thông tin liên hệ. Không chọn sẵn chủ đề hoặc đồng ý.
- Tám chủ đề: cấu trúc/mẫu; vật liệu/hoàn thiện; thiết kế/tệp in; dự án; kỹ thuật/chất lượng; hồ sơ nhà cung cấp; đề nghị gặp trực tiếp; chủ đề khác/cần tư vấn.
- Nhóm bao bì, mẫu quan tâm, ghi chú tối đa 3.000 ký tự, ngày và giờ đều có thể để trống. Khách chưa có lịch cụ thể vẫn chuẩn bị được đề nghị.
- Múi giờ mặc định `Asia/Ho_Chi_Minh`, nhãn “Giờ Việt Nam — UTC+7”. Các múi giờ phổ biến đặt đầu danh sách, tiếp theo là các IANA zone trình duyệt hỗ trợ. Có `UTC`.
- Ngày tối thiểu và kiểm tra giờ đã qua được tính theo múi giờ khách chọn. Không chọn ngày quá khứ; giờ kết thúc cần có giờ bắt đầu và phải sau giờ bắt đầu trong cùng ngày. Nếu đã chọn hôm nay, giờ bắt đầu phải ở tương lai trong múi giờ đó.
- Độ lệch UTC của múi giờ quốc tế hiển thị rõ là **độ lệch hiện tại**. Email ghi IANA zone cùng ngày/giờ địa phương khách đề nghị để tránh gán một độ lệch hiện tại cho ngày khác khi có giờ mùa hè. Múi giờ Việt Nam/UTC có độ lệch cố định.
- Hình thức: Chưa xác định; điện thoại; trực tuyến; đề nghị gặp trực tiếp. Chọn trực tuyến mới hiện công cụ mong muốn. Chọn gặp trực tiếp mới hiện địa điểm và ghi chú địa điểm.
- Trụ sở/nhà máy sử dụng hai địa chỉ đang công bố đã được chủ website xác nhận giữ. Chọn địa điểm khác hoặc chưa rõ đều được; địa điểm cần HotPrint xác nhận. Khi chuyển hình thức, thông tin ẩn vẫn giữ để khách đổi lại nhưng không được đưa vào email của hình thức khác.
- Không tạo lịch trống, số chỗ còn lại, giờ làm việc, lời hứa phản hồi, tư vấn viên hoặc thư mời họp giả. Người dùng tự đề nghị giờ; HotPrint trao đổi xác nhận.

## Mẫu thật và ngữ cảnh điều hướng

- Nút tư vấn trên toàn website dẫn P14 theo ngôn ngữ đang xem; footer thêm liên kết riêng. Nút trên chính P14 đưa khách tới form.
- Từ Nhà máy: yêu cầu kỹ thuật chuyển chủ đề cấu trúc; yêu cầu chất lượng chuyển chủ đề kỹ thuật/chất lượng. Từ Về HotPrint: hồ sơ chuyển chủ đề hồ sơ. Từ Liên hệ: đề nghị gặp trực tiếp chọn chủ đề gặp và hình thức trực tiếp.
- Nút trao đổi danh sách mẫu mang các mã đã chọn sang P14. Chỉ tra mã tồn tại trong `HOTPRINT_PRODUCTS`, tối đa sáu, hiện ảnh gốc/name/id và cho bỏ từng mẫu. Khách có thể chủ động dùng danh sách đã lưu khi vào trang trực tiếp.
- URL chỉ chứa ngữ cảnh nhóm/mã mẫu/chủ đề/hình thức/địa điểm; không chứa dữ liệu cá nhân. Form không lưu tên, thông tin liên hệ hoặc ghi chú vào localStorage.
- Chuyển VI/EN giữ toàn bộ dữ liệu, ngày/giờ/múi giờ/hình thức, tệp và mẫu quan tâm. Tên mẫu tự động đổi ngôn ngữ; trường khách đã sửa thủ công giữ nguyên.

## Gửi đề nghị

Nút **Tiếp tục gửi qua email** chuẩn bị nội dung trong ứng dụng email để khách tự kiểm tra, đính kèm và gửi. Có mở lại email, sao chép và ô sao chép thủ công nếu clipboard không dùng được. Trạng thái chỉ là đã chuẩn bị email; chưa có hệ thống nhận lịch phía máy chủ. Không hiển thị đã nhận yêu cầu, mã yêu cầu hoặc đã đặt lịch thành công.

Tệp PDF/JPG/PNG tối đa ba tệp, mỗi tệp 10 MB. Chọn tệp chỉ ghi tên vào email, không upload hoặc tự đính kèm. Khách đính kèm lại trong email. Chuẩn bị hoặc gửi email không xác nhận cuộc hẹn; HotPrint cần xác nhận ngày, giờ, múi giờ và hình thức trước buổi trao đổi.

## Thiết kế và mã nguồn

- Dùng Natural Green / Warm Beige / Earthy Brown, Playfair Display 600 và Be Vietnam Pro. Máy tính chia cột giới thiệu/form; điện thoại một cột, chữ nhập 16 px, lỗi dưới trường và focus tới lỗi đầu tiên.
- Đường viền mảnh, nền giấy, biểu tượng lịch và khung ảnh thật nối tiếp P12/P13. Không thay ảnh hero Trang chủ, logo hoặc bất kỳ ảnh sản phẩm đã chốt.
- Dùng lại nền giấy trống `contact-paper-v1.webp` từ Imagegen; prompt gốc ở `contact-page.md`. Không cần sinh bitmap mới cho form hoặc vẽ lại sản phẩm/nhân sự.
- Sửa `build-consultation.mjs`; builder đọc bản P13 đã build, thêm nội dung và lịch, chạy sau `build-sample-request.mjs`. CSS chung `quote.css`, `sample-request.css`; riêng `consultation.css`. Bộ xử lý chung `quote.js` qua `mode: consult`. Điều hướng ở `app.js`.
- Bản thử noindex; chưa push hoặc deploy trong yêu cầu này.

## Kiểm tra

`npm run build`, `npm run check`, `npm run test:consultation`. Bài kiểm tra riêng bao gồm 12 tổ hợp VI/EN × 1920/1440/1024/768/390/320 px; ảnh, lỗi JS/HTTP, form, dữ liệu khi đổi ngôn ngữ, email, clipboard, mẫu thật/ngữ cảnh và ngày–giờ theo múi giờ với đồng hồ kiểm thử cố định. Các bài báo giá, yêu cầu mẫu và các trang có nút tư vấn được kiểm tra lại. Audit chữ trên nền phẳng không có lỗi tương phản; nền giấy và ảnh được xem trực tiếp.
