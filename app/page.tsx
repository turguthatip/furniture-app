import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Image from "next/image";


export default function Home() {
  return (
    <main className="max-width">
      <Hero />
      <NewProducts />

    </main>
  );
}
