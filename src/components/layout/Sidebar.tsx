"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement, useEffect, useRef } from "react";
import { CustomModal } from "../common";
import { BackdropEnum } from "../common/CustomModal/CustomModal";
import { Button } from "@heroui/react";

type SidebarListType = {
  label: string;
  icon: any;
  href: string;
};

type SidebarProps<T extends object = any> = {
  sidebarTrigger: ReactElement<T>;
};

function Sidebar({ sidebarTrigger }: SidebarProps) {
  const pathname = usePathname();

  //list for side menu
  const sidebarList = [
    {
      label: "Home",
      icon: "",
      href: "/Home",
    },
    {
      label: "Service",
      icon: "",
      href: "/service",
      subList: [
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
      ],
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

  const renderSiderbarItem = (item: SidebarListType, index: number) => {
    const isActive = pathname === item.href;

    return (
      <Link
        key={index}
        href={item.href}
        className={`${isActive ? " text-primary py-4" : " text-textColor"} ${
          sidebarList.length - 1 == index ? "" : "border-b-1 border-surface"
        } flex items-center text-base gap-4 font-medium py-2.5 px-4 cursor-pointer duration-400`}
      >
        <span>{item.icon}</span>
        <span className="text-nowrap">{item.label}</span>
      </Link>
    );
  };

  return (
    <CustomModal
      closeButton={false}
      wrapperStyle="bg-transparent shadow-none mx-2"
      contentWrapperStyle="p-0 "
      backdrop={BackdropEnum.blur}
      closeFloating={"hidden"}
      children={(onClose) => (
        <>
          <nav className="flex flex-col bg-background w-full p-3 rounded-2xl">
            {sidebarList.map((item, index) => renderSiderbarItem(item, index))}
          </nav>
          <Button
            onClick={onClose}
            className={`text-base font-medium bg-background w-full mb-2 rounded-2xl`}
          >
            {"Close"}
          </Button>
        </>
      )}
      trigger={sidebarTrigger}
    />
  );
}

export default Sidebar;
