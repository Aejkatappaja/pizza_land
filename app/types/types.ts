export type Topping = {
  name: string;
  image: string;
  price: number;
};
export type PizzaType = {
  id: number;
  name: string;
  description: string;
  priceLg: number;
  priceMd: number;
  priceSm: number;
  image: string;
  toppings: Topping[];
};
