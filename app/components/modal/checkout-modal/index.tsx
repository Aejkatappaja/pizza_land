import React from 'react';
import { CheckoutDetails } from './structure';
import { useVisibleContext } from '@/context';

export const CheckoutModal = () => {
  const { closeModal, setIsCheckoutVisible } = useVisibleContext();
  return (
    <div
      className='z-40 h-full w-full bg-white opacity-100 outline-none lg:fixed lg:max-h-[600px] lg:max-w-[900px] lg:rounded-2xl'
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <h2
          className='absolute right-5 top-3 z-30 cursor-pointer text-2xl font-bold text-primary duration-200 hover:scale-110'
          onClick={() => {
            closeModal();
            setIsCheckoutVisible(false);
          }}
        >
          X
        </h2>
      </div>
      <CheckoutDetails />
    </div>
  );
};
