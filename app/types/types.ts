export type ToppingType = {
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
  toppings: ToppingType[];
};

export type Cart = {
  id: number;
  name: string;
  image: string;
  price: number;
  size: string;
  crust: string;
  additionalTopping: ToppingType[];
};
