"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Images } from "@/public";
import CustomImage from "../common/CustomImage/CustomImage";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useDeviceType } from "@/lib/customHooks/useDeviceType";
import { TbMenuDeep } from "react-icons/tb";
import { useSidebar } from "@/context/SidebarContext";
import Sidebar from "./Sidebar";

type subListType = {
  label: string;
  href: string;
  icon: string;
};

type navbarListType = {
  label: string;
  icon: string;
  href: string;
  subList?: subListType[];
};

const navbarList = [
  {
    label: "Home",
    icon: "",
    href: "/Home",
  },
  {
    label: "Service",
    icon: "",
    href: "/service",
    // subList: [
    //   {
    //     label: "Career",
    //     icon: "",
    //     href: "/career",
    //   },
    //   {
    //     label: "About Us",
    //     icon: "",
    //     href: "/about-us",
    //   },
    //   {
    //     label: "Contact Us",
    //     icon: "",
    //     href: "/contact-us",
    //   },
    // ],
  },
  {
    label: "Career",
    icon: "",
    href: "/career",
  },
  {
    label: "About Us",
    icon: "",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    icon: "",
    href: "/contact-us",
  },
];

const Header = () => {
  const pathname = usePathname();
  const deviceType = useDeviceType();
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();

  const [hoverItem, setHoverItem] = useState(-1);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // 👇 scrolling down
        setShowHeader(false);
      } else {
        // 👆 scrolling up
        setShowHeader(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSublist = (item: subListType, index: number) => {
    return (
      <span
        key={index}
        className="py-1.5 px-8 text-black hover:text-primary duration-400 text-nowrap cursor-pointer"
      >
        {item.label}
      </span>
    );
  };

  const renderNavbarItem = (item: navbarListType, index: number) => {
    const isActive = pathname === item.href;

    return (
      <div className="relative" key={index}>
        <Link
          href={item.href}
          // onClick={() => sidebarStore.setSidebarSate(false)}
          onMouseEnter={() => setHoverItem(index)}
          onMouseLeave={() => setHoverItem(-1)}
          className={`${
            isActive ? "text-primary py-4" : " text-textColor hover:py-4"
          } flex items-center gap-4 subTitle font-medium py-2.5 px-4  hover:text-primary rounded-2xl cursor-pointer duration-400`}
        >
          <span className="text-nowrap">{item.label}</span>
          {item.subList?.length! > 0 && (
            <IoIosArrowDown
              className={`${
                hoverItem == index ? "text-primaryContainer" : "text-textColor"
              }`}
            />
          )}
        </Link>
        {item.subList?.length! > 0 && (
          <div
            onMouseEnter={() => hoverItem == index && setHoverItem(index)}
            onMouseLeave={() => setHoverItem(-1)}
            className={`absolute ${
              hoverItem == index
                ? "top-full opacity-100"
                : "top-[200%] opacity-0"
            } flex flex-col bg-background left-0 py-2.5 px-4 shadow-navbar-shadow rounded-sm duration-400`}
          >
            {item.subList?.map((item, index) => renderSublist(item, index))}
          </div>
        )}
      </div>
    );
  };

  // /backdrop-saturate-150 backdrop-blur-sm
  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="shadow sticky top-0 bg-white z-50"
    >
      <div className="flex items-center justify-between max-w-[1100px] mx-auto px-4 py-1.5 md:py-2.5 ">
        <div className="">
          <CustomImage src={Images.appLogo} width={64} height={64} alt="logo" />
        </div>
        {deviceType == "mobile" ? (
          <Sidebar
            sidebarTrigger={
              <span className="cursor-pointer">
                <TbMenuDeep size={25} />
              </span>
            }
          />
        ) : (
          <nav className="flex max-md:hidden items-center gap-2.5">
            {navbarList.map((item, index) => renderNavbarItem(item, index))}
          </nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
