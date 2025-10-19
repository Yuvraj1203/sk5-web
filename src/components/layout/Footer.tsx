"use client";

import React from "react";
import CustomButton from "../common/CustomButton/CustomButton";
import CustomImage from "../common/CustomImage/CustomImage";
import { Images } from "@/public";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { ScheduleButton } from "../common";

const nav = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#service" },
  { label: "Contact", href: "/contact" },
  // { label: "Career", href: "/" },
];

type NavType = typeof nav;

const resources: NavType = [
  // { label: "Blog", href: "/" },
  // { label: "Free Masterclass", href: "/" },
  // { label: "Free Live Training", href: "/" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 px-10 bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[1100px] mx-auto max-lg:gap-8">
        {/* logo div  */}
        <div className="flex flex-col px-5 md:px-12 items-center justify-between gap-5 md:gap-10 lg:border-r-1 border-secondary-container">
          <CustomImage
            src={Images.appLogo}
            width={146}
            height={106}
            alt="logo"
          />
          <ScheduleButton
            buttonStyle={
              "uppercase rounded-full font-medium bg-gradient-to-br from-primary to-secondary-container text-on-secondary"
            }
          />
        </div>

        {/* company div  */}
        <div
          className={`${
            resources.length > 0 ? "col-span-1" : "lg:col-span-2"
          } flex flex-col items-center justify-between px-5 md:px-12 gap-5 lg:gap-10 lg:border-r-1 border-secondary-container text-on-secondary`}
        >
          <h3 className="">Company</h3>
          <nav className="flex flex-col items-center gap-2 ">
            {nav.map((item, index) => {
              return (
                <Link href={item.href} key={index}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* resource div  */}
        {resources.length > 0 && (
          <div className="flex flex-col items-center justify-between px-5 md:px-12 gap-5 md:gap-10 lg:border-r-1 border-secondary-container text-on-secondary">
            <h3 className="">Resources</h3>
            <nav className="flex flex-col items-center gap-2 ">
              {resources.map((item, index) => {
                return (
                  <Link href={item.href} key={index}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}

        {/* social div  */}
        <div className="flex flex-col items-center justify-between px-5 md:px-12 gap-5 md:gap-10 text-on-secondary">
          <div className="flex items-center justify-center gap-3 md:gap-6 w-full">
            <Link
              href={"https://www.facebook.com/profile.php?id=61581608762708"}
              className="size-9 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary-container"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href={"https://www.instagram.com/sk5marketing"}
              className="size-9 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary-container"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/sk5-marketing"}
              className="size-9 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary-container"
            >
              <FaLinkedinIn size={20} />
            </Link>
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
