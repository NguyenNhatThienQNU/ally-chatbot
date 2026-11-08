# ALLY – ứng dụng chatbot người bạn đồng hành phòng, chống xâm hại trẻ em

Phiên bản 1.1.0 · tháng 11/2026 · sản phẩm cho đề tài nghiên cứu khoa học, xây dựng theo yêu cầu trong tệp XHHS.docx.

**ALLY** (nghĩa là *Người bạn đồng hành*) là ứng dụng web dạng chatbot hỗ trợ nạn nhân, trẻ em, học sinh và người dân tìm hiểu về phòng, chống xâm hại trẻ em, luyện kỹ năng ứng phó qua tình huống tương tác định kỳ, và nhanh chóng kết nối tới **Tổng đài Quốc gia Bảo vệ Trẻ em 111**, **Công an 113**, **Cấp cứu 115** khi cần. Ứng dụng không cần đăng nhập, ẩn danh mặc định, bảo mật thông tin và cài đặt được trên cả Android và iOS.

Bản xem nhanh trực tuyến (riêng tư, chủ tài khoản có thể chia sẻ): https://claude.ai/artifact/5NRa1m8APaVB1fCkbkGgWr

---

## 1. Trong thư mục có gì

| Tệp, thư mục | Dùng để |
|---|---|
| `index.html` | Toàn bộ ứng dụng: giao diện, chatbot, kho kiến thức mặc định. |
| `manifest.webmanifest`, `sw.js`, `icons/` | Cho phép cài lên điện thoại như một ứng dụng và dùng khi không có mạng. |
| `fonts/` | Phông chữ Baloo 2 và Be Vietnam Pro (giấy phép SIL OFL), đi kèm để ứng dụng không phải gọi tới máy chủ bên ngoài. |
| `du-lieu/kho-du-lieu.json` | Kho kiến thức, bộ tình huống, từ khóa của cảm biến. Thay tệp này để cập nhật nội dung cho mọi máy. |
| `google-apps-script/Code.gs` | Tùy chọn: gom phản hồi ẩn danh của người dùng về một Google Sheet. |
| `ma-nguon/` | Mã nguồn tách riêng từng phần (giao diện, xử lý, dữ liệu) và tệp đóng gói `build.py`. |

## 2. Dùng thử ngay

- Bấm đúp `index.html` để mở bằng Chrome hoặc Edge. Mọi chức năng đều chạy, riêng việc cài lên điện thoại cần đưa ứng dụng lên mạng (mục 3). Khi mở trực tiếp từ máy, trình duyệt có thể dùng phông chữ hệ thống thay cho phông đi kèm; đây là bình thường.
- Hoặc mở bản xem nhanh trực tuyến ở trên.

## 3. Đưa lên mạng và cài trên Android, iOS

Ứng dụng là PWA (ứng dụng web cài được). Chỉ cần đưa cả thư mục lên một trang web có địa chỉ `https://`, sau đó mở bằng điện thoại để cài.

Cách 1 – GitHub Pages (miễn phí):
1. Tạo kho (repository) mới trên GitHub, tải toàn bộ nội dung thư mục này lên (giữ nguyên các thư mục con; có thể bỏ `ma-nguon/` nếu không muốn công khai).
2. Vào Settings → Pages → Source: Deploy from a branch → chọn nhánh `main`, thư mục `/ (root)` → Save.
3. Sau 1–2 phút, ứng dụng có địa chỉ dạng `https://<tên-tài-khoản>.github.io/<tên-kho>/`.

Cách 2 – Netlify (miễn phí): đăng nhập app.netlify.com → Add new site → Deploy manually → kéo thả cả thư mục vào.

Cài lên điện thoại:
- Android (Chrome): mở địa chỉ ứng dụng → bấm dấu ba chấm → “Cài đặt ứng dụng” hoặc “Thêm vào màn hình chính”.
- iPhone, iPad (Safari): mở địa chỉ ứng dụng → bấm nút Chia sẻ → “Thêm vào MH chính”.
- Sau khi cài, phần kiến thức, tình huống, khung khẩn cấp vẫn dùng được khi không có mạng.
- Nếu muốn đưa lên Google Play, có thể dùng công cụ PWABuilder (pwabuilder.com) để tạo gói Android từ địa chỉ web.

## 4. Đối chiếu yêu cầu trong XHHS.docx

| Yêu cầu | Cách ứng dụng đáp ứng |
|---|---|
| Hình thức chatbot; cung cấp thông tin, kiến thức, tình huống | Trò chuyện tự do bằng tiếng Việt (có dấu, không dấu, viết tắt kiểu “e bi ba danh”). Kho 40 mục kiến thức thuộc 8 chủ đề, 40 tình huống. Thư viện “Tìm hiểu” và trang “Tình huống”. |
| Không thay thế chuyên gia, cơ quan; chỉ hỗ trợ thông tin và kết nối | Lời nhắc miễn trừ trách nhiệm ở thanh dưới khung nhập, phần giới thiệu, Cài đặt và câu trả lời “ALLY là ai?”. Mọi luồng hỗ trợ đều dẫn tới người lớn tin cậy, Tổng đài 111, 113, 115. |
| Người sáng lập lập lịch đánh giá, điều chỉnh, cập nhật dữ liệu định kỳ | Mỗi mục kiến thức có ngày rà soát, người rà soát, chu kỳ (pháp luật 90 ngày, nội dung khác 180 ngày). Trang Quản trị có “Lịch rà soát”, cảnh báo mục quá hạn hoặc sắp đến hạn, xuất lịch ra CSV. Nội dung pháp luật quá hạn được gắn cảnh báo khi hiển thị. |
| Cài được trên Android, iOS | PWA chuẩn: manifest, biểu tượng, service worker, chạy ngoại tuyến, kèm nút cài đặt trực tiếp ngay trong trang “Trợ giúp” và “Cài đặt” (mục 3). |
| Giao diện dễ tiếp cận cho mọi đối tượng | Nút bấm lớn, chọn nhóm tuổi ngay trên thanh đầu trang (kể cả trên điện thoại), gợi ý trả lời nhanh, chỉnh cỡ chữ 4 mức, giao diện sáng/tối, nút bật/tắt giọng đọc tự nhiên của ALLY trên thanh đầu trang, nói thay cho gõ chữ (nếu thiết bị hỗ trợ). |
| Ẩn danh tính và thông tin người dùng | Không đăng nhập, không hỏi tên. Mặc định không lưu cuộc trò chuyện. Có nút **Ngụy trang nhanh (ALLY Study – Sổ tay từ vựng Tiếng Anh)** khi có người đi ngang qua, và nút **Thoát nhanh** rời ứng dụng, xóa cuộc trò chuyện ngay (trên máy tính: bấm Esc hai lần). |
| Cung cấp thông tin pháp luật, liên kết nguồn chính thống | Câu trả lời có mục “Nguồn tham khảo” và thanh liên kết nhanh tới **Thư Viện Pháp Luật** (Luật Trẻ em 2016, Bộ luật Hình sự), **Tổng đài 111**, **Bộ Y tế** (Cổng thông tin, Báo Sức khỏe & Đời sống), **Báo Công an Nhân dân**, **Báo Thanh Niên** và các báo chính thống khác. |
| Chuyển thông tin trò chuyện, danh tính sang 111; tự đánh giá mức độ qua cuộc trò chuyện | **Cảm biến ALLY** hiển thị trực quan trên thanh đầu trang, tự động chấm từng tin nhắn theo 10 nhóm tín hiệu, chia 4 mức (0 An toàn, 1 Cần quan tâm, 2 Nguy cơ cao, 3 Khẩn cấp). Mức cao: chuyển sang lắng nghe, hỏi về sự an toàn, hiện thẻ gọi 111/113. Cửa sổ **“Chuyển thông tin sang Tổng đài 111 & Cơ quan hỗ trợ”** tự động đính kèm kết quả cảm biến, nội dung cuộc trò chuyện, tọa độ GPS (nếu bấm lấy vị trí) và cho phép chọn **Kèm danh tính & liên hệ** hoặc **Ẩn danh hoàn toàn** để gọi/gửi ngay cho 111. |
| Khung khẩn cấp liên kết 111 và 113 | Nút SOS luôn hiện ở góc trên. Khung khẩn cấp nổi bật cả 2 nút gọi lớn **111** và **113** ngang hàng, tự bật khi tin nhắn cho thấy nguy hiểm ngay lúc này hoặc ý nghĩ tự làm hại bản thân, kèm nút lấy tọa độ GPS tại chỗ và chuyển thông tin sang 111. |
| Giọng điệu tự nhiên, gần gũi, thiên về chia sẻ hơn đưa điều luật | Nhân vật **ALLY** xưng “mình – bạn / em”, lắng nghe, đồng cảm, khẳng định “không phải lỗi của bạn”. Bộ đọc giọng nói ưu tiên giọng tiếng Việt tự nhiên (Neural/HoaiMy/Google Tiếng Việt) và tự làm sạch ký hiệu trước khi đọc. |
| Điều chỉnh cách diễn đạt theo nhóm tuổi | 4 nhóm: dưới 11 tuổi, 11–14, 15–18, người lớn. Mỗi mục có bản viết riêng phù hợp tâm sinh lý. Bộ lọc chặn từ ngữ không phù hợp với trẻ nhỏ. |
| Tình huống, bài kiểm tra định kỳ | 10 câu cho mỗi nhóm tuổi, chấm riêng “Hiểu biết” và “Ứng phó”, xếp mức, gợi ý bài cần ôn, lưu lịch sử, nhắc làm lại sau 30 ngày (dấu chấm vàng ở thanh điều hướng). Có thể luyện ngay trong khung chat cùng ALLY. |
| Đánh giá mức độ hữu ích, gửi phản hồi | Nút “Có ích / Chưa ổn” dưới mỗi câu trả lời, chọn lý do và góp ý. Trang Quản trị tổng hợp, đánh dấu mục cần xem lại, xuất CSV, có thể gom về Google Sheet. |
| Kiểm tra nội dung, hạn chế câu trả lời sai, không hợp lứa tuổi, gây ảnh hưởng tiêu cực | Chỉ trả lời bằng nội dung đã duyệt. Bộ lọc theo nhóm tuổi và cụm từ có thể gây hại (đổ lỗi cho nạn nhân, khuyên giữ im lặng). Ngưỡng tin cậy: không chắc thì không đoán. Nút “Kiểm duyệt toàn bộ kho” và nhật ký bộ lọc. |
| Tự bổ sung dữ liệu, cập nhật kiến thức, mở rộng chức năng | Tích hợp công cụ **“Tự bổ sung từ Văn bản pháp luật / Báo chí”** trong trang Quản trị: dán điều luật hoặc bài báo chính thống để ALLY tự động tách ý, rút trích từ khóa và chuyển ngữ thành bản nháp đa độ tuổi. Hỗ trợ đồng bộ `du-lieu/kho-du-lieu.json` từ xa và tạo mục mới từ câu hỏi chưa có câu trả lời. |

## 5. Trang quản trị

Cài đặt (biểu tượng thanh trượt ở góc trên) → “Dành cho nhóm phát triển” → mã PIN mặc định 2026. Hãy đổi mã ngay trong “Dữ liệu & cài đặt”. Mã PIN chỉ để học sinh không vào nhầm, không phải lớp bảo mật.

- Tổng quan: số mục, mục quá hạn rà soát, phản hồi, lỗi kiểm duyệt.
- Kho kiến thức: sửa từng mục (câu hỏi mẫu, từ khóa, nội dung cho từng nhóm tuổi, nguồn, người rà soát, trạng thái Đã duyệt/Nháp), thêm, xóa.
- Lịch rà soát: chu kỳ rà soát, chu kỳ nhắc làm bài tình huống, xuất lịch CSV.
- Kiểm duyệt nội dung: kiểm toàn bộ kho, kiểm thử một đoạn văn, chỉnh danh sách từ bị chặn và ngưỡng tin cậy.
- Phản hồi: thống kê, mục cần xem lại, câu hỏi chưa có câu trả lời.
- Tình huống: xem và sửa bộ câu hỏi.
- Dữ liệu & cài đặt: xuất, nhập `kho-du-lieu.json`, địa chỉ dữ liệu từ xa, địa chỉ nhận phản hồi, mã PIN, khôi phục dữ liệu gốc.
- Thử nghiệm & trình diễn: phân tích một câu bất kỳ (điểm từng nhóm tín hiệu, mục kiến thức khớp), đánh giá hàng loạt trên bộ câu thử (độ chính xác, độ bao phủ, F1), bật thanh cảm biến trong khung chat khi trình diễn.

Quy trình cập nhật nội dung cho mọi máy:
1. Sửa nội dung trong trang Quản trị trên một máy.
2. Chạy “Kiểm duyệt toàn bộ kho”, sửa hết lỗi.
3. “Xuất kho-du-lieu.json”, rồi thay tệp `du-lieu/kho-du-lieu.json` trên GitHub/Netlify.
4. Các máy khác tự nhận bản mới ở lần mở tiếp theo.

Lịch đề xuất: hằng tuần xem phản hồi; 90 ngày rà soát nội dung pháp luật (đối chiếu văn bản mới trên Thư Viện Pháp Luật); 180 ngày rà soát nội dung kỹ năng cùng giáo viên tư vấn tâm lý; mỗi năm học rà soát toàn bộ cùng chuyên gia.

## 6. Gom phản hồi về Google Sheet (tùy chọn)

1. Tạo Google Sheet mới → Tiện ích mở rộng → Apps Script → dán nội dung `google-apps-script/Code.gs` → Lưu.
2. Triển khai → Tùy chọn triển khai mới → Ứng dụng web. Thực thi với tư cách: Tôi. Người có quyền truy cập: Bất kỳ ai.
3. Sao chép địa chỉ kết thúc bằng `/exec`, dán vào ô “Địa chỉ nhận phản hồi” trong trang Quản trị.

Phản hồi gửi đi chỉ gồm mã mục, đánh giá, lý do, góp ý (đã che số điện thoại, email, liên kết), nhóm tuổi. Không gửi nội dung trò chuyện.

## 7. Gợi ý trình diễn trước ban giám khảo

1. Bật “Hiện thanh cảm biến nguy cơ” trong mục Thử nghiệm & trình diễn.
2. Chọn nhóm 11–14 tuổi, hỏi “xâm hại là gì” rồi đổi sang nhóm dưới 11 tuổi hỏi lại để thấy lời lẽ thay đổi.
3. Gõ không dấu “goi 111 co mat tien khong”.
4. Gõ “chú hàng xóm hay sờ vào người em, em sợ lắm”: cảm biến lên mức 2, chatbot chuyển sang lắng nghe và hỏi về an toàn. Bấm “Mình đang an toàn” → kể tiếp → “Mình nên làm gì bây giờ?” → “Chuẩn bị nội dung gọi 111”.
5. Gõ “cứu em với, có người đang đi theo em”: khung khẩn cấp tự bật.
6. Bấm “Thoát nhanh” để cho thấy cuộc trò chuyện bị xóa ngay.
7. Mở trang Tình huống làm vài câu; mở trang Quản trị, chạy “Kiểm duyệt toàn bộ kho” và “Đánh giá hàng loạt”.

## 8. Lưu ý về an toàn và đạo đức

- Nội dung hiện có là bản mẫu do nhóm biên soạn từ nguồn chính thống. Trước khi cho học sinh dùng thật, cần giáo viên tư vấn tâm lý, cán bộ bảo vệ trẻ em hoặc luật sư rà soát và ghi tên người rà soát vào từng mục.
- Yêu cầu “tự chuyển danh tính sang 111” mâu thuẫn với yêu cầu ẩn danh, và hiện Tổng đài 111 chưa có cổng tiếp nhận công khai cho ứng dụng bên ngoài. Vì vậy ứng dụng làm theo cách chuyển tiếp có sự đồng ý: soạn sẵn nội dung để người dùng tự gọi hoặc gửi, không tự gửi gì đi. Ứng dụng không bao giờ báo “đã gửi” khi chưa có kết nối thật, vì một em nhỏ có thể chờ một sự giúp đỡ không đến. Chỉ bật CONFIG.handoff khi đã có thỏa thuận chính thức; không dùng để thu lời kể của nạn nhân vào bảng tính cá nhân.
- Theo Luật Trẻ em 2016 (khoản 11 Điều 6) và Luật Bảo vệ dữ liệu cá nhân 2025 (Điều 24), thông tin đời sống riêng tư của trẻ từ đủ 7 tuổi chỉ được công bố khi có sự đồng ý của trẻ và cha mẹ, người giám hộ. Khi thử nghiệm với học sinh, cần sự đồng ý của nhà trường và phụ huynh, chỉ dùng tình huống giả định, không thu thập lời kể thật.
- Cảm biến dựa trên từ khóa và mẫu câu nên có thể nhận sai. Thiết kế ưu tiên an toàn: nếu nghi ngờ thì hiện số điện thoại hỗ trợ. Bộ câu thử có sẵn trong trang Quản trị được dùng khi xây dựng cảm biến; khi viết báo cáo, hãy xây dựng bộ câu thử riêng có người chuyên môn gán nhãn để đánh giá khách quan.

## 9. Nguồn tham khảo chính

- Luật Trẻ em 2016 – Thư Viện Pháp Luật: https://thuvienphapluat.vn/van-ban/Giao-duc/Luat-tre-em-2016-303313.aspx
- Bộ luật Hình sự 2015 – Thư Viện Pháp Luật: https://thuvienphapluat.vn/van-ban/Trach-nhiem-hinh-su/Bo-luat-hinh-su-2015-296661.aspx
- Tổng đài 111 hoạt động 24/7, miễn phí, đồng thời là tổng đài quốc gia về phòng, chống mua bán người (VnEconomy, 9/2025): https://vneconomy.vn/khai-truong-tong-dai-quoc-gia-mien-phi-ve-phong-chong-mua-ban-nguoi.htm
- Tổng đài 111 tiếp nhận khoảng 300.000 cuộc gọi/năm (Tuổi Trẻ, 6/2026): https://tuoitre.vn/tong-dai-quoc-gia-bao-ve-tre-em-tiep-nhan-300-000-cuoc-goi-nam-nhieu-truong-hop-can-can-thiep-20260603175748185.htm
- Tổng đài 111 nhận cả cuộc gọi khủng hoảng tâm lý, nhận thông báo qua Zalo và ứng dụng (Sức khỏe & Đời sống, 5/2026): https://suckhoedoisong.vn/tong-dai-111-tiep-nhan-hon-46000-cuoc-goi-trong-mot-thang-nhieu-tre-cau-cuu-vi-khung-hoang-tam-ly-16926050907065846.htm
- Bảo vệ dữ liệu cá nhân của trẻ em (Tạp chí Luật sư Việt Nam): https://lsvn.vn/cong-bo-du-lieu-ca-nhan-cua-tre-tu-07-tuoi-phai-duoc-nguoi-dai-dien-dong-y-a167752.html
- Danh sách đầy đủ có trong trang “Nguồn chính thống” của ứng dụng.

## 10. Thông tin kỹ thuật

- HTML, CSS, JavaScript thuần, không thư viện ngoài, không máy chủ. Dữ liệu người dùng (cài đặt, bàn tay tin cậy, kết quả tình huống, phản hồi) chỉ lưu trên máy bằng localStorage.
- Hiểu câu hỏi: chuẩn hóa tiếng Việt có dấu và không dấu, đổi chữ viết tắt; chấm điểm theo từ khóa có trọng số cộng độ tương đồng Dice (theo từ và cặp từ) với câu hỏi mẫu; dưới ngưỡng tin cậy thì không đoán.
- Cảm biến nguy cơ: từ khóa theo 10 nhóm tín hiệu, mẫu bị động (“bị … đánh”), cặp từ đứng gần nhau (“ép … quan hệ”), xử lý phủ định (“không bị đánh”), thành ngữ (“mệt muốn chết”), ngôi thứ nhất, nói về người khác, câu hỏi tìm hiểu, tính cấp bách (“đang”, “bây giờ”); cộng dồn theo phiên trò chuyện.
- Đóng gói lại sau khi sửa mã nguồn: cài Python 3 (kèm thư viện Pillow) và Node.js, mở thư mục `ma-nguon`, chạy `python build.py`. Kết quả nằm trong `ma-nguon/dist`. Nếu chỉ sửa nội dung, dùng trang Quản trị là đủ, không cần đóng gói lại.
