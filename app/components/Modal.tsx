"use client";

import { useVisibleContext } from "@/context/isVisibleContext";
import React from "react";

export const Modal = () => {
  const { isVisible, setIsVisible } = useVisibleContext();
  return isVisible ? (
    <section
      className="w-[100vw] h-[100vh] bg-white bg-opacity-25 z-30 fixed top-0 flex items-center justify-center"
      onClick={() => setIsVisible(false)}
    >
      <div
        className="border-2 w-2/6 h-3/6 z-40 opacity-100 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        MODAL
      </div>
    </section>
  ) : null;
};
