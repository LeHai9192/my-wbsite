# Hướng dẫn cấu hình EmailJS để nhận email từ form contact

## Bước 1: Đăng ký EmailJS
1. Truy cập https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí (có thể dùng Google/Github để đăng nhập nhanh)

## Bước 2: Tạo Email Service
1. Vào **Email Services** → **Add New Service**
2. Chọn email provider (Gmail, Outlook, etc.)
3. **QUAN TRỌNG cho Gmail:**
   - Click vào service Gmail đã tạo
   - Click **"Reconnect Account"** hoặc **"Edit"**
   - Đảm bảo chọn đầy đủ các quyền (scopes):
     - ✅ Send email on your behalf
     - ✅ Read email (nếu cần)
   - Xác nhận lại quyền truy cập
4. Lưu lại **Service ID**

**Lưu ý:** Nếu gặp lỗi 412, cần reconnect Gmail service với đầy đủ quyền.

## Bước 3: Tạo Email Template
1. Vào **Email Templates** → **Create New Template**
2. Thiết lập template với các biến sau:
   - **To Email**: Email nhận (ví dụ: info@codebridge.vn)
   - **From Name**: `{{from_name}}` (Tên người gửi)
   - **From Email**: Email của service (Gmail đã kết nối) - KHÔNG dùng email của user
   - **Reply To**: `{{from_email}}` ⭐ **QUAN TRỌNG** - Để có thể reply trực tiếp cho user
   - **Subject**: `お問い合わせ: {{from_name}}様より`
   - **Content**:
   ```
   お名前: {{from_name}}
   メールアドレス: {{from_email}}
   会社名: {{company}}
   
   お問い合わせ内容:
   {{message}}
   ```
3. Lưu lại **Template ID**

**Lưu ý về From Email:**
- **From Email** phải là email của service (Gmail đã kết nối), không thể dùng email của user
- **Reply To** nên set là `{{from_email}}` để khi reply email sẽ gửi trực tiếp cho user
- Một số email provider có thể không hỗ trợ Reply To, nhưng Gmail hỗ trợ tốt

## Bước 4: Lấy Public Key
1. Vào **Account** → **General**
2. Copy **Public Key**

## Bước 5: Cấu hình trong project
1. Tạo file `.env` trong thư mục root của project
2. Thêm các giá trị sau:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Restart dev server: `npm start`

## Lưu ý:
- File `.env` đã được thêm vào `.gitignore` để bảo mật
- Không commit file `.env` lên Git
- Trong production, cần cấu hình các biến môi trường trên hosting platform

