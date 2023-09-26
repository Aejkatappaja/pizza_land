import React from 'react';

import { useCartContext, useVisibleContext } from '@/context';
import { PaymentAccepted, PaymentForm } from './payment';

export const CheckoutDetails = () => {
  const { setIsCheckoutVisible, setIsVisible } = useVisibleContext();
  const { setCart, setIsCartVisible } = useCartContext();
  const [successMsg, setSuccessMsg] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<number>(5);
  const [customerIdentity, setCustomerIdentity] = React.useState<string | null>(
    null
  );

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
        <PaymentAccepted count={count} customerIdentity={customerIdentity} />
      ) : (
        <PaymentForm
          setSuccessMsg={setSuccessMsg}
          setCustomerIdentity={setCustomerIdentity}
        />
      )}
    </div>
  );
};
