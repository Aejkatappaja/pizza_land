import React from 'react';

import { CartIcon, BrandLogo, Contact } from './structure';

export const Header = () => {
  return (
    <nav className='absolute w-full bg-pink-50/30 py-8'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-y-3 lg:flex-row'>
        <BrandLogo />
        <div className='flex items-center gap-x-8'>
          <Contact />
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};
