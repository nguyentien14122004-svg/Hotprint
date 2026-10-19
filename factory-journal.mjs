const text={
 kicker:['CẬN CẢNH SẢN XUẤT','PRODUCTION, UP CLOSE','近观生产'],
 title:['Từ thao tác kỹ thuật.<br>Đến chi tiết thành phẩm.','From technical work.<br>To the finished detail.','从技术操作，<br>到成品细节。'],
 intro:['Theo bước đội ngũ HotPrint qua những công đoạn tại xưởng: chuẩn bị bản in, vận hành thiết bị, tạo hình và kiểm tra hộp.','Follow the HotPrint team through work on the factory floor: plate preparation, equipment operation, forming and box inspection.','走进 HotPrint 车间，了解制版、设备操作、成型及纸盒检查等工序。'],
 prepress:['Chuẩn bị bản in','Preparing the printing plate','印版准备'],
 prepressTitle:['Chỉn chu từ trước khi in.','Care begins before printing.','细致始于印刷之前。'],
 prepressBody:['Người vận hành theo dõi dữ liệu trên màn hình và thao tác tại thiết bị chế bản. Sự chuẩn bị ở công đoạn này tạo cơ sở cho các bước in tiếp theo.','The operator reviews on-screen data and works at the plate-making equipment. Preparation here provides the basis for the next printing stages.','操作人员查看屏幕数据并操作制版设备，为后续印刷工序做好准备。'],
 automation:['Phối hợp cùng thiết bị','Working with equipment','人与设备协作'],
 automationTitle:['Con người trong từng nhịp máy.','People at every stage.','每道工序，都有人专注。'],
 automationBody:['Tại trạm gia công, người vận hành sắp xếp phôi giấy và theo dõi thao tác của thiết bị. Máy móc và sự quan sát của đội ngũ cùng tham gia vào quá trình tạo hình.','At the processing station, the operator positions paper components and monitors the equipment. Machinery and attentive operators work together through forming.','在加工工位，操作人员整理纸料并观察设备运行。机械与人员的细致观察共同参与成型过程。'],
 diecut:['Bế & tạo hình','Die-cutting & forming','模切与成型'],
 diecutTitle:['Từ tờ giấy đến cấu trúc.','From sheet to structure.','从纸张到结构。'],
 diecutBody:['Tờ giấy được đưa vào công đoạn bế trên thiết bị NIKKO JY-106. Đây là một bước trong hành trình tạo nên hình dáng và các chi tiết của bao bì.','Sheets enter the die-cutting stage on the NIKKO JY-106. This is one step in shaping the packaging and its individual components.','纸张进入 NIKKO JY-106 设备进行模切，是形成包装外形及部件的一道工序。'],
 inspection:['Kiểm tra hộp thành phẩm','Inspecting the finished box','成品纸盒检查'],
 inspectionTitle:['Chạm vào từng chi tiết.','Care you can see up close.','细看每一处细节。'],
 inspectionBody:['Đội ngũ trực tiếp cầm, quan sát và kiểm tra hộp sau gia công. Bề mặt, mép hộp và sự ăn khớp giữa các phần được xem xét trong quá trình hoàn thiện.','The team handles and inspects boxes after processing. Surfaces, edges and the fit between components are reviewed during finishing.','加工后，团队直接拿起纸盒观察检查，在完善过程中查看表面、边缘及各部件的配合。'],
 open:['Xem ảnh lớn','View larger photo','查看大图'],original:['Xem ảnh gốc','View original photo','查看原图'],close:['Đóng ảnh','Close photo','关闭图片'],
 note:['Ảnh tại HotPrint • Đã tinh chỉnh độ nét và ánh sáng.','HotPrint photography • Clarity and lighting enhanced.','HotPrint 实景照片 · 已优化清晰度与光线。']
};
const dimensions={prepress:[1488,1057],automation:[1556,1011],diecut:[1562,1007],inspection:[1504,1046]};
export function factoryJournal(lang){const t=k=>text[k][lang==='vi'?0:1];
const photo=id=>`<figure class="fj-photo"><button type="button" data-journal-photo="${id}" data-caption="${t(id)}" aria-label="${t('open')}: ${t(id)}" aria-haspopup="dialog"><img src="/assets/factory-journal/${id}.webp" srcset="/assets/factory-journal/${id}-small.webp 800w, /assets/factory-journal/${id}.webp ${dimensions[id][0]}w" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 55vw, 800px" width="${dimensions[id][0]}" height="${dimensions[id][1]}" loading="lazy" decoding="async" alt="${t(id)} — HotPrint"><span class="fj-open"><span>${t('open')}</span><span aria-hidden="true">↗</span></span></button><figcaption>${t(id)}</figcaption></figure>`;
const copy=(id,n)=>`<div class="fj-copy"><p class="fp-kicker"><span>${n}</span> / ${t(id)}</p><h4>${t(id+'Title')}</h4><p>${t(id+'Body')}</p><a class="fj-original" href="/assets/factory-journal/${id}-original.webp" target="_blank" rel="noopener">${t('original')} ↗</a></div>`;
return `<div id="cong-doan-thuc-te" class="fj-journal" aria-labelledby="fj-title"><header class="fj-heading"><div><p class="fp-kicker">HOTPRINT / ${t('kicker')}</p><h3 id="fj-title">${t('title')}</h3></div><p>${t('intro')}</p></header><article class="fj-feature">${photo('prepress')}${copy('prepress','01')}</article><div class="fj-pair"><article>${photo('automation')}${copy('automation','02')}</article><article>${photo('diecut')}${copy('diecut','03')}</article></div><article class="fj-feature fj-feature-last">${photo('inspection')}${copy('inspection','04')}</article><p class="fj-note">${t('note')}</p></div>`}
export function factoryJournalDialog(lang){const t=k=>text[k][lang==='vi'?0:1];return `<dialog id="factory-journal-dialog" class="fj-dialog" aria-labelledby="fj-dialog-title"><button type="button" class="fj-close" data-close aria-label="${t('close')}">×</button><img id="fj-dialog-image" alt=""><div class="fj-dialog-caption"><h2 id="fj-dialog-title"></h2><a id="fj-dialog-original" target="_blank" rel="noopener">${t('original')} ↗</a></div></dialog>`}
export const factoryJournalChinese={};for(const value of Object.values(text)){factoryJournalChinese[value[1]]=value[2];if(value[1].includes('<br>'))value[1].split('<br>').forEach((part,i)=>factoryJournalChinese[part]=value[2].split('<br>')[i])}
factoryJournalChinese['HOTPRINT / '+text.kicker[1]]='HOTPRINT / '+text.kicker[2];
factoryJournalChinese[text.original[1]+' ↗']=text.original[2]+' ↗';
for(const id of Object.keys(dimensions)){
 factoryJournalChinese['/ '+text[id][1]]='/ '+text[id][2];
 factoryJournalChinese[text[id][1]+' — HotPrint']=text[id][2]+' — HotPrint';
 factoryJournalChinese[text.open[1]+': '+text[id][1]]=text.open[2]+': '+text[id][2];
}
