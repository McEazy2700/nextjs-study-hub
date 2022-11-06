import React from "react";
import type { InputProps, TextAreaProps } from ".";


export const InputPill = React.forwardRef(({ 
  id,
  type,
  label,
  className,
  defaultValue,
}: InputProps, ref: React.LegacyRef<HTMLInputElement>)=>{
  return (
    <div className={`overflow-hidden rounded-lg bg-dark-accent/20 flex ${className}`}>
      <label htmlFor={id} className="text-secondary flex items-center whitespace-nowrap bg-dark-accent px-3 p-1">{label}</label>
      <input 
        id={id}
        ref={ref}
        name={id} 
        type={type}
        defaultValue={defaultValue} 
        className="bg-transparent w-full p-1 px-3 outline-none" />
    </div>
  )
})


export const TextAreaPill = React.forwardRef(({
  id,
  rows,
  cols,
  label,
  defaultValue}: TextAreaProps, ref: React.LegacyRef<HTMLTextAreaElement>) => {
  return (
    <div className="overflow-hidden flex flex-col rounded-lg bg-dark-accent/20">
      <label
         htmlFor={id}
         className="text-secondary whitespace-nowrap bg-dark-accent px-3 p-1">{label}</label>
      <textarea
        id={id}
        ref={ref}
        name={id}
        rows={rows}
        cols={cols}
        className="bg-transparent w-full p-1 px-2 outline-none"
        defaultValue={defaultValue}/>
    </div>
  )
})
