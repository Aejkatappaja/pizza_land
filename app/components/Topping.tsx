import React from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { ToppingProps } from "@/types/types";

export const Topping: React.FC<ToppingProps> = ({
  topping,
  additionalTopping,
  setAdditionalTopping,
}) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleTopping = () => {
    if (isChecked) {
      const newToppings = new Set([...additionalTopping, { ...topping }]);
      setAdditionalTopping(Array.from(newToppings));
    } else {
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name;
      });
      setAdditionalTopping(newToppings);
    }
  };

  React.useEffect(() => {
    handleTopping();
  }, [isChecked]);
  return (
    <div
      className={`${
        isChecked && "border-orange"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
      <Image
        src={topping.image}
        height={70}
        width={70}
        alt="Topping"
        className="mb-2"
      />
      <div className="text-sm capitalize text-center font-medium ">
        {topping.name}
      </div>
      <input
        type="checkbox"
        checked={isChecked}
        className="absolute w-full h-full opacity-0 cursor-pointer"
        onChange={handleCheckBox}
      />
      <div
        className={`${
          isChecked ? "opacity-100" : "opacity-0"
        } absolute top-1 right-1`}
      >
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  );
};
