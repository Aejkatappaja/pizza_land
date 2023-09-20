import React from 'react';

import { useCartContext } from '@/context';

export const CartTop = () => {
  const { closeCart, cart } = useCartContext();
  return (
    <div className='flex items-center justify-between border-b-2 border-gray-200 px-6 py-6'>
      <h1 className='text-center font-quicksand  text-xl '>
        Shopping Bag -{' '}
        {cart.length === 1
          ? `${cart.length} product`
          : cart.length > 1
          ? `${cart.length} products`
          : `Empty`}
      </h1>

      <h1
        className='text-bold z-30 flex h-6 w-6 cursor-pointer items-center justify-center text-xl text-black duration-200 hover:scale-110 '
        onClick={closeCart}
      >
        X
      </h1>
    </div>
  );
};
