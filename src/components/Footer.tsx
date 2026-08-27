import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] pt-12 pb-8">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_repeat(3,1fr)] gap-8 pb-8 border-b border-[var(--line)] mb-6">
          <div>
            <Link
              href="/"
              className="font-display font-bold text-[1.35rem] uppercase tracking-wide inline-block mb-3"
            >
              DYNA<span className="text-[var(--accent)]">BRADE</span>_VN
            </Link>
            <p className="text-[var(--muted)] text-[0.85rem] max-w-[32ch] leading-relaxed">
              Được phân phối chính thức bởi Nhất Quán — đối tác kỹ thuật cho ngành sơn sửa, gia
              công kim loại và hoàn thiện bề mặt tại Việt Nam.
            </p>
          </div>
          <div>
            <h6 className="font-mono text-[var(--muted)] text-[0.72rem] uppercase tracking-widest mb-4">
              Sản phẩm
            </h6>
            <ul className="list-none m-0 p-0 space-y-2 text-[0.85rem] text-[var(--muted)]">
              <li><Link href="/san-pham?cat=die-grinders">Máy mài góc</Link></li>
              <li><Link href="/san-pham?cat=sanders">Máy chà nhám lệch tâm</Link></li>
              <li><Link href="/san-pham?cat=sanders-concentric">Máy chà nhám đồng tâm</Link></li>
              <li><Link href="/san-pham?cat=belt-sanders">Máy mài băng</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-mono text-[var(--muted)] text-[0.72rem] uppercase tracking-widest mb-4">
              Công ty
            </h6>
            <ul className="list-none m-0 p-0 space-y-2 text-[0.85rem] text-[var(--muted)]">
              <li>Về Nhất Quán</li>
              <li><Link href="/dai-ly">Mạng lưới đại lý</Link></li>
              <li><Link href="/bao-hanh">Bảo hành & dịch vụ</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-mono text-[var(--muted)] text-[0.72rem] uppercase tracking-widest mb-4">
              Hỗ trợ
            </h6>
            <ul className="list-none m-0 p-0 space-y-2 text-[0.85rem] text-[var(--muted)]">
              <li><Link href="/lien-he">Yêu cầu báo giá</Link></li>
              <li><Link href="/lien-he">Liên hệ</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 text-[0.75rem] text-[var(--muted)]">
          <span>© Nhất Quán JSC — Đại lý phân phối chính hãng Dynabrade</span>
        </div>
      </div>
    </footer>
  );
}
