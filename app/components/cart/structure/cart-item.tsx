import React from 'react';
import Image from 'next/image';

import { CartItemProps } from '@/types/types';
import { useCartContext } from '@/context';

export const CartItem: React.FC<CartItemProps> = ({ order }) => {
  const { increaseProductQuantity, decreaseProductQuantity, removeProduct } =
    useCartContext();

  const additionnalToppingPurchased = order?.additionalTopping?.length;

  return (
    <div className='w-full cursor-default border-b-2 border-b-gray-200 px-4 py-4 last-of-type:border-none'>
      <div className='flex items-center px-4'>
        <div>
          <Image src={order.image} width={120} height={120} alt='' />
        </div>
        <div className=' ml-6 flex h-full w-full flex-col gap-2 py-2'>
          <div className='flex justify-between'>
            <h1 className='font-quicksand font-bold capitalize'>
              {order.name}
            </h1>
            <span
              className='cursor-pointer font-bold text-red-600 active:translate-y-[-0.2rem]'
              onClick={() => removeProduct(order.id)}
            >
              X
            </span>
          </div>
          <h2 className='capitalize'>{order.crust} crust</h2>
          <div className='flex gap-1'>
            <h2 className='capitalize'>{order.size}</h2>
            <span> size</span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <button
                className='btn btn-primary gradient w-6 active:translate-y-1'
                onClick={() => decreaseProductQuantity(order.id)}
              >
                -
              </button>
              <h1 className='w-3 text-center'>{order.quantity}</h1>
              <button
                className='btn btn-primary gradient w-6 active:translate-y-[-0.25rem]'
                onClick={() => increaseProductQuantity(order.id)}
              >
                +
              </button>
            </div>
            <span>${order.price}</span>
          </div>
        </div>
      </div>
      {additionnalToppingPurchased ? (
        <div className='mt-4 flex w-full gap-3 py-4 pl-6'>
          <div className='flex flex-wrap items-center gap-3'>
            <h1 className='mr-5'>
              {additionnalToppingPurchased > 1 ? 'Toppings:' : 'Topping:'}
            </h1>
            {order?.additionalTopping.map((item, index) => {
              return (
                <div
                  key={index}
                  className='gradient cursor-default rounded-2xl px-3'
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};
