"use client";

import { useCartContext } from "@/context/CartContext";
import { useVisibleContext } from "@/context/isVisibleContext";
import React from "react";
import { BsHandbagFill } from "react-icons/bs";

interface CartMobileIconProps {}

export const CartMobileIcon: React.FC<CartMobileIconProps> = ({}) => {
  const { openModal } = useVisibleContext();
  const { cart } = useCartContext();
  return (
    <div
      onClick={() => cart.length && openModal}
      className="bg-tertiary w-[72px] h-[72px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[6%] bottom-[12%] z-20 lg:hidden"
    >
      <BsHandbagFill className="text-4xl" />
      {cart.length ? (
        <span className="absolute text-white bottom-3 right-4 gradient w-5 h-5 flex justify-center items-center rounded-full font-robotoCondensed text-[13px]">
          {cart.length}
        </span>
      ) : (
        false
      )}
    </div>
  );
};
