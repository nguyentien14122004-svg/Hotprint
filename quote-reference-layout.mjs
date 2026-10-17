// Keep the proven form fields/controller while giving P12 its own presentation.
export const quoteReferenceCopy={
 intro:['Chia sẻ sản phẩm và điều bạn cần. HotPrint cùng bạn trao đổi cấu trúc, chất liệu và cách thực hiện.','Share your product and requirements. Discuss structure, materials and production with HotPrint.'],
 supportTitle:['Đừng lo, chúng tôi luôn sẵn sàng hỗ trợ!','We are here to help.'],
 help:['Chưa rõ chất liệu hay kiểu hộp? Hãy bắt đầu từ sản phẩm của bạn, chúng tôi cùng tìm phương án phù hợp.','Not sure about materials or structure? Start with your product and we will explore a suitable approach together.'],
 directTitle:['Liên hệ trước với chúng tôi','Talk to us first'],directNote:['Trao đổi nhanh về nhu cầu bao bì.','Discuss your packaging requirements.'],
 callNote:['Gọi để trao đổi trực tiếp','Speak with our team'],zaloNote:['Gửi hình ảnh và ý tưởng của bạn','Share your images and ideas'],
 contactNow:['Liên hệ ngay','Contact us'],formNote:['Chia sẻ thông tin để HotPrint hiểu nhu cầu và trao đổi báo giá riêng.','Share your brief so HotPrint can discuss an individual quote with you.'],
 benefit1:['Tư vấn tận tâm','Personal support'],benefit1Body:['Lắng nghe sản phẩm và điều bạn cần.','Tell us about your product and needs.'],
 benefit2:['Báo giá theo nhu cầu','A quote for your brief'],benefit2Body:['Làm rõ quy cách trước khi báo giá.','Clarify specifications before pricing.'],
 benefit3:['Giải pháp linh hoạt','Flexible solutions'],benefit3Body:['Cùng chọn cấu trúc và cách hoàn thiện.','Explore structure and finishing together.'],
 guideTitle:['Một yêu cầu rõ ràng. Một cuộc trao đổi có cơ sở.','A clear brief. A useful conversation.'],
 guideIntro:['Sau khi nhận email, HotPrint cùng bạn làm rõ phương án và báo giá.','After receiving your email, HotPrint discusses the approach and quote with you.'],
 guide1Body:['Xem sản phẩm và những yêu cầu bạn chia sẻ.','Review your product and requirements.'],guide2Body:['Trao đổi cấu trúc, chất liệu và mẫu duyệt.','Discuss structure, materials and sample approval.'],guide3Body:['Thống nhất quy cách, chi phí và thời gian.','Agree on specifications, pricing and timing.'],
 connectTitle:['Cùng kiến tạo giá trị cho thương hiệu của bạn!','Create lasting value for your brand.'],connectNote:['HotPrint đồng hành từ ý tưởng đến thành phẩm.','HotPrint works with you from idea to finished piece.'],
 referenceHint:['Tên, mã mẫu hoặc đường dẫn tham khảo.','Sample name, reference code or link.'],
 messageHint:['Sản phẩm, cách sử dụng và yêu cầu của bạn.','Your product, intended use and requirements.'],
 filesHint:['PDF, JPG, PNG · tối đa 3 tệp, 10 MB/tệp. Đính kèm lại tệp khi gửi email.','PDF, JPG, PNG · up to 3 files, 10 MB each. Attach the files when sending the email.'],
 emailMethod:['Kiểm tra nội dung và hoàn tất gửi trong ứng dụng email của bạn.','Review the details and finish sending from your email application.']
};

export function quoteReferenceLayout(legacy,copy,lang,groups){
 const t=k=>copy[k][lang==='vi'?0:1],s=k=>`<span data-quote-text="${k}">${t(k)}</span>`;
 const icon=id=>`<svg class="icon" aria-hidden="true"><use href="#i-${id}"/></svg>`;
 const contact=lang==='vi'?'/lien-he/':'/en/contact/';
 const link=(k,cls='qr-button')=>`<a class="${cls}" data-contact-page href="${contact}">${s(k)}${icon('arrow')}</a>`;
 let form=legacy.match(/<form id="quote-form"[\s\S]*?<\/form>/)[0];
 const originalReady=form.match(/<div id="qp-ready"[\s\S]*?<\/textarea><\/div>/)[0];
 const ready=originalReady.replace('<h3','<span class="qr-ready-mark" aria-hidden="true">'+icon('mail')+'</span><h3');
 form=form.replace(originalReady,'');
 // File selection stays discoverable; only dimensions, quantity and date collapse.
 const files=form.match(/<div class="qp-files">[\s\S]*?<\/div>(?=<\/details>)/)[0];
 form=form.replace(files,'').replace('</details>','</details>'+files);
 form=form.replace(/(<([\w-]+)\b[^>]*data-quote-text="([^"]+)"[^>]*>)[^<]*(<\/\2>)/g,(_,start,tag,key,end)=>start+t(key)+end);
 return `<main id="main" class="qp-page qr-page">
 <section class="qr-hero" aria-labelledby="qp-title"><div class="qr-wrap"><div class="qr-hero-copy"><p class="qp-kicker">${s('kicker')}<span class="qr-line" aria-hidden="true"></span></p><h1 id="qp-title">${s('title1')}<em data-quote-text="title2">${t('title2')}</em></h1><p data-quote-text="intro">${t('intro')}</p></div></div></section>
 <div class="qr-wrap">
 <aside class="qr-direct" aria-label="${lang==='vi'?'Liên hệ nhanh':'Quick contact'}"><div class="qr-direct-intro"><span class="qr-disc">${icon('phone')}</span><div><h2>${s('directTitle')}</h2><p>${s('directNote')}</p></div></div><a class="qr-channel" href="tel:+84903032686"><span class="qr-disc">${icon('phone')}</span><span><strong>0903.032.686</strong><small>${s('callNote')}</small></span></a><a class="qr-channel" href="https://zalo.me/0903032686" target="_blank" rel="noopener"><span class="qr-disc">${icon('chat')}</span><span><strong>${s('zalo')}</strong><small>${s('zaloNote')}</small></span></a></aside>
 <section class="qp-form-section qr-project" aria-labelledby="qp-form-title"><div class="qr-form-intro"><h2 id="qp-form-title">${s('formTitle')}</h2><p>${s('formNote')}</p><div class="qr-benefits">${['chat','copy','folding'].map((id,i)=>`<article><span class="qr-disc">${icon(id)}</span><div><h3>${s('benefit'+(i+1))}</h3><p>${s('benefit'+(i+1)+'Body')}</p></div></article>`).join('')}</div></div><div class="qr-form-body"><p class="qr-required">${s('formIntro')}</p>${form}</div></section>
 ${ready}
 <section class="qr-support" aria-labelledby="qr-support-title"><div class="qr-support-copy"><p class="qp-kicker">${s('needHelp')}</p><h2 id="qr-support-title">${s('supportTitle')}</h2><p>${s('help')}</p>${link('contactNow')}</div><figure class="qr-factory"><img src="/assets/factory/032A4938-large.webp" srcset="/assets/factory/032A4938-small.webp 800w, /assets/factory/032A4938-large.webp 2000w" sizes="(max-width:700px) 90vw, 42vw" width="2000" height="1333" alt="${lang==='vi'?'Nhân sự HotPrint kiểm tra chi tiết bao bì tại nhà máy':'A HotPrint team member checking packaging details at the factory'}" loading="lazy"><figcaption>${s('photoCaption')}</figcaption></figure></section>
 <section class="qp-guide" aria-labelledby="qp-guide-title"><div class="qp-guide-heading"><div><p class="qp-kicker">${s('guideKicker')}</p><h2 id="qp-guide-title" data-quote-html="guideTitle">${t('guideTitle')}</h2></div><p>${s('guideIntro')}</p></div><div class="qp-guide-grid">${[1,2,3].map(i=>`<article><span aria-hidden="true">0${i}</span><div><h3>${s('guide'+i)}</h3><p>${s('guide'+i+'Body')}</p></div>${i<3?icon('arrow'):''}</article>`).join('')}</div></section>
 <aside class="qr-contact-strip">${icon('chat')}<p>${s('contactPage')}</p>${link('contactNow')}</aside>
 <section class="qr-connect"><div><h2>${s('connectTitle')}</h2><p>${s('connectNote')}</p></div>${link('contactNow')}</section>
 </div></main><script id="quote-copy-data" type="application/json">${JSON.stringify({copy,groups})}</script>`;
}
