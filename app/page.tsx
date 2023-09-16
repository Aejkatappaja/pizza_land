import { Header } from "@/components/header";
import { Pizza } from "@/components/Pizza";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { PizzaType } from "@/types/types";
import { getAllPizzas } from "@/lib/pizzas";

export default async function Home() {
  const pizzas = await getAllPizzas();
  return (
    <section className="cursor-default">
      <Header />
      <Banner />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
          {pizzas?.map((pizza: PizzaType) => {
            return <Pizza key={pizza.id.toString()} pizza={pizza} />;
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
}
