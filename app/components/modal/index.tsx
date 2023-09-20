'use client';

import React from 'react';

import { useVisibleContext } from '@/context';
import { SelectPizzaOptions } from './pizza-options-modal';
import { CheckoutModal } from './checkout-modal';

export const Modal = () => {
  const { isVisible, closeModal, isCheckoutVisible } = useVisibleContext();

  return isVisible ? (
    <section
      className='fixed left-0 top-0 z-30 flex h-[100vh] w-[100vw] items-center justify-center bg-gray-600 bg-opacity-25'
      onClick={() => {
        {
          !isCheckoutVisible && closeModal();
        }
      }}
    >
      {isCheckoutVisible ? <CheckoutModal /> : <SelectPizzaOptions />}
    </section>
  ) : null;
};
