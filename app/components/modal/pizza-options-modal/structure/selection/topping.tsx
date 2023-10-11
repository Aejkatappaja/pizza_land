import React from 'react';
import Image from 'next/image';
import { IoMdCheckmark } from 'react-icons/io';
import { ToppingProps } from '@/types/types';

export const Topping: React.FC<ToppingProps> = ({
  topping,
  additionalTopping,
  setAdditionalTopping,
}) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  // const handleTopping = () => {
  //   if (isChecked) {
  //     const newToppings = new Set([...additionalTopping, { ...topping }]);
  //     setAdditionalTopping(Array.from(newToppings));
  //   } else {
  //     const newToppings = additionalTopping.filter((toppingObj) => {
  //       return toppingObj.name !== topping.name;
  //     });
  //     setAdditionalTopping(newToppings);
  //   }
  // };

  // React.useEffect(() => {
  //   handleTopping();
  // }, [handleTopping, isChecked]);

  React.useEffect(() => {
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

    handleTopping();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <div
      className={`${
        isChecked && 'border-orange'
      } relative flex h-[140px] w-full max-w-[110px] flex-col items-center justify-center rounded-md border bg-white p-1`}
    >
      <Image
        src={topping.image}
        height={70}
        width={70}
        alt='Topping'
        className='mb-2'
      />
      <div className='text-center text-sm font-medium capitalize'>
        {topping.name}
      </div>
      <input
        type='checkbox'
        checked={isChecked}
        className='absolute h-full w-full cursor-pointer opacity-0'
        onChange={handleCheckBox}
      />
      <div
        className={`${
          isChecked ? 'opacity-100' : 'opacity-0'
        } absolute right-1 top-1`}
      >
        <IoMdCheckmark className='text-xl text-orange' />
      </div>
    </div>
  );
};
