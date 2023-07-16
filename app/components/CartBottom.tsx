import React from "react";

import { useCartContext } from "@/context/CartContext";
import { useVisibleContext } from "@/context/isVisibleContext";

export const CartBottom = () => {
  const { totalPrice } = useCartContext();
  const { setIsCheckoutVisible, setIsVisible } = useVisibleContext();
  return (
    <div className="px-4 py-2 border-t-2 h-32 flex flex-col justify-end">
      <div className="flex justify-between px-2 font-bold">
        <h1>Total : </h1>
        <h1>${totalPrice.toFixed(2)}</h1>
      </div>
      <button
        className="btn btn-lg gradient w-full mt-4"
        onClick={() => {
          setIsCheckoutVisible(true);
          setIsVisible(true);
        }}
      >
        Checkout
      </button>
    </div>
  );
};
