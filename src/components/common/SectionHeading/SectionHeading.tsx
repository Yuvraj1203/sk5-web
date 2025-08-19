import React from "react";

type SectionHeadingProps = {
  children?: React.ReactNode;
  className?: string;
};

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2
      className={`text-2xl md:text-3xl xl:text-5xl font-semibold ${className} `}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
