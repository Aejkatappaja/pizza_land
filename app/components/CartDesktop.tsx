"use client";

import { useCartContext } from "@/context/CartContext";
import React from "react";
import { CartTop } from "./CartTop";
import { CartBottom } from "./CartBottom";
import { Order } from "@/types/types";
import { CartItem } from "./CartItem";

export const CartDesktop = () => {
  const { isCartVisible, cart } = useCartContext();
  return (
    <div
      className={`${
        isCartVisible ? "left-0" : "-left-full"
      } bg-white fixed top-0 bottom-0 lg:w-[500px] w-full shadow-2xl lg:flex flex-col transition-all duration-300 z-20`}
    >
      <CartTop />
      <div
        className={`lg:h-[81vh] h-[65vh] flex flex-col gap-y-4 py-2 mr-4 mt-8 items-center overflow-y-scroll scrollbar-thin ${
          cart.length >= 3 &&
          "scrollbar-track-black/10 srollbar-thumb-secondary"
        }`}
      >
        {cart?.map((order: Order, index: number) => {
          return <CartItem key={index} order={order} />;
        })}
      </div>
      <CartBottom />
    </div>
  );
};
