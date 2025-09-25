import { Section, SectionHeading, TypeWriter } from "@/components/common";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import HeroForm from "./HeroForm";

const heroList = [
  { content: "Less than half the cost of hiring internally" },
  {
    content:
      "Customer support team trained to <b>help first</b> and <b>follow through</b>",
  },
  { content: "Flexible service offerings to match your business needs" },
  { content: "Never worry about extensive downtime with our 24/7 monitoring" },
];

const Hero = () => {
  return (
    <Section
      containerStyle={`relative bg-[url('/images/pictures/heroBg.jpeg')] bg-cover bg-center`}
      className="flex max-md:flex-col md:items-center gap-5 md:gap-10"
    >
      {/* Overlay */}
      <div className="absolute z-0 inset-0 bg-gradient-to-r from-primary to-secondary opacity-75"></div>
      {/* left div  */}
      <div className="relative z-10 md:min-w-[52%] flex flex-col gap-2 text-white text-left">
        {/* <p className="text-xl lg:text-2xl">
          {"Responsive. Fair. Transparent. Friendly."}
        </p> */}
        <SectionHeading className="max-md:text-3xl text-white leading-[1.2] mb-0">
          {`No Cost. Risk-Free.`}
        </SectionHeading>
        {/* <p className="text-base md:text-xl xl:text-[26px] w-fit py-2 px-5 md:px-7.5 bg-primary">
          SK5 Business IT Solutions
        </p> */}
        <TypeWriter words={["Growth-Focused", "your marketing partner", "your friend"]} />

        <p className="text-lg md:text-xl xl:text-2xl">
          {
            "With zero upfront costs, SK5 HVAC Marketing guarantees growth, booked appointments, and filled pipelines, delivering long term success for one company per region."
          }
        </p>

        {/* <div className="flex flex-col gap-5 mt-2">
          {heroList.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="flex items-center justify-center mt-0.75 bg-primary rounded-full min-h-5.5 min-w-5.5">
                <IoIosArrowForward size={14} className="text-white ml-0.5" />
              </span>
              <p
                className="text-base md:text-lg xl:text-xl"
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></p>
            </div>
          ))}
        </div> */}
      </div>

      {/* right div  */}
      <HeroForm />
    </Section>
  );
};

export default Hero;
