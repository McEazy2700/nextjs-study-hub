import React from "react"
import { motion, AnimatePresence } from 'framer-motion'

export interface CurrentValType {
  label?: string,
  value?: any
}

export interface DropContextType {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  current?: CurrentValType,
  setCurrent?: React.Dispatch<React.SetStateAction<CurrentValType>>
}
interface DropDownProps {
  context: React.Context<DropContextType>
  value: DropContextType,
  children?: React.ReactNode,
  placeholder?: string,
  variant?: 'relative' | 'absolute'
}
const DropDown = ({ variant='relative', placeholder, context: Context, value, children }:DropDownProps) => {

  const context = React.useContext(Context)
  const openHandler: React.MouseEventHandler = (event) =>{
    if (context.setOpen) {
      if (context.open){
        context.setOpen(false)
      } else {
        context.setOpen(true)
      }
    }
  }
  return (
    <Context.Provider value={value}>
      <div
        className="flex-col flex gap-1 relative"
        onClick={openHandler}>
      <button 
        onClick={openHandler}
        className="bg-dark-accent border-2 flex justify-start items-center border-dark-accent/30 rounded-lg w-full p-1 px-3 outline-none">
        {context.current?.label !== '' ?
          context.current?.label
          :<span className="text-secondary/80">{placeholder}</span>
        }
      </button>
      <AnimatePresence>
        {context.open && 
          <motion.ul
            className={`bg-dark-accent/20 overflow-hidden overflow-y-scroll max-h-[11.5rem] rounded-md ${variant==='absolute' && 'absolute -bottom-7'} w-full`}
            key={Math.random()}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}>
            {children}
          </motion.ul>
        }
      </AnimatePresence>
      </div>
    </Context.Provider>
  )
}

export default DropDown
