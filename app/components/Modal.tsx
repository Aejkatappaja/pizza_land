import React from "react";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = ({}) => {
  return (
    <section className="w-[100vw] h-[100vh] bg-white bg-opacity-25 z-30 fixed top-0 flex items-center justify-center">
      <div className="border-2 w-2/6 h-3/6 z-40 opacity-100 rounded-2xl">
        MODAL
      </div>
    </section>
  );
};
