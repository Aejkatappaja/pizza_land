"use client";

import React from "react";
import Image from "next/image";
import { PizzaProps, PizzaType } from "../types/types";
import Link from "next/link";
import { useVisibleContext } from "@/context/isVisibleContext";

export const Pizza: React.FC<PizzaProps> = ({ key, pizza }) => {
  const { isVisible, setIsVisible, setSelectedPizza } = useVisibleContext();

  return (
    <>
      <div className="group py-2 px-4 xl:py-4 xl-px-2 rounded-xl" key={key}>
        <Link href={`/pizza/${pizza.id}`}>
          <Image
            className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
            width={270}
            height={270}
            src={pizza.image}
            alt="pizza"
          />
        </Link>
        <div>
          <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
            {pizza.name}
          </div>
        </div>
        <div className="text-sm font-medium min-h-[60px] mb-6">
          {pizza.description}
        </div>
        <div className="mb-6 flex items-center justify-between">
          <div className="hidden lg:flex text-xl font-semibold">
            starts at {pizza.priceSm}
          </div>
          <button
            className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
            onClick={() => {
              setSelectedPizza(pizza);
              setIsVisible(!isVisible);
            }}
          >
            Choose
          </button>
          <button
            className="btn btn-sm gradient lg:hidden px-3"
            onClick={() => {
              setSelectedPizza(pizza);
              setIsVisible(!isVisible);
            }}
          >
            starts at {pizza.priceSm}
          </button>
        </div>
      </div>
    </>
  );
};
