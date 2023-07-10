"use client";

import { Order } from "@/types/types";
import React from "react";

interface CartContextType {
  isCartVisible: boolean;
  setIsCartVisible: (isVisible: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  cart: Order[];
  setCart: React.Dispatch<React.SetStateAction<Order[]>>;
  addToCart: (cart: Order) => void;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
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
  totalPrice: 0,
  setTotalPrice: () => {},
});

export const CartContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = React.useState<Order[]>([]);
  const addToCart = (product: Order) => {
    const newProduct = { ...product };

    setCart((prevCart) => [...prevCart, newProduct]);
  };

  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  React.useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalPrice(price);
  }, [cart]);

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
    totalPrice,
    setTotalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
