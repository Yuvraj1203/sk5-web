import { LeadForm } from "@/components/common";
import React from "react";

type HeroFormProps = {
  content?: string;
  onClose?: () => void;
};

const HeroForm = ({
  content = "It's our job to help your business save money, work faster and focus on what is most important. Schedule a 15-minute call to see if we are a good fit to help your organization.",
  onClose,
}: HeroFormProps) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center bg-background py-7 px-6 rounded-xl shadow-lightShadow">
      <p className="text-xl md:text-[28px] font-semibold">
        {"How can we help?"}
      </p>
      <p className="text-sm md:text-lg font-normal">{content}</p>
      <LeadForm onClose={onClose} />
    </div>
  );
};

export default HeroForm;
