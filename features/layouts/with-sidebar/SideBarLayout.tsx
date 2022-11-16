import React, { useState } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive'
import SideBar from "@components/bank/sidebar/SideBar"
import SideBarItem from "@components/bank/sidebar/items"
import { MdSpaceDashboard } from 'react-icons/md'
import { HiAcademicCap } from 'react-icons/hi'
import { GiBookshelf } from 'react-icons/gi'
import { AiFillSchedule } from 'react-icons/ai'
import { SiTodoist } from 'react-icons/si'
import Authorize from "../accounts/auth/Authorize"
import NavBar from "@components/navigation/NavBar"
import MobileSideBar from "@components/bank/sidebar/MobileSideBar"

interface WithSideBarTypes {
  children: React.ReactElement | React.ReactNode
}

export interface SideBarContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  barWidth: number;
  setBarWidth: React.Dispatch<React.SetStateAction<number>>
}

const WithSidebar = ({ children }: WithSideBarTypes) => {
  const [barWidth, setBarWidth] = useState(70)
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1080px)'
  })
  const defContext: SideBarContextType = {
    isOpen: sideBarOpen,
    setIsOpen: setSideBarOpen,
    barWidth,
    setBarWidth
  }

  const SideBarContext = React.createContext(defContext)
  const context = React.useContext(SideBarContext)

  return (
    <Authorize>
      <SideBarContext.Provider value={defContext}>
        {!isDesktopOrLaptop &&
          <MobileSideBar context={SideBarContext}>
            <SideBarItem icon={<MdSpaceDashboard />} href="/user/dashboard" text="Dashboard" context={SideBarContext}/>
            <SideBarItem icon={<HiAcademicCap />} href="/user/courses" text="Courses" context={SideBarContext}/>
            <SideBarItem icon={<GiBookshelf />} href="/user/resources" text="Resources" context={SideBarContext}/>
            <SideBarItem icon={<AiFillSchedule />} href="/user/timetables" text="Timetables" context={SideBarContext}/>
            <SideBarItem icon={<SiTodoist />} href="/user/todos" text="Todo" context={SideBarContext}/>
          </MobileSideBar>
        }
        <div>
          {isDesktopOrLaptop &&
            <SideBar context={SideBarContext}>
              <SideBarItem icon={<MdSpaceDashboard />} href="/user/dashboard" text="Dashboard" context={SideBarContext}/>
              <SideBarItem icon={<HiAcademicCap />} href="/user/courses" text="Courses" context={SideBarContext}/>
              <SideBarItem icon={<GiBookshelf />} href="/user/resources" text="Resources" context={SideBarContext}/>
              <SideBarItem icon={<AiFillSchedule />} href="/user/timetables" text="Timetables" context={SideBarContext}/>
              <SideBarItem icon={<SiTodoist />} href="/user/todos" text="Todo" context={SideBarContext}/>
            </SideBar>
          }
          <motion.main
            className={`min-h-screen ${ !isDesktopOrLaptop && `p-2`} flex flex-col relative pt-12 min-w-screen`}
            animate={{ marginLeft: isDesktopOrLaptop ? context.barWidth + 30: 'auto' }}>
            <NavBar />
            {children}
          </motion.main>
        </div>
      </SideBarContext.Provider>
    </Authorize>
  )
}

export default WithSidebar
