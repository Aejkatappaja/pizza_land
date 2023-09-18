import React from 'react';

import { useCartContext } from '@/context/CartContext';
import { useVisibleContext } from '@/context/isVisibleContext';
import { PaymentAccepted } from './payment-accepted';
import { PaymentForm } from './payment-form';

export const CheckoutDetails = () => {
  const { setIsCheckoutVisible, setIsVisible } = useVisibleContext();
  const { setCart, setIsCartVisible } = useCartContext();
  const [successMsg, setSuccessMsg] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<number>(5);

  React.useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  React.useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false);
        setCart([]);
        setIsCheckoutVisible(false);
        setIsCartVisible(false);
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successMsg]);

  return (
    <div>
      {successMsg ? (
        <PaymentAccepted count={count} />
      ) : (
        <PaymentForm setSuccessMsg={setSuccessMsg} />
      )}
    </div>
  );
};
