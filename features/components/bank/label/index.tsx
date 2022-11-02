import React from "react";

interface LabelType {
  className?: string;
  children?: React.ReactNode | React.ReactElement,
  htmlFor?: string
}
const Label = ({ className, children, htmlFor }: LabelType)=>{
  return (
    <label
      htmlFor={htmlFor}
      className={`rounded-[5rem] text-white p-3 px-5 md:px-10 flex items-center justify-center ${className}`}>{children}</label>
  )
}

export default Label
