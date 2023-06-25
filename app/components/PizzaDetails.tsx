import React from "react";
import Image from "next/image";
import { SizeSelection } from "./SizeSelection";
import { Topping } from "./Topping";
import { PizzaType } from "@/types/types";
import { useVisibleContext } from "@/context/isVisibleContext";

export const PizzaDetails = () => {
  const { clickedPizza } = useVisibleContext();
  const pizza = clickedPizza;
  const [size, setSize] = React.useState<string>("small");
  const [crust, setCrust] = React.useState<string>("traditional");
  const [additionalTopping, setAdditionalTopping] = React.useState([]);
  const [additionalToppingPrice, setAdditionalToppingPrice] =
    React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);

  React.useEffect(() => {
    let updatedPrice = 0;

    switch (size) {
      case "small":
        updatedPrice = pizza?.priceSm + additionalToppingPrice;
        break;
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

  console.log(price);

  return <div></div>;
};
