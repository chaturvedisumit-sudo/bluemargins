import { footer, site } from "@/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0E2B52] text-[#DCE8F3]" data-testid="main-footer">
      <div className="max-w-[1280px] mx-auto px-[76px] max-[900px]:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-[#DCE8F3]/85 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 3c-6 2-11 8-13 14l-1.5 3.5L9 20c6-2 10-7 11-14Z" stroke="#DCE8F3" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="font-hand text-lg text-[#DCE8F3]/80">{footer.closing}</p>
      </div>
    </footer>
  );
}
