"use client";

import { useState, type FormEvent } from "react";
import siteConfig from "../../data/site.json";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsAccessKey,
          subject: `Yêu cầu tư vấn từ website - ${name}`,
          from_name: "Website Nhất Quán",
          name,
          phone,
          company,
          message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-[var(--surface)] border border-[var(--line)] rounded-md p-10 text-center">
        <div className="text-[2.2rem] mb-3">✅</div>
        <h3 className="font-display uppercase text-[1.15rem] mb-2.5">Đã gửi yêu cầu tư vấn!</h3>
        <p className="text-[var(--muted)] text-[0.9rem] leading-relaxed">
          Cảm ơn bạn đã liên hệ. Đội ngũ Nhất Quán sẽ phản hồi qua điện thoại hoặc email trong
          vòng 24 giờ làm việc.
          <br />
          Cần hỗ trợ ngay? Gọi hotline{" "}
          <a href="tel:0907811767" className="text-[var(--accent)] font-semibold">
            0907 811 767
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--surface)] border border-[var(--line)] rounded-md p-8">
      <h3 className="font-display uppercase text-[1.15rem] mb-1.5">Gửi yêu cầu tư vấn</h3>
      <p className="text-[var(--muted)] text-[0.85rem] mb-6">
        Điền thông tin bên dưới, Nhất Quán sẽ liên hệ lại để tư vấn sản phẩm và báo giá phù hợp.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Field label="Họ và tên">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nguyễn Văn A"
            className={inputClass}
          />
        </Field>
        <Field label="Số điện thoại">
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="09xx xxx xxx"
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Công ty / Đơn vị">
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Tên công ty (nếu có)"
          className={inputClass}
        />
      </Field>
      <Field label="Nội dung cần tư vấn">
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mã sản phẩm quan tâm, số lượng, ứng dụng..."
          className={inputClass}
        />
      </Field>
      {status === "error" && (
        <p className="text-[0.85rem] text-[var(--accent)] mb-3">
          Gửi không thành công, vui lòng thử lại hoặc gọi hotline 0907 811 767.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[var(--accent)] text-[#fff6ee] font-bold px-7 py-3.5 text-[0.85rem] uppercase tracking-wide rounded-[4px] w-full mt-2 disabled:opacity-60"
      >
        {status === "sending" ? "Đang gửi..." : "Gửi yêu cầu →"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full text-[0.95rem] px-4 py-3.5 border-[1.5px] border-[var(--line)] rounded-md bg-white text-[var(--text)] outline-none focus:border-[var(--accent)] resize-y";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="block text-[0.78rem] font-semibold uppercase tracking-wide text-[var(--muted)] mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
