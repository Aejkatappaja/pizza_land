"use client";

import { useVisibleContext } from "@/context/isVisibleContext";
import React from "react";
import { PizzaDetails } from "./PizzaDetails";
import { CheckoutDetails } from "./CheckoutDetails";

export const Modal = () => {
  const {
    isVisible,
    closeModal,
    selectedPizza,
    isCheckoutVisible,
    setIsCheckoutVisible,
  } = useVisibleContext();
  console.log(selectedPizza);

  return isVisible ? (
    <section
      className="w-[100vw] h-[100vh] bg-gray-600 bg-opacity-25 z-30 fixed top-0 left-0 flex items-center justify-center"
      onClick={() => {
        closeModal();
        setIsCheckoutVisible(false);
      }}
    >
      {isCheckoutVisible ? (
        <div
          className="lg:max-w-[900px] lg:max-h-[600px] z-40 opacity-100 bg-white lg:rounded-2xl w-full h-full lg:fixed outline-none"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <h2
              className="text-2xl font-bold text-primary absolute z-30 right-5 top-3 hover:scale-110 duration-200 cursor-pointer"
              onClick={() => {
                closeModal();
                setIsCheckoutVisible(false);
              }}
            >
              X
            </h2>
          </div>
          <CheckoutDetails />
        </div>
      ) : (
        <div
          className="lg:max-w-[900px] lg:max-h-[600px] z-40 opacity-100 bg-white lg:rounded-2xl w-full h-full lg:fixed outline-none lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <h2
              className="text-3xl font-bold text-primary absolute z-30 right-5 top-3 hover:scale-110 duration-200 cursor-pointer"
              onClick={closeModal}
            >
              X
            </h2>
          </div>
          <PizzaDetails />
        </div>
      )}
    </section>
  ) : null;
};
