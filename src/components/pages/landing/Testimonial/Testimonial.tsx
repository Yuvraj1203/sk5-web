import { Carousel, Section } from "@/components/common";
import Slick from "@/components/common/Carousel/Slick";
import React from "react";

const Testimonial = () => {
  return (
    <section className={`py-8 md:py-14 xl:py-24 overflow-hidden`}>
      <Slick />
    </section>
  );
};

export default Testimonial;
