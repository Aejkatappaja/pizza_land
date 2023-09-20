'use client';

import React from 'react';
import Image from 'next/image';

import { Order } from '@/types/types';
import { CartBottom, CartItem, CartTop } from './structure';
import { useCartContext } from '@/context';

export const CartDesktop = () => {
  const { isCartVisible, cart } = useCartContext();
  return (
    <div
      className={`${
        isCartVisible ? 'left-0' : '-left-full'
      } fixed bottom-0 top-0 z-50 flex h-full w-full flex-col bg-white shadow-2xl transition-all duration-300 lg:h-[100vh] lg:w-[500px]`}
    >
      <CartTop />
      <div
        className={`mr-4 mt-8 flex h-[65vh] flex-col items-center gap-y-4 overflow-y-scroll py-2 scrollbar-thin lg:h-[81vh] ${
          cart.length >= 3 &&
          'srollbar-thumb-secondary scrollbar-track-black/10'
        }`}
      >
        {cart.length >= 1 ? (
          cart?.map((order: Order, index: number) => {
            return <CartItem key={index} order={order} />;
          })
        ) : (
          <div className='flex  h-full items-center justify-center'>
            <Image
              src='/emptyCart.png'
              width={420}
              height={420}
              alt='cart-empty'
            />{' '}
          </div>
        )}
      </div>
      <CartBottom />
    </div>
  );
};
