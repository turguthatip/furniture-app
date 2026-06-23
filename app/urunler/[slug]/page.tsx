import { Metadata } from "next";
import { notFound } from "next/navigation";
import { productData, getProductBySlug } from "@/lib/products";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecs from "@/components/ProductSpecs";
import RelatedProducts from "@/components/RelatedProducts";
import WhatsAppModal from "@/components/WhatsAppModal";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return productData.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Ürün Bulunamadı" };
  return { title: `${product.title} | Assuva Mobilya` };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const others = productData.filter((p) => p.slug !== product.slug);

  return (
    <main className="min-h-screen bg-white">
      <div className="w-full px-4 md:px-8 xl:px-16 py-8">
{/* Two-column checkout layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-8 lg:gap-10 xl:gap-16 items-start">
          {/* Left — image gallery */}
          <ProductGallery images={product.images} title={product.title} dimensions={product.dimensions} />

          {/* Right — product info */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-8">
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Assuva Mobilya</p>
              <h1 className="text-3xl font-semibold text-gray-900">{product.title}</h1>
            </div>

            <hr className="border-gray-200" />

            <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>

            {/* WhatsApp CTA */}
            <div>
              <p className="text-sm text-gray-500 mb-3">
                Fiyat ve renk seçenekleri için bizimle iletişime geçin.
              </p>
              <WhatsAppModal />
            </div>
          </div>
        </div>
        <ProductSpecs teknik={product.specs.teknik} istegeBasli={product.specs.istegeBasli} dimensions={product.dimensions} />

        <RelatedProducts products={others} />
      </div>
    </main>
  );
}
