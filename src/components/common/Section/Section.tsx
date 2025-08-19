import React from "react";

type SectionProps = {
  children?: React.ReactNode;
  bgColor?: string;
  className?: string;
};

const Section = ({ bgColor, children, className }: SectionProps) => {
  return (
    <div className={`${bgColor}`}>
      <section
        className={`${className} max-w-[1100px] mx-auto px-4 py-8 md:py-14 xl:py-24`}
      >
        {children}
      </section>
    </div>
  );
};

export default Section;
