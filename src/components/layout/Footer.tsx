"use client";

import React from "react";
import CustomButton from "../common/CustomButton/CustomButton";
import CustomImage from "../common/CustomImage/CustomImage";
import { Images } from "@/public";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const nav = [
  { label: "About Us", href: "/" },
  { label: "Services", href: "/" },
  { label: "Contact", href: "/" },
  { label: "Career", href: "/" },
];

const resources = [
  { label: "Blog", href: "/" },
  { label: "Free Masterclass", href: "/" },
  { label: "Free Live Training", href: "/" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 px-10 bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1100px] mx-auto max-md:gap-8">
        {/* logo div  */}
        <div className="flex flex-col px-5 md:px-12 items-center justify-between gap-5 md:gap-10 lg:border-r-1 border-secondary-container">
          <CustomImage src={Images.appLogo} width={64} height={64} alt="logo" />
          <CustomButton className={"uppercase rounded-full font-medium"}>
            Schedule A Call
          </CustomButton>
        </div>

        {/* company div  */}
        <div className="flex flex-col items-center justify-between px-5 md:px-12 gap-5 md:gap-10 lg:border-r-1 border-secondary-container text-on-secondary">
          <h3 className="">Company</h3>
          <nav className="flex flex-col items-center gap-2 ">
            {nav.map((item, index) => {
              return <span key={index}>{item.label}</span>;
            })}
          </nav>
        </div>

        {/* resource div  */}
        <div className="flex flex-col items-center justify-between px-5 md:px-12 gap-5 md:gap-10 lg:border-r-1 border-secondary-container text-on-secondary">
          <h3 className="">Resources</h3>
          <nav className="flex flex-col items-center gap-2 ">
            {resources.map((item, index) => {
              return <span key={index}>{item.label}</span>;
            })}
          </nav>
        </div>

        {/* social div  */}
        <div className="flex flex-col items-center justify-between px-5 md:px-12 gap-5 md:gap-10 text-on-secondary">
          <div className="flex items-center justify-center gap-3 md:gap-6 w-full">
            <span className="size-9 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary-container">
              <FaFacebookF size={20} />
            </span>
            <span className="size-9 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary-container">
              <FaInstagram size={20} />
            </span>
            <span className="size-9 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary-container">
              <FaLinkedinIn size={20} />
            </span>
          </div>
          <p className="text-sm text-center">
            © {year} Your Marketing Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
