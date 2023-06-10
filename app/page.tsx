import { Pizza } from "./components/Pizza";
import { getAllPizzas } from "./lib/pizzas";
import { PizzaType } from "./types/types";

export default async function Home() {
  const pizzas = await getAllPizzas();
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
          {pizzas.map((pizza: PizzaType) => {
            console.log(pizza);

            return <Pizza key={pizza.id.toString()} pizza={pizza} />;
          })}
        </div>
      </div>
    </section>
  );
}
