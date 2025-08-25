import {
  Carousel,
  Section,
  SectionHeading,
  SectionSubHeading,
} from "@/components/common";
import Slick from "@/components/common/Carousel/Slick";
import React from "react";

const Testimonial = () => {
  return (
    <section className={`py-8 md:py-14 xl:py-24 overflow-hidden`}>
      <SectionHeading className="text-center text-primary">
        Reviews of SK5
      </SectionHeading>
      <SectionSubHeading className="text-center ">
        What Real Clients Are Saying About US
      </SectionSubHeading>
      <Slick />
    </section>
  );
};

export default Testimonial;
