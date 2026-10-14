# Hướng dẫn tiếp tục website HotPrint

## Dự án và ưu tiên

Repo này là bản mã nguồn độc lập với tài khoản Codex/Sites. Chủ website trao đổi bằng tiếng Việt, ưu tiên lời giải thích đơn giản. Đọc HANDOFF.md, README.md, PRODUCTS.md và docs/ke-hoach-website.md trước khi sửa. HANDOFF.md là trạng thái bàn giao mới nhất tới P18 và nêu các phần chưa triển khai. Yêu cầu mới nhất của người dùng được ưu tiên hơn các lựa chọn cũ trong lịch sử.

## Yêu cầu đã chốt

- Đối tượng chính: bộ phận mua hàng của doanh nghiệp. Mục tiêu: thể hiện thương hiệu, sản phẩm thật và năng lực nhà máy, tạo yêu cầu tư vấn/báo giá.
- Giữ nguyên logo, biểu tượng và tên HotPrint. Ẩn dòng ISO 9001 bằng khung CSS như hiện tại, không vẽ lại biểu tượng.
- Giữ VI/EN và bổ sung tiếng Trung giản thể (简体中文 / 中文) theo yêu cầu 13/10/2026; đọc `docs/chinese-language.md`. Hiện có 72 đường dẫn trong ba ngôn ngữ. Sửa từ điển `locales/zh-Hans.json` khi nội dung nguồn thay đổi. Dịch tại các controller, không dịch nội dung khách nhập hoặc ảnh. Giữ dữ liệu khi chuyển ngữ trong form. Giao diện đáp ứng máy tính, máy tính bảng, điện thoại.
- Bộ màu mới nhất: Natural Green #5E7D5A, Warm Beige #E7DFD1, Earthy Brown #8A6A55. Đọc `docs/natural-colour-theme.md`; toàn bộ 72 đường dẫn dùng `dist/natural-theme.css` qua `apply-theme.mjs`. CTA nâu đất, logo hiển thị xanh tự nhiên; mô tả tím mận/xanh rừng trong tài liệu cũ là lịch sử. Sáu biểu tượng trong bản trải hộp ở Trang chủ phải được giữ theo yêu cầu đã chốt; không đổi bố cục đó nếu chưa được yêu cầu.
- Ảnh sản phẩm mới phải lấy từ tệp chủ website cung cấp hoặc website chính thức hotprint.vn. Không dựng sản phẩm, nhãn hiệu hoặc khách hàng giả. Có thể thiết kế khung/nền bên ngoài, không làm sai sản phẩm.
- Hero Trang chủ hiện có là concept HotPrint được duyệt trước đó và phải giữ chú thích minh họa. Yêu cầu mới nhất: giữ nguyên ảnh `hero-hotprint-v3.webp` cùng bản nhỏ, tỷ lệ 3:2 và toàn bộ chi tiết nền/hoa văn/lá/bóng; chỉ đổi nền CSS ngoài ảnh. Không crop, kéo giãn, phủ màu, thay hoặc tạo lại ảnh nếu chưa được yêu cầu. Thư viện sản phẩm chỉ dùng ảnh thật.
- Không có báo giá tự động, biểu mẫu báo giá theo bước, checkout hay tuyên bố chứng nhận/MOQ/thông số không có nguồn.
- Liên hệ qua điện thoại, Zalo, email, yêu cầu mẫu và lịch tư vấn. Biểu mẫu hiện chỉ chuẩn bị email; không được hiển thị đã gửi khi chưa có hệ thống tiếp nhận thật.

## Làm việc

- Hosting hiện dùng Vercel (`hotprint.vercel.app`); đọc `docs/vercel-deployment.md`. Giữ `vercel.json` framework null/Other, build `npm run build`, output `dist`, Root Directory gốc repo. `server.mjs` chỉ preview; không triển khai như backend function. Không thêm SPA catch-all rewrite vì site có nhiều HTML routes. Kiểm tra `npm run verify:deployment`; chỉ báo deploy thành công khi URL thực đã được xác minh.

- P18 Xác nhận gửi yêu cầu có `/da-gui-yeu-cau/`, `/en/request-status/`: đọc `docs/request-confirmation.md`. Sửa `build-request-status.mjs`, `dist/request-status.css/js`. Ba phần hiện là hướng dẫn kiểm tra email/ngữ cảnh loại/liên hệ; không là trạng thái tiếp nhận. Chỉ cho hiện đã nhận/mã/tóm tắt khi máy chủ lưu thật và xác minh. Query type là ngữ cảnh; query success/id không là bằng chứng. Link trong vùng ready của quote/sample/consult mở thẻ mới giữ form; không chuyển PII/draft/file lên URL/storage. Mở trực tiếp hướng dẫn chọn form, luôn noindex. Build hiện 48 đường dẫn.

- P17 Điều kiện gửi yêu cầu đã có `/dieu-kien-gui-yeu-cau/`, `/en/request-terms/`: đọc `docs/request-terms.md`. Sửa `build-terms.mjs`, `dist/terms.css`, layout chung `privacy.css`. Năm mục, links form/P16, footer nội bộ. Links từ form mở thẻ mới giữ dữ liệu; không thêm checkbox chấp nhận mới. Chỉ mô tả cơ chế chuẩn bị email và trao đổi riêng; không dựng giá/phí/cọc/MOQ/thời hạn/đơn hàng/lịch/xác nhận hay điều khoản hợp đồng chưa được công ty duyệt. Dùng lại nền giấy Imagegen/SVG, giữ ảnh cũ. Build chung 46 đường dẫn.

- P16 Chính sách riêng tư đã có `/chinh-sach-rieng-tu/`, `/en/privacy/`: đọc `docs/privacy-policy.md`. Sửa `build-privacy.mjs`, `dist/privacy.css`, `dist/privacy.js`. Năm mục, scope phiên bản thực, footer nội bộ, link từ form mở thẻ mới để giữ dữ liệu. Chỉ xóa localStorage key mẫu; products.js/quote.js đồng bộ qua storage event. Chưa xác minh retention/phân quyền/bên xử lý email từ hotprint.vn (đã kiểm tra trang, sitemap và API); không tự điền số ngày, vai trò/DPO, đơn vị hosting/email, chứng nhận tuân thủ hoặc bảo mật tuyệt đối. Bản review cần công ty rà soát trước công bố. Không thêm cookie banner/tracking/luồng xóa hồ sơ trên máy chủ giả. Build 16 trang cố định × 2 + 6 bài × 2 = 44 đường dẫn.

- P15 Kiến thức bao bì đã có `/kien-thuc/` và `/en/packaging-insights/`: đọc `docs/packaging-insights.md`. Sửa dữ liệu VI/EN trong `knowledge-content.mjs`, dựng trang bằng `build-knowledge.mjs`, CSS/JS riêng `dist/knowledge.*`. Bốn phần tổng quan, sáu bài với trang đọc năm phần. Search VI/EN không dấu, URL q/topic/page, chín bài mỗi trang khi đủ; hiện sáu bài không cần pagination. Chuyển VI/EN tới cùng bài và anchor; ngữ cảnh bài tư vấn chuyển vào P14. Nội dung mới là bản biên tập để rà soát kỹ thuật, không tự tuyên bố đã được công ty duyệt. Không tạo thông số/chứng nhận/lead time/lượt đọc/tác giả giả, không xóa hay redirect tin tức cũ trong preview. Dùng ảnh gốc/sơ đồ SVG và nền giấy đã duyệt; giữ hero Trang chủ. Build hiện 15 trang cố định × 2 + 6 bài × 2 = 42 đường dẫn.

- P14 Đặt lịch tư vấn đã có `/dat-lich-tu-van/` và `/en/request-a-consultation/`: đọc `docs/consultation-request.md`. Sửa `build-consultation.mjs`, `dist/consultation.css`, xử lý chung `dist/quote.js` mode consult. Build sau P13. Ba phần, chủ đề bắt buộc, lịch/múi giờ/hình thức đề nghị. Ngày tối thiểu tính theo múi giờ được chọn, không dùng ngày của máy người xem. Không dựng giờ trống/nhân sự/lịch xác nhận/ICS. Các nút tư vấn dẫn P14; ngữ cảnh chất lượng/hồ sơ/gặp trực tiếp và danh sách mẫu thật được chuyển sang. Chỉ chuẩn bị email, chưa nhận lịch hoặc upload. Giữ nguyên hero/ảnh thật, dùng lại nền giấy Imagegen đã chốt. Build hiện tạo 28 đường dẫn.

- P13 Yêu cầu mẫu đã có `/yeu-cau-mau/` và `/en/request-a-sample/`: đọc `docs/sample-request.md`. Sửa `build-sample-request.mjs`, `dist/sample-request.css`, bộ xử lý chung `dist/quote.js` mode sample. Build P12 trước P13. Ba loại nhu cầu, preview mẫu thật, danh sách mẫu đã lưu chỉ đưa vào khi khách chọn, cách nhận và địa chỉ tùy chọn. Mọi nút mẫu dẫn P13; báo giá P12; tư vấn dẫn P14. Không tự hứa mẫu có sẵn/miễn phí/giao ngay, trạng thái đã nhận hoặc mã giả. Tệp chỉ ghi tên để khách đính kèm email; chưa upload. Build chung 26 đường dẫn.

- P12 Yêu cầu báo giá đã có `/yeu-cau-bao-gia/` và `/en/request-a-quote/`: đọc `docs/quote-request.md`. Sửa `build-quote.mjs`, `dist/quote.css`, `dist/quote.js`. Ba phần, một trang form, giữ dữ liệu khi đổi VI/EN, nhóm/mã mẫu thật truyền qua URL. Nút báo giá toàn website dẫn vào P12; mẫu dẫn P13, tư vấn dẫn P14. Không tính giá, tạo mã yêu cầu hoặc báo gửi thành công giả. Tệp chỉ được chọn để ghi tên; khách đính kèm trong email, chưa upload. Dùng lại nền giấy Imagegen đã chốt, không tạo lại ảnh thật. Build chung 24 đường dẫn. Chủ website đã xác nhận giữ hai địa chỉ đang công bố; không hỏi xác nhận lại.

- P11 Liên hệ đã có `/lien-he/` và `/en/contact/`: đọc `docs/contact-page.md`. Sửa `build-contact.mjs`, `dist/contact-page.css`, `dist/contact-page.js`, điều hướng/ngữ cảnh dùng chung `dist/app.js`. Bốn phần theo kế hoạch; Zalo/điện thoại/email đối chiếu website chính thức. Địa chỉ dùng thông tin đang công bố; chưa có ghim Maps chính thức nên nút là tìm địa chỉ trên Google Maps, không dựng bản đồ/tọa độ giả. Cập nhật khi công ty cung cấp. Chỉ nền giấy trang trí là Imagegen, ảnh nhà máy gốc giữ nguyên. Không thêm form tổng quát thứ tư, giờ làm việc, cam kết phản hồi hoặc gửi thành công giả. Build chung hiện tạo 22 đường dẫn.

- P10 Về HotPrint đã có `/ve-chung-toi/` và `/en/about/`: đọc `docs/about-hotprint.md`. Sửa `build-about.mjs`, `dist/about.css`, định tuyến/ngữ cảnh biểu mẫu chung `dist/app.js`. Sáu phần theo kế hoạch, hai mốc lịch sử đã đối chiếu website công ty; bốn ảnh hoạt động và ba mẫu thật. Chỉ nền giấy trống `about-paper-v1.webp` là Imagegen. Không thêm nhân sự, phát biểu, case study, PDF hồ sơ, huy hiệu chứng nhận hoặc tên pháp lý EN giả. Menu/header/footer dẫn vào trang nội bộ. Build chung tạo 20 đường dẫn.

- P09 Nhà máy đã có `/nha-may/` và `/en/factory/`: đọc `docs/factory.md`. Sửa `build-factory.mjs`, `dist/factory.css`, `dist/factory.js`; 7 phần và 12 ảnh thật được ghi nguồn trong `factory-image-sources.json`. Không tạo ảnh nhà máy/nhân sự AI hoặc huy hiệu chứng nhận chưa có tài liệu hiện hành. Menu và liên kết cuối các nhóm sản phẩm dẫn vào trang mới; build chung tạo 18 đường dẫn.

- P08 Nhãn hàng & catalog đã có trang riêng: đọc `docs/hang-tags-catalogues.md`. Sửa `build-tags-catalogues.mjs`, `dist/tags-catalogues.css`, gallery chung `folding.js` nhóm `catalog`. Bốn mẫu thật (ba thẻ, một lịch), hai hướng thẻ/ấn phẩm tách rõ. Chưa có ảnh catalog: giữ chú thích mẫu lịch, không tạo ảnh catalog giả. Build chung hiện có 16 đường dẫn; toàn bộ sáu nhóm dẫn vào trang riêng.

- P07 Nhãn dán decal đã có trang riêng: đọc `docs/adhesive-labels.md`. Sửa `build-labels.mjs`, `dist/labels.css`, gallery chung `dist/folding.js` qua nhóm `label`. Ba mẫu thật, VI/EN; không cần bộ lọc. Build chung hiện tạo 14 đường dẫn. Nhóm thứ năm dẫn vào P07. Mặt nạ `dist/assets/label-masks` chỉ lộ pixel ảnh gốc. Mẫu 032A5337 được gọi “Nhãn tròn ký hiệu 2 dạng cuộn” theo nội dung nhìn thấy; không khôi phục mô tả suy đoán khuyến mại.

- P06 Túi giấy đã có trang riêng: đọc `docs/paper-bags.md`. Sửa `build-bags.mjs`, `dist/bags.css`, dùng chung `dist/folding.js` qua nhóm `bag`. Tám mẫu thật, VI/EN. Build chung hiện tạo 12 đường dẫn; nhóm thứ tư dẫn vào P06. Mặt nạ hiển thị nằm trong `dist/assets/bag-masks`, bitmap ảnh gốc giữ nguyên. Tên XXiS và Sanestco Khánh Hòa đã đối chiếu ảnh; không khôi phục tên XXS/Kim Hỷ cũ.

- P05 Hộp cứng cao cấp đã có trang riêng: đọc `docs/premium-rigid-boxes.md`. Sửa `build-rigid.mjs`, `dist/rigid.css`, dùng chung gallery `dist/folding.js`. Chín mẫu thật, VI/EN. Build chung hiện tạo 10 đường dẫn. Menu/nhóm thứ ba dẫn vào P05, slug dữ liệu vẫn `hop-cao-cap`. Giữ nguyên sản phẩm/nhãn, chỉ thay nền ngoài.

- P04 Hộp carton in màu đã có trang riêng; đọc `docs/printed-corrugated-boxes.md`. Nội dung `build-carton.mjs`, CSS `dist/carton.css` kế thừa `folding.css`, JS gallery dùng chung `folding.js` qua `data-product-group`. Build chung tạo 8 đường dẫn. Giữ bốn mẫu thật và điều hướng nhóm carton vào P04. Không tạo nhãn hay sản phẩm mới.

- P03 Hộp giấy mềm đã có trang riêng: đọc `docs/folding-cartons.md`. Sửa nội dung VI/EN ở `build-folding.mjs`, giao diện `dist/folding.css`, hành vi `dist/folding.js`; build chung tạo cả 6 đường dẫn. Giữ điều hướng từ menu/P01/P02 và 8 ảnh thật. Không quay về bộ lọc khi người dùng chọn ô Hộp giấy mềm.

- Chỉnh mới nhất: đọc `docs/product-photo-integration.md`. Hero đã bỏ hàng 06+/36+/tư vấn. Nền ánh sáng mềm ở hai tệp `*-softlight-v2.webp`, CSS cuối `products-lighting.css`, bóng riêng và mặt nạ khe nhãn; giữ ảnh sản phẩm gốc. Không khôi phục hàng số liệu đã bỏ khi cập nhật bản dịch.

- Phần sáu nhóm P02.2 đã đổi theo mẫu mới: đọc `docs/families-reference-match.md`. CSS riêng `products-families.css`, khung ảnh `family-photo-windows.css`. Giữ cả hero đã chốt và sáu ô dạng hai hàng lệch nhịp; tất cả ảnh sản phẩm là ảnh thật, chỉ nền được tạo riêng.

- Yêu cầu mới nhất: hero sát ảnh tham chiếu từng chi tiết. Đọc `docs/hero-reference-match.md` trước các ghi chú cũ; font hiện là Playfair Display 600, nền riêng `botanical-reference-background.webp`, CSS tiếp tục ở `products-botanical.css`.

- Cập nhật mới nhất 12/10/2026: đọc `docs/cap-nhat-2026-10-12.md`. Hero sản phẩm đã đổi theo mẫu serif/thiên nhiên, nằm trong `dist/products-botanical.css`; ghi đè mô tả hero Atelier cũ. Đây là giao diện thật, không dùng ảnh chụp toàn bộ thiết kế làm trang web.

- Sửa Trang chủ ở dist/index.html; sửa cấu trúc trang sản phẩm ở products-template.html, được build-products.mjs dựng thành HTML. Thiết kế mới ở dist/products-atelier.css; xem docs/product-atelier-direction.md. Chạy npm run build để đồng bộ bốn đường dẫn, rồi npm run check.
- Dùng ảnh có sẵn trong dist/assets. product-image-sources.json lưu nguồn ảnh. Đừng đưa ảnh gốc dung lượng lớn hoặc tài liệu riêng tư lên repo khi không cần.
- Kiểm tra màn hình nhỏ, bộ lọc, tìm kiếm, đổi ngôn ngữ và điều hướng sau thay đổi liên quan.
- Không thêm ID dự án .openai cũ. Không dùng lại quyền truy cập hoặc thông tin đăng nhập của tài khoản trước. Không tự tạo thêm Site khi người dùng chỉ yêu cầu sửa mã.
- Xuất bản theo dịch vụ hosting đã được cấu hình và quyền thực tế. Mã được đẩy lên GitHub không đồng nghĩa đã triển khai trực tuyến.
- Bảo toàn nội dung đang có; không force-push. Không thêm token, mật khẩu, hồ sơ Codex, .env hoặc đường dẫn người dùng cục bộ vào repo.

- Cập nhật 13/10/2026: danh mục P02 theo mẫu mới, xem `docs/families-reference-2026-10-13.md`. Đây là hướng mới nhất cho riêng sáu thẻ, thay ghi chú P02.2 cũ: lưới ba cột thẳng hàng, thanh lọc `family`, nền mới và bóng riêng, ảnh thật giữ nguyên. Trang chủ khối liên hệ xem `docs/home-contact-reference.md`; chỉ scope `#lien-he.connection-reference`.

- Cập nhật thư viện P02.3 ngày 13/10/2026: đọc docs/library-reference-2026-10-13.md. CSS chỉ scope #thu-vien, giữ 36 ảnh thật và 12 mẫu/trang. Các nút lưu mẫu là danh sách tham khảo, không phải giỏ thanh toán. Query sort giữ qua chuyển ngữ. Không khôi phục ảnh nền trắng/ảnh đổi khi hover trong thẻ; ảnh gốc và góc ảnh phụ xem tại gallery.

- Cập nhật P04 mới nhất 14/10/2026: đọc docs/carton-reference-2026-10-14.md. Hero rộng Cookever/USPA, bốn thông tin, thư viện ba cột đủ 11 carton, footer gọn. CSS/JS riêng carton.css và carton-reference.js; gallery chung folding.js. Giữ ảnh thật và hai bản ảnh gốc rõ hơn riêng P04; bóng sàn riêng, không drop-shadow toàn đường bao sản phẩm. Theo hướng mới này thay ghi chú P04 bốn mẫu/sáu phần cũ.
