"use client";

import { useCartContext } from "@/context/CartContext";
import React from "react";
import { CartTop } from "./CartTop";
import { CartBottom } from "./CartBottom";
import { Order } from "@/types/types";
import { CartItem } from "./CartItem";

interface CartDesktopProps {}

export const CartDesktop: React.FC<CartDesktopProps> = ({}) => {
  const { isCartVisible, cart } = useCartContext();
  return (
    <div
      className={`${
        isCartVisible ? "left-0" : "-left-full"
      } bg-white fixed top-0 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col  transition-all duration-300 z-20`}
    >
      <CartTop />
      <div className=" h-[85vh] flex flex-col items-center overflow-scroll border-2">
        {cart?.map((order: Order, index: number) => {
          return <CartItem key={index} order={order} />;
        })}
      </div>
      <CartBottom />
    </div>
  );
};
