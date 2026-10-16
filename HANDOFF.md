# Bàn giao website HotPrint — 13/10/2026

**Khối chi tiết Túi giấy — 16/10/2026:** Túi Socola đổi sang túi vàng 032A5311 theo mẫu, ảnh lớn và callout bên phải; mobile chữ dưới ảnh. Nút ảnh gốc/tư vấn đúng mẫu. Xem `docs/bag-yellow-craft-v3.md`. Giữ hero túi đỏ và đủ 15 gallery.

**Hero Túi giấy — 16/10/2026:** Theo xác nhận chủ website, thay KARL đầu trang bằng túi đỏ theo mẫu. Xem `docs/bag-hero-red-v4.md`. Ảnh gốc đúng là **032A5336**, không phải túi vàng 032A5311. Giữ thư viện 15 mẫu, logo và footer đầy đủ.

**Cập nhật chân trang carton — 16/10/2026:** Dùng footer chung đầy đủ, hiển thị trực tiếp; không rút gọn hoặc đưa vào disclosure. Dải liên hệ chuyển nền kem–sage mềm để nối thư viện với footer. Xem `docs/carton-footer-flow.md`; chỉnh `build-carton.mjs` và CSS `.carton-flow`/`.carton-footer-full`.

**Cập nhật hero carton — 16/10/2026:** Thay Cookever bằng đúng ảnh hộp bánh trung thu đỏ chủ website gửi; giữ pixel ảnh và bóng bằng WebP lossless. Xem `docs/carton-hero-mooncake-v5.md`. Nút mở ảnh gốc HP6410. Chỉnh `build-carton.mjs` và CSS cuối `dist/carton-reference-v4.css`.

**Cập nhật P03 AMPHA 3B — 16/10/2026:** Slide đầu cuối trang đổi sang HP6388 với ảnh dựng cảnh nền đá ngà/hoa trắng theo mẫu gửi. Nút báo giá/mẫu và cửa sổ ảnh gốc đều dùng HP6388. Đọc `docs/folding-ampha-showcase.md`; không khôi phục Lévinia làm slide mặc định.

**Cập nhật dải ảnh P03 — 16/10/2026:** Thay cận cảnh Lévinia bằng bộ hộp LUBI theo ảnh chủ website gửi, nền đá ngà/hoa trắng và nội dung đúng sản phẩm. Liên kết mở ảnh gốc LUBI. Đọc `docs/folding-lubi-detail.md`; sửa `build-folding.mjs` và CSS `.fold-lubi-strip` cuối `dist/folding-reference.css`. Giữ hero và 13 mẫu thư viện.

**Chuyển tiếp P02 — 16/10/2026:** Trang Khám phá sản phẩm nối các khối bằng nền giấy sáng và mép cong kem/xanh nhạt; ảnh liên hệ hòa vào phần chữ trên điện thoại. Đọc `docs/products-section-flow.md`, sửa `dist/products-section-flow.css` và SVG trong `products-template.html`. Không nhân rộng CSS này sang các trang khác.

**Cập nhật P03 hero v3 — 16/10/2026:** Đầu trang Hộp giấy mềm theo mẫu mới: ảnh tràn cụm hộp LUBI và hộp khăn giấy từ ảnh chủ website gửi, bệ đá, ánh sáng cửa sổ và bóng tiếp xúc. Giữ logo và sáu nhóm. Đọc `docs/folding-hero-v3.md`; sửa `folding-hero-v3.mjs`, `dist/folding-hero-v3.css`. Không khôi phục hero Bitter Melon ghép cũ. Ảnh hero là bản dựng cảnh AI từ ảnh được cung cấp; không gắn nhãn ảnh gốc. Thư viện 13 mẫu giữ nguyên. Chạy `npm run test:folding-hero` và `npm run test:folding`.

**Cập nhật P15 chi tiết v3 — 16/10/2026:** Bài nổi bật, sáu thẻ và trang đọc được hoàn thiện với ảnh nền đá ngà, bóng tiếp xúc và điểm nhấn lá; mục lục theo vị trí đọc, checklist và sao chép ghi chú. Đọc `docs/knowledge-details-v3.md`. Sửa `knowledge-details.mjs`, `dist/knowledge-details-v3.css`, `dist/knowledge-reading.js`. Ảnh sản phẩm trình bày đã chỉnh bằng Imagegen, ảnh gốc vẫn có qua liên kết trong từng bài; không mô tả bản chỉnh là ảnh gốc chưa xử lý. Chạy `npm run test:knowledge-details`.

**Cập nhật P15 — 16/10/2026:** Kiến thức bao bì thiết kế lại theo phong cách sổ tay botanical: hero bàn giấy, ba lối đọc, bài nổi bật, tìm kiếm/chủ đề, sáu bài và trang đọc đồng bộ. Đọc `docs/knowledge-editorial-v2.md`; sửa `knowledge-editorial.mjs`, `dist/knowledge-editorial-v2.css`. Giữ ảnh sản phẩm thật và chức năng tìm kiếm. Chạy `npm run test:knowledge` và `npm run test:knowledge-editorial`.

**Cập nhật P02 — 16/10/2026:** Hero Khám phá sản phẩm theo mẫu mới, giữ nguyên ảnh hộp và bóng đổ từ ảnh được cung cấp; chữ/nút thật, ba ngôn ngữ, responsive. Đọc `docs/products-hero-reference-v3.md`; sửa `dist/products-hero-reference-v3.css`, không khôi phục lớp sản phẩm ghép cũ. Kiểm tra `node qa-products-hero-v3.mjs`.

**Cập nhật P12 — 15/10/2026:** Yêu cầu báo giá đã thiết kế lại theo mẫu botanical, logo và ảnh nhân sự thật, nội dung gọn, biểu mẫu đầy đủ cùng ba ngôn ngữ. Xem `docs/quote-reference-v2.md`. Giữ nguyên cơ chế chuẩn bị email; không có backend tiếp nhận. Các trang Yêu cầu mẫu và Đặt lịch tư vấn tiếp tục dùng template nền cũ, không kế thừa bố cục mới này.

**Cập nhật P10 — 15/10/2026:** Về HotPrint đã thiết kế lại theo mẫu mới, giữ logo gốc và ảnh công ty thật. Tám phần, lịch sử mở rộng, carousel sáu nhóm, đầy đủ điều hướng/footer và ba ngôn ngữ. Xem `docs/about-reference-v2.md` để tiếp tục; tài liệu này thay phần About sáu khối bên dưới. Phông tiêu đề tải cục bộ để hiển thị đúng dấu tiếng Việt. Bộ kiểm tra hiện tại là `qa-about-reference.mjs`.

## Đọc đầu tiên khi tiếp tục bằng tài khoản khác

Mã nguồn và toàn bộ tài nguyên để chạy website nằm trong repo **https://github.com/nguyentien14122004-svg/Hotprint**, nhánh `main`. Dùng bản mới nhất của nhánh này. Repo là nguồn tiếp tục công việc; không cần đăng nhập vào dự án Sites hoặc dùng quyền truy cập tài khoản Codex trước.

Thứ tự đọc:

1. `HANDOFF.md` — trạng thái hiện tại và phần tiếp theo.
2. `AGENTS.md` — yêu cầu thiết kế đã chốt và quy tắc bắt buộc khi sửa.
3. `README.md` — chạy website, danh sách đường dẫn và nơi chỉnh từng trang.
4. `docs/ke-hoach-website.md` — kế hoạch tổng thể; tài liệu mới nhất từng trang được liên kết từ README.

Các tài liệu cũ về màu tím mận/xanh rừng và liên kết Sites trước đây là lịch sử. Bộ màu hiện tại và trạng thái trong tệp này được ưu tiên. Không dựng lại website hoặc thay thiết kế đã duyệt chỉ vì đổi tài khoản.

## Website hiện có

Yêu cầu mới nhất 14/10/2026: đã bỏ các đoạn chú thích thừa về nguồn ảnh, mẫu tham khảo, xác nhận quy cách riêng ở cuối khối cấu trúc/thư viện của sáu danh mục, trang tổng quan sản phẩm và Về HotPrint, đồng bộ VI/EN/中文. Không khôi phục các đoạn `fold-caption`, `catalog-disclaimer` hoặc `ap-reference-note` này khi dựng trang lại. Ảnh, tên mẫu, nút chức năng và nội dung biểu mẫu giữ nguyên.

Cập nhật P03 ngày 14/10/2026: trang **Hộp giấy mềm** đã dựng lại theo mẫu editorial mới, xem `docs/folding-reference-2026-10-14.md`. Giữ 13 mẫu đúng nhóm, hero Bitter Melon Artichoke, ba thẻ cấu trúc đúng sản phẩm, dải Lévinia thật, ba cột vật liệu, thư viện bốn cột, FAQ và carousel thủ công cuối trang. Chỉnh riêng `build-folding.mjs`, `dist/folding-reference.css/js`; không sửa CSS chung để thay năm nhóm khác. Ảnh gốc giữ nguyên; nền trống mới và bóng đáy riêng nằm trong repo. VI/EN/中文 đồng bộ.

Cập nhật 14/10/2026: thư viện có **67 mẫu** sau khi bổ sung 31 mục có ảnh từ hotprint.vn và đối chiếu 23 mục đã có. Đọc `docs/catalog-completion-2026-10-14.md` và `official-catalog-audit.json`. Số lượng sáu nhóm: **13 / 11 / 13 / 15 / 7 / 8**. Maison Marou `032A5316` thuộc **hộp cứng**, đã gỡ khỏi trang hộp giấy mềm theo xác nhận chủ website. Mục Hộp yến sào không ảnh chưa thêm theo yêu cầu. Cửa sổ thông tin chi tiết đã theo mẫu mới với serif, nền ngà, bóng lá và khối camera. Các số 36 trong ghi chú cũ bên dưới là lịch sử.

Cập nhật 14/10/2026: P02.4 và P02.5 đã dựng theo hai mẫu botanical mới, xem `docs/products-collaboration-reference.md`. CSS riêng `products-collaboration-reference.css`, nội dung HTML và nút thật, VI/EN/中文. Ảnh hộp HotPrint ở khối tư vấn là minh họa theo mẫu được chủ website cung cấp, không phải sản phẩm mới trong thư viện. Giữ nguyên các phần khác.

Hiệu chỉnh mới nhất P02.3: đọc phần đầu `docs/library-reference-2026-10-13.md`. Thư viện dùng nền giấy studio liền mạch, 36 bóng đáy riêng trong `library-grounding.mjs`, căn lại vùng ảnh và đổi microcopy sang sans-serif. Giữ nguyên ảnh gốc, mask, thứ tự và nền `#e7dfd1`. Không khôi phục drop-shadow ôm viền hoặc bệ đá cũ trong thư viện.

**18 trang cố định và 6 bài viết × VI/EN/中文 = 72 đường dẫn HTML.**

Cập nhật 13/10/2026: đã bổ sung tiếng Trung giản thể theo lựa chọn của chủ website. Nút VI / EN / 中文 có ở mọi trang. Đường dẫn Trung dùng `/zh/` với slug giống EN. Đọc `docs/chinese-language.md` về bản dịch, nơi chỉnh và kiểm tra. Giữ nguyên toàn bộ ảnh, logo, bố cục và màu đã duyệt. Ba form đổi ngôn ngữ tại chỗ, giữ nội dung/tệp/consent; không tạo tiếp nhận trên máy chủ.

| Mã | Trang | Trạng thái |
| --- | --- | --- |
| P01 | Trang chủ | Đã dựng; giữ nguyên hero và sáu biểu tượng đã chốt |
| P02 | Tổng quan sản phẩm | Đã dựng; hero/sáu nhóm theo mẫu, thư viện 36 mẫu thật |
| P03–P08 | Sáu danh mục sản phẩm | Đã dựng đủ, VI/EN, gallery và yêu cầu theo mẫu |
| P09 | Nhà máy | Bảy phần, 12 ảnh thật, tab thiết bị/thư viện ảnh |
| P10 | Về HotPrint | Sáu phần, thông tin và hoạt động công ty |
| P11 | Liên hệ | Bốn phần, điện thoại/Zalo/email/hai địa chỉ |
| P12 | Yêu cầu báo giá | Form một trang, chuẩn bị email, không tính giá |
| P13 | Yêu cầu mẫu | Mẫu thật, danh sách quan tâm, cách nhận tùy chọn |
| P14 | Đặt lịch tư vấn | Ngày/giờ/múi giờ/hình thức đề nghị, cần xác nhận riêng |
| P15 | Kiến thức bao bì | Bốn phần, tìm kiếm/chủ đề và sáu bài có trang đọc |
| P16 | Chính sách riêng tư | Năm mục; bản rà soát có phạm vi rõ, xóa mẫu lưu trên trình duyệt |
| P17 | Điều kiện gửi yêu cầu | Năm mục; chuẩn bị email, mẫu/lịch/tệp và liên hệ; cần rà soát trước công bố |
| P18 | Xác nhận gửi yêu cầu | Ba phần hướng dẫn kiểm tra email, loại yêu cầu/liên hệ; chưa xác nhận tiếp nhận backend |

Danh sách URL VI/EN đầy đủ ở README. Các bài nằm dưới `/kien-thuc/` và `/en/packaging-insights/`.

## Những yêu cầu phải giữ

- Khách chính là bộ phận mua hàng doanh nghiệp. Thiết kế chuyên nghiệp, mang tinh thần thiên nhiên/giấy, có chi tiết sáng tạo và hỗ trợ máy tính/điện thoại.
- Giữ logo và biểu tượng gốc, ẩn dòng ISO 9001 bằng CSS như hiện tại. Không vẽ lại logo.
- Màu: Natural Green `#5E7D5A`, Warm Beige `#E7DFD1`, Earthy Brown `#8A6A55`; CTA nâu đất. Font: Playfair Display 600 và Be Vietnam Pro. `natural-theme.css` được build áp dụng cuối cùng cho mọi trang.
- **Hero Trang chủ tuyệt đối không crop, đổi ảnh, đổi tỷ lệ, phủ màu hay lược bỏ chi tiết.** Chỉ đổi nền CSS bên ngoài khi được yêu cầu. Hai ảnh cần giữ hash:
  - `hero-hotprint-v3.webp`: `CF37490E3863C4E2A9B0807C18F6D1DA1D112FDF4C4C791D567BC035AB44F85C`.
  - `hero-hotprint-v3-small.webp`: `57CC6A6AA322B320812BCF7C8BCB012A7A73DB0CF52B924C7950802FAC7F6897`.
- Hero Trang chủ là concept HotPrint đã được duyệt và có chú thích minh họa. Thư viện/danh mục dùng ảnh sản phẩm thực, không tạo thương hiệu/khách hàng/sản phẩm giả.
- Ảnh thật đã tối ưu nằm trong `dist/assets/products/` và `dist/assets/factory/`; nguồn ở hai tệp `*-image-sources.json`. Không cần ảnh JPG gốc để build hoặc chạy bản hiện có. Không tự sinh lại sản phẩm, nhãn hiệu, người hoặc nhà máy bằng AI.
- Không có calculator, checkout, biểu mẫu báo giá nhiều bước, giá công khai, chứng nhận, MOQ hoặc cam kết thời gian không có nguồn.
- Chủ website đã xác nhận **giữ địa chỉ đang công bố**: trụ sở 9B Đường 1A, KCN Biên Hòa 2, Đồng Nai; nhà máy 999 Nguyễn Thiện Thuật, KP1, Phường An Hoà, Biên Hoà, Đồng Nai. Hotline 0903.032.686; email info@hotprint.vn; Zalo `https://zalo.me/0903032686`. Maps hiện là tìm theo địa chỉ, chưa có ghim chính thức.

## Chạy và sửa

Cần Node.js 20 trở lên. Website và build không cần cài thư viện hoặc API key.

```sh
npm run build
npm run check
npm run verify:site
npm run dev
```

Preview mặc định: `http://127.0.0.1:4174/`. Đây là preview trên máy đang chạy server, không phải link công khai. Nếu server đang chạy ở cổng 4174 thì dùng lại; đừng tạo thêm server hoặc tự chuyển cổng làm các thẻ preview bị lệch.

- Trang chủ chỉnh trong `dist/index.html`; phần dùng chung trong `dist/app.js`.
- Các trang khác chỉnh ở `build-*.mjs`/template và CSS/JS tương ứng, sau đó build chung. **Không sửa trực tiếp HTML đã sinh rồi bỏ qua builder**, vì lần build sau sẽ ghi đè.
- P15 chỉnh bài trong `knowledge-content.mjs`. Tài liệu trang nào sẽ chỉ rõ tệp nguồn trang đó.
- `dist/` là bản static có sẵn đầy đủ ảnh/font để hosting. Giữ cả mã nguồn builder và bản dist để tài khoản khác tiếp tục hoặc xem ngay.
- `prepare-catalog.mjs` là công cụ tạo lại ảnh từ kho gốc khi có `original-photos/`; không chạy nó khi chỉ muốn build website từ repo.

Các bài QA dùng Playwright và Chrome. Nếu máy mới chưa có Playwright, cài cho mục đích kiểm tra bằng `npm install --no-save --package-lock=false playwright` và cài Chrome. Thư viện này không cần cho người xem website hoặc để chạy build/dev. Không ghi đường dẫn runtime Codex riêng của một máy vào mã dự án. Xem các script `test:*` trong package.json.

## Trạng thái gửi và dữ liệu thực

- Form **chuẩn bị email**, khách kiểm tra/đính kèm/gửi trong ứng dụng email. Chưa có backend tiếp nhận, CRM, upload hoặc khu vực quản trị yêu cầu.
- Chọn tệp chỉ kiểm tra/ghi tên; không upload, không tự đính kèm mailto. Không hiển thị đã gửi/đã nhận, mã yêu cầu hoặc lịch đã xác nhận giả.
- Thông tin form nằm trên trang; không lưu thông tin cá nhân vào localStorage. Mã mẫu quan tâm được lưu trong `hotprint-sample-selection`; P16 chỉ xóa key này và đồng bộ các thẻ khác. Việc đọc chính sách từ form mở thẻ mới để giữ nội dung nhập.
- Bài kiến thức là nội dung biên tập mới, cần HotPrint duyệt kỹ thuật trước khi xuất bản chính thức.
- Chính sách riêng tư là bản rà soát. Đã tìm trên trang công ty, sitemap/API; chưa xác minh thời hạn lưu email/hồ sơ, phân quyền và bên xử lý email/hosting. Không tự đặt các thông tin đó khi tiếp tục.
- Preview có `noindex,nofollow`. Chưa được coi là bản vận hành thay thế hotprint.vn. Đẩy mã lên GitHub không đồng nghĩa deploy website.

## Phần tiếp theo trong kế hoạch

Không tự bắt đầu những phần này nếu chủ website chỉ yêu cầu đồng bộ/bàn giao. Khi có yêu cầu tiếp tục, bám chương tương ứng:

**P17 đã có trang riêng**: xem `docs/request-terms.md`, builder/CSS và liên kết từ form. Nội dung cần công ty rà soát trước công bố.
**P18 có giao diện và hướng dẫn kiểm tra email**: xem `docs/request-confirmation.md`. Trạng thái đã tiếp nhận/mã yêu cầu vẫn chờ backend lưu thật; không bật bằng query hoặc dữ liệu trình duyệt.
2. Trang chi tiết sản phẩm theo URL: hiện chi tiết mẫu dùng cửa sổ gallery, chưa có toàn bộ trang URL riêng theo mẫu mở rộng của kế hoạch.
3. Giao diện 404: server đã trả HTTP 404, chưa có trang 404 được thiết kế hoàn chỉnh.
4. Backend/CMS, quản trị, hosting/tên miền, rà soát bài/chính sách, chuyển hướng URL cũ và SEO khi ra mắt: còn là giai đoạn triển khai tiếp theo.

## Kiểm tra đã có

Build/check; kiểm tra responsive VI/EN, danh mục/gallery, tìm kiếm, danh sách mẫu, liên hệ, các form, múi giờ, trang bài và chính sách đã được thực hiện trong các lượt tương ứng. Script QA được lưu trong repo; screenshot/report chạy máy ở `qa/` được bỏ qua Git để tránh đưa dữ liệu thử vào nguồn. `verify:site` kiểm tra 48 trang, tài nguyên và hero được giữ nguyên; có thể chạy lại ngay trên bản lấy từ GitHub.

## Triển khai Vercel

Chủ website đang dùng `hotprint.vercel.app`. Repo có `vercel.json` cấu hình static Other, build `npm run build`, output `dist`; Root Directory ở gốc repo. Xem `docs/vercel-deployment.md`, chạy `npm run verify:deployment`. URL trả `FUNCTION_INVOCATION_FAILED` trước sửa; bản cấu hình sửa ở `fc827e3` đã deploy thành công, kiểm tra trực tiếp 48 URL trả 200 và sáu lượt browser không lỗi. Khi cập nhật lần sau vẫn cần xác minh URL thực; không coi push tự là xác nhận deploy. Không chạy `server.mjs` làm function production.

## Chuyển tài khoản

- Cùng máy: mở lại thư mục repo hiện có trong tài khoản mới, đọc các tệp bàn giao ở đầu tài liệu rồi tiếp tục. Trạng thái mã nguồn không phụ thuộc lịch sử cuộc trò chuyện.
- Máy/thư mục khác: lấy bản mới nhất nhánh main của repo, rồi chạy các lệnh ở trên. Quyền đọc/đẩy repo do quyền GitHub thực tế quyết định; không chép token/credential hoặc thư mục `.openai`/`.codex` của tài khoản cũ sang.
- Nếu dùng Sites để hosting về sau, cần quyền của tài khoản đang đăng nhập hoặc dự án mới được chủ website yêu cầu. Không dùng lại ID/danh tính Sites cũ chỉ để tiếp tục sửa mã.

Đoạn yêu cầu có thể dùng ở cuộc trò chuyện mới:

> Tiếp tục website HotPrint từ repo https://github.com/nguyentien14122004-svg/Hotprint, nhánh main mới nhất. Đọc HANDOFF.md, AGENTS.md, README.md và docs/ke-hoach-website.md trước khi sửa. Giữ nguyên các thiết kế đã chốt, hero Trang chủ và ảnh sản phẩm thật. Kiểm tra trạng thái hiện tại, mở preview cổng 4174, rồi thực hiện phần tiếp theo tôi chỉ định. Không tự dựng lại hoặc deploy khi tôi chưa yêu cầu.

## Trang chủ: khối liên hệ theo mẫu mới — 13/10/2026

Đã thiết kế lại riêng khối “Biến ý tưởng thành bao bì” theo ảnh tham chiếu mới: ba thẻ, ảnh giấy HotPrint nền xanh, nền be/lá, ảnh bộ bao bì concept, đủ Zalo / tư vấn / báo giá chi tiết. Xem `docs/home-contact-reference.md`. Giữ nguyên hero đầu trang, danh mục và các trang khác. CSS phải giới hạn bằng `#lien-he.connection-reference`, vì Tổng quan sản phẩm cũng có ID `lien-he`. Bản mới đã hoàn thiện ở preview local; yêu cầu đồng bộ GitHub của chủ website được ghi ở mục cập nhật bên dưới.

## Tổng quan sản phẩm: danh mục theo mẫu mới — 13/10/2026

Đọc `docs/families-reference-2026-10-13.md`: khối sáu danh mục đã đổi theo mẫu mới, thêm thanh lọc hoạt động thật, nền đá/lá và bóng tiếp xúc/bóng đổ riêng cho từng sản phẩm. Giữ nguyên ảnh sản phẩm thật, hero, thư viện 36 mẫu và VI/EN/中文. Nguồn: products-template.html, products.js và products-families-reference.css; chạy `npm run test:families-reference`. Chủ website yêu cầu đồng bộ cả bản này và khối liên hệ Trang chủ lên GitHub.


## Kiểm tra trước đồng bộ GitHub — 13/10/2026

Hai phần mới đã hoàn thiện: khối liên hệ Trang chủ và sáu nhóm Khám phá sản phẩm. Build/check và verify:deployment đạt (72 trang, 36 sản phẩm, hero gốc giữ nguyên). QA danh mục: 18 màn hình/ngôn ngữ, bộ lọc/lịch sử/đổi ngôn ngữ đạt. QA liên hệ: 18 màn hình/ngôn ngữ, 12 CTA đạt. QA thư viện cũ: 10 màn hình, tìm kiếm/gallery/chọn mẫu và ảnh đạt. Không thay tệp ảnh sản phẩm gốc. Đẩy nhánh main kích hoạt Vercel; phải kiểm tra deployment và URL trước khi báo đã lên trực tuyến.

## Trang chủ: sửa nền hero — 13/10/2026

Xem docs/home-hero-seam-fix.md. Ảnh đầu trang phủ chiều ngang ở đúng tỷ lệ 3:2, bỏ giới hạn 1792px gây lệch nền hai bên. Chỉ xóa đường SVG journey-tail ở dưới; giữ ba mốc và ảnh gốc. Build/check/verify và 24 tổ hợp trình duyệt đạt.

## Thư viện sản phẩm theo mẫu mới — 13/10/2026

Xem docs/library-reference-2026-10-13.md. P02.3 có tiêu đề serif, thanh tìm kiếm liền khối, sắp xếp, ba cột thẻ nền đá/lá, ảnh thật và bóng mềm. Giữ 36 mẫu/12 mỗi trang, gallery ảnh gốc và danh sách tối đa sáu mẫu; không có checkout. Nguồn products-template.html, products.js, products-library-reference.css, library-photo-windows.css. Chạy npm run test:library-reference. Build/check/verify, 18 tổ hợp QA mới và 10 tổ hợp QA sản phẩm cũ đã đạt.


## Hộp carton in màu — mẫu mới 14/10/2026

Xem docs/carton-reference-2026-10-14.md: P04 hiện có hero rộng Cookever + USPA, bốn thông tin, thư viện ba cột đủ 11 mẫu đúng carton, CTA và footer gọn. Sửa build-carton.mjs / dist/carton.css / dist/carton-reference.js. Hai nền ImageGen trống; sản phẩm và nhãn giữ ảnh thật, bóng sàn SVG căn riêng. HP7107/HP7106 dùng ảnh gốc rõ hơn riêng trang này. Tìm kiếm, ứng dụng, mẫu đã chọn, sắp xếp, history và VI/EN/中文 hoạt động; key chọn mẫu dùng chung tối đa 6. Các chú thích dài đã xóa trước đó không khôi phục. Thay hướng P04 sáu phần/bốn mẫu cũ. Kiểm tra npm run test:carton và node qa-catalog-completeness.mjs; ảnh hero Trang chủ giữ nguyên.

## P04 sửa ảnh và khôi phục chân trang — 14/10/2026
Xem docs/carton-photo-repair-2026-10-14.md: hero SAMONO thật, 11 ảnh xuất cùng bóng, CTA đủ năm lựa chọn liên hệ, chân trang chung đầy đủ, breadcrumb và sáu nhóm. Hướng mới này thay hero hai hộp/footer gọn trong ghi chú trước. Nguồn build-carton.mjs, carton-repair.css, prepare-carton-studio.cjs; kiểm tra qa-carton.mjs.

## P04 làm lại theo mẫu mới — bản v4, thay hướng ngay trên

Chủ website bác ff42f82 và yêu cầu bám ảnh mẫu mới. Đã xác nhận giữ bố cục nhưng chỉ hiển thị carton, nên có đủ 11 mẫu thật. Xem `docs/carton-reference-v4.md`: hero Cookever tràn nền, bốn lợi ích, lưới 3 cột ảnh 16:9 và CTA/footer gọn; toàn bộ liên kết/chức năng footer cũ vẫn có trong mục mở rộng. Nguồn `build-carton.mjs`, `dist/carton-reference-v4.css`, `prepare-carton-reference.cjs`, `carton-source-contours.json`. Sửa tận gốc lỗi mất alpha làm lộ nền xám trong các ảnh v3; bản v4 dùng RGBA tường minh, ảnh sản phẩm gốc và bóng nằm trong cùng tệp. Ảnh không được khẳng định là ảnh chụp nguyên cảnh hoặc bản sao pixel 100% của tham chiếu.

## P05 rigid-box reference redesign — 14 October 2026

Latest work: `docs/rigid-reference-v2.md`. Rebuilt Hộp cứng cao cấp to the user's botanical reference with all 13 authentic products. Hero uses real brown/gold box 032A5309; ImageGen creates empty backgrounds only. Full footer and request flows remain. Read the document before changing image positioning; original photo and floor-shadow coordinates must stay together. Run `npm run test:rigid` with the available Playwright runtime for browser QA; `QA_ORIGIN` can target the deployed site.

Cập nhật P06 ngày 15/10/2026: Túi giấy đã được dựng lại theo mẫu chủ website, giữ logo gốc, nội dung ngắn gọn, đủ 15 mẫu thật. Hero Karl Lagerfeld, nền trống cửa sổ/mặt đá v3, ảnh gốc không sửa và bóng tiếp xúc riêng. Tìm kiếm, bộ lọc, ảnh gốc, carousel, liên kết mẫu/báo giá/tư vấn hoạt động; xem docs/bags-reference-v2.md.

Cập nhật P07 15/10/2026: trang Nhãn dán decal đã dựng theo mẫu mới với nội dung rút gọn, logo gốc và 7 sản phẩm thật. Xem docs/labels-reference-v2.md. Hero cuộn nhãn đỏ, ảnh gốc giữ nguyên, nền trống ImageGen và bóng tiếp xúc; bộ lọc và carousel giữ đúng ngữ cảnh mẫu.

**P08 cập nhật 15/10/2026:** [Nhãn hàng & catalog theo mẫu mới](docs/catalog-reference-v2.md), 8 mẫu thật, VI/EN/中文; logo gốc, ảnh nguồn nguyên vẹn, gallery đủ góc, bộ lọc và carousel. `npm run test:tags` kiểm tra 18 tổ hợp màn hình/ngôn ngữ và các hành vi.
