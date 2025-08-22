import React from "react";

type SectionProps = {
  children?: React.ReactNode;
  containerStyle?: string;
  className?: string;
};

const Section = ({ containerStyle, children, className }: SectionProps) => {
  return (
    <div className={`${containerStyle}`}>
      <section
        className={`${className} max-w-[1100px] mx-auto px-4 py-8 md:py-14 xl:py-24  `}
      >
        {children}
      </section>
    </div>
  );
};

export default Section;
