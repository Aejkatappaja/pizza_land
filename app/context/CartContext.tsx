"use client";

import { PizzaType } from "@/types/types";
import React from "react";

interface CartContextType {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  clickedPizza: PizzaType;
  setClickedPizza: (pizza: PizzaType) => void;
  openModal: () => void;
  closeModal: () => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const useCartContext = () => React.useContext(CartContext);

export const CartContext = React.createContext<CartContextType>({
  isVisible: false,
  setIsVisible: () => {},
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
  openModal: () => {},
  closeModal: () => {},
});

export const CartContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const openModal = () => setIsVisible(false);
  const closeModal = () => setIsVisible(false);
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
    isVisible,
    setIsVisible,
    clickedPizza,
    setClickedPizza,
    openModal,
    closeModal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
