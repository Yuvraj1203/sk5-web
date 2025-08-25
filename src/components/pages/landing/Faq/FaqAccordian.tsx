"use client";
import React, { useState } from "react";
import { FaqDataModel } from "./Faq";
import Accordian from "@/components/common/Accordian/Accordian";

type FaqAccordianProps = {
  accordianData: FaqDataModel[];
};
const FaqAccordian = ({ accordianData }: FaqAccordianProps) => {
  const [selectedKey, setSelectedKey] = useState(0);
  return (
    <div className="mt-20">
      {accordianData.map((item, index) => {
        return (
          <Accordian
            key={index}
            accordianItem={item}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
          />
        );
      })}
    </div>
  );
};

export default FaqAccordian;
