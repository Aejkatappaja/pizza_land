"use client";

import { PizzaType } from "@/types/types";
import React from "react";

interface VisibleContextType {
  selectedPizza: PizzaType; // Mettre à jour le type ici
  setSelectedPizza: React.Dispatch<React.SetStateAction<PizzaType>>; // Mettre à jour le type ici
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const useVisibleContext = () => React.useContext(VisibleContext);

export const VisibleContext = React.createContext<VisibleContextType>({
  selectedPizza: {
    id: 0,
    name: "",
    description: "",
    priceLg: 0,
    priceMd: 0,
    priceSm: 0,
    image: "",
    toppings: [],
  },
  setSelectedPizza: () => {},
  isVisible: false,
  setIsVisible: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export const VisibleContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [selectedPizza, setSelectedPizza] = React.useState<PizzaType>({
    id: 0,
    name: "",
    description: "",
    priceLg: 0,
    priceMd: 0,
    priceSm: 0,
    image: "",
    toppings: [],
  }); // Mettre à jour l'état initial ici

  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  const contextValue: VisibleContextType = {
    selectedPizza,
    setSelectedPizza,
    isVisible,
    setIsVisible,
    openModal,
    closeModal,
  };

  return (
    <VisibleContext.Provider value={contextValue}>
      {children}
    </VisibleContext.Provider>
  );
};
