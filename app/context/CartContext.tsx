"use client";

import { PizzaType } from "@/types/types";
import React from "react";

interface CartContextType {
  isCartVisible: boolean;
  setIsCartVisible: (isVisible: boolean) => void;
  clickedPizza: PizzaType;
  setClickedPizza: (pizza: PizzaType) => void;
  openCart: () => void;
  closeCart: () => void;
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
  setClickedPizza: () => {},
  openCart: () => {},
  closeCart: () => {},
});

export const CartContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
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
