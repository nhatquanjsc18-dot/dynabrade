import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
  getSpecsForRef,
  specLabelVn,
} from "@/lib/data";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name_vn} - Mã REF ${product.ref}`,
    description: `${product.name_vn} (mã REF: ${product.ref}) chính hãng Dynabrade, phân phối bởi Nhất Quán tại Việt Nam.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const specs = getSpecsForRef(product.ref);
  const specEntries = Object.entries(specs);
  const related = getRelatedProducts(product, 4);
  const priceFmt = product.price.toLocaleString("vi-VN");

  return (
    <div>
      <div className="wrap text-[0.78rem] text-[var(--muted)] pt-6">
        <Link href="/">Trang chủ</Link>
        <span className="mx-1.5">/</span>
        <Link href="/san-pham">Sản phẩm</Link>
        <span className="mx-1.5">/</span>
        <Link href={`/san-pham?cat=${product.category}`}>{product.categoryLabel}</Link>
        <span className="mx-1.5">/</span>
        <span>{product.name_vn}</span>
      </div>

      <div className="wrap grid md:grid-cols-[1.05fr_1fr] gap-12 pt-6 pb-12 items-start">
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-md p-6 relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.img}
            alt={product.name_vn}
            className="rounded aspect-square w-full object-contain bg-[var(--surface)]"
          />
          <span className="absolute top-6 left-6 bg-[var(--bg)] border border-[var(--line)] font-mono text-[1rem] font-semibold px-3.5 py-2 rounded">
            REF: {product.ref}
          </span>
        </div>

        <div>
          <span className="font-mono text-[var(--accent)] text-[0.75rem] tracking-widest uppercase block mb-2.5">
            {product.categoryLabel}
          </span>
          <h1 className="font-display text-[2.1rem] leading-tight uppercase mb-2.5 text-balance">
            {product.name_vn}
          </h1>
          <p className="text-[var(--muted)] text-[0.95rem] leading-relaxed mb-5">
            {product.name_vn} (mã REF: {product.ref}) là dòng{" "}
            {product.categoryLabel.toLowerCase()} khí nén chính hãng Dynabrade.
          </p>

          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-md px-6 py-5 mb-6">
            <div className="flex items-baseline gap-2.5 mb-1">
              <span className="font-display text-[2rem] text-[var(--accent)]">{priceFmt} USD</span>
            </div>
            <p className="text-[0.78rem] text-[var(--muted)] mb-4">
              / chưa gồm thuế nhập khẩu (giá niêm yết hãng)
            </p>
            <p className="text-[0.85rem] text-[var(--muted)] mb-0">
              Giá bán tại Việt Nam theo báo giá chính thức từ Nhất Quán — vui lòng liên hệ để
              nhận báo giá VNĐ kèm chi phí lắp đặt, bảo hành.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap mb-6">
            <Link
              href="/lien-he"
              className="bg-[var(--accent)] text-[#fff6ee] font-bold px-6 py-3.5 text-[0.85rem] uppercase tracking-wide rounded-[3px]"
            >
              Liên hệ tư vấn ngay
            </Link>
            <a
              href={`mailto:nhatquanjsc18@gmail.com?subject=${encodeURIComponent(
                `Yêu cầu catalogue kỹ thuật - ${product.name_vn} (REF: ${product.ref})`
              )}`}
              className="border-[1.5px] border-[var(--text)] text-[var(--text)] font-bold px-6 py-3.5 text-[0.85rem] rounded-[3px]"
            >
              Tải catalogue kỹ thuật
            </a>
          </div>

          <div className="flex gap-5 text-[0.78rem] text-[var(--muted)] flex-wrap">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] inline-block" />
              Hàng chính hãng, có CO/CQ
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] inline-block" />
              Bảo hành theo tiêu chuẩn Dynabrade
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] inline-block" />
              Hỗ trợ kỹ thuật tận xưởng
            </span>
          </div>
        </div>
      </div>

      {specEntries.length > 0 && (
        <div className="wrap py-10 border-t border-[var(--line)]">
          <h2 className="font-display uppercase text-[1.3rem] mb-6 tracking-wide">
            Thông Số Kỹ Thuật
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)] rounded overflow-hidden">
            {specEntries.map(([k, v]) => (
              <div key={k} className="bg-[var(--surface)] px-5 py-3.5 flex justify-between text-[0.88rem]">
                <span className="text-[var(--muted)]">{specLabelVn(k)}</span>
                <span className="font-mono font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="wrap pb-14">
        <div className="bg-[var(--surface2)] rounded-lg px-8 py-8 grid sm:grid-cols-3 gap-6">
          <div>
            <h4 className="font-display uppercase text-[0.95rem] mb-1.5">Tư vấn đúng máy</h4>
            <p className="text-[0.85rem] text-[var(--muted)] leading-relaxed">
              Nhất Quán khảo sát công việc thực tế để đề xuất đúng model, tránh mua thừa hoặc
              thiếu công suất.
            </p>
          </div>
          <div>
            <h4 className="font-display uppercase text-[0.95rem] mb-1.5">Hàng có sẵn kho</h4>
            <p className="text-[0.85rem] text-[var(--muted)] leading-relaxed">
              Các model bán chạy được nhập sẵn, giao nhanh — không phải chờ đặt hàng từ Mỹ.
            </p>
          </div>
          <div>
            <h4 className="font-display uppercase text-[0.95rem] mb-1.5">Hậu mãi tận nơi</h4>
            <p className="text-[0.85rem] text-[var(--muted)] leading-relaxed">
              Đội kỹ thuật hỗ trợ lắp đặt, bảo trì và cung ứng phụ tùng chính hãng dài hạn.
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="wrap pb-14">
          <h2 className="font-display uppercase text-[1.3rem] mb-6">Sản Phẩm Cùng Danh Mục</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link
                key={r.ref}
                href={`/san-pham/${r.slug}`}
                className="bg-[var(--surface)] border border-[var(--line)] rounded-lg overflow-hidden block transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.img} alt={r.name_vn} className="w-full h-full object-contain" />
                </div>
                <div className="px-4 pt-3.5 pb-4">
                  <span className="font-mono text-[0.66rem] text-[var(--muted)]">REF: {r.ref}</span>
                  <h4 className="text-[0.86rem] leading-snug my-1.5 min-h-[2.3em]">{r.name_vn}</h4>
                  <div className="text-[0.95rem] font-semibold text-[var(--accent)]">
                    {r.price.toLocaleString("vi-VN")} USD
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
