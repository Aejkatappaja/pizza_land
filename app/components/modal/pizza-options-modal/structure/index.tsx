import React from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';

import { Topping, SizeSelection, CrustSelection } from './selection';

import { useCartContext, useVisibleContext } from '@/context';
import { Order, ToppingType } from '@/types/types';

export const PizzaElementsSelection = () => {
  const { addToCart } = useCartContext();
  const { selectedPizza, setIsVisible } = useVisibleContext();
  const pizza = selectedPizza;

  const [size, setSize] = React.useState<string>('small');
  const [crust, setCrust] = React.useState<string>('traditional');
  const [additionalTopping, setAdditionalTopping] = React.useState<
    ToppingType[]
  >([]);
  const [additionalToppingPrice, setAdditionalToppingPrice] =
    React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);

  React.useEffect(() => {
    let updatedPrice = 0;

    switch (size) {
      case 'small':
        updatedPrice = pizza.priceSm + additionalToppingPrice;
        break;
      case 'medium':
        updatedPrice = pizza.priceMd + additionalToppingPrice;
        break;
      case 'large':
        updatedPrice = pizza.priceLg + additionalToppingPrice;
        break;
      default:
        return;
    }

    setPrice(Number(updatedPrice.toFixed(2)));
  }, [
    size,
    pizza?.priceSm,
    pizza?.priceMd,
    pizza?.priceLg,
    additionalToppingPrice,
  ]);

  const orderedPizza: Order = {
    id: pizza.id,
    name: pizza.name,
    price,
    crust,
    size,
    additionalTopping,
    image: pizza.image,
    quantity: 1,
  };

  React.useEffect(() => {
    if (additionalTopping.length) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price;
      }, 0);
      setAdditionalToppingPrice(toppingPrice);
    } else {
      setAdditionalToppingPrice(0);
    }
  }, [additionalTopping]);

  return (
    <div className='flex h-full flex-col md:p-8 lg:flex-row lg:gap-x-8'>
      {/*top */}
      <div className='flex items-center justify-center lg:flex-1'>
        {/*pizza image */}
        <div className='mt-6 max-w-[300px] lg:mt-0 lg:max-w-none'>
          <Image
            src={pizza.image}
            width={450}
            height={450}
            alt='pizza'
            priority
            className='relative mx-auto'
          />
        </div>
      </div>
      {/*details*/}
      <div className='flex flex-1 flex-col'>
        <div className='flex-1 p-2 text-center lg:text-left'>
          <div className='h-[46vh] flex-1 overflow-y-scroll pr-2 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-200 lg:h-[90%]'>
            {/* name */}
            <div className='font-semibold'>
              <h2 className='mb-1 text-3xl capitalize'>{pizza.name}</h2>
              {/* size, crust text */}
              <div className='mb-6 text-lg font-medium'>
                <span>
                  {size === 'small'
                    ? '25 cm'
                    : size === 'medium'
                    ? '30 cm'
                    : size === 'large'
                    ? '35 cm'
                    : false}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>
            <SizeSelection size={size} setSize={setSize} pizza={pizza} />
            <CrustSelection crust={crust} setCrust={setCrust} />
            <div className='mb-1 text-xl font-semibold '>Choose topping</div>
            <div className='mb-2 flex max-h-36 flex-1 flex-wrap justify-center gap-2 overflow-scroll py-1 lg:justify-start'>
              {pizza.toppings?.map((topping: ToppingType, index: number) => {
                return (
                  <Topping
                    key={index}
                    topping={topping}
                    additionalTopping={additionalTopping}
                    setAdditionalTopping={setAdditionalTopping}
                  />
                );
              })}
            </div>
          </div>
          <div className='flex items-center px-2 lg:items-end'>
            <button
              onClick={() => {
                addToCart(orderedPizza);
                setIsVisible(false);
                toast.success(
                  `${orderedPizza.name.toUpperCase()} added to your cart !`,
                  {
                    style: {
                      fontWeight: 'base',
                      maxWidth: '40rem',
                    },
                    icon: '🍕',
                    duration: 2000,
                  }
                );
              }}
              className='btn btn-lg gradient flex w-full justify-center gap-x-2'
            >
              <div>Add to cart for :</div>
              <div>$ {price}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
