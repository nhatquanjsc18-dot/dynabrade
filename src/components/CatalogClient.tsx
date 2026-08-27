"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Category, Product } from "@/lib/data";

function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/san-pham/${p.slug}`}
      className="bg-[var(--surface)] border border-[var(--line)] rounded-lg overflow-hidden block transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-square bg-white flex items-center justify-center p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.img} alt={p.name_vn} className="w-full h-full object-contain" loading="lazy" />
      </div>
      <div className="px-4 pt-3.5 pb-4">
        <span className="font-mono text-[0.68rem] text-[var(--muted)]">REF: {p.ref}</span>
        <h4 className="text-[0.92rem] leading-snug my-1.5 min-h-[2.5em]">{p.name_vn}</h4>
        <div className="text-[1.05rem] font-semibold text-[var(--accent)] mb-1.5">
          {p.price.toLocaleString("vi-VN")} USD
        </div>
        <span className="text-[0.76rem] font-bold uppercase tracking-wide">
          Liên hệ tư vấn →
        </span>
      </div>
    </Link>
  );
}

export default function CatalogClient({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") ?? categories[0]?.key ?? "";
  const [activeCat, setActiveCat] = useState(initialCat);
  const [query, setQuery] = useState("");

  const searching = query.trim().length > 0;

  const filtered = useMemo(() => {
    if (!searching) return [];
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) => p.name_vn.toLowerCase().includes(q) || p.ref.toLowerCase().includes(q)
    );
  }, [products, query, searching]);

  const activeCategory = categories.find((c) => c.key === activeCat);
  const activeProducts = products.filter((p) => p.category === activeCat);

  const subgroups = useMemo(() => {
    const groups = new Map<string, Product[]>();
    for (const p of activeProducts) {
      const key = p.subcat || "";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(p);
    }
    return groups;
  }, [activeProducts]);

  const hasSubcat = Array.from(subgroups.keys()).some((k) => k !== "");

  return (
    <div>
      <div className="pt-10 pb-8">
        <h1 className="font-display uppercase text-[2rem] mb-2.5">Danh Mục Sản Phẩm</h1>
        <p className="text-[var(--muted)] max-w-[60ch] leading-relaxed mb-6">
          Toàn bộ dụng cụ khí nén Dynabrade phân phối chính hãng bởi Nhất Quán tại Việt Nam —{" "}
          {products.length} sản phẩm, chia theo đúng nhóm của hãng.
        </p>
        <div className="relative max-w-[520px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute left-[0.95rem] top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <circle cx="11" cy="11" r="7" stroke="#7a6f62" strokeWidth="2" />
            <path d="M21 21l-4.3-4.3" stroke="#7a6f62" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm theo tên sản phẩm hoặc mã REF..."
            className="w-full text-[0.95rem] py-3.5 pl-11 pr-4 border-[1.5px] border-[var(--line)] rounded-lg bg-[var(--surface)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
          {searching && (
            <div className="text-[0.78rem] text-[var(--muted)] mt-2.5">
              {filtered.length} sản phẩm phù hợp với &quot;{query}&quot;
            </div>
          )}
        </div>
      </div>

      {searching ? (
        <div className="pb-16">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[var(--muted)]">
              Không tìm thấy sản phẩm phù hợp. Vui lòng thử từ khoá khác hoặc liên hệ Nhất Quán để
              được tư vấn.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((p) => (
                <ProductCard key={p.ref} p={p} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2.5 py-8 border-b border-[var(--line)]">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActiveCat(c.key)}
                className={`flex items-center gap-2 text-[0.82rem] font-semibold border rounded-full px-4 py-2.5 transition ${
                  c.key === activeCat
                    ? "bg-[var(--accent)] border-[var(--accent)] text-[#fff6ee]"
                    : "bg-[var(--surface)] border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
                }`}
              >
                {c.label}
                <span
                  className={`text-[0.7rem] rounded-full px-2 py-0.5 ${
                    c.key === activeCat
                      ? "bg-[rgba(255,255,255,0.25)] text-[#fff6ee]"
                      : "bg-[var(--surface2)] text-[var(--muted)]"
                  }`}
                >
                  {c.count}
                </span>
              </button>
            ))}
          </div>

          {activeCategory && (
            <div className="py-10 border-b border-[var(--line)]">
              <div className="flex justify-between items-baseline mb-6">
                <h2 className="font-display uppercase text-[1.3rem] m-0">{activeCategory.label}</h2>
                <span className="text-[var(--muted)] text-[0.75rem]">
                  {activeProducts.length} sản phẩm
                </span>
              </div>
              {hasSubcat ? (
                Array.from(subgroups.entries()).map(([sc, items]) => (
                  <div key={sc || "khac"} className="mb-7 last:mb-0">
                    <h3 className="font-mono uppercase tracking-wide text-[0.74rem] text-[var(--accent)] mb-3.5 pb-2 border-b border-dashed border-[var(--line)]">
                      {sc || "Khác"}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {items.map((p) => (
                        <ProductCard key={p.ref} p={p} />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {activeProducts.map((p) => (
                    <ProductCard key={p.ref} p={p} />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
