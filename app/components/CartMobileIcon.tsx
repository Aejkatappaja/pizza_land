"use client";

import React from "react";

import { BsHandbagFill } from "react-icons/bs";
import { useCartContext } from "@/context/CartContext";

export const CartMobileIcon = () => {
  const { setIsCartVisible, isCartVisible } = useCartContext();
  const { cart } = useCartContext();
  return (
    <div
      onClick={() => cart.length && setIsCartVisible(!isCartVisible)}
      className="bg-slate-800  w-[64px] h-[64px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[6%] bottom-[5%] z-20 lg:hidden"
    >
      <BsHandbagFill className="text-3xl" />
      {cart.length ? (
        <span className="absolute text-white bottom-3 right-4 gradient w-4 h-4 flex justify-center items-center rounded-full font-robotoCondensed text-[13px]">
          {cart.length}
        </span>
      ) : (
        false
      )}
    </div>
  );
};
