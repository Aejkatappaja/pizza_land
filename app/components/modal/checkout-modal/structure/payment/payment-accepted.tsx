import React from 'react';
import Image from 'next/image';

interface PaymentAcceptedProps {
  count: number;
}

export const PaymentAccepted: React.FC<PaymentAcceptedProps> = ({ count }) => {
  return (
    <div className='z-50 flex h-[100vh] flex-col items-center justify-center px-6 lg:h-[600px]'>
      <h2 className='text-center text-2xl font-semibold'>
        Thank you ! The order has been placed !
      </h2>
      <Image
        src={'/success-1.gif'}
        width={150}
        height={150}
        alt='success message'
      />
      <div>
        This window will close in <span>{count}</span> seconds
      </div>
    </div>
  );
};
