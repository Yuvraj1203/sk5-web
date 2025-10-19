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
          Ready to Transform Your Home Service Business?
        </SectionHeading>
        <p className="">
          Start your journey to more leads, more booked jobs, and long term
          growth—with zero upfront cost. Schedule a free strategy call and see
          how our performance first model, regional exclusivity, and 360° growth
          engine can give you an unbeatable edge.
        </p>
        <SectionSubHeading className="">
          Let’s write the next chapter of your Home Service Businesses success
          story risk free.
        </SectionSubHeading>
        <ScheduleButton buttonStyle="text-sm md:text-xl font-semibold px-6 py-4 md:px-12 md:py-8 w-fit rounded-full uppercase bg-on-background text-background hover:bg-background hover:text-on-background shadow-sm duration-250" />
      </div>
    </Section>
  );
};

export default PreFooter;
