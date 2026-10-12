# Product Atelier — thiết kế lại Tổng quan sản phẩm

Giữ năm phần P02 và mục tiêu khách mua hàng B2B. Mấu chốt thị giác là tờ giấy được gấp thành nơi trưng bày mẫu: sản phẩm thật nổi trên nền giấy, đường bế dẫn tới sáu nhóm, thư viện ảnh có nhiều góc nhìn và danh sách mẫu quan tâm.

Màu: forest #123E34, sage #DCE6D9, paper #F6F5EE, plum #633F52, graphite #263D35, clay #DCD3C4. Be Vietnam Pro dùng cho tiêu đề và nội dung; Times New Roman italic chỉ làm điểm nhấn một cụm từ; monospace cho mã ảnh.

Hero giữ khoảng 420 px desktop, tiêu đề rõ và ảnh sản phẩm chính trên sân khấu giấy. Danh mục sáu nhóm dùng ba cột/hai hàng, tên và công dụng bên cạnh ảnh thật, ngôn ngữ tấm giấy bế. Thư viện vẫn ba cột, 12 mẫu/trang, tìm kiếm và lọc giữ URL. Chọn mẫu để tư vấn chung tối đa 6 mẫu, không phải giỏ hàng hoặc so giá. Không thêm thống kê năng lực, khách hàng hoặc thông số chưa có nguồn.

Kiểm tra phương án: bỏ các số thứ tự trang trí không mang ý nghĩa, giảm chữ nhỏ và khung lặp, không tạo hình ảnh sản phẩm mới. Giữ mã ảnh và số bước quy trình vì có ý nghĩa. Hover hiện góc ảnh thứ hai khi có; nút xem chi tiết luôn dùng được bằng chạm/bàn phím.

Imagegen tích hợp: chỉ dùng nền trống giấy sage/ivory và bóng lá. Thử tách nền sản phẩm bằng Imagegen làm thay đổi nét in nên đã loại khỏi website. Hero dùng chính ảnh gốc với khung cắt CSS theo đường bao hộp; ảnh gốc đầy đủ vẫn ở cửa sổ chi tiết. Không đổi màu hoặc thương hiệu của ảnh sản phẩm.

Prompt nền (built-in image_gen): “Use case: photorealistic-natural. Asset type: empty photographic set for HotPrint packaging website, landscape 3:2. A real professional still-life photography BACKDROP ONLY, no product. Overhead three-quarter view of an architectural folded sheet of muted celadon green paper opening across a pale sage tabletop, one broad ivory handmade paper plane at lower left, very soft genuine out-of-focus leafy daylight shadows cast from outside the frame at top right. Quiet tactile fine paper fiber, long diagonal crease, a subtle warm ivory edge. Wide empty central and right foreground area to place a photograph of a gift box later in HTML. Art directed industrial paper craft, editorial quality, restrained fresh green and pale mint, believable natural studio photograph. Not fantasy, not CGI, not luxury gold, not marble. No text, logos, brands, packaging, boxes, cards, stationery objects, hands, people, visible plants, ornamental drawings or busy textures. Empty paper surfaces only. Soft bright daylight, grounded physical shadows. Entire image must be sharp enough as a 1600px web background.”

Nền cuối: dist/assets/atelier-paper.webp. Chỉ nền trang trí được tạo mới, không chứng minh vật liệu hay quy trình nhà máy.
