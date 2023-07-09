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

export type Order = {
  id: number;
  name: string;
  price: number;
  crust: string;
  additionalTopping: ToppingType[];
  image: string;
  quantity: number;
};
