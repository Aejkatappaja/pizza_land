import React from 'react';
import { useCartContext, CartContextProvider } from './cart.context';
import { useVisibleContext, VisibleContextProvider } from './visible.context';

interface ContextProviderProps {
  children: React.ReactNode;
}
export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  return (
    <CartContextProvider>
      <VisibleContextProvider>{children}</VisibleContextProvider>
    </CartContextProvider>
  );
};

export { useCartContext, useVisibleContext };
