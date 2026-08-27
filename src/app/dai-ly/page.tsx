import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nhà Phân Phối Nhất Quán - Đại Lý Chính Hãng Dynabrade Việt Nam",
  description:
    "Nhất Quán là nhà phân phối chính hãng Dynabrade tại Việt Nam, cung cấp dụng cụ khí nén chất lượng cao cho ngành sơn sửa, gia công kim loại và hoàn thiện bề mặt.",
};

const CARDS = [
  {
    num: "01",
    title: "Nhà phân phối chính hãng",
    desc: "Nhất Quán là đơn vị phân phối chính thức của Dynabrade Inc. (Hoa Kỳ) tại Việt Nam, đảm bảo nguồn hàng chính hãng 100%, có đầy đủ chứng từ CO/CQ.",
  },
  {
    num: "02",
    title: "Tư vấn kỹ thuật chuyên sâu",
    desc: "Đội ngũ kỹ thuật khảo sát thực tế công việc để đề xuất đúng model, tránh đầu tư thừa hoặc thiếu công suất cho khách hàng.",
  },
  {
    num: "03",
    title: "Hàng có sẵn kho tại Việt Nam",
    desc: "Các model bán chạy được nhập sẵn, giao nhanh trong nước — không phải chờ đặt hàng trực tiếp từ Mỹ.",
  },
  {
    num: "04",
    title: "Bảo hành & hậu mãi tận nơi",
    desc: "Hỗ trợ lắp đặt, bảo trì, cung ứng phụ tùng chính hãng dài hạn theo đúng tiêu chuẩn bảo hành của Dynabrade.",
  },
];

const INDUSTRIES = [
  "Sơn sửa ô tô",
  "Gia công kim loại",
  "Hàng không",
  "Đóng tàu & hàng hải",
  "Gỗ & nội thất",
  "Robot & tự động hóa",
];

export default function DistributorPage() {
  return (
    <div>
      <section
        className="relative py-24 overflow-hidden border-b border-[var(--line)] bg-cover bg-[center_30%]"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(18,14,11,.92) 0%, rgba(18,14,11,.8) 40%, rgba(18,14,11,.4) 100%), url('/wp-content/uploads/dynabrade-images/nhatquan-authorized-distributor.jpg')",
        }}
      >
        <div className="wrap relative">
          <div className="font-mono text-[#ff9d63] text-[0.78rem] tracking-widest flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[#ff9d63] inline-block" />
            ĐỐI TÁC PHÂN PHỐI CHÍNH THỨC
          </div>
          <h1 className="font-display uppercase font-bold text-[2.7rem] leading-tight text-[#fff8f2] max-w-[18ch] mb-4">
            Nhà Phân Phối Nhất Quán
          </h1>
          <p className="text-[1.05rem] text-[rgba(255,248,242,0.85)] max-w-[58ch] leading-relaxed">
            Nhất Quán JSC là nhà phân phối chính hãng Dynabrade tại Việt Nam, mang di sản hơn 50
            năm chế tạo dụng cụ khí nén Mỹ đến với ngành công nghiệp trong nước.
          </p>
        </div>
      </section>

      <section className="wrap py-14 border-b border-[var(--line)]">
        <h2 className="font-display uppercase text-[1.7rem] mb-2.5">Vì Sao Chọn Nhất Quán</h2>
        <p className="text-[var(--muted)] max-w-[70ch] leading-relaxed mb-9">
          Là đối tác kỹ thuật, không chỉ đơn thuần bán hàng — Nhất Quán đồng hành cùng khách hàng
          từ khâu lựa chọn dụng cụ đến bảo hành, bảo trì lâu dài.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {CARDS.map((c) => (
            <div key={c.num} className="bg-[var(--surface)] border border-[var(--line)] rounded-md p-7">
              <span className="font-mono text-[var(--accent)] text-[0.85rem] mb-2.5 block">
                {c.num}
              </span>
              <h3 className="font-display uppercase text-[1.1rem] mb-2.5">{c.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed text-[0.92rem] m-0">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap py-14 border-b border-[var(--line)]">
        <h2 className="font-display uppercase text-[1.7rem] mb-6">Ngành Nghề Phục Vụ</h2>
        <div className="flex flex-wrap gap-3">
          {INDUSTRIES.map((ind) => (
            <span
              key={ind}
              className="bg-[var(--surface)] border border-[var(--line)] rounded-full px-5 py-2.5 text-[0.85rem] font-semibold"
            >
              {ind}
            </span>
          ))}
        </div>
      </section>

      <section className="wrap py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-[var(--text)] rounded-xl p-10 text-[#fff8f2]">
            <h3 className="font-display uppercase text-[1.3rem] mb-5">Thông Tin Liên Hệ</h3>
            <ContactRow label="Công ty">Công ty Cổ phần Công nghiệp Nhất Quán</ContactRow>
            <ContactRow label="Địa chỉ">
              10 Đường số 18A, Phường Bình Trưng (P. An Phú cũ), TP.HCM
            </ContactRow>
            <ContactRow label="Hotline">0907 811 767 – 0908 050 415</ContactRow>
            <ContactRow label="Email">nhatquanjsc18@gmail.com</ContactRow>
            <ContactRow label="Website">nhatquan.vn</ContactRow>
            <a
              href="/lien-he"
              className="inline-block mt-4 bg-[var(--accent)] text-[#fff6ee] font-bold px-6 py-3.5 text-[0.85rem] uppercase tracking-wide rounded-[3px]"
            >
              Liên hệ tư vấn ngay →
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--line)] aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wp-content/uploads/dynabrade-images/nhatquan-authorized-distributor.jpg"
              alt="Nhất Quán - Nhà phân phối chính hãng Dynabrade tại Việt Nam"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 mb-4 text-[0.92rem] text-[rgba(255,248,242,0.88)] leading-relaxed">
      <b className="text-[#ff9d63] font-mono text-[0.75rem] uppercase tracking-wide min-w-[5.5rem] flex-shrink-0">
        {label}
      </b>
      <span>{children}</span>
    </div>
  );
}
