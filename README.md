# Website HotPrint

**Cập nhật P15 — 16/10/2026:** Kiến thức bao bì thiết kế lại theo phong cách sổ tay botanical: hero bàn giấy, ba lối đọc, bài nổi bật, tìm kiếm/chủ đề, sáu bài và trang đọc đồng bộ. Đọc `docs/knowledge-editorial-v2.md`; sửa `knowledge-editorial.mjs`, `dist/knowledge-editorial-v2.css`. Giữ ảnh sản phẩm thật và chức năng tìm kiếm. Chạy `npm run test:knowledge` và `npm run test:knowledge-editorial`.

**Cập nhật P02 — 16/10/2026:** Hero Khám phá sản phẩm theo mẫu mới, giữ nguyên ảnh hộp và bóng đổ từ ảnh được cung cấp; chữ/nút thật, ba ngôn ngữ, responsive. Đọc `docs/products-hero-reference-v3.md`; sửa `dist/products-hero-reference-v3.css`, không khôi phục lớp sản phẩm ghép cũ. Kiểm tra `node qa-products-hero-v3.mjs`.

**Cập nhật P12 — Yêu cầu báo giá:** [bố cục theo mẫu mới](docs/quote-reference-v2.md), nền giấy/lá, ảnh nhân sự thật và biểu mẫu gọn. `npm run test:quote` kiểm tra ba ngôn ngữ, nhập liệu và email dự thảo.

**Cập nhật P10 — Về HotPrint:** [bố cục botanical mới](docs/about-reference-v2.md), ảnh nhà máy/đội ngũ thật, tám phần và carousel sáu nhóm sản phẩm. Chạy `npm run test:about` để kiểm tra cả ba ngôn ngữ và màn hình nhỏ.

**Cập nhật P04 mới nhất:** xem [bản làm lại carton v4](docs/carton-reference-v4.md). Bố cục theo mẫu mới, 11 mẫu carton thật, nền tràn, ảnh giữ nguyên sản phẩm và sửa lỗi alpha của v3. Mọi điều hướng/footer vẫn có trong mục mở rộng; không dùng lại bố cục SAMONO của ff42f82.

Bản thiết kế website HotPrint đang phát triển, gồm **Trang chủ**, **Tổng quan sản phẩm**, **Hộp giấy mềm**, **Hộp carton in màu**, **Hộp cứng cao cấp**, **Túi giấy**, **Nhãn dán decal**, **Nhãn hàng & catalog**, **Nhà máy**, **Về HotPrint**, **Liên hệ**, **Yêu cầu báo giá**, **Yêu cầu mẫu**, **Đặt lịch tư vấn**, **Kiến thức bao bì**, **Chính sách riêng tư**, **Điều kiện gửi yêu cầu** và **Xác nhận gửi yêu cầu**, hỗ trợ tiếng Việt, tiếng Anh, tiếng Trung giản thể và điện thoại. Mã nguồn HTML/CSS/JavaScript thuần, có thể triển khai trên dịch vụ hosting tĩnh, không phụ thuộc tài khoản ChatGPT để chạy.

## Triển khai Vercel

Dự án dùng website tĩnh trong `dist`. Cấu hình `vercel.json` đặt **Framework Other**, **Build Command `npm run build`**, **Output Directory `dist`**. Root Directory phải là gốc repo (để trống). Không dùng máy chủ preview `server.mjs` làm function production. Xem [hướng dẫn và kiểm tra lỗi triển khai](docs/vercel-deployment.md). Chạy `npm run verify:deployment` sau build để kiểm tra tài nguyên và đường dẫn production.

## Tiếp tục bằng tài khoản khác

Đọc [HANDOFF.md](HANDOFF.md) trước: trạng thái tới P18, những yêu cầu phải giữ, cách mở preview và các phần tiếp theo. Mã nguồn/ảnh/font trong repo đủ để build và chạy, không cần quyền Sites của tài khoản cũ. Phiên bản hiện tại có 72 đường dẫn VI/EN/中文. Xem [tiếng Trung giản thể](docs/chinese-language.md).

## Chạy trên máy

Cài Node.js 20 trở lên, mở thư mục dự án và chạy:

```sh
npm run dev
```

Mở http://127.0.0.1:4174/ hoặc http://127.0.0.1:4174/san-pham/. Nhấn Ctrl+C để dừng. Website chạy không cần cài thư viện bổ sung.

| Trang | Tiếng Việt | Tiếng Anh | Tiếng Trung giản thể |
| --- | --- | --- | --- |
| Trang chủ | `/` | `/en/` | `/zh/` |
| Tổng quan sản phẩm | `/san-pham/` | `/en/products/` | `/zh/products/` |
| Hộp giấy mềm | `/danh-muc/hop-giay-mem/` | `/en/folding-cartons/` | `/zh/folding-cartons/` |
| Hộp carton in màu | `/danh-muc/hop-carton-in-mau/` | `/en/printed-corrugated-boxes/` | `/zh/printed-corrugated-boxes/` |
| Hộp cứng cao cấp | `/danh-muc/hop-cung-cao-cap/` | `/en/premium-rigid-boxes/` | `/zh/premium-rigid-boxes/` |
| Túi giấy | `/danh-muc/tui-giay/` | `/en/paper-bags/` | `/zh/paper-bags/` |
| Nhãn dán decal | `/danh-muc/nhan-dan-decal/` | `/en/adhesive-labels/` | `/zh/adhesive-labels/` |
| Nhãn hàng & catalog | `/danh-muc/nhan-hang-catalog/` | `/en/hang-tags-catalogues/` | `/zh/hang-tags-catalogues/` |
| Nhà máy | `/nha-may/` | `/en/factory/` | `/zh/factory/` |
| Về HotPrint | `/ve-chung-toi/` | `/en/about/` | `/zh/about/` |
| Liên hệ | `/lien-he/` | `/en/contact/` | `/zh/contact/` |
| Yêu cầu báo giá | `/yeu-cau-bao-gia/` | `/en/request-a-quote/` | `/zh/request-a-quote/` |
| Yêu cầu mẫu | `/yeu-cau-mau/` | `/en/request-a-sample/` | `/zh/request-a-sample/` |
| Đặt lịch tư vấn | `/dat-lich-tu-van/` | `/en/request-a-consultation/` | `/zh/request-a-consultation/` |
| Kiến thức bao bì | `/kien-thuc/` | `/en/packaging-insights/` | `/zh/packaging-insights/` |
| Chính sách riêng tư | `/chinh-sach-rieng-tu/` | `/en/privacy/` | `/zh/privacy/` |
| Điều kiện gửi yêu cầu | `/dieu-kien-gui-yeu-cau/` | `/en/request-terms/` | `/zh/request-terms/` |
| Xác nhận gửi yêu cầu | `/da-gui-yeu-cau/` | `/en/request-status/` | `/zh/request-status/` |

## Chỉnh sửa và tạo bản cập nhật

**P04 thiết kế mới 14/10/2026:** [trang carton theo mẫu, 11 ảnh thật, nguồn nền/bóng và công cụ](docs/carton-reference-2026-10-14.md). Kiểm tra `npm run test:carton`.

**Danh mục 14/10/2026:** [kiểm kê 67 mẫu và thiết kế cửa sổ chi tiết](docs/catalog-completion-2026-10-14.md). Dữ liệu chung `dist/product-data.js`; bổ sung từ website chính thức trong `official-products.json`; đối chiếu đủ sản phẩm trong `official-catalog-audit.json`. Maison Marou đã chuyển sang hộp cứng. Kiểm tra bằng `node qa-catalog-completeness.mjs` và `npm run test:library-reference`.

**P18 Xác nhận gửi yêu cầu:** [phạm vi hiện tại và trạng thái thực](docs/request-confirmation.md). Ba phần, VI/EN, hướng dẫn kiểm tra gửi email, ngữ cảnh loại yêu cầu và liên hệ. Sửa `build-request-status.mjs`, `dist/request-status.css`, `dist/request-status.js`; kiểm tra `npm run test:request-status`. Link sau chuẩn bị email mở thẻ mới giữ form. Chưa có backend nên không hiển thị đã tiếp nhận/mã/success. Build chung hiện 48 đường dẫn.

**P17 Điều kiện gửi yêu cầu:** [nội dung, thiết kế và kiểm tra](docs/request-terms.md). Năm mục, VI/EN, mục lục, links tới các form và P16. Sửa `build-terms.mjs`, `dist/terms.css`, layout chung `privacy.css`; kiểm tra `npm run test:terms`. Link từ form mở thẻ mới để giữ dữ liệu. Build chung hiện có 46 đường dẫn; điều kiện mô tả đúng cơ chế chuẩn bị email, cần công ty rà soát trước công bố.

**P16 Chính sách riêng tư:** [thiết kế, phạm vi đã xác minh và thông tin cần rà soát](docs/privacy-policy.md). Năm phần, mục lục, VI/EN và xóa danh sách mẫu lưu trên trình duyệt. Sửa `build-privacy.mjs`, `dist/privacy.css`, `dist/privacy.js`; kiểm tra `npm run test:privacy`. Liên kết từ form mở thẻ mới, giữ nội dung nhập. Hiện 16 trang cố định × 2 + 6 bài × 2 = 44 đường dẫn. Chưa xác minh thời hạn lưu/phân quyền/bên xử lý email từ website cũ; bản preview ghi rõ giới hạn, không tự coi là chính sách chính thức đã được duyệt.

**P15 Kiến thức bao bì:** [thiết kế, nội dung và nguồn](docs/packaging-insights.md). Bốn phần, tìm kiếm VI/EN không dấu, bốn chủ đề và sáu bài có trang đọc/mục lục/bài liên quan. Sửa `knowledge-content.mjs`, `build-knowledge.mjs`, `dist/knowledge.css`, `dist/knowledge.js`; kiểm tra `npm run test:knowledge`. Hiện có 30 đường dẫn trang cố định + 12 đường dẫn bài = 42. Bài mới là nội dung bản xem trước cần HotPrint rà soát kỹ thuật trước công bố; liên kết Tin tức cũ vẫn được giữ.

**P14 Đặt lịch tư vấn:** [thiết kế, ngày giờ và múi giờ](docs/consultation-request.md). Ba phần, chủ đề, lịch mong muốn và hình thức trao đổi. Sửa `build-consultation.mjs`, `dist/consultation.css` và bộ xử lý chung `dist/quote.js`; kiểm tra `npm run test:consultation`. Build chung hiện tạo 28 đường dẫn; tất cả nút tư vấn dẫn vào trang mới, mang theo chủ đề/mẫu thật. Khách chuẩn bị email; HotPrint cần xác nhận lịch riêng.

**P13 Yêu cầu mẫu:** [thiết kế, mẫu thật và cách nhận](docs/sample-request.md). Ba phần, loại mẫu/ảnh mẫu thật/danh sách quan tâm, địa chỉ nhận tùy chọn và chuẩn bị email. Sửa `build-sample-request.mjs`, `dist/sample-request.css`, bộ xử lý chung `dist/quote.js`; kiểm tra `npm run test:sample-request`. Build chung tạo 26 đường dẫn; nút Yêu cầu mẫu dẫn vào trang mới.

**P12 Yêu cầu báo giá:** [thiết kế, biểu mẫu và khả năng gửi](docs/quote-request.md). Ba phần, biểu mẫu trên một trang, điền sẵn nhóm/mẫu thật và đổi ngôn ngữ giữ dữ liệu. Sửa `build-quote.mjs`, `dist/quote.css`, `dist/quote.js`; kiểm tra `npm run test:quote`. Build chung tạo 24 đường dẫn. Các nút báo giá chuyển sang trang riêng; hiện chuẩn bị email và ghi tên tệp, chưa tiếp nhận/upload trên máy chủ.

**P11 Liên hệ:** [thiết kế, nội dung và kiểm chứng](docs/contact-page.md). Bốn phần, ba kênh trao đổi, hai địa chỉ và ba nhu cầu. Sửa `build-contact.mjs`, `dist/contact-page.css`, `dist/contact-page.js`; kiểm tra `npm run test:contact-page`. Build chung hiện tạo 22 đường dẫn.

**P10 Về HotPrint:** [nội dung, thiết kế và nguồn ảnh](docs/about-hotprint.md). Sáu phần, ảnh thật và câu chuyện đã đối chiếu; sửa `build-about.mjs`, `dist/about.css`. Kiểm tra `npm run test:about`. Build chung tạo 20 đường dẫn.

**Bộ màu mới cho toàn website:** [Natural Green / Warm Beige / Earthy Brown](docs/natural-colour-theme.md). Sửa `dist/natural-theme.css`; build chung áp dụng cho cả 48 đường dẫn, menu và biểu mẫu. Kiểm tra `npm run test:theme`. Bộ màu này thay các mô tả tím mận/xanh rừng cũ.

**P09 Nhà máy:** [nội dung, ảnh thật và kiểm chứng](docs/factory.md). Bảy phần, 12 ảnh nhà máy thật, VI/EN, tab thiết bị và thư viện ảnh. Sửa `build-factory.mjs`, `dist/factory.css`, `dist/factory.js`; kiểm tra `npm run test:factory`. Build chung hiện tạo 18 đường dẫn.

**P08 Nhãn hàng & catalog:** [nội dung, ảnh thật và kiểm chứng](docs/hang-tags-catalogues.md). Sáu phần, bốn mẫu thật, VI/EN. Sửa `build-tags-catalogues.mjs`, `dist/tags-catalogues.css`; kiểm tra `npm run test:tags`. Thư viện hiện gồm ba thẻ và một lịch; chưa có ảnh catalog thật.

**P07 Nhãn dán decal:** [nội dung, ảnh thật và kiểm chứng](docs/adhesive-labels.md). Sáu phần, ba mẫu thật, VI/EN. Sửa `build-labels.mjs`, `dist/labels.css`; kiểm tra `npm run test:labels`.

**P06 Túi giấy:** [nội dung, nguồn ảnh và kiểm chứng](docs/paper-bags.md). Sáu phần, tám mẫu thật, VI/EN. Sửa `build-bags.mjs`, `dist/bags.css`; kiểm tra `npm run test:bags`.

**P05 Hộp cứng cao cấp:** [nội dung, nguồn ảnh và kiểm chứng](docs/premium-rigid-boxes.md). Sáu phần, chín mẫu thật, VI/EN. Sửa `build-rigid.mjs`, `dist/rigid.css`; kiểm tra `npm run test:rigid`.

**P04 Hộp carton in màu:** [nội dung, ảnh và kiểm chứng](docs/printed-corrugated-boxes.md). Sáu phần, bốn mẫu thật, VI/EN; sửa `build-carton.mjs` và `dist/carton.css`; dùng chung `dist/folding.js`. Kiểm tra bằng `npm run test:carton`.

**P03 Hộp giấy mềm:** [nội dung, ảnh thật và tính năng](docs/folding-cartons.md). Sáu phần, tám mẫu thật, VI/EN; nguồn `build-folding.mjs`, CSS/JS ở `dist/folding.*`. Chạy `npm run test:folding` để kiểm tra riêng trang này.

**Chỉnh ảnh mới nhất:** [nền ánh sáng mềm và bóng tiếp xúc](docs/product-photo-integration.md), CSS cuối `dist/products-lighting.css`; hero đã bỏ hàng 06+/36+/tư vấn theo yêu cầu.

**Phần sáu nhóm mới:** [chi tiết bám mẫu](docs/families-reference-match.md); sửa trong `dist/products-families.css`, `dist/family-photo-windows.css` và `products-template.html`.

**Bản mới nhất 12/10/2026:** hero sản phẩm theo mẫu thiên nhiên/serif của chủ website, CSS ở `dist/products-botanical.css`. Xem [nội dung cập nhật và trạng thái preview](docs/cap-nhat-2026-10-12.md).

- `dist/index.html`: nội dung Trang chủ, header, footer, các cửa sổ liên hệ dùng chung.
- `dist/styles.css`, `dist/refinements.css`, `dist/contact-studio.css`: giao diện Trang chủ và phần dùng chung.
- `locales/zh-Hans.json`, `build-chinese.mjs`, `dist/i18n.js`: bản dịch tiếng Trung giản thể, dựng trang và điều hướng ba ngôn ngữ.
- `dist/app.js`: VI/EN/中文, điều hướng, cửa sổ liên hệ và biểu mẫu.
- `products-template.html`: cấu trúc trang Tổng quan sản phẩm. `build-products.mjs` lấy template này và header/footer dùng chung từ Trang chủ.
- `dist/products.css`, `dist/products.js`: thiết kế, bản dịch, tìm kiếm, bộ lọc, phân trang, thư viện ảnh sản phẩm.
- `dist/products-atelier.css`: hướng Product Atelier mới; danh mục giấy gấp, hero trưng bày và danh sách mẫu quan tâm. Xem `docs/product-atelier-direction.md` cho quyết định thiết kế và prompt Imagegen.
- `dist/product-data.js`: 36 mẫu tham khảo; tên, nhóm và các góc ảnh.
- `dist/assets/`: toàn bộ hình ảnh, logo và phông chữ cần để chạy website.

Sau khi sửa HTML hoặc cấu trúc trang, chạy:

```sh
npm run build
npm run check
```

Các tệp trong `dist/` được lưu trong repo và là bản dùng để xuất bản. Không sửa trực tiếp các tệp HTML đã sinh ở `dist/en/` hoặc `dist/san-pham/`; chúng được tạo lại khi build.

## Ảnh sản phẩm

Trang Tổng quan sản phẩm dùng **36 mẫu từ 48 ảnh gốc do chủ website cung cấp**, giữ nguyên sản phẩm và nhãn hiệu. Ảnh chỉ được xoay đúng hướng, thu nhỏ và nén WebP; khung/nền giao diện ở bên ngoài ảnh. Nguồn được ghi trong `product-image-sources.json`. Mã 032A… là mã ảnh tham khảo, không phải mã hàng chính thức.

Ảnh hero Trang chủ là thiết kế minh họa HotPrint đã được duyệt ở giai đoạn trước, có chú thích minh họa trên giao diện. Không dùng ảnh này làm bằng chứng sản phẩm đã sản xuất.

Bản Product Atelier trên trang sản phẩm sử dụng một nền giấy trống tạo bởi Imagegen. Sản phẩm ghép trên giao diện là tệp ảnh gốc qua khung cắt CSS; cửa sổ chi tiết luôn cung cấp ảnh đầy đủ. Không dùng ảnh sản phẩm được vẽ lại bằng AI. Danh sách tối đa 6 mẫu quan tâm chỉ lưu cục bộ trong trình duyệt để chuẩn bị nội dung tư vấn chung.

Ảnh WebP đã có đủ trong repo; không cần ảnh JPG gốc để chạy website. Nếu cần tạo lại ảnh, cài công cụ tùy chọn `npm install --no-save sharp`, rồi chạy:

```sh
node prepare-catalog.mjs "/duong-dan-den-thu-muc-anh-goc"
```

Thư mục nguồn chứa các tệp `032A5293.JPG`, v.v. Không tự thêm ảnh thương hiệu hoặc sản phẩm chưa được chủ website xác nhận.

## Xuất bản với Cloudflare Pages

Kết nối repo này với một dự án Cloudflare Pages thuộc tài khoản cố định của công ty:

- Production branch: `main`.
- Framework preset: `None`.
- Build command: `npm run build`.
- Build output directory: `dist`.
- Root directory: để trống (gốc repo).

Sau khi kết nối và triển khai lần đầu, các bản cập nhật đẩy lên `main` sẽ được Cloudflare triển khai theo cấu hình của dự án. Đưa mã vào GitHub **chưa tự tạo website trực tuyến**. Không có cấu hình hosting hay quyền truy cập tài khoản Sites cũ trong repo này.

## Tiếp tục khi đổi tài khoản Codex

Mở lại thư mục này, hoặc clone repo trên máy khác. Yêu cầu Codex đọc `AGENTS.md`, `PRODUCTS.md` và `docs/ke-hoach-website.md` trước khi sửa. Quyền đẩy lên GitHub và quyền hosting vẫn phải thuộc tài khoản được bạn cấp phép; đổi tài khoản Codex không tự cấp các quyền đó. Không lưu mật khẩu hoặc token trong repo.

## Kiểm tra

Kiểm tra cú pháp: `npm run check`. Kiểm tra trình duyệt tùy chọn: cài `npm install --no-save playwright`, bảo đảm có Google Chrome, chạy website ở cổng 4174 rồi `npm run test:browser`. Script kiểm tra VI/EN × 1440/1024/768/390/320, tìm kiếm không dấu, nhóm, phân trang, quay lại, bộ lọc mobile, thư viện ảnh và mẫu điền sẵn. Kết quả trong `qa/` được bỏ qua bởi Git.

## Phạm vi hiện tại

- Biểu mẫu chuẩn bị email; khách kiểm tra và gửi trong ứng dụng email. Chưa có máy chủ lưu yêu cầu hoặc trang quản trị.
- Báo giá riêng theo nhu cầu; không có tính giá tự động, thanh toán hay giỏ hàng.
- Đã có P01–P18 VI/EN và sáu bài kiến thức VI/EN; phần tiếp nhận thật, trang chi tiết theo URL và 404 thiết kế còn ở giai đoạn sau.
- Bản thử vẫn có `noindex,nofollow`; chỉ bỏ khi chủ website quyết định ra mắt chính thức.
- Không tự thay đổi website hotprint.vn hoặc cấu hình tên miền hiện có.

Xem thêm [chi tiết trang sản phẩm](PRODUCTS.md), [kế hoạch website](docs/ke-hoach-website.md) và [lịch sử quyết định thiết kế](docs/lich-su-thiet-ke.md).

Hình ảnh và nhãn hiệu trong repo không được cấp giấy phép tái sử dụng chung. Phông Be Vietnam Pro có giấy phép riêng tại `dist/assets/OFL-BeVietnamPro.txt`.

## Thiết kế tham chiếu mới nhất — 13/10/2026

- [Khối liên hệ Trang chủ](docs/home-contact-reference.md): ba thẻ theo ảnh chủ website cung cấp.
- [Sáu nhóm sản phẩm](docs/families-reference-2026-10-13.md): bố cục, thanh lọc và bóng đổ theo mẫu mới, giữ ảnh gốc.
- Kiểm tra: `npm run test:home-contact` và `npm run test:families-reference`.

## Thư viện sản phẩm: thiết kế theo mẫu mới

Thư viện dùng ảnh thật trên nền đá/lá, có tìm kiếm, lọc, sắp xếp, gallery và danh sách mẫu tham khảo. Xem [tài liệu thiết kế và nguồn ảnh](docs/library-reference-2026-10-13.md). Kiểm tra: `npm run test:library-reference`.

P04 sau rà soát của chủ website: [sửa ảnh, bóng tiếp xúc và khôi phục đầy đủ chân trang](docs/carton-photo-repair-2026-10-14.md).

**P06 Túi giấy mới nhất (15/10/2026):** xem [thiết kế và bàn giao](docs/bags-reference-v2.md). Giữ logo gốc, 15 mẫu thật, ba ngôn ngữ; kiểm tra bằng npm run test:bags.

**P07 Nhãn dán decal mới nhất (15/10/2026):** xem [thiết kế và bàn giao](docs/labels-reference-v2.md); 7 mẫu thật, VI/EN/中文, kiểm tra bằng npm run test:labels.

**P08 cập nhật 15/10/2026:** [Nhãn hàng & catalog theo mẫu mới](docs/catalog-reference-v2.md), 8 mẫu thật, VI/EN/中文; logo gốc, ảnh nguồn nguyên vẹn, gallery đủ góc, bộ lọc và carousel. `npm run test:tags` kiểm tra 18 tổ hợp màn hình/ngôn ngữ và các hành vi.
