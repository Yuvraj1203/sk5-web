import {
  Section,
  SectionHeading,
  SectionSubHeading,
} from "@/components/common";
import React from "react";

const AboutUs = () => {
  return (
    <Section containerStyle={``} className="flex flex-col gap-5 md:gap-10">
      <SectionHeading className="text-center">
        {"Struggling to Generate the Leads You Need for Your MSP to Thrive?"}
      </SectionHeading>
      <div className="flex max-md:flex-col gap-5 md:gap-10">
        {/* left div  */}
        <div className="md:min-w-[52%] flex flex-col gap-2 md:gap-4 text-on-background text-left">
          <SectionSubHeading className="max-md:text-3xl text-primary leading-[1.2] mb-0 ">
            {"You're not alone."}
          </SectionSubHeading>
          <p className="text-sm md:text-base font-medium">
            {
              "Many MSPs face challenges in attracting quality leads that convert into long-term clients."
            }
          </p>
          <p className="text-sm md:text-base font-medium">{`At Tech Pro Marketing, we understand that lead generation is more than just a numbers game—it's about attracting the right clients to grow your business sustainably.  Our approach is straightforward: we focus on effective, proven marketing strategies tailored specifically for MSPs.`}</p>
        </div>

        {/* right div  */}
        <div className="flex flex-col gap-2 md:gap-4 text-on-background text-left">
          <p className="text-sm md:text-base font-medium">{`By leveraging a blend of innovative tactics and deep industry insights, we bridge the gap between your MSP and your ideal clients. We craft marketing solutions that not only resonate with your target audience but also elevate your brand above the competition.`}</p>

          <p className="text-lg md:text-xl font-semibold">{`Let us help you put a marketing plan into action that delivers the leads your MSP needs to succeed.`}</p>
        </div>
        {/* <HeroForm /> */}
      </div>
    </Section>
  );
};

export default AboutUs;
