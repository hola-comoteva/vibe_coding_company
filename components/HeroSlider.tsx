"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/hero-1.svg",
    alt: "바이브코딩 컨설팅 — AI 시대의 새로운 개발 방식",
    heading: "AI 시대의 새로운 개발 방식",
    subheading: "바이브코딩으로 아이디어를 현실로",
  },
  {
    src: "/images/hero-2.svg",
    alt: "전문 컨설팅 서비스 — 아이디어를 현실로 빠르게",
    heading: "전문 컨설팅 서비스",
    subheading: "검증된 프로세스로 빠르게 실현합니다",
  },
  {
    src: "/images/hero-3.svg",
    alt: "성장하는 비즈니스 — 검증된 5단계 프로세스",
    heading: "성장하는 비즈니스",
    subheading: "체계적인 5단계 프로세스로 성과를 만듭니다",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [isPaused, next]);

  return (
    <section
      className="relative w-full h-[480px] md:h-[600px] overflow-hidden bg-[#0F172A]"
      aria-label="히어로 슬라이더"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
          />
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 bg-black/30">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {slide.heading}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 drop-shadow">
              {slide.subheading}
            </p>
          </div>
        </div>
      ))}

      {/* Arrow buttons */}
      <button
        onClick={() => { prev(); setIsPaused(true); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#6366F1] text-white rounded-full p-2 transition-colors"
        aria-label="이전 슬라이드"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => { next(); setIsPaused(true); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#6366F1] text-white rounded-full p-2 transition-colors"
        aria-label="다음 슬라이드"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="슬라이드 인디케이터">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`슬라이드 ${i + 1}`}
            onClick={() => { setCurrent(i); setIsPaused(true); }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[#6366F1] scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
