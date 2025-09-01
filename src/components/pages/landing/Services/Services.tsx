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
    title: "Visibility",
    content: `Capture the 3% of your market actively searching for services like yours by using <a href="https://www.techpromarketing.com/services/google-ads-for-msps/">Google Ads</a> and <a href="https://www.techpromarketing.com/services/msp-seo-services/">SEO</a> to ensure your business is visible at the top of search results.`,
    color: "#B5C200",
  },
  {
    title: "Relationships",
    content: `Engage the remaining 97% who aren’t currently searching by building relationships through <a href="https://www.techpromarketing.com/convert-linkedin-connections-to-clients/">LinkedIn</a> and <a href="https://www.techpromarketing.com/boost-it-marketing-with-email-marketing/">email campaigns</a>, keeping your business top-of-mind until they’re ready to buy.`,
    color: "#2fac6a",
  },
  {
    title: "Conversion",
    content: `Develop a professional <a href="https://mspsites.com/">MSP website</a> that converts leads from both search and relationship-building efforts, making a strong first impression for all prospects who visit.`,
    color: "#10A19A",
  },
];

const Services = () => {
  return (
    <Section
      id={"service"}
      containerStyle="bg-background"
      className="flex flex-col gap-1 md:gap-4 text-center"
    >
      <SectionHeading className="text-on-background">
        {"How Tech Pro Marketing is Helping MSPs Succeed"}
      </SectionHeading>
      <p className="font-semibold text-primary text-lg md:text-xl xl:text-2xl">
        {"Visibility. Relationships. Conversion."}
      </p>

      <p className="font-medium text-on-background text-sm md:text-base max-md:mt-2 mb-5 md:my-10">
        {
          "The MSP Growth Model is built on the reality that only 3% of your market is actively searching for your services at any given time, while the other 97% are not. The model aims to capture both groups through a strategic combination of visibility, relationship-building, and conversion. Our model is not only proven, but is actively facilitating the growth of over 100 MSPs. Is your MSP ready to be the next?"
        }
      </p>

      <div className="flex items-center max-xl:flex-col gap-10">
        <CustomImage
          src={Images.serviceImage}
          alt={"Services Image"}
          containerStyle=" min-w-[45%]"
        />
        <div className="grow flex flex-col gap-5 text-left ">
          <p className="text-xl md:text-2xl xl:text-3xl text-primary font-semibold capitalize ">
            {"our model"}
          </p>
          <div className="flex flex-col md:flex-row xl:flex-col gap-5">
            {serviceData.map((item, index) => {
              return (
                <div key={index}>
                  <p className="w-fit font-semibold text-lg xl:text-[22px] text-on-background mb-4">
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
