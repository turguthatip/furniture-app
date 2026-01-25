import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";


export default function Home() {
  return (
    <main>
      <Hero />
      <div className="w-full px-4 md:px-8">
        <NewProducts />
      </div>
    </main>
  );
}
