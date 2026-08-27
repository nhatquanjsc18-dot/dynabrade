"use client";

import { useState, type FormEvent } from "react";

export default function WarrantyForm() {
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    model: "",
    serial: "",
    date: "",
    store: "",
    note: "",
  });

  function set<K extends keyof typeof fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Họ và tên: ${fields.name}`,
      `Số điện thoại: ${fields.phone}`,
      `Model máy / Mã sản phẩm: ${fields.model}`,
      `Số serial: ${fields.serial}`,
      `Ngày mua hàng: ${fields.date}`,
      `Nơi mua hàng: ${fields.store}`,
      `Mô tả tình trạng / ghi chú: ${fields.note}`,
    ].join("\n");
    window.location.href = `mailto:nhatquanjsc18@gmail.com?subject=${encodeURIComponent(
      `Đăng ký bảo hành - ${fields.name}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-[var(--surface)] border border-[var(--line)] rounded-md p-10 text-center">
        <div className="text-[2.2rem] mb-3">✅</div>
        <h3 className="font-display uppercase text-[1.15rem] mb-2.5">Đã mở ứng dụng email</h3>
        <p className="text-[var(--muted)] text-[0.9rem] leading-relaxed">
          Vui lòng bấm gửi trong ứng dụng email vừa mở. Cần hỗ trợ ngay? Gọi hotline{" "}
          <a href="tel:0907811767" className="text-[var(--accent)] font-semibold">
            0907 811 767
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--surface)] border border-[var(--line)] rounded-md p-8 md:sticky md:top-[6.5rem]"
    >
      <h3 className="font-display uppercase text-[1.15rem] mb-1.5">Đăng ký bảo hành</h3>
      <p className="text-[var(--muted)] text-[0.85rem] mb-6">
        Điền đầy đủ thông tin bên dưới, Nhất Quán sẽ xác nhận thời hạn bảo hành qua điện thoại
        hoặc email trong vòng 24 giờ làm việc.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Họ và tên">
          <input
            required
            value={fields.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Nguyễn Văn A"
            className={inputClass}
          />
        </Field>
        <Field label="Số điện thoại">
          <input
            required
            type="tel"
            value={fields.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="09xx xxx xxx"
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Model máy / Mã sản phẩm">
        <input
          required
          value={fields.model}
          onChange={(e) => set("model", e.target.value)}
          placeholder="Vd: 48335, DynaFile II..."
          className={inputClass}
        />
      </Field>
      <Field label="Số serial">
        <input
          value={fields.serial}
          onChange={(e) => set("serial", e.target.value)}
          placeholder="In trên tem nhãn/thân máy"
          className={inputClass}
        />
      </Field>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Ngày mua hàng">
          <input
            type="date"
            value={fields.date}
            onChange={(e) => set("date", e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Nơi mua hàng">
          <input
            value={fields.store}
            onChange={(e) => set("store", e.target.value)}
            placeholder="Nhất Quán / đại lý..."
            className={inputClass}
          />
        </Field>
      </div>
      <Field label="Mô tả tình trạng / ghi chú">
        <textarea
          rows={4}
          value={fields.note}
          onChange={(e) => set("note", e.target.value)}
          placeholder="Mô tả lỗi (nếu có), yêu cầu khác..."
          className={inputClass}
        />
      </Field>
      <button
        type="submit"
        className="bg-[var(--accent)] text-[#fff6ee] font-bold px-7 py-3.5 text-[0.85rem] uppercase tracking-wide rounded-[4px] w-full mt-2"
      >
        Gửi đăng ký bảo hành →
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
