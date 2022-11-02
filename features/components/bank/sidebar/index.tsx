import { SideBarContextType } from "@features/layouts/with-sidebar"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import SideBarProfile from "@components/bank/sidebar/profile"

interface BarType {
  context: React.Context<SideBarContextType>
  children?: React.ReactNode | React.ReactElement
}

const SideBar = ({ children, context }: BarType)=>{
  const barContext = React.useContext(context)
  const expandHandler = ()=>{
    if (barContext.isOpen){
      barContext.setIsOpen(false)
      barContext.setBarWidth(70)
    }else {
      barContext.setIsOpen(true)
      barContext.setBarWidth(230)
    }
  }
  return (
    <motion.div
      animate={{ width: barContext.barWidth }}
      transition={{ duration: 0.2 }}
      className="min-h-[99vh] m-1 rounded-md fixed top-0 left-0 bg-dark-accent text-white">
      <div className="min-h-full p-3 relative min-w-full">
        <button className="absolute top-1 bg-dark-accent p-1 rounded-r-md -right-5" type="button" onClick={expandHandler}>
            {barContext.isOpen ? 
            <motion.span
              animate={{ opacity: 1 }}
              ><FaAngleDoubleLeft /></motion.span>
            : <motion.span
              animate={{ opacity: 1 }}
              ><FaAngleDoubleRight /></motion.span>
            }
          </button>
          {children}
      </div>
      <SideBarProfile context={context}/>
    </motion.div>
  )
}

export default SideBar
