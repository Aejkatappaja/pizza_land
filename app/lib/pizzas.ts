import { PizzaType } from "@/types/types";

export async function getAllPizzas(): Promise<PizzaType[]> {
  const res = await fetch(`http://localhost:3000/api/pizzas`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data.pizzas;
}
