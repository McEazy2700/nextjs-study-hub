import React, { useState } from "react"
import { motion } from "framer-motion"
import SideBar from "@components/bank/sidebar"

interface WithTypes {
  children: React.ReactElement | React.ReactNode
}
const WithSidebar = ({ children }: WithTypes) => {
  const [margin, setMargin] = useState(50)

  const getWidth = (num: number)=>{
    setMargin(num)
  }
  console.log(margin)
  return (
    <div>
      <SideBar getWidth={getWidth}/>
      <motion.main
        animate={{ marginLeft: margin }}
        >{children}</motion.main>
    </div>
  )
}

export default WithSidebar
