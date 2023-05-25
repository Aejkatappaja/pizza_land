"use client";

import React from "react";
import Image from "next/image";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import { PizzaDetails } from "./PizzaDetails";
import { PizzaType } from "../types";

Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgoundColor: "rgba(0,0,0,0.5)",
  },
};

interface PizzaProps {
  key: string;
  pizza: PizzaType;
}

export const Pizza: React.FC<PizzaProps> = ({ key, pizza }) => {
  console.log(pizza);
  const [modal, setModal] = React.useState<boolean>(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className="group py-2 px-4 xl:py-4 xl-px-2 rounded-xl" key={key}>
      <Image
        onClick={openModal}
        className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        width={270}
        height={270}
        src={pizza.image}
        alt="pizza"
      ></Image>
      <div onClick={openModal}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>
      <div className="mb-6 flex items-center justify-between">
        <div className="hidden lg:flex text-xl font-semibold">
          starts at {pizza.priceSm}
        </div>
        <button
          onClick={openModal}
          className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
        >
          Choose
        </button>
        <button
          onClick={openModal}
          className="btn btn-sm gradient lg:hidden px-3"
        >
          starts at {pizza.priceSm}
        </button>
      </div>
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          currentLabel="Pizza Modal"
          className="bg-pink-200 w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]"
        >
          modal
        </Modal>
      )}
    </div>
  );
};
