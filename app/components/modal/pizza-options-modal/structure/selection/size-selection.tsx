import Image from 'next/image';
import React from 'react';

import { SizeSelectionProps } from '@/types/types';

export const SizeSelection: React.FC<SizeSelectionProps> = ({
  pizza,
  size,
  setSize,
}) => {
  return (
    <div className='mx-auto flex max-w-sm items-center justify-center lg:max-w-none lg:justify-start'>
      <div className='mb-10 flex items-baseline gap-x-12 font-medium'>
        <label className=' flex cursor-pointer flex-col items-center gap-x-2'>
          <Image
            src={pizza.image}
            width={60}
            height={60}
            alt='pizza'
            className={`${
              size === 'small'
                ? 'rounded-full border-2 border-orange p-[2px]'
                : 'border-transparent saturate-[.1] filter'
            }`}
          />
          <input
            type='radio'
            name='size'
            value='small'
            checked={size === 'small'}
            onChange={(e) => setSize(e.target.value)}
            className='appearance-none'
          />
          Small
        </label>
        <label className='flex cursor-pointer flex-col items-center gap-x-2'>
          <Image
            src={pizza.image}
            width={70}
            height={70}
            alt='pizza'
            className={`${
              size === 'medium'
                ? 'rounded-full border-2 border-orange p-[2px]'
                : 'border-transparent saturate-[.1] filter'
            }`}
          />
          <input
            type='radio'
            name='size'
            value='medium'
            checked={size === 'medium'}
            onChange={(e) => setSize(e.target.value)}
            className='appearance-none'
          />
          Medium
        </label>
        <label className=' flex cursor-pointer flex-col items-center gap-x-2'>
          <Image
            src={pizza.image}
            width={80}
            height={80}
            alt='pizza'
            className={`${
              size === 'large'
                ? 'rounded-full border-2 border-orange p-[2px]'
                : 'border-transparent saturate-[.1] filter'
            }`}
          />
          <input
            type='radio'
            name='size'
            value='large'
            checked={size === 'large'}
            onChange={(e) => setSize(e.target.value)}
            className='appearance-none'
          />
          Large
        </label>
      </div>
    </div>
  );
};
