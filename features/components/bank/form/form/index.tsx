import React from "react"

interface FormProps {
  children?: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  className?: string;
}
const Form = ({ onSubmit, children }: FormProps)=>{

  return (    
    <form 
      onSubmit={onSubmit}
      className="flex dark:text-white flex-col max-w-2xl w-[95vw] rounded bg-white dark:bg-dark-bg p-5 gap-2">
      {children}
    </form>
)
}

export default Form

export const FormFull = ({ onSubmit, children, className }: FormProps)=>{

  return (    
    <form 
      onSubmit={onSubmit}
      className={`${className} flex dark:text-white md:flex-col w-full rounded-lg bg-white dark:bg-secondary/5 p-2 gap-2`}>
      {children}
    </form>
)
}
