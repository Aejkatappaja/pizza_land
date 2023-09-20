'use client';

import React from 'react';

import { BsHandbagFill } from 'react-icons/bs';
import { useCartContext } from '@/context';

export const CartMobileIcon = () => {
  const { setIsCartVisible, isCartVisible } = useCartContext();
  const { cart } = useCartContext();
  return (
    <div
      onClick={() => cart.length && setIsCartVisible(!isCartVisible)}
      className='fixed  bottom-[5%] right-[6%] z-20 flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-full bg-slate-800 text-white lg:hidden'
    >
      <BsHandbagFill className='text-3xl' />
      {cart.length ? (
        <span className='gradient absolute bottom-3 right-4 flex h-4 w-4 items-center justify-center rounded-full font-robotoCondensed text-[13px] text-white'>
          {cart.length}
        </span>
      ) : (
        false
      )}
    </div>
  );
};
