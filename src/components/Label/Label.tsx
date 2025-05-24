import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = ({ children, className = "", ...rest }: LabelProps) => (
  <label className={`text-base mb-2 block ${className}`} {...rest}>
    {children}
  </label>
);

export default Label;
