# Hộp carton in màu — thiết kế theo mẫu 14/10/2026

## Thiết kế và nội dung

Trang P04 thay bố cục cũ bằng mẫu mới chủ website cung cấp: hero trải rộng, nền đá/lá; bốn thông tin theo hàng; thư viện ba cột; khối liên hệ và footer gọn. Hero dùng hai sản phẩm có thật: Cookever 032A5366 phía trước, USPA Sport 032A5358 phía sau. Playfair Display 600 cho tiêu đề, Playfair Display italic 500 cho phần nhấn nâu, Be Vietnam Pro cho điều hướng và công cụ; màu Natural Green / Warm Beige / Earthy Brown đã chốt.

Thư viện giữ đủ **11 mẫu carton**, không lấy túi, hộp cứng, decal hoặc lịch từ hình minh họa vào danh mục này. Thông tin về vật liệu/kết cấu cần được trao đổi theo sản phẩm; không bổ sung thông số, chứng nhận môi trường, kích thước, giá hay mức độ bán chạy không có nguồn. Toolbar có tìm kiếm, ứng dụng và mẫu đã chọn; sắp xếp mặc định/tên/mẫu đã chọn. Bộ lọc kích thước trong mẫu được thay bằng bộ lọc danh sách mẫu vì hiện không có số đo chính thức.

Các đoạn chú thích dài về nguồn ảnh và phương án tham khảo đã xóa theo yêu cầu trước của chủ website không được khôi phục. Gallery giữ ảnh thật, tên mẫu và các hành động báo giá/mẫu/mở ảnh gốc.

## Ảnh thật và phân loại

| Mã | Mẫu | Ứng dụng |
| --- | --- | --- |
| 032A5366 | Hộp bộ chảo Cookever | Gia dụng & nhà bếp |
| 032A5358 | Hộp USPA Sport | Giày dép & thời trang |
| 032A5326 | Hộp Milk Pan | Gia dụng & nhà bếp |
| 032A5361 | Hộp giày DC Shoes | Giày dép & thời trang |
| HP7107 | Hộp carton – 006 | Gia dụng & nhà bếp |
| HP7106 | Hộp carton – 005 | Cấu trúc khác |
| HP7094 | Hộp carton – 001 | Bao bì thực phẩm |
| HP6410 | Hộp bánh trung thu | Bao bì thực phẩm |
| HP6408 | Hộp bánh sinh nhật | Bao bì thực phẩm |
| HP6406 | Hộp đựng pizza | Bao bì thực phẩm |
| HP6404 | Hộp đựng giày | Giày dép & thời trang |

Đối chiếu 55 bản ghi API Store của hotprint.vn ngày 14/10/2026; bảy bản nhập carton có ảnh và ID chính thức khớp dữ liệu hiện tại. Hộp bánh trung thu được website công ty xếp vào carton: https://hotprint.vn/san-pham/hop-banh-trung-thu/. Các nguồn ảnh vẫn có trong product-image-sources.json và dist/product-data.js.

Hai sản phẩm nhập được dùng ảnh chủ website cung cấp rõ hơn ở riêng trang carton:
- HP7107: 032A5280.JPG, 5371×3580 → dist/assets/carton-photo-sources/HP7107.webp, 1800×1200. Ảnh rõ ghi SAMONO / COFFEE MAKER; tên hiển thị giữ tên trung tính chính thức.
- HP7106: 032A5333.JPG, 4950×3300 → dist/assets/carton-photo-sources/HP7106.webp, 1800×1200.

Hai tệp chỉ thu nhỏ/đổi định dạng, không crop hoặc vẽ lại nhãn. Mặt nạ SVG riêng trong dist/assets/carton-masks giữ pixel ảnh gốc; gallery carton cũng mở bản gốc rõ hơn. Dữ liệu và tài nguyên ảnh dùng chung ở các trang khác giữ nguyên.

## Nền và bóng đổ

Công cụ **ImageGen tích hợp**, chế độ tạo nền trống mới. Không dùng CLI/API fallback; không tạo hoặc sửa sản phẩm/nhãn hiệu. Hai tệp cuối trong repo:
- dist/assets/carton-editorial-hero-v2.webp — 2048×768.
- dist/assets/carton-catalog-stage-v1.webp — 1536×1024.

Ảnh sản phẩm và bóng nền dùng chung một hệ tọa độ gốc 3:2 hoặc 1:1, cùng tỷ lệ/vị trí. Bóng SVG riêng trong dist/assets/carton-shadows có bóng tiếp xúc, bóng đổ hướng xuống phải và vùng rìa mềm; không lấy toàn bộ đường bao đứng của sản phẩm làm bóng nằm trên sàn. Mặt bàn ở thư viện liên tục, không có bậc/viền đá đi qua chân sản phẩm. Các chân hộp được căn riêng theo ảnh gốc, kiểm tra ở desktop/tablet/mobile.

### Prompt nền hero

Use case: photorealistic-natural. Asset type: empty background plate for a premium Vietnamese packaging website hero. Create a wide panoramic 3:1 photograph (ideally 2048x768) of a warm ivory/beige limestone still-life set. NO PRODUCTS, NO BOXES, NO TEXT, NO LOGOS. Left 43% is quiet soft cream plaster and smooth cream surface, clear negative space for a headline. On right 57%, a very broad pale porous limestone plinth, almost flush with the ground, extends from bottom-right to center-right. Its top surface must be broad and fully visible, viewed from about 35 degrees above horizontal, with open empty space at the front center-right to place a tall photographed carton later. Plinth top reaches approximately y=60% and its short rough front edge occupies the bottom 15% at right. Rear plane is warm cream plaster. Restrained natural green leaves only at extreme upper right, extreme bottom left, and far right edge; never clutter the central open plinth or left headline area. Sunlight from upper left casts gently defined botanical shadows diagonally down-right, but the central product placement area stays evenly softly lit. Palette warm beige #E7DFD1, ivory, subtle natural green #5E7D5A. Real limestone pores, understated paper-like plaster grain, authentic photographic perspective. Premium editorial still-life photography, calm and elegant, no CGI gloss, no decorative lines or drawn artwork. Keep edges cream so the photo blends into a matching webpage background.

### Điều chỉnh nền hero lần cuối

Chế độ chỉnh sửa ảnh nền trống bằng ImageGen tích hợp; thu gọn cụm lá trái để không đi qua chữ. Ảnh sản phẩm không tham gia thao tác chỉnh sửa này.

Use case: precise-object-edit. Edit target: this EMPTY limestone/plaster website background plate. Change ONLY the foliage in the BOTTOM LEFT corner: make that leaf cluster much smaller, confined to the extreme left4% of the canvas and bottom20% of canvas. Remove the current large leaves that extend into the left headline/body area, restoring the original cream plaster/limestone textures beneath them. The entire left43% must be usable quiet negative space for text with no leaf crossing it; the tiny bottom-left leaf accent should stay at the edge. Keep the panoramic2048x768 composition, the limestone plinth on the right, camera angle, color palette, natural texture, upper-right foliage and sun/shadows unchanged. NO PRODUCTS, NO TEXT, NO LOGOS. Preserve every other detail of the source image.

### Prompt nền thư viện

Use case: photorealistic-natural. Asset type: EMPTY background plate for real carton product catalog photographs. Landscape 3:2, ideally1536x1024. High-end still-life photography of warm pale limestone, cream plaster and restrained natural green foliage. NO PRODUCTS, NO BOXES, NO TEXT, NO LOGOS. A single extremely broad, flat ivory limestone tabletop occupies the lower 85% of the frame and continues beyond all bottom/side edges. No plinth front edge, no steps or abrupt change in the middle/bottom of the frame, so products of different heights and footprints can rest on this continuous surface. Camera aimed downward at tabletop about35degrees from horizontal. Quiet cream/beige plaster fills only top15%, softly out of focus, with a small hint of desaturated sage in the extreme upper-right. Delicate tiny natural leaves enter only the far upper-left corner and extreme bottom-right corner, never cross the open central65% of the image. Upper-left soft sun creates gently defined foliage shadows traveling diagonally lower-right, authentic limestone pores and fine warm paper texture, subtle cream reflected light. The central surface is evenly illuminated with no dark leaf shadows in the main subject zone. Palette ivory, warm beige #E7DFD1, olive accents #5E7D5A. Photographic natural texture and believable depth, calm luxury, minimal and finely observed. Avoid CGI, excessive blur, high contrast dark green wall, objects, fake floating shadows, decorative line drawings or graphic gradients.

Font nghiêng từ nguồn Google Fonts chính thức, lưu cục bộ tại dist/assets/playfair-display-italic-500.ttf; CSS nguồn https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap.

## Nguồn mã và tiếp tục

- build-carton.mjs: cấu trúc VI/EN, các ảnh và danh mục đúng.
- dist/carton.css: giao diện chỉ trang carton, không thay các trang khác.
- dist/carton-reference.js: tìm kiếm không dấu, ứng dụng, danh sách mẫu, sắp xếp, URL/history/chuyển ngữ.
- dist/folding.js: gallery chung; bỏ bộ lọc cũ trên trang có controller carton riêng; mở hai ảnh gốc rõ hơn riêng carton.
- locales/zh-Hans.json, build-chinese.mjs: bản giản thể đầy đủ, giữ tiêu đề serif hai màu.
- qa-carton.mjs và qa-catalog-completeness.mjs: kiểm tra giao diện, chức năng, phân loại toàn bộ danh mục.

Danh sách quan tâm dùng key hotprint-sample-selection đã có, tối đa sáu mã thật, giữ mẫu từ các danh mục khác. Chỉ mẫu được chọn đưa vào trang yêu cầu; không checkout và không hiển thị đã gửi tự động. Trạng thái tìm kiếm/ứng dụng/danh sách/sắp xếp giữ qua lịch sử và đổi ngôn ngữ.

## Kiểm tra bản hoàn thiện

Build, kiểm tra cú pháp và verify:deployment đạt: 72 đường dẫn, 67 sản phẩm, 438 tham chiếu nội bộ, 504 tệp static; hash hero Trang chủ đã duyệt giữ nguyên. QA carton đạt 18 tổ hợp VI/EN/中文 × 1920/1440/1024/768/390/320px: đủ 11 mẫu, ảnh/bóng tải được, hai nguồn ảnh rõ hơn, tìm kiếm không dấu, ứng dụng, sắp xếp, chọn mẫu liên danh mục, tối đa sáu, đồng bộ giữa thẻ trình duyệt, trạng thái trống, URL/history/chuyển ngữ, gallery và ngữ cảnh báo giá/mẫu. Không có lỗi script hoặc tải tài nguyên.

Kiểm kê chung đạt 18 đường dẫn danh mục với đủ 67 mẫu và 12 cửa sổ chi tiết trên các màn hình/ngôn ngữ. Đã xem trực quan hero, thư viện và điện thoại để căn chân hộp trên mặt đá, hướng bóng, khoảng trống và chữ; độ chân thật của ảnh được đánh giá trực quan, không coi bài kiểm tra tự động là phép đo tính chân thật.

