import React from 'react';

import { CartButton } from './cart-button';
import { BrandLogo } from './brand-logo';
import { Contact } from './address-number';

export const Header = () => {
  return (
    <nav className='absolute w-full bg-pink-50/30 py-8'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-y-3 lg:flex-row'>
        <BrandLogo />
        <div className='flex items-center gap-x-8'>
          <Contact />
          <CartButton />
        </div>
      </div>
    </nav>
  );
};
