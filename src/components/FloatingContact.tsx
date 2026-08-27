"use client";

import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-[1.4rem] bottom-[1.4rem] z-[200] flex flex-col items-end gap-3">
      <a
        href="tel:0907811767"
        aria-label="Gọi điện"
        title="Gọi điện: 0907.811.767"
        className="group relative w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(20,16,12,0.28)] bg-[var(--green)]"
      >
        <span className="fcb-ring absolute inset-0 rounded-full bg-inherit opacity-55 [animation:fcb-pulse_2.2s_ease-out_infinite]" />
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#fff6ee] relative z-10">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
        </svg>
        <span className="absolute right-[calc(100%+0.7rem)] top-1/2 -translate-y-1/2 translate-x-1.5 bg-[var(--text)] text-[#fff6ee] text-[0.78rem] font-semibold whitespace-nowrap px-3 py-2 rounded-md opacity-0 invisible pointer-events-none transition group-hover:opacity-100 group-hover:visible group-hover:translate-x-0">
          Gọi ngay: 0907.811.767
        </span>
      </a>
      <a
        href="mailto:nhatquanjsc18@gmail.com"
        aria-label="Gửi email"
        title="Gửi email"
        className="group relative w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(20,16,12,0.28)] bg-[var(--accent)]"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#fff6ee] relative z-10">
          <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.24L19.8 6H4.2ZM20 8.16l-7.5 6-7.5-6V18h15V8.16Z" />
        </svg>
        <span className="absolute right-[calc(100%+0.7rem)] top-1/2 -translate-y-1/2 translate-x-1.5 bg-[var(--text)] text-[#fff6ee] text-[0.78rem] font-semibold whitespace-nowrap px-3 py-2 rounded-md opacity-0 invisible pointer-events-none transition group-hover:opacity-100 group-hover:visible group-hover:translate-x-0">
          Email: nhatquanjsc18@gmail.com
        </span>
      </a>
      <button
        type="button"
        aria-label="Lên đầu trang"
        title="Lên đầu trang"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(20,16,12,0.28)] bg-[var(--text)] transition ${
          visible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#fff6ee]">
          <path d="M12 5.5 5.5 12l1.4 1.4 4.1-4.1V19h2V9.3l4.1 4.1L18.5 12z" />
        </svg>
      </button>
    </div>
  );
}
