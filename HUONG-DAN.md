# Hướng dẫn cài đặt web bình chọn "Ai rực rỡ nhất đêm nay?"

Thời gian cài đặt: khoảng 30 phút. Tất cả đều miễn phí, không cần thẻ ngân hàng.

## Các file trong thư mục

| File | Dùng để |
|---|---|
| `index.html` | Trang bình chọn, các cô quét QR sẽ mở trang này trên điện thoại |
| `man-hinh.html` | Trang chiếu lên màn LED: mã QR, đồng hồ, bảng xếp hạng, màn công bố |
| `quan-tri.html` | Trang của Ban tổ chức: thêm ứng viên, chụp ảnh, mở/khóa, công bố |
| `config.js` | **File duy nhất cần sửa**: dán cấu hình Firebase, đổi tên sự kiện |
| `firestore.rules` | Luật bảo mật, dán vào Firebase |
| `firebase.js`, `style.css`, `assets/` | Không cần sửa |

---

## Bước 1. Tạo dự án Firebase

1. Vào https://console.firebase.google.com, đăng nhập bằng tài khoản Google.
2. Bấm **Create a project** (Tạo dự án), đặt tên ví dụ `binh-chon-2010`.
3. Ở bước Google Analytics, **tắt** đi cho gọn, rồi bấm Create.

## Bước 2. Bật đăng nhập

1. Menu trái: **Build → Authentication → Get started**.
2. Tab **Sign-in method**, bật 2 mục:
   - **Anonymous** (Ẩn danh): để mỗi điện thoại có một mã riêng, đảm bảo mỗi máy một phiếu.
   - **Email/Password**: để Ban tổ chức đăng nhập trang quản trị.
3. Tab **Users → Add user**: tạo tài khoản quản trị, ví dụ `btc2010@gmail.com` và một mật khẩu. Email này không cần là email thật đang dùng.

## Bước 3. Tạo cơ sở dữ liệu Firestore

1. Menu trái: **Build → Firestore Database → Create database**.
2. Chọn vị trí **asia-southeast1 (Singapore)** cho nhanh ở Việt Nam.
3. Chọn **Start in production mode**, bấm Create.
4. Vào tab **Rules**, xóa hết nội dung có sẵn, dán toàn bộ nội dung file `firestore.rules`.
5. **Sửa dòng** `"EMAIL_QUAN_TRI@gmail.com"` thành đúng email đã tạo ở Bước 2, bấm **Publish**.

## Bước 4. Lấy cấu hình và dán vào `config.js`

1. Bấm biểu tượng bánh răng → **Project settings**.
2. Kéo xuống mục **Your apps**, bấm biểu tượng web `</>`, đặt tên app (ví dụ `web`), **không** cần tick Firebase Hosting, bấm Register.
3. Firebase hiện một đoạn `const firebaseConfig = { ... }`. Sao chép phần trong ngoặc nhọn.
4. Mở `config.js` bằng Notepad hoặc VS Code, thay đoạn `firebaseConfig` mẫu bằng đoạn vừa chép. Lưu lại.

> `apiKey` của Firebase dùng cho web là thông tin công khai, để trong code là bình thường. Dữ liệu được bảo vệ bằng `firestore.rules`.

## Bước 5. Đưa web lên mạng bằng GitHub Pages

1. Đăng nhập https://github.com (tạo tài khoản nếu chưa có).
2. Bấm **New repository**, đặt tên ví dụ `binhchon`, chọn **Public**, bấm Create.
3. Bấm **uploading an existing file**, kéo **toàn bộ file và thư mục `assets`** vào (không kéo thư mục ngoài cùng), bấm Commit changes.
4. Vào **Settings → Pages**, mục Branch chọn `main` và `/ (root)`, bấm Save.
5. Đợi 1–2 phút, web có địa chỉ dạng: `https://ten-tai-khoan.github.io/binhchon/`

Các trang sẽ là:
- Bình chọn: `https://ten-tai-khoan.github.io/binhchon/`
- Màn LED: `https://ten-tai-khoan.github.io/binhchon/man-hinh.html`
- Quản trị: `https://ten-tai-khoan.github.io/binhchon/quan-tri.html`

## Bước 6. Cho phép tên miền

Firebase → **Authentication → Settings → Authorized domains → Add domain**, thêm `ten-tai-khoan.github.io`.

> Lưu ý: không mở các file bằng cách bấm đúp trên máy tính, vì trình duyệt sẽ chặn. Luôn mở qua địa chỉ GitHub Pages.

---

## Bước 7. Chạy thử (nên làm hôm thứ Năm)

1. Mở trang **quản trị**, đăng nhập bằng tài khoản ở Bước 2.
2. Thêm vài ứng viên thử (có thể dùng mục *Nhập nhanh nhiều người*).
3. Mở trang **màn LED** trên máy tính, bấm phím **F** để toàn màn hình.
4. Ở trang quản trị bấm **Mở bình chọn**, nhờ 3–4 đồng nghiệp quét QR và bầu thử.
5. Bấm **Công bố kết quả**, xem màn LED đếm 3–2–1 và bắn pháo hoa.
6. Xong thì bấm **Xóa toàn bộ phiếu** (gõ `XOA` để xác nhận) và xóa ứng viên thử.

## Kịch bản trong đêm sự kiện

| Thời điểm | Ban tổ chức làm gì |
|---|---|
| Đầu buổi | Chụp ảnh các cô vào chung kết ngay trên trang quản trị (nút **Chụp hoặc chọn ảnh**, ảnh tự cắt và nén) |
| Trước khi bầu | Màn LED hiện tường ảnh và QR "xem trước" để mọi người làm quen |
| Catwalk xong | Chọn thời gian (gợi ý 5 phút), bấm **Mở bình chọn**. Màn LED đổi sang QR bình chọn, đồng hồ và bảng xếp hạng nhảy trực tiếp |
| Hết giờ | Bình chọn tự khóa. Muốn giữ bí mật đến phút chót thì bỏ tick **Hiện bảng xếp hạng trực tiếp** |
| Công bố | MC ra hiệu, bấm **Công bố kết quả** (có thể bấm trên điện thoại) |

## Một số câu hỏi thường gặp

**Mỗi điện thoại một phiếu có chắc chắn không?**
Mỗi trình duyệt có một mã ẩn danh riêng và luật Firestore chỉ cho mỗi mã tạo đúng một phiếu, không sửa được. Người cố tình mở tab ẩn danh hoặc đổi trình duyệt vẫn có thể bầu thêm, nhưng với một hoạt động vui trong nội bộ thì mức này là đủ.

**Gói miễn phí có đủ cho 100 người không?**
Đủ thoải mái. Gói Spark cho 50.000 lượt đọc và 20.000 lượt ghi mỗi ngày; một đêm 100 người dùng chỉ vài nghìn lượt.

**Hai người bằng phiếu thì sao?**
Màn công bố sẽ hiện tất cả những người đồng hạng nhất.

**Có mạng yếu thì sao?**
Nên kiểm tra wifi ở sân trung tâm từ trước. Nếu wifi trường yếu, nhắc các cô dùng 4G. Trang bình chọn sẽ báo nếu gửi phiếu chưa thành công để các cô bấm lại.

**Muốn dùng link ngắn cho QR?**
Rút gọn link trang bình chọn (ví dụ bằng bit.ly), rồi dán vào `linkBinhChon` trong `config.js`.
