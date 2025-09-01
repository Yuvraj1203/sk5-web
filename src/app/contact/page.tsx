import {
  Section,
  SectionHeading,
  SectionSubHeading,
} from "@/components/common";
import { ContactUs } from "@/components/pages";
import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className={`relative bg-[url('/images/pictures/contact.jpg')] bg-cover bg-center px-4 py-8 md:py-14 xl:py-20 text-on-primary`}
      >
        {/* Overlay */}
        <div className="absolute z-0 inset-0 bg-gradient-to-r from-primary to-secondary opacity-75"></div>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeading className="relative z-10">
            {"Contact Us"}
          </SectionHeading>
          <SectionSubHeading className="relative z-10">
            {
              "Contact us today and let us help you build that next great software turning disruption into opportunity."
            }
          </SectionSubHeading>
        </div>
      </div>

      {/* main page  */}
      <ContactUs />
    </>
  );
};

export default Contact;
