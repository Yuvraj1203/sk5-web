import React from "react";

type SectionSubHeadingProps = {
  children?: React.ReactNode;
  className?: string;
};

const SectionSubHeading = ({ children, className }: SectionSubHeadingProps) => {
  return (
    <p
      className={`text-xl md:text-2xl xl:text-4xl font-semibold ${className}`}
    >
      {children}
    </p>
  );
};

export default SectionSubHeading;
