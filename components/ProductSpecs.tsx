"use client";
import { useState } from "react";

interface SpecRow { label: string; value: string; }
interface Props {
  teknik: SpecRow[];
  istegeBasli: string[];
  dimensions: { label: string; value: string }[][];
}

const groupNames: Record<number, string> = { 0: "Kanepe (3'lü)", 1: "Koltuk (1'li)" };

function AccordionItem({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`rounded-lg border transition-shadow duration-200 ${open ? "border-gray-300 shadow-sm" : "border-gray-200"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left group"
      >
        <span className={`text-sm font-semibold uppercase tracking-wide transition-colors ${open ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>
          {title}
        </span>
        <span className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 ${open ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`}>
          <svg className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-5 pb-5 pt-1 border-t border-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductSpecs({ teknik, istegeBasli, dimensions }: Props) {
  return (
    <div className="mt-12 pt-10 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-5">Ürün Özellikleri</h2>
      <div className="flex flex-col gap-3">

        {/* Teknik Özellikler */}
        <AccordionItem title="Teknik Özellikler" defaultOpen>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm border-collapse rounded overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2.5 font-medium text-gray-500 border-b border-gray-200 w-1/3">Özellik</th>
                  <th className="text-left px-4 py-2.5 font-medium text-gray-500 border-b border-gray-200">Açıklama</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {teknik.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-700">{row.label}</td>
                    <td className="px-4 py-3 text-gray-500">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionItem>

        {/* Ölçüler */}
        <AccordionItem title="Ölçüler">
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-2.5 font-medium text-gray-500 border-b border-gray-200">Parça</th>
                  <th className="text-left px-4 py-2.5 font-medium text-gray-500 border-b border-gray-200">Uzunluk</th>
                  <th className="text-left px-4 py-2.5 font-medium text-gray-500 border-b border-gray-200">Yükseklik</th>
                  <th className="text-left px-4 py-2.5 font-medium text-gray-500 border-b border-gray-200">Derinlik</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dimensions.map((group, i) => {
                  const byLabel = Object.fromEntries(group.map(({ label, value }) => [label, value]));
                  return (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-700">{groupNames[i] ?? `Grup ${i + 1}`}</td>
                      <td className="px-4 py-3 text-gray-500">{byLabel["Uzunluk"] ?? byLabel["Uzunluk 1"] ?? "—"}</td>
                      <td className="px-4 py-3 text-gray-500">{byLabel["Yükseklik"] ?? "—"}</td>
                      <td className="px-4 py-3 text-gray-500">{byLabel["Derinlik"] ?? "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </AccordionItem>

        {/* İsteğe Bağlı Özellikler */}
        <AccordionItem title="İsteğe Bağlı Özellikler">
          <ul className="mt-3 space-y-2.5">
            {istegeBasli.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>

        {/* Genel Bilgiler */}
        <AccordionItem title="Genel Bilgiler">
          <ul className="mt-3 space-y-2.5">
            {[
              "Ödeme şekilleri hakkında bilgi almak için iletişime geçin.",
              "Teslimat şekilleri hakkında bilgi almak için iletişime geçin.",
              "Nasıl sipariş verebileceğinizi öğrenmek için iletişime geçin.",
              "Tüm ürünlerimiz 2 yıl üretici garantilidir.",
              "Parekende satışımız yoktur.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>

        {/* Teslimat Şekilleri */}
        <AccordionItem title="Teslimat Şekilleri">
          <ul className="mt-3 space-y-2.5">
            {[
              "Tüm Türkiye'ye nakliye hizmeti verebiliriz. Detaylar için iletişime geçin.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>

      </div>
    </div>
  );
}
