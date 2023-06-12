import { getAllPizzas } from "@/lib/pizzas";
import { PizzaType } from "@/types/types";

export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await getAllPizzas();
  return data.map((pizza: PizzaType) => ({ id: pizza.id.toString() }));
}

export async function getPizzaById(id: number) {
  const res = await fetch(`http://localhost:3000/api/pizzas/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data;
}

export default async function PizzaDetails({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const data = await getPizzaById(id);

  return (
    <div>
      <h1>{id}</h1> <p>{data.pizza.name}</p> <p>{data.pizza.priceLg}</p>
    </div>
  );
}
