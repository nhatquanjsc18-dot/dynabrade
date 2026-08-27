"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MEGA_COLUMNS: {
  title: string;
  items: { label: string; href: string; count: number }[];
}[] = [
  {
    title: "Máy Chà Nhám & Đánh Bóng",
    items: [
      { label: "Máy Chà Nhám Đồng Tâm", href: "/san-pham?cat=sanders-concentric", count: 226 },
      { label: "Máy Chà Nhám Lệch Tâm", href: "/san-pham?cat=sanders", count: 194 },
      { label: "Mài Băng", href: "/san-pham?cat=belt-sanders", count: 30 },
    ],
  },
  {
    title: "Mài & Cắt",
    items: [
      { label: "Mài Góc Khí Nén", href: "/san-pham?cat=die-grinders", count: 143 },
      { label: "Mài Đĩa & Cắt", href: "/san-pham?cat=grinders", count: 102 },
      { label: "Mài Bút Khí Nén", href: "/san-pham?cat=pencil-grinders", count: 34 },
    ],
  },
  {
    title: "Khoan – Giũa – Phay",
    items: [
      { label: "Khoan Khí Nén", href: "/san-pham?cat=drills", count: 64 },
      { label: "Giũa & Cưa Rung", href: "/san-pham?cat=reciprocating", count: 11 },
      { label: "Phay Khí Nén", href: "/san-pham?cat=routers", count: 9 },
    ],
  },
  {
    title: "Chuyên Dụng",
    items: [
      { label: "Cho Robot", href: "/san-pham?cat=robotic", count: 41 },
      { label: "Siết Vít", href: "/san-pham?cat=fastener", count: 3 },
      { label: "Xử Lý Bề Mặt", href: "/san-pham?cat=percussive", count: 3 },
    ],
  },
];

const NAV_LINKS = [
  { label: "Ứng dụng", href: "/#industries" },
  { label: "Đại lý", href: "/dai-ly" },
  { label: "Liên hệ", href: "/lien-he" },
  { label: "Bảo hành", href: "/bao-hanh" },
  { label: "Lịch sử Dynabrade", href: "/lich-su-dynabrade" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (groupRef.current && !groupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="border-b border-[var(--line)] bg-[color:rgba(239,232,220,0.92)] sticky top-0 z-10 backdrop-blur-sm">
      <div className="wrap flex justify-between py-2 text-[0.7rem] text-[var(--muted)] border-b border-[var(--line)] tracking-wide">
        <span>NHÀ PHÂN PHỐI CHÍNH HÃNG DYNABRADE TẠI VIỆT NAM</span>
        <span>HOTLINE TƯ VẤN KỸ THUẬT</span>
      </div>
      <div className="wrap flex items-center justify-between py-[1.1rem]">
        <Link href="/" className="font-display font-bold text-[1.35rem] uppercase tracking-wide">
          DYNA<span className="text-[var(--accent)]">BRADE</span>_VN
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[0.85rem] font-medium text-[var(--muted)]">
          <div className="relative flex items-center" ref={groupRef}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 cursor-pointer text-[var(--muted)] hover:text-[var(--text)]"
            >
              Sản phẩm
              <svg
                viewBox="0 0 12 12"
                fill="none"
                className={`w-2.5 h-2.5 transition-transform ${open ? "rotate-180" : ""}`}
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {open && (
              <div className="absolute top-[calc(100%+1.4rem)] left-1/2 -translate-x-1/2 w-[760px] max-w-[90vw] bg-[var(--surface)] text-[var(--text)] border border-[var(--line)] rounded-[10px] shadow-[0_24px_50px_rgba(20,16,12,0.28)] p-7 grid grid-cols-4 gap-6 z-50">
                {MEGA_COLUMNS.map((col) => (
                  <div key={col.title}>
                    <h6 className="font-mono uppercase tracking-wide text-[0.85rem] font-bold text-[var(--accent)] mb-3 pb-2 border-b border-dashed border-[var(--line)]">
                      {col.title}
                    </h6>
                    <ul className="list-none m-0 p-0 space-y-2.5">
                      {col.items.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            onClick={() => setOpen(false)}
                            className="flex justify-between gap-2 text-[0.83rem] font-medium hover:text-[var(--accent)]"
                          >
                            {it.label}
                            <span className="font-mono text-[0.68rem] font-normal text-[var(--muted)]">
                              {it.count}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-4 border-t border-[var(--line)] pt-4 mt-1 flex justify-end">
                  <Link
                    href="/san-pham"
                    onClick={() => setOpen(false)}
                    className="text-[0.78rem] font-bold uppercase tracking-wide text-[var(--accent)]"
                  >
                    Xem toàn bộ 860 sản phẩm →
                  </Link>
                </div>
              </div>
            )}
          </div>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[var(--text)]">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/lien-he"
          className="bg-[var(--accent)] text-[#fff6ee] font-bold px-5 py-2.5 text-[0.8rem] uppercase tracking-wide rounded-[2px]"
        >
          Yêu cầu báo giá
        </Link>
      </div>
    </header>
  );
}
