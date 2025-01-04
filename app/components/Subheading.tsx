import React from "react";

interface SubheadingProps {
    children?: React.ReactNode;
    title: string;
    description?: string;
}

const Subheading = ({children, title, description}: SubheadingProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3 items-center">
        {children}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Subheading;
