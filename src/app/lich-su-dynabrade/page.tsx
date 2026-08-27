import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch Sử Dynabrade",
  description:
    "Hơn 50 năm chế tạo dụng cụ khí nén tại Mỹ — hành trình phát triển của thương hiệu Dynabrade.",
};

const TIMELINE = [
  {
    year: "1969",
    title: "Thành lập tại Clarence, New York",
    desc: "Dynabrade Inc. được thành lập với sứ mệnh chế tạo dụng cụ khí nén cầm tay chính xác, bền bỉ cho ngành công nghiệp Mỹ.",
  },
  {
    year: "1970s–1980s",
    title: "Mở rộng dòng sản phẩm",
    desc: "Phát triển các dòng máy mài, máy chà nhám, máy đánh bóng khí nén phục vụ ngành gia công kim loại và sơn sửa ô tô.",
  },
  {
    year: "1990s–2000s",
    title: "Vươn ra thị trường quốc tế",
    desc: "Thành lập các công ty con tại châu Âu, Ấn Độ và mạng lưới phân phối toàn cầu, phục vụ khách hàng tại hơn 100 quốc gia.",
  },
  {
    year: "Hiện nay",
    title: "Tiêu chuẩn công nghiệp toàn cầu",
    desc: "Dynabrade là thương hiệu dụng cụ khí nén hàng đầu được tin dùng trong ngành hàng không, ô tô, đóng tàu và sản xuất công nghiệp trên toàn thế giới.",
  },
];

export default function HistoryPage() {
  return (
    <div>
      <section className="wrap pt-14 pb-10 border-b border-[var(--line)]">
        <div className="font-mono text-[var(--accent)] text-[0.78rem] tracking-widest flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-[var(--accent)] inline-block" />
          SINCE 1969 — MADE IN USA
        </div>
        <h1 className="font-display uppercase text-[2.4rem] mb-4 max-w-[24ch] text-balance">
          Hơn 50 Năm Chế Tạo Dụng Cụ Khí Nén Chính Xác
        </h1>
        <p className="text-[var(--muted)] max-w-[70ch] leading-relaxed text-[1.02rem]">
          Từ một xưởng chế tạo nhỏ tại New York, Dynabrade đã trở thành thương hiệu dụng cụ khí
          nén được tin dùng trên toàn cầu, đồng hành cùng những ngành công nghiệp đòi hỏi độ chính
          xác cao nhất.
        </p>
      </section>

      <section className="wrap py-14 border-b border-[var(--line)]">
        <div className="grid gap-8">
          {TIMELINE.map((t) => (
            <div key={t.year} className="grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-8 items-start">
              <div className="font-display uppercase text-[1.3rem] text-[var(--accent)]">
                {t.year}
              </div>
              <div>
                <h3 className="font-display uppercase text-[1.1rem] mb-2">{t.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed text-[0.92rem] max-w-[65ch] m-0">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap py-14">
        <div className="bg-[var(--surface2)] rounded-xl px-8 py-10">
          <h3 className="font-display uppercase text-[1.3rem] mb-2.5">
            Dynabrade Chính Hãng Tại Việt Nam
          </h3>
          <p className="text-[var(--muted)] max-w-[70ch] leading-relaxed mb-6">
            Nhất Quán là nhà phân phối chính thức của Dynabrade tại Việt Nam, mang di sản hơn 50
            năm chế tạo dụng cụ khí nén Mỹ đến với ngành sơn sửa ô tô, hàng không và gia công kim
            loại trong nước.
          </p>
          <Link
            href="/san-pham"
            className="inline-block bg-[var(--accent)] text-[#fff6ee] font-bold px-6 py-3.5 text-[0.85rem] uppercase tracking-wide rounded-[3px]"
          >
            Xem catalogue sản phẩm →
          </Link>
        </div>
      </section>
    </div>
  );
}
