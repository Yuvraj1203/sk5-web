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
// import { useSidebar } from "@/context/SidebarContext";
import Sidebar from "./Sidebar";
import { ScheduleButton } from "../common";

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
    href: "/",
  },
  {
    label: "Service",
    icon: "",
    href: "",
    subList: [
      {
        label: "Google and Social Media Advertising",
        icon: "",
        href: "",
      },
      {
        label: "Search Engine Optimization",
        icon: "",
        href: "",
      },
      {
        label: "Social Media Optimization",
        icon: "",
        href: "",
      },
      {
        label: "GMB Optimization",
        icon: "",
        href: "",
      },
      {
        label: "Appointment Booking",
        icon: "",
        href: "",
      },
    ],
  },
  {
    label: "Other Services",
    icon: "",
    href: "",
    subList: [
      {
        label: "Website Devlopment",
        icon: "",
        href: "",
      },
      {
        label: "Admin Assistant Support",
        icon: "",
        href: "",
      },
      {
        label: "Content Markeitng",
        icon: "",
        href: "",
      },
    ],
  },
  // {
  //   label: "Career",
  //   icon: "",
  //   href: "/career",
  // },
  // {
  //   label: "About Us",
  //   icon: "",
  //   href: "/about",
  // },
  {
    label: "Industries We Serve",
    icon: "",
    href: "",
    subList: [
      {
        label: "HVAC",
        icon: "",
        href: "hvac-marketing",
      },
      {
        label: "Plumbing",
        icon: "",
        href: "",
      },
      {
        label: "Insulation",
        icon: "",
        href: "",
      },
      {
        label: "Solar",
        icon: "",
        href: "",
      },
      {
        label: "Roofing & Gutters",
        icon: "",
        href: "",
      },
      {
        label: "Windows & Doors",
        icon: "",
        href: "",
      },
      {
        label: "Water Filtration / Purification Systems",
        icon: "",
        href: "",
      },
      {
        label: "Commercial Cleaning / Sanitization",
        icon: "",
        href: "",
      },
      {
        label: "Auto Detailing / Ceramic Coating / Vehicle Wraps",
        icon: "",
        href: "",
      },
      {
        label: "Home Security / CCTV Installation",
        icon: "",
        href: "",
      },
    ],
  },
  {
    label: "Contact Us",
    icon: "",
    href: "/contact",
  },
];

const Header = () => {
  const pathname = usePathname();
  const deviceType = useDeviceType();
  // const { isOpen, toggleSidebar, closeSidebar } = useSidebar();

  const [hoverItem, setHoverItem] = useState(-1);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
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
        className="p-2.5 text-background bg-gradient-to-r from-primary to-secondary hover:opacity-80 duration-400 text-nowrap cursor-pointer"
      >
        <span className="relative z-10">{item.label}</span>
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
          } flex items-center gap-4 subTitle font-bold py-2.5 px-4  hover:text-primary rounded-2xl cursor-pointer duration-400`}
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
            } flex flex-col bg-background left-0 shadow-navbar-shadow rounded-sm duration-400 divide-y-1 divide-background overflow-hidden`}
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
      className="shadow sticky top-0 bg-offwhite z-50"
    >
      <div className="flex items-center justify-between max-w-[1250px] mx-auto px-4 py-1.5 md:py-2.5 ">
        <div className="">
          <CustomImage
            src={Images.appLogo}
            width={150}
            height={90}
            alt="logo"
            containerStyle="!max-w-[150px]"
          />
        </div>
        {deviceType == "mobile" ? (
          <Sidebar
            sidebarTrigger={
              <span className="cursor-pointer">
                <TbMenuDeep size={25} />
              </span>
            }
            navbarList={navbarList}
          />
        ) : (
          <div className="flex max-md:hidden items-center gap-2.5">
            <nav className="flex items-center gap-2.5">
              {navbarList.map((item, index) => renderNavbarItem(item, index))}
            </nav>
            <ScheduleButton
              buttonStyle={
                "uppercase rounded-full font-bold bg-gradient-to-br from-primary to-secondary-container text-on-secondary"
              }
            />
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
