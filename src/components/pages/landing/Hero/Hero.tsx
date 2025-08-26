import { Section, SectionHeading } from "@/components/common";
import React from "react";

const Hero = () => {
  return (
    <Section
      containerStyle={`bg-gradient-to-r from-primary to-primary-container`}
    >
      <SectionHeading className="text-on-primary text-center">
        {"Get MSP Leads. Drive Sales."}
      </SectionHeading>
      <p
        className={`text-xl md:text-2xl xl:text-4xl text-on-primary text-center font-normal `}
      >
        $1.6 Billion in Revenue Generated for MSPs. Grow with the World’s
        Largest MSP Focused Digital Agency.
      </p>
    </Section>
  );
};

export default Hero;
