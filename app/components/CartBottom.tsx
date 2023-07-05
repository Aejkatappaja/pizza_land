import React from "react";

interface CartBottomProps {}

export const CartBottom: React.FC<CartBottomProps> = ({}) => {
  return (
    <div className="px-4 py-4 border-2 h-20">
      <div className="flex justify-between px-2">
        <h1 className="font-bold">Total : </h1>
        <h1>lol</h1>
      </div>
      <button className="btn btn-lg  gradient w-full mt-4">test</button>
    </div>
  );
};
