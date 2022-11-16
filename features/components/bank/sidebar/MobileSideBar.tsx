import React, { useEffect, useRef } from "react"
import { SideBarContextType } from "@features/layouts/with-sidebar/SideBarLayout"
import { motion } from "framer-motion"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import SideBarProfile from "@components/bank/sidebar/profile"
import { FaSignOutAlt } from "react-icons/fa"
import SideBarItem from "./items"


interface BarType {
  context: React.Context<SideBarContextType>
  children?: React.ReactNode | React.ReactElement
}

const MobileSideBar = ({ children, context }: BarType)=>{
  const barContext = React.useContext(context)
  const barRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const expandHandler = ()=>{
    if (barContext.isOpen){
      barContext.setIsOpen(false)
      barContext.setBarWidth(70)
    }else {
      barContext.setIsOpen(true)
      barContext.setBarWidth(230)
    }
  }

  useEffect(()=>{
    console.log(barRef.current)
    const bodyPage = document.getElementById('__next')
    const closeBar = (event: MouseEvent)=> {
      if (event.target != barRef.current){
        if (barContext.isOpen){
          barContext.setIsOpen(false)
        }
      }
    }
    bodyPage?.addEventListener('click', closeBar)
    return ()=> {
      bodyPage?.removeEventListener('click', closeBar)
    }
  },[])

  return (
    <motion.div
      ref={barRef}
      animate={{ translateX: !barContext.isOpen ? '-102%' : 0  }}
      transition={{ duration: 0.2 }}
      className="min-h-[99vh] z-50 m-1 w-60 rounded-md fixed top-0 left-0 bg-dark-accent text-white">
      <div className="min-h-full p-3 relative min-w-full">
        <button className="absolute -bottom-32 bg-dark-accent p-3 pl-6 rounded-r-full -right-10" type="button" onClick={expandHandler}>
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
      <div className="absolute bottom-1 flex flex-col">
        <SideBarProfile context={context}/>
        <SideBarItem className="ml-2" href="/signout" text="Sign Out" icon={<FaSignOutAlt />} context={context}/>
      </div>
    </motion.div>
  )
}

export default MobileSideBar
