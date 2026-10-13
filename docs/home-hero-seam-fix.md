# Trang chủ: sửa mép nền và đường nét đứt — 13/10/2026

Theo yêu cầu của chủ website, ảnh hero gốc và mọi chi tiết sản phẩm, lá, hoa văn, ánh sáng được giữ nguyên.

- Bỏ giới hạn khung ảnh 1792px gây lộ hai dải nền be khác màu trên màn hình lớn. Khung ảnh phủ đủ chiều ngang, vẫn giữ đúng tỷ lệ 3:2, không crop/kéo giãn/phủ màu. Chiều cao hero desktop đi theo tỷ lệ ảnh để không cắt ảnh ở màn hình rộng.
- Chỉ xóa SVG `journey-tail` phía dưới hộp. Giữ đường quy trình chính, ba chấm mốc, đường đứng và nhãn 01/02/03.
- Nguồn: `dist/index.html` và `dist/natural-theme.css`. Build đồng bộ Trang chủ VI/EN/中文.
- Build, check và verify:deployment đạt; hash hai ảnh hero gốc không thay đổi.
- Kiểm tra trình duyệt 24 tổ hợp: ba ngôn ngữ, chiều rộng 2560/1920/1440/1201/1024/768/390/320. Không tràn ngang; ảnh đủ khung và đúng tỷ lệ; không còn dải nền bên; ba mốc quy trình vẫn đủ. Đã xem ảnh chụp desktop.
