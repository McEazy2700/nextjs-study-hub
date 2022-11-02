import React, { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { SideBarContextType } from "@features/layouts/with-sidebar"

interface GroupType {
  children?: React.ReactNode | React.ReactElement;
  name: String;
  context: React.Context<SideBarContextType>;
}
const SideBarGroup = ({ children, name, context }:GroupType)=>{
  const [dropedDown, setDropedDown] = useState(false)
  const clickHandler = () => {
    if (dropedDown){
      setDropedDown(false)
    }else {
      setDropedDown(true)
    }
  }
  const barContext = React.useContext(context)

  return (
    <div className="mt-2">
      <button className={` flex ${!barContext.isOpen ? 'justify-center' : 'justify-start pl-2'} font-semibold items-center text-sm w-full`} onClick={clickHandler} type="button">
        <span>{name}</span>
      </button>
      <AnimatePresence>
      {dropedDown &&
        <motion.ul 
          className={`${barContext.isOpen && 'pl-3'}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          key={Math.random()}>{children}</motion.ul>
      }
      </AnimatePresence>
    </div>
  )
}

export default SideBarGroup
