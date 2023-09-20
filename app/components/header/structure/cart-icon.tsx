'use client';

import { useCartContext } from '@/context';
import React from 'react';
import Image from 'next/image';

export const CartIcon = () => {
  const { cart } = useCartContext();
  const { setIsCartVisible, isCartVisible } = useCartContext();
  return (
    <div
      onClick={() => {
        cart.length && setIsCartVisible(!isCartVisible);
      }}
      className='relative hidden cursor-pointer lg:flex'
    >
      <Image src={'bag.svg'} width={38} height={38} alt='cart-icon' />
      <div className='absolute -bottom-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-tertiary font-robotoCondensed text-[13px] text-white'>
        {cart.length}
      </div>
    </div>
  );
};
