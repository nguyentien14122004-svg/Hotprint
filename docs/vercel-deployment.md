# Triển khai HotPrint bằng Vercel

## Lỗi kiểm tra ngày 13/10/2026

`https://hotprint.vercel.app/` trả HTTP 500, mã `FUNCTION_INVOCATION_FAILED`. Các đường `/index.html`, `/dist/`, `/styles.css` và `/assets/logo-original.png` cũng trả cùng lỗi. Đây là lỗi gọi function, không phải bằng chứng thiếu ảnh hoặc hỏng HTML.

Repo GitHub trước sửa ở `fd0a8ce` chứa `dist/index.html`, toàn bộ trang/ảnh/font và builders, nhưng chưa có `vercel.json`. `server.mjs` chỉ là máy chủ preview cục bộ (bind 127.0.0.1); website sản xuất không cần chạy nó. Không có quyền đọc cấu hình/log function của dự án Vercel để kết luận exception cụ thể. Hướng sửa phù hợp cấu trúc repo là chỉ rõ framework Other và xuất bản thư mục static `dist`, tránh dùng function để phục vụ website này.

Nguồn Vercel: [mã lỗi FUNCTION_INVOCATION_FAILED](https://vercel.com/docs/errors/function_invocation_failed), [vercel.json](https://vercel.com/docs/project-configuration/vercel-json), [cấu hình build](https://vercel.com/docs/deployments/configure-a-build).

## Cấu hình đã lưu trong repo

`vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "trailingSlash": true
}
```

`framework: null` tương ứng Other và ghi đè framework preset của dự án theo tài liệu Vercel. Vercel chạy build tại gốc repo rồi phục vụ nội dung của `dist` ở gốc domain. Không chọn Root Directory là `dist`, không chạy `npm run dev`/`node server.mjs` để phục vụ production, không thêm rewrite toàn bộ URL về Trang chủ. Các trang là HTML nhiều đường dẫn, không phải SPA một trang.

## Đối chiếu trong dự án Vercel đang dùng

| Thiết lập | Giá trị |
| --- | --- |
| Git Repository | `nguyentien14122004-svg/Hotprint` |
| Production Branch | `main` |
| Root Directory | Gốc repo, để trống |
| Framework Preset | Other |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js | Phiên bản hỗ trợ Node 20 trở lên |
| Domain | `hotprint.vercel.app` gắn vào đúng dự án/production deployment |

Để dùng cấu hình mới, deploy commit chứa `vercel.json`; khi Git integration hoạt động, push main tạo deployment mới. Nếu chưa có deployment mới, chọn Redeploy từ bản mới nhất. Redeploy commit cũ vẫn dùng cấu hình cũ. Nếu Root Directory đang chọn sai, sửa về gốc repo trước.

Repo chứa đủ source/tài nguyên tối ưu, không cần thư mục ảnh gốc, API key, Sites account hay backend. Build vẫn giữ noindex cho bản thử và không thay thiết kế. Form tiếp tục chuẩn bị email, chưa có backend nhận yêu cầu.

## Kiểm tra

```sh
npm run build
npm run check
npm run verify:deployment
```

`verify:deployment` kiểm tra cấu hình static, 48 trang, 36 mẫu, 246 tham chiếu cục bộ, hash hero và tên đường dẫn phân biệt hoa/thường để tránh lỗi khi chuyển Windows sang production. Thử dựng từ bản Git độc lập để bảo đảm không dựa vào tài nguyên ngoài repo.

Sau deployment kiểm tra `/`, `/san-pham/`, `/en/`, `/chinh-sach-rieng-tu/`, `/dieu-kien-gui-yeu-cau/`, `/da-gui-yeu-cau/`, ảnh/logo/CSS/JS. Các đường này cần trả trang/tài nguyên phù hợp thay vì lỗi function. Nếu còn HTTP 500, đối chiếu commit đang chạy, preset/root và Logs trong Vercel. Chỉ xác nhận website đã hoạt động khi URL thực trả thành công; push thành công không tự là bằng chứng deploy thành công.
