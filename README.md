# Dynabrade Việt Nam — Website Nhất Quán (Next.js)

Website bán hàng Dynabrade chính hãng tại Việt Nam, xây bằng Next.js (App Router), xuất ra
dạng **static export** (HTML/CSS/JS thuần) — chạy được trên bất kỳ hosting nào, kể cả gói web
hosting thường của Hostinger (không cần chạy Node.js server).

## Chạy thử ở máy local

```bash
npm install
npm run dev
```

Mở http://localhost:3000

## Build ra file tĩnh

```bash
npm run build
```

Kết quả nằm trong thư mục `out/` — đây chính là những gì cần upload lên hosting.

## Cấu trúc dữ liệu sản phẩm

- `data/catalog.json` — danh sách 860 sản phẩm (tên, giá, ảnh, danh mục), export từ site
  WordPress gốc.
- `data/specs-data.jsonl` — thông số kỹ thuật chi tiết theo mã REF.
- `public/wp-content/uploads/dynabrade-images/` — toàn bộ ảnh sản phẩm.

Muốn cập nhật dữ liệu sản phẩm mới, thay 2 file trong `data/` rồi build lại.

## Deploy lên Hostinger

### Cách 1 — Tự động qua GitHub Actions (khuyên dùng)

File `.github/workflows/deploy.yml` đã dựng sẵn: mỗi lần push code lên nhánh `main`, GitHub sẽ
tự build và upload thư mục `out/` lên Hostinger qua FTP.

Cần vào **Settings → Secrets and variables → Actions** của repo GitHub, thêm 4 secret sau
(lấy thông tin FTP trong hPanel Hostinger → Files → FTP Accounts):

| Tên secret | Giá trị |
|---|---|
| `FTP_SERVER` | Địa chỉ FTP, ví dụ `ftp.tenmien.com` |
| `FTP_USERNAME` | Tài khoản FTP |
| `FTP_PASSWORD` | Mật khẩu FTP |
| `FTP_SERVER_DIR` | Thư mục đích, thường là `/public_html/` |

Sau khi thêm đủ 4 secret, chỉ cần `git push` là site tự cập nhật.

### Cách 2 — Upload thủ công

1. Chạy `npm run build`
2. Vào hPanel Hostinger → **File Manager**
3. Xoá nội dung cũ trong `public_html/` (nếu có), upload toàn bộ nội dung bên trong thư mục
   `out/` vào `public_html/`

## Ghi chú

- Form Liên hệ và Đăng ký bảo hành hiện dùng `mailto:` (mở ứng dụng email của khách truy cập)
  vì site tĩnh không có backend riêng. Muốn form gửi thẳng về email công ty cần tích hợp thêm
  dịch vụ backend (Cloudflare Worker, Formspree...).
