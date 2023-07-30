"use client";

import React from "react";
import Image from "next/image";

import { Order } from "@/types/types";
import { CartTop } from "./CartTop";
import { CartItem } from "./CartItem";
import { CartBottom } from "./CartBottom";
import { useCartContext } from "@/context/CartContext";

export const CartDesktop = () => {
  const { isCartVisible, cart } = useCartContext();
  return (
    <div
      className={`${
        isCartVisible ? "left-0" : "-left-full"
      } bg-white fixed top-0 bottom-0 lg:w-[500px] w-full shadow-2xl lg:h-full h-[100vh] lg:flex flex-col transition-all duration-300 z-50`}
    >
      <CartTop />
      <div
        className={`lg:h-[81vh] h-[65vh] flex flex-col gap-y-4 py-2 mr-4 mt-8 items-center overflow-y-scroll scrollbar-thin ${
          cart.length >= 3 &&
          "scrollbar-track-black/10 srollbar-thumb-secondary"
        }`}
      >
        {cart.length >= 1 ? (
          cart?.map((order: Order, index: number) => {
            return <CartItem key={index} order={order} />;
          })
        ) : (
          <div className="flex  items-center justify-center h-full">
            <Image
              src="/emptyCart.png"
              width={420}
              height={420}
              alt="cart-empty"
            />{" "}
          </div>
        )}
      </div>
      <CartBottom />
    </div>
  );
};
