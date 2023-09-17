import React from 'react';

import { useCartContext } from '@/context/CartContext';
import { useVisibleContext } from '@/context/isVisibleContext';

export const CartBottom = () => {
  const { totalPrice, cart } = useCartContext();
  const { setIsCheckoutVisible, setIsVisible } = useVisibleContext();
  return cart.length ? (
    <div className='flex h-32 flex-col justify-end border-t-2 px-4 py-2'>
      <div className='flex justify-between px-2 font-bold'>
        <h1>Total : </h1>
        <h1>${totalPrice.toFixed(2)}</h1>
      </div>
      <button
        className='btn btn-lg gradient mt-4 w-full'
        onClick={() => {
          setIsCheckoutVisible(true);
          setIsVisible(true);
        }}
        disabled={!cart.length}
      >
        Checkout
      </button>
    </div>
  ) : null;
};
