import { PizzaType } from "@/types/types";

export async function getAllPizzas(): Promise<PizzaType[]> {
  const URL = process.env.DATA_URL;

  const res = await fetch(`${URL}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data.pizzas;
}
