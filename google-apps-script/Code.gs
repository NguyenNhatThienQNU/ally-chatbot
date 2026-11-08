/**
 * ALLY – Nhận phản hồi ẩn danh và bản chuyển tiếp hỗ trợ về Google Sheet (tùy chọn)
 *
 * 1) Khi nhận phản hồi (type = "feedback"):
 *    Chỉ gửi: mã mục kiến thức, đánh giá (có ích / chưa ổn), lý do,
 *    góp ý (đã che số điện thoại, email, liên kết), nhóm tuổi, phiên bản dữ liệu.
 * 2) Khi nhận bản chuyển tiếp khẩn (type = "handoff" – có sự đồng ý rõ ràng của người dùng):
 *    Lưu vào trang tính "ChuyenTiep111" gồm thời gian, mức độ cảm biến, tín hiệu và nội dung gói hỗ trợ.
 *
 * Cách cài:
 * 1. Tạo một Google Sheet mới (ví dụ "ALLY - Phản hồi & Tiếp nhận").
 * 2. Tiện ích mở rộng → Apps Script → dán toàn bộ tệp này → Lưu.
 * 3. Triển khai → Tùy chọn triển khai mới → Loại: Ứng dụng web.
 *    Thực thi với tư cách: Tôi. Người có quyền truy cập: Bất kỳ ai.
 * 4. Sao chép địa chỉ ứng dụng web (…/exec), dán vào ứng dụng ALLY:
 *    Cài đặt → Dành cho nhà sáng lập & nhóm phát triển → Dữ liệu & cài đặt → “Địa chỉ nhận phản hồi”.
 */
const SHEET_NAME = 'PhanHoi';
const HANDOFF_SHEET = 'ChuyenTiep111';
const HEADERS = ['Thời gian nhận', 'Mục kiến thức', 'Đánh giá', 'Lý do', 'Góp ý', 'Nhóm tuổi', 'Phiên bản dữ liệu'];
const HANDOFF_HEADERS = ['Thời gian nhận', 'Mức cảm biến', 'Tín hiệu ghi nhận', 'Nhóm tuổi', 'Nội dung chuyển tiếp'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(5000);
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (data.type === 'handoff') {
      const sh = ss.getSheetByName(HANDOFF_SHEET) || ss.insertSheet(HANDOFF_SHEET);
      if (sh.getLastRow() === 0) sh.appendRow(HANDOFF_HEADERS);
      sh.appendRow([
        new Date(),
        String(data.riskLevel != null ? data.riskLevel : '').slice(0, 10),
        String((data.signals || []).join(', ')).slice(0, 200),
        String(data.age || '').slice(0, 20),
        String(data.summary || '').slice(0, 4000)
      ]);
      return ContentService.createTextOutput('ok');
    }
    if (data.type !== 'feedback') return ContentService.createTextOutput('bo qua');
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
    sh.appendRow([
      new Date(),
      String(data.entry || '').slice(0, 80),
      Number(data.rating) > 0 ? 'Có ích' : 'Chưa ổn',
      String(data.reason || '').slice(0, 100),
      che(String(data.comment || '')).slice(0, 400),
      String(data.age || '').slice(0, 10),
      String(data.v || '').slice(0, 40)
    ]);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('loi');
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('ALLY: máy chủ nhận phản hồi đang hoạt động.');
}

/** Che thêm một lần nữa số điện thoại, email, liên kết nếu còn sót. */
function che(t) {
  return t
    .replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, '[email]')
    .replace(/https?:\/\/\S+/g, '[liên kết]')
    .replace(/(\+?\d[\d\s.-]{5,}\d)/g, '[số]');
}
