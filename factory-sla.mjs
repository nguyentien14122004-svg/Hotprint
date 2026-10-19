// Commitments supplied by the owner; 98% and <1% confirmed on 19 October 2026.
const copy={
 kicker:['QUY TRÌNH & SLA','PROCESS & SLA','流程与服务水平协议'],
 title:['Cam kết rõ ràng.<br>Đo lường được.','Clear commitments.<br>Measurable standards.','清晰承诺。<br>可衡量的标准。'],
 intro:['Ổn định vận hành, minh bạch thông tin và khả năng mở rộng quy mô — nền tảng để đồng hành cùng doanh nghiệp trong từng đơn hàng.','Operational stability, transparent information and the capacity to scale — a foundation for working together on every order.','稳定运营、信息透明及规模扩展能力，是每一笔订单长期合作的基础。'],
 count:['cam kết bằng văn bản','written commitments','项书面承诺'],
 panelTitle:['Một chuẩn chung.<br>Một đầu mối đồng hành.','Shared standards.<br>A dedicated point of contact.','统一标准。<br>专属对接。'],
 panelBody:['HotPrint cam kết 8 chỉ số SLA bằng văn bản, với cách đo lường và tần suất báo cáo rõ ràng.','HotPrint commits to eight SLA indicators in writing, with defined measurement methods and reporting intervals.','HotPrint 以书面形式承诺八项 SLA 指标，并明确衡量方法及报告频率。'],
 partner:['Đối tác trên 1 tỷ đồng/tháng','Partners above VND 1 billion/month','月合作金额超过 10 亿越南盾的客户'],
 partnerBody:['Account Manager riêng và SLA tùy chỉnh theo hệ thống của bạn.','A dedicated Account Manager and an SLA tailored to your systems.','配备专属客户经理，并根据您的系统定制 SLA。'],
 table:['Bảng SLA — Cam kết đo lường được','SLA — Measurable commitments','SLA — 可衡量的承诺'],
 indicator:['Chỉ số SLA','SLA indicator','SLA 指标'],
 commitment:['Cam kết HotPrint','HotPrint commitment','HotPrint 承诺'],
 method:['Cách đo lường & tần suất','Measurement & frequency','衡量方式与频率'],
 note:['Các chỉ số trên là mức cam kết SLA. Tỷ lệ giao đúng hạn được theo dõi trong 12 tháng liên tiếp; tỷ lệ lỗi được đo theo số lô bị phàn nàn trên tổng lô xuất.','These figures are SLA commitments. On-time delivery is tracked over a rolling 12-month period; the defect rate is measured as complained-about lots divided by total dispatched lots.','以上数值为 SLA 承诺。准时交付率按滚动 12 个月追踪；缺陷率以被投诉批次数除以总出货批次数计算。'],
 nav:['Cam kết SLA','SLA commitments','SLA 承诺']
};
const rows=[
 [['Màu sắc đồng nhất','Colour consistency','色彩一致性'],['Delta E ≤ 3.0 mỗi lô','Delta E ≤ 3.0 per lot','每批 Delta E ≤ 3.0'],['Đo bằng máy quang phổ (Spectrophotometer) mỗi ca sản xuất, lưu hồ sơ.','Spectrophotometer measurements every production shift; records retained.','每个生产班次使用分光光度计测量，并保存记录。']],
 [['Giao hàng đúng hạn','On-time delivery','准时交付'],['98% — 12 tháng liên tiếp','98% — rolling 12 months','98% — 滚动 12 个月'],['Lô giao đúng hạn / tổng lô — báo cáo hằng tháng.','On-time lots / total lots — reported monthly.','准时交付批次 / 总批次，每月报告。']],
 [['Tỷ lệ lỗi','Defect rate','缺陷率'],['Dưới 1% mỗi lô','Below 1% per lot','每批低于 1%'],['Lô bị phàn nàn / tổng lô xuất — báo cáo hằng tháng.','Complained-about lots / total dispatched lots — reported monthly.','被投诉批次 / 总出货批次，每月报告。']],
 [['Phản hồi báo giá','Quotation response','报价回复'],['Trong 4 giờ làm việc','Within 4 working hours','4 个工作小时内'],['Tính từ khi nhận yêu cầu đầy đủ.','From receipt of a complete request.','自收到完整需求起计算。']],
 [['Xử lý khiếu nại','Complaint handling','投诉处理'],['Phương án trong 48 giờ','Action plan within 48 hours','48 小时内提供方案'],['Tính từ khi nhận thông báo chính thức bằng văn bản.','From receipt of a formal written notification.','自收到正式书面通知起计算。']],
 [['Đổi/trả hàng lỗi sản xuất','Production-defect returns','生产缺陷退换货'],['Hoàn thành trong 5 ngày','Completed within 5 days','5 天内完成'],['Lỗi được xác nhận do quá trình sản xuất nội bộ.','For defects confirmed to result from internal production.','适用于确认由内部生产造成的缺陷。']],
 [['Báo cáo tình trạng sản xuất','Production status reporting','生产进度报告'],['Hằng tuần — thứ Sáu','Weekly — every Friday','每周五'],['Email/Zalo — theo định dạng đối tác yêu cầu.','Email/Zalo — in the partner’s requested format.','通过 Email/Zalo，采用客户要求的格式。']],
 [['Hồ sơ QC theo yêu cầu','QC records on request','按需提供 QC 记录'],['Trong 4 giờ làm việc','Within 4 working hours','4 个工作小时内'],['Truy xuất từ kho lưu trữ nội bộ — lưu 24 tháng.','Retrieved from internal archives — retained for 24 months.','从内部档案中检索，保存 24 个月。']]
];
const stats=[
 ['ΔE ≤ 3.0',['Kiểm soát màu G7','G7 colour control','G7 色彩控制']],
 ['98%',['Giao hàng đúng hạn','On-time delivery','准时交付']],
 ['48',['giờ · phương án khiếu nại','hours · complaint action plan','小时 · 投诉处理方案']],
 ['5',['ngày · đổi/trả hàng lỗi','days · production-defect returns','天 · 生产缺陷退换货']]
];
export const factorySlaChinese={};
for(const v of [...Object.values(copy),...rows.flat(),...stats.map(s=>s[1])]){
 factorySlaChinese[v[1]]=v[2];
 if(v[1].includes('<br>'))v[1].split('<br>').forEach((part,i)=>{factorySlaChinese[part]=v[2].split('<br>')[i]});
}
factorySlaChinese['04 / PROCESS & SLA']='04 / 流程与服务水平协议';
export function factorySla(lang){const t=v=>v[lang==='vi'?0:1],c=k=>t(copy[k]);return `<section id="cam-ket-sla" class="fp-sla fp-section" aria-labelledby="fp-sla-title"><div class="fp-wrap"><div class="fp-heading"><div><p class="fp-kicker">04 / ${c('kicker')}</p><h2 id="fp-sla-title">${c('title')}</h2></div><p>${c('intro')}</p></div><div class="fp-sla-layout"><aside class="fp-sla-aside"><div class="fp-sla-count"><strong>08</strong><span>${c('count')}</span></div><h3>${c('panelTitle')}</h3><p>${c('panelBody')}</p><div class="fp-sla-partner"><h4>${c('partner')}</h4><p>${c('partnerBody')}</p></div></aside><div class="fp-sla-data"><table class="fp-sla-table" role="table"><caption>${c('table')}</caption><thead role="rowgroup"><tr role="row"><th scope="col" role="columnheader">${c('indicator')}</th><th scope="col" role="columnheader">${c('commitment')}</th><th scope="col" role="columnheader">${c('method')}</th></tr></thead><tbody role="rowgroup">${rows.map((row,i)=>`<tr role="row"><th scope="row" role="rowheader"><span class="fp-sla-row-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span>${t(row[0])}</th><td role="cell"><span class="fp-sla-mobile-label" aria-hidden="true">${c('commitment')}</span><strong>${t(row[1])}</strong></td><td role="cell"><span class="fp-sla-mobile-label" aria-hidden="true">${c('method')}</span>${t(row[2])}</td></tr>`).join('')}</tbody></table><p class="fp-sla-note">${c('note')}</p></div></div><div class="fp-sla-stats">${stats.map(([value,label])=>`<div><strong>${value}</strong><p>${t(label)}</p></div>`).join('')}</div></div></section>`}
