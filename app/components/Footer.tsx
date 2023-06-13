import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6 justify-center">
          <Link href={"#"}>
            <Image src={"logo.svg"} width={180} height={180} alt="logo" />
          </Link>
          <div className="flex gap-x-6 text-xl text-white">
            <Link href={"#"}>
              <FaYoutube />
            </Link>
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaPinterest />
            </Link>
          </div>
          <div className="text-white font-medium">
            Copyright &copy; Pizzaland 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
