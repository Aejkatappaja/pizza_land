export type PizzaProps = {
  key?: string;
  pizza: PizzaType;
};

export type CartItemProps = {
  order: Order;
};

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

export type SizeSelectionProps = {
  pizza: PizzaType;
  size: string;
  setSize: (size: string) => void;
};

export type Order = {
  id: number;
  name: string;
  price: number;
  crust: string;
  size: string;
  additionalTopping: ToppingType[];
  image: string;
  quantity: number;
};

export type ToppingProps = {
  topping: ToppingType;
  additionalTopping: ToppingType[];
  setAdditionalTopping: React.Dispatch<React.SetStateAction<ToppingType[]>>;
};

export interface PaymentFormProps {
  setSuccessMsg: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomerIdentity: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface DataProps {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  street: string;
  block?: string;
  floor?: string;
  apt?: string;
  mentions?: string;
}
