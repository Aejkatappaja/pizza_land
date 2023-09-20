import React from "react";
import Image from "next/image";
import Link from "next/link";

export const BrandLogo = () => {
  return (
    <Link href={"#"} className="max-w-[160px] lg:max-w-max">
      <Image src={"logo.svg"} width={180} height={180} alt="logo" />
    </Link>
  );
};
