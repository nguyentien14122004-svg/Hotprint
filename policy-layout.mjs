export const policyChinese={};
export function policyLayout(main,kind,lang){
 const t=(vi,en,zh)=>{policyChinese[en]=zh;const a=en.split(/<[^>]+>/),b=zh.split(/<[^>]+>/);if(a.length===b.length)a.forEach((x,i)=>{if(x.trim())policyChinese[x.trim()]=b[i].trim()});return lang==='vi'?vi:en};
 const arrow=(direction='right')=>`<svg class="pl-arrow pl-arrow-${direction}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
 const privacy=kind==='privacy',base=lang==='vi'?'':'/en';
 const title=privacy?t('Chính sách riêng tư','Privacy','隐私政策'):t('Điều kiện gửi yêu cầu','Request terms','申请须知');
 const heading=privacy?t('Thông tin của bạn.<br>Sự rõ ràng từ chúng tôi.','Your information.<br>Clarity from us.','您的信息。<br>我们的清晰说明。'):t('Một yêu cầu rõ ràng.<br>Một khởi đầu tốt.','A clear request.<br>A thoughtful start.','清晰的申请。<br>良好的开端。');
 const intro=privacy?t('Tìm hiểu thông tin bạn chia sẻ, cách website sử dụng và những lựa chọn bạn có để quản lý dữ liệu của mình.','Understand the information you share, how this website uses it and the choices you have to manage your data.','了解您分享的信息、网站的使用方式，以及管理个人数据的选择。'):t('Những điều cần biết khi trao đổi báo giá, đề nghị lịch tư vấn và chia sẻ tài liệu với HotPrint.','What to know when requesting a quote, proposing a consultation and sharing documents with HotPrint.','了解向 HotPrint 询价、预约咨询及分享文件时需要注意的事项。');
 const first=privacy?'thong-tin':'ban-chat';
 const cards=privacy?[
 [t('Bạn chọn chia sẻ','You choose what to share','由您选择分享'),t('Chỉ nhập thông tin cần thiết để trao đổi về dự án.','Provide the details needed to discuss your project.','仅提供项目沟通所需的信息。'),'thong-tin'],
 [t('Bạn kiểm tra trước khi gửi','You review before sending','发送前由您确认'),t('Biểu mẫu chuẩn bị email để bạn xem lại và tự gửi.','The form prepares an email for you to review and send.','表单生成邮件内容，由您检查并发送。'),'muc-dich'],
 [t('Bạn có thể trao đổi về dữ liệu','You can ask about your data','您可咨询数据事宜'),t('Liên hệ HotPrint khi muốn xem lại, chỉnh sửa hoặc đề nghị xóa thông tin đã gửi.','Contact HotPrint to review, correct or request deletion of information you have sent.','如需查看、更正或申请删除已发送的信息，请联系 HotPrint。'),'lien-he-du-lieu']
 ]:[
 [t('Chia sẻ nhu cầu','Share your brief','分享需求'),t('Chuẩn bị thông tin sản phẩm và những điều cần tư vấn.','Prepare your product details and questions for discussion.','准备产品信息及需要咨询的问题。'),'bao-gia'],
 [t('Kiểm tra & gửi email','Review & send','检查并发送'),t('Xem lại nội dung và đính kèm tài liệu trước khi tự gửi email.','Review the details and attach documents before sending your email.','检查内容并添加附件后，由您发送邮件。'),'ban-chat'],
 [t('Cùng xác nhận','Confirm together','共同确认'),t('Báo giá, quy cách và lịch hẹn được trao đổi riêng với HotPrint.','Discuss quotations, specifications and appointments directly with HotPrint.','报价、规格与预约安排需另行与 HotPrint 沟通确认。'),'lich-tu-van']
 ];
 const hero=`<div class="pl-hero"><div class="pv-wrap"><nav class="pv-breadcrumb" aria-label="${t('Vị trí trang','Breadcrumb','当前位置')}"><a href="${base||'/'}/" data-home>${t('Trang chủ','Home','首页')}</a><span aria-hidden="true">/</span><span>${title}</span></nav><div class="pl-hero-grid"><div class="pl-hero-copy"><p class="pv-kicker">HOTPRINT / ${title}</p><h1>${heading}</h1><p class="pl-intro">${intro}</p><a class="pl-button" href="#${first}">${t('Đọc nội dung chi tiết','Read the details','阅读详细内容')}${arrow('down')}</a></div><figure class="pl-photo"><img src="/assets/policy-paper-folder-v2.webp" srcset="/assets/policy-paper-folder-v2-small.webp 800w, /assets/policy-paper-folder-v2.webp 1536w" sizes="(max-width: 800px) 92vw, 48vw" width="1536" height="1024" alt="" fetchpriority="high"><figcaption>${privacy?t('Rõ ràng trong cách chia sẻ.','Clarity in what we share.','让信息分享清晰明了。'):t('Hiểu rõ để cùng bắt đầu.','Understanding before we begin.','了解清楚，共同开始。')}</figcaption></figure></div><div class="pl-meta"><span>${t('Hướng dẫn sử dụng website','A guide to this website','网站使用说明')}</span><span>${t('Cập nhật','Updated','更新于')} <time datetime="2026-10-17">17.10.2026</time></span></div></div></div><div class="pl-overview pv-wrap" aria-label="${t('Những điểm chính','At a glance','要点概览')}">${cards.map(([h,p,id],i)=>`<a class="pl-summary" href="#${id}"><span class="pl-step" aria-hidden="true">0${i+1}</span><div><h2>${h}</h2><p>${p}</p></div><span class="pl-summary-arrow">${arrow('diagonal')}</span></a>`).join('')}</div>`;
 main=main.replace(/<div class="pv-hero">[\s\S]*?(?=<div class="pv-wrap pv-layout">)/,hero+'\n ');
 main=main.replace('class="pv-page','class="pv-page pl-page').replace('href="//"','href="/"');
 const bridge=`<div class="pl-bridge pv-wrap"><div><p class="pv-kicker">${t('CÙNG HOTPRINT','WITH HOTPRINT','与 HOTPRINT 同行')}</p><h2>${t('Cần làm rõ thêm?<br>Chúng tôi sẵn sàng trao đổi.','Need more clarity?<br>Let’s talk.','仍有疑问？<br>欢迎与我们沟通。')}</h2></div><a class="pl-button" href="${lang==='vi'?'/lien-he/':'/en/contact/'}" data-contact-page>${t('Liên hệ HotPrint','Contact HotPrint','联系 HotPrint')}${arrow()}</a></div>`;
 return main.replace('</main>',bridge+'</main>');
}
policyLayout('', 'privacy','en');policyLayout('', 'terms','en');
Object.assign(policyChinese,{
 'HOTPRINT / Privacy':'HOTPRINT / 隐私政策',
 'HOTPRINT / Request terms':'HOTPRINT / 申请须知',
 'Saved references have been cleared from this browser.':'已清除此浏览器保存的参考图片。',
 'No references are saved in this browser.':'此浏览器未保存参考图片。',
 'This browser contains a saved reference list.':'此浏览器中有已保存的参考图片。',
 'The quote and consultation forms use information you enter to prepare a discussion. The website does not automatically send the form contents to HotPrint.':'询价及咨询表单使用您填写的信息准备沟通内容。网站不会自动将表单内容发送给 HotPrint。',
 'Saved references contain product image IDs only. Search terms and filters appear in the URL so you can return or share it; avoid entering private information in search fields.':'已保存的参考图片仅包含产品图片编号。搜索词和筛选条件会显示在网址中，以便返回或分享；请勿在搜索框中输入私人信息。',
 'Clear saved references':'清除已保存的参考图片',
 'A quote request or consultation proposal starts a conversation with HotPrint. Completing a form or sending an email does not place an order, approve production specifications or confirm an appointment.':'询价或咨询申请是与 HotPrint 开始沟通的第一步。填写表单或发送邮件不等于下单、批准生产规格或确认预约。'
});
