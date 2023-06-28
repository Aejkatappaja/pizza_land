import React from "react";
import Image from "next/image";
import { SizeSelection } from "./SizeSelection";
import { Topping } from "./Topping";
import { PizzaType, ToppingType } from "@/types/types";
import { useVisibleContext } from "@/context/isVisibleContext";
import { CrustSelection } from "./CrustSelection";

export const PizzaDetails = () => {
  const { clickedPizza } = useVisibleContext();
  const pizza = clickedPizza;
  const [size, setSize] = React.useState<string>("small");
  const [crust, setCrust] = React.useState<string>("traditional");
  const [additionalTopping, setAdditionalTopping] = React.useState<
    ToppingType[]
  >([]);
  const [additionalToppingPrice, setAdditionalToppingPrice] =
    React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);

  React.useEffect(() => {
    let updatedPrice = 0;

    switch (size) {
      case "small":
        updatedPrice = pizza?.priceSm + additionalToppingPrice;
      case "medium":
        updatedPrice = pizza?.priceMd + additionalToppingPrice;
        break;
      case "large":
        updatedPrice = pizza?.priceLg + additionalToppingPrice;
        break;
      default:
        return;
    }

    setPrice(Number(updatedPrice.toFixed(2)));
  }, [
    size,
    pizza?.priceSm,
    pizza?.priceMd,
    pizza?.priceLg,
    additionalToppingPrice,
  ]);
  React.useEffect(() => {
    if (additionalTopping.length) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price;
      }, 0);
    } else {
      setAdditionalToppingPrice(0);
    }
  }, [additionalTopping]);

  console.log(price);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8 ">
      {/*top */}
      <div className="lg:flex-1 flex justify-center items-center">
        {/*pizza image */}
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image
            src={pizza.image}
            width={450}
            height={450}
            alt="pizza"
            priority
            className="mx-auto relative"
          />
        </div>
      </div>
      {/*details*/}
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2">
            {/* name */}
            <div className="font-semibold">
              <h2 className="capitalize text-3xl mb-1">{pizza.name}</h2>
              {/* size, crust text */}
              <div className="bg-yellow-200 mb-6 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25 cm"
                    : size === "medium"
                    ? "30 cm"
                    : size === "large"
                    ? "35 cm"
                    : false}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>
            <SizeSelection />
            <CrustSelection crust={crust} setCrust={setCrust} />
            <div>Choose topping</div>
            <div>
              {pizza.toppings?.map((topping, index) => {
                return <Topping key={index} />;
              })}
            </div>
          </div>
          <div className=" flex items-center px-2 lg:items-end">
            <button className="btn btn-lg gradient w-full flex justify-center gap-x-2">
              <div>Add to cart for :</div>
              <div>$ {price}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
