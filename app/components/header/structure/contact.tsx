import React from 'react';
import Image from 'next/image';

export const Contact = () => {
  return (
    <div className='flex items-center gap-x-3'>
      <Image src={'phone.svg'} width={42} height={42} alt='phone-icon' />
      <div className='text-white'>
        <div className='font-robotoCondensed text-sm font-medium uppercase leading-none'>
          24/7 Pizza delivery service
        </div>
        <div className='font-robotoCondensed text-3xl font-extrabold leading-none tracking-wide'>
          920 234 5743
        </div>
      </div>
    </div>
  );
};
