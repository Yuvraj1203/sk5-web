import {
  ScheduleButton,
  Section,
  SectionHeading,
  SectionSubHeading,
} from "@/components/common";
import React from "react";

const PreFooter = () => {
  return (
    <Section
      containerStyle={`relative bg-[url('/images/pictures/preLoginBg.png')] bg-cover bg-center`}
      className=" text-background"
    >
      {/* Overlay */}
      <div className="absolute z-0 inset-0 bg-gradient-to-r from-primary to-secondary opacity-75"></div>

      <div className="relative z-10 md:w-3/4 flex flex-col gap-5 md:gap-10">
        <SectionHeading className="text-background">
          Ready to Transform Your MSP?
        </SectionHeading>
        <p className="">
          Start the journey to more leads, more contracts, and more growth
          today. Schedule a free strategy call to discuss your needs and how we
          can help. Our team is ready to analyze your current marketing strategy
          and offer insights into how we can make a difference.
        </p>
        <SectionSubHeading className="">
          Let's write the next chapter of your success story together.
        </SectionSubHeading>
        <ScheduleButton className="text-sm md:text-xl font-semibold px-6 py-4 md:px-12 md:py-8 w-fit rounded-full uppercase bg-on-background text-background hover:bg-background hover:text-on-background shadow-sm duration-250" />
      </div>
    </Section>
  );
};

export default PreFooter;
