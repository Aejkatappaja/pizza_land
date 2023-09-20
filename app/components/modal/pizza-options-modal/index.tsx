import React from 'react';
import { PizzaElementsSelection } from '@/components/modal/pizza-options-modal/structure';
import { useVisibleContext } from '@/context';

export const SelectPizzaOptions = () => {
  const { closeModal } = useVisibleContext();
  return (
    <div
      className='z-40 h-full w-full bg-white opacity-100 outline-none lg:fixed lg:left-[50%] lg:top-[50%] lg:max-h-[600px] lg:max-w-[900px] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:rounded-2xl'
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <h2
          className='absolute right-5 top-3 z-30 cursor-pointer text-3xl font-bold text-primary duration-200 hover:scale-110'
          onClick={closeModal}
        >
          X
        </h2>
      </div>
      <PizzaElementsSelection />
    </div>
  );
};
