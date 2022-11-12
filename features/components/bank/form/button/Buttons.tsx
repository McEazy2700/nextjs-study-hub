import React from "react"

interface ButtonProps {
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string;
}
const SubmitButton = ({children}:ButtonProps)=>{
  return (
    <button 
      className="bg-primary flex-1 hover:bg-primary/70 dark:bg-secondary p-2 text-dark-accent transition-all rounded-md dark:hover:bg-blue-200"
      type="submit">{children}</button>
  )
}

export default SubmitButton

export const DeleteButton = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`${className} bg-red-600 flex-1 hover:bg-red-600/80 text-secondary transition-all rounded-md`}
      type="button">{children}</button>
  )
}
