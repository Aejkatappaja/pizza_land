"use client";

import React from "react";

interface VisibleContextType {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const useVisibleContext = () => React.useContext(VisibleContext);

export const VisibleContext = React.createContext<VisibleContextType>({
  isVisible: false,
  setIsVisible: () => {},
});

export const VisibleContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const contextValue: VisibleContextType = {
    isVisible,
    setIsVisible,
  };

  return (
    <VisibleContext.Provider value={contextValue}>
      {children}
    </VisibleContext.Provider>
  );
};
