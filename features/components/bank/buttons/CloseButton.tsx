import React from 'react'
import { MdOutlineClose } from 'react-icons/md'

interface ButtonProps {
  onClick?: React.MouseEventHandler,
  className?: string
}
export const CloseButton = (props: ButtonProps) => {
  const { onClick, className } = props
  return (
    <button 
      className={`${className} hover:scale-105 transition-all`}
    onClick={onClick} type='button'><MdOutlineClose /></button>
  )
}
