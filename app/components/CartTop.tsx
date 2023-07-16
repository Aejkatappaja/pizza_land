import { useCartContext } from "@/context/CartContext";
import React from "react";

export const CartTop = () => {
  const { closeCart, cart } = useCartContext();
  return (
    <div className="flex justify-between items-center py-6 px-6 border-b-2 border-gray-200">
      <h1 className="text-xl font-quicksand  text-center ">
        Shopping Bag -{" "}
        {cart.length === 1
          ? `${cart.length} product`
          : cart.length > 1
          ? `${cart.length} products`
          : `Empty`}
      </h1>

      <h1
        className="text-xl text-bold text-black z-30 hover:scale-110 duration-200 cursor-pointer h-6 w-6 flex justify-center items-center "
        onClick={closeCart}
      >
        X
      </h1>
    </div>
  );
};
