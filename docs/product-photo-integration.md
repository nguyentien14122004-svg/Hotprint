# Chỉnh ảnh sản phẩm và nền — 12/10/2026

## Yêu cầu mới nhất

- Xóa toàn bộ hàng số liệu 06+ / 36+ / Tư vấn theo sản phẩm của bạn trong hero, gồm cả đường phân cách và biểu tượng, ở VI/EN.
- Cải thiện sự hòa hợp ảnh thật với bối cảnh của hero và cả sáu nhóm, giữ bố cục, font và điều hướng đã chốt.

## Thực hiện

- Nền mới có ánh sáng tán xạ, giảm nắng gắt và bóng lá tương phản mạnh để gần ánh sáng của ảnh gốc.
- Mặt đá của ô decal được làm liên tục, bỏ khối đá nhô sau dải nhãn. Bề mặt dưới nhãn hàng phẳng hơn.
- Bóng tiếp xúc riêng theo đường chân từng sản phẩm, bóng nhãn mỏng hơn hộp. Các lớp bóng chỉ trang trí, không xuất hiện với trình đọc màn hình.
- Bỏ kéo giãn một chiều ở hộp giấy mềm, carton và túi, điều chỉnh kích thước/điểm đặt với tỷ lệ ảnh nguyên gốc.
- Khung SVG cho các khe cắt và một lỗ nhãn hàng để nền thật hiện xuyên qua vùng trắng. Không vẽ lại sản phẩm.
- Không sửa bất kỳ tệp nào trong `dist/assets/products/`. Ảnh đầy đủ trong cửa sổ chi tiết vẫn nguyên vẹn. Giữ các thương hiệu thực tế; không tạo chữ, nhãn hoặc sản phẩm mới.

## Tệp

- `products-template.html`: bỏ hàng thông tin, thêm lớp bóng trang trí hero.
- `dist/products.js`: thêm lớp bóng trang trí cho sáu ảnh.
- `dist/products-lighting.css`: nền, vị trí và bóng, được nạp cuối bởi `build-products.mjs`.
- `dist/assets/botanical-softlight-v2.webp`: nền hero, không chứa sản phẩm/chữ/UI.
- `dist/assets/families-softlight-v2.webp`: atlas nền sáu nhóm, không chứa sản phẩm/chữ/UI.
- `dist/assets/tag-cutout-mask.svg`: mặt nạ hiển thị các khe của nhãn gốc.

## Tạo nền

Dùng công cụ ImageGen tích hợp; không dùng API/CLI. Ảnh tham chiếu là ảnh chụp giao diện hiện có. Đầu ra chỉ làm nền; các sản phẩm trong ảnh chụp đã bị loại khỏi nền và được hiển thị bằng ảnh gốc riêng biệt trong HTML. WebP nén quality 88. Các nền cũ được giữ để có thể khôi phục.

### Prompt hero

Use case: precise-object-edit. Create a BACKGROUND-ONLY production website asset, same 1672x941 aspect and exact composition as reference screenshot. Remove ALL text, logo, buttons, icons, separators, statistics and the green product box. Preserve the ivory paper left area, delicate botanical linework left edge, sage curved backdrop right top, limestone/travertine stage right, blurred real foliage at far edges. Critical change: relight the entire scene with soft diffuse overcast window daylight from upper left, neutral ivory/sage white balance, not hard golden sunlight. Remove harsh blotchy leaf shadows and overbright highlights. The stone platform underneath the former box must be a single continuous flat top plane matching that box's perspective, no rock ridges intersecting its footprint. Preserve a subtle realistic soft charcoal contact shadow exactly along the former product's bottom-left to bottom-front edge (roughly x902,y500 to x1360,y827 and back to x1530,y590), falling gently to bottom right, with tighter ambient occlusion along the contact edge. Keep the rest empty so the original real product photograph can be overlaid in HTML at exactly its current coordinates. More photographic, elegant matte limestone with fine grain, soft environmental light, no fake objects. Do NOT draw any packaging, brand, lettering, interface, numbers, box outlines or placeholder. Do not change the composition or visual identity.

### Prompt sáu nhóm

Use case: precise-object-edit. Make a background-only web asset atlas matching EXACTLY the 1672x941 reference composition. Six card rectangles at (63,212,612,342),(689,212,430,342),(1133,212,478,342),(63,569,531,319),(608,569,502,319),(1126,569,485,319). Retain their cream paper swoosh left sides, sage/ivory photographic backgrounds on right and stone surfaces, rounded corners, outer ivory background and tasteful botanical edges. REMOVE ALL PRODUCT OBJECTS, ALL text, ALL logos, ALL icons, ALL lines under text and counters. Relight the six small photo scenes with large soft diffuse daylight upper-left, neutral ivory not yellow, matching real catalog softbox photography. No hard sunlight spots, no high-contrast leaf shadows. Each right-side stone surface must present a clean flat top plane at the correct perspective to support its removed product, no distracting rocks cutting through product footprints. Product shapes are removed but PRESERVE/create subtle realistic grounding soft contact shadows where they stood, darker and sharper at contact edges, softly fading to lower right. Reference shadows locations: card1 bottom white box edge x350..615 y470..530; card2 standing box bottom tip x973,y487; card3 big box front-edge x1538,y549; card4 bag bottom edges x340,y795 to x413,y857 to x551,y753; card5 roll and unfurled sheet on ONE smooth continuous limestone surface, remove the obtrusive raised rock behind sheet, shadow under sheet near x850..1010 y837; card6 paper tags are thin, lying FLAT on a broad limestone surface with only delicate thin contact shadow, not floating and not perched on lumpy rocks. Keep photo regions as uncluttered real photographic sets, subtle fine-grain travertine, blurred foliage only at periphery. Left half of each card remains empty pale ivory for HTML text. Absolutely NO products, packages, bags, labels, logos, text or UI; the real original product photographs will be composited separately in HTML. Match positions and rectangles precisely.

## Kiểm tra

- Build và kiểm tra cú pháp thành công.
- Hero: VI/EN × 1440, 1024, 768, 390, 320; font, tràn ngang, ảnh gốc, CTA, hai đường dẫn Trang chủ.
- Sáu nhóm: VI/EN × 1672, 1440, 1024, 768, 390, 320; số mẫu thực, sáu liên kết lọc, bàn phím và trạng thái ngôn ngữ.
- Quan sát ảnh chụp hero và sáu nhóm ở desktop, hero và danh mục trên điện thoại.
- Bản cập nhật ở preview cục bộ, chưa đẩy GitHub hoặc xuất bản hosting.
