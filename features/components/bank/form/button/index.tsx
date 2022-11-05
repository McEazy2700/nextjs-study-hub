import React from "react"

interface SubButtonProps {
  children?: React.ReactNode
}
const SubmitButton = ({children}:SubButtonProps)=>{
  return (
    <button 
      className="bg-primary hover:bg-primary/70 dark:bg-secondary p-2 text-dark-accent transition-all rounded-md dark:hover:bg-blue-200"
      type="submit">{children}</button>
  )
}

export default SubmitButton
