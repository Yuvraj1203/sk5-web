import { SectionHeading } from "@/components/common";
import React from "react";
import ReviewSlick from "./ReviewSlick";

const Testimonial = () => {
  return (
    <section
      className={`py-3 md:py-6 overflow-hidden w-full max-w-full bg-theme-bg`}
    >
      <SectionHeading className="text-center text-primary">
        Trusted By
      </SectionHeading>
      {/* <SectionSubHeading className="text-center ">
        What Real Clients Are Saying About US
      </SectionSubHeading> */}
      <ReviewSlick />
    </section>
  );
};

export default Testimonial;
