import { Order } from "@/types/types";
import React from "react";
import Image from "next/image";
import { BiPlus, BiMinus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

interface CartItemProps {
  order: Order;
}

export const CartItem: React.FC<CartItemProps> = ({ order }) => {
  return (
    <div className="bg-pink-100">
      <div>
        <div>
          <Image src={order.image} width={90} height={90} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};
