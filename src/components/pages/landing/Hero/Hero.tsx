import {
  Section,
  SectionHeading,
  SectionSubHeading,
} from "@/components/common";
import React from "react";

const Hero = () => {
  return (
    <Section>
      <SectionHeading className="text-">
        {"Get MSP Leads. Drive Sales."}
      </SectionHeading>
      <SectionSubHeading>{`$1.6 Billion in Revenue Generated for MSPs.  Grow with the World’s Largest MSP Focused Digital Agency.
`}</SectionSubHeading>
    </Section>
  );
};

export default Hero;
