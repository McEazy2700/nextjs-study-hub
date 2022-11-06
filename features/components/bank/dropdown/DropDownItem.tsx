import React from 'react'
import { DropContextType } from './DropDown'

interface DropDownItemProps {
  context: React.Context<DropContextType>,
  label: string,
  value: string
}
const DropDownItem = ({ label, value, context: Context }: DropDownItemProps) => {
  const context = React.useContext(Context)
  const updateContextHandler = ()=>{
    if (context.setCurrent)
    context.setCurrent({
      label,
      value
    })
  }
  return (
    <button className='p-2 flex items-center justify-start hover:bg-dark-accent/60 active:bg-dark-accent/60 w-full transition-all' onClick={updateContextHandler}>
      {label}
    </button>
  )
}

export default DropDownItem
