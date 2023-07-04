import React from "react";
import { BsHandbagFill } from "react-icons/bs";

interface CartMobileIconProps {}

export const CartMobileIcon: React.FC<CartMobileIconProps> = ({}) => {
  return (
    <div className="bg-tertiary w-[72px] h-[72px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[6%] bottom-[12%] z-20 lg:hidden">
      <BsHandbagFill className="text-4xl" />
      <span className="absolute text-white bottom-3 right-4 gradient w-5 h-5 flex justify-center items-center rounded-full font-robotoCondensed text-[13px]">
        3
      </span>
    </div>
  );
};
