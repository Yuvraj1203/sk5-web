import { Section, SectionHeading } from "@/components/common";
import React from "react";
import HeroForm from "../landing/Hero/HeroForm";

const generalContact = [
  {
    label: "Email: ",
    value: "bhanu@sk5marketing.com",
    href: "mailto:bhanu@sk5marketing.com",
  },
  {
    label: "Phone: ",
    value: "9829252989",
    href: "tel:+919829252989",
  },
];

const ContactUs = () => {
  return (
    <Section
      containerStyle={``}
      className="flex max-md:flex-col md:items-center gap-5 md:gap-10"
    >
      {/* left div  */}
      <div className="md:min-w-[52%] flex flex-col gap-2 md:gap-4 text-on-background text-left">
        <SectionHeading className="max-md:text-3xl text-on-background leading-[1.2] mb-0 pb-2 border-b-2 border-primary w-fit">
          {"Contact Information"}
        </SectionHeading>
        <div className="flex flex-col gap-1.5 md:gap-2">
          <p className="text-base lg:text-xl font-semibold">
            {"General Inquiries"}
          </p>
          {generalContact.map((item, index) => (
            <p key={index} className="text-sm lg:text-lg">
              <strong className="font-semibold">{item.label}</strong>
              <a className="text-primary" href={item.href}>
                {item.value}
              </a>
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-1.5 md:gap-3">
          <p className="text-base lg:text-xl font-semibold">{"Address"}</p>
          <p className="text-sm lg:text-lg ">
            Karthik Naragr Society, C48, Vasna Saiyed Rd
            <br />
            Vrundavan Township, Vibhah 2, Saiyed Vasna
            <br />
            Varodara, Gujrat 390007
          </p>
        </div>
      </div>

      {/* right div  */}
      <HeroForm />
    </Section>
  );
};

export default ContactUs;
