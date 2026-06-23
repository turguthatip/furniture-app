"use client";
import Image from "next-export-optimize-images/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/koltuk-takimlari", label: "Koltuk Takımları" },
  { href: "/kose-takimlari", label: "Köşe Takımları" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const desktopLinkClass = (isActive: boolean) =>
    `uppercase tracking-[0.15em] text-base font-semibold transition-colors
     ${isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`;

  return (
    <>
      {/* Mobile bar */}
      <nav className="flex md:hidden justify-between items-center border-b border-gray-200 bg-white py-4 px-4">
        <a href="/">
          <Image src="/assuva-logo.png" alt="Assuva Logo" width={100} height={100} className="h-14 w-auto" priority />
        </a>
        <button onClick={() => setMenuOpen(true)} aria-label="Menüyü aç" className="p-2 text-gray-900">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Desktop bar */}
      <nav className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center bg-white py-2 px-2">
        <div className="flex justify-end pr-16">
          <Link href="/koltuk-takimlari" className={desktopLinkClass(pathname === "/koltuk-takimlari")}>
            Koltuk Takımları
          </Link>
        </div>
        <div className="flex justify-center">
          <a href="/">
            <Image src="/assuva-logo.png" alt="Assuva Logo" width={120} height={120} className="h-24 w-auto" priority />
          </a>
        </div>
        <div className="flex justify-start pl-16">
          <Link href="/kose-takimlari" className={desktopLinkClass(pathname === "/kose-takimlari")}>
            Köşe Takımları
          </Link>
        </div>
      </nav>

      {/* Fullscreen mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-10 md:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Menüyü kapat"
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="uppercase tracking-[0.15em] text-2xl font-semibold text-white/90 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
