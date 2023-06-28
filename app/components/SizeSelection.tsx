import { PizzaType } from "@/types/types";
import Image from "next/image";
import React from "react";

interface SizeSelectionProps {
  pizza: PizzaType;
  size: string;
  setSize: (size: string) => void;
}

export const SizeSelection: React.FC<SizeSelectionProps> = ({
  pizza,
  size,
  setSize,
}) => {
  return (
    <div className="bg-indigo-400 ">
      {/* sizes */}
      <div className="flex ">
        <label className="bg-red-200 flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            src={pizza.image}
            width={60}
            height={60}
            alt="pizza"
            className={`${
              size === "small"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Small
        </label>
        <label className="bg-red-200 flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            src={pizza.image}
            width={70}
            height={70}
            alt="pizza"
            className={`${
              size === "medium"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === "medium"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Medium
        </label>
        <label className="bg-red-200 flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            src={pizza.image}
            width={80}
            height={80}
            alt="pizza"
            className={`${
              size === "large"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
          />
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === "large"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          Large
        </label>
      </div>
    </div>
  );
};
