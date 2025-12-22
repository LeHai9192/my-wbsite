# Hướng dẫn Deploy lên Vercel

## Cách 1: Deploy qua GitHub (Khuyến nghị - Tự động)

### Bước 1: Kết nối GitHub với Vercel
1. Truy cập https://vercel.com/
2. Đăng nhập bằng GitHub account
3. Click **"Add New Project"**
4. Import repository `LeHai9192/my-wbsite`
5. Vercel sẽ tự động detect React project

### Bước 2: Cấu hình Build Settings
- **Framework Preset**: Create React App (tự động detect)
- **Root Directory**: `./` (mặc định)
- **Build Command**: `npm run build` (mặc định)
- **Output Directory**: `build` (mặc định)
- **Install Command**: `npm install` (mặc định)

### Bước 3: Cấu hình Environment Variables
Trong phần **Environment Variables**, thêm 3 biến:

```
REACT_APP_EMAILJS_SERVICE_ID = service_7voaaid
REACT_APP_EMAILJS_TEMPLATE_ID = template_x4w3fnq
REACT_APP_EMAILJS_PUBLIC_KEY = QlrzMrM6k1RoFJ-PY
```

**Lưu ý:** 
- Chọn **Production**, **Preview**, và **Development** cho tất cả 3 biến
- Click **Save**

### Bước 4: Deploy
1. Click **"Deploy"**
2. Vercel sẽ tự động:
   - Install dependencies
   - Build project
   - Deploy lên production
3. Sau khi deploy xong, bạn sẽ có URL: `https://your-project.vercel.app`

### Bước 5: Tự động Deploy (Tùy chọn)
- Mỗi khi push code lên GitHub nhánh `main`, Vercel sẽ tự động deploy
- Có thể cấu hình custom domain trong Settings → Domains

---

## Cách 2: Deploy qua Vercel CLI

### Bước 1: Cài đặt Vercel CLI
```bash
npm install -g vercel
```

### Bước 2: Login vào Vercel
```bash
vercel login
```

### Bước 3: Build project
```bash
npm run build
```

### Bước 4: Deploy
```bash
vercel
```

Lần đầu tiên sẽ hỏi:
- **Set up and deploy?** → Yes
- **Which scope?** → Chọn account của bạn
- **Link to existing project?** → No (lần đầu) hoặc Yes (nếu đã có project)
- **Project name?** → `my-wbsite` (hoặc tên bạn muốn)
- **Directory?** → `./` (mặc định)

### Bước 5: Cấu hình Environment Variables
```bash
vercel env add REACT_APP_EMAILJS_SERVICE_ID
# Nhập: service_7voaaid

vercel env add REACT_APP_EMAILJS_TEMPLATE_ID
# Nhập: template_x4w3fnq

vercel env add REACT_APP_EMAILJS_PUBLIC_KEY
# Nhập: QlrzMrM6k1RoFJ-PY
```

### Bước 6: Deploy production
```bash
vercel --prod
```

---

## Kiểm tra sau khi Deploy

1. **Kiểm tra website hoạt động:**
   - Truy cập URL được cung cấp bởi Vercel
   - Kiểm tra các trang và chức năng

2. **Kiểm tra Contact Form:**
   - Test submit form contact
   - Kiểm tra email có được gửi không

3. **Kiểm tra Console:**
   - Mở DevTools → Console
   - Kiểm tra không có lỗi

4. **Kiểm tra Environment Variables:**
   - Vào Vercel Dashboard → Project → Settings → Environment Variables
   - Đảm bảo 3 biến đã được cấu hình đúng

---

## Troubleshooting

### Lỗi: Environment variables không được load
- **Giải pháp:** 
  1. Vào Vercel Dashboard → Settings → Environment Variables
  2. Đảm bảo biến được set cho **Production**
  3. Redeploy project

### Lỗi: Build failed
- **Giải pháp:**
  1. Kiểm tra log trong Vercel Dashboard
  2. Đảm bảo `package.json` có đầy đủ dependencies
  3. Kiểm tra không có lỗi syntax trong code

### Lỗi: 404 trên các route
- **Giải pháp:**
  1. Tạo file `vercel.json` trong root:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

---

## Custom Domain (Tùy chọn)

1. Vào Vercel Dashboard → Project → Settings → Domains
2. Thêm domain của bạn
3. Cấu hình DNS theo hướng dẫn của Vercel
4. Chờ DNS propagate (có thể mất vài phút đến vài giờ)

---

## Lưu ý quan trọng

- ✅ File `.env` KHÔNG được commit lên GitHub (đã có trong .gitignore)
- ✅ Environment variables phải được cấu hình trên Vercel
- ✅ Mỗi lần thay đổi environment variables, cần redeploy
- ✅ Vercel tự động deploy khi push code lên GitHub (nếu đã kết nối)

