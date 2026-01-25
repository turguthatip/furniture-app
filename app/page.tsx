import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";


export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-width">
        <NewProducts />
      </div>
    </main>
  );
}
