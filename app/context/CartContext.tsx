"use client";

import { PizzaType, Cart, ToppingType, Order } from "@/types/types";
import React from "react";

interface CartContextType {
  isCartVisible: boolean;
  setIsCartVisible: (isVisible: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  cart: Order[];
  setCart: React.Dispatch<React.SetStateAction<Order[]>>;
  addToCart: (cart: Order[]) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const useCartContext = () => React.useContext(CartContext);

export const CartContext = React.createContext<CartContextType>({
  isCartVisible: false,
  setIsCartVisible: () => {},
  cart: [],
  setCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  addToCart: () => {},
});

export const CartContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = React.useState<Order[]>([]);
  const addToCart = (cart: Order[]) => {
    const copy = [...cart];
    setCart(copy);
  };
  const [isCartVisible, setIsCartVisible] = React.useState<boolean>(false);
  const openCart = () => setIsCartVisible(true);
  const closeCart = () => setIsCartVisible(false);

  const contextValue: CartContextType = {
    cart,
    addToCart,
    setCart,
    isCartVisible,
    setIsCartVisible,
    openCart,
    closeCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
