import { LeadForm } from "@/components/common";
import React from "react";

const HeroForm = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center bg-on-primary py-7 px-6 rounded-xl">
      <p className="text-xl md:text-[28px] font-semibold">
        {"How can we help?"}
      </p>
      <p className="text-sm md:text-lg font-normal">
        {
          "It's our job to help your business save money, work faster and focus on what is most important. Schedule a 15-minute call to see if we are a good fit to help your organization."
        }
      </p>
      <LeadForm />
    </div>
  );
};

export default HeroForm;
