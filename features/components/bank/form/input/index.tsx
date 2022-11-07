import React from "react"

export interface InputProps {
  label?: string | React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
  inputClasses?: string;
  labelClasses?: string;
  id?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  defaultValue?: string | number | readonly string[]
}
const Input = React.forwardRef(({ 
  id, 
  type,
  name, 
  label, 
  className,
  placeholder, 
  inputClasses,
  defaultValue, 
  labelClasses }:InputProps, ref: React.LegacyRef<HTMLInputElement>) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label &&
        <label className={labelClasses} htmlFor={id}>{label}</label>
      }
      <input 
        ref={ref}
        className={`bg-dark-accent/30 w-full shadow focus:shadow focus:shadow-dark-accent transition-all outline-none rounded-lg p-2 ${inputClasses}`}
        type={type} name={name} id={id} placeholder={placeholder} defaultValue={defaultValue}/>
    </div>
  )
})

export default Input

export interface TextAreaProps extends InputProps {
  cols?: number,
  rows?: number
}

export const TextArea = React.forwardRef(({
  id,
  cols,
  name,
  rows,
  label,
  className,
  placeholder,
  inputClasses,
  labelClasses }:TextAreaProps, ref: React.LegacyRef<HTMLTextAreaElement>)=>{
  return (
    <div className={`flex flex-col ${className}`}>
      {label &&
        <label className={labelClasses} htmlFor={id}>{label}</label>
      }
    <textarea
      ref={ref}
      rows={rows}
      cols={cols}
      className={`bg-dark-accent/30 w-full shadow focus:shadow focus:shadow-dark-accent transition-all outline-none rounded-lg p-2 ${inputClasses}`}
      id={id} name={name} placeholder={placeholder} />
  </div>
  )
})

export const FileInput = React.forwardRef(({ 
  id, 
  type,
  name, 
  label, 
  className,
  placeholder, 
  inputClasses,
  defaultValue, 
  labelClasses }:InputProps, ref: React.LegacyRef<HTMLInputElement>) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label &&
        <label className={`p-1 border-2 border-dark-accent/40 bg-dark-accent/40 rounded-md text-dark-accent/60 dark:text-secondary/60 hover:text-secondary/90 transition-all ${labelClasses}`} htmlFor={id}>
          {label}
          <input 
          ref={ref}
          size={5}
          about={placeholder}
          className={`bg-dark-accent/30  w-full shadow focus:shadow focus:shadow-dark-accent transition-all outline-none rounded-lg p-2 ${inputClasses}`}
          type={type} name={name} id={id} placeholder={placeholder} defaultValue={defaultValue}/>
        </label>
      }
    </div>
  )
})
