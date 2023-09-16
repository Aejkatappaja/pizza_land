import React from "react";
import Image from "next/image";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div className="flex gap-x-3 items-center">
      <Image src={"phone.svg"} width={42} height={42} alt="phone-icon" />
      <div className="text-white">
        <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">
          24/7 Pizza delivery service
        </div>
        <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide">
          920 234 5743
        </div>
      </div>
    </div>
  );
};
