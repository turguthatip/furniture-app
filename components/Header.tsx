"use client";
import Image from "next-export-optimize-images/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkClass = (isActive: boolean) =>
  `relative uppercase tracking-[0.15em] text-base font-semibold text-gray-700 hover:text-gray-900 transition-colors
   after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gray-900
   after:transition-transform after:duration-200 after:origin-left
   ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`;

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 py-5 px-2 grid grid-cols-[1fr_auto_1fr] items-center">
      <div className="flex justify-end pr-16">
        <Link href="/koltuk-takimlari" className={linkClass(pathname === "/koltuk-takimlari")}>
          Koltuk Takımları
        </Link>
      </div>
      <div className="flex justify-center">
        <a href="/">
          <Image src="/assuva-logo.png" alt="Assuva Logo" width={120} height={120} className="h-24 w-auto" />
        </a>
      </div>
      <div className="flex justify-start pl-16">
        <Link href="/kose-takimlari" className={linkClass(pathname === "/kose-takimlari")}>
          Köşe Takımları
        </Link>
      </div>
    </nav>
  );
}
