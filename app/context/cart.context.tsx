'use client';

import { Order } from '@/types/types';
import React from 'react';

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
  increaseProductQuantity: (productId: number) => void;
  decreaseProductQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
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
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {},
  removeProduct: () => {},
});

export const CartContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = React.useState<Order[]>([]);

  const addToCart = (product: Order) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCart((prevCart) => [...prevCart, newProduct]);
    }
  };

  const increaseProductQuantity = (productId: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const decreaseProductQuantity = (productId: number) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingProductIndex].quantity > 1) {
        updatedCart[existingProductIndex].quantity -= 1;
        setCart(updatedCart);
      } else {
        updatedCart.splice(existingProductIndex, 1);
        setCart(updatedCart);
      }
    }
  };

  const removeProduct = (productId: number) => {
    const removingProductIndex = cart.findIndex(
      (item) => item.id === productId
    );
    if (removingProductIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart.splice(removingProductIndex, 1);
      setCart(updatedCart);
    }
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
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
