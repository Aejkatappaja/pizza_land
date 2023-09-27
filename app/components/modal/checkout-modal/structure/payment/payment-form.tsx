import { useCartContext } from '@/context/cart.context';
import { DataProps, Order, PaymentFormProps } from '@/types/types';
import React from 'react';
import toast from 'react-hot-toast';

export const PaymentForm: React.FC<PaymentFormProps> = ({
  setSuccessMsg,
  setCustomerIdentity,
}) => {
  const { totalPrice, cart } = useCartContext();

  const firstNameRef = React.useRef<HTMLInputElement | null>(null);
  const lastNameRef = React.useRef<HTMLInputElement | null>(null);
  const phoneRef = React.useRef<HTMLInputElement | null>(null);
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const streetNameRef = React.useRef<HTMLInputElement | null>(null);
  const streetNumberRef = React.useRef<HTMLInputElement | null>(null);
  const blockRef = React.useRef<HTMLInputElement | null>(null);
  const floorRef = React.useRef<HTMLInputElement | null>(null);
  const aptRef = React.useRef<HTMLInputElement | null>(null);
  const mentionsRef = React.useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let data: DataProps;
      const firstName = firstNameRef?.current?.value;
      const lastName = lastNameRef?.current?.value;
      const phone = phoneRef?.current?.value;
      const email = emailRef?.current?.value;
      const streetName = streetNameRef?.current?.value;
      const streetNumber = streetNumberRef?.current?.value;
      const apt = aptRef?.current?.value;
      const block = blockRef?.current?.value;
      const floor = floorRef?.current?.value;
      const mentions = mentionsRef?.current?.value;
      if (
        !firstName ||
        !lastName ||
        !phone ||
        !email ||
        !streetName ||
        !streetNumber
      ) {
        toast.error('You need to fill all inputs!');
      } else {
        data = {
          firstName,
          lastName,
          phone,
          email,
          street: `${streetNumber} ${streetName}`,
          apt,
          block,
          floor,
          mentions,
        };
        setCustomerIdentity(`${data.firstName} ${data.lastName}`);
        setSuccessMsg(true);
      }
    } catch (error: unknown) {
      console.error(error);
    }
  };
  return (
    <div className='h-100vh z-30 lg:h-full lg:gap-x-8 lg:px-12 lg:py-8'>
      <h2 className='mb-6 pt-6 text-center text-[20px] font-extrabold uppercase lg:pt-0 lg:text-left'>
        Shipping & Checkout
      </h2>
      <form
        className='lg-py-0 flex h-[86vh] flex-col overflow-scroll px-8 py-4 lg:h-[29.5rem] lg:flex-row lg:gap-x-4 lg:overflow-visible lg:px-0'
        onSubmit={handleSubmit}
      >
        <div className='h-full flex-1 overflow-y-auto px-8 py-4 lg:overflow-visible lg:px-0 lg:py-0'>
          <div className='flex h-full flex-col gap-4'>
            <div className='flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4'>
              <input
                name='firstname'
                type='text'
                className='input w-full'
                placeholder='First Name'
                ref={firstNameRef}
              />
              <input
                name='lastname'
                type='text'
                className='input w-full'
                placeholder='Last Name'
                ref={lastNameRef}
              />
            </div>
            <div className='flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4'>
              <input
                name='phone-number'
                type='number'
                className='input w-full'
                placeholder='Phone'
                ref={phoneRef}
              />
              <input
                name='email'
                type='email'
                className='input w-full'
                placeholder='Email Address'
                ref={emailRef}
              />
            </div>
            <div className='flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4'>
              <input
                name='street-name'
                type='text'
                className='input w-full'
                placeholder='Street Name'
                ref={streetNameRef}
              />
              <input
                name='street-number'
                type='number'
                className='input w-full'
                placeholder='Street No.'
                ref={streetNumberRef}
              />
            </div>
            <div className='flex justify-between gap-x-4'>
              <input
                name='block'
                type='text'
                className='input w-full'
                placeholder='Block'
                ref={blockRef}
              />
              <input
                name='floor'
                type='number'
                className='input w-full'
                placeholder='Floor'
                ref={floorRef}
              />
              <input
                name='apt'
                type='number'
                className='input w-full'
                placeholder='Apt. No.'
                ref={aptRef}
              />
            </div>
            <div className='h-full flex-1 '>
              <textarea
                name='mentions'
                className='textarea h-full w-full'
                placeholder='Mentions (optional)'
                ref={mentionsRef}
              ></textarea>
            </div>
          </div>
        </div>

        <div className='flex h-full flex-1 flex-col justify-between px-8 pt-3 lg:max-w-[40%] lg:p-0'>
          <div className='mb-4 flex h-[30.2vh] flex-col rounded-lg border p-4'>
            <h3 className='mb-4 border-b pb-4 text-base font-extrabold uppercase'>
              Your order
            </h3>
            <div className='scrollbar-track-white-500 flex h-[240px] flex-col gap-y-4 overflow-hidden overflow-y-scroll py-2 font-semibold scrollbar-thin scrollbar-thumb-gray-200 '>
              {cart.map((pizza: Order, index: number) => {
                return (
                  <div key={index} className='flex justify-between text-[15px]'>
                    <div className='flex gap-x-2'>
                      <div className='capitalize'>{pizza.name}</div>
                      <div>{pizza.quantity > 1 && `x ${pizza.quantity}`}</div>
                    </div>
                    <div>${(pizza.price * pizza.quantity).toFixed(2)}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className='btn btn-lg gradient w-full' type='submit'>
            Pay ${totalPrice.toFixed(2)}
          </button>
        </div>
      </form>
    </div>
  );
};
