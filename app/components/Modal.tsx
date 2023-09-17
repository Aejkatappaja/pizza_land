'use client';

import React from 'react';
import { PizzaDetails } from './PizzaDetails';
import { CheckoutDetails } from './checkout/index.';
import { useVisibleContext } from '@/context/isVisibleContext';

export const Modal = () => {
  const { isVisible, closeModal, isCheckoutVisible, setIsCheckoutVisible } =
    useVisibleContext();

  return isVisible ? (
    <section
      className='fixed left-0 top-0 z-30 flex h-[100vh] w-[100vw] items-center justify-center bg-gray-600 bg-opacity-25'
      onClick={() => {
        {
          !isCheckoutVisible && closeModal();
        }
      }}
    >
      {isCheckoutVisible ? (
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
      ) : (
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
          <PizzaDetails />
        </div>
      )}
    </section>
  ) : null;
};
