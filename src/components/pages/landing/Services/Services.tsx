import {
  Section,
  SectionHeading,
  SectionSubHeading,
} from "@/components/common";
import CustomImage from "@/components/common/CustomImage/CustomImage";
import { Images } from "@/public";
import React from "react";

const serviceData = [
  {
    title: "Performance-Based",
    content: `We grow your business without upfront risk. You only invest once results come in. Our performance-first model ensures your growth always comes before our earnings.`,
    color: "#67d5f8",
  },
  {
    title: "Strong Relationships",
    content: `We believe in working closely with you to align our strategies with your goals, while keeping communication clear, transparent, and focused on driving real results for your HVAC business.`,
    color: "#338dc1",
  },
  {
    title: "Exclusive Regions",
    content: `We partner with only one HVAC company per region, giving you an unbeatable edge over competitors. This exclusivity ensures that all our efforts are focused on making you the go-to HVAC provider in your target market.`,
    color: "#153a67",
  },
];

const Services = () => {
  return (
    <Section
      id={"service"}
      containerStyle="bg-offwhite"
      className="flex flex-col gap-1 md:gap-4 text-center"
    >
      <SectionHeading className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-secondary ">
        {"How SK5 Marketing Drives HVAC Business Growth"}
      </SectionHeading>
      <p className="font-semibold text-on-background text-lg md:text-xl xl:text-2xl">
        {"Performance-Based. Strong Relationships. Exclusive Regions."}
      </p>

      <p className="font-medium text-on-background text-sm md:text-base max-md:mt-2 mb-5 md:my-10">
        {
          "The SK5 Growth Model is built on one powerful truth: most HVAC companies waste money on marketing that doesn’t guarantee results. Our performance-first system flips the script; you pay nothing upfront and only invest when real sales are made. To maximize your advantage, we work with only one HVAC company per region, giving you complete exclusivity. Backed by our 360° Growth Engine covering lead generation, appointment booking, and long-term organic strategies,"
        }
      </p>

      <div className="flex items-center max-xl:flex-col gap-10">
        <CustomImage
          src={Images.serviceImage}
          alt={"Services Image"}
          containerStyle="min-w-[45%] md:!max-w-1/2 xl:!max-w-fit"
        />
        <div className="grow flex flex-col gap-5 text-left ">
          <p className="text-xl text-on-background md:text-2xl xl:text-3xl font-semibold capitalize ">
            {"How We Help HVAC Companies Win"}
          </p>
          <div className="flex flex-col md:flex-row xl:flex-col gap-5">
            {serviceData.map((item, index) => {
              return (
                <div key={index}>
                  <p className="w-fit text-primary font-semibold text-lg xl:text-[22px] mb-4">
                    {item.title}
                    <span
                      style={{ background: item.color }}
                      className={`flex h-0.75 w-full`}
                    ></span>
                  </p>

                  <p
                    className="text-sm md:text-base [&>a]:text-primary"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
