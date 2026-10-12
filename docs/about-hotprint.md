# P10 — Về HotPrint

Trang VI: `/ve-chung-toi/`. Trang EN: `/en/about/`. Hoàn thành bản xem trước ngày 13/10/2026. Menu trên, menu điện thoại và footer của toàn website đã liên kết vào trang mới. Build chung hiện tạo 10 trang × VI/EN = 20 đường dẫn.

## Sáu phần theo kế hoạch

1. **Giới thiệu thương hiệu:** H1 Về HotPrint, tên pháp lý tiếng Việt, lời mở đầu “Từ một tờ giấy, đến dấu ấn của bạn”, ảnh hoạt động đội ngũ 032A5101. Nút Câu chuyện của chúng tôi và Trao đổi với HotPrint. Tên pháp lý giữ tiếng Việt trong bản EN, chưa tự đặt tên doanh nghiệp tiếng Anh.
2. **Câu chuyện:** mốc 06/09/2004 và mở chi nhánh Úc năm 2018, ảnh thao tác 032A4938. “Tâm trong cách làm. Tín trong mỗi hợp tác.” là tiêu đề diễn giải tinh thần công ty, không gắn thành phát biểu của một cá nhân.
3. **Cách đồng hành:** hiểu yêu cầu → thống nhất mẫu → kết nối sản xuất → tiếp tục trao đổi sau bàn giao. Có nút tư vấn, mẫu và liên kết Nhà máy. Không biến những nội dung này thành cam kết bảo hành/giao hàng miễn phí hay bảo đảm số liệu chưa được xác nhận.
4. **Đội ngũ và cách làm việc:** ảnh thật 032A4965, 032A5134; mô tả bốn nhóm công việc tư vấn, kỹ thuật, vận hành, kiểm tra. Không tạo tên, chức danh hoặc lời phát biểu nhân sự.
5. **Mẫu tham khảo:** ba ảnh thật 032A5315, 032A5293, 032A5331, dẫn tới ba danh mục tương ứng và thư viện tổng quan. Đây là thư viện mẫu, không tự biến thành case study/quan hệ khách hàng, không thêm testimonial hoặc logo đối tác.
6. **Kết nối:** tư vấn, báo giá, liên kết Nhà máy, thông tin pháp nhân/trụ sở/điện thoại/email. Nút Trao đổi hồ sơ năng lực chuẩn bị yêu cầu tài liệu theo dự án; không giả lập một hồ sơ PDF để tải xuống hoặc hiển thị huy hiệu chứng nhận chưa có tài liệu hiện hành.

## Thiết kế và ảnh

- Giữ bộ màu Natural Green #5E7D5A, Warm Beige #E7DFD1, Earthy Brown #8A6A55.
- Playfair Display 600 cho tiêu đề, Be Vietnam Pro cho nội dung. Khung giấy, nét mảnh, ghi chú nghiêng ở ngoài ảnh và các vùng sáng/xanh xen kẽ tạo nhịp đọc.
- Bốn ảnh hoạt động dùng nguyên các WebP đã được tối ưu từ thư mục ảnh thật; nguồn ở `factory-image-sources.json`. Ba ảnh sản phẩm có nguồn ở `product-image-sources.json`. Không chỉnh màu, tạo lại, phủ màu hay crop ảnh công ty trên trang này. Ảnh hiển thị theo tỷ lệ gốc.
- Ảnh AI mới duy nhất là nền giấy trống: `dist/assets/about-paper-v1.webp` (1536×1024, khoảng 127 KB). Lớp màu be được đặt trên **nền giấy trang trí**, không phủ lên ảnh người/sản phẩm. Hero Trang chủ và các tài nguyên ảnh đã chốt giữ nguyên.
- Biểu tượng/nét lá là SVG trang trí; không dùng ảnh chụp bản thiết kế làm website.

## Nguồn nội dung

Đối chiếu ngày 13/10/2026:

- [Về chúng tôi — website HotPrint](https://hotprint.vn/ve-chung-toi/): thương hiệu thuộc Hoàng Thị, ngày thành lập và mốc Úc năm 2018, tinh thần Tâm/Tín.
- [HotPrint — thông tin liên hệ](https://hotprint.vn/): tên công ty, mã số thuế 3600693834, hotline, email, trụ sở.
- Kế hoạch đã chốt: `docs/ke-hoach-website.md`, mục 8.2. Các phát biểu chứng nhận, số khách hàng, cam kết miễn phí/bảo hành trên website hiện tại chưa được chuyển thành huy hiệu hoặc lời hứa mới trong P10.

## Mã và hành vi

- Nội dung VI/EN: `build-about.mjs`. CSS riêng: `dist/about.css`.
- `build-products.mjs` tạo hai trang trước khi áp dụng theme chung. Không chỉnh trực tiếp HTML sinh ra trong các thư mục route.
- `dist/app.js`: định tuyến About, tiêu đề trang, menu VI/EN, ngữ cảnh yêu cầu hồ sơ. Chuyển ngôn ngữ giữ trang hiện tại và hash.
- Biểu mẫu tiếp tục chỉ chuẩn bị email; yêu cầu được gửi khi khách gửi qua ứng dụng email. Không có backend tiếp nhận hoặc thông báo “đã gửi” giả.
- Bản thử giữ noindex; chưa push hoặc deploy trong lần thiết kế này.

## Kiểm tra

- `npm run build`, `npm run check`.
- `npm run test:about`: 12 tổ hợp VI/EN × 1672/1440/1024/768/390/320 px; đủ sáu phần, ảnh tải được, không tràn ngang/lỗi JS/HTTP, menu, đổi ngôn ngữ, tư vấn, yêu cầu hồ sơ và báo giá hoạt động. Kiểm tra điều hướng từ các nhóm trang cũ.
- Chữ trên nền phẳng đã được kiểm tra tương phản riêng, không phát hiện lỗi; vùng nền giấy được kiểm tra bằng ảnh giao diện.
- Kết quả ở `qa/about-report.json`, `qa/about-contrast-audit.json`; ảnh desktop/mobile `qa/about-*.png`. QA không xuất bản.

## Imagegen — prompt đã dùng

Dùng công cụ Imagegen tích hợp. Ảnh gốc được giữ tại thư mục generated_images; bản WebP dùng cho dự án đã lưu trong `dist/assets/about-paper-v1.webp`.

```text
Use case: photorealistic-natural. Asset type: subtle decorative paper background for the ABOUT page of HotPrint, a real Vietnamese packaging company. Generate ONLY an empty warm beige handmade paper surface, landscape 3:2. Extremely subtle fine natural paper fibers, gentle sidelight, one barely visible soft out-of-focus botanical shadow along the far right margin. Center and left 85% blank and evenly lit, suitable for dark readable website copy over it. Palette warm beige #E7DFD1, ivory #F7F2E8, tiny desaturated sage shadow #5E7D5A. Quiet tactile editorial art direction, refined, natural, high-quality photography of paper. No objects, no packaging, no people, no factory, no logos, no labels, no text, no symbols, no borders, no mockup, no UI. This is just a background texture; actual company photos are separate and must not be generated.
```
