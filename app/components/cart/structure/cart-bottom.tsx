import React from 'react';

import { useVisibleContext, useCartContext } from '@/context';

export const CartBottom = () => {
  const { totalPrice, cart } = useCartContext();
  const { setIsCheckoutVisible, setIsVisible } = useVisibleContext();
  const { setIsCartVisible } = useCartContext();

  const handleCheckout = () => {
    setIsCheckoutVisible(true);
    setIsCartVisible(false);
    setIsVisible(true);
  };

  const CartIsNotEmpty = cart.length;

  return CartIsNotEmpty ? (
    <div className='flex h-32 flex-col justify-end border-t-2 px-4 py-2'>
      <div className='flex justify-between px-2 font-bold'>
        <h1>Total : </h1>
        <h1>${totalPrice.toFixed(2)}</h1>
      </div>
      <button
        className='btn btn-lg gradient mt-4 w-full'
        onClick={() => {
          handleCheckout();
        }}
        disabled={!CartIsNotEmpty}
      >
        Checkout
      </button>
    </div>
  ) : null;
};
