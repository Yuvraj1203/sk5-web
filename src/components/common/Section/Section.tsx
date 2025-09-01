import React from "react";

type SectionProps = {
  children?: React.ReactNode;
  containerStyle?: string;
  className?: string;
  id?: string;
};

const Section = ({ containerStyle, children, className, id }: SectionProps) => {
  return (
    <div className={`${containerStyle}`}>
      <section
        id={id}
        className={`${className} max-w-[1200px] mx-auto px-4 py-8 md:py-14 xl:py-24  `}
      >
        {children}
      </section>
    </div>
  );
};

export default Section;
