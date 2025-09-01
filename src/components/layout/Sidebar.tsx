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
  navbarList: SidebarListType[];
};

function Sidebar({ sidebarTrigger, navbarList }: SidebarProps) {
  const pathname = usePathname();

  const renderSiderbarItem = (
    item: SidebarListType,
    index: number,
    onClose: () => void
  ) => {
    const isActive = pathname === item.href;

    return (
      <Link
        key={index}
        href={item.href}
        onClick={onClose}
        className={`${isActive ? " text-primary py-4" : " text-textColor"} ${
          navbarList.length - 1 == index ? "" : "border-b-1 border-surface"
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
            {navbarList.map((item, index) =>
              renderSiderbarItem(item, index, onClose)
            )}
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
