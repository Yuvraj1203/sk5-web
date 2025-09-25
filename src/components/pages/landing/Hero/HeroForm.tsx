import { LeadForm } from "@/components/common";
import React from "react";

type HeroFormProps = {
  content?: string;
  onClose?: () => void;
};

const HeroForm = ({ content, onClose }: HeroFormProps) => {
  return (
    <div className="relative z-10 flex flex-col md:min-w-[45%] items-center gap-4 text-center bg-background py-7 px-6 rounded-xl shadow-lightShadow">
      <p className="text-xl md:text-[28px] font-semibold">
        {"How we can help your HVAC Business"}
      </p>
      {content && <p className="text-sm md:text-lg font-normal">{content}</p>}
      <LeadForm onClose={onClose} />
    </div>
  );
};

export default HeroForm;
