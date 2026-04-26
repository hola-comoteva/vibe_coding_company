export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#94A3B8]">
          <span className="font-bold text-base text-white">바이브코딩 컨설팅</span>
          <a
            href="mailto:andres.ahn@gmail.com"
            className="hover:text-[#6366F1] transition-colors"
          >
            andres.ahn@gmail.com
          </a>
          <span>© {new Date().getFullYear()} 바이브코딩. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
