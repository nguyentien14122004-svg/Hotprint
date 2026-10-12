# Kế hoạch xây dựng website HotPrint

## Bước 1 Đặc tả nội dung giao diện và chức năng

**Cập nhật thiết kế mới nhất:** chủ website chọn bộ màu Natural Green #5E7D5A, Warm Beige #E7DFD1, Earthy Brown #8A6A55 cho toàn website. Xem `natural-colour-theme.md` để biết vai trò màu, sắc độ chữ và cách áp dụng. Các mô tả màu cũ trong tài liệu này là cơ sở giai đoạn trước; nội dung, cấu trúc và chức năng vẫn theo kế hoạch.

Tài liệu dành cho chủ website và đội triển khai. Cơ sở thiết kế là mẫu đã được chốt ngày 11 tháng 10 năm 2026: tiêu đề lớn “Ý tưởng phẳng. Ấn tượng đa chiều.”, hình bao bì chuyển từ bản trải phẳng sang hộp hoàn chỉnh, danh mục dạng khuôn hộp, ảnh nhà máy và các nút liên hệ.

Mục tiêu là nâng cấp thương hiệu HotPrint, giới thiệu năng lực sản xuất và tiếp nhận cơ hội bán hàng từ bộ phận mua hàng của doanh nghiệp. Website phục vụ tiếng Việt và tiếng Anh, ưu tiên trải nghiệm trên máy tính và có bố cục riêng phù hợp cho điện thoại.

**Quyết định cốt lõi:** khách xem sản phẩm và năng lực, sau đó trao đổi trực tiếp để được báo giá theo yêu cầu. Giá bán, máy tính giá, biểu mẫu báo giá nhiều bước và thanh toán trực tuyến không nằm trong phạm vi đã chọn.

Phiên bản 1.0 | Ngày lập 11 tháng 10 năm 2026 | Thương hiệu HotPrint

<!-- page -->

# Mục lục

[TOC]

<!-- page -->

# 1 Cách sử dụng tài liệu và phạm vi Bước 1

## 1 1 Kết quả cần đạt

Bước 1 xác định website có những trang nào, mỗi trang có bao nhiêu phần, nội dung gì, nút nào và hành vi gì. Tài liệu cũng quy định dữ liệu cần chuẩn bị, cách tiếp nhận yêu cầu, công việc quản trị, tiêu chí nghiệm thu và trình tự triển khai. Đây là cơ sở để dựng thiết kế chi tiết và lập trình ở các bước tiếp theo.

Một “phần” là một vùng nội dung lớn trên trang. Header là đầu trang dùng để điều hướng; footer là chân trang dùng để liên hệ và truy cập thông tin bổ sung. Các trang con dùng chung header và footer, còn số phần được ghi ở từng trang là số vùng nội dung nằm giữa hai thành phần này.

## 1 2 Các yêu cầu đã chốt

- Giữ logo HotPrint, tên công ty và thông tin cốt lõi; thay đổi toàn diện cách trình bày, màu sắc, ảnh và trải nghiệm.
- Dùng mẫu đính kèm làm chuẩn hình ảnh. Sáu vùng của trang chủ được giữ đúng thứ tự và tinh thần, không chuyển sang mẫu chữ lớn ở giữa của phương án khác.
- Sáu nhóm sản phẩm được tiếp cận bình đẳng: hộp giấy mềm, hộp carton in màu, hộp cứng cao cấp, túi giấy, nhãn dán decal, nhãn hàng và catalog.
- Có chuyển đổi VI và EN rõ ràng; bản tiếng Anh có nội dung được biên tập cho khách doanh nghiệp.
- Khách có thể gọi điện, nhắn Zalo, gửi yêu cầu báo giá, đề nghị lịch tư vấn hoặc yêu cầu mẫu thử.
- Báo giá riêng sau khi trao đổi. Website không hiển thị giá tự động và không biến quy trình gửi yêu cầu thành nhiều màn hình.
- Chủ website có thể tự sửa nội dung, thay ảnh, thêm sản phẩm và theo dõi yêu cầu trong khu vực quản trị.

## 1 3 Cách đọc để triển khai

Đọc chương 2 đến 4 để hiểu cấu trúc và quy tắc chung. Chương 5 mô tả từng vùng trang chủ. Chương 6 đến 10 mô tả các trang con. Chương 11 đến 15 quy định hành vi biểu mẫu, bản song ngữ, nội dung và quản trị. Chương 16 đến 20 dùng để xây dựng, kiểm tra và đưa website vào vận hành.

Các kích thước, màu và thời gian trong tài liệu là thông số đề xuất để dựng bản thiết kế tiếp theo. Chúng được tinh chỉnh bằng kiểm tra giao diện thực tế. Mọi chính sách kinh doanh như thời gian phản hồi, phí mẫu, số lượng tối thiểu và lịch làm việc phải do HotPrint xác nhận trước khi xuất bản.

## 1 4 Phân biệt bán hàng trực tuyến và giao dịch

Trong phạm vi này, bán hàng trực tuyến là trưng bày giải pháp, cho khách chọn mẫu tham khảo, cung cấp thông tin sản xuất và gửi yêu cầu tới HotPrint. Đơn hàng, báo giá, hợp đồng và thanh toán được xử lý trực tiếp với khách theo quy trình công ty. Nếu sau này cần cổng theo dõi đơn hàng hoặc thanh toán, đó là một giai đoạn riêng.

# 2 Mẫu được chọn và định hướng thiết kế

![Mẫu thiết kế đã được chốt](assets/mau-da-chot.png)

**Hình 1.** Mẫu người dùng đã lựa chọn. Hình bao bì “Trà Việt” và ảnh nhà máy trong bản mẫu là định hướng bố cục; tài nguyên xuất bản phải là hình sản phẩm và nhà máy đã được HotPrint duyệt.

## 2 1 Những yếu tố tạo nên bản sắc của mẫu

Ấn tượng chính đến từ một hành trình nhìn thấy được: hình bao bì trải phẳng, hình đang gấp và hình thành phẩm đặt trên cùng một mặt phẳng sáng. Đường nét đứt cam nối ba trạng thái, sau đó tiếp tục dẫn mắt xuống danh mục và vùng liên hệ. Câu chuyện này phù hợp với công việc của một nhà sản xuất bao bì vì thể hiện quá trình hiện thực hóa ý tưởng.

Thiên nhiên được biểu đạt bằng sắc xanh sâu, bề mặt giấy, ánh sáng cửa sổ và bóng lá. Yếu tố này tạo cảm giác gần gũi và có chất liệu, không tự động trở thành lời khẳng định về chứng nhận môi trường hay khả năng tái chế của tất cả sản phẩm.

## 2 2 Hệ màu đề xuất

| Vai trò | Màu đề xuất | Cách dùng |
|---|---|---|
| Xanh chủ đạo | #0B3B32 | Chữ tiêu đề, nút ở header, nền nhà máy |
| Cam hành động | #F36B21 | Đường dẫn, mũi tên và điểm nhấn chính |
| Xanh xám rất nhạt | #E8EFF0 | Nền danh mục và liên hệ |
| Giấy ngà | #F5EDDC | Các mặt khuôn hộp và nền ảnh phụ |
| Mực chữ | #142B26 | Nội dung, nhãn và thông số |
| Trắng | #FFFFFF | Nền biểu mẫu, khoảng nghỉ và chữ trên nền tối |

Logo dùng đúng màu trong tệp gốc. Chữ nhỏ trên nút cam dùng màu xanh rất đậm để bảo đảm dễ đọc; nếu muốn chữ trắng như bản mẫu, phải chọn sắc cam đủ đậm và kiểm tra tương phản trước khi chốt. Cam sáng có thể giữ cho đường dẫn và các chi tiết trang trí.

## 2 3 Chữ khoảng cách và hình khối

- Chọn Be Vietnam Pro làm phương án chữ chính vì có bộ dấu tiếng Việt và hình chữ phù hợp tiêu đề đậm. Kiểm tra bản quyền sử dụng và tải tệp từ nguồn chính thức ở bước triển khai.
- Tiêu đề trang chủ trên máy tính khoảng 76–104 px, đậm 700–800, khoảng cách dòng 1,02–1,10. Trên điện thoại khoảng 38–48 px và được ngắt dòng chủ động.
- Tiêu đề phần khoảng 36–48 px trên máy tính; 28–34 px trên điện thoại. Nội dung 16–18 px, khoảng cách dòng 1,5–1,65.
- Nội dung trong khung rộng tối đa khoảng 1280 px, lề 48–64 px ở màn hình lớn; lề 20 px ở điện thoại. Dùng nhịp cách nhau 8, 16, 24, 32, 48, 64 và 96 px.
- Nút bo tròn dạng viên thuốc, cao 48–52 px. Biểu tượng nét mảnh đồng nhất; tránh dùng emoji làm biểu tượng điều hướng.

## 2 4 Quy tắc nghệ thuật và chuyển động

Ảnh là phần trung tâm của thiết kế. Ưu tiên ảnh thật, giữ chi tiết vật liệu, ánh sáng có hướng và màu nhất quán. Không dùng cùng một ảnh phóng to cho mọi trang. Các kỹ thuật mô phỏng khuôn hộp phải có cấu trúc hợp lý và không được tạo cảm giác đây là bằng chứng về máy móc hoặc sản phẩm đang có khi thực tế chưa có.

Chuyển động nhẹ giúp kể câu chuyện: đường dẫn cam hiện dần và ba điểm “Bản thiết kế”, “Nếp gấp”, “Thành phẩm” xuất hiện theo thứ tự. Bản tĩnh phải đầy đủ ngay cả khi tắt chuyển động; không bắt khách xem hết hoạt cảnh mới được nhấn nút. Không khóa cuộn trang, không tự phát video có âm thanh.

# 3 Cấu trúc toàn bộ website

## 3 1 Quy mô đề xuất cho lần ra mắt

Website gồm **18 trang cố định cho mỗi ngôn ngữ**, trong đó 17 trang nội dung công khai và 1 trang xác nhận gửi yêu cầu không đưa vào kết quả tìm kiếm. Ngoài ra có một mẫu trang chi tiết sản phẩm, một mẫu bài viết và một giao diện báo lỗi 404 dùng lại cho các URL tương ứng.

Đề xuất đưa lên 12–18 mẫu sản phẩm tiêu biểu, tương đương 2–3 mẫu cho mỗi nhóm, và 6 bài kiến thức được biên tập kỹ. Các sản phẩm và bài viết hiện hữu khác được kiểm kê để giữ, chỉnh sửa hoặc chuyển hướng; số lượng trên là gói nội dung ưu tiên, không phải giới hạn nhập dữ liệu. Nếu có đủ 18 mẫu và 6 bài, một bản ngôn ngữ có 42 URL nội dung gồm 18 trang cố định và 24 trang động; hai ngôn ngữ có tối đa 84 URL tương ứng, không tính trang 404.

![Sơ đồ các trang và đường đi của khách](assets/so-do-website.png)

## 3 2 Danh sách 18 trang cố định

| Mã | Trang | Đường dẫn VI đề xuất | Phần nội dung |
|---|---|---|---|
| P01 | Trang chủ | / | 6 vùng gồm header và footer |
| P02 | Tổng quan sản phẩm | /san-pham/ | 5 phần |
| P03 | Hộp giấy mềm | Giữ /danh-muc/hop-giay-mem/ nếu phù hợp | 6 phần |
| P04 | Hộp carton in màu | /danh-muc/hop-carton-in-mau/ | 6 phần |
| P05 | Hộp cứng cao cấp | /danh-muc/hop-cung-cao-cap/ | 6 phần |
| P06 | Túi giấy | /danh-muc/tui-giay/ | 6 phần |
| P07 | Nhãn dán decal | /danh-muc/nhan-dan-decal/ | 6 phần |
| P08 | Nhãn hàng và catalog | /danh-muc/nhan-hang-catalog/ | 6 phần |
| P09 | Nhà máy | /nha-may/ | 7 phần |
| P10 | Về HotPrint | Giữ /ve-chung-toi/ | 6 phần |
| P11 | Liên hệ | Giữ /lien-he/ | 4 phần |
| P12 | Yêu cầu báo giá | /yeu-cau-bao-gia/ | 3 phần |
| P13 | Yêu cầu mẫu | /yeu-cau-mau/ | 3 phần |
| P14 | Đặt lịch tư vấn | /dat-lich-tu-van/ | 3 phần |
| P15 | Kiến thức bao bì | /kien-thuc/ hoặc giữ URL tin tức | 4 phần |
| P16 | Chính sách riêng tư | /chinh-sach-rieng-tu/ | 5 mục nội dung |
| P17 | Điều kiện gửi yêu cầu | /dieu-kien-gui-yeu-cau/ | 5 mục nội dung |
| P18 | Xác nhận gửi yêu cầu | /da-gui-yeu-cau/ | 3 phần |

Đường dẫn là đề xuất cho cấu trúc mới. Trước khi thay đổi, phải lập bảng toàn bộ URL cũ và giữ URL có giá trị tìm kiếm khi có thể; URL thay đổi phải có chuyển hướng 301 tới nội dung tương ứng. Không đưa tất cả URL cũ về trang chủ.

## 3 3 Điều hướng chính và phụ

Header giữ ba mục giống mẫu: **Sản phẩm**, **Nhà máy**, **Về HotPrint**. Bên phải là **VI | EN** và **Yêu cầu báo giá**. Logo trở về trang chủ. Mục Sản phẩm mở menu gồm tổng quan và sáu nhóm; liên kết tổng quan sản phẩm nằm riêng trong menu, tránh một cú nhấn có hai nghĩa.

Liên hệ, kiến thức, yêu cầu mẫu và đặt lịch được đặt ở footer và trong các vùng nội dung phù hợp. Cách tổ chức này giữ header gọn nhưng mọi trang đều có thể tới được trong một hoặc hai lần nhấn. Danh mục trên trang chủ cũng liên kết trực tiếp đến sáu trang nhóm sản phẩm.

## 3 4 Ba hành trình cần phục vụ

**Khách đã biết loại bao bì:** Google hoặc mạng xã hội → trang nhóm hoặc chi tiết → ảnh và thông tin phù hợp → Yêu cầu báo giá với loại sản phẩm đã được điền sẵn → xác nhận → nhân sự HotPrint tiếp nhận.

**Khách đang đánh giá nhà cung cấp:** trang chủ → Nhà máy → quy trình, ảnh thật, tài liệu năng lực → đề nghị lịch tư vấn hoặc trao đổi trực tiếp. Chứng nhận và thông số chỉ hiện khi có tài liệu được duyệt.

**Khách có ý tưởng nhưng chưa biết cấu trúc:** trang chủ → Chọn hình thái → xem ví dụ → Yêu cầu mẫu hoặc báo giá → gửi mô tả và tệp tham khảo tùy chọn. Biểu mẫu luôn có lựa chọn “Cần tư vấn lựa chọn”.

# 4 Thành phần giao diện dùng chung

## 4 1 Header và menu Sản phẩm

Header cao khoảng 88–100 px ở đầu trang lớn. Khi cuộn xuống, có thể thu về 72–80 px trên nền sáng đặc để chữ rõ hơn. Vùng ảnh nền ở đầu trang không được làm logo hay menu khó nhìn. Header dính ở trên có khoảng bù để không che tiêu đề hoặc mục được cuộn tới.

Menu Sản phẩm là bảng gọn hai cột, có bảy liên kết chữ và biểu tượng nhẹ. Khách mở bằng nhấn; di chuột chỉ là tiện ích bổ sung. Menu hỗ trợ phím Enter, Space, Escape và có trạng thái mở rõ ràng. Nhấn ra ngoài sẽ đóng. Menu không chứa ảnh lớn làm tăng thời gian tải.

Trên điện thoại, header cao 64–72 px gồm logo bên trái, lựa chọn ngôn ngữ gọn và nút Menu bên phải. Menu mở một bảng phủ chứa ba mục chính, sáu nhóm và nút báo giá. Có nút Đóng rõ ràng; khi đóng, điểm chọn bàn phím trở lại nút Menu.

## 4 2 Nút hành động và trạng thái

| Thành phần | Trạng thái thường | Khi tương tác | Sau khi nhấn |
|---|---|---|---|
| Nút chính | Nền xanh hoặc cam đậm, nhãn rõ | Tối hơn nhẹ; viền chọn bàn phím | Mở trang hoặc gửi đúng thao tác |
| Nút phụ | Nền giấy ngà hoặc viền xanh | Đổi sắc nền nhẹ | Mở thông tin hoặc liên hệ |
| Liên kết chữ | Chữ xanh và mũi tên nếu cần | Gạch chân rõ | Mở URL cùng ngôn ngữ |
| Ô nhóm sản phẩm | Cả ô có thể nhấn | Đường viền và mũi tên đổi sắc | Mở trang nhóm đã chọn |
| Gửi biểu mẫu | Nhãn theo yêu cầu cụ thể | Hiện “Đang gửi” và chặn nhấn lặp | Chỉ báo thành công sau khi máy chủ lưu |

Các vùng có thể nhấn trên điện thoại tối thiểu 44 × 44 px. Nhãn chữ đi cùng biểu tượng ở hành động quan trọng; không chỉ dùng mũi tên hoặc biểu tượng điện thoại mà thiếu ngữ nghĩa. Nút đang gửi không được tiếp tục tạo nhiều yêu cầu trùng.

## 4 3 Footer và liên hệ nổi

Footer dùng logo nhỏ, tên pháp lý, hotline, email; thêm hai cột liên kết gọn trên máy tính và nhóm có thể mở trên điện thoại. Có liên kết Chính sách riêng tư và Điều kiện gửi yêu cầu. Địa chỉ, mã số thuế và liên kết bản đồ được lấy từ trường quản trị dùng chung sau khi xác nhận thông tin hiện hành.

Trên máy tính không cần một cụm năm nút nổi che ảnh. Sau khi khách rời phần mở đầu, có thể hiện một nút Zalo nhỏ ở góc dưới. Trên điện thoại đề xuất thanh dưới gồm “Gọi”, “Zalo”, “Báo giá”; chỉ hiện sau phần mở đầu và được ẩn khi bàn phím hoặc biểu mẫu đang mở. Trang phải có khoảng đệm để thanh này không che nội dung cuối.

## 4 4 Tìm kiếm và các thành phần phụ

Tìm kiếm tập trung ở trang tổng quan sản phẩm và trang kiến thức, không thêm biểu tượng tìm kiếm ở header trong phiên bản đầu. Breadcrumb trên trang con cho biết vị trí và có thể quay lại cấp trên. Thông báo thành công, lỗi, trạng thái trống và ảnh lỗi phải có giao diện thống nhất.

# 5 Đặc tả từng vùng của trang chủ

## 5 1 Tổng thể sáu vùng

Trang chủ có sáu vùng theo mẫu đã chốt. Header, phần mở đầu và ảnh hành trình được phối hợp thành một bố cục liên tục; danh mục dạng khuôn hộp nối tiếp bên dưới, sau đó là nhà máy, hành động liên hệ và footer. Không chèn một dãy chứng nhận, nhận xét hay bảng sản phẩm khác giữa các vùng này trong lần dựng đầu.

![Sơ đồ bố cục trang chủ trên máy tính và điện thoại](assets/trang-chu-wireframe.png)

**Hình 2.** Minh họa vị trí nội dung và nút. Sơ đồ mô tả thứ tự và cách chuyển bố cục, không phải bản thiết kế hình ảnh cuối cùng.

| Vùng | Nội dung nhìn thấy | Nút chính | Kích thước định hướng trên máy tính |
|---|---|---|---|
| H01 | Logo, menu, VI và EN | Yêu cầu báo giá | Cao 88–100 px |
| H02 | Tiêu đề, lời giới thiệu, 3 trạng thái bao bì | Yêu cầu báo giá | Khoảng 700–850 px kể cả ảnh |
| H03 | Chọn hình thái và sáu ô khuôn hộp | Sáu liên kết nhóm | Khoảng 440–560 px |
| H04 | Ảnh nhà máy và câu giới thiệu | Khám phá nhà máy | Khoảng 320–420 px |
| H05 | Biến ý tưởng thành bao bì và 4 cách liên hệ | Yêu cầu mẫu | Khoảng 180–240 px |
| H06 | Logo, công ty, hotline, email, liên kết phụ | Gọi hoặc email | Khoảng 200–280 px |

Tại màn hình 1440 × 900, khách cần nhìn thấy header, tiêu đề, CTA và phần lớn ảnh hành trình ngay khi vào trang. Độ cao tổng trang dự kiến khoảng 2000–2450 px, phụ thuộc độ dài tiếng Anh, footer và tỷ lệ ảnh đã chọn. Đây là khung dựng, không phải số pixel bắt buộc bất kể nội dung.

## 5 2 H01 Đầu trang

**Nội dung:** logo gốc, “Sản phẩm” có dấu mở menu, “Nhà máy”, “Về HotPrint”, “VI | EN”, nút xanh “Yêu cầu báo giá” có mũi tên. Logo có khoảng trống xung quanh, không kéo giãn và không làm mất dòng ISO trong tệp gốc đã duyệt.

**Bố cục:** đặt logo khoảng 190–220 px rộng trên máy tính. Menu nằm giữa; ngôn ngữ và CTA nằm bên phải. Nền ảnh tự nhiên có thể chạy phía dưới header nhưng vùng sau menu phải đủ sáng. Khi thu gọn trên điện thoại, logo khoảng 130–155 px, menu chuyển sang bảng mở.

**Hành vi:** logo về trang chủ; Nhà máy tới P09; Về HotPrint tới P10; báo giá tới P12. Khi nhấn EN, khách chuyển tới bản tiếng Anh tương ứng, giữ loại sản phẩm hoặc yêu cầu đang chọn khi có thể. Nhấn VI khi đã ở bản VI không tải lại trang một cách thừa.

**Dữ liệu cần chuẩn bị:** logo bản SVG hoặc PNG độ phân giải cao; bảng nhãn menu VI và EN; danh sách URL theo ngôn ngữ; URL đích báo giá. Chỉ chỉnh logo bằng thay tệp được duyệt, không tự vẽ lại bằng hình AI.

**Nghiệm thu:** menu không che hoặc đè lên tiêu đề; tất cả mục nhấn được; không có mục “#” vô tác dụng; logo rõ ở 375 px và 1440 px; nút báo giá không bị rơi dòng.

## 5 3 H02 Tiêu đề và hành trình từ phẳng đến thành phẩm

**Nội dung đề xuất:** tiêu đề H1 “Ý tưởng phẳng. Ấn tượng đa chiều.”; đoạn giới thiệu “Từ cấu trúc đến thành phẩm, tạo nên bao bì mang dấu ấn riêng.”; nút “Yêu cầu báo giá”. Ba nhãn trong ảnh là “01 Bản thiết kế”, “02 Nếp gấp”, “03 Thành phẩm”.

**Bố cục máy tính:** tiêu đề lớn ở phía trái và phía trên; đoạn dẫn cùng CTA ở dưới tiêu đề. Hình trải phẳng nằm ở góc trái phía dưới, hộp đang gấp ở giữa, hộp thành phẩm ở phải. Khoảng sáng phía sau chữ được xử lý trước khi đặt chữ; không đổ bóng chữ dày để cứu một ảnh nền rối.

**Xử lý tài nguyên:** làm một bộ ảnh hoặc dựng hình kỹ thuật của cùng một sản phẩm thật ở ba trạng thái. Nếu chưa có quyền dùng sản phẩm “Trà Việt”, chọn một mẫu riêng đã được HotPrint duyệt và giữ nguyên nguyên tắc ba trạng thái. Tệp hình tách riêng với chữ và nút; không dùng toàn bộ ảnh chụp bản mẫu làm nền chứa sẵn menu và tiêu đề.

**Bố cục điện thoại:** chữ nằm trên nền sáng trước, CTA ngay bên dưới; ảnh ba trạng thái chuyển thành một khung rộng bên dưới với nhãn HTML tương ứng. Giữ cả ba trạng thái có thể đọc và không crop mất bản phẳng hoặc thành phẩm. Nếu tỷ lệ quá nhỏ, dùng ba khung ảnh xếp dọc ngắn; không yêu cầu kéo ngang mới xem được trạng thái thứ ba.

**Chuyển động:** ở phiên bản đầu, dùng ảnh tĩnh tối ưu và đường cam dạng SVG. Có thể cho nét đứt hiện trong 600–900 ms sau khi ảnh sẵn sàng. Khi người dùng giảm chuyển động, tất cả nét và nhãn xuất hiện ngay. Không cần 3D tương tác hoặc video nặng để đạt hiệu quả của mẫu.

**Nút và chức năng:** Yêu cầu báo giá tới P12, trường nguồn ghi nhận là Trang chủ. Ba nhãn là nội dung mô tả, không có hình nút nếu không có hành động. Nếu bổ sung liên kết tìm hiểu quy trình sau này, phải có nhãn rõ thay vì khiến cả ảnh có vẻ nhấn được.

**Nghiệm thu:** không có lỗi dấu tiếng Việt; không crop hộp tại mép; CTA được đọc và nhấn trước khi tải xong ảnh; tiêu đề đủ tương phản; hình không nhảy vị trí trong lúc tải. Nội dung EN được thiết kế lại ngắt dòng, không thu chữ quá nhỏ để nhét vừa bố cục VI.

## 5 4 H03 Chọn hình thái của bạn

**Nội dung:** tiêu đề “Chọn hình thái của bạn.” và sáu nhóm. Mỗi nhóm có biểu tượng thể hiện đúng cấu trúc, tên nhóm và mũi tên cam. Không đưa giá, số lượng hàng tồn hoặc nút Mua ngay vào các ô.

**Bố cục máy tính:** một tấm khuôn hộp trải phẳng chạy ngang. Sáu vùng mặt chính có độ rộng tương đương, nền giấy ngà và đường gấp cam nét đứt. Phần tai gấp là trang trí; vùng nhấn nằm trên mặt chính, không theo các tai nhọn khó nhấn. Tiêu đề ở trên trái. Đường dẫn từ hero kết thúc hoặc nối xuống có chủ ý, không vẽ lặp qua chữ.

**Bố cục điện thoại:** chuyển sáu nhóm thành lưới hai cột ba hàng. Mỗi ô giữ nét gấp và một chi tiết tai hộp nhỏ để duy trì bản sắc, nhưng không thu cả khuôn ngang xuống 375 px. Tên nhóm được phép xuống hai dòng, không cắt bằng dấu ba chấm. Ở 320 px có thể chuyển một cột nếu chữ và vùng chạm bị chật.

| Thứ tự | Tên hiển thị | Ý nghĩa biểu tượng | Đích đến |
|---|---|---|---|
| 01 | Hộp giấy mềm | Hộp giấy gấp có nắp mở | P03 |
| 02 | Hộp carton in màu | Hộp carton và các mặt gấp | P04 |
| 03 | Hộp cứng cao cấp | Hộp cứng mở nắp | P05 |
| 04 | Túi giấy | Túi có quai | P06 |
| 05 | Nhãn dán decal | Cuộn hoặc tờ nhãn | P07 |
| 06 | Nhãn hàng & catalog | Thẻ và ấn phẩm mở trang | P08 |

**Hành vi:** toàn bộ mặt chính của ô là một liên kết duy nhất. Di chuột làm mũi tên dịch tối đa 4 px và đường viền đậm hơn; nhấn mở trang nhóm cùng ngôn ngữ. Người dùng bàn phím đi qua sáu ô theo thứ tự trái sang phải rồi trên xuống dưới.

**Nghiệm thu:** cả sáu nhóm xuất hiện mà không cần mở menu phụ; biểu tượng cùng nét và kích thước quang học; không có nhóm nổi bật hơn chỉ vì ô lớn hoặc ảnh đẹp hơn; các tai gấp không gây tràn ngang trang.

## 5 5 H04 Được hiện thực hóa tại nhà máy HotPrint

**Nội dung:** câu “Được hiện thực hóa tại nhà máy HotPrint.” và liên kết “Khám phá nhà máy”. Một ảnh rộng cho thấy hoạt động thực tế, con người và bao bì đang được xử lý. Phần này cung cấp tín hiệu về năng lực, không gánh toàn bộ thông tin kỹ thuật.

**Bố cục:** ảnh nằm toàn chiều ngang vùng; phía trái phủ xanh đậm đủ để đặt chữ trắng, phía phải giữ ảnh rõ. Phải có lớp nền đặc dự phòng sau chữ nếu ảnh thay đổi. Tỷ lệ ảnh khoảng 3,2:1 đến 4:1 trên máy tính; trên điện thoại khoảng 4:3 với chữ đặt bên trên hoặc trong một vùng xanh riêng.

**Ảnh cần chọn:** từ thư mục Hình nhà máy, ưu tiên ảnh có thao tác rõ, đồng phục thương hiệu và dây chuyền thật. Chọn người, thiết bị và tình trạng vệ sinh đúng thực tế; không dùng ảnh nhà máy do AI tạo làm bằng chứng. Nếu ảnh thật khác mẫu, thay ảnh nhưng giữ tỷ lệ và bố cục.

**Hành vi:** cả liên kết chữ và nút có mũi tên đều tới P09; không đặt một nút mũi tên thứ hai không có nhãn. Nếu dùng video, chỉ hiện nút Xem video khi đã có video thật, có phụ đề và trình phát được kiểm tra.

**Nghiệm thu:** không che khuôn mặt chính bằng chữ hoặc gradient quá dày; ảnh không vỡ trên màn hình lớn; nút tới đúng trang; thông tin trong ảnh không để lộ tài liệu riêng của khách.

## 5 6 H05 Biến ý tưởng thành bao bì

**Nội dung:** tiêu đề hai dòng “Biến ý tưởng thành bao bì.” và bốn nút giống mẫu: Gọi điện, Zalo, Đặt lịch tư vấn, Yêu cầu mẫu. Nút Yêu cầu mẫu dùng màu cam là điểm nhấn của vùng này. Báo giá đã có ở header và hero nên không cần thêm một nút thứ năm.

**Bố cục:** trên máy tính, chữ chiếm khoảng 30%, bốn nút nằm cùng hàng hoặc hai hàng cân đối nếu chiều rộng không đủ. Trên điện thoại, chữ ở trên và nút theo lưới hai cột; nhãn Đặt lịch tư vấn được xuống dòng nếu cần nhưng các nút vẫn đủ cao và đều nhau.

**Hành vi từng nút:** Gọi điện mở tel:+84903032686; Zalo mở tài khoản hoặc OA đã được xác minh; Đặt lịch tư vấn tới P14; Yêu cầu mẫu tới P13. Ở máy tính, khi không có ứng dụng gọi điện, có cách sao chép số hoặc xem số ngay bên cạnh.

**Nghiệm thu:** nút Zalo hoạt động trên trình duyệt điện thoại và máy tính; không tự suy ra tài khoản Zalo chỉ từ hotline; mẫu thử được mô tả là yêu cầu gửi tới công ty, không tự hứa miễn phí hoặc giao ngay.

## 5 7 H06 Chân trang

Giữ tinh thần footer mảnh của mẫu: logo bên trái, công ty, hotline và email chạy ngang. Bổ sung một hàng liên kết nhỏ phía dưới để tới Liên hệ, Kiến thức, Chính sách riêng tư và Điều kiện gửi yêu cầu. Địa chỉ có thể nằm trong vùng liên hệ mở rộng hoặc P11 để footer trang chủ vẫn gọn.

Trên điện thoại, xếp logo, tên công ty và thông tin liên hệ thành các hàng dễ đọc. Hotline là liên kết gọi; email là mailto:info@hotprint.vn. Dòng bản quyền lấy năm hiện tại tự động, không giữ cố định năm 2025 từ website cũ.

**Nghiệm thu:** tên công ty và hotline dùng chung một nguồn dữ liệu với các trang khác; tất cả liên kết có đích; footer không bị thanh liên hệ dưới màn hình che; logo không bị mờ do phóng từ tệp nhỏ.

# 6 Trang tổng quan và sáu nhóm sản phẩm

## 6 1 P02 Tổng quan sản phẩm có năm phần

**Phần 1 Giới thiệu.** Breadcrumb, H1 “Giải pháp bao bì cho dấu ấn riêng”, một đoạn ngắn về lựa chọn cấu trúc và một ảnh sản phẩm thật. Có hai hành động: cuộn tới danh mục và Yêu cầu báo giá. Hero thấp hơn trang chủ, khoảng 300–420 px trên máy tính.

**Phần 2 Sáu nhóm.** Dùng lại ngôn ngữ khuôn hộp nhưng bố cục gọn hơn, đủ tên và ví dụ của cả sáu nhóm. Mỗi nhóm có ảnh riêng và liên kết Xem nhóm sản phẩm. Không yêu cầu người dùng phải biết thuật ngữ kỹ thuật trước khi chọn.

**Phần 3 Tìm mẫu tham khảo.** Ô tìm kiếm theo tên, mã mẫu hoặc ngành sử dụng, bộ lọc nhóm sản phẩm và ngành. Ban đầu chỉ bật bộ lọc có dữ liệu đáng tin cậy. Lưới 3 cột trên máy tính, 2 cột ở tablet, 1 hoặc 2 cột trên điện thoại theo độ dài nhãn. Mỗi thẻ có ảnh, tên rõ nghĩa, mã mẫu, nhóm và nút Xem chi tiết. Lưới mặc định 12 mẫu một trang; có phân trang rõ thay vì cuộn vô tận.

**Phần 4 Cách bắt đầu.** Ba bước nội dung gọn: chia sẻ nhu cầu, trao đổi cấu trúc và vật liệu, duyệt mẫu theo quy trình thống nhất với HotPrint. Đây là mô tả quy trình làm việc, không phải biểu mẫu báo giá nhiều bước. Một liên kết Yêu cầu mẫu dẫn tới P13.

**Phần 5 Liên hệ.** Câu “Chưa tìm thấy cấu trúc phù hợp?” và nút Cần tư vấn; nguồn yêu cầu ghi nhận từ tổng quan sản phẩm. Có Gọi và Zalo ở vai trò phụ.

## 6 2 P03 đến P08 dùng một cấu trúc gồm sáu phần

**Phần 1 Mở đầu nhóm.** H1 là tên nhóm, mô tả 2–3 câu, ảnh thật đại diện và CTA Yêu cầu báo giá với nhóm đã điền sẵn. Đặt breadcrumb phía trên và thanh chuyển nhóm phía dưới trên máy tính.

**Phần 2 Ứng dụng và cấu trúc.** Chỉ ra khách thường chọn nhóm này cho những nhu cầu nào; kèm 2–4 dạng cấu trúc thực sự công ty cung cấp. Mỗi dạng có ảnh hoặc sơ đồ và tên dễ hiểu. Nội dung được kỹ thuật duyệt để không hứa vượt năng lực.

**Phần 3 Vật liệu và hoàn thiện.** Giới thiệu lựa chọn có thể trao đổi: loại giấy, mặt in, bề mặt, quai, lớp lót hoặc nhãn. Khi phụ thuộc đơn hàng, ghi “Tư vấn theo yêu cầu” thay vì một thông số cố định. Không công bố giấy phù hợp tiếp xúc thực phẩm hay dược phẩm khi chưa có hồ sơ tương ứng.

**Phần 4 Mẫu tham khảo.** Ảnh và tên mẫu thật, 2–3 mẫu được ưu tiên lúc ra mắt; dữ liệu cũ phù hợp được nhập thêm. Một bộ lọc nhẹ theo ứng dụng nếu có đủ mẫu. Khách nhấn Xem chi tiết hoặc Yêu cầu mẫu theo mẫu đã chọn; không có Mua ngay.

**Phần 5 Câu hỏi thường gặp.** Khoảng 4–6 câu thực tế: thông tin cần để báo giá, cấu trúc, mẫu, tệp thiết kế, khả năng điều chỉnh. FAQ mở bằng nhấn, mỗi câu độc lập; câu trả lời không tự đặt MOQ, thời gian hay giá chưa được duyệt.

**Phần 6 Hành động cuối.** Nút Báo giá cho nhóm này và Yêu cầu mẫu, kèm liên kết Nhà máy. Một câu chỉ dẫn khách có thể gửi ý tưởng và được tư vấn cấu trúc.

![Minh họa nhóm và trang chi tiết sản phẩm](assets/san-pham-wireframe.png)

## 6 3 Nội dung riêng cho từng nhóm

| Nhóm | Nội dung nổi bật cần có | Ảnh nên chuẩn bị | Câu hỏi đặc thù |
|---|---|---|---|
| Hộp giấy mềm | Cấu trúc gấp, nắp và cách chứa sản phẩm | Bản phẳng, đang gấp, thành phẩm | Có cần gửi kích thước sản phẩm bên trong không |
| Hộp carton in màu | Kết cấu, cách vận chuyển và chất lượng bề mặt in | Mặt trong, mép carton, hộp đóng | Cần cung cấp trọng lượng và cách đóng gói nào |
| Hộp cứng cao cấp | Cấu trúc nắp, lớp bọc, khay và chi tiết hoàn thiện | Mở hộp, khay, cận bề mặt | Mẫu cấu trúc và mẫu in khác nhau thế nào |
| Túi giấy | Kích thước, quai, đáy túi và mục đích sử dụng | Mặt trước, quai, đáy, góc nghiêng | Cần mô tả tải trọng sử dụng như thế nào |
| Nhãn dán decal | Vật liệu bề mặt, hình dạng, tờ hoặc cuộn | Cận nhãn, cuộn, nhãn dán ứng dụng | Nhãn dán lên vật liệu và trong môi trường nào |
| Nhãn hàng và catalog | Tách rõ thẻ nhãn, ấn phẩm và catalog trong cùng nhóm | Thẻ trước sau, ấn phẩm mở trang | Số trang, kích thước và cách đóng cuốn cần gì |

Những mục này là thông tin cần khai thác khi biên tập, không phải tuyên bố HotPrint có mọi lựa chọn trên thị trường. Mỗi nhóm có ảnh và nội dung riêng; việc chỉ đổi H1 trên sáu trang có cùng nội dung sẽ không được nghiệm thu.

## 6 4 Quy tắc danh sách tìm kiếm và bộ lọc

Từ khóa tìm kiếm được gõ trong ô có nhãn “Tìm mẫu sản phẩm”. Nhấn Enter hoặc nút Tìm để thực hiện; không cần gửi dữ liệu liên hệ. Kết quả hiển thị số mẫu, bộ lọc đang chọn và nút Xóa bộ lọc. URL giữ từ khóa và bộ lọc để khách quay lại hoặc gửi cho đồng nghiệp. Bộ lọc trên điện thoại nằm trong bảng có nút Áp dụng và Xóa.

Không có kết quả phải hiển thị câu cụ thể như “Chưa có mẫu phù hợp với bộ lọc này”, cùng Xóa bộ lọc và Cần tư vấn. Ảnh mẫu chưa có dùng khung dự phòng có tên sản phẩm; không thay bằng ảnh một nhóm khác. Khi chuyển trang, cuộn tới đầu danh sách và giữ bộ lọc.

## 6 5 Chuẩn tên sản phẩm

Tên nên nói được cấu trúc và ứng dụng, ví dụ “Hộp giấy gấp cho mỹ phẩm” kèm mã tham khảo riêng. Tránh chỉ đặt “Hộp giấy mềm 001” vì người mua khó hiểu sự khác biệt. Tên khách hàng hoặc nhãn hiệu trên ảnh chỉ xuất bản khi có quyền sử dụng. Thông số trên mẫu được ghi là thông số tham khảo, không áp cho mọi đơn hàng cùng nhóm.

# 7 Trang chi tiết sản phẩm

## 7 1 Một mẫu trang dùng cho mọi sản phẩm gồm bảy phần

**Phần 1 Tổng quan và thư viện ảnh.** Breadcrumb; tên mẫu; mã mẫu; nhóm; mô tả ngắn. Máy tính chia hai cột khoảng 55/45: ảnh bên trái, tóm tắt bên phải. Thư viện có 4–6 ảnh, nút trước sau, thumbnail và chức năng phóng to. Điện thoại đặt ảnh trước, thông tin sau; khách có thể vuốt nhưng luôn có nút điều khiển hiện rõ.

**Phần 2 Cấu trúc và công dụng.** Mô tả cách đóng mở, phần lót hoặc kết cấu liên quan, ngữ cảnh sử dụng và điểm cần lưu ý. Có hình bản phẳng hoặc chi tiết khi thực sự giúp người mua hiểu mẫu. Cấu trúc là thông tin mô tả, không tự xuất file khuôn kỹ thuật của khách.

**Phần 3 Thông tin tham khảo.** Bảng nhỏ gồm loại sản phẩm, cấu trúc, vật liệu, kích thước mẫu, cách in và hoàn thiện nếu được duyệt. Trường chưa có dữ liệu được ẩn hoặc ghi “Trao đổi theo yêu cầu”, tránh dấu gạch trống hoặc thông số đoán. Hiển thị câu “Mẫu tham khảo; cấu hình và báo giá được thống nhất theo nhu cầu của bạn”.

**Phần 4 Lựa chọn điều chỉnh.** Nội dung về thay đổi kích thước, hình ảnh, vật liệu và hoàn thiện trong phạm vi kỹ thuật cho phép. Mỗi lựa chọn có mô tả, không có bảng chọn sinh giá. Có nút Trao đổi về mẫu này.

**Phần 5 Quy trình làm mẫu.** Minh họa các công việc từ trao đổi tới duyệt mẫu; điều kiện, chi phí và thời gian sẽ được xác nhận trực tiếp. Nếu có tệp hướng dẫn chuẩn bị thiết kế do HotPrint sở hữu, cho tải bằng nút có tên, loại tệp và dung lượng rõ.

**Phần 6 Mẫu cùng nhóm.** 3–4 mẫu khác với ảnh, tên và liên kết. Không hiện chính mẫu đang xem. Khi chỉ có hai mẫu trong nhóm, dùng số lượng thực có và liên kết Xem nhóm.

**Phần 7 Hành động.** Yêu cầu báo giá và Yêu cầu mẫu theo sản phẩm; Gọi hoặc Zalo phụ. Mã mẫu và nhóm được truyền tới biểu mẫu, hiển thị rõ để khách biết mình đang hỏi về sản phẩm nào.

## 7 2 Nút và hành vi trên màn hình

| Nút hoặc vùng | Hành vi | Dữ liệu đi kèm |
|---|---|---|
| Thumbnail ảnh | Đổi ảnh lớn, giữ tỷ lệ khung | Số thứ tự ảnh |
| Phóng to | Mở cửa sổ ảnh có Đóng và điều khiển | Ảnh độ phân giải phù hợp |
| Yêu cầu báo giá | Mở P12, điền sẵn sản phẩm | ID, tên, mã và nhóm |
| Yêu cầu mẫu | Mở P13, điền sẵn mẫu | ID và loại yêu cầu |
| Trao đổi về mẫu này | Mở P12 hoặc P14 theo nhãn rõ | Ngữ cảnh của sản phẩm |
| Xem nhóm | Mở trang nhóm | Ngôn ngữ hiện tại |
| Tải hướng dẫn | Tải tệp đã duyệt | Phiên bản và loại tệp |

Không hiển thị trạng thái “Còn hàng”, số lượng tồn hay thời gian giao hàng như sản phẩm bán lẻ khi website tiếp nhận sản xuất theo yêu cầu. Không bắt khách đăng nhập để xem mẫu hoặc gửi thông tin.

## 7 3 Nội dung mỗi mẫu phải có trước khi xuất bản

- Tên VI và EN, mã tham khảo, nhóm đúng và ảnh được phép dùng.
- Ít nhất một ảnh tổng quan và hai ảnh chi tiết có tác dụng phân biệt cấu trúc.
- Mô tả ngắn trả lời mẫu dùng cho gì; mô tả cấu trúc và điểm hoàn thiện có thật.
- Thông số được kỹ thuật duyệt và ghi rõ đơn vị; nếu là kích thước mẫu phải nói rõ đó là kích thước mẫu.
- Các lựa chọn điều chỉnh thực tế; nút báo giá và mẫu có đích đúng.
- Tiêu đề tìm kiếm, mô tả ngắn, mô tả ảnh và liên kết bản ngôn ngữ tương ứng.

# 8 Trang nhà máy và Về HotPrint

## 8 1 P09 Nhà máy có bảy phần

**Phần 1 Mở đầu.** H1 “Nơi ý tưởng được hiện thực hóa”, ảnh panorama nhà máy thật và đoạn giới thiệu ngắn về năng lực sản xuất. Nút Khám phá quy trình cuộn tới phần 3; nút Đặt lịch trao đổi tới P14. Video là lựa chọn bổ sung khi có tư liệu phù hợp, không phải tài nguyên bắt buộc.

**Phần 2 Tổng quan năng lực.** 3–4 nội dung như con người, quy trình, thiết bị và kiểm soát chất lượng. Nếu có diện tích, số máy hoặc năng suất đã xác minh, đưa vào khối số liệu; nếu chưa có, dùng mô tả chính xác thay vì tạo số cho đẹp. Một nút Tải hồ sơ năng lực chỉ xuất hiện khi tệp còn hiện hành.

**Phần 3 Quy trình sản xuất.** Mô tả các công đoạn thực tế HotPrint xác nhận. Khung đề xuất gồm tiếp nhận yêu cầu, chuẩn bị cấu trúc và chế bản, in, gia công hoàn thiện, kiểm tra, đóng gói và bàn giao. Mỗi công đoạn có một ảnh hoặc sơ đồ, 40–70 từ và điểm kiểm tra nổi bật. Trên điện thoại dùng danh sách dọc; không kéo ngang một sơ đồ quá dài.

**Phần 4 Thiết bị và khả năng gia công.** Chia theo nhiệm vụ, không chỉ theo tên máy. Ví dụ nhóm chế bản, in, bế, dán, hoàn thiện nếu đúng với nhà máy. Mỗi mục có ảnh và công việc phục vụ, thông số được công ty duyệt. Không đăng ảnh thiết bị không thuộc HotPrint.

**Phần 5 Kiểm soát chất lượng và chứng nhận.** Mô tả cách duyệt mẫu, kiểm tra giữa công đoạn, kiểm tra thành phẩm. Chứng nhận có tên, đơn vị cấp, phạm vi và tài liệu hiện hành khi phù hợp. Website hiện tại nêu ISO 9001:2015, FSC và G7; đó là nội dung công ty tự công bố, phải kiểm tra tài liệu và điều kiện sử dụng dấu chứng nhận trước khi đăng ở giao diện mới.

**Phần 6 Con người và thư viện.** 6–8 ảnh thật về thao tác, dây chuyền và đội ngũ. Có ảnh lớn mở bằng nhấn và chú thích ngắn, không dùng ảnh AI làm nhân sự đại diện. Một thư viện nhỏ đủ chất lượng được ưu tiên hơn hàng chục ảnh lặp góc.

**Phần 7 Mời trao đổi.** Nút Đặt lịch tư vấn và Yêu cầu báo giá; nếu công ty cho phép thăm nhà máy, ghi “Đề nghị lịch thăm nhà máy” với điều kiện sẽ được liên hệ xác nhận. Website không tự xác nhận khách được vào nhà máy vào bất cứ lúc nào.

## 8 2 P10 Về HotPrint có sáu phần

**Trạng thái 13/10/2026:** đã có bản VI/EN tại `/ve-chung-toi/` và `/en/about/`. Xem `about-hotprint.md` về nội dung, thiết kế, ảnh thật và kiểm tra. Bộ màu hiện tại là xanh tự nhiên/be/nâu đất theo yêu cầu mới nhất.

**Phần 1 Giới thiệu thương hiệu.** H1 “Về HotPrint”, logo, tên Công Ty TNHH Tập Đoàn Hoàng Thị và đoạn giới thiệu ngắn. Ảnh chọn từ đội ngũ hoặc hoạt động công ty, có cùng sắc độ với các trang khác.

**Phần 2 Câu chuyện phát triển.** Mốc thành lập năm 2004 được website hiện tại công bố. Các mốc tiếp theo lấy từ hồ sơ được công ty duyệt; không cần tạo một timeline dài nếu chỉ có hai hoặc ba mốc quan trọng. Trình bày một câu chuyện liên tục, hình thật xen kẽ.

**Phần 3 Cách đồng hành với khách.** Diễn giải cụ thể việc tư vấn cấu trúc, thống nhất mẫu, sản xuất và chăm sóc sau bàn giao. Các cam kết miễn phí, bảo hành hoặc vận chuyển từ website cũ phải được rà soát thành chính sách hiện hành trước khi tái sử dụng.

**Phần 4 Đội ngũ và cách làm việc.** Giới thiệu vai trò tư vấn, kỹ thuật, vận hành và kiểm tra chất lượng bằng ảnh thật. Chỉ nêu tên, chức danh và câu trích dẫn đã được duyệt. Không tự dựng phát biểu của lãnh đạo.

**Phần 5 Khách hàng hoặc dự án tham khảo.** Có thể dùng 3 dự án gọn nếu được cho phép: bài toán, giải pháp bao bì và ảnh thành phẩm. Logo khách hàng và đánh giá chỉ xuất bản khi được phép. Nếu chưa sẵn sàng, ẩn phần này và thay bằng liên kết thư viện sản phẩm đã có quyền sử dụng, không lấp bằng testimonial giả.

**Phần 6 Kết nối.** CTA “Trao đổi với HotPrint”, dẫn tới P11 hoặc P12 theo nhãn; liên kết Khám phá nhà máy. Bản tiếng Anh phải làm rõ HotPrint là thương hiệu thuộc công ty, tên pháp lý tiếng Anh cần được công ty cung cấp.

## 8 3 Thiết kế nhất quán cho hai trang

Tiếp tục dùng chữ đậm xanh, bề mặt giấy và điểm nhấn cam. Ảnh máy móc cần có chú thích để bộ phận mua hàng hiểu ý nghĩa. Không dùng quá nhiều nền xanh liên tục làm trang nặng; xen khoảng sáng để đọc nội dung và thông số. Các đoạn dài được chia bằng tiêu đề, ảnh và sơ đồ, không để văn bản dàn hết chiều ngang màn hình.

# 9 Ba trang tiếp nhận yêu cầu

## 9 1 Nguyên tắc biểu mẫu chung

Mỗi trang có **ba phần**: giới thiệu yêu cầu; biểu mẫu trên một trang; hướng dẫn sau khi gửi và kênh liên hệ thay thế. Header và footer dùng chung. Không có bước 1, bước 2 hay thanh tiến độ yêu cầu khách đi qua nhiều màn hình. Chỉ thu thông tin cần để HotPrint có thể tiếp nhận và trao đổi.

Màn hình máy tính chia hai cột: giới thiệu và hotline bên trái chiếm khoảng 35%, biểu mẫu bên phải chiếm khoảng 65%. Điện thoại xếp dọc; trường liên hệ ưu tiên trước, thông tin bổ sung ở dưới. Các nhãn trường đặt bên ngoài ô và luôn nhìn thấy; dấu bắt buộc được giải thích ở đầu biểu mẫu.

![Minh họa biểu mẫu báo giá trên một trang](assets/bieu-mau-wireframe.png)

## 9 2 P12 Yêu cầu báo giá

**Trạng thái 13/10/2026:** đã có bản VI/EN tại `/yeu-cau-bao-gia/` và `/en/request-a-quote/`; xem `quote-request.md`. Biểu mẫu trên một trang, không tính giá, giữ dữ liệu khi đổi ngôn ngữ và điền đúng mẫu từ danh mục. Bản thử chuẩn bị email để khách tự gửi; chỉ ghi tên tệp để khách đính kèm trong email. Chưa có backend tiếp nhận, upload hoặc mã yêu cầu.

**Phần giới thiệu:** H1 “Chia sẻ nhu cầu bao bì của bạn”, một câu giải thích đội ngũ sẽ trao đổi để xây dựng báo giá phù hợp. Không hiển thị lời hứa phản hồi trong 30 phút hoặc 24 giờ nếu HotPrint chưa có chính sách đó. Hotline và Zalo được đặt cạnh lời giới thiệu, không lấn át nút gửi.

**Phần biểu mẫu:** ưu tiên năm mục bắt buộc gồm người liên hệ, công ty, ít nhất một kênh liên hệ hợp lệ, nhóm sản phẩm và mô tả nhu cầu. Nếu khách chọn Chưa rõ loại sản phẩm, hệ thống vẫn nhận yêu cầu. Các thông số chi tiết là tùy chọn để khách không phải biết hết kỹ thuật trước khi liên hệ.

| Trường | Bắt buộc | Kiểu hiển thị và hướng dẫn |
|---|---|---|
| Họ và tên | Có | Ô chữ; 2–100 ký tự |
| Công ty | Có | Ô chữ; cho phép khách ghi tên đơn vị |
| Email | Ít nhất email hoặc điện thoại | Kiểm tra định dạng; nhãn rõ |
| Số điện thoại | Ít nhất email hoặc điện thoại | Cho phép số quốc tế; không giới hạn chỉ 10 số VN |
| Nhóm sản phẩm | Có | Sáu nhóm và Cần tư vấn lựa chọn |
| Mẫu tham khảo | Không | Điền sẵn từ trang mẫu; khách có thể bỏ chọn |
| Mô tả nhu cầu | Có | Ô nhiều dòng, khoảng 20–3000 ký tự |
| Số lượng dự kiến | Không | Ô số hoặc Cần trao đổi; chưa áp MOQ tự động |
| Kích thước sản phẩm | Không | Ô chữ gợi ý dài × rộng × cao và đơn vị |
| Thời điểm cần hàng | Không | Ô ngày hoặc lời mô tả; không là cam kết giao |
| Tệp tham khảo | Không | Tối đa 3 tệp PDF, JPG, PNG; 10 MB mỗi tệp |
| Đồng ý xử lý thông tin cho yêu cầu | Có | Checkbox không chọn sẵn; liên kết chính sách |

Nút chính là **Gửi yêu cầu báo giá**. Sau khi gửi thành công, hiển thị mã yêu cầu và bản tóm tắt, không hiển thị giá. Nếu công ty muốn mọi khách cung cấp cả email và số điện thoại, phải cân nhắc tỷ lệ hoàn thành trước khi đổi hai trường thành bắt buộc; mặc định chỉ cần một kênh liên hệ.

**Phần hướng dẫn:** nói rõ công ty sẽ kiểm tra nội dung và trao đổi về cấu trúc, vật liệu, số lượng cùng các yêu cầu liên quan. Trường hợp tệp lớn hoặc định dạng AI, PSD, CDR, khách gửi sau qua kênh được nhân sự thống nhất; tránh bắt tải tệp nguồn ngay lúc liên hệ đầu tiên.

## 9 3 P13 Yêu cầu mẫu

**Trạng thái 13/10/2026:** đã có bản VI/EN `/yeu-cau-mau/` và `/en/request-a-sample/`; xem `sample-request.md`. Biểu mẫu một trang, loại mẫu, preview ảnh thật và cách nhận/địa chỉ tùy chọn. Các nút mẫu từ website đã nối vào P13. Bản thử chuẩn bị email, chưa tiếp nhận/upload trên máy chủ hoặc xác nhận mẫu đang giao.

**Phần giới thiệu:** H1 “Cùng xem và cảm nhận mẫu bao bì”. Nêu hai loại nhu cầu: mẫu tham khảo có sẵn hoặc tư vấn làm mẫu theo dự án. Khách chưa biết chọn loại nào được chọn Cần tư vấn. Không dùng chữ “Miễn phí” cho mẫu, vận chuyển hoặc thiết kế nếu chưa có chính sách đã duyệt.

**Biểu mẫu:** dùng họ tên, công ty và ít nhất một kênh liên hệ; thêm nhóm sản phẩm, mẫu quan tâm, loại mẫu muốn trao đổi và mục đích sử dụng. Số lượng mẫu, tệp tham khảo và nhu cầu giao mẫu là tùy chọn. Địa chỉ nhận hàng chưa bắt buộc ở lần liên hệ đầu; nếu khách chọn Mong muốn nhận mẫu qua giao hàng, cho phép nhập địa chỉ nhưng có thể để lại sau khi được tư vấn.

**Nút:** Gửi yêu cầu mẫu. Sau khi lưu, P18 hiển thị “Đã nhận yêu cầu mẫu” và nói đội ngũ sẽ xác nhận khả năng cung cấp, điều kiện, chi phí và cách nhận mẫu. Việc gửi biểu mẫu không đồng nghĩa một mẫu đã được đặt mua hay đang vận chuyển.

**Phần hướng dẫn:** mô tả khác nhau giữa mẫu tham khảo, mẫu cấu trúc và mẫu in nếu HotPrint áp dụng. Có liên kết xem sản phẩm, gọi điện và Zalo. Tất cả mẫu đã chọn được hiển thị bằng tên hoặc mã để khách kiểm tra.

## 9 4 P14 Đặt lịch tư vấn

**Trạng thái 13/10/2026:** đã có bản VI/EN tại `/dat-lich-tu-van/` và `/en/request-a-consultation/`. Xem `consultation-request.md`. Bản thử chuẩn bị email, chưa có backend nhận đề nghị lịch hoặc upload; không hiện trạng thái P18 đã nhận hay gửi thư mời. Khách tự đề nghị ngày/khoảng giờ, chọn múi giờ và hình thức; HotPrint cần trao đổi xác nhận. Quy tắc tiếp nhận dưới đây là mục tiêu cho giai đoạn tích hợp hệ thống thật.

**Phần giới thiệu:** H1 “Đề nghị lịch tư vấn cùng HotPrint”. Nội dung nói rõ đây là lịch mong muốn cần nhân sự xác nhận. Khách có thể chọn tư vấn trực tuyến, qua điện thoại hoặc đề nghị gặp trực tiếp trong phạm vi công ty cho phép.

**Biểu mẫu:** họ tên, công ty, một kênh liên hệ, chủ đề tư vấn là bắt buộc. Ngày, khoảng giờ mong muốn, múi giờ và hình thức tư vấn là các trường cần chọn hoặc cho phép Chưa xác định. Có ô ghi chú, mẫu quan tâm và tệp tùy chọn. Múi giờ mặc định Asia/Ho_Chi_Minh và hiển thị bằng câu dễ hiểu “Giờ Việt Nam UTC+7”; khách quốc tế có thể chọn múi giờ khác.

Ngày đã qua không được chọn. Các khoảng giờ cần lấy từ lịch làm việc đã duyệt; nếu chưa có, cho khách ghi đề nghị và công ty xác nhận. Không hiển thị “Còn 1 chỗ” hoặc lịch trống giả. Không tự gửi thư mời họp với trạng thái đã xác nhận chỉ vì khách gửi biểu mẫu.

**Nút:** Gửi đề nghị lịch tư vấn. P18 hiển thị “Đã nhận đề nghị lịch”; email xác nhận tiếp nhận phân biệt rõ với email xác nhận lịch sau khi nhân sự chấp thuận. Tích hợp lịch thời gian thực là tính năng tùy chọn giai đoạn sau khi đã có quy trình người phụ trách và lịch sẵn sàng.

## 9 5 Quy tắc lỗi thành công và tệp

Lỗi hiển thị ngay dưới trường liên quan, ví dụ “Vui lòng nhập email hoặc số điện thoại để HotPrint liên hệ”. Hệ thống đưa điểm chọn tới trường lỗi đầu tiên khi gửi. Dữ liệu khách đã nhập được giữ nếu mạng lỗi. Không xóa toàn bộ biểu mẫu khi tệp vượt giới hạn.

Tệp chỉ nhận loại và dung lượng đã nêu; kiểm tra ở cả trình duyệt và máy chủ. Tệp khách gửi được lưu riêng, không thành ảnh công khai trong thư viện website và không có URL đoán được. Nếu tệp không hợp lệ, khách có thể bỏ tệp và vẫn gửi yêu cầu. Chống spam bằng giới hạn tốc độ, trường bẫy và biện pháp bổ sung khi cần, tránh thử thách khó ở mọi lần gửi.

# 10 Trang liên hệ kiến thức và trang hệ thống

## 10 1 P11 Liên hệ có bốn phần

**Trạng thái 13/10/2026:** đã có bản VI/EN tại `/lien-he/` và `/en/contact/`. Xem `contact-page.md` về thiết kế, kênh liên hệ đã đối chiếu, địa chỉ đang công bố và kiểm tra. Chủ website đã xác nhận giữ địa chỉ đang công bố. Bản thử dùng nút tìm theo địa chỉ, chưa khẳng định ghim vị trí đã được kiểm chứng.

**Phần 1 Mở đầu:** H1 “Kết nối với HotPrint”, câu hướng dẫn chọn cách trao đổi. **Phần 2 Kênh liên hệ:** số điện thoại, email, Zalo đã xác minh và giờ tiếp nhận nếu được duyệt; mỗi kênh có một nút rõ. **Phần 3 Địa điểm:** trụ sở và nhà máy, liên kết bản đồ tới đúng địa điểm; ảnh bên ngoài nếu có. **Phần 4 Chọn nhu cầu:** ba nút Báo giá, Yêu cầu mẫu, Đặt lịch tư vấn cùng mô tả ngắn.

Trang Liên hệ không cần một biểu mẫu tổng quát thứ tư trùng với ba biểu mẫu chuyên biệt. Nếu thêm ô gửi câu hỏi chung, nó phải dùng cùng hệ thống tiếp nhận và được xác định riêng ở phạm vi mở rộng.

Các địa chỉ website cũ hiện ghi ở Đồng Nai cần được chủ website đối chiếu tên phường và địa chỉ hiện hành trước khi công bố lại. Liên kết bản đồ cần kiểm tra vị trí thực, không chỉ tìm theo một chuỗi địa chỉ.

## 10 2 P15 Kiến thức bao bì có bốn phần

**Trạng thái 13/10/2026:** đã có bản VI/EN tại `/kien-thuc/` và `/en/packaging-insights/`, sáu bài hướng dẫn có trang đọc và mục lục. Xem `packaging-insights.md` về nội dung, ảnh thật, tìm kiếm/chủ đề và kiểm tra. Sáu bài là bản biên tập mới cần HotPrint rà soát kỹ thuật trước công bố. Preview giữ liên kết Tin tức cũ; chưa di chuyển bài hiện hữu hoặc thiết lập 301 trên website thật.

**Phần 1 Giới thiệu:** H1, mô tả giúp người mua chuẩn bị dự án. **Phần 2 Tìm và chọn chủ đề:** ô từ khóa, nhóm Cấu trúc, Vật liệu, Chuẩn bị thiết kế và Quy trình. **Phần 3 Danh sách bài:** ảnh, tiêu đề, ngày cập nhật và đoạn giới thiệu; 9 hoặc 12 bài một trang. **Phần 4 Liên hệ:** mời trao đổi về dự án cụ thể.

Đề xuất sáu bài ưu tiên: thông tin cần chuẩn bị trước khi hỏi báo giá; cách chọn cấu trúc hộp; phân biệt nhóm vật liệu thường dùng; chuẩn bị tệp in; cách đánh giá mẫu bao bì; quy trình làm việc giữa bộ phận mua hàng và nhà sản xuất. Đây là danh sách biên tập, nội dung kỹ thuật cần được chuyên môn duyệt.

## 10 3 Trang bài viết có năm phần

Mỗi bài gồm: tiêu đề và ngày cập nhật; ảnh và đoạn mở đầu; nội dung có mục nhỏ và hình minh họa; bài liên quan; CTA tư vấn phù hợp. Nếu bài dài, có mục lục nhấn được, trên điện thoại có thể thu gọn. Văn bản đọc trong cột khoảng 680–760 px; không kéo rộng toàn màn hình. Không thêm mục bình luận nếu công ty chưa có người kiểm duyệt.

## 10 4 P16 và P17 Các trang chính sách

**Trạng thái P16 ngày 13/10/2026:** đã có bản VI/EN tại `/chinh-sach-rieng-tu/` và `/en/privacy/`, năm mục, mục lục và xóa mã mẫu lưu trên trình duyệt. Xem `privacy-policy.md`. Theo yêu cầu chủ website, đã đối chiếu các trang công ty, sitemap/API; chưa xác minh thời hạn lưu và danh sách bên xử lý email. Bản xem trước mô tả hành vi website mới đã kiểm tra, đánh dấu giới hạn cần công ty rà soát; chưa là chính sách chính thức đã duyệt. Link từ form mở thẻ mới để giữ dữ liệu nhập.

P16 gồm năm mục: thông tin thu thập; mục đích sử dụng; người có thể tiếp cận và dịch vụ xử lý; thời gian lưu cùng cách yêu cầu hỗ trợ; cách liên hệ về dữ liệu. Nội dung phải phù hợp hệ thống thực được triển khai và được người phụ trách của công ty rà soát. Checkbox gửi yêu cầu không gộp với đồng ý nhận quảng cáo.

**Trạng thái P17 ngày 13/10/2026:** đã có bản VI/EN tại `/dieu-kien-gui-yeu-cau/` và `/en/request-terms/`. Xem `request-terms.md`. Năm mục, mục lục, liên kết các form/P16; đọc từ form mở thẻ mới để giữ dữ liệu. Nội dung mô tả chuẩn bị email, chưa đặt hàng/đặt lịch tự động, cần công ty rà soát trước công bố.

P17 gồm năm mục: bản chất yêu cầu được gửi; quy trình trao đổi và báo giá; điều kiện mẫu và lịch tư vấn; cách xử lý tệp thiết kế; liên hệ và giải quyết vấn đề. Trang này làm rõ yêu cầu online chưa tạo đơn hàng hoặc cam kết giao hàng. Điều khoản hợp đồng thực tế của công ty được xử lý theo quy trình pháp lý và kinh doanh riêng.

## 10 5 P18 Xác nhận và giao diện 404

**Trạng thái P18 ngày 13/10/2026:** đã có giao diện VI/EN tại `/da-gui-yeu-cau/`, `/en/request-status/`. Xem `request-confirmation.md`. Với cơ chế chuẩn bị email hiện tại, ba phần hướng dẫn kiểm tra việc gửi, loại yêu cầu và bước liên hệ; không hiển thị đã nhận/mã/tóm tắt giả. Link từ vùng ready mở thẻ mới giữ form, chỉ truyền type. Trạng thái tiếp nhận theo mục tiêu dưới đây chỉ triển khai sau backend lưu thật và kiểm tra quyền truy cập.

P18 có ba phần: trạng thái đã tiếp nhận; mã và tóm tắt loại yêu cầu; bước tiếp theo và các nút Xem sản phẩm, Gọi hoặc Zalo. Trang chỉ được mở đúng ngữ cảnh sau khi máy chủ lưu thành công; không chứa dữ liệu khách trong URL. Nếu khách mở trực tiếp khi không có yêu cầu, hiển thị hướng dẫn chọn một biểu mẫu. Thiết lập không đưa vào kết quả tìm kiếm.

Giao diện 404 có thông báo dễ hiểu, nút Về trang chủ, Xem sản phẩm và liên kết liên hệ; trả mã lỗi 404 đúng. Không làm một trang nhìn như lỗi nhưng trả mã 200. Trạng thái bảo trì hoặc máy chủ lỗi có hướng dẫn liên hệ và không xóa các yêu cầu đã lưu.

# 11 Hệ thống tiếp nhận và xử lý cơ hội bán hàng

## 11 1 Luồng từ khách gửi đến nhân sự xử lý

1. Khách mở biểu mẫu từ trang chủ, trang nhóm hoặc mẫu. Hệ thống điền sẵn ngữ cảnh đã biết và cho khách kiểm tra.
2. Khách nhập thông tin, chọn một kênh liên hệ và nhấn gửi. Trình duyệt kiểm tra định dạng; máy chủ kiểm tra lại, kiểm tra spam và tệp.
3. Máy chủ lưu một bản ghi duy nhất và cấp mã yêu cầu. Mã không chứa tên, email hoặc số điện thoại.
4. Sau khi lưu thành công, khách thấy xác nhận. Thông báo nội bộ được đưa vào hàng gửi tới người phụ trách; nếu khách có email, gửi thư xác nhận tiếp nhận theo ngôn ngữ đã chọn.
5. Nhân sự đọc nội dung trong quản trị, nhận phụ trách, liên hệ và ghi trạng thái. Báo giá chi tiết được chuẩn bị và gửi trực tiếp qua quy trình kinh doanh.
6. Yêu cầu được cập nhật tới khi hoàn thành hoặc đóng. Báo cáo tính từ các yêu cầu thực đã lưu, tách spam và trùng.

![Sơ đồ tiếp nhận yêu cầu và thông báo](assets/luong-yeu-cau.png)

## 11 2 Trạng thái trong khu vực quản trị

| Trạng thái | Ý nghĩa | Người hoặc hệ thống cập nhật |
|---|---|---|
| Mới tiếp nhận | Máy chủ đã lưu, chưa được xử lý | Hệ thống |
| Đã phân công | Có người chịu trách nhiệm | Quản lý hoặc nhân sự được quyền |
| Đang trao đổi | Đã bắt đầu liên hệ, cần bổ sung | Nhân sự phụ trách |
| Đang chuẩn bị báo giá hoặc mẫu | Đã rõ công việc tiếp theo | Nhân sự phụ trách |
| Đã gửi báo giá hoặc xác nhận kế hoạch | Đã trao đổi kết quả trực tiếp | Nhân sự phụ trách |
| Hoàn thành | Kết thúc yêu cầu theo quy trình | Nhân sự phụ trách |
| Đóng hoặc không phù hợp | Có lý do nội bộ đi kèm | Nhân sự phụ trách |
| Spam hoặc trùng | Loại khỏi báo cáo cơ hội thực | Người được quyền |

Đối với tư vấn, trạng thái “Lịch đã xác nhận” chỉ được đặt khi người phụ trách đồng ý thời gian. Đối với mẫu, trạng thái gửi hoặc giao phải dựa vào hoạt động thực. Người mua không cần nhìn thấy toàn bộ hệ thống nội bộ trong phiên bản đầu.

## 11 3 Các trường lưu cho mỗi yêu cầu

Lưu loại yêu cầu, thời điểm, ngôn ngữ, kênh nguồn, trang nguồn, nhóm sản phẩm, ID mẫu, thông tin liên hệ, nội dung, tệp, người phụ trách, trạng thái và lịch sử cập nhật. Lưu phiên bản chính sách mà khách đã đọc cùng thời điểm xác nhận; không lưu nội dung nhạy cảm thừa chỉ để đo marketing.

Nguồn Google hoặc mạng xã hội được ghi theo tham số chiến dịch khi có, nhưng không để dữ liệu nhập từ khách đi vào hệ thống phân tích công khai. Các trường nguồn ẩn không được dùng làm căn cứ tin tưởng về giá, danh tính hoặc quyền truy cập.

## 11 4 Thông báo email và khả năng gửi thất bại

Thông báo nội bộ có mã yêu cầu, loại, tên công ty, nhóm, ngôn ngữ và liên kết vào quản trị. Tệp khách nên truy cập qua khu vực được bảo vệ thay vì phát tán đường dẫn công khai. Email khách có lời xác nhận tiếp nhận và các kênh liên hệ; không kèm báo giá tự động.

Nếu bản ghi đã lưu nhưng email gửi lỗi, khách vẫn được thông báo đã tiếp nhận. Hệ thống đánh dấu lỗi email, tự thử lại theo số lần được cấu hình và báo cho người quản trị. Nếu việc lưu thất bại, giao diện báo lỗi, giữ nội dung và cho gửi lại hoặc liên hệ qua hotline. Không dùng email làm nơi lưu duy nhất của yêu cầu.

Nhấn nút gửi nhiều lần hoặc tải lại không được tạo nhiều bản ghi giống nhau: dùng mã chống gửi lặp và kiểm tra phía máy chủ. Việc chống trùng phải cho phép khách gửi một nhu cầu mới thực sự, không khóa mọi yêu cầu từ cùng một công ty.

## 11 5 Quy trình vận hành cần thống nhất

Chủ website chọn người phụ trách mặc định, hộp thư nhận và người dự phòng; quyết định thời gian kiểm tra yêu cầu, giờ tiếp nhận, mức ưu tiên và cách bàn giao giữa tư vấn, kỹ thuật và kinh doanh. Thời gian phản hồi chỉ hiện công khai sau khi đội ngũ có thể đáp ứng. Có thể thiết lập nhắc nội bộ cho yêu cầu chưa xử lý, nhưng không tự gửi các lời hứa cho khách chưa được duyệt.

Hệ thống ra mắt không cần tích hợp CRM phức tạp. Xuất CSV và các trạng thái rõ là đủ cho giai đoạn đầu; nếu có CRM hiện hữu, khảo sát trường dữ liệu, quyền truy cập và khả năng đồng bộ trước khi thêm vào phạm vi.

# 12 Quy tắc hiển thị trên điện thoại và máy tính

## 12 1 Các cỡ màn hình cần dựng và kiểm tra

| Màn hình | Khung kiểm tra | Bố cục chính |
|---|---|---|
| Máy tính lớn | 1440 và 1920 px rộng | Header ngang; hero ba trạng thái; 6 ô danh mục ngang |
| Laptop | 1280 hoặc 1366 px | Giữ trải nghiệm chính; giảm lề và cỡ chữ có kiểm soát |
| Tablet | 768 và 1024 px | Danh mục 3 cột; thông tin dài chuyển sang bố cục gọn |
| Điện thoại | 375, 390 và 430 px | Menu mở; hero xếp dọc; danh mục 2 cột |
| Màn hình hẹp | 320 px và phóng chữ 200% | Không tràn ngang; có thể xếp 1 cột |

Breakpoint thực tế được chọn theo lúc nội dung bắt đầu chật, đề xuất 768 và 1024 px. Trình duyệt được phép phóng to. Kiểm tra cả hướng ngang điện thoại để menu và biểu mẫu không bị mất nút.

## 12 2 Những thay đổi có chủ ý trên mobile

Hero có ảnh crop riêng hoặc bộ ba ảnh riêng; không kéo giãn ảnh desktop xuống thành các chi tiết quá nhỏ. Danh mục khuôn hộp chuyển sang lưới dễ chạm. Khối nhà máy có ảnh tỷ lệ cao hơn. Bốn hành động liên hệ xếp 2 × 2. Footer xuống dòng theo nhóm.

Trên các trang danh sách, bộ lọc nằm trong bảng mở, có nhãn số bộ lọc đang chọn. Trên trang chi tiết, CTA đặt ngay sau mô tả ngắn rồi lặp ở cuối; thanh dưới có ngữ cảnh có thể thay Báo giá bằng Báo giá mẫu này, nhưng không chồng lên nút nổi khác.

## 12 3 Khả năng tiếp cận

Đặt mục tiêu kiểm tra theo WCAG 2.2 mức AA ở những chức năng và nội dung triển khai. Chữ thường cần tương phản tối thiểu 4,5:1; chữ lớn tối thiểu 3:1. Trạng thái lỗi có chữ giải thích, không chỉ có màu đỏ. Biểu tượng đi kèm nhãn có nghĩa và viền chọn bàn phím luôn nhìn thấy.

Tiêu đề có cấp bậc đúng, mỗi trang một H1; ảnh có mô tả phù hợp, ảnh trang trí để mô tả rỗng. Menu, thư viện, FAQ và biểu mẫu hoạt động bằng bàn phím. Có liên kết bỏ qua điều hướng để tới nội dung. Chuyển động tôn trọng cài đặt giảm chuyển động. Nội dung cốt lõi vẫn đọc được khi ảnh lỗi hoặc JavaScript phụ bị chậm.

## 12 4 Bộ màn hình tương tác phải thiết kế

Ngoài trạng thái thường, cần thiết kế menu mở; nhóm đang chọn; hover và viền focus; bộ lọc có kết quả và rỗng; thư viện ảnh mở; FAQ mở; biểu mẫu đang gửi; trường lỗi; lỗi tải tệp; thành công; lỗi mạng; trang 404. Các trạng thái này phải có trên cả bố cục desktop và mobile, tránh chỉ vẽ màn hình đẹp ở trạng thái ban đầu.

# 13 Tiếng Việt và tiếng Anh

## 13 1 Cách chuyển ngôn ngữ

Giữ VI ở cấu trúc URL hiện hữu khi phù hợp và đặt EN dưới /en/. Mỗi trang có một cặp bản dịch cùng ID nội dung. Nhấn EN từ một sản phẩm sẽ mở chính sản phẩm đó ở EN, không đưa khách về trang chủ. Lựa chọn được ghi nhớ cho lần dùng tiếp theo; không ép chuyển theo IP hoặc tự đưa khách vào ngôn ngữ khác khi truy cập URL cụ thể.

Khi chưa có bản dịch đã duyệt, không xuất bản một trang EN chứa nội dung VI. Trong quá trình chuẩn bị, trang ở trạng thái nháp; khi đã ra mắt, menu chỉ liên kết tới trang sẵn sàng. Tất cả trang cố định ưu tiên có đủ hai bản ngay từ lần ra mắt.

## 13 2 Danh sách nội dung phải dịch

Menu, tiêu đề, đoạn giới thiệu, danh mục, tên và thông số sản phẩm, chú thích ảnh, CTA, biểu mẫu, hướng dẫn trường, lỗi, thông báo thành công, email, FAQ, dữ liệu tìm kiếm và chính sách đều có hai ngôn ngữ. Nhãn nút không để lẫn “Submit” vào giao diện VI hoặc nhãn tiếng Việt trong biểu mẫu EN.

| VI | EN đề xuất |
|---|---|
| Sản phẩm | Products |
| Nhà máy | Our Factory |
| Về HotPrint | About HotPrint |
| Yêu cầu báo giá | Request a Quote |
| Yêu cầu mẫu | Request a Sample |
| Đặt lịch tư vấn | Request a Consultation |
| Hộp giấy mềm | Folding Cartons |
| Hộp carton in màu | Printed Corrugated Boxes |
| Hộp cứng cao cấp | Premium Rigid Boxes |
| Túi giấy | Paper Bags |
| Nhãn dán decal | Self Adhesive Labels |
| Nhãn hàng & catalog | Tags & Catalogs |

Phương án tiêu đề EN cho hero là “From flat ideas. To lasting impressions.” Đây là lời viết đề xuất theo ý nghĩa thương hiệu, cần duyệt biên tập và ngắt dòng ở bản thiết kế; không dịch máy rồi ép vừa kích thước tiếng Việt. Tên pháp lý tiếng Anh dùng đúng thông tin công ty cung cấp.

## 13 3 Tìm kiếm và quản trị song ngữ

Ảnh có thể dùng chung nhưng mô tả ảnh và chú thích phải dịch. Bộ lọc dùng chung mã dữ liệu và có nhãn riêng từng ngôn ngữ. Thông số và đơn vị nhất quán; không thay số khi dịch. Tìm kiếm trả kết quả theo ngôn ngữ hiện tại và hỗ trợ từ khóa không dấu ở VI.

Trong quản trị, mỗi nội dung có trạng thái VI và EN riêng, người duyệt và ngày cập nhật. Khi thay thông số ở VI, hệ thống hoặc quy trình phải nhắc cập nhật bản EN tương ứng. Không tự công bố bản dịch mới nếu chưa được rà soát.

## 13 4 Tối ưu cho Google

Cấu hình thẻ ngôn ngữ và hreflang giữa các bản tương ứng, cùng canonical đúng; tạo sitemap chứa URL xuất bản. Không dùng cookie ngôn ngữ làm cách duy nhất để Google tiếp cận bản EN. Các yêu cầu này dựa trên hướng dẫn Google Search Central về trang bản địa hóa; chúng giúp mô tả cấu trúc ngôn ngữ, không bảo đảm một vị trí tìm kiếm cụ thể.

# 14 Kế hoạch ảnh và nội dung

## 14 1 Quy trình lựa chọn tài nguyên

1. Kiểm kê hai thư mục ảnh, đánh mã cho mỗi ảnh và ghi chủ thể, loại sản phẩm, chất lượng, quyền sử dụng.
2. Chọn ảnh chính theo từng trang; một ảnh phải hỗ trợ nội dung cụ thể, không chỉ phù hợp màu xanh.
3. Đối chiếu tên nhóm với cấu trúc thật; hộp cứng không được gán vào hộp giấy mềm chỉ vì cùng màu.
4. Chỉnh cân bằng trắng, ánh sáng, crop và nền ở mức cần thiết; giữ kết cấu, màu in và nhận diện sản phẩm.
5. Xuất bản cỡ desktop và mobile, định dạng tối ưu và mô tả ảnh; giữ tệp gốc trong kho riêng.
6. Duyệt quyền dùng logo khách hàng, người xuất hiện, tài liệu trong ảnh và các chi tiết nhà máy trước khi đăng.

## 14 2 Bộ ảnh cần chuẩn bị cho từng vị trí

| Vị trí | Số lượng ưu tiên | Yêu cầu nội dung |
|---|---|---|
| Hero trang chủ | 1 bộ gồm 3 trạng thái và crop mobile | Cùng một bao bì thật, bản phẳng tới thành phẩm |
| Danh mục khuôn hộp | 6 biểu tượng vector | Đúng cấu trúc và cùng phong cách nét |
| Banner nhà máy | 1 ảnh chính và 1 crop mobile | Hoạt động thật, đủ không gian đặt chữ |
| Trang nhóm | 6 ảnh mở đầu riêng | Mỗi nhóm có một chủ thể đúng và đẹp |
| Mẫu sản phẩm | 4–6 ảnh cho mỗi mẫu | Tổng quan, cấu trúc, mặt trong, chi tiết |
| Nhà máy | 8–12 ảnh được tuyển chọn | Quy trình, thiết bị, kiểm tra và con người |
| Về HotPrint | 3–5 ảnh | Đội ngũ và hoạt động công ty |
| Kiến thức | 6 ảnh hoặc sơ đồ | Phù hợp chủ đề, có quyền sử dụng |

Đối với 12–18 mẫu ưu tiên, cần khoảng 48–108 ảnh sản phẩm sau khi chọn và bổ sung; ảnh đang có có thể đáp ứng một phần. Không cần chụp lại tất cả ngay lập tức nếu tệp gốc đủ tốt, nhưng hero ba trạng thái thường cần một buổi chụp hoặc dựng kỹ thuật riêng.

## 14 3 Những tệp có thể xem xét từ kho hiện có

| Tệp gốc | Vai trò tham khảo | Lưu ý khi dùng |
|---|---|---|
| HÌnh sản phẩm/032A5308.JPG | Hộp cứng xanh ETON TRETORN | Kiểm tra quyền dùng nhãn hiệu; không là mẫu giấy mềm |
| HÌnh sản phẩm/032A5358.JPG | Hộp carton hoặc mailer tham khảo | Kỹ thuật xác nhận cấu trúc trước khi phân nhóm |
| HÌnh sản phẩm/032A5329.JPG | Túi giấy kraft | Chọn góc quai và đáy nếu có |
| HÌnh sản phẩm/032A5328.JPG | Cuộn nhãn | Cần thêm cận nhãn hoặc ứng dụng nếu phù hợp |
| HÌnh sản phẩm/032A5343.JPG | Hộp giấy gấp tham khảo | Đối chiếu quyền dùng nhãn hiệu và loại cấu trúc |
| Hình nhà máy/032A5133.JPG | Thao tác của nhân viên | Dùng ảnh thật; kiểm tra nội dung tài liệu trong khung |
| Hình nhà máy/032A5054.JPG | Góc rộng nhà máy | Crop theo vị trí chữ và kiểm tra chất lượng |

Danh sách này là điểm bắt đầu lựa chọn, không thay thế duyệt kỹ thuật và quyền sử dụng. Ảnh tài liệu báo cáo, đơn hàng hoặc thông số riêng của khách không nên dùng như ảnh catalog công khai. Bản mẫu có hình dựng cần được thay bằng tài nguyên đã duyệt trước khi website đi vào vận hành.

## 14 4 Danh sách dữ liệu doanh nghiệp cần bàn giao

Logo gốc; tên pháp lý VI và EN; hotline, email, URL Zalo và mạng xã hội; địa chỉ hiện hành; giờ tiếp nhận; hồ sơ năng lực; ảnh và phạm vi chứng nhận; thông số máy hoặc năng lực được công bố; chính sách mẫu; quy trình duyệt và báo giá; người phụ trách yêu cầu.

Các thông tin trên website hiện tại được dùng làm điểm đối chiếu. Năm thành lập, chứng nhận, địa chỉ, các cam kết miễn phí và nội dung khách hàng phải qua một lần duyệt của HotPrint trước khi nhập vào website mới. Nội dung từ website cũ không được mặc định là đã đúng cho mọi điều kiện kinh doanh hiện tại.

## 14 5 Tiêu chuẩn biên tập

Trang chủ dùng ít chữ và mỗi đoạn có một nhiệm vụ. Trang nhóm giải thích cách lựa chọn. Trang chi tiết nêu cấu trúc và thông tin có thật. Trang nhà máy đưa ra chứng cứ. Tránh lời chung như “chất lượng hàng đầu” nếu không có nội dung cụ thể đi kèm.

Mỗi trang có một tiêu đề chính, lời dẫn khoảng 40–80 từ tùy vị trí, CTA rõ và nội dung EN tương ứng. Nội dung dài không được đặt trong ảnh. Các lời giới thiệu trong tài liệu là bản đề xuất, không tự trở thành cam kết hợp đồng hoặc bằng chứng chứng nhận.

# 15 Quản trị website cho chủ sở hữu

## 15 1 Các khu vực quản trị cần có

| Khu vực | Người quản trị thao tác | Dữ liệu hoặc chức năng chính |
|---|---|---|
| Trang chủ | Thay chữ, ảnh và thứ tự trong vùng cho phép | Hero, CTA, danh mục, banner nhà máy |
| Nhóm sản phẩm | Biên tập nội dung VI và EN | Mô tả, ảnh, cấu trúc, FAQ |
| Mẫu sản phẩm | Thêm, sửa, ẩn, chọn mẫu liên quan | Mã, nhóm, ảnh, thông số, bản dịch |
| Nhà máy và công ty | Cập nhật ảnh, quy trình và tài liệu | Thiết bị, chứng nhận, hồ sơ năng lực |
| Kiến thức | Soạn bài, phân chủ đề, cập nhật | Bài viết, ảnh, tiêu đề tìm kiếm |
| Yêu cầu khách | Đọc, phân công, đổi trạng thái, xuất CSV | Báo giá, mẫu, lịch và lịch sử |
| Thư viện ảnh | Gắn mô tả, quyền dùng, phân loại | Tệp công khai và phiên bản tối ưu |
| Thông tin chung | Sửa một lần dùng toàn website | Hotline, email, địa chỉ, Zalo |

Giữ bố cục bằng những khối nội dung có trường rõ thay vì cho phép kéo thả tùy ý mọi pixel. Chủ website vẫn thay được ảnh, chữ và nội dung kinh doanh; hệ thống hạn chế các chỉnh sửa vô tình làm lệch khuôn hộp hoặc hỏng bố cục điện thoại.

## 15 2 Quyền và duyệt nội dung

Chủ sở hữu có quyền cao nhất. Vai trò biên tập có thể sửa nội dung và bản dịch nhưng không thay cấu hình hệ thống. Vai trò kinh doanh đọc và xử lý yêu cầu, không cần truy cập cấu hình hoặc xuất toàn bộ dữ liệu nếu chưa được giao quyền. Nhóm kỹ thuật có tài khoản riêng theo thời gian làm việc, tránh chia sẻ một mật khẩu cho mọi người.

Nội dung có trạng thái Nháp, Chờ duyệt, Xuất bản và Ẩn. Sửa thông số sản phẩm cần người chuyên môn kiểm tra; sửa chính sách cần người phụ trách công ty duyệt. Có thể xem trước cả VI, EN, desktop và mobile trước khi xuất bản.

## 15 3 Những thao tác chủ website phải tự làm được

- Thay ảnh hero từ tệp đã tối ưu và xem trước bố cục điện thoại.
- Thêm một mẫu, nhập nhóm, ảnh, thông số, FAQ và bản dịch.
- Thay hotline hoặc URL Zalo một lần rồi áp dụng khắp website.
- Xem yêu cầu mới, tìm theo công ty, lọc trạng thái và xuất các bản ghi được quyền.
- Đăng một bài, chỉnh tiêu đề và mô tả tìm kiếm, liên kết bài phù hợp.
- Ẩn một mẫu chưa được duyệt; không làm mất chuyển hướng của URL cũ.

## 15 4 Sao lưu và bảo trì

Đề xuất sao lưu dữ liệu hằng ngày và giữ lịch sử đủ để khôi phục khi có lỗi; tệp ảnh và cấu hình có lịch sao lưu riêng. Trước cập nhật hệ thống hoặc plugin, tạo bản sao và thử ở môi trường kiểm tra. Cần thử khôi phục thực tế ít nhất trước lần ra mắt, không chỉ nhìn thông báo “đã sao lưu”.

Thời gian lưu yêu cầu và tệp khách được công ty quyết định theo nhu cầu vận hành và chính sách dữ liệu. Lên lịch rà soát yêu cầu quá hạn, cập nhật chứng nhận, link hỏng và bản EN. Không tự xóa dữ liệu khách chỉ vì hết một khoảng thời gian mặc định chưa được công ty duyệt.

# 16 Phương án xây dựng và yêu cầu kỹ thuật

## 16 1 Nền tảng đề xuất

Đề xuất dùng WordPress làm hệ quản trị với giao diện được xây riêng theo mẫu đã chốt, trường dữ liệu sản phẩm có cấu trúc và chức năng song ngữ. Phương án này phù hợp việc chủ website tự quản trị và cần phát triển nhanh. Không cần cài giỏ hàng hay thanh toán chỉ để hiển thị mẫu sản phẩm.

Đây là đề xuất cho bước kỹ thuật tiếp theo, không phải kết luận đã khảo sát máy chủ hiện tại. Trước khi triển khai cần kiểm tra nền tảng cũ, hosting, tên miền, email, bản sao dữ liệu và quyền quản trị. Sau đó mới chọn phiên bản hệ thống, công cụ song ngữ và biểu mẫu đang được duy trì, tương thích và có chính sách cập nhật rõ.

Giao diện phải dùng các thành phần riêng cho hero ba trạng thái và khuôn hộp. Tránh ép mẫu vào một theme phổ thông khiến đường gấp, khoảng trắng và cách hiển thị điện thoại mất bản sắc. Khu vực quản trị cho sửa trường nội dung, không đòi chủ website phải sửa mã nguồn để đổi một số điện thoại.

## 16 2 Phân tách môi trường và dữ liệu

Có website đang hoạt động, môi trường dựng thử và bản sao dự phòng. Môi trường thử có mật khẩu hoặc hạn chế truy cập và không được đưa vào kết quả Google. Mọi thay đổi lớn được kiểm tra ở đó trước khi đưa vào website thật. Dữ liệu thử được đánh dấu và không đi vào báo cáo bán hàng.

Thông tin sản phẩm, nhóm, bài viết và yêu cầu dùng cấu trúc dữ liệu riêng. Tệp hình công khai khác với tệp thiết kế khách gửi; tệp khách được bảo vệ theo quyền truy cập. Form được xử lý ở máy chủ, không chỉ chạy trong trình duyệt hoặc gửi email rồi bỏ dữ liệu.

## 16 3 Tốc độ và độ ổn định

Theo hướng dẫn Core Web Vitals của Google, mục tiêu sau khi có đủ dữ liệu người dùng thực là LCP không quá 2,5 giây, INP không quá 200 ms và CLS không quá 0,1 ở phân vị 75, phân tích riêng mobile và desktop. Đây là mục tiêu kiểm tra, không phải kết quả đã đo của website mới.

Trước ra mắt, đo trong điều kiện thử được ghi rõ bằng công cụ kiểm tra và thiết bị thật. Ảnh hero được ưu tiên tải, khai báo kích thước và có phiên bản phù hợp màn hình; ảnh bên dưới tải khi cần. Dùng WebP hoặc AVIF khi trình duyệt hỗ trợ, tối ưu dung lượng mà không làm hỏng chi tiết in. Chỉ tải các kiểu chữ cần dùng và hạn chế mã theo dõi bên ngoài.

Đề xuất ngân sách dung lượng ban đầu: ảnh hero desktop khoảng 250–500 KB sau tối ưu và bản mobile khoảng 120–250 KB; điều chỉnh theo chất lượng thực. Không giảm ảnh đến mức bao bì trông mờ chỉ để đạt một con số. Không dùng video tự chạy cho hero ở phiên bản đầu.

## 16 4 Bảo vệ hệ thống và dữ liệu gửi

Sử dụng HTTPS, tài khoản riêng và xác thực bổ sung cho người quản trị nếu hệ thống hỗ trợ. Tệp gửi kiểm tra loại thực, dung lượng và tên; không cho thực thi tệp hoặc công khai tệp trong thư mục ảnh. Quyền đọc yêu cầu được giới hạn theo vai trò; thao tác xuất dữ liệu có kiểm soát.

Email gửi từ tên miền công ty qua dịch vụ được cấu hình xác thực và kiểm tra khả năng nhận. Không thay đổi cấu hình DNS email chỉ để chuyển website nếu chưa hiểu chức năng hiện tại; bảo toàn các bản ghi email cần thiết. Những lựa chọn này phải được kỹ thuật triển khai và kiểm tra, không chỉ ghi trong giao diện.

## 16 5 Tính năng ưu tiên và tính năng có thể làm sau

| Nhóm | Có trong lần ra mắt | Có thể mở rộng sau |
|---|---|---|
| Trưng bày | Sáu nhóm, chi tiết, tìm kiếm, thư viện ảnh | Bộ sưu tập giải pháp theo ngành |
| Bán hàng | Ba form một trang, gọi, Zalo, lưu yêu cầu | Đồng bộ CRM khi đã có quy trình |
| Tư vấn | Gửi lịch mong muốn để xác nhận | Lịch thời gian thực sau khảo sát |
| Thương hiệu | Ảnh thật, hành trình ba trạng thái, hồ sơ | 3D cấu trúc hoặc video sản xuất thật |
| Quản trị | Nội dung song ngữ, trạng thái, xuất CSV | Cổng khách theo dõi dự án riêng |

Tính giá tự động, bảng giá theo số lượng, biểu mẫu báo giá chia bước và ép đăng ký tài khoản không thuộc phạm vi đã được người dùng yêu cầu.

# 17 Google đo lường và bảo toàn website cũ

## 17 1 Kiểm kê và chuyển đổi nội dung

Trước khi thay website, xuất danh sách URL hiện tại gồm trang, nhóm, sản phẩm, bài viết, ảnh và tệp tải. Ghi trạng thái giữ nguyên, sửa nội dung, hợp nhất, chuyển hướng hoặc loại bỏ có lý do. Ưu tiên giữ URL đã được khách hoặc Google dùng nếu nội dung tương ứng vẫn tồn tại.

Không chỉ nhập các sản phẩm ưu tiên rồi bỏ toàn bộ trang cũ. Nội dung chất lượng và liên kết có giá trị phải được chuyển sang hoặc chuyển hướng có chủ đích. Bản sao cũ được giữ để đối chiếu; dữ liệu và cấu hình được sao lưu trước thay đổi.

## 17 2 Chuẩn mỗi trang

Mỗi trang có tiêu đề tìm kiếm riêng, mô tả ngắn phù hợp, H1, cấu trúc tiêu đề logic, ảnh có mô tả và liên kết tới nhóm hoặc nội dung liên quan. Thiết lập canonical, sitemap và ngôn ngữ đúng. Trang nhóm cần nội dung giúp lựa chọn sản phẩm, không chỉ danh sách ảnh.

Dữ liệu có cấu trúc về doanh nghiệp, breadcrumb hoặc bài viết chỉ mô tả thông tin có thật. Nếu mô tả sản phẩm không có giá, không tạo giá 0 hoặc dữ liệu khuyến mại giả để điền cho đủ trường. Tổ chức dữ liệu dựa trên hướng dẫn và khả năng của hệ thống được chọn.

## 17 3 Đo những hành động thực sự có ý nghĩa

| Sự kiện | Khi ghi nhận | Dùng để hiểu gì |
|---|---|---|
| view_category | Mở một nhóm | Nhóm được quan tâm |
| view_product | Mở chi tiết mẫu | Mẫu thu hút khách |
| click_quote | Nhấn báo giá | Mức quan tâm trước khi gửi |
| quote_saved | Máy chủ lưu yêu cầu báo giá | Cơ hội thực đã tiếp nhận |
| sample_saved | Máy chủ lưu yêu cầu mẫu | Nhu cầu xem mẫu |
| consultation_saved | Máy chủ lưu lịch mong muốn | Nhu cầu tư vấn |
| click_phone | Nhấn gọi | Ý định liên hệ, chưa chứng minh cuộc gọi hoàn tất |
| click_zalo | Nhấn Zalo | Ý định nhắn, chưa chứng minh đã gửi tin |
| download_profile | Tải hồ sơ năng lực | Mức quan tâm năng lực |

Không gửi họ tên, email, điện thoại, tệp khách hoặc nội dung nhu cầu vào hệ thống phân tích. Các sự kiện gửi thành công chỉ được ghi sau khi lưu và có chống đếm lặp. Không coi nhấn nút báo giá là một yêu cầu thật.

## 17 4 Báo cáo sau khi ra mắt

Theo dõi số yêu cầu hợp lệ theo nguồn, ngôn ngữ và nhóm; tỷ lệ hoàn thành form; yêu cầu trùng hoặc spam; thời gian từ tiếp nhận tới xử lý; lỗi form và gửi email; trang có lượng xem nhưng ít hành động. Tỷ lệ yêu cầu = số yêu cầu hợp lệ chia số phiên truy cập trong cùng giai đoạn, với nguồn đo được giải thích rõ.

Chưa đặt chỉ tiêu tăng bao nhiêu phần trăm vì chưa có dữ liệu nền. Đo website cũ trước khi chuyển nếu có thể, rồi so sánh sau 2–4 tuần với điều kiện nguồn truy cập tương đương. Dữ liệu Google thường cần thời gian tích lũy; một lần chạy thử không thể chứng minh toàn bộ hiệu quả bán hàng.

# 18 Lộ trình triển khai và công việc cụ thể

## 18 1 Thời gian dự kiến và phụ thuộc

Đề xuất **4–6 tuần** cho một đội có người thiết kế, kỹ thuật và biên tập, khi ảnh, thông tin công ty và quyền truy cập được chuẩn bị đúng hạn. Nếu chủ website tự đảm nhiệm toàn bộ, thời gian phụ thuộc quỹ giờ và kinh nghiệm; không lấy mốc đội chuyên trách làm cam kết cho một người.

Đường công việc quan trọng là xác nhận cấu trúc → chuẩn bị ảnh và nội dung → thiết kế desktop/mobile → xây dựng → nhập và kiểm tra nội dung → nghiệm thu → đưa lên website thật. Biên tập và chuẩn bị ảnh có thể diễn ra song song với thiết kế; các công việc phụ thuộc dữ liệu phải đợi dữ liệu được duyệt.

| Giai đoạn | Khoảng thời gian dự kiến | Công việc | Kết quả cần bàn giao |
|---|---|---|---|
| Bước 1 | 2–3 ngày làm việc | Chốt phạm vi, cấu trúc, nội dung và nút | Tài liệu này và danh sách dữ liệu |
| Bước 2 | 5–7 ngày | Dựng UI desktop/mobile, chọn ảnh, thử tương tác | Bộ thiết kế và nguyên mẫu nhấn được |
| Bước 3 | 8–12 ngày | Xây theme, dữ liệu, song ngữ, form và quản trị | Website ở môi trường thử |
| Bước 4 | 5–8 ngày có thể giao nhau với Bước 3 | Biên tập, dịch, xử lý ảnh và nhập dữ liệu | Nội dung sẵn sàng xuất bản |
| Bước 5 | 3–5 ngày | Kiểm tra, sửa lỗi, hướng dẫn chủ website | Biên bản nghiệm thu và tài liệu quản trị |
| Bước 6 | 1–2 ngày | Sao lưu, chuyển đổi, kiểm tra website thật | Website hoạt động và theo dõi lỗi |

Khoảng thời gian có phần giao nhau nên không cộng máy móc tất cả hàng thành một lịch cố định. Nếu ảnh hero cần chụp mới hoặc chứng nhận cần bổ sung, phải đưa công việc đó vào lịch ngay từ đầu.

## 18 2 Công việc Bước 1 theo thứ tự

**Việc 1 Kiểm kê.** Chủ website tập hợp quyền quản trị, hosting, tên miền, email, logo, hai thư mục ảnh, hồ sơ năng lực và danh sách sản phẩm. Đội triển khai kiểm kê trang cũ và nguồn dữ liệu, tạo bảng URL và tài nguyên.

**Việc 2 Chốt kiến trúc.** Dùng 18 trang cố định, mẫu sản phẩm và bài viết trong chương 3 làm danh sách. Xác định các trang cần giữ URL cũ. Chốt sáu nhóm và số mẫu ưu tiên với người hiểu sản phẩm.

**Việc 3 Chốt thông tin trên màn hình.** Duyệt sáu vùng trang chủ, menu, nhãn CTA, biểu mẫu một trang, ngôn ngữ và các đường đích. Duyệt bố cục mobile chuyển đổi từ khuôn hộp ngang sang lưới.

**Việc 4 Chốt dữ liệu và vận hành.** Điền hotline, Zalo, địa chỉ hiện hành, email nhận, người phụ trách, giờ làm việc, chính sách mẫu và nguyên tắc lịch tư vấn. Duyệt dữ liệu nào được công khai và dữ liệu nào chỉ trao đổi trực tiếp.

**Việc 5 Giao việc sản xuất nội dung.** Chọn người viết VI, người duyệt chuyên môn, người biên tập EN và người tuyển ảnh. Lập danh sách tệp còn thiếu, ưu tiên hero và ảnh sản phẩm. Không chờ lập trình xong mới bắt đầu viết.

**Việc 6 Kiểm tra tính đầy đủ.** Đi qua ba hành trình khách hàng và bảng nút ở chương 19; mọi hành động đều có đích và mọi yêu cầu đều có người tiếp nhận. Sau khi đã đủ, chuyển sang Bước 2 để dựng bản thiết kế chi tiết.

## 18 3 Bộ bản vẽ phải có ở Bước 2

Dựng trang chủ desktop và mobile trước, sau đó tổng quan sản phẩm, nhóm, chi tiết, nhà máy, Về HotPrint, Liên hệ, ba trang yêu cầu, kiến thức, bài viết, chính sách, xác nhận và 404. Các trang có cấu trúc giống nhau được dùng mẫu chung, nhưng dữ liệu đặc thù vẫn được duyệt.

Kèm các trạng thái menu, filter, thư viện ảnh, FAQ, biểu mẫu và email. Nguyên mẫu nhấn được phải đi qua ít nhất ba hành trình từ chương 3. Người duyệt kiểm tra nút và nội dung, không chỉ xem một ảnh dài của trang chủ.

## 18 4 Phân công trách nhiệm

| Công việc | Chủ website | Thiết kế | Kỹ thuật | Biên tập và chuyên môn |
|---|---|---|---|---|
| Duyệt thương hiệu và cấu trúc | Quyết định | Đề xuất và mô tả | Đánh giá khả thi | Góp ý nội dung |
| Ảnh và quyền sử dụng | Xác nhận | Tuyển chọn và crop | Tối ưu tải | Kiểm tra chủ thể |
| Thông số và chứng nhận | Chịu trách nhiệm xác nhận | Trình bày | Tạo trường dữ liệu | Rà soát kỹ thuật |
| Form và luồng xử lý | Chọn người tiếp nhận | Dựng tương tác | Xây và kiểm tra | Duyệt lời hướng dẫn |
| VI và EN | Duyệt cuối | Kiểm tra độ dài | Liên kết bản dịch | Viết và biên tập |
| Nghiệm thu và ra mắt | Duyệt kết quả cụ thể | Sửa lệch thiết kế | Kiểm tra và triển khai | Soát nội dung cuối |

Nếu chủ website kiêm thiết kế hoặc biên tập, vẫn giữ các nhiệm vụ và điểm duyệt để không bỏ sót. Chỉ chuyển website thật sau khi có bản thử đầy đủ và kết quả nghiệm thu, không thay trực tiếp từng phần trên website đang hoạt động.

# 19 Bảng nút chức năng và tiêu chí nghiệm thu

## 19 1 Bản đồ nút quan trọng

| Nơi xuất hiện | Nhãn | Đích hoặc thao tác | Kết quả khách nhìn thấy |
|---|---|---|---|
| Header | Logo | P01 cùng ngôn ngữ | Trang chủ |
| Header | Sản phẩm | Mở menu | Tổng quan và sáu nhóm |
| Header | Nhà máy | P09 | Năng lực và quy trình |
| Header | Về HotPrint | P10 | Thông tin công ty |
| Header | VI hoặc EN | Bản tương ứng | Giữ đúng ngữ cảnh |
| Header và hero | Yêu cầu báo giá | P12 | Form trên một trang |
| Danh mục khuôn hộp | Tên nhóm và mũi tên | P03 đến P08 | Nhóm đúng với ô chọn |
| Banner nhà máy | Khám phá nhà máy | P09 | Trang nhà máy |
| Liên hệ | Gọi điện | tel:+84903032686 | Trình gọi hoặc số để sao chép |
| Liên hệ | Zalo | URL được xác minh | Đúng tài khoản HotPrint |
| Liên hệ | Đặt lịch tư vấn | P14 | Form lịch mong muốn |
| Liên hệ | Yêu cầu mẫu | P13 | Form mẫu |
| Thẻ sản phẩm | Xem chi tiết | URL mẫu | Ảnh và thông tin mẫu |
| Chi tiết | Báo giá mẫu này | P12 có ngữ cảnh | Nhóm và mã mẫu được điền |
| Danh sách | Áp dụng hoặc Xóa bộ lọc | Cập nhật kết quả | Kết quả và số lượng |
| Nhà máy | Tải hồ sơ năng lực | Tệp đã duyệt | Tệp đúng, có phiên bản |
| Form | Gửi yêu cầu cụ thể | Lưu ở máy chủ | Mã tiếp nhận hoặc lỗi rõ |
| Footer | Email | mailto:info@hotprint.vn | Ứng dụng email |

Các biểu tượng trang trí, nhãn quy trình và đường cam không được tạo cảm giác là nút nếu không có hành động. Bảng này là tài liệu kiểm tra liên kết, không phải yêu cầu đặt tất cả nút lên một màn hình.

## 19 2 Kịch bản kiểm tra bắt buộc

| Mã | Thao tác kiểm tra | Kết quả mong đợi |
|---|---|---|
| T01 | Mở trang chủ ở 1440 px | Đúng mẫu, đủ sáu vùng, chữ và CTA rõ |
| T02 | Mở ở 375 px và 320 px | Không tràn ngang, sáu nhóm đọc được |
| T03 | Chỉ dùng bàn phím | Menu, ô nhóm, form và thư viện dùng được |
| T04 | Nhấn từng ô khuôn hộp | Đến đúng nhóm, không liên kết rỗng |
| T05 | Nhấn VI và EN từ chi tiết | Đến cùng mẫu ở ngôn ngữ khác |
| T06 | Tìm từ có dấu và không dấu | Kết quả phù hợp theo dữ liệu đã nhập |
| T07 | Lọc không có kết quả | Có lời hướng dẫn, Xóa và Cần tư vấn |
| T08 | Nhấn Báo giá mẫu này | Nhóm và mã mẫu được điền đúng |
| T09 | Gửi thiếu kênh liên hệ | Báo lỗi dưới trường, giữ dữ liệu |
| T10 | Gửi chỉ email hợp lệ | Được tiếp nhận theo quy tắc một kênh |
| T11 | Gửi số quốc tế hợp lệ | Không bị loại vì định dạng chỉ dành VN |
| T12 | Gửi tệp sai loại hoặc quá lớn | Nêu lỗi, bỏ tệp vẫn gửi được |
| T13 | Nhấn Gửi nhiều lần | Một yêu cầu hợp lệ, không đếm lặp |
| T14 | Máy chủ lưu lỗi hoặc mạng đứt | Không báo thành công giả, có gửi lại |
| T15 | Lưu thành công nhưng email lỗi | Bản ghi còn, có hàng thử lại và cảnh báo |
| T16 | Gửi yêu cầu mẫu | Không hứa phí hoặc lịch giao chưa duyệt |
| T17 | Gửi lịch mong muốn | Xác nhận tiếp nhận, chưa xác nhận cuộc hẹn |
| T18 | Chọn ngày đã qua | Không được chọn hoặc có lỗi cụ thể |
| T19 | Nhấn Zalo trên máy tính và điện thoại | Đúng tài khoản và có phương án dự phòng |
| T20 | Mở ảnh và đóng | Nút Đóng hoạt động, điểm chọn trở lại hợp lý |
| T21 | Mở tệp khách bằng URL không có quyền | Không đọc được tệp riêng |
| T22 | Tài khoản kinh doanh sửa cấu hình | Bị hạn chế theo vai trò |
| T23 | Chủ website thêm sản phẩm | Nhập được hai bản và xem trước |
| T24 | Kiểm tra các URL cũ ưu tiên | Giữ hoặc chuyển 301 đúng nội dung |
| T25 | Mở URL không tồn tại | Trang 404 đúng và có đường quay lại |
| T26 | Kiểm tra môi trường thử | Không bị công cụ tìm kiếm lập chỉ mục |
| T27 | Tắt hoặc giảm chuyển động | Nội dung và thao tác vẫn đầy đủ |
| T28 | Phóng chữ 200% | Chữ không đè, nút không mất |
| T29 | Ảnh hoặc tệp tải bị thiếu | Giao diện dự phòng có hướng dẫn |
| T30 | Theo dõi sự kiện form | Chỉ tính sau khi lưu; không gửi dữ liệu cá nhân |
| T31 | Tải lại P18 hoặc mở trực tiếp | Không lộ thông tin hoặc tạo yêu cầu mới |
| T32 | Thử khôi phục bản sao | Dữ liệu và tệp phục hồi được |

## 19 3 Điều kiện nghiệm thu trước khi ra mắt

Đủ nội dung đã duyệt ở hai ngôn ngữ cho các trang ưu tiên; tất cả CTA có hành vi; các yêu cầu thật được lưu và chuyển tới đúng người; form được kiểm tra lỗi, trùng, tệp và email; ảnh và dữ liệu được dùng đúng quyền; giao diện khớp mẫu đã chốt trên desktop và biến đổi hợp lý trên mobile.

Không còn lỗi khiến khách không gửi yêu cầu, không mở nhóm hoặc không chuyển ngôn ngữ. Những lỗi khác được ghi mức độ, người xử lý và lịch sửa. Mỗi kịch bản có người kiểm tra, ngày, trình duyệt, thiết bị và kết quả; không nghiệm thu chỉ bằng câu “đã test”.

## 19 4 Kiểm tra sau khi website thật hoạt động

Trong ngày đầu: thử gửi từng loại yêu cầu từ máy tính và điện thoại; kiểm tra inbox, bản ghi, hotline, Zalo, HTTPS và các trang quan trọng. Trong tuần đầu: theo dõi lỗi form, email, URL cũ và tốc độ. Sau 2–4 tuần: xem dữ liệu khách thực để chỉnh cách dẫn CTA, nội dung và ảnh có vấn đề. Bản sao và khả năng quay về website cũ phải sẵn sàng nếu phát sinh lỗi nghiêm trọng khi chuyển đổi.

# 20 Hồ sơ bàn giao Bước 1 và công việc tiếp theo

## 20 1 Những phần đã xác định trong kế hoạch

Đã có cơ sở thiết kế theo đúng mẫu chọn; sáu vùng trang chủ; cấu trúc 18 trang cố định; mẫu chi tiết và bài viết; từng phần nội dung, nút và đích; quy tắc điện thoại; ba form một trang; quy trình tiếp nhận; song ngữ; dữ liệu quản trị; tài nguyên; lộ trình và tiêu chí kiểm tra.

Các sơ đồ trong tài liệu giúp đội triển khai xác định thứ tự, tỷ lệ vùng và hành vi. Bản thiết kế chi tiết ở Bước 2 sẽ quyết định bố cục pixel, crop ảnh, kiểu chữ cuối cùng và trạng thái tương tác.

## 20 2 Danh sách cần hoàn tất trước Bước 2 và Bước 3

| Hạng mục | Người xác nhận | Thời điểm cần |
|---|---|---|
| Tệp logo độ phân giải cao và bản màu chuẩn | Chủ website | Trước dựng thiết kế |
| Mẫu bao bì cho hero và quyền dùng | Chủ website và kỹ thuật sản phẩm | Trước chụp hoặc dựng hero |
| 12–18 mẫu ưu tiên, tên và phân nhóm | Chủ website và chuyên môn | Trước nhập dữ liệu |
| Hotline, email, URL Zalo và địa chỉ mới nhất | Chủ website | Trước dựng liên hệ |
| Chính sách mẫu, phí và điều kiện áp dụng | Người phụ trách kinh doanh | Trước xuất bản form mẫu |
| Giờ làm việc, lịch và người tư vấn | Chủ website | Trước xuất bản lịch tư vấn |
| Email nhận và người phụ trách dự phòng | Chủ website | Trước kiểm tra form |
| Hồ sơ năng lực và tài liệu chứng nhận hiện hành | Công ty | Trước xuất bản năng lực |
| Quyền hosting, tên miền và bản sao cũ | Chủ website và kỹ thuật | Trước xây môi trường thử |
| Bản tiếng Anh và tên pháp lý EN | Chủ website và biên tập | Trước ra mắt song ngữ |
| Thời gian lưu dữ liệu và nội dung chính sách | Người phụ trách công ty | Trước tiếp nhận khách thật |

Những mục chưa có không ngăn đội thiết kế dựng khung và trạng thái. Tuy nhiên nội dung phụ thuộc mục đó không được tự bịa hoặc đưa lên website thật trước khi được duyệt. Bước 2 có thể bắt đầu từ trang chủ và cấu trúc sản phẩm trong khi doanh nghiệp hoàn tất hồ sơ.

## 20 3 Gói bàn giao khi hoàn thành toàn bộ dự án

- Website thật và môi trường thử thuộc quyền kiểm soát của chủ sở hữu, thông tin quản trị bàn giao qua kênh phù hợp.
- Tệp thiết kế, tài nguyên gốc được phép dùng, bản tối ưu và bộ nội dung VI/EN.
- Mã nguồn hoặc cấu hình theme, danh sách plugin, bản quyền và lịch cập nhật.
- Tài liệu thao tác quản trị, hướng dẫn nhập sản phẩm, xử lý yêu cầu và sao lưu.
- Bảng chuyển hướng URL, báo cáo kiểm tra, danh sách dữ liệu và tệp được lưu.
- Buổi hướng dẫn chủ website trực tiếp thử thêm sản phẩm, thay liên hệ và xử lý yêu cầu.

## 20 4 Nguồn đối chiếu và tiêu chuẩn

Các thông số thiết kế, cấu trúc trang, luồng yêu cầu và lịch trình trong tài liệu là đề xuất cho HotPrint. Thông tin doanh nghiệp được đối chiếu với website hiện hữu ngày 11 tháng 10 năm 2026; việc xuất bản lại cần hồ sơ công ty hiện hành. Không suy ra tính hợp lệ hoặc thời hạn chứng nhận chỉ từ lời giới thiệu trên website.

- [Website HotPrint và thông tin liên hệ](https://hotprint.vn/) — nguồn về thương hiệu, sáu nhóm, hotline, email và thông tin cơ bản.
- [Trang Về chúng tôi của HotPrint](https://hotprint.vn/ve-chung-toi/) — nguồn tự công bố về mốc thành lập, hoạt động và chứng nhận.
- [Danh mục hộp giấy mềm hiện hữu](https://hotprint.vn/danh-muc/hop-giay-mem/) — đối chiếu cấu trúc danh mục và URL hiện tại.
- [Trang Liên hệ hiện hữu](https://hotprint.vn/lien-he/) — đối chiếu các kênh liên hệ và địa chỉ cần cập nhật.
- [Cohere](https://cohere.com/) — nguồn tham khảo nghệ thuật trong quá trình chọn mẫu; mẫu đính kèm đã chốt mới là chuẩn bố cục của kế hoạch này.
- [Google Web Vitals](https://web.dev/articles/vitals) — nguồn các mục tiêu LCP, INP, CLS và phân vị 75.
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) — đối chiếu tiêu chí khả năng tiếp cận và kiểm tra giao diện.
- [Google Search Central về các phiên bản ngôn ngữ](https://developers.google.com/search/docs/specialty/international/localized-versions) — đối chiếu URL bản dịch và hreflang.
- [WordPress về vai trò và quyền](https://wordpress.org/documentation/article/roles-and-capabilities/) — đối chiếu khả năng phân quyền ở nền tảng được đề xuất.

## 20 5 Thuật ngữ dùng trong tài liệu

**CTA:** nút hoặc liên kết kêu gọi khách thực hiện một hành động. **Hero:** vùng mở đầu có tiêu đề và hình ảnh chính. **Wireframe:** sơ đồ bố cục cơ bản. **CMS:** khu vực quản trị nội dung. **Breadcrumb:** đường chỉ vị trí trang trong website. **Responsive:** giao diện thay đổi hợp lý theo kích thước màn hình. **Staging:** môi trường dựng và kiểm tra trước khi cập nhật website thật. **301:** chuyển hướng từ URL cũ sang nội dung mới tương ứng. **Hreflang:** khai báo mối liên hệ giữa các bản ngôn ngữ. **LCP, INP, CLS:** nhóm chỉ số về tải nội dung chính, phản hồi thao tác và độ ổn định bố cục.




