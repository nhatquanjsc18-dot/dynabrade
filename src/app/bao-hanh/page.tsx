import type { Metadata } from "next";
import WarrantyForm from "@/components/WarrantyForm";

export const metadata: Metadata = {
  title: "Chính Sách Bảo Hành & Đăng Ký Bảo Hành Dynabrade",
  description:
    "Chính sách bảo hành chính hãng Dynabrade: dụng cụ khí nén trọn đời, dụng cụ điện và máy hút bụi 2 năm. Đăng ký bảo hành trực tuyến cùng Nhất Quán.",
};

const WARRANTIES = [
  {
    term: "Bảo hành trọn đời có giới hạn",
    title: "Dụng cụ khí nén (Pneumatic Tools)",
    desc: "Mỗi dụng cụ khí nén Dynabrade được kiểm tra và chạy thử nghiệm hiệu suất tại nhà máy trước khi xuất xưởng. Nếu phát sinh lỗi hiệu suất do khiếm khuyết vật liệu hoặc gia công trong quá trình sử dụng và bảo trì bình thường, Dynabrade bảo hành trọn đời có giới hạn cho dụng cụ đó.",
  },
  {
    term: "2 năm",
    title: "Dòng Nitro Series™",
    desc: "Dynabrade bảo hành toàn bộ dụng cụ thuộc dòng Nitro Series™ chống lại lỗi vật liệu và gia công trong điều kiện sử dụng, bảo trì bình thường, thời hạn 2 năm kể từ ngày mua hàng.",
  },
  {
    term: "2 năm",
    title: "Dụng cụ điện Dynabrade",
    desc: "Toàn bộ dụng cụ điện do Dynabrade sản xuất được bảo hành chống lỗi vật liệu và gia công trong điều kiện sử dụng, bảo trì bình thường, thời hạn 2 năm kể từ ngày mua hàng.",
  },
  {
    term: "2 năm",
    title: "Máy hút bụi di động Dynabrade",
    desc: "Toàn bộ máy hút bụi di động (Portable Vacuums) do Dynabrade sản xuất được bảo hành chống lỗi vật liệu và gia công trong điều kiện sử dụng, bảo trì bình thường, thời hạn 2 năm kể từ ngày mua hàng.",
  },
];

export default function WarrantyPage() {
  return (
    <div>
      <div className="wrap pt-12 pb-9 border-b border-[var(--line)]">
        <div className="font-mono text-[var(--accent)] text-[0.78rem] tracking-widest flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-[var(--accent)] inline-block" />
          CAM KẾT CHẤT LƯỢNG DYNABRADE
        </div>
        <h1 className="font-display uppercase text-[2.4rem] mb-3">Chính Sách Bảo Hành</h1>
        <p className="text-[var(--muted)] max-w-[68ch] leading-relaxed text-[1.02rem] mb-3">
          Toàn bộ dụng cụ khí nén, dụng cụ điện và máy hút bụi Dynabrade phân phối chính hãng bởi
          Nhất Quán đều được áp dụng đúng chính sách bảo hành gốc từ nhà sản xuất Dynabrade Inc.
          (Hoa Kỳ), không qua trung gian rút ngắn thời hạn.
        </p>
        <p className="text-[0.8rem] text-[var(--muted)]">
          Nguồn chính sách:{" "}
          <a
            href="https://www17.dynabrade.com/warranties_seasia_en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] font-semibold"
          >
            dynabrade.com — Warranties (Southeast Asia)
          </a>
        </p>
      </div>

      <div className="wrap py-12 grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
        <div>
          <div className="grid gap-4 mb-6">
            {WARRANTIES.map((w) => (
              <div
                key={w.title}
                className="bg-[var(--surface)] border border-[var(--line)] rounded-md px-6 py-5"
              >
                <span className="inline-block font-mono text-[0.78rem] font-bold text-[var(--accent)] bg-[var(--accent-dim)] rounded-full px-3 py-1 mb-2">
                  {w.term}
                </span>
                <h4 className="font-display uppercase text-[0.98rem] mb-1.5">{w.title}</h4>
                <p className="text-[0.88rem] text-[var(--muted)] leading-relaxed m-0">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--surface2)] border border-[var(--line)] rounded-md px-6 py-5 text-[0.85rem] text-[var(--muted)] leading-relaxed mb-6">
            <b className="text-[var(--text)]">Điều kiện áp dụng & hồ sơ đăng ký:</b> bảo hành áp
            dụng cho lỗi phát sinh từ vật liệu/gia công trong điều kiện sử dụng và bảo trì bình
            thường theo đúng hướng dẫn của Dynabrade; không áp dụng cho hao mòn tự nhiên, hư hỏng
            do sử dụng sai mục đích, tai nạn, hoặc tự ý tháo lắp/sửa chữa bởi bên không được ủy
            quyền.
            <ul className="mt-2.5 pl-5 space-y-1">
              <li>Hóa đơn hoặc phiếu mua hàng từ Nhất Quán / đại lý ủy quyền</li>
              <li>Mã sản phẩm (Model) và số serial in trên tem nhãn/thân máy</li>
              <li>Mô tả tình trạng lỗi khi gửi bảo hành</li>
            </ul>
          </div>

          <div className="text-[0.78rem] text-[var(--muted)] border-t border-dashed border-[var(--line)] pt-4">
            Nội dung điều khoản bảo hành trên được dịch và tổng hợp chính xác từ trang chính sách
            bảo hành chính thức của Dynabrade tại{" "}
            <a
              href="https://www17.dynabrade.com/warranties_seasia_en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] font-semibold"
            >
              dynabrade.com/warranties_seasia_en.html
            </a>
            . Trường hợp có khác biệt, điều khoản gốc bằng tiếng Anh trên trang của Dynabrade Inc.
            có giá trị tham chiếu cuối cùng.
          </div>
        </div>

        <WarrantyForm />
      </div>
    </div>
  );
}
