import React from "react"

interface InputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  inputClasses?: string;
  labelClasses?: string;
  id?: string;
  placeholder?: string;
  name?: string
}
const Input = React.forwardRef(({ name, id, placeholder, label, labelClasses, type, inputClasses }:InputProps, ref: React.LegacyRef<HTMLInputElement>) => {
  return (
    <div className="flex flex-col">
      {label &&
        <label className={labelClasses} htmlFor={id}>{label}</label>
      }
      <input 
        ref={ref}
        className={`bg-dark-accent/30 w-full shadow focus:shadow focus:shadow-dark-accent transition-all outline-none rounded-lg p-2 ${inputClasses}`}
        type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  )
})

export default Input

interface TextAreaProps extends InputProps {
  cols?: number,
  rows?: number
}

export const TextArea = React.forwardRef(({ placeholder, name, rows, cols, labelClasses, label, id, inputClasses }:TextAreaProps, ref: React.LegacyRef<HTMLTextAreaElement>)=>{
  return (
    <div className="flex flex-col">
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
