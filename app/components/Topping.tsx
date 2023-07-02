import React from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { ToppingType } from "@/types/types";

interface ToppingProps {
  topping: ToppingType;
  additionalTopping: ToppingType[];
  setAdditionalTopping: React.Dispatch<React.SetStateAction<ToppingType[]>>;
}

export const Topping: React.FC<ToppingProps> = ({
  topping,
  additionalTopping,
  setAdditionalTopping,
}) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  return (
    <div
      className={`${
        isChecked && "border-orange"
      } w-full max-w-[110px] h-[140px] p-1`}
    >
      <Image src={topping.image} height={70} width={70} alt="Topping" />
    </div>
  );
};
