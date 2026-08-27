import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Liên Hệ",
  description: "Liên hệ Nhất Quán để được tư vấn, báo giá và hỗ trợ kỹ thuật dụng cụ Dynabrade.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="wrap pt-12 pb-9 border-b border-[var(--line)]">
        <div className="font-mono text-[var(--accent)] text-[0.78rem] tracking-widest flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-[var(--accent)] inline-block" />
          KẾT NỐI VỚI NHẤT QUÁN
        </div>
        <h1 className="font-display uppercase text-[2.4rem] mb-3">Liên Hệ</h1>
        <p className="text-[var(--muted)] max-w-[62ch] leading-relaxed text-[1.02rem]">
          Đội ngũ kỹ thuật của Nhất Quán sẵn sàng tư vấn lựa chọn dụng cụ khí nén Dynabrade phù
          hợp, báo giá và hỗ trợ sau bán hàng cho khách hàng trên toàn quốc.
        </p>
      </div>

      <div className="wrap py-12 grid md:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
        <div>
          <div className="grid gap-4 mb-8">
            <InfoCard title="Hotline tư vấn kỹ thuật" sub="T2 - T6: 08:00 - 17:00 · T7: 08:00 - 16:00">
              <a href="tel:0907811767" className="text-[0.92rem] font-semibold text-[var(--text)]">
                0907 811 767
              </a>
            </InfoCard>
            <InfoCard title="Email báo giá & hỗ trợ" sub="Phản hồi trong vòng 24 giờ làm việc">
              <a
                href="mailto:nhatquanjsc18@gmail.com"
                className="text-[0.92rem] font-semibold text-[var(--text)]"
              >
                nhatquanjsc18@gmail.com
              </a>
            </InfoCard>
            <InfoCard title="Văn phòng đại diện" sub="Liên hệ trước khi đến để được hỗ trợ tốt nhất">
              <p className="text-[0.92rem] font-semibold text-[var(--text)] m-0">
                10 Đường số 18A, Khu B, Bình Trưng, TP. Hồ Chí Minh
              </p>
            </InfoCard>
          </div>
          <div className="bg-[var(--surface2)] border border-[var(--line)] rounded-md px-6 py-5 text-[0.85rem] text-[var(--muted)] leading-relaxed">
            <b className="text-[var(--text)]">Đại lý & phân phối:</b> Nhất Quán là nhà phân phối
            chính hãng Dynabrade tại Việt Nam. Nếu bạn muốn trở thành đại lý hoặc cần báo giá số
            lượng lớn, hãy gửi thông tin qua form hoặc gọi trực tiếp hotline.
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

function InfoCard({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--line)] rounded-md px-5 py-4 flex gap-4 items-start">
      <div className="flex-none w-[42px] h-[42px] rounded-lg bg-[var(--accent-dim)]" />
      <div>
        <h4 className="font-display uppercase text-[0.92rem] mb-1 tracking-wide">{title}</h4>
        {children}
        <div className="text-[0.8rem] text-[var(--muted)] mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
