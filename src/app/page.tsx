import Link from "next/link";
import { getAllProducts, getCategories, getTotalProductCount, getCategoryCount } from "@/lib/data";

const INDUSTRIES = [
  { label: "Gia công kim loại", href: "/san-pham?cat=grinders", img: "/wp-content/uploads/dynabrade-images/metalworking.jpg" },
  { label: "Gỗ & nội thất", href: "/san-pham?cat=sanders", img: "/wp-content/uploads/dynabrade-images/woodworking.jpg" },
  { label: "Hàng không", href: "/san-pham?cat=die-grinders", img: "/wp-content/uploads/dynabrade-images/aerospace.jpg" },
  { label: "Robot & tự động hóa", href: "/san-pham?cat=die-grinders", img: "/wp-content/uploads/dynabrade-images/robotic.jpg" },
  { label: "Năng lượng gió", href: "/san-pham?cat=grinders", img: "/wp-content/uploads/dynabrade-images/wind-energy.jpg" },
  { label: "Sơn sửa ô tô", href: "/san-pham?cat=polishers", img: "/wp-content/uploads/dynabrade-images/automotive-refinish.jpg" },
];

export default function HomePage() {
  const products = getAllProducts();
  const categories = getCategories();
  const totalProducts = getTotalProductCount();
  const catCount = getCategoryCount();

  const heroProduct =
    products.find((p) => p.ref === "58455") ?? products[0];

  return (
    <>
      <section className="relative py-24 md:py-28 overflow-hidden border-b border-[var(--line)] bg-[#12100e]">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/dynabrade-images/dynabrade-metalworking.jpg')] bg-cover bg-[center_30%]" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(100deg, rgba(18,14,11,.96) 0%, rgba(18,14,11,.90) 30%, rgba(18,14,11,.62) 58%, rgba(18,14,11,.28) 100%), radial-gradient(ellipse at 82% 12%, rgba(255,138,76,.22), transparent 50%)",
          }}
        />
        <div className="wrap relative grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <div className="font-mono text-[#ff9d63] text-[0.78rem] tracking-widest flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[#ff9d63] inline-block" />
              SINCE 1969 — MADE IN USA
            </div>
            <h1 className="font-display uppercase font-bold text-[2.2rem] md:text-[3rem] leading-tight text-[#fff8f2] mb-5 text-balance">
              ĐỘ CHÍNH XÁC
              <br />
              KHÔNG <em className="not-italic text-[#ff9d63]">THỎA HIỆP</em>
            </h1>
            <p className="text-[1.05rem] text-[rgba(255,248,242,0.82)] max-w-[46ch] leading-relaxed mb-8">
              Dụng cụ khí nén chà nhám, mài, đánh bóng cho ngành sơn sửa ô tô, hàng không và gia
              công kim loại — độ bền công nghiệp, hiệu suất được kiểm chứng qua hàng triệu giờ
              vận hành.
            </p>
            <div className="flex flex-wrap gap-3 items-center mb-10">
              <Link
                href="/san-pham"
                className="bg-[var(--accent)] text-[#fff6ee] font-bold px-6 py-3.5 text-[0.85rem] uppercase tracking-wide rounded-[3px]"
              >
                Xem catalogue
              </Link>
              <Link
                href="/dai-ly"
                className="border border-[rgba(255,248,242,0.55)] text-[#fff8f2] px-6 py-3.5 text-[0.85rem] font-semibold rounded-[3px]"
              >
                Tìm đại lý gần bạn
              </Link>
            </div>
            <div className="flex gap-8 pt-6 border-t border-[rgba(255,248,242,0.18)]">
              <div>
                <b className="font-display text-[1.6rem] block text-[#fff8f2]">50+</b>
                <span className="text-[0.72rem] text-[rgba(255,248,242,0.6)] uppercase tracking-widest">
                  Năm chế tạo
                </span>
              </div>
              <div>
                <b className="font-display text-[1.6rem] block text-[#fff8f2]">{totalProducts}+</b>
                <span className="text-[0.72rem] text-[rgba(255,248,242,0.6)] uppercase tracking-widest">
                  Sản phẩm đang phân phối
                </span>
              </div>
              <div>
                <b className="font-display text-[1.6rem] block text-[#fff8f2]">{catCount}</b>
                <span className="text-[0.72rem] text-[rgba(255,248,242,0.6)] uppercase tracking-widest">
                  Nhóm dụng cụ chính hãng
                </span>
              </div>
            </div>
          </div>
          {heroProduct && (
            <div className="bg-[rgba(255,253,250,0.97)] backdrop-blur-sm border border-[rgba(255,248,242,0.3)] p-6 relative rounded-md shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
              <span className="absolute top-6 right-6 font-mono text-[0.68rem] text-[var(--accent)] border border-[var(--accent-dim)] px-2 py-1 rounded">
                SẢN PHẨM TIÊU BIỂU
              </span>
              <div className="aspect-square mb-5 bg-white rounded flex items-center justify-center p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroProduct.img} alt={heroProduct.name_vn} className="w-full h-full object-contain" />
              </div>
              <h4 className="font-display uppercase text-[1.05rem] tracking-wide mb-3">
                {heroProduct.name_vn}
              </h4>
              <div className="flex gap-5 mt-4 pt-4 border-t border-[var(--line)] flex-wrap">
                <div className="font-mono text-[0.72rem] text-[var(--muted)]">
                  <b className="block text-[var(--text)] text-[0.85rem]">
                    {heroProduct.price.toLocaleString("vi-VN")} USD
                  </b>
                  Giá tham khảo
                </div>
              </div>
              <div className="mt-5">
                <Link
                  href={`/san-pham/${heroProduct.slug}`}
                  className="inline-block bg-[var(--accent)] text-[#fff6ee] font-bold px-6 py-3.5 text-[0.85rem] uppercase tracking-wide rounded-[3px]"
                >
                  Xem chi tiết →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="wrap">
        <div className="flex justify-between items-end pt-14 pb-8 border-b border-[var(--line)] mb-10">
          <h2 className="font-display uppercase text-[1.9rem] m-0">Danh Mục Sản Phẩm</h2>
          <span className="font-mono text-[var(--muted)] text-[0.8rem]">{catCount} nhóm</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {categories.map((cat, i) => {
            const thumb = products.find((p) => p.category === cat.key)?.img;
            return (
              <Link
                key={cat.key}
                href={`/san-pham?cat=${cat.key}`}
                className="bg-[var(--surface)] border border-[var(--line)] rounded-lg overflow-hidden block transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] bg-white overflow-hidden">
                  {thumb && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={thumb} alt={cat.label} className="w-full h-full object-contain p-4" />
                  )}
                  <span className="absolute top-3.5 left-3.5 font-mono text-[var(--text)] bg-[rgba(239,232,220,0.92)] border border-[var(--line)] px-2 py-0.5 rounded text-[0.7rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="px-6 pt-5 pb-6 border-t border-[var(--line)]">
                  <h3 className="font-display uppercase text-[1.1rem] mb-1.5">{cat.label}</h3>
                  <p className="text-[var(--muted)] text-[0.85rem] leading-relaxed mb-3">
                    {cat.count} sản phẩm chính hãng Dynabrade.
                  </p>
                  <span className="text-[0.75rem] font-semibold uppercase tracking-wide">
                    Xem sản phẩm →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="industries" className="wrap pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.label}
              href={ind.href}
              className="relative block aspect-[4/3] rounded-lg overflow-hidden bg-cover bg-center p-6 flex flex-col justify-end transition hover:-translate-y-1"
              style={{ backgroundImage: `url('${ind.img}')` }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, rgba(42,36,32,0) 35%, rgba(42,36,32,.88) 100%)",
                }}
              />
              <h5 className="relative z-10 font-display uppercase text-[1.05rem] text-[#fff6ee] mb-1 tracking-wide">
                {ind.label}
              </h5>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
