import React from "react"
import Link from "next/link";
import { motion } from 'framer-motion'
import { SideBarContextType } from "@features/layouts/with-sidebar/SideBarLayout"

interface ItemType {
  context: React.Context<SideBarContextType>;
  href: string;
  icon?: React.ReactNode | React.ReactElement
  text: string
  className?: string
}
const SideBarItem = ({ className, context, href, icon, text }:ItemType)=>{
  const barContext = React.useContext(context)

  if (href) {
    return (
      <Link 
        className={`flex p-2 mt-4 gap-3 rounded-[2.5rem] hover:bg-accent hover:text-black active:bg-accent active:text-black transition-all items-center justify-start ${className}`}
        href={href}>
        {icon && 
          <span className="text-3xl">{icon}</span>
        }
        {barContext.isOpen &&
          <motion.span
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            exit={{ x: 50 }}>
            {text}
          </motion.span>
        }
      </Link>
    )
  }
  return (
    <div className="flex p-2 mt-4 gap-3 rounded-[2.5rem] hover:bg-accent hover:text-black active:bg-accent active:text-black transition-all items-center justify-start">
      {icon &&
        <span className="text-3xl">{icon}</span>
      }
      {barContext.isOpen &&
        <motion.span
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          exit={{ x: 50 }}>
          {text}
        </motion.span>
      }
    </div>
  )
}

export default SideBarItem

