"use client";
import { FaqDataModel } from "@/components/pages/landing/Faq/Faq";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type AccordianProps = {
  accordianItem: FaqDataModel;
  selectedKey: number;
  setSelectedKey: (value: number) => void;
};

const Accordian = ({
  accordianItem,
  selectedKey,
  setSelectedKey,
}: AccordianProps) => {
  return (
    <div
      className={` ${
        selectedKey == accordianItem.id
          ? "rounded-4xl bg-surface-variant shadow-faq-inside-shadow "
          : "rounded-full shadow-faq-out-shadow"
      } py-4 pl-6 md:pl-10 pr-4 mt-4 md:mt-6 transition-all`}
    >
      <div
        className="flex items-center gap-4 md:gap-5"
        onClick={() => {
          if (selectedKey == accordianItem.id) {
            setSelectedKey(0);
          } else {
            setSelectedKey(accordianItem.id);
          }
        }}
      >
        <span className="grow text-base md:text-2xl font-medium">
          {accordianItem.title}
        </span>
        <span
          className={`relative ${
            selectedKey == accordianItem.id
              ? "bg-surface-disabled"
              : "bg-gradient-to-r from-primary to-secondary"
          }  size-10 rounded-full cursor-pointer`}
        >
          <FaPlus
            size={18}
            color=""
            className={`absolute ${
              selectedKey == accordianItem.id
                ? "opacity-0 rotate-45"
                : "opacity-100 rotate-0"
            } text-background top-1/2 left-1/2 -translate-1/2 duration-400`}
          />
          <FaMinus
            size={18}
            className={`absolute ${
              selectedKey == accordianItem.id
                ? "opacity-100 rotate-0"
                : "opacity-0 -rotate-45"
            } text-background top-1/2 left-1/2 -translate-1/2 duration-400`}
          />
        </span>
      </div>
      <div
        className={` grid ${
          selectedKey == accordianItem.id
            ? "grid-rows-[1fr] pt-4"
            : "grid-rows-[0fr]"
        } duration-400`}
      >
        <div className="overflow-hidden text-sm md:text-base">
          {accordianItem.desc}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
