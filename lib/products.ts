export interface ProductSpecs {
  teknik: { label: string; value: string }[];
  istegeBasli: string[];
}

export interface Product {
  slug: string;
  title: string;
  category: "koltuk" | "kose";
  images: string[];
  description: string;
  dimensions: { label: string; value: string }[][];
  specs: ProductSpecs;
  yatakli?: boolean;
}

const koltukSpecs: ProductSpecs = {
  teknik: [
    { label: "İskelet Özel", value: "Fırınlanmış gürgen ağacından üretilmiştir." },
    { label: "Kumaş Özel", value: "Silinebilir ve leke tutmaz kumaş kullanılmıştır." },
    { label: "Sünger Özel", value: "Orta sertlikte sünger kullanılmıştır." },
    { label: "Ayak Özel", value: "Ayaklar ahşaptır." },
  ],
  istegeBasli: [
    "Takımdaki modüllerden çıkartabilir veya ekleyebilirsiniz (3+3+1+1, 3+3, 3+1 gibi.).",
    "Çıkartılan modül fiyatı veya eklenen modül fiyatı takım fiyatına yansır.",
    "Müşteri talebine göre kumaş rengi ve türü değişebilmektedir, bu değişimden oluşan fark takım fiyatına yansır.",
  ],
};

const yatakliKoltukSpecs: ProductSpecs = {
  teknik: [
    { label: "İskelet Özel", value: "Fırınlanmış gürgen ağacından üretilmiştir." },
    { label: "Kumaş Özel", value: "Silinebilir ve leke tutmaz kumaş kullanılmıştır." },
    { label: "Sünger Özel", value: "Orta sertlikte sünger kullanılmıştır." },
    { label: "Yatak & Sandık", value: "Yatak özelliği bulunmaktadır." },
    { label: "Ayak Özel", value: "Ayaklar ahşaptır." },
  ],
  istegeBasli: [
    "Takımdaki modüllerden çıkartabilir veya ekleyebilirsiniz (3+3+1+1, 3+3, 3+1 gibi.).",
    "Çıkartılan modül fiyatı veya eklenen modül fiyatı takım fiyatına yansır.",
    "Müşteri talebine göre kumaş rengi ve türü değişebilmektedir, bu değişimden oluşan fark takım fiyatına yansır.",
  ],
};

const koseSpecs: ProductSpecs = {
  teknik: [
    { label: "İskelet Özel", value: "Fırınlanmış gürgen ağacından üretilmiştir." },
    { label: "Kumaş Özel", value: "Silinebilir ve leke tutmaz kumaş kullanılmıştır." },
    { label: "Sünger Özel", value: "Orta sertlikte sünger kullanılmıştır." },
    { label: "Ayak Özel", value: "Ayaklar ahşaptır." },
  ],
  istegeBasli: [
    "Takımdaki modüllerden çıkartabilir veya ekleyebilirsiniz.",
    "Çıkartılan modül fiyatı veya eklenen modül fiyatı takım fiyatına yansır.",
    "Müşteri talebine göre kumaş rengi ve türü değişebilmektedir, bu değişimden oluşan fark takım fiyatına yansır.",
  ],
};

const koltukDims: { label: string; value: string }[][] = [
  [
    { label: "Uzunluk", value: "233 cm" },
    { label: "Yükseklik", value: "86 cm" },
    { label: "Derinlik", value: "97 cm" },
  ],
  [
    { label: "Uzunluk", value: "79 cm" },
    { label: "Yükseklik", value: "84 cm" },
    { label: "Derinlik", value: "78 cm" },
  ],
];

const koseDims: { label: string; value: string }[][] = [
  [
    { label: "Uzunluk 1", value: "300 cm" },
    { label: "Uzunluk 2", value: "232 cm" },
    { label: "Puf", value: "52 cm" },
    { label: "Yükseklik", value: "86 cm" },
    { label: "Derinlik", value: "104 cm" },
  ],
];

export const productData: Product[] = [
  {
    slug: "valencia-koltuk-takimi",
    title: "Valencia Koltuk Takımı",
    category: "koltuk",
    images: ["valencia-koltuk-takimi-1", "valencia-koltuk-takimi-2", "valencia-koltuk-takimi-3", "valencia-koltuk-takimi-4", "valencia-koltuk-takimi-5"],
    description:
      "Valencia Koltuk Takımı, modern tasarımı ve üstün konforu ile oturma odanıza şıklık katmaktadır. Yüksek kaliteli kumaşı ve sağlam iç yapısı ile uzun yıllar boyunca size eşlik edecektir.",
    dimensions: koltukDims,
    specs: koltukSpecs,
  },
  {
    slug: "valencia-kose-takimi",
    title: "Valencia Köşe Takımı",
    category: "kose",
    images: ["ValenciaKoseTakimi1", "ValenciaKoseTakimi2", "ValenciaKoseTakimi3", "ValenciaKoseTakimi4", "ValenciaKoseTakimi5"],
    description:
      "Valencia Köşe Takımı, geniş oturma alanı ve ergonomik yapısıyla ailenizin tüm üyelerine konforlu bir deneyim sunar. Şık tasarımı ile odanızın odak noktası olacaktır.",
    dimensions: koseDims,
    specs: koseSpecs,
  },
  {
    slug: "pablo-koltuk-takimi",
    title: "Pablo Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["pablo-koltuk-takimi-1", "pablo-koltuk-takimi-2", "pablo-koltuk-takimi-3", "pablo-koltuk-takimi-4", "pablo-koltuk-takimi-5", "pablo-koltuk-takimi-6"],
    description:
      "Pablo Koltuk Takımı, minimalist çizgileri ve premium malzemeleriyle modern yaşam alanlarına mükemmel uyum sağlar. Dayanıklı yapısı ile uzun soluklu bir kullanım sunar.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "idol-koltuk-takimi",
    title: "İdol Koltuk Takımı",
    category: "koltuk",
    images: ["idol-koltuk-takimi-1", "idol-koltuk-takimi-2", "idol-koltuk-takimi-3", "idol-koltuk-takimi-4", "idol-koltuk-takimi-5"],
    description:
      "İdol Koltuk Takımı, özgün tasarımı ile oturma odanıza karakterini katar. Yüksek yoğunluklu süngeri ve kaliteli kumaşıyla her oturuşta ayrı bir konfor hissi sunar.",
    dimensions: [
      [
        { label: "Uzunluk", value: "232 cm" },
        { label: "Yükseklik", value: "83 cm" },
        { label: "Derinlik", value: "101 cm" },
      ],
      [
        { label: "Uzunluk", value: "79 cm" },
        { label: "Yükseklik", value: "84 cm" },
        { label: "Derinlik", value: "78 cm" },
      ],
    ],
    specs: koltukSpecs,
  },
  {
    slug: "castro-koltuk-takimi",
    title: "Castro Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["castro-koltuk-takimi-1", "castro-koltuk-takimi-2", "castro-koltuk-takimi-3", "castro-koltuk-takimi-4", "castro-koltuk-takimi-5"],
    description:
      "Castro Koltuk Takımı, çağdaş tasarımı ve kaliteli işçiliğiyle evinize değer katar. Özenle seçilmiş malzemeleri ile hem estetik hem de fonksiyonel bir tercih.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "midilli-koltuk-takimi",
    title: "Midilli Koltuk Takımı",
    category: "koltuk",
    images: ["midillik-koltuk-takimi-1", "midillik-koltuk-takimi-2", "midillik-koltuk-takimi-3", "midillik-koltuk-takimi-4", "midillik-koltuk-takimi-5"],
    description:
      "Midilli Koltuk Takımı, Ege'nin özgür ruhunu evinize taşır. Sıcak renk seçenekleri ve rahat oturma yüzeyi ile dinlenme anlarınızı konforlu hale getirir.",
    dimensions: koltukDims,
    specs: koltukSpecs,
  },
  {
    slug: "belinay-koltuk-takimi",
    title: "Belinay Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["belinay-koltuk-takıımı-1", "belinay-koltuk-takıımı-2", "belinay-koltuk-takıımı-3", "belinay-koltuk-takıımı-4", "belinay-koltuk-takıımı-5"],
    description:
      "Belinay Koltuk Takımı, zarif tasarımı ve yüksek konfor anlayışıyla öne çıkar. Kaliteli kumaş seçenekleri ve sağlam yapısıyla uzun yıllar boyunca kullanım konforu sağlar.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "solo-koltuk-takimi",
    title: "Solo Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["solo-koltuk-takımı-1", "solo-koltuk-takımı-2", "solo-koltuk-takımı-3", "solo-koltuk-takımı-4", "solo-koltuk-takımı-5", "solo-koltuk-takımı-6"],
    description:
      "Solo Koltuk Takımı, sade ve şık tasarımıyla her türlü dekor anlayışına uyum sağlar. Fonksiyonel yapısı ve kaliteli malzemeleriyle ideal bir oturma deneyimi sunar.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "edremit-koltuk-takimi",
    title: "Edremit Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["edremit-koltuk-takimi-1", "edremit-koltuk-takimi-2", "edremit-koltuk-takimi-3", "edremit-koltuk-takimi-4", "edremit-koltuk-takimi-5", "edremit-koltuk-takimi-6"],
    description:
      "Edremit Koltuk Takımı, doğanın huzurunu evinize taşıyan tasarımıyla öne çıkar. Geniş oturma alanı ve konforlu yapısıyla aile buluşmalarınızın vazgeçilmezi olur.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "melis-koltuk-takimi",
    title: "Melis Koltuk Takımı",
    category: "koltuk",
    images: ["melis-koltuk-takimi-1", "melis-koltuk-takimi-2", "melis-koltuk-takimi-3", "melis-koltuk-takimi-4", "melis-koltuk-takimi-5"],
    description:
      "Melis Koltuk Takımı, feminen çizgileri ve sofistike duruşuyla yaşam alanlarınızı tamamlar. Özenle tasarlanmış detayları ile estetik ve konforu bir arada sunar.",
    dimensions: koltukDims,
    specs: koltukSpecs,
  },
  {
    slug: "riva-koltuk-takimi",
    title: "Riva Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["riva-koltuk-takimi-1", "riva-koltuk-takimi-2", "riva-koltuk-takimi-3", "riva-koltuk-takimi-4", "riva-koltuk-takimi-5"],
    description:
      "Riva Koltuk Takımı, deniz kenarının ferahlığını evinize taşıyan tasarımıyla dikkat çeker. Dayanıklı yapısı ve şık görünümüyle uzun yıllar eşliğinizde olacaktır.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "didim-koltuk-takimi",
    title: "Didim Koltuk Takımı",
    category: "koltuk",
    images: ["didim-koltuk-takimi-1", "didim-koltuk-takimi-2", "didim-koltuk-takimi-3", "didim-koltuk-takimi-4", "didim-koltuk-takimi-5"],
    description:
      "Didim Koltuk Takımı, modern ve klasiği harmanlayan tasarımıyla her eve uyum sağlar. Kaliteli malzemeleri ve işçiliğiyle konforun ve estetiğin mükemmel birleşimini sunar.",
    dimensions: koltukDims,
    specs: koltukSpecs,
  },
  {
    slug: "polo-koltuk-takimi",
    title: "Polo Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["polo-koltuk-takimi-1", "polo-koltuk-takimi-2", "polo-koltuk-takimi-3", "polo-koltuk-takimi-4", "polo-koltuk-takimi-5"],
    description:
      "Polo Koltuk Takımı, sportif çizgileri ve dinamik duruşuyla yaşam alanlarınıza enerji katar. Yüksek konfor ve dayanıklılık anlayışıyla tasarlanmıştır.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "milda-koltuk-takimi",
    title: "Milda Koltuk Takımı",
    category: "koltuk",
    images: ["milda-koltuk-takimi-1", "milda-koltuk-takimi-2", "milda-koltuk-takimi-3", "milda-koltuk-takimi-4", "milda-koltuk-takimi-5"],
    description:
      "Milda Koltuk Takımı, Kuzey Avrupa'nın minimalist estetiğini Türk işçiliğiyle buluşturur. Temiz hatları ve fonksiyonel yapısıyla modern yaşam alanlarının vazgeçilmezidir.",
    dimensions: koltukDims,
    specs: koltukSpecs,
  },
  {
    slug: "foca-koltuk-takimi",
    title: "Foça Koltuk Takımı",
    category: "koltuk",
    images: ["foca-koltuk-takimi-1", "foca-koltuk-takimi-2", "foca-koltuk-takimi-3", "foca-koltuk-takimi-4", "foca-koltuk-takimi-5"],
    description:
      "Foça Koltuk Takımı, tarihi Foça'nın eşsiz güzelliğinden ilham alan tasarımıyla öne çıkar. Sıcak tonları ve konforlu yapısıyla evinize huzur getirir.",
    dimensions: koltukDims,
    specs: koltukSpecs,
  },
  {
    slug: "eylul-koltuk-takimi",
    title: "Eylül Koltuk Takımı",
    category: "koltuk",
    images: ["eylul-koltuk-takimi-1", "eylul-koltuk-takimi-2", "eylul-koltuk-takimi-3", "eylul-koltuk-takimi-4", "eylul-koltuk-takimi-5", "eylul-koltuk-takimi-6"],
    description:
      "Eylül Koltuk Takımı, sonbaharın sıcak renklerini yaşam alanlarınıza yansıtır. Özenli işçiliği ve kaliteli malzemeleriyle uzun ömürlü konfor sağlar.",
    dimensions: koltukDims,
    specs: koltukSpecs,
  },
  {
    slug: "bohem-koltuk-takimi",
    title: "Bohem Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["bohem-koltuk-takimi-1", "bohem-koltuk-takimi-2", "bohem-koltuk-takimi-3", "bohem-koltuk-takimi-4", "bohem-koltuk-takimi-5"],
    description:
      "Bohem Koltuk Takımı, özgür ruhlu tasarımı ile alışılmışın dışına çıkan yaşam alanları için idealdir. Kendine özgü karakteri ile odanızın odak noktası olur.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "seul-koltuk-takimi",
    title: "Seul Koltuk Takımı",
    category: "koltuk",
    images: ["seul-koltuk-takimi-1", "seul-koltuk-takimi-2", "seul-koltuk-takimi-3", "seul-koltuk-takimi-4", "seul-koltuk-takimi-5"],
    description:
      "Seul Koltuk Takımı, Uzak Doğu'nun şık estetiğini modern konforla buluşturur. Özel tasarım detayları ve kaliteli üretimi ile yaşam alanlarınıza değer katar.",
    dimensions: koltukDims,
    specs: koltukSpecs,
  },
  {
    slug: "verona-koltuk-takimi",
    title: "Verona Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["verona-koltuk-takimi-1", "verona-koltuk-takimi-2", "verona-koltuk-takimi-3", "verona-koltuk-takimi-4", "verona-koltuk-takimi-5", "verona-koltuk-takimi-6"],
    description:
      "Verona Koltuk Takımı, İtalyan zarafetini evinize taşır. Klasik çizgileri ve lüks dokusu ile oturma odanıza prestij katar.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "ceren-koltuk-takimi",
    title: "Ceren Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["ceren-koltuk-takimi-1", "ceren-koltuk-takimi-2", "ceren-koltuk-takimi-3", "ceren-koltuk-takimi-4", "ceren-koltuk-takimi-5", "ceren-koltuk-takimi-6"],
    description:
      "Ceren Koltuk Takımı, zarif ve narin çizgileriyle yaşam alanlarınıza incelik katar. Yüksek kaliteli üretimi ve özenli işçiliğiyle uzun ömürlü bir tercih.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "viyana-koltuk-takimi",
    title: "Viyana Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["viyana-koltuk-takimi-1", "viyana-koltuk-takimi-2", "viyana-koltuk-takimi-3", "viyana-koltuk-takimi-4", "viyana-koltuk-takimi-5"],
    description:
      "Viyana Koltuk Takımı, Avusturya'nın klasik mimarisinden ilham alan tasarımıyla oturma odanıza ayrıcalık katar. Üstün kalite ve konforun mükemmel birleşimi.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "hazel-koltuk-takimi",
    title: "Hazel Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["hazel-koltuk-takimi-1", "hazel-koltuk-takimi-2", "hazel-koltuk-takimi-3", "hazel-koltuk-takimi-4", "hazel-koltuk-takimi-5", "hazel-koltuk-takimi-6"],
    description:
      "Hazel Koltuk Takımı, doğanın sıcak tonlarını evinize taşıyan fındık rengi ve sıcak dokusuyla öne çıkar. Rahat yapısı ve estetik görünümüyle ideal bir seçim.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "akasya-koltuk-takimi",
    title: "Akasya Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["akasya-koltuk-takimi-1", "akasya-koltuk-takimi-2", "akasya-koltuk-takimi-3", "akasya-koltuk-takimi-4", "akasya-koltuk-takimi-5", "akasya-koltuk-takimi-6"],
    description:
      "Akasya Koltuk Takımı, doğanın güzelliğini evinizin içine taşır. Organik formu ve sıcak malzemeleriyle doğal bir atmosfer yaratır.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "tila-koltuk-takimi",
    title: "Tila Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["tila-koltuk-takimi-1", "tila-koltuk-takimi-2", "tila-koltuk-takimi-3", "tila-koltuk-takimi-4", "tila-koltuk-takimi-5", "tila-koltuk-takimi-6"],
    description:
      "Tila Koltuk Takımı, yenilikçi tasarımı ve üstün konforu ile modern yaşam alanlarının vazgeçilmezi olmaya adaydır. Şık görünümü ile her dekora uyum sağlar.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "dikili-koltuk-takimi",
    title: "Dikili Koltuk Takımı",
    category: "koltuk",
    yatakli: true,
    images: ["dikili-koltuk-takimi-1", "dikili-koltuk-takimi-2", "dikili-koltuk-takimi-3", "dikili-koltuk-takimi-4", "dikili-koltuk-takimi-5", "dikili-koltuk-takimi-6"],
    description:
      "Dikili Koltuk Takımı, sade ve şık çizgileriyle her türlü dekor anlayışına uyum sağlar. Kaliteli üretimi ve dayanıklı yapısıyla uzun yıllar boyunca yanınızda olur.",
    dimensions: koltukDims,
    specs: yatakliKoltukSpecs,
  },
  {
    slug: "puzzle-kose-takimi",
    title: "Puzzle Köşe Takımı",
    category: "kose",
    images: ["puzzle-kose-takimi-1", "puzzle-kose-takimi-2", "puzzle-kose-takimi-3", "puzzle-kose-takimi-4", "puzzle-kose-takimi-5", "puzzle-kose-takimi-6"],
    description:
      "Puzzle Köşe Takımı, modüler yapısıyla oturma odanıza en uygun şekilde konumlandırılabilir. Geniş oturma alanı ve yüksek konforu ile tüm ailenize hizmet eder.",
    dimensions: koseDims,
    specs: koseSpecs,
  },
  {
    slug: "centra-kose-takimi",
    title: "Centra Köşe Takımı",
    category: "kose",
    images: ["centra-kose-takimi-1", "centra-kose-takimi-2", "centra-kose-takimi-3", "centra-kose-takimi-4", "centra-kose-takimi-5"],
    description:
      "Centra Köşe Takımı, merkezi tasarımı ile odanızın kalbine yerleşir. Ferah oturma alanı ve şık görünümüyle hem estetik hem de fonksiyonel bir tercih.",
    dimensions: koseDims,
    specs: koseSpecs,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productData.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return productData.filter((p) => p.category === category);
}
