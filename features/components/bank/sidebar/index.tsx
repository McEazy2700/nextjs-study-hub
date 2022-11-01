import { motion } from "framer-motion"
import { useState } from "react"
import { FaAngleDoubleLeft } from 'react-icons/fa'

interface BarType {
  getWidth?: (num:number) => void
}

const SideBar = ( {getWidth}: BarType )=>{
  const [expanded, setExpanded] = useState(false)
  const width = expanded ? 200 : 50

  const expandHandler = ()=>{
    if (expanded){
      getWidth && getWidth(50)
      setExpanded(false)
    }else {
      getWidth && getWidth(200)
      setExpanded(true)
    }
  }
  return (
    <motion.div
      animate={{ width:width }}
      className="min-h-[100vh] fixed top-0 left-0 bg-dark-bg text-white">
      <button type="button" onClick={expandHandler}><FaAngleDoubleLeft /></button>
    </motion.div>
  )
}

export default SideBar
