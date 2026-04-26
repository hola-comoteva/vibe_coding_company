"use client";

import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "이름을 입력해 주세요.";
  if (!data.phone.trim()) {
    errors.phone = "연락처를 입력해 주세요.";
  } else if (!/^[0-9-]+$/.test(data.phone)) {
    errors.phone = "숫자와 하이픈(-)만 입력 가능합니다.";
  }
  if (!data.email.trim()) {
    errors.email = "이메일을 입력해 주세요.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }
  return errors;
}

const initialForm: FormData = { name: "", phone: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 gap-4">
        <div className="w-16 h-16 rounded-full bg-[#6366F1]/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#0F172A]">문의가 접수되었습니다.</h2>
        <p className="text-[#334155]">빠른 시일 내에 연락드리겠습니다.</p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="mt-4 text-sm text-[#6366F1] hover:underline"
        >
          다시 문의하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* 이름 */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[#0F172A] mb-1">
          이름 <span className="text-[#6366F1]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="홍길동"
          className={`w-full rounded-lg border px-4 py-3 text-[#334155] text-sm outline-none transition focus:ring-2 focus:ring-[#6366F1] ${
            errors.name ? "border-red-400 bg-red-50" : "border-[#E2E8F0] bg-white"
          }`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* 연락처 */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[#0F172A] mb-1">
          연락처 <span className="text-[#6366F1]">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="010-0000-0000"
          className={`w-full rounded-lg border px-4 py-3 text-[#334155] text-sm outline-none transition focus:ring-2 focus:ring-[#6366F1] ${
            errors.phone ? "border-red-400 bg-red-50" : "border-[#E2E8F0] bg-white"
          }`}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
      </div>

      {/* 이메일 */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-1">
          이메일 <span className="text-[#6366F1]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className={`w-full rounded-lg border px-4 py-3 text-[#334155] text-sm outline-none transition focus:ring-2 focus:ring-[#6366F1] ${
            errors.email ? "border-red-400 bg-red-50" : "border-[#E2E8F0] bg-white"
          }`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* 문의 내용 */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A] mb-1">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="문의하실 내용을 자유롭게 작성해 주세요."
          className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#334155] text-sm outline-none transition focus:ring-2 focus:ring-[#6366F1] resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[#6366F1] py-4 text-base font-semibold text-white hover:bg-[#4F46E5] active:scale-95 transition-all"
      >
        문의 보내기
      </button>
    </form>
  );
}
