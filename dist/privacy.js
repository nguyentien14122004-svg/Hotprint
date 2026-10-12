(() => {
 const key='hotprint-sample-selection',status=document.getElementById('privacy-storage-status'),button=document.getElementById('privacy-clear-samples'),en=document.documentElement.lang!=='vi';
 const tr=(vi,eng)=>en?(document.documentElement.lang.startsWith('zh')?HOTPRINT_I18N.translate(eng):eng):vi;
 function refresh(cleared=false){try{const value=localStorage.getItem(key);button.disabled=value===null;status.textContent=cleared?tr('Đã xóa danh sách mẫu lưu trên trình duyệt này.','Saved sample references have been cleared from this browser.'):value===null?tr('Không có danh sách mẫu được lưu trên trình duyệt này.','No sample references are saved in this browser.'):tr('Có dữ liệu danh sách mẫu lưu trên trình duyệt này.','This browser contains a saved sample reference list.')}catch{status.textContent=tr('Trình duyệt không cho trang này truy cập dữ liệu lưu. Bạn có thể dùng phần cài đặt trình duyệt để xóa dữ liệu website.','This page cannot access browser storage. You can clear site data in your browser settings.');button.disabled=true}}
 button.onclick=()=>{try{localStorage.removeItem(key);refresh(true)}catch{refresh()}};
 window.addEventListener('storage',event=>{if(event.key===key||event.key===null)refresh()});refresh();
})();
