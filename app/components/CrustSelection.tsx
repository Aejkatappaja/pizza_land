import React from 'react';

interface CrustSelectionProps {
  crust: string;
  setCrust: (crust: string) => void;
}

export const CrustSelection: React.FC<CrustSelectionProps> = ({
  crust,
  setCrust,
}) => {
  return (
    <div className='flex items-center justify-center lg:justify-start'>
      <div className='mb-8 flex gap-x-12 font-medium'>
        <label className='flex cursor-pointer items-center gap-x-2'>
          <input
            className='h-4 w-4 appearance-none rounded-full border border-gray-400 checked:bg-gradient-to-r checked:from-primary checked:to-secondary'
            type='radio'
            name='crust'
            value='traditional'
            checked={crust === 'traditional'}
            onChange={(e) => setCrust(e.target.value)}
          />
          Traditional
        </label>
        <div>
          <label className='flex cursor-pointer items-center gap-x-2'>
            <input
              className='h-4 w-4 appearance-none rounded-full border border-gray-400 checked:bg-gradient-to-r checked:from-primary checked:to-secondary'
              type='radio'
              name='crust'
              value='thin'
              checked={crust === 'thin'}
              onChange={(e) => setCrust(e.target.value)}
            />
            Thin
          </label>
        </div>
      </div>
    </div>
  );
};
