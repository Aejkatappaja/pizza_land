"use client";

import { useCartContext } from "@/context/CartContext";
import React from "react";
import Image from "next/image";

export const CartButton = () => {
  const { cart } = useCartContext();
  const { setIsCartVisible, isCartVisible } = useCartContext();
  return (
    <div
      onClick={() => {
        cart.length && setIsCartVisible(!isCartVisible);
      }}
      className="relative cursor-pointer hidden lg:flex"
    >
      <Image src={"bag.svg"} width={38} height={38} alt="cart-icon" />
      <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">
        {cart.length}
      </div>
    </div>
  );
};
