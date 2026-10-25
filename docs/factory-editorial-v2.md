# Hồ sơ doanh nghiệp — giao diện đồng bộ, 25/10/2026

Yêu cầu: thiết kế lại toàn bộ phần trình bày, giữ nguyên toàn bộ nội dung hiện có. Áp dụng cho `/nha-may/`, `/en/factory/`, `/zh/factory/`.

`dist/factory-editorial.css` là lớp trình bày cuối cùng, được `apply-theme.mjs` gắn riêng cho ba trang này. Dùng lại màu xanh–kem–nâu, Be Vietnam Pro, nền giấy và lá có sẵn của các trang đã duyệt. Không thay nội dung ở `build-factory.mjs`, `factory-sla.mjs`, `factory-journal.mjs`, bản dịch hoặc mã xử lý.

- Hero hai cột: chữ và ảnh nhà máy nguyên khung trên lớp giấy, bóng mềm và họa tiết lá ngoài ảnh.
- Điều hướng sáu mục; bốn trụ cột có phân cấp chữ, số thứ tự và đường phân cách.
- Sáu công đoạn trên nền sage, giữ sơ đồ nét và tất cả mô tả/điểm kiểm tra.
- Bảng tám SLA với bảng nền sáng, cột cam kết rõ ràng, khối đối tác xanh và bốn chỉ số. Điện thoại chuyển thành các mục có nhãn, không thu gọn nội dung.
- Ba tab thiết bị, bốn ảnh sản xuất, ảnh chất lượng và thư viện tám ảnh theo cách trình bày album giấy; chú thích dưới ảnh, liên kết và cửa sổ xem đầy đủ giữ nguyên.
- Lời mời liên hệ và thẻ địa chỉ đồng bộ với các khối liên hệ khác. Hai nút cuối trang cao ít nhất 54 px.

Không thêm dữ liệu, cam kết, tên thiết bị, tệp PDF hay ảnh giả. Không sửa bitmap, danh tính nhân sự, logo hoặc sản phẩm. Ảnh sản xuất đã xử lý trước đây vẫn có chú thích và đường dẫn ảnh gốc.

Kiểm tra nội dung dùng fingerprint DOM chụp **trước** khi sửa giao diện: toàn bộ textContent của main, ảnh/srcset/alt, liên kết và hành động ở cả ba ngôn ngữ. Chỉ thay fingerprint khi chủ website cho phép thay nội dung. QA riêng `qa-factory-editorial.mjs` kiểm tra 18 tổ hợp 320–1920 px, ảnh tải, header 88/72 px, hai CTA bằng nhau, landscape và chữ phóng 200%. Chạy thêm `qa-factory-sla.mjs` và `qa-factory-journal.mjs` cho hành vi cũ.

Deploy chỉ cần cập nhật ba HTML và `factory-editorial.css`; các nền/ảnh đang sử dụng đã có sẵn. Không chép tài liệu hay kiểm thử vào Deploy.
