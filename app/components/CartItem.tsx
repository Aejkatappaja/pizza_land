import React from "react";
import Image from "next/image";

import { CartItemProps } from "@/types/types";
import { useCartContext } from "@/context/CartContext";

export const CartItem: React.FC<CartItemProps> = ({ order }) => {
  const { increaseProductQuantity, decreaseProductQuantity, removeProduct } =
    useCartContext();
  return (
    <div className="border-b-2 last-of-type:border-none border-b-gray-200 w-full px-4 py-4 cursor-default">
      <div className="flex items-center px-4">
        <div>
          <Image src={order.image} width={120} height={120} alt="" />
        </div>
        <div className=" h-full flex flex-col gap-2 w-full py-2 ml-6">
          <div className="flex justify-between">
            <h1 className="font-bold capitalize font-quicksand">
              {order.name}
            </h1>
            <span
              className="text-red-600 font-bold cursor-pointer active:translate-y-[-0.2rem]"
              onClick={() => removeProduct(order.id)}
            >
              X
            </span>
          </div>
          <h2 className="capitalize">{order.crust} crust</h2>
          <div className="flex gap-1">
            <h2 className="capitalize">{order.size}</h2>
            <span> size</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                className="btn btn-primary w-6 gradient active:translate-y-1"
                onClick={() => decreaseProductQuantity(order.id)}
              >
                -
              </button>
              <h1 className="w-3 text-center">{order.quantity}</h1>
              <button
                className="btn btn-primary w-6 gradient active:translate-y-[-0.25rem]"
                onClick={() => increaseProductQuantity(order.id)}
              >
                +
              </button>
            </div>
            <span>${order.price}</span>
          </div>
        </div>
      </div>
      {order.additionalTopping.length ? (
        <div className="flex gap-3 mt-4 w-full pl-6 py-4">
          <div className="flex gap-3 flex-wrap items-center">
            <h1 className="mr-5">
              {order.additionalTopping.length > 1 ? "Toppings:" : "Topping:"}
            </h1>
            {order?.additionalTopping.map((item, index) => {
              return (
                <div
                  key={index}
                  className="gradient rounded-2xl px-3 cursor-default"
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};
