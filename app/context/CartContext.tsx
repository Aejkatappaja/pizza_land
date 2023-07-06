"use client";

import { PizzaType, Cart, ToppingType } from "@/types/types";
import React from "react";

interface CartContextType {
  isCartVisible: boolean;
  setIsCartVisible: (isVisible: boolean) => void;
  clickedPizza: PizzaType;
  setClickedPizza: (pizza: PizzaType) => void;
  openCart: () => void;
  closeCart: () => void;
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (cart: Cart) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const useCartContext = () => React.useContext(CartContext);

export const CartContext = React.createContext<CartContextType>({
  isCartVisible: false,
  setIsCartVisible: () => {},
  clickedPizza: {
    id: 0,
    name: "",
    description: "",
    priceLg: 0,
    priceMd: 0,
    priceSm: 0,
    image: "",
    toppings: [],
  },
  cart: [],
  setCart: () => {},
  setClickedPizza: () => {},
  openCart: () => {},
  closeCart: () => {},
  addToCart: () => {},
});

export const CartContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = React.useState<Cart[]>([]);
  const addToCart = (cart: Cart) => {
    console.log(
      cart.id,
      cart.image,
      cart.name,
      cart.price,
      cart.additionalTopping,
      cart.size,
      cart.crust
    );
  };
  const [isCartVisible, setIsCartVisible] = React.useState<boolean>(false);
  const openCart = () => setIsCartVisible(true);
  const closeCart = () => setIsCartVisible(false);
  const [clickedPizza, setClickedPizza] = React.useState<PizzaType>({
    id: 0,
    name: "",
    description: "",
    priceLg: 0,
    priceMd: 0,
    priceSm: 0,
    image: "",
    toppings: [],
  });

  const contextValue: CartContextType = {
    cart,
    addToCart,
    setCart,
    isCartVisible,
    setIsCartVisible,
    clickedPizza,
    setClickedPizza,
    openCart,
    closeCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
