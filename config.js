// ============================================================
//  CẤU HÌNH — thầy/cô chỉ cần sửa file này
// ============================================================

// 1) Dán đoạn firebaseConfig lấy từ Firebase Console
//    (Project settings → Your apps → Web app → SDK setup and configuration)
export const firebaseConfig = {
  apiKey: "AIzaSyDCkznEHt5Nj5BqX2XFMVxGi1AItgpn6MY",
  authDomain: "binh-chon-20-10.firebaseapp.com",
  projectId: "binh-chon-20-10",
  storageBucket: "binh-chon-20-10.firebasestorage.app",
  messagingSenderId: "281736673388",
  appId: "1:281736673388:web:44df5455dc2a55ac7e8049",
  measurementId: "G-4VK44P4S8F"
};

// 2) Thông tin hiển thị
export const SU_KIEN = {
  truong: "Trường Tiểu học Newton Goldmark",
  tieuDe: "Ai rực rỡ nhất đêm nay?",

  // Tiêu đề trên màn LED (2 dòng)
  tieuDeLED1: "WHO IS AURA OF GLAMOUR?",
  tieuDeLED2: "AI RỰC RỠ NHẤT ĐÊM NAY?",

  // Các dòng chữ trên màn công bố người đạt giải (tên người thắng hiện ngay bên dưới)
  congBo: ["THE WINNER", "AURA OF GLAMOUR", "VẺ ĐẸP KIÊU SA"],
  dip: "Mừng ngày Phụ nữ Việt Nam 20/10",

  // Để trống: mã QR tự trỏ tới trang bình chọn cùng thư mục.
  // Nếu dùng link rút gọn (vd. bit.ly/...), dán vào đây để QR và chữ dưới QR dùng link đó.
  linkBinhChon: ""
};

// 3) Danh sách tổ/khối: dùng cho các nút trên màn LED và ô chọn ở trang quản trị
export const TO_KHOI = [
  "Khối 1", "Khối 2", "Khối 3", "Khối 4", "Khối 5",
  "Tổ Tiếng Anh", "Tổ Năng Khiếu", "BGH-Đào Tạo", "Hành Chính"
];
