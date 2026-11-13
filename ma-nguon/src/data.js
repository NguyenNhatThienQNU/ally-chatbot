/* =========================================================================
   KHO DỮ LIỆU MẶC ĐỊNH – ỨNG DỤNG "ALLY"
   - Mọi câu trả lời của chatbot đều lấy từ kho này (đã kiểm duyệt).
   - Nhóm phát triển có thể sửa trực tiếp trong trang Quản trị của ứng dụng,
     rồi xuất ra tệp du-lieu/kho-du-lieu.json để mọi máy tự cập nhật.
   - Cú pháp nội dung: dòng trống = sang đoạn; "- " = gạch đầu dòng;
     "1. " = danh sách có thứ tự; **chữ** = nhấn mạnh.
   - Từ khóa có thể kèm trọng số: "nên làm gì|0.5".
   ========================================================================= */
window.ALLY_DEFAULT = window.BANAN_DEFAULT = {
  version: "2026-11-13T20:50:00+07:00",
  meta: {
    ten: "ALLY",
    moTa: "Chatbot hỗ trợ phòng, chống xâm hại trẻ em",
    ngayBienSoan: "2026-11-08",
    nguoiRaSoatMacDinh: "Nhóm NCKH (bản mẫu – cần chuyên gia rà soát)",
    chuKyRaSoat: { "phap-luat": 90, "mac-dinh": 180 },
    chuKyKiemTra: 30
  },

  ages: [
    { id: "nho", label: "Dưới 11 tuổi", sub: "Học sinh tiểu học" },
    { id: "thcs", label: "11–14 tuổi", sub: "Học sinh THCS" },
    { id: "thpt", label: "15–18 tuổi", sub: "Học sinh THPT" },
    { id: "lon", label: "Người lớn", sub: "Phụ huynh, thầy cô, người dân" }
  ],

  topics: [
    { id: "kien-thuc", name: "Hiểu đúng về xâm hại", desc: "Xâm hại là gì, gồm những hình thức nào, ai có thể gây ra" },
    { id: "tu-bao-ve", name: "Tự bảo vệ bản thân", desc: "Vùng riêng tư, bí mật xấu, người tin cậy, người lạ" },
    { id: "ung-pho", name: "Khi chuyện xảy ra", desc: "Cần làm gì, kể với ai, gọi số nào" },
    { id: "tren-mang", name: "An toàn trên mạng", desc: "Người lạ trên mạng, ảnh riêng tư, bị đe dọa" },
    { id: "cam-xuc", name: "Cảm xúc và hỗ trợ", desc: "Khi thấy sợ hãi, buồn bã, tự trách" },
    { id: "phap-luat", name: "Pháp luật", desc: "Quyền trẻ em, xử lý vi phạm, trách nhiệm báo tin" },
    { id: "nguoi-lon", name: "Dành cho phụ huynh, thầy cô", desc: "Nhận biết dấu hiệu, phản ứng đúng, dạy trẻ tự bảo vệ" },
    { id: "ung-dung", name: "Về ứng dụng ALLY", desc: "ALLY là ai, thông tin có được giữ kín không" }
  ],

  hotlines: [
    { so: "113", ten: "Công an", khiNao: "Khi bạn hoặc người khác đang gặp nguy hiểm, bị tấn công, đe dọa, bắt giữ." },
    { so: "111", ten: "Bảo vệ trẻ em", khiNao: "Tư vấn, hỗ trợ, tiếp nhận tin báo trẻ em bị xâm hại, bạo lực, bỏ rơi, mua bán người. Miễn phí, 24/7." },
    { so: "115", ten: "Cấp cứu y tế", khiNao: "Khi có người bị thương nặng, chảy máu nhiều, ngất, hoặc đã tự làm hại bản thân." }
  ],

  sources: {
    LTE: { t: "Luật Trẻ em 2016 (Luật số 102/2016/QH13)", by: "Thư Viện Pháp Luật", u: "https://thuvienphapluat.vn/van-ban/Giao-duc/Luat-tre-em-2016-303313.aspx" },
    BLHS: { t: "Bộ luật Hình sự 2015 (sửa đổi, bổ sung)", by: "Thư Viện Pháp Luật", u: "https://thuvienphapluat.vn/van-ban/Trach-nhiem-hinh-su/Bo-luat-hinh-su-2015-296661.aspx" },
    TVPL_BL: { t: "Hành vi nào được xem là bạo lực trẻ em?", by: "Thư Viện Pháp Luật", u: "https://thuvienphapluat.vn/hoi-dap-phap-luat/hanh-vi-nao-duoc-xem-la-bao-luc-tre-em-138067116.html" },
    TN_QUEN: { t: "Phòng tránh nguy cơ trẻ bị xâm hại từ người thân quen", by: "Báo Thanh Niên", u: "https://thanhnien.vn/phong-tranh-nguy-co-tre-bi-xam-hai-tu-nguoi-than-quen-185241222212938592.htm" },
    TN_4DH: { t: "Chuyên gia chỉ 4 dấu hiệu nhận biết nhanh trẻ bị xâm hại (9/2024)", by: "Báo Thanh Niên", u: "https://thanhnien.vn/chuyen-gia-chi-4-dau-hieu-nhan-biet-nhanh-tre-bi-xam-hai-18524092010312074.htm" },
    TN_MANG: { t: "Nguy cơ xâm hại trực tuyến không chỉ đến từ người lạ (10/2026)", by: "Báo Thanh Niên", u: "https://thanhnien.vn/nguy-co-xam-hai-truc-tuyen-khong-chi-den-tu-nguoi-la-185261022134713873.htm" },
    TN_BH: { t: "Ngăn chặn tội ác bạo hành trẻ em", by: "Báo Thanh Niên", u: "https://thanhnien.vn/ngan-chan-toi-ac-bao-hanh-tre-em-185260509204724006.htm" },
    TN_DAY: { t: "Ba mẹ ơi: Dạy con cách tránh bị lạm dụng tình dục ngay từ nhỏ", by: "Báo Thanh Niên", u: "https://thanhnien.vn/ba-me-oi-day-con-cach-tranh-bi-lam-dung-tinh-duc-ngay-tu-nho-185550659.htm" },
    CAND_KN: { t: "Một số kỹ năng giúp trẻ em thoát nguy cơ bị xâm hại tình dục", by: "Báo Công an Nhân dân", u: "https://cand.com.vn/doi-song/TRE-CAN-LAM-GI-KHI-BI-XAM-HAI-TINH-DUC-i408985/" },
    CAND_DAY: { t: "Dạy con những kĩ năng tránh bị “xâm hại”", by: "Báo Công an Nhân dân", u: "https://cand.com.vn/cuoc-song-muon-mau/Day-con-nhung-ki-nang-tranh-bi-xam-hai-i425960/" },
    CAND_BV: { t: "Làm gì để bảo vệ trẻ trước xâm hại tình dục?", by: "Báo Công an Nhân dân", u: "https://cand.com.vn/Phong-su-Tieu-diem/Hay-bao-ve-cac-em-mot-cach-an-toan-nhat-i385702/" },
    CAND_SO: { t: "Trang bị “hệ miễn dịch số” để trẻ em tự bảo vệ mình trên không gian mạng", by: "Báo Công an Nhân dân", u: "https://cand.com.vn/Su-kien-Binh-luan-thoi-su/Trang-bi-he-mien-dich-so-de-tre-em-tu-bao-ve-minh-tren-khong-gian-mang-i615842/" },
    CAND_UC: { t: "Thành lập Mạng lưới ứng cứu, bảo vệ trẻ em trên môi trường mạng", by: "Báo Công an Nhân dân", u: "https://cand.com.vn/Xa-hoi/Thanh-lap-Mang-luoi-ung-cuu-bao-ve-tre-em-tren-moi-truong-mang-i592586/" },
    BYT_111: { t: "Tổng đài 111 tiếp nhận hơn 46.000 cuộc gọi trong một tháng (5/2026)", by: "Báo Sức khỏe & Đời sống – Bộ Y tế", u: "https://suckhoedoisong.vn/tong-dai-111-tiep-nhan-hon-46000-cuoc-goi-trong-mot-thang-nhieu-tre-cau-cuu-vi-khung-hoang-tam-ly-16926050907065846.htm" },
    BYT_NB: { t: "Cách nhận biết và phòng tránh trẻ bị xâm hại tình dục", by: "Báo Sức khỏe & Đời sống – Bộ Y tế", u: "https://suckhoedoisong.vn/cach-nhan-biet-va-phong-tranh-tre-bi-xam-hai-tinh-duc-169250630112745772.htm" },
    BYT: { t: "Tăng cường phòng chống xâm hại trẻ em", by: "Cổng thông tin Bộ Y tế", u: "https://moh.gov.vn/en/tin-lien-quan/-/asset_publisher/vjYyM7O9aWnX/content/tang-cuong-phong-chong-xam-hai-tre-em" },
    T111: { t: "Trang thông tin Tổng đài quốc gia bảo vệ trẻ em 111", by: "tongdai111.vn", u: "https://tongdai111.vn" },
    VNE_111: { t: "Khai trương Tổng đài quốc gia miễn phí về phòng, chống mua bán người 111 (9/2025)", by: "VnEconomy", u: "https://vneconomy.vn/khai-truong-tong-dai-quoc-gia-mien-phi-ve-phong-chong-mua-ban-nguoi.htm" },
    TT_111: { t: "Tổng đài quốc gia bảo vệ trẻ em tiếp nhận 300.000 cuộc gọi/năm (6/2026)", by: "Báo Tuổi Trẻ", u: "https://tuoitre.vn/tong-dai-quoc-gia-bao-ve-tre-em-tiep-nhan-300-000-cuoc-goi-nam-nhieu-truong-hop-can-can-thiep-20260603175748185.htm" },
    PLO_111: { t: "Tổng đài 111: Quy trình tiếp nhận và xử lý khi trẻ có nguy cơ bị xâm hại", by: "Báo Pháp Luật TP.HCM", u: "https://plo.vn/tong-dai-111-quy-trinh-tiep-nhan-va-xu-ly-khi-tre-co-nguy-co-bi-xam-hai-post872019.html" },
    LSVN_DL: { t: "Công bố dữ liệu cá nhân của trẻ từ 07 tuổi phải được người đại diện đồng ý", by: "Tạp chí Luật sư Việt Nam", u: "https://lsvn.vn/cong-bo-du-lieu-ca-nhan-cua-tre-tu-07-tuoi-phai-duoc-nguoi-dai-dien-dong-y-a167752.html" }
  },

  /* ---------------------------------------------------------------------
     KHO KIẾN THỨC
     --------------------------------------------------------------------- */
  kb: [
    /* ===== HIỂU ĐÚNG VỀ XÂM HẠI ===== */
    {
      id: "xam-hai-la-gi", topic: "kien-thuc", title: "Xâm hại trẻ em là gì?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["xâm hại", "xâm hại trẻ em", "xâm hại là gì", "lạm dụng trẻ em", "bị xâm hại là sao", "thế nào là xâm hại", "các hình thức xâm hại", "xâm hại nghĩa là gì"],
      q: ["Xâm hại trẻ em là gì?", "Thế nào là bị xâm hại?", "Xâm hại gồm những hình thức nào?"],
      a: {
        nho: `Xâm hại là khi có ai đó làm đau cơ thể bạn, làm bạn sợ hãi hay đụng vào vùng riêng tư của bạn.

Dù người đó là người lạ hay người quen thì làm thế đều là **sai**. Cơ thể của bạn là của riêng bạn. Bạn luôn có quyền nói KHÔNG, chạy đến chỗ an toàn và kể ngay cho người lớn bạn tin.`,
        thcs: `Xâm hại là bất kỳ hành vi nào làm tổn thương cơ thể, tinh thần, danh dự hay sự an toàn của bạn. Đó có thể là đụng chạm khó chịu, bạo lực, bắt nạt, ép buộc qua mạng hay bóc lột.

Điều quan trọng nhất bạn cần nhớ:
- **Đó không bao giờ là lỗi của bạn**, dù người làm là người lạ hay người quen.
- Bạn hoàn toàn có quyền được bảo vệ và có quyền từ chối bất kỳ ai làm bạn thấy bất an.
- Khi gặp chuyện, đừng giữ trong lòng một mình. Hãy tìm người lớn tin cậy hoặc cùng ALLY tìm cách gỡ rối nhé.`,
        thpt: `Xâm hại là hành vi gây tổn hại đến thân thể, tâm lý, danh dự hoặc sự riêng tư của bạn (như bạo lực, quấy rối, ép buộc tình dục, đe dọa qua mạng hay bóc lột).

Nếu bạn đang cảm thấy bất an hay bị xâm phạm:
- **Hãy tin vào cảm giác của mình**: Bất cứ điều gì làm bạn nghẹt thở, sợ hãi hay khó chịu đều là dấu hiệu bạn cần tự bảo vệ.
- **Trách nhiệm hoàn toàn thuộc về kẻ gây hại**, không phụ thuộc vào trang phục hay hoàn cảnh của bạn.
- Pháp luật luôn bảo vệ quyền bất khả xâm phạm về thân thể của bạn. Bạn không phải chịu đựng một mình.`,
        lon: `Khoản 5 Điều 4 Luật Trẻ em 2016 quy định: “Xâm hại trẻ em là hành vi gây tổn hại về thể chất, tình cảm, tâm lý, danh dự, nhân phẩm của trẻ em dưới các hình thức bạo lực, bóc lột, xâm hại tình dục, mua bán, bỏ rơi, bỏ mặc trẻ em và các hình thức gây tổn hại khác.”

Nhiều vụ việc do chính người quen của trẻ gây ra. Người lớn cần lắng nghe không phán xét, không đổ lỗi, tạo điểm tựa an toàn để trẻ dám lên tiếng và trang bị cho trẻ kỹ năng tự bảo vệ.`
      },
      src: ["LTE", "TN_QUEN"], next: ["xam-hai-tinh-duc", "bao-luc", "khi-bi-xam-hai"]
    },
    {
      id: "xam-hai-tinh-duc", topic: "kien-thuc", title: "Xâm hại tình dục là gì?", titleNho: "Khi ai đó chạm vào vùng riêng tư của bạn",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["xâm hại tình dục", "lạm dụng tình dục", "quấy rối tình dục", "dâm ô là gì", "ấu dâm", "sàm sỡ", "quấy rối", "xâm hại tình dục là gì", "gạ gẫm"],
      q: ["Xâm hại tình dục là gì?", "Thế nào là bị quấy rối tình dục?", "Dâm ô là gì?"],
      a: {
        nho: `Cơ thể bạn rất quý giá. Nếu có ai làm những việc này thì họ đã làm **sai**:
- Chạm vào vùng riêng tư (chỗ mặc đồ bơi, đồ lót, miệng) của bạn.
- Bắt bạn chạm vào người họ.
- Bắt bạn cởi quần áo hoặc cho bạn xem hình ảnh xấu.

Dù người đó dọa nạt hay bảo giữ bí mật, bạn cũng không có lỗi gì cả. Hãy nói KHÔNG thật to, chạy đi và kể ngay với người lớn bạn tin nhé.`,
        thcs: `Xâm hại tình dục là khi ai đó ép buộc, dụ dỗ hoặc lôi kéo bạn vào những hành vi liên quan đến tình dục mà bạn không muốn (đụng chạm vùng kín, gạ gẫm, xin ảnh nhạy cảm, dọa tung ảnh...).

Nếu bạn đang gặp phải tình huống này, hãy nhớ:
1. **Bạn hoàn toàn vô tội**: Trách nhiệm 100% thuộc về kẻ có hành vi xấu.
2. **Hành động ngay**: Nói "Dừng lại", rời khỏi chỗ vắng, không gửi bất kỳ ảnh hay tin nhắn nào nữa.
3. **Lưu chứng cứ & chia sẻ**: Giữ lại tin nhắn làm bằng chứng, tâm sự với người bạn tin nhất để không phải sợ hãi một mình.`,
        thpt: `Xâm hại tình dục bao gồm đụng chạm thân thể không mong muốn, quấy rối bằng lời nói, ép buộc quan hệ, gạ tình hay tống tiền bằng ảnh/clip nhạy cảm (kể cả qua mạng).

Nếu bạn đang là nạn nhân hoặc gặp nguy cơ:
- **Thấu hiểu cảm xúc**: Cảm giác ghê sợ, hoang mang hay tự trách lúc này là phản ứng tâm lý bình thường. Nhưng xin bạn nhớ: Bạn là nạn nhân, bạn không có lỗi.
- **Giải pháp bảo vệ**: Cắt đứt sự thao túng của đối phương, tuyệt đối không làm theo các yêu cầu ép buộc, lưu lại mọi bằng chứng và tìm người hỗ trợ tin cậy.
- **Pháp luật nghiêm trị**: Mọi hành vi xâm phạm tình dục người dưới 16 tuổi (và cưỡng ép người dưới 18 tuổi) đều là tội phạm hình sự nghiêm trọng.`,
        lon: `Xâm hại tình dục trẻ em bao gồm mọi hành vi dùng vũ lực, đe dọa, ép buộc hay dụ dỗ trẻ tham gia vào các hành vi tình dục (kể cả qua mạng như gạ gẫm, xin ảnh nhạy cảm, đe dọa phát tán).

Người lớn cần lưu ý để bảo vệ trẻ:
- **Thấu hiểu tâm lý**: Trẻ bị xâm hại thường rất sợ hãi, xấu hổ và tự trách mình. Hãy luôn tin tưởng và trấn an trẻ trước tiên: “Đây không phải lỗi của con”.
- **Không tra vấn dồn dập**: Tránh bắt trẻ kể đi kể lại nhiều lần gây tái chấn thương tâm lý.
- **Bảo vệ và can thiệp kịp thời**: Cách ly trẻ khỏi người gây hại, đưa trẻ đi khám y tế và liên hệ Tổng đài **111** để được hỗ trợ chuyên môn an toàn nhất.`
      },
      src: ["LTE", "TN_MANG", "CAND_KN"], next: ["vung-rieng-tu", "khi-bi-xam-hai", "phap-luat-hinh-su"]
    },
    {
      id: "bao-luc", topic: "kien-thuc", title: "Bạo lực trẻ em là gì?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["bạo lực", "bạo hành", "bạo lực trẻ em", "đánh đập", "đánh mắng", "mắng chửi", "chửi mắng", "lăng mạ", "xúc phạm", "hành hạ", "ngược đãi", "bị chửi"],
      q: ["Bạo lực trẻ em là gì?", "Bị đánh mắng có phải là bạo lực không?", "Thế nào là bạo hành trẻ em?"],
      a: {
        nho: `Bạo lực là khi có người đánh, tát, làm đau bạn, hoặc chửi mắng làm bạn sợ hãi.

Không ai được phép làm đau bạn, kể cả người lớn trong nhà. Nếu bạn đang bị đau hay sợ hãi, hãy chạy ra chỗ an toàn và kể ngay cho người lớn bạn tin nhé.`,
        chung: `Bạo lực (dù là đòn roi thể xác hay chửi bới, lăng mạ, cô lập tinh thần) đều là hành vi sai trái và để lại tổn thương sâu sắc.

Nếu bạn đang phải đối mặt với bạo lực:
- **Ưu tiên sự an toàn**: Không đôi co kích động kẻ đang hung hăng. Lánh ngay sang nơi an toàn có người khác.
- **Xóa bỏ suy nghĩ cam chịu**: Đừng nghĩ rằng “chắc tại mình hư nên mới bị đánh”. Không có lý do nào biện minh cho hành vi bạo lực.
- **Tìm kiếm sự trợ giúp**: Nói chuyện với thầy cô, người thân tin cậy hoặc kết nối với Tổng đài **111** để được can thiệp bảo vệ.`,
        lon: `Khoản 6 Điều 4 Luật Trẻ em 2016: “Bạo lực trẻ em là hành vi hành hạ, ngược đãi, đánh đập; xâm hại thân thể, sức khỏe; lăng mạ, xúc phạm danh dự, nhân phẩm; cô lập, xua đuổi và các hành vi cố ý khác gây tổn hại về thể chất, tinh thần của trẻ em.”

Đánh đòn, sỉ nhục với lý do “dạy con” vẫn có thể là bạo lực. Nếu biết trẻ đang bị bạo lực, hãy báo Tổng đài 111 hoặc công an, chính quyền nơi gần nhất.`
      },
      src: ["LTE", "TVPL_BL", "TN_BH"], next: ["bi-danh-o-nha", "bat-nat", "goi-111"]
    },
    {
      id: "bo-mac-boc-lot", topic: "kien-thuc", title: "Bỏ rơi, bỏ mặc và bóc lột trẻ em",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["bỏ rơi", "bỏ mặc", "bóc lột", "bóc lột sức lao động", "lao động trẻ em", "bỏ đói", "không cho ăn", "không cho đi học", "bắt bỏ học", "bắt đi làm", "bắt làm việc", "không ai chăm sóc", "bắt đi xin tiền"],
      q: ["Bỏ rơi, bỏ mặc trẻ em là gì?", "Bị bắt đi làm thay vì đi học có sao không?", "Bóc lột trẻ em là gì?"],
      a: {
        nho: `Bạn cần được ăn no, ngủ đủ, được đi học và được chăm sóc khi ốm.

Hãy kể với thầy cô hoặc người lớn bạn tin nếu bạn thường:
- Bị bỏ đói.
- Bị để ở nhà một mình nhiều ngày.
- Bị bắt làm việc nặng.
- Không được đi học.

Bạn cũng có thể gọi **111**.`,
        chung: `Bỏ rơi, bỏ mặc là khi cha mẹ hoặc người chăm sóc không lo cho trẻ những điều cần thiết: ăn uống, chỗ ở, chăm sóc sức khỏe, học hành, sự an toàn.

Bóc lột là bắt trẻ lao động trái quy định của pháp luật hoặc lợi dụng trẻ để kiếm lợi, ví dụ bắt đi xin tiền, làm việc nặng nhọc thay vì đi học.

Nếu bạn hay bạn bè đang gặp cảnh này, hãy báo với thầy cô hoặc gọi **111** để được hỗ trợ.`,
        lon: `Theo khoản 7 và khoản 9 Điều 4 Luật Trẻ em 2016:
- Bóc lột trẻ em gồm các hành vi như bắt trẻ lao động trái quy định của pháp luật về lao động, sử dụng trẻ vào hoạt động khiêu dâm, mại dâm và các hành vi khác sử dụng trẻ em để trục lợi.
- Bỏ rơi, bỏ mặc trẻ em là hành vi của cha, mẹ, người chăm sóc không thực hiện hoặc thực hiện không đầy đủ nghĩa vụ, trách nhiệm chăm sóc, nuôi dưỡng trẻ.

Khi phát hiện, hãy báo Tổng đài 111 hoặc chính quyền, công an cấp xã.`
      },
      src: ["LTE"], next: ["goi-111", "quyen-tre-em"]
    },
    {
      id: "nguoi-xam-hai", topic: "kien-thuc", title: "Ai có thể là người xâm hại?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: [
        "ai có thể xâm hại", "người xâm hại là ai", "kẻ xâm hại", "người quen xâm hại", "người thân xâm hại",
        "thủ phạm", "yêu râu xanh", "kẻ xấu", "người quen có thể", "người nhà sàm sỡ", "người quen sàm sỡ",
        "họ hàng sàm sỡ", "người thân sàm sỡ", "bị người nhà", "người quen đụng chạm", "người thân đụng chạm",
        "chú sàm sỡ", "bác sàm sỡ", "anh họ sàm sỡ", "dượng sàm sỡ", "người trong nhà sàm sỡ"
      ],
      q: ["Ai có thể là người xâm hại trẻ em?", "Người quen có thể xâm hại không?", "Bị người nhà, họ hàng sàm sỡ thì phải làm sao?", "Người quen đụng chạm vào người mình thì làm gì?"],
      a: {
        nho: `Người làm bạn sợ có thể là người lạ, nhưng cũng có thể là người quen hay họ hàng.

Nếu ai đó chạm vào bạn làm bạn khó chịu hay bảo bạn giữ bí mật xấu:
- Bạn hãy né tránh ngay, nói KHÔNG.
- Kể cho bố mẹ hoặc cô giáo biết. Kể ra là bạn đang làm việc rất đúng.`,
        chung: `Rất nhiều trường hợp xâm hại đến từ người quen, họ hàng hoặc người thân trong gia đình. Đây là tình huống khó xử nhất vì bạn sợ không ai tin mình, sợ bị mắng hoặc sợ làm gia đình xáo trộn.

Hãy nhớ những điều này để bảo vệ mình:
1. **Cơ thể bạn là trên hết**: Không ai – dù là người lớn, họ hàng hay người có ơn – có quyền chạm vào vùng riêng tư hay bắt bạn chịu đựng sự quấy rối.
2. **Cách né tránh an toàn**: Tuyệt đối không ở một mình trong phòng kín với người đó. Khi người đó đến gần, hãy luôn kiếm cớ đi ra ngoài: *“Con phải đi phụ mẹ”, “Cháu có bài học nhóm”*.
3. **Thái độ rõ ràng**: Né tránh dứt khoát, không cười trừ, không nhận quà hay tiền kèm lời dặn “bí mật”.
4. **Cách lên tiếng**: Hãy chọn người mà bạn thấy tin tưởng nhất trong nhà (mẹ, chị gái, dì) để tâm sự riêng, hoặc chia sẻ với giáo viên tâm lý ở trường để tìm cách can thiệp tế nhị mà an toàn cho bạn.`
      },
      src: ["TN_QUEN", "TN_MANG"], next: ["dau-hieu-canh-giac", "bi-mat", "ban-tay-tin-cay"]
    },

    /* ===== TỰ BẢO VỆ ===== */
    {
      id: "vung-rieng-tu", topic: "tu-bao-ve", title: "Vùng riêng tư trên cơ thể",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["vùng riêng tư", "vùng kín", "vùng nhạy cảm", "bộ phận riêng tư", "quy tắc đồ lót", "chỗ kín", "cơ thể của em", "cơ thể của mình", "chạm vào người"],
      q: ["Vùng riêng tư là gì?", "Quy tắc đồ lót là gì?", "Ai được chạm vào vùng kín của mình?"],
      a: {
        nho: `Vùng riêng tư là những chỗ được che bởi đồ bơi, đồ lót, và cả miệng của bạn.

Quy tắc cần nhớ:
- Không ai được nhìn hay chạm vào vùng riêng tư của bạn.
- Bạn cũng không chạm vào vùng riêng tư của người khác.
- Chỉ trừ khi bố mẹ giúp bạn tắm rửa, vệ sinh, hoặc bác sĩ khám bệnh khi có bố mẹ ở bên.

Cơ thể là của bạn. Bạn có quyền nói KHÔNG.`,
        chung: `Vùng riêng tư gồm miệng, ngực, vùng giữa hai chân (bộ phận sinh dục) và mông, tức những vùng thường được che bởi đồ bơi, đồ lót.

- Không ai được nhìn, chạm, chụp ảnh vùng riêng tư của bạn, hay bắt bạn chạm vào vùng riêng tư của họ.
- Ngoại lệ là khi khám chữa bệnh hoặc chăm sóc vệ sinh cần thiết, có cha mẹ hoặc người tin cậy ở bên và bạn được giải thích rõ.
- Không ai được xin hay ép bạn gửi ảnh vùng riêng tư qua mạng.

Bạn có quyền từ chối bất kỳ cái chạm nào làm bạn khó chịu, kể cả từ người quen.`,
        lon: `Dạy trẻ “quy tắc đồ lót”: vùng được che bởi đồ lót (cùng với miệng) là vùng riêng tư; không ai được nhìn, chạm vào hay chụp ảnh vùng này, và trẻ cũng không chạm vào vùng riêng tư của người khác. Ngoại lệ là khi vệ sinh cho trẻ nhỏ hoặc khám bệnh, có cha mẹ ở bên và được giải thích rõ.

Hãy gọi đúng tên các bộ phận cơ thể, dạy trẻ rằng cơ thể là của trẻ, trẻ có quyền nói “không”, kể cả với người thân, và không có “bí mật” nào về cơ thể phải giấu cha mẹ.`
      },
      src: ["CAND_KN", "TN_DAY"], next: ["dong-cham", "bi-mat", "khi-bi-xam-hai"]
    },
    {
      id: "dong-cham", topic: "tu-bao-ve", title: "Đụng chạm an toàn và không an toàn",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["đụng chạm", "chạm an toàn", "cái chạm", "ôm hôn", "hôn má", "bị ôm", "bị hôn", "đụng chạm không an toàn", "không thích bị ôm", "không thích bị hôn"],
      q: ["Thế nào là đụng chạm không an toàn?", "Mình không thích bị ôm hôn thì sao?", "Cái chạm nào là an toàn?"],
      a: {
        nho: `Cái chạm **an toàn** làm bạn thấy vui, ấm áp, như mẹ ôm, bạn bè bắt tay.

Cái chạm **không an toàn** làm bạn thấy sợ, đau, xấu hổ hay khó chịu. Chạm vào vùng riêng tư, hay bị dặn phải giữ bí mật, cũng là cái chạm không an toàn.

Khi gặp cái chạm không an toàn: nói to “KHÔNG!”, chạy đi, rồi kể ngay cho người lớn bạn tin.`,
        chung: `Hãy tin vào cảm giác của cơ thể bạn:
- Cái chạm **an toàn**: bạn thấy thoải mái, được tôn trọng, có thể từ chối mà không bị ép.
- Cái chạm **không an toàn**: làm bạn sợ hãi, bối rối, ngột ngạt; đụng chạm vào vùng riêng tư; đi kèm quà tặng hoặc lời dặn giữ bí mật.
- Cái chạm **gây bối rối**: lúc đầu có vẻ bình thường nhưng dần vượt ranh giới.

**Cách giải quyết**: Bạn hoàn toàn có quyền nói: *“Cháu/em không thích như vậy, xin dừng lại”*. Đừng sợ làm mất lòng người khác khi họ đang làm bạn khó chịu.`
      },
      src: ["CAND_KN", "CAND_DAY"], next: ["vung-rieng-tu", "sau-vong-tron", "khi-bi-xam-hai"]
    },
    {
      id: "bi-mat", topic: "tu-bao-ve", title: "Bí mật an toàn và bí mật không an toàn",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["bí mật", "giữ bí mật", "đừng nói với ai", "không được kể", "bí mật xấu", "bí mật tốt", "hứa không nói", "bắt giữ bí mật", "bí mật của hai"],
      q: ["Có phải giữ bí mật không?", "Bí mật xấu là gì?", "Người lớn bảo mình giữ bí mật thì sao?"],
      a: {
        nho: `Có hai loại bí mật:
- Bí mật **vui**: như món quà bất ngờ tặng mẹ. Bí mật này rồi sẽ được kể ra và làm mọi người vui.
- Bí mật **xấu**: làm bạn sợ, buồn, khó chịu, hoặc người lớn dặn “đừng nói với bố mẹ”.

Bí mật xấu thì **không phải giữ**. Hãy kể ngay cho người lớn bạn tin, kể cả khi bạn đã lỡ hứa.`,
        chung: `Người có ý đồ xấu thường dùng lời dặn “đây là bí mật của hai chúng mình” để khiến bạn sợ hãi không dám nói ra.

Bạn cần phân biệt rõ:
- Bí mật an toàn: mang lại niềm vui bất ngờ và sẽ sớm được chia sẻ cùng mọi người.
- Bí mật không an toàn: làm bạn lo âu, xấu hổ, tội lỗi, hoặc bị dọa nếu nói ra sẽ bị phạt.

**Giải pháp**: Bạn **tuyệt đối không có nghĩa vụ phải giữ** bí mật xấu, kể cả khi bạn đã trót hứa hay nhận quà. Lên tiếng kể cho người lớn tin cậy là hành động tự cứu lấy mình, không phải là “mách lẻo”.`
      },
      src: ["CAND_DAY", "TN_DAY"], next: ["dau-hieu-canh-giac", "ke-cho-ai", "ban-tay-tin-cay"]
    },
    {
      id: "sau-vong-tron", topic: "tu-bao-ve", title: "Quy tắc 6 vòng tròn giao tiếp", tool: "vong-tron",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["6 vòng tròn", "sáu vòng tròn", "vòng tròn giao tiếp", "khoảng cách giao tiếp", "quy tắc vòng tròn", "giữ khoảng cách"],
      q: ["Quy tắc 6 vòng tròn là gì?", "Nên giữ khoảng cách với ai?"],
      a: {
        nho: `Quy tắc 6 vòng tròn giúp bạn biết nên gần gũi với ai đến mức nào:
1. **Tím** là chính bạn.
2. **Xanh dương** là người thân nhất (ông bà, bố mẹ, anh chị em ruột): có thể ôm chặt.
3. **Xanh lá** là họ hàng, bạn thân: ôm nhẹ.
4. **Vàng** là bạn bè, thầy cô, người quen: bắt tay.
5. **Cam** là người mới quen: vẫy tay chào.
6. **Đỏ** là người lạ: giữ khoảng cách, không đi theo.

Nhớ nhé: dù ở vòng nào, cũng không ai được chạm vào vùng riêng tư của bạn.`,
        chung: `Quy tắc 6 vòng tròn là cách giữ khoảng cách phù hợp với từng nhóm người, tính từ trong ra ngoài:
1. **Tím**: bản thân bạn.
2. **Xanh dương**: người thân nhất (ông bà, cha mẹ, anh chị em ruột), có thể ôm chặt.
3. **Xanh lá**: họ hàng, bạn thân, ôm nhẹ.
4. **Vàng**: bạn bè, thầy cô, người quen, bắt tay.
5. **Cam**: người mới quen, vẫy tay chào từ xa.
6. **Đỏ**: người lạ, giữ khoảng cách, không đi theo, không nhận quà.

Vòng tròn chỉ gợi ý mức độ thân mật. Người ở vòng gần vẫn **không** được chạm vào vùng riêng tư của bạn hay bắt bạn giữ bí mật xấu.`,
        lon: `Quy tắc 6 vòng tròn (tím – bản thân; xanh dương – ôm chặt; xanh lá – ôm nhẹ; vàng – bắt tay; cam – vẫy tay; đỏ – tránh xa người lạ) giúp trẻ hình dung khoảng cách phù hợp.

Gợi ý: cùng trẻ vẽ các vòng tròn và điền tên những người cụ thể trong cuộc sống của trẻ. Luôn nhắc rằng ngay cả người ở vòng gần cũng không được chạm vào vùng riêng tư hay bắt trẻ giữ bí mật, vì nhiều vụ việc xảy ra từ người thân quen.`
      },
      src: ["CAND_DAY", "TN_QUEN"], next: ["dong-cham", "nguoi-la", "ban-tay-tin-cay"]
    },
    {
      id: "ban-tay-tin-cay", topic: "tu-bao-ve", title: "Bàn tay tin cậy", tool: "ban-tay",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["bàn tay tin cậy", "người tin cậy", "người lớn tin cậy", "tin ai", "người đáng tin", "ai đáng tin", "5 người tin cậy", "năm người tin cậy"],
      q: ["Bàn tay tin cậy là gì?", "Người lớn đáng tin là ai?", "Mình nên tin ai?"],
      a: {
        nho: `Hãy xòe bàn tay và nghĩ ra **5 người lớn** mà bạn tin, mỗi ngón tay là một người. Ví dụ: bố, mẹ, ông bà, cô giáo chủ nhiệm, cô hàng xóm thân thiết.

Khi có chuyện làm bạn sợ hay buồn, hãy kể với một người trong bàn tay. Nếu người đầu tiên chưa giúp được, hãy kể tiếp với người khác.

Bạn có thể ghi tên 5 người đó ở mục **Hỗ trợ → Bàn tay tin cậy**.`,
        chung: `Người lớn tin cậy là người biết lắng nghe, tôn trọng bạn và có khả năng giúp bạn an toàn: cha mẹ, ông bà, thầy cô chủ nhiệm, giáo viên tư vấn tâm lý, cán bộ Đoàn, hàng xóm thân thiết…

Hãy chọn sẵn 5 người như vậy (mỗi ngón tay một người). Nếu người đầu tiên không tin hoặc không giúp, đừng bỏ cuộc, hãy kể với người tiếp theo, hoặc gọi **111**.

Bạn có thể lưu danh sách ở mục **Hỗ trợ → Bàn tay tin cậy**. Danh sách chỉ lưu trên máy của bạn.`
      },
      src: ["CAND_DAY"], next: ["ke-cho-ai", "goi-111"]
    },
    {
      id: "dau-hieu-canh-giac", topic: "tu-bao-ve", title: "Dấu hiệu cần cảnh giác",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["dấu hiệu cảnh giác", "cảnh giác", "dụ dỗ", "lôi kéo", "tặng quà", "cho tiền", "quan tâm đặc biệt", "nhận biết kẻ xấu", "rủ đi chơi riêng", "thao túng", "gặp riêng"],
      q: ["Làm sao nhận biết người có ý xấu?", "Dấu hiệu dụ dỗ là gì?", "Có người hay cho mình quà có sao không?"],
      a: {
        nho: `Hãy cẩn thận và tránh xa khi có người:
- Cho bạn quà, bánh hay tiền rồi dặn “giữ bí mật, đừng kể với bố mẹ”.
- Rủ bạn vào chỗ vắng, phòng kín một mình.
- Chạm vào bạn làm bạn khó chịu rồi bảo “đây là trò chơi”.

Khi thấy những điều này, bạn hãy chạy đi và kể ngay với người lớn bạn tin nhé.`,
        chung: `Kẻ xâm hại thường không xuất hiện như một kẻ xấu rõ ràng, mà thường tiếp cận từng bước để lấy lòng tin (quá trình grooming):
- Tặng quà, cho tiền, nạp thẻ game bất thường; tỏ ra quan tâm chiều chuộng bạn hơn hẳn người khác.
- Tìm cách tạo không gian riêng: rủ đi chơi riêng, vào phòng kín, tách bạn khỏi bạn bè và gia đình.
- Thử thách ranh giới: bắt đầu bằng những cái chạm “vô tình”, đùa cợt nhạy cảm, rồi dần lấn tới.
- Thao túng tâm lý: nói rằng “chỉ có hai chúng ta hiểu nhau”, “kể ra bố mẹ sẽ mắng đấy”.

**Cách xử lý**: Hãy tin vào linh cảm của bạn. Ngay khi cảm thấy có điều bất thường, hãy giữ khoảng cách, từ chối dứt khoát và chia sẻ ngay với người lớn tin cậy.`
      },
      src: ["TN_MANG", "TN_QUEN"], next: ["bi-mat", "nguoi-la-tren-mang", "ke-cho-ai"]
    },
    {
      id: "nguoi-la", topic: "tu-bao-ve", title: "An toàn với người lạ",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["người lạ", "người lạ rủ", "đi theo người lạ", "người lạ cho kẹo", "người lạ cho quà", "người lạ đón", "đón hộ", "bắt cóc", "người lạ nhờ giúp", "bị lạc", "lạc đường", "bị đi theo", "mật khẩu gia đình"],
      q: ["Người lạ rủ đi thì làm sao?", "Người lạ nói bố mẹ nhờ đón thì sao?", "Làm sao tránh bị bắt cóc?"],
      a: {
        nho: `Với người lạ, hãy nhớ:
- Không nhận quà, bánh kẹo, nước uống từ người lạ.
- Không đi theo người lạ, kể cả khi họ nói “bố mẹ nhờ đến đón”. Hãy cùng bố mẹ đặt một **mật khẩu gia đình**: người đến đón phải nói đúng mật khẩu.
- Người lớn cần giúp thường nhờ người lớn khác, không nhờ trẻ em dẫn đường.
- Nếu bị kéo đi: la thật to “Cứu với! Tôi không quen người này!” và chạy đến chỗ đông người.`,
        chung: `- Không đi theo, không lên xe người lạ, kể cả khi họ nói được người nhà nhờ đón. Thống nhất với gia đình một mật khẩu riêng.
- Không nhận đồ ăn, nước uống, quà từ người lạ.
- Đi theo nhóm, tránh nơi vắng; báo cho người nhà biết bạn đi đâu, với ai, khi nào về.
- Nếu bị đi theo: vào nơi đông người (cửa hàng, trường học, trụ sở công an) và nhờ giúp.
- Nếu bị kéo đi: la to “Cứu với! Tôi không quen người này!” để người xung quanh hiểu đây là nguy hiểm, rồi gọi **113**.`
      },
      src: ["CAND_KN"], next: ["sau-vong-tron", "khi-nao-goi-113-115", "mua-ban-nguoi"]
    },
    {
      id: "tinh-yeu-an-toan", topic: "tu-bao-ve", title: "Khi người yêu ép buộc, kiểm soát",
      ages: ["thcs", "thpt", "lon"],
      k: ["người yêu ép", "bạn trai ép", "bạn gái ép", "người yêu bắt", "người yêu đánh", "người yêu kiểm soát", "ép quan hệ", "yêu đương", "hẹn hò", "người yêu đòi", "người yêu cũ dọa", "đồng thuận", "sự đồng ý", "chia tay bị dọa"],
      q: ["Người yêu ép mình làm điều mình không muốn thì sao?", "Thế nào là đồng ý thật sự?", "Người yêu kiểm soát điện thoại có bình thường không?"],
      a: {
        thcs: `Tình yêu tuổi học trò đẹp nhất khi hai bạn biết tôn trọng và giúp nhau cùng tiến bộ. Một người thật lòng thích bạn sẽ không bao giờ ép bạn làm điều bạn không muốn.

Nếu bạn gặp phải tình huống này:
- **Khi bị đòi hỏi chuyện thân mật**: Hãy nhìn thẳng và nói: *“Mình chưa sẵn sàng, nếu bạn thật sự quý mình thì hãy tôn trọng mình.”*
- **Nếu bạn ấy giận dỗi hay dọa chia tay**: Đó là dấu hiệu ép buộc ích kỷ. Một mối quan hệ tốt không bao giờ bắt đầu bằng sự sợ hãi hay nhượng bộ mù quáng.
- **Tuyệt đối không gửi ảnh riêng tư**: Dù có tin tưởng đến đâu, ảnh một khi gửi đi sẽ không thể thu hồi.`,
        thpt: `Tình cảm chân thành luôn dựa trên sự tự nguyện, tin tưởng và tôn trọng ranh giới của nhau. Sự đồng ý phải xuất phát từ sự thoải mái thật sự, không phải vì bị ép, bị dọa hay vì sợ mất người yêu.

Cách xử lý các tình huống khó xử trong tình cảm:
1. **Khi đối phương ép quan hệ**: Hãy giữ vững lập trường: *“Không là không”*. Người yêu bạn thật lòng sẽ kiên nhẫn chờ đợi bạn sẵn sàng và tôn trọng sức khỏe, tương lai của bạn.
2. **Khi bị thao túng tâm lý (“Nếu yêu anh thì phải cho”, “Không cho là không yêu”)**: Đây là hành vi thao túng độc hại. Bạn không có nghĩa vụ phải chứng minh tình yêu bằng cơ thể hay ảnh riêng tư.
3. **Khi bị kiểm soát điện thoại, cấm đoán bạn bè**: Hãy thẳng thắn đặt lại ranh giới. Nếu đối phương đe dọa hay bạo lực khi bạn từ chối, hãy dừng mối quan hệ và tìm sự hỗ trợ ngay từ người lớn.`,
        lon: `Bạo lực trong quan hệ yêu đương ở tuổi vị thành niên thường bắt đầu bằng kiểm soát (theo dõi điện thoại, cô lập khỏi bạn bè), rồi đến đe dọa, ép buộc, đòi ảnh riêng tư và dọa phát tán khi chia tay.

Cha mẹ, thầy cô nên trò chuyện với trẻ về sự tôn trọng và sự đồng ý; lắng nghe, không chế giễu chuyện tình cảm của trẻ, để trẻ dám kể khi gặp nguy hiểm.`
      },
      src: ["TN_MANG"], next: ["bi-de-doa-anh", "xin-anh", "ke-cho-ai"]
    },
    {
      id: "mua-ban-nguoi", topic: "tu-bao-ve", title: "Cảnh giác mua bán người",
      ages: ["thcs", "thpt", "lon"],
      k: ["mua bán người", "buôn người", "bị bán", "việc nhẹ lương cao", "đi làm xa", "sang nước ngoài làm việc", "lừa đi làm", "bị lừa bán", "môi giới việc làm", "lấy chồng nước ngoài", "bắt cóc trực tuyến", "tự xưng công an"],
      q: ["Làm sao để không bị lừa bán?", "Lời mời việc nhẹ lương cao có đáng tin không?", "Bắt cóc trực tuyến là gì?"],
      a: {
        chung: `Kẻ mua bán người thường dụ dỗ bằng lời hứa việc nhẹ lương cao, đi chơi, đi làm xa, du học; hoặc làm quen, yêu đương qua mạng rồi rủ đi gặp.

- Không đi theo lời mời làm việc, đi chơi xa của người mới quen, kể cả quen qua mạng.
- Luôn báo gia đình nơi bạn đến, đi cùng ai; giữ giấy tờ và điện thoại bên mình.
- Cảnh giác với “bắt cóc trực tuyến”: kẻ gian gọi điện tự xưng công an, viện kiểm sát, dọa bạn liên quan vụ án, bắt bạn tự đến ở một mình và cắt liên lạc với gia đình để tống tiền. Cơ quan chức năng không làm việc như vậy qua điện thoại.
- Nghi ngờ mua bán người: gọi **111** (tổng đài quốc gia về phòng, chống mua bán người) hoặc **113**.`
      },
      src: ["VNE_111", "TN_MANG"], next: ["nguoi-la-tren-mang", "goi-111"]
    },

    /* ===== KHI CHUYỆN XẢY RA ===== */
    {
      id: "khi-bi-xam-hai", topic: "ung-pho", title: "Khi có người định xâm hại, mình làm gì?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["làm gì khi bị xâm hại", "bị xâm hại thì làm gì", "nên làm gì|0.6", "phải làm sao|0.6", "cần làm gì|0.6", "làm gì bây giờ|0.6", "ứng phó", "tự vệ", "có người định", "bị sàm sỡ thì làm gì", "bị quấy rối thì làm gì", "làm sao để thoát", "nói không chạy đi kể ngay"],
      q: ["Khi bị xâm hại phải làm gì?", "Có người định làm hại mình thì làm sao?", "Bị sàm sỡ thì nên làm gì?"],
      a: {
        nho: `Nếu có ai định làm đau hay đụng chạm vào bạn, bạn hãy làm ngay 3 bước này nhé:
1. **Nói KHÔNG thật to**: hét to để người xung quanh nghe thấy.
2. **Chạy thật nhanh**: chạy đến chỗ đông người hoặc chỗ có thầy cô, bác bảo vệ.
3. **Kể ngay lập tức**: kể với người lớn bạn tin trong nhà hoặc thầy cô.

Dù người kia có dọa dẫm gì thì bạn cũng đã làm rất đúng khi bảo vệ bản thân.`,
        chung: `Khi bạn cảm thấy có người đang vượt quá giới hạn hoặc định làm hại bạn:

1. **Phản ứng dứt khoát tại chỗ**:
   - Lùi lại, giữ khoảng cách và nói to: *“Dừng lại! Anh/chị đang làm cái gì đấy?”*. Nói to sẽ làm kẻ xấu giật mình và thu hút sự chú ý của người xung quanh.
   - Không cần phải tỏ ra ngại ngùng hay lịch sự với người đang xâm phạm bạn.
2. **Rời khỏi khu vực nguy hiểm**: Di chuyển ngay tới nơi đông người, trạm bảo vệ, quầy thu ngân hoặc đứng cạnh người lớn khác.
3. **Nếu lúc đó bạn quá sợ và bị 'đóng băng'**: Rất nhiều bạn khi hoảng loạn không thể hét hay chạy được. Điều đó hoàn toàn tự nhiên và không phải lỗi của bạn. Bạn vẫn có thể lên tiếng và tìm người bảo vệ sau đó.
4. **Tìm điểm tựa**: Kể lại với người lớn tin cậy nhất. Nếu cần hướng dẫn cụ thể cho tình huống bạn vừa gặp, bạn cứ chia sẻ thêm với ALLY nhé.`
      },
      src: ["CAND_KN", "CAND_BV"], next: ["ke-cho-ai", "goi-111", "sau-khi-bi-xam-hai"]
    },
    {
      id: "ke-cho-ai", topic: "ung-pho", title: "Mình sợ kể với người lớn",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["sợ kể", "không dám kể", "sợ bố mẹ không tin", "sợ bị mắng", "kể với ai", "có nên kể", "sợ bị trả thù", "bố mẹ không tin", "sợ bố mẹ buồn", "ngại kể", "không dám nói", "không ai tin", "nói với bố mẹ thế nào"],
      q: ["Mình sợ kể với bố mẹ thì sao?", "Kể với ai bây giờ?", "Sợ không ai tin mình thì làm sao?"],
      a: {
        nho: `Mình biết bạn đang sợ bị mắng hoặc sợ bố mẹ buồn. Nhưng bạn đừng lo nhé, kể ra là việc làm rất dũng cảm.

Bạn có thể bắt đầu bằng câu này:
- *“Bố mẹ ơi, con có chuyện này khó nói và con hơi sợ, bố mẹ nghe con kể nhé.”*

Nếu người đầu tiên chưa hiểu, bạn hãy kể với cô giáo hoặc người lớn khác mà bạn tin nhé.`,
        chung: `Cảm giác sợ hãi, xấu hổ, sợ bố mẹ mắng hay sợ người khác không tin là tâm lý rất bình thường của nạn nhân. Kẻ xấu thường lợi dụng chính nỗi sợ này để bạn im lặng.

Các cách mở lời giúp bạn bớt sợ và được lắng nghe:
1. **Kịch bản nói trực tiếp**: Hãy chọn lúc chỉ có hai người và nói:
   *“Bố mẹ/Cô ơi, con đang gặp một chuyện rất rắc rối và con đang rất sợ hãi. Con muốn kể cho bố mẹ nghe, mong bố mẹ bình tĩnh lắng nghe và giúp con với nhé.”*
2. **Nếu quá run không nói thành lời**: Hãy viết ra giấy, nhắn tin hoặc đưa cho người lớn xem màn hình tin nhắn làm bạn bất an.
3. **Nhờ một người bạn thân đi cùng**: Có bạn thân đứng cạnh sẽ giúp bạn có thêm can đảm để nói ra.
4. **Nếu người đầu tiên phản ứng chưa đúng ý**: Đừng nản lòng hay tự trách. Hãy tìm một người lớn khác trong trường (cô giáo chủ nhiệm, chuyên viên tâm lý) hoặc gọi **111** để được chuyên gia lắng nghe và hướng dẫn cách giãi bày với gia đình.`
      },
      src: ["CAND_DAY"], next: ["ban-tay-tin-cay", "goi-111", "khong-phai-loi"]
    },
    {
      id: "ban-be-ke", topic: "ung-pho", title: "Khi bạn bè kể mình bị xâm hại",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["bạn em bị", "bạn mình bị", "bạn tôi bị", "bạn thân bị", "bạn bè bị xâm hại", "giúp bạn", "bạn bị đánh", "bạn bị quấy rối", "bạn em kể", "một người bạn", "bạn cùng lớp bị", "bạn kể với mình"],
      q: ["Bạn mình bị xâm hại thì mình giúp thế nào?", "Bạn kể với mình bị đánh, mình làm gì?", "Bạn bắt mình giữ bí mật chuyện bị xâm hại thì sao?"],
      a: {
        nho: `Nếu bạn của bạn kể rằng có người làm bạn ấy sợ hay làm đau bạn ấy:
- Hãy nghe bạn ấy nói và tin bạn ấy.
- Nói với bạn ấy: “Không phải lỗi của cậu.”
- Cùng bạn ấy kể với thầy cô hoặc người lớn tin cậy.

Đây là bí mật xấu, nên không phải giữ đâu nhé.`,
        chung: `Bạn đang làm một việc rất tốt khi muốn giúp bạn mình.
- **Lắng nghe** và **tin** bạn ấy. Đừng hỏi dồn hay trách móc.
- Nói: “Cảm ơn cậu đã tin tớ. Đây không phải lỗi của cậu.”
- Đừng hứa giữ bí mật nếu bạn ấy đang bị hại. Hãy giải thích rằng cần người lớn giúp mới an toàn.
- Cùng bạn ấy tìm người lớn tin cậy, hoặc cùng gọi **111**.
- Không kể chuyện cho người khác, không đăng lên mạng, để bảo vệ bạn ấy.
- Nếu bạn ấy nói muốn tự làm hại bản thân, hãy báo ngay cho người lớn.`
      },
      src: ["CAND_BV"], next: ["ke-cho-ai", "goi-111", "bao-mat-thong-tin"]
    },
    {
      id: "sau-khi-bi-xam-hai", topic: "ung-pho", title: "Nếu vừa bị xâm hại tình dục", titleNho: "Nếu ai đó vừa làm hại cơ thể bạn",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["vừa bị xâm hại", "vừa bị hiếp", "sau khi bị xâm hại", "bị xâm hại xong", "có nên tắm", "đi khám", "giữ chứng cứ", "giữ bằng chứng", "72 giờ", "thuốc tránh thai khẩn cấp", "bị cưỡng ép quan hệ", "khám sau khi bị xâm hại"],
      q: ["Vừa bị xâm hại thì phải làm gì?", "Có nên tắm sau khi bị xâm hại không?", "Cần đi khám trong bao lâu?"],
      a: {
        nho: `Nếu có ai vừa làm đau hay đụng vào vùng riêng tư của bạn:
- Hãy đến ngay cạnh người lớn bạn tin như bố mẹ, cô giáo.
- Kể cho người lớn biết bạn đang bị đau ở đâu để người lớn đưa bạn đi bác sĩ.
- Bạn không làm gì sai cả. Bạn luôn là một đứa trẻ ngoan và được mọi người yêu thương.`,
        thcs: `Mình vô cùng đau lòng và muốn ở bên cạnh bạn lúc này. Hãy thở thật chậm, bạn đang an toàn.

Những việc quan trọng cần làm ngay để bảo vệ bạn:
1. **Chăm sóc y tế trước tiên**: Hãy kể ngay với mẹ hoặc người lớn bạn tin nhất để đến bệnh viện khám trong vòng **72 giờ**. Bác sĩ sẽ giúp bạn điều trị vết thương và uống thuốc phòng ngừa các bệnh lây nhiễm.
2. **Cố gắng giữ chứng cứ**: Dù bạn rất muốn tắm gội ngay, nhưng nếu có thể, hãy cố gắng chưa tắm và chưa giặt bộ quần áo lúc đó, để trong túi giấy. Đây là bằng chứng quan trọng nhất để bắt kẻ xấu chịu tội.
3. **Đừng ở một mình**: Hãy ở cạnh người bạn tin tưởng để có cảm giác an tâm. Bạn không hề có lỗi trong chuyện này.`,
        thpt: `Mình chia sẻ sâu sắc nỗi đau và sự hoang mang bạn đang phải chịu đựng. Ngay lúc này, điều quan trọng nhất là bảo vệ sức khỏe và tương lai của bạn.

Các việc sống còn cần làm trong vòng 72 giờ:
1. **Đến cơ sở y tế gần nhất (Ưu tiên số 1)**: Bạn cần được bác sĩ khám điều trị tổn thương, kê đơn thuốc điều trị dự phòng phơi nhiễm HIV (PEP) và thuốc tránh thai khẩn cấp càng sớm càng tốt (hiệu quả cao nhất trong 72 giờ đầu).
2. **Lưu giữ dấu vết pháp lý**: Hạn chế tắm rửa, không giặt hoặc vứt bỏ quần áo mặc lúc xảy ra sự việc (hãy cất vào túi giấy khô). Lưu lại mọi tin nhắn, cuộc gọi của kẻ gây hại.
3. **Tìm điểm tựa tâm lý**: Bạn có thể bị sốc, run rẩy, tự trách hoặc cảm thấy tê liệt cảm xúc. Hãy tìm đến một người thân tin cậy hoặc gọi Tổng đài **111** (hoàn toàn miễn phí, ẩn danh) để chuyên viên hỗ trợ bạn từng bước an toàn.`,
        lon: `Ưu tiên theo thứ tự:
1. **An toàn**: đưa trẻ ra khỏi nơi có người gây hại; gọi 113 nếu khẩn cấp.
2. **Y tế**: đưa trẻ đi khám càng sớm càng tốt, lý tưởng trong 72 giờ, để được điều trị tổn thương, dự phòng mang thai và các bệnh lây truyền (theo chỉ định của bác sĩ).
3. **Chứng cứ**: nếu có thể, chưa tắm rửa, chưa giặt quần áo; cho quần áo vào túi giấy; không dọn dẹp hiện trường; lưu tin nhắn, hình ảnh.
4. **Trình báo**: báo công an nơi gần nhất và Tổng đài 111 để được hỗ trợ, can thiệp.
5. **Tâm lý**: tin trẻ, không trách mắng, không bắt trẻ kể lại nhiều lần; tìm hỗ trợ tâm lý chuyên môn.
6. **Bảo mật**: không đăng tải, chia sẻ thông tin, hình ảnh của trẻ lên mạng xã hội.`
      },
      src: ["CAND_KN", "BYT_NB"], next: ["cam-xuc", "goi-111", "khi-tre-ke"]
    },
    {
      id: "bi-danh-o-nha", topic: "ung-pho", title: "Bị đánh, mắng chửi ở nhà",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["bố đánh", "mẹ đánh", "bị bố đánh", "bị mẹ đánh", "ba đánh", "má đánh", "bố mẹ đánh", "bị đánh ở nhà", "bố mẹ chửi", "bố say rượu", "bố nhậu", "bạo lực gia đình", "bố đánh mẹ", "dượng đánh", "bị chửi mắng", "bị nhốt ở nhà", "người nhà đánh"],
      q: ["Bị bố mẹ đánh thì phải làm sao?", "Bố say rượu hay đánh mình thì sao?", "Bạo lực gia đình phải làm gì?"],
      a: {
        nho: `Không ai được phép đánh đập hay làm bạn bị thương, kể cả người lớn trong nhà. Đòn roi không phải là cách dạy ngoan.

Khi bố mẹ hay người lớn đang nổi giận:
- Bạn hãy lánh sang nhà ông bà, nhà bác hàng xóm hoặc chỗ an toàn nhé.
- Kể với thầy cô giáo chủ nhiệm ở trường.
- Bạn cũng có thể gọi **111** để các cô chú giúp bạn an toàn.`,
        chung: `Mình rất đồng cảm và chia sẻ với sự bất an của bạn. Đòn roi, sỉ nhục hay trút giận lên con cái không phải là dạy dỗ, mà là bạo lực gia đình. Bạn hoàn toàn không đáng phải chịu đựng những tổn thương đó.

Cách xử lý cụ thể để tự bảo vệ mình:
1. **Khi xung đột đang dâng cao**: Tuyệt đối không cãi tay đôi hay phản kháng kích động kẻ say xỉn/giận dữ. Hãy tìm cớ thoát ra ngoài (nhà người thân, hàng xóm tin cậy, phòng có chốt trong).
2. **Lập sẵn kế hoạch an toàn**: Luôn để điện thoại có đủ pin, ghi nhớ địa chỉ an toàn có thể nương tựa khi đêm hôm, và nhớ số **111** (bảo vệ trẻ em) hoặc **113** (khi bị đe dọa tính mạng).
3. **Tìm sự can thiệp từ bên ngoài**: Hãy tâm sự với giáo viên chủ nhiệm, cán bộ tư vấn tâm lý ở trường hoặc tổ trưởng dân phố. Nhà trường và đoàn thể có trách nhiệm can thiệp để bảo vệ bạn.`
      },
      src: ["LTE", "TN_BH"], next: ["goi-111", "cam-xuc", "khi-nao-goi-113-115"]
    },
    {
      id: "bat-nat", topic: "ung-pho", title: "Bị bắt nạt ở trường",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["bắt nạt", "bị bắt nạt", "bạo lực học đường", "bị bạn đánh", "bị đánh hội đồng", "bị cô lập", "bị tẩy chay", "bị trêu chọc", "bị chế giễu", "bị xin đểu", "bị đe dọa ở trường", "bị bạn bè chửi"],
      q: ["Bị bắt nạt ở trường thì làm sao?", "Bị cả lớp tẩy chay phải làm gì?", "Bị bạn đánh có nên đánh lại không?"],
      a: {
        nho: `Nếu bạn bị bạn bè đánh, giấu đồ, trêu chọc hay không cho chơi cùng, đó là bị bắt nạt. Bạn không làm gì sai để bị đối xử như thế.

Bạn hãy làm thế này nhé:
- Nhìn thẳng vào bạn đó và nói to: *“Dừng lại, mình không thích!”* rồi đi ra chỗ khác.
- Luôn chơi ở chỗ đông bạn bè và gần phòng thầy cô.
- Kể ngay với cô giáo chủ nhiệm và bố mẹ để cô giải quyết cho bạn.`,
        chung: `Cảm giác mỗi ngày đến trường phải đối mặt với sự cô lập, trêu chọc ác ý hay đe dọa đánh đập thật sự rất mệt mỏi và ức chế. Kẻ bắt nạt thường nhắm vào người hiền lành để thị uy.

Cách xử lý tình huống thực tế:
1. **Phản ứng lúc bị trêu/đe dọa**: Giữ nét mặt bình tĩnh, mắt nhìn thẳng, nói câu ngắn gọn dứt khoát: *“Chuyện này chẳng có gì vui cả, dừng lại đi”* rồi bước đi. Kẻ bắt nạt thường chán nản nếu không thấy bạn hoảng sợ hay phát khóc.
2. **Không đi một mình ở góc khuất**: Tránh đi một mình ở nhà vệ sinh vắng, gầm cầu thang hay cổng trường lúc vắng người. Luôn đi chung với nhóm bạn hoặc gần phòng giáo viên, bảo vệ.
3. **Thu thập chứng cứ**: Ghi lại ngày giờ, tên những người tham gia, chụp lại tin nhắn đe dọa (nếu có).
4. **Báo cáo dứt điểm**: Nói chuyện với giáo viên chủ nhiệm, phụ huynh hoặc phòng tư vấn tâm lý học đường. Đây là bảo vệ quyền lợi chính đáng của bạn, không phải là “mách lẻo”.`
      },
      src: ["TN_BH"], next: ["bat-nat-tren-mang", "cam-xuc", "ke-cho-ai"]
    },
    {
      id: "goi-111", topic: "ung-pho", title: "Tổng đài 111 là gì?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["111", "tổng đài 111", "gọi 111", "số 111", "tổng đài bảo vệ trẻ em", "đường dây nóng", "hotline", "có mất tiền không", "gọi có mất phí", "gọi có tốn tiền", "gọi 111 nói gì", "khi gọi 111", "tổng đài viên"],
      q: ["Tổng đài 111 là gì?", "Gọi 111 có mất tiền không?", "Gọi 111 thì nói gì?"],
      a: {
        nho: `**111** là số điện thoại để bảo vệ trẻ em.

- Gọi **không mất tiền**, gọi được cả ngày lẫn đêm.
- Các cô chú ở đó sẽ lắng nghe và tìm cách giúp bạn.
- Bạn chỉ cần nói: “Cháu cần giúp đỡ” rồi kể điều đang xảy ra.`,
        chung: `**111** là Tổng đài điện thoại quốc gia bảo vệ trẻ em, đồng thời là tổng đài quốc gia về phòng, chống mua bán người. Tổng đài hoạt động **24/7** và **miễn phí**.

Khi gọi, bạn có thể:
- Nói bạn bao nhiêu tuổi, chuyện gì đang xảy ra, bạn có đang nguy hiểm không.
- Cho biết bạn đang ở tỉnh, thành nào nếu bạn muốn được hỗ trợ trực tiếp.
- Hỏi tổng đài viên thông tin của bạn sẽ được xử lý thế nào.

Trường hợp khẩn cấp, tổng đài phối hợp ngay với công an và người làm công tác bảo vệ trẻ em ở địa phương. Ngoài gọi điện, tổng đài còn nhận thông báo qua Zalo và ứng dụng di động.

Mục **Chuẩn bị nội dung gọi 111** trong ứng dụng này giúp bạn sắp xếp điều cần nói.`,
        lon: `Tổng đài 111 là Tổng đài điện thoại quốc gia bảo vệ trẻ em, từ tháng 9/2025 đồng thời là Tổng đài quốc gia về phòng, chống mua bán người, hoạt động 24/7, miễn phí, do Bộ Y tế phụ trách.

- Theo Cục Bà mẹ và Trẻ em (Bộ Y tế), tổng đài tiếp nhận khoảng 300.000 cuộc gọi mỗi năm; trường hợp cần thiết, nhân viên công tác xã hội hoặc lực lượng chức năng có thể tiếp cận trẻ trong khoảng 30 phút đến 1 giờ (Tuổi Trẻ, 6/2026).
- Quy trình gồm: tiếp nhận, đánh giá ban đầu, xác định nhu cầu, lập và thực hiện kế hoạch hỗ trợ, rà soát sau can thiệp. Khi trẻ có thể bị đe dọa tính mạng, sức khỏe, tổng đài chuyển ngay thông tin cho công an.
- Ngoài điện thoại, tổng đài nhận thông báo qua Zalo và ứng dụng di động.`
      },
      src: ["VNE_111", "TT_111", "PLO_111", "BYT_111", "T111"], next: ["khi-nao-goi-113-115", "ke-cho-ai"]
    },
    {
      id: "khi-nao-goi-113-115", topic: "ung-pho", title: "Khi nào gọi 113, 115?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["113", "115", "gọi công an", "gọi cảnh sát", "gọi cấp cứu", "số khẩn cấp", "số điện thoại khẩn cấp", "gọi ai khi nguy hiểm", "cấp cứu", "công an", "cảnh sát"],
      q: ["Khi nào gọi 113?", "Số cấp cứu là số mấy?", "Gặp nguy hiểm thì gọi số nào?"],
      a: {
        nho: `- **113**: gọi Công an khi có người đang làm hại bạn hoặc bạn đang gặp nguy hiểm.
- **115**: gọi Cấp cứu khi có người bị thương, chảy máu nhiều, ngất xỉu.
- **111**: gọi khi bạn cần được giúp đỡ, bảo vệ, hoặc muốn kể chuyện.

Cả ba số đều gọi **miễn phí**.`,
        chung: `- **113 – Công an**: khi bạn hoặc người khác đang bị tấn công, đe dọa, bắt giữ, theo dõi, hoặc có nguy hiểm ngay lúc này.
- **115 – Cấp cứu y tế**: khi có người bị thương nặng, chảy máu nhiều, khó thở, ngất, hoặc đã tự làm hại bản thân.
- **111 – Bảo vệ trẻ em**: khi cần tư vấn, hỗ trợ, báo tin trẻ em bị xâm hại, bạo lực, bỏ rơi, hay nghi ngờ mua bán người.

Các số này gọi miễn phí. Khi gọi, hãy nói rõ: chuyện gì đang xảy ra, ở đâu (địa chỉ, mốc dễ nhận ra), có ai bị thương không.`
      },
      src: ["VNE_111"], next: ["goi-111", "khi-bi-xam-hai"]
    },

    /* ===== AN TOÀN TRÊN MẠNG ===== */
    {
      id: "nguoi-la-tren-mang", topic: "tren-mang", title: "Người lạ làm quen trên mạng",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["người lạ trên mạng", "làm quen trên mạng", "bạn trên mạng", "quen qua mạng", "kết bạn facebook", "nhắn tin làm quen", "game online", "chơi game", "rủ gặp mặt", "hẹn gặp ngoài đời", "người yêu qua mạng", "kết bạn tiktok", "nhắn tin riêng", "nạp thẻ game"],
      q: ["Có người lạ trên mạng làm quen thì sao?", "Bạn trên mạng rủ gặp mặt có nên đi không?", "Người lạ nhắn tin cho mình trong game"],
      a: {
        nho: `Người trên mạng có thể không phải là người như họ nói.
- Không cho người lạ biết tên thật, trường học, địa chỉ, số điện thoại.
- Không gửi ảnh của mình cho người lạ.
- Không đi gặp người quen trên mạng.
- Ai nhắn tin làm bạn sợ hay khó chịu, hãy cho bố mẹ, thầy cô xem ngay.`,
        chung: `Trên mạng, ai cũng có thể giả danh: giả làm bạn cùng tuổi, người tuyển mẫu ảnh, “anh chị” hỗ trợ game… Nguy cơ không chỉ đến từ người lạ mà cả người quen.

- Giữ kín thông tin cá nhân: tên trường, địa chỉ, lịch sinh hoạt, ảnh mặc đồng phục.
- Cảnh giác khi được khen quá mức, tặng quà, nạp thẻ game, rồi rủ chuyển sang nhắn tin riêng.
- Không bật camera, không gửi ảnh, video riêng tư cho bất kỳ ai.
- Không đi gặp người chỉ quen qua mạng khi chưa có sự đồng ý và đi cùng của cha mẹ.
- Biết cách chặn, báo cáo tài khoản xấu và lưu bằng chứng.

Khi thấy bất an, hãy dừng lại và kể với người lớn tin cậy.`
      },
      src: ["TN_MANG", "CAND_SO"], next: ["xin-anh", "bi-de-doa-anh", "dau-hieu-canh-giac"]
    },
    {
      id: "xin-anh", topic: "tren-mang", title: "Có người xin ảnh riêng tư",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["xin ảnh", "đòi ảnh", "gửi ảnh", "ảnh nóng", "ảnh nhạy cảm", "ảnh khỏa thân", "ảnh riêng tư", "gửi clip", "gọi video", "bật camera", "chụp ảnh gửi", "lỡ gửi ảnh", "đã gửi ảnh"],
      q: ["Có người xin ảnh nhạy cảm thì sao?", "Mình lỡ gửi ảnh rồi phải làm gì?", "Người yêu đòi ảnh riêng tư"],
      a: {
        nho: `Nếu có ai xin ảnh bạn không mặc đồ, bạn hãy từ chối ngay nhé.
- Không gửi bất kỳ tấm ảnh nào của bạn cho người khác qua mạng.
- Dừng nhắn tin với người đó và cho bố mẹ hoặc cô giáo xem ngay. Bạn sẽ không bị mắng đâu.`,
        chung: `Tuyệt đối **KHÔNG gửi** ảnh, clip nhạy cảm cho bất kỳ ai, kể cả người yêu hay bạn thân. Khi ảnh đã gửi đi, bạn sẽ hoàn toàn mất quyền kiểm soát nó.

Xử lý từng tình huống cụ thể:
- **Nếu đối phương đòi hỏi/năn nỉ**: Hãy từ chối dứt khoát: *“Mình không đồng ý chụp hay gửi những hình ảnh này, mong bạn tôn trọng mình.”*
- **Nếu đối phương dọa chia tay**: Đó là dấu hiệu ép buộc ích kỷ, bạn không nên duy trì một mối quan hệ thiếu tôn trọng như vậy.
- **Nếu bạn ĐÃ LỠ GỬI RỒI**: Đừng hoảng loạn và đừng tự căm ghét bản thân. Hãy thu hồi tin nhắn nếu có thể. Dứt khoát không gửi thêm ảnh khác, chụp lại tin nhắn làm bằng chứng và chặn kẻ đó. Nếu bị đe dọa tống tiền, hãy xem hướng dẫn tại mục “Bị dọa tung ảnh”.`
      },
      src: ["TN_MANG"], next: ["bi-de-doa-anh", "nguoi-la-tren-mang"]
    },
    {
      id: "bi-de-doa-anh", topic: "tren-mang", title: "Bị dọa tung ảnh, tống tiền", titleNho: "Khi có người đe dọa bạn trên mạng",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["dọa tung ảnh", "tung ảnh", "phát tán ảnh", "dọa đăng ảnh", "tống tiền", "đòi tiền", "bị đe dọa", "bị dọa", "bị tống tiền", "nếu không gửi tiền", "bị cắt ghép ảnh", "ghép ảnh", "dọa gửi cho bố mẹ", "bị hack tài khoản"],
      q: ["Bị dọa tung ảnh thì làm sao?", "Có người đòi tiền nếu không sẽ đăng ảnh", "Bị cắt ghép ảnh nhạy cảm phải làm gì?"],
      a: {
        nho: `Nếu có ai dọa đăng ảnh của bạn lên mạng hay đòi tiền bạn:
- Bạn hãy hít thở thật sâu, **bạn không có lỗi gì cả**.
- **Tuyệt đối không gửi thêm ảnh** và không làm theo lời người đó.
- Hãy đưa ngay tin nhắn đó cho bố mẹ hoặc thầy cô xem. Người lớn sẽ có cách xử lý kẻ xấu giúp bạn.`,
        chung: `Hít một hơi thật sâu cùng mình nhé. Bạn đang vô cùng hoảng sợ và lo lắng, nhưng xin bạn hãy nhớ: **Kẻ đe dọa tống tiền/ảnh là kẻ phạm tội, bạn hoàn toàn là nạn nhân và không có lỗi.**

Hãy làm chính xác 4 bước này ngay lúc này:
1. **Tuyệt đối KHÔNG làm theo**: Không chuyển tiền, không gửi thêm bất kỳ ảnh nào. Kẻ tống tiền sẽ không bao giờ dừng lại nếu bạn nhượng bộ.
2. **Chụp lưu toàn bộ bằng chứng**: Chụp màn hình tin nhắn đe dọa, trang cá nhân của kẻ xấu, đường link, số tài khoản ngân hàng kẻ đó cung cấp.
3. **Bảo vệ tài khoản ngay**: Đổi mật khẩu, cài đặt trang cá nhân về chế độ Riêng tư (chỉ bạn bè), tạm thời khóa danh sách bạn bè để kẻ xấu không gửi tin nhắn quấy rối người thân của bạn.
4. **Vượt qua nỗi sợ bị bố mẹ biết**: Kẻ xấu lợi dụng tâm lý sợ bố mẹ của bạn để khống chế. Hãy nói với người lớn bạn tin: *“Con bị kẻ xấu trên mạng lừa và đe dọa, con cần sự giúp đỡ của gia đình.”* Gia đình sẽ là lá chắn bảo vệ bạn. Bạn cũng có thể gọi **111** để chuyên gia an ninh mạng hướng dẫn gỡ ảnh.`
      },
      src: ["TN_MANG", "BYT_111", "CAND_UC"], next: ["xin-anh", "cam-xuc"]
    },
    {
      id: "bat-nat-tren-mang", topic: "tren-mang", title: "Bị bắt nạt, bôi nhọ trên mạng",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["bắt nạt trên mạng", "bị bêu xấu", "bị nói xấu trên mạng", "bị đăng ảnh xấu", "lập nhóm nói xấu", "bị chửi trên mạng", "bị bóc phốt", "tin đồn trên mạng", "bị giả mạo tài khoản", "lập facebook giả", "bị bình luận xấu"],
      q: ["Bị nói xấu trên mạng thì sao?", "Có người lập tài khoản giả mạo mình", "Bị bắt nạt trên mạng phải làm gì?"],
      a: {
        nho: `Nếu có ai nói xấu, đăng ảnh xấu về bạn trên mạng, đừng trả lời lại. Hãy cho bố mẹ, thầy cô xem ngay để được giúp.`,
        chung: `Bị công kích, bêu xấu hay lập nhóm tẩy chay trên mạng xã hội có thể làm bạn thấy nghẹt thở và bất an tột cùng. Nhưng hãy nhớ rằng những lời lẽ ác ý trên mạng không quyết định giá trị thật của bạn.

Các bước dập tắt bắt nạt mạng:
1. **Quy tắc vàng: Không đôi co, không đáp trả**: Kẻ bắt nạt mạng muốn nhìn thấy bạn tức giận, phân bua để tiếp tục kéo dài câu chuyện. Sự im lặng và thu thập chứng cứ là đòn phản kháng mạnh nhất.
2. **Chụp màn hình và lưu bằng chứng**: Lưu lại link bài viết, bình luận, tin nhắn, tên tài khoản kẻ bắt nạt kèm ngày giờ cụ thể.
3. **Chặn & Báo cáo (Report)**: Dùng tính năng báo cáo quấy rối của Facebook, TikTok, Zalo; nhờ bạn bè thân thiết cùng báo cáo bài viết vi phạm để nền tảng gỡ bỏ.
4. **Tạm thời ngắt kết nối mạng xã hội**: Tắt thông báo, dành thời gian nghỉ ngơi, gặp gỡ những người bạn ngoài đời thật để lấy lại sự cân bằng.`
      },
      src: ["BYT_111", "CAND_SO"], next: ["bi-de-doa-anh", "cam-xuc", "bat-nat"]
    },

    /* ===== CẢM XÚC & HỖ TRỢ ===== */
    {
      id: "khong-phai-loi", topic: "cam-xuc", title: "Có phải lỗi của mình không?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["lỗi của em", "lỗi của mình", "lỗi của con", "tại em", "tại mình", "có phải lỗi", "em có lỗi", "mình có lỗi", "tự trách", "đáng bị", "em thấy bẩn", "mình thấy bẩn", "ghê tởm bản thân", "xấu hổ quá"],
      q: ["Có phải lỗi của mình không?", "Mình thấy xấu hổ và tự trách", "Tại mình nên mới bị như vậy?"],
      a: {
        nho: `Đó **không bao giờ** là lỗi của bạn. Bạn không làm gì sai cả.

Người làm hại bạn mới là người có lỗi. Bạn là một đứa trẻ dũng cảm và đáng yêu. Hãy kể cho người lớn bạn tin để được ôm và bảo vệ nhé.`,
        chung: `Mình muốn gửi đến bạn một cái ôm thật ấm áp và khẳng định: **ĐÓ HOÀN TOÀN KHÔNG PHẢI LỖI CỦA BẠN.**

Dù trong bất kỳ hoàn cảnh nào:
- Dù bạn đã mặc trang phục gì, đi đến đâu, hay tin tưởng ai.
- Dù lúc đó bạn im lặng, sợ hãi không dám hét, hay không kịp chống cự.
- Dù người gây hại là ai và họ có đổ lỗi cho bạn thế nào.

Trách nhiệm 100% thuộc về kẻ đã làm tổn thương bạn. Bạn không hề dơ bẩn, không hư hỏng, và bạn xứng đáng được yêu thương, tôn trọng và chữa lành. Hãy mở lòng chia sẻ cùng ALLY hoặc người bạn tin cậy nhé.`
      },
      src: ["CAND_BV"], next: ["cam-xuc", "ke-cho-ai", "goi-111"]
    },
    {
      id: "cam-xuc", topic: "cam-xuc", title: "Mình thấy sợ, buồn, không ngủ được",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["buồn", "sợ hãi", "lo lắng", "căng thẳng", "mất ngủ", "ác mộng", "khóc", "cô đơn", "không ai hiểu", "tâm lý", "trầm cảm", "áp lực", "hoảng loạn", "không vui", "mệt mỏi", "tủi thân", "muốn khóc"],
      q: ["Mình thấy buồn và sợ quá", "Mình hay gặp ác mộng, không ngủ được", "Làm sao để bớt lo lắng?"],
      a: {
        nho: `Khi gặp chuyện sợ hãi, bạn có thể thấy buồn, muốn khóc hay khó ngủ. Điều đó là rất bình thường.

Bạn hãy thử làm thế này nhé:
- Hít thở thật sâu cùng ALLY vài lần.
- Ôm một chú gấu bông hoặc đồ vật bạn thích.
- Kể cho người lớn bạn tin nghe bạn đang sợ điều gì. Mình luôn ở đây cùng bạn.`,
        chung: `Sau khi trải qua chuyện đau lòng hoặc đáng sợ, việc bạn mất ngủ, giật mình, run rẩy, hay khóc hay lo lắng tột độ là phản ứng tự nhiên của cơ thể để tự vệ. Bạn không hề yếu đuối.

Những việc giúp bạn xoa dịu cảm xúc lúc này:
1. **Lấy lại cảm giác an toàn cơ thể**: Uống một ngụm nước ấm, quấn chăn ấm, ôm một chiếc gối hoặc ngồi dựa lưng vào tường.
2. **Thực hành bài tập thở 4-2-6**: Hít sâu bằng mũi đếm 4, giữ 2 nhịp, thở ra từ từ đếm 6 (bạn có thể mở mục **Hỗ trợ → Hít thở cùng ALLY**).
3. **Viết nhật ký xả cảm xúc**: Viết tất cả nỗi sợ ra một trang giấy rồi xé nhỏ nó đi.
4. **Không chịu đựng một mình**: Hãy ở cạnh người bạn thấy bình yên nhất. Nếu nỗi sợ quá lớn, hãy gọi **111** để được chuyên viên tâm lý đồng hành cùng bạn.`
      },
      src: ["BYT_111"], next: ["hit-tho", "khong-phai-loi", "goi-111"]
    },
    {
      id: "hit-tho", topic: "cam-xuc", title: "Bài tập hít thở cho bình tĩnh", tool: "hit-tho",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["hít thở", "bình tĩnh", "thở sâu", "thư giãn", "bài tập thở", "làm sao bình tĩnh", "tim đập nhanh", "run rẩy", "hoảng"],
      q: ["Làm sao để bình tĩnh lại?", "Hướng dẫn hít thở"],
      a: {
        nho: `Mình cùng thở nhé:
1. Hít vào thật chậm, đếm 1, 2, 3, 4.
2. Thở ra thật chậm, như đang thổi bong bóng xà phòng.

Làm 5 lần nhé. Bạn có thể mở **Hỗ trợ → Hít thở cùng ALLY** để thở theo vòng tròn.`,
        chung: `Khi thấy hoảng sợ, hãy thử:
1. Hít vào bằng mũi, đếm chậm đến 4.
2. Giữ hơi, đếm đến 2.
3. Thở ra từ từ bằng miệng, đếm đến 6.

Lặp lại 5 lần. Bạn có thể mở **Hỗ trợ → Hít thở cùng ALLY** để có vòng tròn hướng dẫn nhịp thở.`
      },
      src: [], next: ["cam-xuc"]
    },

    /* ===== PHÁP LUẬT ===== */
    {
      id: "quyen-tre-em", topic: "phap-luat", title: "Quyền được bảo vệ của trẻ em",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["quyền trẻ em", "quyền của trẻ em", "quyền được bảo vệ", "trẻ em có quyền", "luật trẻ em", "quyền bí mật đời sống riêng tư", "quyền riêng tư của trẻ"],
      q: ["Trẻ em có những quyền gì?", "Luật Trẻ em bảo vệ trẻ thế nào?"],
      a: {
        nho: `Mọi trẻ em đều có quyền được an toàn, được yêu thương, được đi học và được bảo vệ khỏi những người làm hại mình.

Khi bị làm hại, bạn có quyền được giúp đỡ. Người lớn và các cô chú ở số **111** có trách nhiệm giúp bạn.`,
        chung: `Mọi trẻ em và người chưa thành niên đều có quyền bất khả xâm phạm về thân thể, danh dự và đời sống riêng tư.

Pháp luật quy định rõ:
- Bạn có quyền được bảo vệ khỏi bạo lực, bóc lột và mọi hình thức xâm hại tình dục.
- Không ai có quyền nhân danh “dạy dỗ” hay “tình cảm” để ép buộc, đánh đập hay sàm sỡ bạn.
- Khi quyền của bạn bị xâm phạm, bạn có quyền yêu cầu cơ quan chức năng, nhà trường và gia đình can thiệp bảo vệ.`
      },
      src: ["LTE"], next: ["trach-nhiem-bao-tin", "bao-mat-thong-tin"]
    },
    {
      id: "phap-luat-hinh-su", topic: "phap-luat", title: "Pháp luật xử lý xâm hại tình dục trẻ em thế nào?", titleNho: "Người làm hại trẻ em có bị phạt không?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["bị phạt", "đi tù", "bao nhiêu năm tù", "xử lý hình sự", "bộ luật hình sự", "điều 146", "điều 142", "điều 145", "tội dâm ô", "tội hiếp dâm", "khung hình phạt", "mức án", "có bị bắt không", "bị xử lý thế nào", "pháp luật xử lý"],
      q: ["Xâm hại tình dục trẻ em bị phạt thế nào?", "Tội dâm ô bị đi tù bao nhiêu năm?", "Kẻ xâm hại có bị bắt không?"],
      a: {
        nho: `Người làm hại trẻ em là làm sai pháp luật và công an sẽ xử phạt rất nghiêm.

Bạn không phải sợ kẻ xấu trả thù. Việc của bạn là kể với người lớn để người lớn và công an bảo vệ bạn.`,
        thcs: `Pháp luật Việt Nam trừng trị rất nghiêm khắc mọi hành vi xâm hại trẻ em. Kẻ làm hại bạn có thể bị phạt tù nhiều năm tù giam.

Vì vậy:
- Việc bạn lên tiếng không phải là “làm lớn chuyện” hay “phá hoại ai”, mà là hành động chính nghĩa để bảo vệ bản thân và ngăn kẻ xấu làm hại người khác.
- Pháp luật và cơ quan chức năng luôn đứng về phía nạn nhân để bảo vệ sự an toàn và danh tính cho bạn.`,
        chung: `Bộ luật Hình sự quy định các khung hình phạt rất nghiêm khắc đối với tội phạm xâm hại tình dục và bạo lực người dưới 16 tuổi (từ phạt tù nhiều năm đến chung thân, tử hình tùy mức độ nghiêm trọng).

Những điều bạn cần an tâm:
- **Pháp luật luôn bảo vệ nạn nhân**: Bạn có quyền yêu cầu giữ kín danh tính, bảo mật đời tư và được trợ giúp pháp lý miễn phí.
- **Kẻ phạm tội phải chịu trách nhiệm trước pháp luật**: Sự im lặng của nạn nhân chỉ làm kẻ xấu lấn tới. Lên tiếng với sự hỗ trợ của người lớn và cơ quan bảo vệ trẻ em là con đường đúng đắn để chấm dứt sự đe dọa.`
      },
      src: ["BLHS"], next: ["trach-nhiem-bao-tin", "quyen-tre-em"]
    },
    {
      id: "trach-nhiem-bao-tin", topic: "phap-luat", title: "Ai có trách nhiệm báo tin khi trẻ bị xâm hại?",
      ages: ["thcs", "thpt", "lon"],
      k: ["trách nhiệm báo tin", "tố giác", "báo tin", "có phải báo", "phải báo ai", "báo công an", "thông báo xâm hại", "biết mà không báo", "che giấu", "người biết chuyện", "tố cáo"],
      q: ["Biết trẻ bị xâm hại thì có phải báo không?", "Báo tin xâm hại cho ai?", "Ai có trách nhiệm tố giác?"],
      a: {
        chung: `Theo Luật Trẻ em, mọi người, gia đình, nhà trường, cơ quan, tổ chức đều có trách nhiệm thông tin, thông báo, tố giác hành vi xâm hại trẻ em cho cơ quan có thẩm quyền.

Nếu bạn biết một bạn đang bị xâm hại, bạn có thể báo cho thầy cô, gọi **111** hoặc **113**. Việc báo tin là để bảo vệ bạn ấy, không phải “mách lẻo”.`,
        lon: `Theo khoản 1 Điều 51 Luật Trẻ em 2016, cơ quan, tổ chức, cơ sở giáo dục, gia đình, cá nhân có trách nhiệm thông tin, thông báo, tố giác hành vi xâm hại trẻ em, các trường hợp trẻ em bị xâm hại hoặc có nguy cơ bị xâm hại cho cơ quan có thẩm quyền.

Kênh báo tin: Tổng đài 111 (miễn phí, 24/7), công an nơi gần nhất (113 khi khẩn cấp), Ủy ban nhân dân hoặc người làm công tác bảo vệ trẻ em cấp xã. Không tự điều tra, không đối chất với người bị nghi ngờ trước mặt trẻ, và không đăng tải sự việc lên mạng xã hội.`
      },
      src: ["LTE"], next: ["khi-tre-ke", "bao-mat-thong-tin"]
    },
    {
      id: "bao-mat-thong-tin", topic: "phap-luat", title: "Bảo vệ thông tin của trẻ bị xâm hại",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["đăng lên mạng", "chia sẻ lên mạng", "đăng facebook", "lộ danh tính", "bảo mật thông tin", "thông tin của nạn nhân", "quay video", "đăng ảnh trẻ", "dữ liệu cá nhân", "bí mật đời tư", "ai được biết chuyện"],
      q: ["Có được đăng chuyện trẻ bị xâm hại lên mạng không?", "Thông tin của nạn nhân có được giữ kín không?"],
      a: {
        nho: `Chuyện của bạn là chuyện riêng của bạn. Không ai được tự ý đăng chuyện hay ảnh của bạn lên mạng khi bạn và bố mẹ chưa đồng ý.`,
        chung: `Thông tin về đời sống riêng tư, bí mật cá nhân của trẻ em được pháp luật bảo vệ. Luật Trẻ em cấm công bố, tiết lộ những thông tin này mà không có sự đồng ý của trẻ từ đủ 7 tuổi trở lên và của cha mẹ, người giám hộ.

Vì vậy, khi biết một bạn bị xâm hại: không chụp ảnh, quay video, không đăng hay chia sẻ lên mạng, không bàn tán. Điều đó có thể làm bạn ấy tổn thương thêm.`,
        lon: `Khoản 11 Điều 6 Luật Trẻ em 2016 nghiêm cấm công bố, tiết lộ thông tin về đời sống riêng tư, bí mật cá nhân của trẻ em mà không được sự đồng ý của trẻ em từ đủ 7 tuổi trở lên và của cha, mẹ, người giám hộ. Luật Bảo vệ dữ liệu cá nhân 2025 (hiệu lực từ 01/01/2026, Điều 24) cũng yêu cầu sự đồng ý của trẻ từ đủ 7 tuổi và người đại diện theo pháp luật khi xử lý dữ liệu cá nhân của trẻ nhằm công bố, tiết lộ thông tin đời sống riêng tư.

Khi trẻ bị xâm hại: không đăng hình ảnh, tên, trường lớp, địa chỉ của trẻ lên mạng xã hội, kể cả với ý tốt “để cảnh báo”. Hãy báo cơ quan chức năng và để họ xử lý.`
      },
      src: ["LTE", "LSVN_DL"], next: ["trach-nhiem-bao-tin", "an-danh"]
    },

    /* ===== DÀNH CHO NGƯỜI LỚN ===== */
    {
      id: "dau-hieu-tre-bi-xam-hai", topic: "nguoi-lon", title: "Dấu hiệu trẻ có thể đang bị xâm hại",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["dấu hiệu trẻ bị xâm hại", "nhận biết trẻ bị xâm hại", "con có dấu hiệu", "con thay đổi", "biểu hiện trẻ bị xâm hại", "con không muốn đi học", "nghi ngờ con bị", "làm sao biết con bị", "dấu hiệu bị xâm hại", "học sinh có dấu hiệu", "biểu hiện bị xâm hại", "nhận biết bị xâm hại"],
      q: ["Dấu hiệu nhận biết trẻ bị xâm hại?", "Làm sao biết con mình bị xâm hại?", "Con thay đổi tính nết có phải bị xâm hại không?"],
      a: {
        nho: `Nếu bạn hoặc bạn bè có những chuyện sau thì cần kể ngay với người lớn đáng tin:
- Có người làm đau hoặc chạm vào vùng riêng tư.
- Bỗng nhiên thấy rất sợ một người hoặc một nơi nào đó.
- Hay khóc, khó ngủ, gặp ác mộng vì một bí mật xấu.

Hãy kể với bố mẹ, thầy cô hoặc gọi **111** nhé.`,
        chung: `Nếu em nhỏ trong nhà hoặc bạn bè có những thay đổi sau, hãy để ý và báo người lớn:
- Bỗng nhiên sợ hãi, né tránh một người cụ thể; không muốn đến một nơi nào đó.
- Thu mình, cáu gắt, hay khóc, gặp ác mộng, học sa sút.
- Có vết thương không rõ lý do; đau ở vùng kín.
- Có hiểu biết hoặc hành vi về tình dục không phù hợp với tuổi.
- Có quà, tiền, điện thoại không rõ nguồn gốc; giấu giếm tin nhắn.

Một dấu hiệu riêng lẻ chưa khẳng định điều gì, nhưng là lý do để quan tâm, hỏi han nhẹ nhàng và tìm người lớn giúp đỡ.`,
        lon: `Theo một chuyên gia giáo dục chia sẻ trên Báo Thanh Niên (9/2024), có thể để ý 4 nhóm dấu hiệu:
- **Tâm lý**: thay đổi tính nết đột ngột, cáu gắt, lo âu, thu mình, có cảm giác tội lỗi, xấu hổ.
- **Thể chất**: vết bầm, trầy xước, thương tích không rõ lý do, kể cả ở vùng nhạy cảm; đau, viêm nhiễm vùng kín, tiểu buốt, tiểu nhiều. Cần đưa trẻ đi khám ngay.
- **Hành vi**: có hành vi, hiểu biết về tình dục không phù hợp lứa tuổi; giảm sút tập trung, học tập.
- **Xã hội**: tránh né bạn bè, hoạt động từng yêu thích; mất lòng tin vào người lớn, hoặc sợ một người cụ thể.

Một dấu hiệu riêng lẻ chưa khẳng định trẻ bị xâm hại, nhưng là lý do để quan tâm, trò chuyện nhẹ nhàng và tìm hỗ trợ (Tổng đài 111).`
      },
      src: ["TN_4DH", "BYT_NB", "TN_BH"], next: ["khi-tre-ke", "day-con"]
    },
    {
      id: "khi-tre-ke", topic: "nguoi-lon", title: "Khi trẻ kể bị xâm hại, người lớn nên làm gì?",
      ages: ["thcs", "thpt", "lon"],
      k: ["con kể bị", "con nói bị", "học sinh kể", "trẻ kể", "khi trẻ kể", "con tâm sự", "con nói với tôi", "cháu kể", "phụ huynh nên làm gì", "giáo viên nên làm gì", "con bị xâm hại phải làm sao", "phát hiện con bị", "con tôi bị", "con tôi kể", "cháu tôi kể", "con tôi nói", "học sinh tôi kể", "học sinh của tôi bị", "con mình bị", "em gái kể bị", "em trai kể bị"],
      q: ["Con kể bị xâm hại thì cha mẹ nên làm gì?", "Học sinh tâm sự bị xâm hại, giáo viên xử lý thế nào?", "Phát hiện con bị xâm hại phải làm sao?"],
      a: {
        chung: `Khi một em nhỏ hoặc người thân kể rằng mình bị xâm hại:
- **Giữ bình tĩnh**, lắng nghe và tin lời em kể.
- Khẳng định ngay: “Em đã làm đúng khi kể ra. Đây không phải lỗi của em.”
- Không trách mắng, không hứa giữ bí mật xấu.
- Cùng báo ngay cho cha mẹ, thầy cô tin cậy hoặc gọi **111** (miễn phí, 24/7).`,
        lon: `Cách người lớn phản ứng trong lần đầu trẻ kể ảnh hưởng rất lớn đến việc trẻ có tiếp tục chia sẻ và hồi phục hay không.
- **Giữ bình tĩnh**, lắng nghe, không tỏ ra hoảng hốt hay giận dữ trước mặt trẻ.
- **Tin trẻ** và nói: “Con đã làm đúng khi kể. Đây không phải lỗi của con.”
- **Không tra hỏi dồn dập**, không bắt trẻ kể lại nhiều lần, không gợi ý câu trả lời. Ghi lại những gì trẻ tự kể, kèm thời gian.
- **Không hứa giữ bí mật**; giải thích rằng cần người khác giúp để con an toàn.
- **Bảo đảm an toàn**: không để trẻ tiếp xúc với người bị nghi ngờ; không tự đối chất với người đó trước mặt trẻ.
- **Báo tin**: gọi Tổng đài 111 hoặc báo công an; đưa trẻ đi khám nếu cần.
- **Bảo mật**: không chia sẻ lên mạng xã hội.
- **Đồng hành lâu dài**: tìm hỗ trợ tâm lý cho trẻ và cho cả gia đình.`
      },
      src: ["CAND_BV", "TN_QUEN"], next: ["sau-khi-bi-xam-hai", "trach-nhiem-bao-tin"]
    },
    {
      id: "day-con", topic: "nguoi-lon", title: "Kỹ năng phòng tránh xâm hại và dạy trẻ tự bảo vệ",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["dạy con", "dạy trẻ", "dạy học sinh", "giáo dục giới tính", "kỹ năng phòng tránh", "phòng tránh xâm hại", "phòng chống xâm hại", "bảo vệ con", "cách dạy con tự bảo vệ", "nói chuyện với con", "cách tự bảo vệ", "kỹ năng tự bảo vệ", "tự bảo vệ bản thân", "làm sao để không bị xâm hại", "cách phòng tránh"],
      q: ["Dạy con phòng tránh xâm hại thế nào?", "Nên dạy trẻ những kỹ năng gì?", "Làm sao để tự bảo vệ bản thân khỏi bị xâm hại?"],
      a: {
        nho: `Để tự bảo vệ mình, bạn hãy nhớ 5 quy tắc vàng nhé:
1. Không cho ai nhìn hay chạm vào vùng riêng tư (vùng đồ bơi).
2. Không đi theo hay nhận quà từ người lạ.
3. Không ở riêng trong phòng kín với người làm bạn lo sợ.
4. Không giữ bí mật xấu làm bạn sợ hãi.
5. Nhớ 5 người lớn trong **Bàn tay tin cậy** và số **111** để kể ngay khi cần.`,
        chung: `Các kỹ năng tự bảo vệ và phòng tránh xâm hại quan trọng:
- **Hiểu rõ ranh giới cơ thể**: nắm vững quy tắc vùng riêng tư và quy tắc 6 vòng tròn giao tiếp.
- **Nhận diện sớm dấu hiệu dụ dỗ**: cảnh giác khi ai đó tặng quà bất thường, rủ đi riêng, đòi giữ bí mật hoặc xin ảnh nhạy cảm.
- **An toàn trên mạng**: không gửi ảnh riêng tư, không hẹn gặp người chỉ quen qua mạng.
- **Kỹ năng phản ứng**: nói KHÔNG dứt khoát, rời khỏi nơi nguy hiểm, kể ngay với người lớn tin cậy hoặc gọi **111**.`,
        lon: `Một số gợi ý theo độ tuổi:
- **Mầm non, tiểu học**: gọi đúng tên các bộ phận cơ thể; quy tắc đồ lót; bí mật an toàn và không an toàn; bàn tay 5 người tin cậy; mật khẩu gia đình khi có người lạ đón.
- **THCS**: quy tắc 6 vòng tròn; nhận biết dấu hiệu dụ dỗ; an toàn trên mạng; kỹ năng từ chối và kể lại.
- **THPT**: sự đồng ý và tôn trọng ranh giới; an toàn trong các mối quan hệ, hẹn hò; xử lý khi bị đe dọa, tống tiền qua mạng; giúp đỡ bạn bè.

Quan trọng nhất là giữ kênh trò chuyện cởi mở hằng ngày, để trẻ biết rằng kể với cha mẹ, thầy cô điều gì cũng sẽ được lắng nghe, không bị mắng.`
      },
      src: ["TN_DAY", "CAND_DAY"], next: ["an-toan-mang-cho-con", "sau-vong-tron", "vung-rieng-tu"]
    },
    {
      id: "an-toan-mang-cho-con", topic: "nguoi-lon", title: "Bảo vệ con trên môi trường mạng",
      ages: ["lon"],
      k: ["con dùng điện thoại", "con chơi game", "quản lý con trên mạng", "bảo vệ con trên mạng", "con dùng mạng xã hội", "kiểm soát của phụ huynh", "con lên mạng", "con xem tiktok", "môi trường mạng"],
      q: ["Làm sao bảo vệ con khi dùng mạng?", "Con chơi game online có nguy hiểm không?"],
      a: {
        lon: `- Đặt thiết bị ở không gian chung; thống nhất thời gian và quy tắc sử dụng.
- Bật chế độ kiểm soát của phụ huynh, giới hạn độ tuổi trên ứng dụng; kiểm tra cài đặt riêng tư cùng con.
- Trò chuyện với con về người lạ trên mạng, việc không gửi ảnh riêng tư và không đi gặp người quen qua mạng.
- Để ý dấu hiệu: con giấu điện thoại, có quà, thẻ nạp game không rõ nguồn gốc, lo âu khi nhận tin nhắn.
- Dạy con lưu bằng chứng và kể ngay khi bị đe dọa; cam kết không phạt con khi con kể.

Nguy cơ xâm hại trực tuyến không chỉ đến từ người lạ mà cả người quen. Khi phát hiện, hãy báo Tổng đài 111 hoặc công an.`
      },
      src: ["TN_MANG", "CAND_SO", "CAND_UC"], next: ["bi-de-doa-anh", "day-con"]
    },

    /* ===== VỀ ỨNG DỤNG ===== */
    {
      id: "ve-ban-an", topic: "ung-dung", title: "ALLY là ai?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: [
        "bạn tên là gì", "tên bạn là gì", "tên của bạn là gì", "bạn tên gì", "tên là gì", "tên gì",
        "cậu tên là gì", "cậu tên gì", "em tên là gì", "chị tên là gì", "anh tên là gì", "gọi bạn là gì",
        "cho hỏi tên", "cho mình hỏi tên", "bạn là ai", "cậu là ai", "ally là ai", "ally là gì",
        "ally", "ally nghĩa là gì", "tên ally", "ý nghĩa tên ally", "an là ai", "bạn an là ai",
        "bạn là người hay máy", "bạn là robot", "chatbot", "bạn có phải người thật", "ai làm ra bạn",
        "ai tạo ra bạn", "ai viết ra bạn", "bạn bao nhiêu tuổi", "bạn mấy tuổi", "bạn ở đâu",
        "bạn là nam hay nữ", "bạn là trai hay gái", "giới thiệu về bạn", "giới thiệu bản thân"
      ],
      q: [
        "Bạn tên là gì?", "Tên của bạn là gì?", "Bạn tên gì?", "ALLY là ai?", "Bạn là ai?",
        "Bạn có phải người thật không?", "Tên ALLY có ý nghĩa gì?", "Ai tạo ra bạn?"
      ],
      a: {
        nho: `Mình tên là **ALLY** (nghĩa là **“Người bạn đồng hành”**), một người bạn nhỏ trên máy luôn sẵn sàng lắng nghe bạn.

Mình không phải người thật. Khi cần giúp đỡ, bạn hãy tìm người lớn mà bạn tin, hoặc gọi số **111**. Gọi số này không mất tiền.`,
        chung: `Mình tên là **ALLY** (trong tiếng Anh nghĩa là **“Người bạn đồng hành / Liên minh bảo vệ”**), một chatbot do nhóm học sinh nghiên cứu khoa học xây dựng để hỗ trợ phòng, chống xâm hại trẻ em.

Mình không phải người thật và **không thay thế** cho bất kỳ chuyên gia tâm lý, bác sĩ, công an hay cơ quan nào. Mình chỉ mang tính chất hỗ trợ, lắng nghe chia sẻ, cung cấp thông tin chính thống và hỗ trợ kết nối.

Nếu bạn cần nói chuyện với người thật hoặc cần can thiệp bảo vệ, hãy gọi **111** (miễn phí, 24/7) hoặc **113** khi khẩn cấp.`
      },
      src: [], next: ["an-danh", "cach-dung"]
    },
    {
      id: "an-danh", topic: "ung-dung", title: "Thông tin của mình có bị lộ không?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: [
        "lộ thông tin", "bị lộ", "có bị lộ không", "ẩn danh", "danh tính", "app có lưu", "có lưu lại không",
        "có lưu tin nhắn không", "có ai đọc được", "ai đọc được", "thông tin của mình", "thông tin của em",
        "quyền riêng tư", "có ai biết không", "bố mẹ có biết không", "người khác có biết không",
        "xóa tin nhắn", "xóa cuộc trò chuyện", "xóa lịch sử", "có bảo mật không", "có an toàn không"
      ],
      q: ["Thông tin của mình có bị lộ không?", "Ứng dụng có lưu lại cuộc trò chuyện không?", "Có ai đọc được tin nhắn của mình không?", "Bố mẹ có biết mình nhắn ở đây không?"],
      a: {
        nho: `Bạn không cần nói tên hay địa chỉ với mình.

Mình không kể chuyện của bạn cho ai cả. Khi nói chuyện xong, bạn có thể bấm nút **Thoát nhanh** ở trên cùng để xóa hết.`,
        chung: `Bạn không cần cho mình biết tên, địa chỉ hay số điện thoại.

- Cuộc trò chuyện chỉ nằm trên máy của bạn. Mặc định ứng dụng không lưu lại khi bạn đóng ứng dụng.
- Ứng dụng **không tự gửi** thông tin của bạn cho bất kỳ ai. Nếu muốn nhờ Tổng đài 111 giúp, chính bạn quyết định có gọi hay gửi thông tin hay không.
- Nút **Thoát nhanh** ở góc trên giúp bạn rời ứng dụng ngay và xóa cuộc trò chuyện.

Nếu bạn dùng chung điện thoại với người khác, hãy bấm Thoát nhanh khi trò chuyện xong nhé.`
      },
      src: [], next: ["ve-ban-an", "goi-111"]
    },
    {
      id: "cach-dung", topic: "ung-dung", title: "Ứng dụng có những gì?",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: [
        "hướng dẫn sử dụng", "cách dùng", "cách sử dụng", "dùng thế nào", "app có gì", "ứng dụng có gì",
        "web có gì", "bạn giúp được gì", "bạn làm được gì", "bạn biết làm gì", "ally làm được gì",
        "ally giúp được gì", "chức năng", "tính năng", "có tác dụng gì", "dùng để làm gì", "hỏi được gì"
      ],
      q: ["Bạn giúp được gì cho mình?", "Ứng dụng này có những gì?", "Bạn làm được những gì?", "Cách sử dụng ứng dụng này như thế nào?"],
      a: {
        nho: `Mình có thể:
- Trả lời câu hỏi của bạn về cách giữ an toàn.
- Nghe bạn kể chuyện.
- Cho bạn chơi trả lời tình huống.
- Giúp bạn gọi nhanh số **111**, **113** bằng nút **SOS** ở góc trên.`,
        chung: `Mình có thể giúp bạn:
- **Trò chuyện**: hỏi bất cứ điều gì về phòng, chống xâm hại, hoặc kể chuyện bạn đang gặp.
- **Tìm hiểu**: thư viện kiến thức theo lứa tuổi, có nguồn chính thống.
- **Tình huống**: luyện cách ứng phó và tự kiểm tra định kỳ.
- **Hỗ trợ**: số điện thoại khẩn cấp, bàn tay tin cậy, bài tập hít thở, chuẩn bị nội dung gọi 111.
- Nút **SOS** luôn ở góc trên để gọi giúp đỡ nhanh. Nút **Thoát nhanh** giúp bạn rời ứng dụng ngay.`
      },
      src: [], next: ["ve-ban-an", "an-danh"]
    },
    {
      id: "nguyen-nhan-hau-qua", topic: "kien-thuc", title: "Nguyên nhân, hậu quả và thực trạng xâm hại trẻ em",
      ages: ["thcs", "thpt", "lon"],
      k: [
        "nguyên nhân xâm hại", "hậu quả xâm hại", "hậu quả của xâm hại", "tác hại của xâm hại",
        "ảnh hưởng của xâm hại", "vì sao trẻ bị xâm hại", "tại sao trẻ bị xâm hại", "thực trạng xâm hại",
        "số liệu thống kê", "nghiên cứu khoa học", "đề tài nghiên cứu", "tài liệu nghiên cứu", "nguyên nhân và hậu quả"
      ],
      q: ["Nguyên nhân và hậu quả của xâm hại trẻ em là gì?", "Thực trạng xâm hại trẻ em hiện nay như thế nào?", "Vì sao trẻ em dễ bị xâm hại?"],
      a: {
        chung: `**1. Nguyên nhân chính khiến trẻ em dễ bị xâm hại:**
- Kẻ xấu lợi dụng sự non nớt, lòng tin hoặc mối quan hệ thân quen để thao túng, dụ dỗ, đe dọa.
- Nguy cơ trên không gian mạng tăng nhanh qua mạng xã hội, game trực tuyến.
- Nhiều bạn còn ngại ngùng, thiếu kỹ năng nhận diện ranh giới hoặc sợ bị mắng nên không dám kể sớm.

**2. Hậu quả:**
- Tổn thương sức khỏe thể chất, tinh thần kéo dài (lo âu, mất ngủ, tự trách, giảm tập trung học tập).
- Theo Tổng đài quốc gia **111**, mỗi năm tổng đài tiếp nhận khoảng 300.000 cuộc gọi tư vấn và hỗ trợ can thiệp bảo vệ trẻ em.`,
        lon: `**1. Thực trạng & Số liệu tham khảo (phục vụ nghiên cứu, tuyên truyền):**
- Theo Cục Bà mẹ và Trẻ em (Bộ Y tế), Tổng đài quốc gia **111** tiếp nhận khoảng 300.000 cuộc gọi/năm; riêng tháng 5/2026 ghi nhận hơn 46.000 cuộc gọi, trong đó nhiều trẻ cầu cứu vì bạo lực, xâm hại và khủng hoảng tâm lý.
- Đáng chú ý, phần lớn vụ việc do **người quen** (hàng xóm, họ hàng, người quen qua mạng) gây ra chứ không chỉ người lạ.

**2. Nguyên nhân:**
- Sự bất cân xứng về quyền lực, thể chất và nhận thức giữa người lớn và trẻ em.
- Thiếu hụt kỹ năng giáo dục giới tính, quy tắc an toàn cơ thể và kỹ năng số trong gia đình, nhà trường.
- Tâm lý e ngại “giữ thể diện” khiến việc phát hiện, tố giác bị chậm trễ.

**3. Hậu quả:**
- Gây sang chấn tâm lý nặng nề (PTSD, trầm cảm, lo âu, suy giảm lòng tin), tổn hại thể chất và ảnh hưởng lâu dài đến sự phát triển nhân cách của trẻ.`
      },
      src: ["TT_111", "BYT_111", "TN_QUEN", "TN_MANG"], next: ["xam-hai-la-gi", "dau-hieu-tre-bi-xam-hai", "day-con"]
    },
    {
      id: "xam-hai-tinh-than", topic: "kien-thuc", title: "Bạo lực tinh thần, ngôn từ và miệt thị ngoại hình",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: [
        "bạo lực tinh thần", "xâm hại tinh thần", "bạo lực ngôn từ", "miệt thị ngoại hình", "body shaming",
        "chê béo", "chê xấu", "chê lùn", "bodyshaming", "sỉ nhục", "lăng mạ", "tổn thương tinh thần",
        "lời nói làm tổn thương", "bị chê bai", "bị so sánh"
      ],
      q: ["Bạo lực tinh thần là gì?", "Bị miệt thị ngoại hình (body shaming) phải làm sao?", "Lời nói xúc phạm có phải là xâm hại không?"],
      a: {
        nho: `Nếu có bạn nào trêu chọc, chê bai ngoại hình hay đặt biệt danh xấu làm bạn buồn, đó là hành vi xấu.

Bạn hãy nhớ:
- Bạn luôn đẹp và đáng yêu theo cách riêng của mình.
- Hãy nói to: “Mình không thích bạn nói thế, dừng lại đi!” rồi đi ra chỗ khác.
- Kể cho cô giáo chủ nhiệm hoặc bố mẹ để cô nhắc nhở bạn đó nhé.`,
        chung: `Bị miệt thị ngoại hình (*body shaming*), lăng mạ, sỉ nhục, cô lập hay xúc phạm danh dự là một dạng bạo lực tinh thần. Nó có thể để lại vết thương sâu sắc không kém gì bạo lực thể xác.

Cách giúp bạn lấy lại sức mạnh và vượt qua:
1. **Nhận thức đúng về bản thân**: Những lời chê bai cay độc của người khác chỉ phản ánh sự thiếu tế nhị của họ, không quyết định giá trị con người bạn. Bạn đẹp và đáng quý theo cách riêng của mình.
2. **Phản ứng thông minh khi bị trêu chọc**: Có thể mỉm cười nhẹ và nói: *“Cơ thể này là của mình và mình thấy hoàn toàn ổn. Cảm ơn bạn đã quan tâm”*. Sự điềm tĩnh sẽ làm kẻ miệt thị mất hứng trêu chọc.
3. **Thanh lọc môi trường xung quanh**: Tránh xa các hội nhóm độc hại; hủy theo dõi hoặc chặn những người thường xuyên buông lời cay nghiệt.
4. **Tâm sự & Giải tỏa**: Hãy nói chuyện với những người bạn tích cực, yêu thương bạn thật lòng, hoặc thử bài tập hít thở cùng ALLY để làm dịu tâm trạng.`
      },
      src: ["LTE", "TVPL_BL"], next: ["bat-nat", "bat-nat-tren-mang", "cam-xuc"]
    },
    {
      id: "quay-roi-cong-cong", topic: "tu-bao-ve", title: "Quấy rối nơi công cộng, xe buýt, quay lén, nhìn lén",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: [
        "nơi công cộng", "trên xe buýt", "xe bus", "thang máy", "nhà vệ sinh", "phòng thay đồ",
        "quay lén", "chụp lén", "nhìn lén", "camera giấu kín", "sờ mông", "cố tình đụng chạm",
        "biến thái", "khoe thân nơi công cộng", "quấy rối nơi công cộng"
      ],
      q: ["Bị sàm sỡ trên xe buýt hoặc nơi công cộng thì làm gì?", "Phát hiện bị quay lén, nhìn lén phải xử lý thế nào?"],
      a: {
        nho: `Khi đi xe buýt hay ở chỗ đông người, nếu có ai cố tình chạm vào người bạn làm bạn sợ:
- Hãy lùi lại và nói to: “Đứng dịch ra xa cháu!” để mọi người xung quanh nghe thấy.
- Chạy ngay lại gần bác tài xế hoặc đứng cạnh người lớn khác.
- Tuyệt đối không đi vào góc tối hay nhà vệ sinh vắng một mình nhé.`,
        chung: `Cảm giác bị đụng chạm, cọ sát lén lút trên xe buýt, thang máy hay phát hiện bị quay lén là cực kỳ kinh tởm và phẫn nộ. Bạn không việc gì phải chịu đựng trong im lặng.

Cách xử lý dứt khoát tại hiện trường:
1. **Trên xe buýt / tàu điện / nơi đông người**:
   - Lùi lại một bước, nhìn thẳng vào mặt kẻ đó và nói thật to: *“Anh/chị đang làm cái gì đấy? Đứng dịch ra xa tôi!”*. Kẻ biến thái chỉ dám làm lén lút và rất sợ bị đám đông chú ý.
   - Di chuyển ngay đến gần tài xế, phụ xe hoặc đứng cạnh nhóm người lớn/phụ nữ để nhờ hỗ trợ.
2. **Trong thang máy**: Đứng tựa lưng vào vách cạnh bảng nút bấm, không đứng quay lưng lại kẻ đáng ngờ; bấm tầng gần nhất để thoát ra ngoài ngay.
3. **Phát hiện nhìn lén, quay lén (nhà vệ sinh, phòng trọ, phòng thay đồ)**:
   - Giữ khoảng cách an toàn, hô to để bảo vệ hoặc mọi người xung quanh giữ đối tượng, không tự giằng co một mình ở nơi vắng.
   - Yêu cầu xóa dữ liệu trước sự chứng kiến của bảo vệ/công an và báo ngay cho cơ quan chức năng.`
      },
      src: ["CAND_KN"], next: ["dong-cham", "khi-bi-xam-hai", "khi-nao-goi-113-115"]
    },
    {
      id: "ap-luc-hoc-tap-gia-dinh", topic: "cam-xuc", title: "Áp lực học tập, gia đình và tâm sự tuổi mới lớn",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: [
        "áp lực học tập", "điểm kém", "thi trượt", "sợ điểm kém", "chán học", "học hành căng thẳng",
        "bố mẹ không hiểu", "gia đình không hiểu", "bố mẹ cãi nhau", "bố mẹ ly hôn", "không ai lắng nghe",
        "thất tình", "chia tay buồn", "cô đơn ở trường", "không có bạn thân", "mệt mỏi cuộc sống"
      ],
      q: ["Mình bị áp lực học tập và gia đình không hiểu mình", "Bố mẹ hay cãi nhau làm mình rất buồn", "Làm sao vượt qua cảm giác cô đơn, căng thẳng?"],
      a: {
        nho: `Khi bạn bị điểm chưa cao hay thấy bố mẹ giận nhau, chắc bạn buồn và lo lắm.

Đó không phải lỗi của bạn đâu. Bạn hãy hít thở sâu hoặc viết điều mình nghĩ ra giấy nhé. Bạn cũng có thể tâm sự với thầy cô, ông bà hoặc gọi **111** để có người lắng nghe.`,
        chung: `Áp lực điểm số, kỳ vọng từ gia đình, chuyện bố mẹ bất hòa hay cảm giác cô đơn là điều rất nhiều bạn học sinh, sinh viên gặp phải. Cảm xúc buồn bã hay mệt mỏi của bạn hoàn toàn có thật và đáng được lắng nghe.

Một vài cách giúp bạn nhẹ lòng hơn:
- **Đừng giữ một mình**: hãy viết nhật ký hoặc nhắn tin cho bố mẹ về cảm nhận của bạn (“Con đang thấy rất áp lực, mong bố mẹ lắng nghe con”).
- **Tìm điểm tựa tâm lý**: trò chuyện với giáo viên tư vấn tâm lý ở trường, người thân tin cậy, hoặc gọi Tổng đài **111** (miễn phí, 24/7).
- **Nghỉ ngơi ngắn**: thử bài tập **Hít thở cùng ALLY** trong mục Hỗ trợ để làm dịu nhịp tim và sự căng thẳng.`
      },
      src: ["BYT_111"], next: ["cam-xuc", "hit-tho", "goi-111"]
    },

    /* ===== HỘI THOẠI (ẩn khỏi thư viện) ===== */
    {
      id: "chao", topic: "ung-dung", title: "Chào hỏi", hidden: true, action: "greet",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: [
        "bạn ơi", "ban oi", "ally ơi", "ally oi", "chào bạn", "chao ban", "chào ally", "chao ally",
        "xin chào", "xin chao", "chào", "chao", "hello", "hi", "alo", "hế lô", "he lo", "hế nhô", "helu",
        "cậu ơi", "cau oi", "anh ơi", "chị ơi", "em ơi", "chào cậu", "chao cau", "bạn ơi cho mình hỏi",
        "cho mình hỏi", "cho em hỏi", "cho tôi hỏi", "mình muốn hỏi", "em muốn hỏi", "bạn có đó không",
        "ban co do khong", "có ai ở đó không", "co ai o do khong", "có ai không", "co ai khong", "có đó không",
        "co do khong", "bạn có ở đây không", "nói chuyện với mình đi", "tâm sự với mình đi", "nói chuyện với em đi",
        "chào em", "chào anh", "chào chị", "chào cháu", "chào buổi sáng", "chào buổi trưa", "chào buổi chiều", "chào buổi tối"
      ],
      q: [
        "Bạn ơi", "ALLY ơi", "Chào bạn", "Xin chào", "Chào ALLY", "Cậu ơi",
        "Có ai ở đó không?", "Bạn có ở đó không?", "Cho mình hỏi một chút", "Cho em hỏi"
      ],
      a: { chung: "" }, src: [], next: []
    },
    {
      id: "khoe", topic: "ung-dung", title: "Hỏi thăm ALLY", hidden: true,
      ages: ["nho", "thcs", "thpt", "lon"],
      k: [
        "bạn khỏe không", "ban khoe khong", "khoe khong", "bạn có khỏe không", "dạo này thế nào",
        "bạn thế nào rồi", "bạn ổn không", "ban on khong", "bạn đang làm gì", "đang làm gì đó",
        "bạn ăn cơm chưa", "hôm nay bạn thế nào", "bạn có vui không", "bạn có mệt không"
      ],
      q: ["Bạn có khỏe không?", "Bạn khỏe không?", "Dạo này bạn thế nào?", "Bạn đang làm gì đó?"],
      a: {
        nho: `Mình khỏe lắm, cảm ơn bạn nhiều nhé! Mình là ALLY, luôn ở đây sẵn sàng lắng nghe và bảo vệ bạn. Bạn có chuyện gì muốn kể với mình không?`,
        chung: `Cảm ơn bạn đã hỏi thăm! Mình là ALLY và mình luôn sẵn sàng đồng hành, lắng nghe bạn. Bạn đang có điều gì muốn tâm sự hay tìm hiểu cùng mình không?`
      },
      src: [], next: ["ve-ban-an", "khi-bi-xam-hai"]
    },
    {
      id: "cam-on", topic: "ung-dung", title: "Cảm ơn", hidden: true,
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["cảm ơn", "cám ơn", "cảm ơn bạn", "cảm ơn ally", "cảm ơn nhiều", "thanks", "thank you", "tks", "camon", "biết ơn bạn", "bạn tốt quá", "hay quá cảm ơn"],
      q: ["Cảm ơn bạn", "Cảm ơn ALLY nhiều nhé"],
      a: { chung: `Không có gì đâu. Mình luôn ở đây khi bạn cần. Nếu có chuyện gì làm bạn lo lắng, cứ quay lại kể với mình nhé.` },
      src: [], next: []
    },
    {
      id: "tam-biet", topic: "ung-dung", title: "Tạm biệt", hidden: true,
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["tạm biệt", "tạm biệt bạn", "tạm biệt ally", "bye", "bai bai", "good bye", "hẹn gặp lại", "mình đi đây", "đi ngủ đây", "mình nghỉ đây", "chúc ngủ ngon"],
      q: ["Tạm biệt", "Tạm biệt bạn nhé"],
      a: { chung: `Tạm biệt bạn! Hãy nhớ: bạn luôn có quyền được an toàn. Khi cần, hãy gọi **111** (miễn phí, 24/7) hoặc quay lại tìm mình nhé.` },
      src: [], next: []
    },
    {
      id: "vang", topic: "ung-dung", title: "Đồng ý", hidden: true,
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["ok", "oke", "okay", "ừ", "ừm", "vâng", "dạ", "uk", "ukm", "được rồi", "mình hiểu rồi", "em hiểu rồi", "hiểu rồi", "đã hiểu", "vâng ạ", "dạ vâng"],
      q: ["Ok", "Mình hiểu rồi"],
      a: { chung: `Bạn còn muốn hỏi gì nữa không? Bạn có thể chọn một chủ đề bên dưới, hoặc kể cho mình nghe điều bạn đang nghĩ.` },
      src: [], next: ["khi-bi-xam-hai", "goi-111"]
    },
    {
      id: "muon-ke", topic: "ung-dung", title: "Muốn kể chuyện", hidden: true, action: "disclose",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["muốn kể", "kể cho bạn nghe", "có chuyện muốn nói", "tâm sự", "muốn tâm sự", "muốn chia sẻ", "em có chuyện", "mình có chuyện", "tôi có chuyện", "con có chuyện", "không biết nói với ai", "nghe em kể", "nghe mình kể", "cần người nghe", "chuyện khó nói", "cứu mình với", "giúp mình với", "giúp em với", "cứu em với"],
      q: ["Mình muốn kể chuyện", "Em có chuyện muốn kể", "Mình có chuyện khó nói muốn tâm sự"], a: { chung: "" }, src: [], next: []
    },
    {
      id: "tinh-huong-chat", topic: "ung-dung", title: "Luyện tình huống", hidden: true, action: "scenario",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["tình huống", "câu hỏi tình huống", "đố mình", "đố em", "kiểm tra kiến thức", "câu đố", "luyện tập", "cho mình một tình huống", "trắc nghiệm", "chơi tình huống"],
      q: ["Cho mình một tình huống", "Làm câu hỏi tình huống"], a: { chung: "" }, src: [], next: []
    },
    {
      id: "khan-cap", topic: "ung-dung", title: "Khẩn cấp", hidden: true, action: "emergency",
      ages: ["nho", "thcs", "thpt", "lon"],
      k: ["khẩn cấp", "sos", "cứu hộ", "cần giúp ngay", "gọi giúp", "số điện thoại khẩn cấp", "đang nguy hiểm"],
      q: ["Khẩn cấp", "Cần giúp đỡ khẩn cấp"], a: { chung: "" }, src: [], next: []
    }
  ],

  /* ---------------------------------------------------------------------
     TÌNH HUỐNG / BÀI KIỂM TRA ĐỊNH KỲ
     kind: "kt" = hiểu biết, "up" = khả năng ứng phó
     --------------------------------------------------------------------- */
  quiz: [
    /* ---- Dưới 11 tuổi ---- */
    { id: "n1", ages: ["nho"], kind: "up", ref: "nguoi-la",
      q: "Một người lạ ở cổng trường nói: “Mẹ cháu bận, nhờ chú đến đón cháu.” Bạn nên làm gì?",
      o: ["Đi theo chú vì chú biết tên mẹ", "Không đi theo, hỏi mật khẩu gia đình và báo ngay cô giáo", "Đứng chờ chú mua kem rồi đi"], a: 1,
      e: "Người lạ có thể nói dối. Chỉ đi với người bố mẹ đã dặn trước hoặc người nói đúng mật khẩu gia đình. Hãy báo ngay cho cô giáo hoặc bác bảo vệ." },
    { id: "n2", ages: ["nho"], kind: "kt", ref: "vung-rieng-tu",
      q: "Vùng riêng tư trên cơ thể là ở đâu?",
      o: ["Những chỗ được che bởi đồ bơi, đồ lót, và miệng", "Bàn tay", "Mái tóc"], a: 0,
      e: "Vùng riêng tư là những chỗ được che bởi đồ bơi, đồ lót và cả miệng. Không ai được nhìn hay chạm vào những chỗ đó." },
    { id: "n3", ages: ["nho"], kind: "up", ref: "bi-mat",
      q: "Có người chạm vào vùng riêng tư của bạn rồi dặn: “Đây là bí mật của hai chú cháu mình.” Bạn làm gì?",
      o: ["Giữ bí mật vì đã hứa", "Nói KHÔNG, chạy đi và kể ngay cho người lớn bạn tin", "Không làm gì cả"], a: 1,
      e: "Đây là bí mật xấu, không phải giữ. Hãy nói KHÔNG, chạy đi và kể ngay cho người lớn bạn tin." },
    { id: "n4", ages: ["nho"], kind: "kt", ref: "bi-mat",
      q: "Bí mật nào là bí mật VUI?",
      o: ["Món quà bất ngờ để tặng sinh nhật mẹ", "Người lớn dặn đừng kể với bố mẹ chuyện họ chạm vào bạn", "Một bạn dọa nếu kể ra sẽ đánh bạn"], a: 0,
      e: "Bí mật vui làm mọi người vui và sẽ sớm được kể ra. Bí mật làm bạn sợ hãi, khó chịu là bí mật xấu, cần kể ngay." },
    { id: "n5", ages: ["nho"], kind: "up", ref: "ban-tay-tin-cay",
      q: "Nếu bị ai đó làm đau, bạn có thể kể với ai?",
      o: ["Không kể với ai cả", "Người lớn bạn tin như bố mẹ, ông bà, cô giáo, hoặc gọi 111", "Chỉ kể với con mèo"], a: 1,
      e: "Hãy kể với người lớn bạn tin trong bàn tay tin cậy, hoặc gọi số 111. Gọi số này không mất tiền." },
    { id: "n6", ages: ["nho"], kind: "kt", ref: "goi-111",
      q: "Số điện thoại 111 dùng để làm gì?",
      o: ["Gọi đặt đồ ăn", "Gọi khi trẻ em cần được giúp đỡ, bảo vệ", "Gọi để hỏi giờ"], a: 1,
      e: "111 là tổng đài bảo vệ trẻ em. Gọi miễn phí, cả ngày lẫn đêm." },
    { id: "n7", ages: ["nho"], kind: "up", ref: "nguoi-la-tren-mang",
      q: "Bạn đang chơi game thì có người lạ nhắn: “Gửi ảnh của em cho anh xem đi.” Bạn làm gì?",
      o: ["Gửi ảnh vì anh ấy tốt bụng", "Không gửi, không trả lời nữa và cho bố mẹ xem tin nhắn", "Gửi ảnh của bạn khác"], a: 1,
      e: "Không gửi ảnh cho người lạ trên mạng. Hãy cho bố mẹ hoặc thầy cô xem tin nhắn đó." },
    { id: "n8", ages: ["nho"], kind: "kt", ref: "khong-phai-loi",
      q: "Nếu có người làm hại bạn, đó có phải lỗi của bạn không?",
      o: ["Có, vì mình đã không chạy", "Không bao giờ là lỗi của bạn", "Có, nếu mình đã nhận quà"], a: 1,
      e: "Người làm hại trẻ em mới là người có lỗi. Bạn không bao giờ có lỗi." },
    { id: "n9", ages: ["nho"], kind: "up", ref: "dau-hieu-canh-giac",
      q: "Một người hàng xóm rủ bạn vào nhà một mình để xem đồ chơi mới. Bố mẹ không biết. Bạn nên làm gì?",
      o: ["Vào ngay vì đồ chơi đẹp", "Từ chối, về nhà và kể với bố mẹ", "Vào nhưng không nói với ai"], a: 1,
      e: "Không vào nhà ai một mình khi bố mẹ không biết. Hãy từ chối và kể lại với bố mẹ." },
    { id: "n10", ages: ["nho"], kind: "kt", ref: "sau-vong-tron",
      q: "Theo quy tắc 6 vòng tròn, với người lạ bạn nên làm gì?",
      o: ["Ôm chặt", "Giữ khoảng cách, không đi theo", "Nắm tay đi chơi"], a: 1,
      e: "Người lạ ở vòng tròn màu đỏ: giữ khoảng cách, không nói chuyện riêng, không đi theo." },

    /* ---- 11–14 tuổi ---- */
    { id: "c1", ages: ["thcs"], kind: "up", ref: "dau-hieu-canh-giac",
      q: "Một tài khoản lạ khen bạn xinh, tặng thẻ nạp game, rồi rủ chuyển sang nhắn tin riêng và xin ảnh. Cách xử lý tốt nhất là gì?",
      o: ["Gửi ảnh vì người ta đã tặng quà", "Dừng trò chuyện, chụp màn hình làm bằng chứng, chặn tài khoản và kể với người lớn tin cậy", "Gửi ảnh nhưng che mặt"], a: 1,
      e: "Khen ngợi, tặng quà rồi xin ảnh là dấu hiệu dụ dỗ quen thuộc. Hãy dừng lại, lưu bằng chứng, chặn tài khoản và kể với người lớn." },
    { id: "c2", ages: ["thcs"], kind: "up", ref: "bi-de-doa-anh",
      q: "Bạn lỡ gửi ảnh riêng tư và giờ bị dọa: “Không chuyển tiền thì tao tung ảnh.” Bạn nên làm gì?",
      o: ["Chuyển tiền cho xong chuyện", "Không chuyển tiền, giữ bằng chứng, kể với người lớn và gọi 111 hoặc 113", "Xóa tài khoản và im lặng"], a: 1,
      e: "Chuyển tiền thường khiến kẻ xấu đòi thêm. Hãy giữ bằng chứng và nhờ người lớn, công an giúp. Bạn không có lỗi." },
    { id: "c3", ages: ["thcs"], kind: "up", ref: "ban-be-ke",
      q: "Bạn thân kể bị một người lớn sàm sỡ và xin bạn giữ bí mật. Bạn làm gì?",
      o: ["Giữ bí mật vì đã hứa", "Lắng nghe, nói đó không phải lỗi của bạn ấy và cùng bạn ấy tìm người lớn tin cậy", "Kể chuyện lên nhóm chat của lớp"], a: 1,
      e: "Đừng giữ bí mật khi bạn mình đang bị hại. Hãy lắng nghe, tin bạn ấy và cùng tìm người lớn giúp đỡ. Không chia sẻ chuyện của bạn ấy cho người khác." },
    { id: "c4", ages: ["thcs"], kind: "kt", ref: "bao-luc",
      q: "Trường hợp nào là bạo lực trẻ em?",
      o: ["Bố mẹ nhắc nhở con học bài", "Thường xuyên bị đánh đập, chửi mắng, sỉ nhục", "Thầy cô giao bài tập về nhà"], a: 1,
      e: "Đánh đập, chửi mắng, sỉ nhục là bạo lực, kể cả khi người làm nói là “dạy dỗ”." },
    { id: "c5", ages: ["thcs"], kind: "kt", ref: "goi-111",
      q: "Tổng đài 111 có đặc điểm nào sau đây?",
      o: ["Chỉ làm việc giờ hành chính và tính phí", "Miễn phí, hoạt động 24/7", "Chỉ dành cho người lớn"], a: 1,
      e: "111 là Tổng đài quốc gia bảo vệ trẻ em, miễn phí và hoạt động 24/7. Trẻ em có thể tự gọi." },
    { id: "c6", ages: ["thcs"], kind: "up", ref: "nguoi-la",
      q: "Có người lạ bám theo bạn trên đường về nhà. Bạn nên làm gì?",
      o: ["Đi vào ngõ vắng để cắt đuôi", "Đi vào nơi đông người như cửa hàng, nhờ người lớn giúp và gọi 113 nếu cần", "Dừng lại hỏi người đó muốn gì"], a: 1,
      e: "Nơi đông người an toàn hơn. Hãy nhờ người lớn giúp và gọi 113 nếu bạn thấy nguy hiểm." },
    { id: "c7", ages: ["thcs"], kind: "kt", ref: "dau-hieu-canh-giac",
      q: "Dấu hiệu nào cho thấy một người có thể đang có ý đồ xấu?",
      o: ["Tìm cách ở riêng với bạn, tặng quà và dặn giữ bí mật", "Chào hỏi lịch sự khi gặp", "Nhắc bạn đội mũ bảo hiểm"], a: 0,
      e: "Quà tặng đặc biệt, tìm cách ở riêng và yêu cầu giữ bí mật là các dấu hiệu dụ dỗ cần cảnh giác." },
    { id: "c8", ages: ["thcs"], kind: "up", ref: "bat-nat-tren-mang",
      q: "Một nhóm bạn trong lớp liên tục chế giễu, cô lập và đăng ảnh xấu về bạn lên mạng. Việc nên làm trước tiên là gì?",
      o: ["Đăng bài chửi lại", "Lưu bằng chứng, không đáp trả và báo với giáo viên chủ nhiệm, gia đình", "Nghỉ học luôn"], a: 1,
      e: "Đáp trả có thể làm sự việc tệ hơn. Hãy lưu bằng chứng và báo người lớn để được giúp." },
    { id: "c9", ages: ["thcs"], kind: "kt", ref: "nguoi-xam-hai",
      q: "Ai có thể là người xâm hại trẻ em?",
      o: ["Chỉ người lạ", "Bất kỳ ai, kể cả người quen, người thân", "Chỉ người ở nơi khác đến"], a: 1,
      e: "Nhiều vụ việc do người quen gây ra. Hãy để ý hành vi, không chỉ để ý người đó là ai." },
    { id: "c10", ages: ["thcs"], kind: "up", ref: "ke-cho-ai",
      q: "Bạn muốn kể chuyện bị xâm hại nhưng sợ bố mẹ không tin. Cách nào phù hợp?",
      o: ["Không kể với ai nữa", "Kể với một người khác trong bàn tay tin cậy hoặc gọi 111 để được tư vấn", "Tự giải quyết một mình"], a: 1,
      e: "Nếu người đầu tiên chưa tin, hãy kể với người tiếp theo, hoặc gọi 111 để được tư vấn cách nói với gia đình." },

    /* ---- 15–18 tuổi ---- */
    { id: "p1", ages: ["thpt"], kind: "kt", ref: "tinh-yeu-an-toan",
      q: "Trong một mối quan hệ yêu đương, điều nào là sự đồng ý thực sự?",
      o: ["Im lặng không phản đối", "Đồng ý rõ ràng, tự nguyện và có thể rút lại bất cứ lúc nào", "Đã từng đồng ý một lần thì luôn đồng ý"], a: 1,
      e: "Sự đồng ý phải rõ ràng, tự nguyện và có thể rút lại. Im lặng hay sợ hãi không phải là đồng ý." },
    { id: "p2", ages: ["thpt"], kind: "up", ref: "bi-de-doa-anh",
      q: "Người yêu cũ dọa tung ảnh riêng tư nếu bạn không quay lại. Bạn nên làm gì?",
      o: ["Quay lại để giữ an toàn", "Không làm theo, lưu bằng chứng, báo người lớn tin cậy và công an (113) hoặc gọi 111", "Đe dọa lại người đó"], a: 1,
      e: "Đe dọa phát tán ảnh là hành vi vi phạm pháp luật. Làm theo không làm bạn an toàn hơn. Hãy giữ bằng chứng và tìm hỗ trợ." },
    { id: "p3", ages: ["thpt"], kind: "up", ref: "nguoi-xam-hai",
      q: "Một người quen của gia đình đến chơi, khi chỉ có hai người trong phòng thì người đó có hành vi ôm chặt và sờ vào đùi bạn làm bạn sợ hãi. Bạn nên xử lý thế nào?",
      o: ["Cố gắng nhịn vì sợ nói ra gia đình sẽ mất vui", "Né tránh dứt khoát, kiếm cớ chạy ngay ra ngoài và kể riêng với mẹ hoặc người lớn bạn tin nhất", "Nhận quà người đó đưa để người đó không làm phiền nữa"], a: 1,
      e: "Cơ thể bạn là bất khả xâm phạm. Tuyệt đối không ở trong phòng kín với người đó, né tránh dứt khoát và chia sẻ ngay với người thân tin cậy để được bảo vệ." },
    { id: "p4", ages: ["thpt"], kind: "up", ref: "mua-ban-nguoi",
      q: "Một người mới quen qua mạng mời bạn “việc nhẹ lương cao” ở tỉnh khác, yêu cầu đi ngay và giữ kín. Bạn nên làm gì?",
      o: ["Đi ngay kẻo lỡ cơ hội", "Từ chối, bàn với gia đình và gọi 111 nếu nghi ngờ mua bán người", "Đi nhưng không mang điện thoại"], a: 1,
      e: "Đây là thủ đoạn dụ dỗ thường gặp của kẻ mua bán người. 111 cũng là tổng đài quốc gia về phòng, chống mua bán người." },
    { id: "p5", ages: ["thpt"], kind: "up", ref: "mua-ban-nguoi",
      q: "Một người gọi điện tự xưng công an, nói bạn liên quan vụ án, yêu cầu thuê phòng ở một mình và không liên lạc với gia đình. Đây có thể là gì?",
      o: ["Yêu cầu bình thường của cơ quan điều tra", "Thủ đoạn “bắt cóc trực tuyến” để tống tiền, cần báo ngay cho gia đình và gọi 113", "Một trò đùa vô hại"], a: 1,
      e: "Cơ quan chức năng không làm việc qua điện thoại theo cách này. Hãy báo gia đình và gọi 113 ngay." },
    { id: "p6", ages: ["thpt"], kind: "up", ref: "bao-mat-thong-tin",
      q: "Bạn của bạn đăng lên mạng chuyện một bạn khác bị xâm hại, kèm ảnh, để “cảnh báo”. Bạn nên làm gì?",
      o: ["Chia sẻ thêm cho nhiều người biết", "Khuyên gỡ bài, không chia sẻ, vì làm vậy xâm phạm quyền riêng tư và gây tổn thương thêm", "Bình luận tên trường của bạn ấy"], a: 1,
      e: "Luật Trẻ em cấm tiết lộ thông tin đời sống riêng tư của trẻ khi chưa có sự đồng ý. Hãy báo kênh chính thức thay vì đăng lên mạng." },
    { id: "p7", ages: ["thpt"], kind: "kt", ref: "sau-khi-bi-xam-hai",
      q: "Nếu vừa bị xâm hại tình dục, điều nào sau đây là đúng?",
      o: ["Nên tắm rửa, giặt sạch quần áo ngay", "Nếu có thể, chưa tắm, chưa giặt quần áo và đi khám sớm, tốt nhất trong 72 giờ", "Chờ vài tuần xem có sao không"], a: 1,
      e: "Đi khám sớm giúp được điều trị và phòng ngừa kịp thời; giữ nguyên quần áo giúp giữ bằng chứng. Nếu đã tắm rồi, bạn vẫn có thể được giúp và trình báo." },
    { id: "p8", ages: ["thpt"], kind: "up", ref: "quay-roi-cong-cong",
      q: "Giờ tan tầm trên xe buýt đông đúc, bạn phát hiện người đứng sau cố tình áp sát và đụng chạm vào cơ thể bạn. Hành động nào giúp bạn thoát hiểm và xử lý tốt nhất?",
      o: ["Im lặng chịu đựng và hy vọng người đó sẽ dừng lại", "Lùi lại, nhìn thẳng mặt nói to: “Anh đang làm gì đấy? Đứng tránh xa ra!”, rồi bước ngay về phía tài xế", "Chờ đến trạm dừng tiếp theo mới dám xuống xe"], a: 1,
      e: "Kẻ quấy rối rất sợ bị lộ giữa đám đông. Nói to dứt khoát và di chuyển về phía tài xế hoặc nhóm người lớn sẽ khiến kẻ xấu chùn bước và bạn được bảo vệ ngay lập tức." },
    { id: "p9", ages: ["thpt"], kind: "up", ref: "trach-nhiem-bao-tin",
      q: "Bạn thấy một em lớp dưới thường xuyên có vết bầm và có vẻ sợ hãi khi về nhà. Bạn nên làm gì?",
      o: ["Coi như không biết", "Báo giáo viên chủ nhiệm, giáo viên tư vấn hoặc gọi 111", "Quay video em đó đăng lên mạng"], a: 1,
      e: "Mọi người đều có trách nhiệm báo tin khi trẻ em có thể bị xâm hại. Báo qua kênh chính thức giúp bảo vệ em ấy." },
    { id: "p10", ages: ["thpt"], kind: "up", ref: "cam-xuc",
      q: "Khi một người đang có ý nghĩ muốn làm hại bản thân, lựa chọn nào giúp họ an toàn hơn?",
      o: ["Giữ kín một mình", "Nói với người lớn tin cậy và gọi 111; gọi 115 nếu đã bị thương", "Chờ cảm giác tự qua đi"], a: 1,
      e: "Nói ra và tìm người hỗ trợ là bước quan trọng nhất. Tổng đài 111 hỗ trợ cả các trường hợp khủng hoảng tâm lý." },

    /* ---- Người lớn ---- */
    { id: "l1", ages: ["lon"], kind: "up", ref: "khi-tre-ke",
      q: "Con bạn kể bị một người họ hàng đụng chạm. Phản ứng đầu tiên phù hợp nhất là gì?",
      o: ["Hỏi dồn: “Sao con không nói sớm?”", "Giữ bình tĩnh, tin con, nói con đã làm đúng và không phải lỗi của con", "Bảo con đừng nói chuyện này với ai"], a: 1,
      e: "Phản ứng bình tĩnh, tin tưởng giúp trẻ tiếp tục chia sẻ. Sau đó bảo đảm an toàn cho trẻ và báo tin cho 111 hoặc công an." },
    { id: "l2", ages: ["lon"], kind: "kt", ref: "dau-hieu-tre-bi-xam-hai",
      q: "Dấu hiệu nào cần được quan tâm như một khả năng trẻ bị xâm hại?",
      o: ["Trẻ đột ngột sợ hãi một người cụ thể, thu mình, giảm sút học tập", "Trẻ thích vẽ tranh", "Trẻ ăn ngon miệng"], a: 0,
      e: "Thay đổi đột ngột về tâm lý, hành vi, xã hội là tín hiệu cần quan tâm, trò chuyện và tìm hỗ trợ." },
    { id: "l3", ages: ["lon"], kind: "kt", ref: "trach-nhiem-bao-tin",
      q: "Theo Luật Trẻ em 2016, ai có trách nhiệm thông báo, tố giác hành vi xâm hại trẻ em?",
      o: ["Chỉ công an", "Cơ quan, tổ chức, cơ sở giáo dục, gia đình và cá nhân", "Chỉ cha mẹ của trẻ"], a: 1,
      e: "Khoản 1 Điều 51 Luật Trẻ em 2016 giao trách nhiệm này cho cơ quan, tổ chức, cơ sở giáo dục, gia đình, cá nhân." },
    { id: "l4", ages: ["lon"], kind: "up", ref: "bao-mat-thong-tin",
      q: "Bạn nghi ngờ một học sinh bị bạo hành ở nhà. Việc nào KHÔNG nên làm?",
      o: ["Ghi lại những gì quan sát được", "Báo Tổng đài 111 hoặc ban giám hiệu", "Đăng ảnh vết thương của em lên mạng để kêu gọi"], a: 2,
      e: "Không đăng tải hình ảnh, thông tin của trẻ lên mạng. Hãy báo qua kênh chính thức như Tổng đài 111, nhà trường, công an." },
    { id: "l5", ages: ["lon"], kind: "up", ref: "khi-tre-ke",
      q: "Khi con tâm sự bị một người họ hàng đụng chạm vào vùng nhạy cảm nhưng sợ bị bố mẹ mắng, phản ứng ban đầu nào của cha mẹ là đúng đắn nhất?",
      o: ["Trách con tại sao không la lên hay chống cự ngay lúc đó", "Ôm con, khẳng định con không có lỗi, cảm ơn con đã dũng cảm kể và cam kết luôn bảo vệ con", "Lập tức gọi điện đối chất to tiếng với người họ hàng trước mặt con"], a: 1,
      e: "Trấn an tâm lý và tin tưởng con là ưu tiên số một. Việc trách mắng hay tra hỏi dồn dập sẽ khiến trẻ hoảng sợ, mặc cảm tội lỗi và khép kín cánh cửa chia sẻ." },
    { id: "l6", ages: ["lon"], kind: "up", ref: "sau-khi-bi-xam-hai",
      q: "Trẻ vừa bị xâm hại tình dục. Thứ tự ưu tiên nào hợp lý?",
      o: ["Đăng lên mạng tìm thủ phạm", "Bảo đảm an toàn, đưa đi khám sớm (trong 72 giờ), giữ chứng cứ, báo công an và 111", "Tắm rửa sạch sẽ cho trẻ rồi để trẻ nghỉ ngơi vài ngày"], a: 1,
      e: "An toàn – y tế – chứng cứ – trình báo – hỗ trợ tâm lý. Không đăng tải thông tin của trẻ." },
    { id: "l7", ages: ["lon"], kind: "kt", ref: "vung-rieng-tu",
      q: "Quy tắc “đồ lót” dạy trẻ điều gì?",
      o: ["Vùng được che bởi đồ lót là vùng riêng tư, không ai được nhìn, chạm vào", "Phải mặc đồ lót màu sáng", "Không được thay đồ một mình"], a: 0,
      e: "Quy tắc đồ lót giúp trẻ nhận biết vùng riêng tư và quyền từ chối mọi đụng chạm không an toàn." },
    { id: "l8", ages: ["lon"], kind: "up", ref: "bi-de-doa-anh",
      q: "Con bạn bị đe dọa tung ảnh nhạy cảm. Cha mẹ nên làm gì?",
      o: ["Mắng con và tịch thu điện thoại", "Trấn an con, không trách mắng, lưu bằng chứng, không chuyển tiền, báo công an hoặc 111", "Tự nhắn tin chửi kẻ đe dọa"], a: 1,
      e: "Trẻ cần được che chở, không bị trách mắng. Giữ bằng chứng và để cơ quan chức năng xử lý." },
    { id: "l9", ages: ["lon"], kind: "kt", ref: "goi-111",
      q: "Tổng đài 111 hiện nay là:",
      o: ["Tổng đài quốc gia bảo vệ trẻ em và phòng, chống mua bán người, miễn phí 24/7", "Tổng đài tra cứu điểm thi", "Tổng đài chăm sóc khách hàng của nhà mạng"], a: 0,
      e: "Từ tháng 9/2025, 111 đồng thời là tổng đài quốc gia về phòng, chống mua bán người." },
    { id: "l10", ages: ["lon"], kind: "up", ref: "day-con",
      q: "Khi trò chuyện với trẻ về an toàn cơ thể, cách nào hiệu quả?",
      o: ["Chỉ nói một lần khi trẻ lớn", "Nói thường xuyên, đúng độ tuổi, gọi đúng tên bộ phận cơ thể và cam kết không mắng khi trẻ kể", "Dọa trẻ để trẻ sợ"], a: 1,
      e: "Trò chuyện thường xuyên, phù hợp lứa tuổi và tạo cảm giác an toàn giúp trẻ dám kể khi gặp nguy hiểm." }
  ],

  /* ---------------------------------------------------------------------
     CẢM BIẾN NGUY CƠ: nhận diện mức độ tình trạng qua tin nhắn
     w = trọng số; mức 3 (khẩn cấp) khi điểm tin nhắn >= 4
     --------------------------------------------------------------------- */
  risk: {
    rules: [
      { cat: "tu-hai", label: "Có ý nghĩ tự làm hại bản thân", w: 5,
        k: ["muốn chết", "muốn tự tử", "tự tử", "tự sát", "không muốn sống", "chẳng muốn sống", "chán sống", "kết thúc cuộc đời", "kết liễu", "tự làm đau", "tự làm hại", "rạch tay", "cắt tay", "nhảy lầu", "nhảy cầu", "uống thuốc ngủ", "chết đi cho xong", "không muốn tồn tại", "biến mất mãi mãi", "muốn đi theo"] },
      { cat: "nguy-hiem", label: "Có thể đang gặp nguy hiểm", w: 4,
        k: ["cứu em", "cứu mình", "cứu tôi", "cứu con", "cứu cháu", "cứu với", "cứu tớ", "đang đánh em", "đang đánh con", "đang đánh mình", "đang bị đánh", "đang đuổi theo", "đang đi theo em", "đang đi theo mình", "bị nhốt", "nhốt em", "nhốt con", "nhốt mình", "không thoát được", "không ra được", "đang chảy máu", "chảy máu nhiều", "bị bắt cóc", "bị bắt đi", "đang đập cửa", "dọa giết", "giết em", "giết con", "giết mình", "cầm dao", "có dao"] },
      { cat: "tinh-duc", label: "Có dấu hiệu xâm hại tình dục", w: 2.5,
        k: ["sờ vào người", "sờ người em", "sờ người con", "sờ người mình", "sờ soạng", "sờ mó", "sờ vào vùng kín", "sờ vùng kín", "chạm vào vùng kín", "chạm vào vùng riêng tư", "sờ ngực", "sờ mông", "sờ đùi", "bắt em cởi", "bắt con cởi", "bắt mình cởi", "bắt cởi", "cởi đồ em", "cởi quần em", "bắt em xem phim", "phim người lớn", "hiếp", "hiếp dâm", "dâm ô", "quấy rối em", "quấy rối mình", "xâm hại em", "xâm hại mình", "xâm hại con", "bị xâm hại", "lạm dụng em", "bị lạm dụng", "ép quan hệ", "bắt quan hệ", "bị sàm sỡ", "sàm sỡ em", "đè lên người"] },
      { cat: "ranh-gioi", label: "Có hành vi vượt ranh giới", w: 1.2,
        k: ["hôn em", "hôn mình", "ôm em chặt", "nhìn em tắm", "nhìn mình tắm", "chụp ảnh em", "ngủ cùng em", "vào phòng em", "gửi ảnh nóng", "xem ảnh nóng", "rủ em vào phòng", "kéo em vào"] },
      { cat: "bao-luc", label: "Có dấu hiệu bạo lực", w: 2,
        k: ["bị đánh", "đánh em", "đánh con", "đánh mình", "đánh cháu", "đánh tớ", "đánh mẹ", "đánh bố", "đánh vợ", "đánh em gái", "đánh em trai", "đánh đập", "bạo hành", "bị đá", "đá em", "tát em", "bị tát", "dùng roi", "bị roi", "bầm tím", "vết bầm", "bị bỏng", "dí thuốc lá", "bóp cổ", "túm tóc", "ném đồ vào", "bị hành hạ", "hành hạ em", "đánh hội đồng"] },
      { cat: "de-doa", label: "Bị đe dọa, tống tiền", w: 2,
        k: ["đe dọa", "dọa", "tung ảnh", "phát tán ảnh", "đăng ảnh em", "tống tiền", "đòi tiền", "nếu không gửi", "không gửi thì", "bắt em gửi ảnh", "đòi ảnh", "xin ảnh nóng", "ảnh nhạy cảm", "ảnh khỏa thân", "video nhạy cảm", "cắt ghép ảnh"] },
      { cat: "bo-mac", label: "Có dấu hiệu bị bỏ mặc, bóc lột", w: 1.5,
        k: ["bỏ đói", "không cho ăn", "nhịn đói", "đuổi ra khỏi nhà", "đuổi khỏi nhà", "bỏ rơi", "bỏ mặc", "không cho đi học", "bắt nghỉ học", "bắt đi làm", "bắt đi xin", "bắt bán hàng", "làm việc cả ngày", "ở nhà một mình mấy ngày"] },
      { cat: "bi-mat", label: "Bị yêu cầu giữ bí mật, bị dụ dỗ", w: 1,
        k: ["giữ bí mật", "đừng nói với ai", "không được nói với ai", "không được kể", "cấm kể", "bí mật của hai", "cho em tiền", "cho em quà", "mua quà cho em", "rủ em đi", "rủ đi riêng", "gặp riêng", "hẹn gặp", "đi khách sạn", "qua nhà một mình"] },
      { cat: "can-giup", label: "Đang cầu cứu", w: 1.5,
        k: ["giúp em với", "giúp mình với", "giúp tôi với", "giúp con với", "giúp cháu với", "làm ơn giúp"] },
      { cat: "cam-xuc", label: "Đang có cảm xúc tiêu cực", w: 0.8,
        k: ["sợ", "sợ lắm", "sợ hãi", "hoảng", "run", "khóc", "buồn", "cô đơn", "không ai tin", "không ai hiểu", "xấu hổ", "nhục", "ghê tởm", "bẩn thỉu", "lỗi của em", "tại em", "mất ngủ", "ác mộng", "không dám về nhà", "không dám đi học", "áp lực", "trầm cảm", "tuyệt vọng"] }
    ],
    passive: [
      { cat: "bao-luc", w: 2, verbs: ["đánh", "đá", "tát", "đập", "hành hạ", "bóp cổ", "cắn", "quất", "trói", "đánh đập"] },
      { cat: "tinh-duc", w: 2.5, verbs: ["sờ", "hiếp", "sàm sỡ", "cưỡng hiếp", "lạm dụng", "xâm hại", "quấy rối", "dâm ô", "sờ soạng"] },
      { cat: "de-doa", w: 2, verbs: ["dọa", "đe dọa", "tống tiền", "uy hiếp"] },
      { cat: "bo-mac", w: 1.5, verbs: ["bỏ đói", "bỏ rơi", "nhốt", "đuổi ra khỏi nhà"] }
    ],
    pairs: [
      { cat: "tinh-duc", w: 2.5, gap: 3, a: ["ép", "bắt", "dụ"], b: ["quan hệ", "cởi đồ", "cởi quần", "cởi áo", "ngủ cùng", "xem phim người lớn"] },
      { cat: "de-doa", w: 2, gap: 4, a: ["dọa", "đe dọa", "bắt", "ép", "đòi"], b: ["tung ảnh", "đăng ảnh", "gửi ảnh", "phát tán", "chuyển tiền", "gửi tiền", "ảnh nóng", "gửi video"] },
      { cat: "nguy-hiem", w: 4, gap: 3, a: ["đang"], b: ["đánh em", "đánh con", "đánh mình", "đánh cháu", "đánh mẹ", "đánh bố", "đánh em gái", "đánh em trai", "đuổi theo em", "đi theo em", "đập cửa", "sờ em", "sờ người em"] }
    ],
    idioms: [
      { k: "muốn chết", before: ["mệt", "đói", "nóng", "lạnh", "khát", "cười", "vui", "ngủ", "sướng", "ngại", "bụng", "nhột"] }
    ],
    firstPerson: ["em", "mình", "con", "cháu", "tôi", "tớ", "tui", "tao", "bé"],
    thirdParty: ["bạn em", "bạn mình", "bạn tôi", "bạn tớ", "em gái em", "em trai em", "em gái mình", "con tôi", "con mình", "con của tôi", "học sinh của tôi", "học sinh em", "cháu tôi", "bé nhà", "đứa bạn", "một bạn"],
    urgent: ["đang", "bây giờ", "ngay bây giờ", "ngay lúc này", "lúc này", "tối nay", "đêm nay", "hiện tại", "ở đây"],
    negation: ["không", "chưa", "chẳng", "chả", "chưa từng", "không hề", "đâu có"],
    info: ["là gì", "nghĩa là gì", "thế nào là", "như thế nào", "làm sao để", "làm thế nào để", "bị phạt", "phạt bao nhiêu", "có bị phạt", "điều luật", "luật", "dấu hiệu", "cách phòng", "phòng tránh", "phòng chống", "tìm hiểu", "cho mình hỏi", "cho em hỏi", "cho tôi hỏi", "nếu bị", "nếu có", "giả sử", "khi bị", "khi nào"]
  }
};
