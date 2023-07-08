export interface PizzaProps {
  key?: string;
  pizza: PizzaType;
}

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
  quantity: number;
};

export type Order = {
  id: number;
  name: string;
  price: number;
  crust: string;
  additionalTopping: ToppingType[];
  image: string;
};
