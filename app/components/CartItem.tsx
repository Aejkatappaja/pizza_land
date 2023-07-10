import { Order } from "@/types/types";
import React from "react";
import Image from "next/image";
import { BiPlus, BiMinus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

interface CartItemProps {
  order: Order;
}

export const CartItem: React.FC<CartItemProps> = ({ order }) => {
  console.log(order);

  return (
    <div className="bg-pink-100 w-full px-4">
      <div className="flex items-center">
        <div>
          <Image src={order.image} width={90} height={90} alt="" />
        </div>
        <div className="border-red-800 border-2 h-full flex flex-col gap-2 w-full py-2 px-4">
          <div className="flex justify-between">
            <h1 className="font-bold capitalize font-quicksand">
              {order.name}
            </h1>
            <span className="text-red-600 font-bold">X</span>
          </div>

          <h2 className="capitalize">{order.crust} crust</h2>
          <div className="flex gap-1">
            <h2 className="capitalize">{order.size}</h2>
            <span> size</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="btn btn-primary w-6 active:translate-y-1">
                -
              </button>
              <h1>{order.quantity}</h1>
              <button className="btn btn-primary w-6 active:translate-y-[-0.2rem]">
                +
              </button>
            </div>
            <span>${order.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
