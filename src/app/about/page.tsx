import { SectionHeading, SectionSubHeading } from "@/components/common";
import { AboutUs } from "@/components/pages";
import React from "react";

const About = () => {
  return (
    <>
      <div
        className={`relative bg-[url('/images/pictures/about.png')] bg-cover bg-center px-4 py-8 md:py-14 xl:py-20 text-on-primary`}
      >
        {/* Overlay */}
        <div className="absolute z-0 inset-0 bg-gradient-to-r from-primary to-secondary opacity-75"></div>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading className="relative z-10">
            {"We Help Your MSP Attract Ideal Clients"}
          </SectionHeading>
          <SectionSubHeading className="relative z-10">
            {
              "Every MSP wants to stand out and generate more leads. SK5 Marketing specializes in transforming this aspiration into reality, ensuring your MSP's long-term visibility and growth."
            }
          </SectionSubHeading>
        </div>
      </div>

      {/* main page  */}
      <AboutUs />
    </>
  );
};

export default About;
