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
        aria-label="Gọi điện: 0907 811 767"
        title="Gọi điện: 0907 811 767"
        className="group relative flex items-center gap-2.5 h-[52px] pl-3.5 pr-5 rounded-full shadow-[0_6px_20px_rgba(20,16,12,0.28)]"
        style={{ background: "linear-gradient(135deg, #ff8a3d, var(--accent))" }}
      >
        <span className="fcb-ring absolute inset-0 rounded-full bg-inherit opacity-55 [animation:fcb-pulse_2.2s_ease-out_infinite]" />
        <span className="fcb-phone-icon relative z-10 flex items-center justify-center w-[26px] h-[26px] flex-none">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
          </svg>
        </span>
        <span className="relative z-10 text-white font-bold text-[0.95rem] tracking-wide whitespace-nowrap">
          0907 811 767
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
