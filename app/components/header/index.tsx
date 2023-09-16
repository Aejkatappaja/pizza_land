import React from "react";

import { CartButton } from "./CartButton";
import { Contact } from "./Contact";
import { BrandLogo } from "./BrandLogo";

export const Header = () => {
  return (
    <nav className="absolute w-full py-8 bg-pink-50/30">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        <BrandLogo />
        <div className="flex gap-x-8 items-center">
          <Contact />
          <CartButton />
        </div>
      </div>
    </nav>
  );
};
