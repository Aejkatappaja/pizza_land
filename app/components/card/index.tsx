'use client';

import React from 'react';
import Image from 'next/image';

import { PizzaProps } from '../../types/types';
import { useVisibleContext } from '@/context';

export const Pizza: React.FC<PizzaProps> = ({ key, pizza }) => {
  const { isVisible, setIsVisible, setSelectedPizza } = useVisibleContext();

  return (
    <>
      <div className='xl-px-2 group rounded-xl px-4 py-2 xl:py-4' key={key}>
        <Image
          className='mb-8 cursor-pointer transition-all duration-300 lg:group-hover:translate-y-3'
          width={270}
          height={270}
          src={pizza.image}
          alt='pizza'
          onClick={() => {
            setSelectedPizza(pizza);
            setIsVisible(!isVisible);
          }}
        />

        <div>
          <div className='mb-3 cursor-pointer text-xl font-bold capitalize'>
            {pizza.name}
          </div>
        </div>
        <div className='mb-6 min-h-[60px] text-sm font-medium'>
          {pizza.description}
        </div>
        <div className='mb-6 flex items-center justify-between'>
          <div className='hidden text-xl font-semibold lg:flex'>
            starts at {pizza.priceSm}
          </div>
          <button
            className='gradient btn-sm hidden rounded-lg text-sm font-semibold text-white lg:flex'
            onClick={() => {
              setSelectedPizza(pizza);
              setIsVisible(!isVisible);
            }}
          >
            Choose
          </button>
          <button
            className='btn btn-sm gradient px-3 lg:hidden'
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
