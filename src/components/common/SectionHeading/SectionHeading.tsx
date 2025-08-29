import React from "react";

type SectionHeadingProps = {
  children?: React.ReactNode;
  className?: string;
};

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6 }}
      // viewport={{ once: true, amount: 0.3 }}
      className={`${className} text-2xl md:text-3xl xl:text-5xl mb-4 font-semibold leading-[1.2]`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
