import React from "react";
import Image from "next-export-optimize-images/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook, FaPhone, FaMapMarkerAlt, FaTruck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";

const Footer = () => {
  const whatsappUrl = "https://wa.me/902662442765?text=Merhaba%2C%20bilgi%20almak%20istiyorum.";

  const trustItems = [
    {
      icon: <HiOutlineRefresh size={30} />,
      title: "Garanti",
      desc: "2 yıl garantili ürünler.",
    },
    {
      icon: <FaTruck size={28} />,
      title: "Nakliye",
      desc: "Tüm Türkiye'ye nakliye hizmeti.",
    },
  ];

  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
<div className="w-full px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image
              src="/assuva-logo.png"
              alt="Assuva Mobilya Logo"
              width={80}
              height={80}
              className=""
            />
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Balıkesir'den Türkiye'ye kaliteli ve şık mobilya çözümleri. Yerli üretim, uzun ömürlü konfor.
          </p>
          <div className="flex gap-4 mt-1">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500 transition-colors">
              <FaWhatsapp size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 transition-colors">
              <FaFacebook size={22} />
            </a>
          </div>
        </div>

        {/* Trust items */}
        <div className="flex flex-col gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="text-gray-400 flex-shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-900 font-semibold text-sm uppercase tracking-widest mb-1">İletişim</h3>

          <div className="flex items-start gap-3 text-sm text-gray-500">
            <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-gray-400" size={16} />
            <span>Organize Sanayi Bölgesi 9. Cadde No:4, 10100 Altıeylül/Balıkesir, Türkiye</span>
          </div>

          <a href="tel:+902662442765" className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <FaPhone className="flex-shrink-0 text-gray-400" size={15} />
            +90 266 244 27 65
          </a>

          <a href="mailto:info@assuva.com.tr"
            className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <MdEmail className="flex-shrink-0 text-gray-400" size={16} />
            info@assuva.com.tr
          </a>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors">
            <FaWhatsapp className="flex-shrink-0 text-gray-400" size={16} />
            WhatsApp ile Ulaşın
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="w-full px-8 md:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© 2026 Assuva Mobilya. Tüm Hakları Saklıdır.</p>
          <p>Balıkesir, Türkiye</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
