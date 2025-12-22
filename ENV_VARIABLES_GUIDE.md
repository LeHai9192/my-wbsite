# Hướng dẫn chi tiết: Cấu hình Environment Variables trên Vercel

## 🎯 Mục đích
Cấu hình 3 biến môi trường để contact form hoạt động trên Vercel production.

---

## 📋 Danh sách 3 biến cần cấu hình:

| Tên Biến | Giá Trị | Mô Tả |
|----------|---------|-------|
| `REACT_APP_EMAILJS_SERVICE_ID` | `service_7voaaid` | ID của EmailJS Service |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | `template_x4w3fnq` | ID của EmailJS Template |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | `QlrzMrM6k1RoFJ-PY` | Public Key của EmailJS |

---

## 🔧 Cách 1: Cấu hình khi Deploy lần đầu

### Bước 1: Import Project
1. Truy cập https://vercel.com/
2. Click **"Add New Project"**
3. Import repository `LeHai9192/my-wbsite`

### Bước 2: Tìm phần Environment Variables
- Scroll xuống màn hình cấu hình
- Tìm phần **"Environment Variables"**
- Hoặc sau khi deploy, vào **Settings** → **Environment Variables**

### Bước 3: Thêm biến thứ 1
1. Click nút **"Add"** hoặc **"Add New"**
2. **Name**: Gõ `REACT_APP_EMAILJS_SERVICE_ID`
3. **Value**: Gõ `service_7voaaid`
4. **Environment**: Chọn cả 3 checkbox:
   - ☑️ Production
   - ☑️ Preview
   - ☑️ Development
5. Click **"Add"** hoặc **"Save"**

### Bước 4: Thêm biến thứ 2
1. Click nút **"Add"** hoặc **"Add New"** (lần nữa)
2. **Name**: Gõ `REACT_APP_EMAILJS_TEMPLATE_ID`
3. **Value**: Gõ `template_x4w3fnq`
4. **Environment**: Chọn cả 3 checkbox:
   - ☑️ Production
   - ☑️ Preview
   - ☑️ Development
5. Click **"Add"** hoặc **"Save"**

### Bước 5: Thêm biến thứ 3
1. Click nút **"Add"** hoặc **"Add New"** (lần nữa)
2. **Name**: Gõ `REACT_APP_EMAILJS_PUBLIC_KEY`
3. **Value**: Gõ `QlrzMrM6k1RoFJ-PY`
4. **Environment**: Chọn cả 3 checkbox:
   - ☑️ Production
   - ☑️ Preview
   - ☑️ Development
5. Click **"Add"** hoặc **"Save"**

### Bước 6: Kiểm tra lại
Bạn sẽ thấy danh sách 3 biến:
```
✅ REACT_APP_EMAILJS_SERVICE_ID     [Production, Preview, Development]
✅ REACT_APP_EMAILJS_TEMPLATE_ID   [Production, Preview, Development]
✅ REACT_APP_EMAILJS_PUBLIC_KEY    [Production, Preview, Development]
```

### Bước 7: Deploy
- Click nút **"Deploy"**
- Chờ Vercel build và deploy xong

---

## 🔧 Cách 2: Cấu hình sau khi đã Deploy

### Bước 1: Vào Settings
1. Vào https://vercel.com/dashboard
2. Click vào project `my-wbsite`
3. Click tab **"Settings"** (ở trên cùng)
4. Click **"Environment Variables"** (menu bên trái)

### Bước 2-5: Thêm 3 biến
Làm tương tự như Cách 1, Bước 3-5

### Bước 6: Redeploy
Sau khi thêm xong, cần **Redeploy** để áp dụng:
1. Vào tab **"Deployments"**
2. Click vào deployment mới nhất
3. Click menu **"..."** (3 chấm) ở góc phải
4. Click **"Redeploy"**
5. Chờ deploy xong

**Hoặc:** Push code mới lên GitHub để tự động redeploy

---

## ✅ Kiểm tra đã cấu hình đúng chưa

### Cách 1: Kiểm tra trên Vercel Dashboard
1. Vào **Settings** → **Environment Variables**
2. Đảm bảo thấy 3 biến với đúng tên và giá trị
3. Đảm bảo cả 3 biến đều có **Production** được chọn

### Cách 2: Test trên website
1. Truy cập website đã deploy
2. Scroll xuống phần Contact
3. Điền form và submit
4. **Nếu thành công:** Thấy thông báo xanh "お問い合わせありがとうございます。メールを送信しました。"
5. **Nếu lỗi:** Mở Console (F12) → sẽ thấy `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID` → nghĩa là chưa cấu hình đúng

---

## 🚨 Lỗi thường gặp

### Lỗi 1: Form vẫn hiển thị lỗi sau khi cấu hình
**Nguyên nhân:** Chưa redeploy sau khi thêm biến
**Giải pháp:** 
- Vào **Deployments** → Click **"Redeploy"**
- Hoặc push code mới lên GitHub

### Lỗi 2: Console hiển thị `YOUR_SERVICE_ID`
**Nguyên nhân:** Biến chưa được cấu hình hoặc chưa chọn Production
**Giải pháp:**
- Kiểm tra lại Settings → Environment Variables
- Đảm bảo **Production** được chọn
- Redeploy lại

### Lỗi 3: Biến có khoảng trắng thừa
**Nguyên nhân:** Copy/paste có thể có khoảng trắng
**Giải pháp:**
- Xóa biến cũ
- Thêm lại biến mới, gõ tay giá trị (không copy)

---

## 📝 Checklist trước khi Deploy

- [ ] Đã thêm `REACT_APP_EMAILJS_SERVICE_ID` = `service_7voaaid`
- [ ] Đã thêm `REACT_APP_EMAILJS_TEMPLATE_ID` = `template_x4w3fnq`
- [ ] Đã thêm `REACT_APP_EMAILJS_PUBLIC_KEY` = `QlrzMrM6k1RoFJ-PY`
- [ ] Cả 3 biến đều có **Production** được chọn
- [ ] Đã redeploy sau khi thêm biến (nếu thêm sau khi deploy)

---

## 💡 Tips

- **Luôn chọn cả 3 môi trường** (Production, Preview, Development) để đảm bảo hoạt động ở mọi nơi
- **Sau khi thêm/sửa biến, luôn redeploy** để áp dụng thay đổi
- **Kiểm tra kỹ giá trị** không có khoảng trắng thừa ở đầu/cuối
- **Test form ngay sau khi deploy** để đảm bảo hoạt động

