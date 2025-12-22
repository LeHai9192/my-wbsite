# Hướng dẫn Deploy lên Vercel

## ⚠️ QUAN TRỌNG: Cấu hình Environment Variables

**Nếu không cấu hình Environment Variables, contact form sẽ KHÔNG hoạt động!**

---

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

### Bước 3: Cấu hình Environment Variables (QUAN TRỌNG)

**⚠️ BẮT BUỘC:** Nếu không cấu hình, contact form sẽ KHÔNG hoạt động!

#### Cách thêm Environment Variables:

1. **Sau khi import project**, bạn sẽ thấy màn hình cấu hình
2. **Scroll xuống** phần **"Environment Variables"** (hoặc vào **Settings → Environment Variables** sau khi deploy)
3. **Click nút "Add"** hoặc **"Add New"** để thêm từng biến

#### Thêm biến thứ 1:
- **Name**: `REACT_APP_EMAILJS_SERVICE_ID`
- **Value**: `service_7voaaid`
- **Environment**: Chọn cả 3:
  - ✅ Production
  - ✅ Preview  
  - ✅ Development
- Click **"Add"** hoặc **"Save"**

#### Thêm biến thứ 2:
- **Name**: `REACT_APP_EMAILJS_TEMPLATE_ID`
- **Value**: `template_x4w3fnq`
- **Environment**: Chọn cả 3:
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- Click **"Add"** hoặc **"Save"**

#### Thêm biến thứ 3:
- **Name**: `REACT_APP_EMAILJS_PUBLIC_KEY`
- **Value**: `QlrzMrM6k1RoFJ-PY`
- **Environment**: Chọn cả 3:
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- Click **"Add"** hoặc **"Save"**

#### Sau khi thêm xong:
Bạn sẽ thấy danh sách 3 biến:
```
REACT_APP_EMAILJS_SERVICE_ID     [Production, Preview, Development]
REACT_APP_EMAILJS_TEMPLATE_ID   [Production, Preview, Development]
REACT_APP_EMAILJS_PUBLIC_KEY    [Production, Preview, Development]
```

**Lưu ý quan trọng:**
- ⚠️ Phải chọn **Production** để biến hoạt động trên production site
- ⚠️ Nếu đã deploy rồi mới thêm biến, cần **Redeploy** project
- ⚠️ Kiểm tra kỹ không có khoảng trắng thừa trong Value

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

### Bước 5: Cấu hình Environment Variables (QUAN TRỌNG)

**⚠️ BẮT BUỘC:** Nếu không cấu hình, contact form sẽ KHÔNG hoạt động!

Chạy các lệnh sau trong terminal:

```bash
# Thêm Service ID
vercel env add REACT_APP_EMAILJS_SERVICE_ID
# Khi hỏi "What's the value of REACT_APP_EMAILJS_SERVICE_ID?", nhập: service_7voaaid
# Khi hỏi "Add REACT_APP_EMAILJS_SERVICE_ID to which Environments?", chọn: Production, Preview, Development (chọn cả 3)

# Thêm Template ID
vercel env add REACT_APP_EMAILJS_TEMPLATE_ID
# Khi hỏi "What's the value of REACT_APP_EMAILJS_TEMPLATE_ID?", nhập: template_x4w3fnq
# Khi hỏi "Add REACT_APP_EMAILJS_TEMPLATE_ID to which Environments?", chọn: Production, Preview, Development (chọn cả 3)

# Thêm Public Key
vercel env add REACT_APP_EMAILJS_PUBLIC_KEY
# Khi hỏi "What's the value of REACT_APP_EMAILJS_PUBLIC_KEY?", nhập: QlrzMrM6k1RoFJ-PY
# Khi hỏi "Add REACT_APP_EMAILJS_PUBLIC_KEY to which Environments?", chọn: Production, Preview, Development (chọn cả 3)
```

**Hoặc cấu hình qua Vercel Dashboard:**
1. Vào https://vercel.com/dashboard
2. Chọn project của bạn
3. Vào **Settings** → **Environment Variables**
4. Thêm 3 biến như hướng dẫn ở trên

### Bước 6: Deploy production
```bash
vercel --prod
```

---

## Kiểm tra sau khi Deploy

### 1. Kiểm tra Environment Variables đã được cấu hình:
- Vào Vercel Dashboard → Chọn project → **Settings** → **Environment Variables**
- Đảm bảo thấy 3 biến:
  - ✅ `REACT_APP_EMAILJS_SERVICE_ID` = `service_7voaaid`
  - ✅ `REACT_APP_EMAILJS_TEMPLATE_ID` = `template_x4w3fnq`
  - ✅ `REACT_APP_EMAILJS_PUBLIC_KEY` = `QlrzMrM6k1RoFJ-PY`
- Đảm bảo cả 3 biến đều có **Production** được chọn

### 2. Kiểm tra website hoạt động:
- Truy cập URL được cung cấp bởi Vercel (ví dụ: `https://my-wbsite.vercel.app`)
- Kiểm tra các trang và chức năng
- Kiểm tra logo, favicon hiển thị đúng

### 3. Kiểm tra Contact Form:
- Scroll xuống phần Contact
- Điền thử form với thông tin test
- Click "送信" (Send)
- **Nếu thành công:** Sẽ thấy thông báo màu xanh "お問い合わせありがとうございます。メールを送信しました。"
- **Nếu lỗi:** Sẽ thấy thông báo màu đỏ, kiểm tra Console để xem lỗi

### 4. Kiểm tra Console (F12):
- Mở DevTools → Console
- Kiểm tra không có lỗi
- Nếu submit form thành công, sẽ thấy log: "✅ Form submitted successfully!"

### 5. Kiểm tra Email:
- Kiểm tra inbox của email đã cấu hình trong EmailJS template
- Email sẽ có subject: "お問い合わせ: [Tên người gửi]様より"

---

## Troubleshooting

### Lỗi: Environment variables không được load
- **Triệu chứng:** Contact form báo lỗi, Console hiển thị `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`
- **Nguyên nhân:** Environment variables chưa được cấu hình hoặc chưa chọn Production
- **Giải pháp:** 
  1. Vào Vercel Dashboard → Chọn project → **Settings** → **Environment Variables**
  2. Kiểm tra 3 biến đã được thêm chưa:
     - `REACT_APP_EMAILJS_SERVICE_ID`
     - `REACT_APP_EMAILJS_TEMPLATE_ID`
     - `REACT_APP_EMAILJS_PUBLIC_KEY`
  3. Nếu chưa có, thêm theo hướng dẫn ở trên
  4. Nếu đã có, kiểm tra:
     - ✅ Value đúng chưa (không có khoảng trắng thừa)
     - ✅ **Production** đã được chọn chưa
  5. **Redeploy project:**
     - Vào **Deployments** tab
     - Click vào deployment mới nhất
     - Click menu "..." → **Redeploy**
     - Hoặc push code mới lên GitHub để tự động redeploy

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

