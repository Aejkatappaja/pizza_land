"use client";

import { PizzaType, Cart, ToppingType } from "@/types/types";
import React from "react";

interface CartContextType {
  isCartVisible: boolean;
  setIsCartVisible: (isVisible: boolean) => void;
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
  cart: [],
  setCart: () => {},
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
      cart.quantity
    );
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
