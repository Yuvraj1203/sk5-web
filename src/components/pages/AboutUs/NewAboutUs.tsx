import {
  Section,
  SectionHeading,
  SectionSubHeading,
} from "@/components/common";
import React from "react";

const approach = [
  {
    title: "Performance Based :  ",
    content:
      "We align our success with yours. SK5 focuses on delivering measurable results and ROI. You only pay for performance, so our team is fully invested in helping you grow.",
  },
  {
    title: "Strong Relationships :  ",
    content:
      "We believe in long term partnerships. Our team communicates openly and works closely with you every step of the way, building trust and understanding. Your goals become our goals, and we adapt strategies together.",
  },
  {
    title: "Exclusive Regions :  ",
    content:
      "We grant exclusive marketing territories to each client. That means your leads are yours alone – we won’t pump multiple HVAC companies into the same area. This approach protects your market and ensures you get genuine local opportunities.",
  },
];

const values = [
  {
    title: "Trust :  ",
    content:
      "We build confidence through honesty and reliability. You can count on us to keep our promises, handle your marketing with integrity, and always act in your best interest.",
  },
  {
    title: "Relationships :  ",
    content:
      "People come first. We nurture strong, lasting partnerships by listening to your needs, communicating transparently, and treating your business as if it were our own.",
  },
  {
    title: "Transparency :  ",
    content:
      "Clear communication is key. We keep you informed with straightforward reporting and honest feedback. You’ll always know what we’re doing, why we’re doing it, and how it’s working.",
  },
  {
    title: "Expertise :  ",
    content:
      "Decades of industry experience set us apart. Our team knows HVAC and marketing inside out. We apply that knowledge to create strategies that really work, cutting through trial and error to get you results faster.",
  },
  {
    title: "Innovation : ",
    content:
      "We stay ahead of the curve. SK5 uses the latest marketing techniques and technologies to give you an edge. By continually improving and innovating, we make sure your HVAC business benefits from the best, most effective solutions.",
  },
];

const NewAboutUs = () => {
  return (
    <Section containerStyle={``} className="flex flex-col gap-5 md:gap-10">
      <SectionHeading className="text-center">{"About Us"}</SectionHeading>
      <p className="text-sm md:text-lg font-medium">
        {`SK5 didn’t just appear overnight. It was founded by a team of seasoned HVAC marketing experts who spent years generating high quality leads for HVAC companies. With that deep experience and proven expertise, we decided to launch SK5 as our own agency. Our mission is simple: to help HVAC businesses close more deals efficiently, without wasted time or budget. We take the strategies that work and tailor them specifically for your business and market.
At SK5, we focus on measurable results that drive your bottom line. We partner closely with each client, taking the time to understand your unique needs and goals. You’re not just another customer you’re our partner in success. By combining performance driven marketing with strong industry relationships, we make sure every campaign maximizes your return on investment.`}
      </p>

      <SectionHeading className="text-center">{"Our Approach"}</SectionHeading>
      {approach.map((item, index) => (
        <p key={index} className="text-sm md:text-lg font-medium">
          <span className="font-semibold text-base md:text-2xl mr-1">{item.title}</span>
          {item.content}
        </p>
      ))}

      <SectionHeading className="text-center">{"Our Values"}</SectionHeading>
      <SectionSubHeading className="max-md:text-3xl text-primary leading-[1.2] mb-0 ">
        {
          "The “5” in SK5 reflects our five core values that guide everything we do:"
        }
      </SectionSubHeading>
      {values.map((item, index) => (
        <p key={index} className="text-sm md:text-lg font-medium">
          <span className="font-semibold text-base md:text-2xl mr-1">{item.title}</span>
          {item.content}
        </p>
      ))}
    </Section>
  );
};

export default NewAboutUs;
