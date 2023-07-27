import { PizzaType } from "@/types/types";

export async function getAllPizzas(): Promise<PizzaType[]> {
  const res = await fetch(`https://api.jsonserve.com/8PFXVY`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data.pizzas;
}
