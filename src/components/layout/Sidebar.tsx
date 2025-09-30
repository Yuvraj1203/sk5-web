"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { CustomModal, ScheduleButton } from "../common";
import { BackdropEnum } from "../common/CustomModal/CustomModal";
import { Button } from "@heroui/react";
import { IoIosArrowDown } from "react-icons/io";

type SubListType = {
  label: string;
  icon: any;
  href: string;
};

type SidebarListType = {
  label: string;
  icon: any;
  href: string;
  subList?: SubListType[];
};

type SidebarProps<T extends object = any> = {
  sidebarTrigger: ReactElement<T>;
  navbarList: SidebarListType[];
};

function Sidebar({ sidebarTrigger, navbarList }: SidebarProps) {
  const pathname = usePathname();
  const [clickedItem, setClickedItem] = useState(-1);

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
        onClick={() => {
          if (item.subList?.length! > 0) {
            clickedItem == index ? setClickedItem(-1) : setClickedItem(index);
          } else {
            onClose();
          }
        }}
        className={`${isActive ? " text-primary" : " text-textColor"} ${
          navbarList.length - 1 == index ? "" : "border-b-1 border-surface"
        } flex flex-col items-center text-base font-medium py-2.5 px-4 cursor-pointer duration-400`}
      >
        <>
          <div className="w-full flex items-center text-left text-base gap-4 font-medium cursor-pointer duration-400">
            {item.icon && <span>{item.icon}</span>}
            <span className="text-nowrap grow">{item.label}</span>
            {item.subList && (
              <span>
                {item.subList?.length! > 0 && (
                  <IoIosArrowDown
                    className={`${
                      clickedItem == index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </span>
            )}
          </div>
          {item.subList?.length! > 0 && (
            <div
              className={`w-full px-1.5 grid ${
                clickedItem == index
                  ? "grid-rows-[1fr] pt-2"
                  : "grid-rows-[0fr]"
              }  duration-400`}
            >
              <div className="overflow-hidden flex flex-col gap-1.5 text-sm md:text-base">
                {item.subList?.map((item, index) => (
                  <span key={index} className=" w-full text-nowrap grow">
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </>
      </Link>
    );
  };

  return (
    <CustomModal
      closeButton={false}
      wrapperStyle="bg-transparent shadow-none mx-2.5"
      contentWrapperStyle="p-0 "
      backdrop={BackdropEnum.blur}
      closeFloating={"hidden"}
      children={(onClose) => (
        <>
          <nav className="flex flex-col bg-background w-full rounded-2xl">
            {navbarList.map((item, index) =>
              renderSiderbarItem(item, index, onClose)
            )}
          </nav>
          <ScheduleButton
            content=""
            buttonStyle={
              "uppercase text-base font-medium bg-gradient-to-br from-primary to-secondary-container text-on-secondary w-full mb-2 rounded-2xl"
            }
          />
        </>
      )}
      trigger={sidebarTrigger}
    />
  );
}

export default Sidebar;
