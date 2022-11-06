import { getSideBarLayout } from "@features/layouts/hooks"
import { useAppSelector } from "@features/store/hooks"
import React from "react"

const DashBoard = ()=>{
  const selector = useAppSelector((state)=> state.users.user)
  return <div>DashBoard for {selector.username}</div>
}

DashBoard.getLayout = getSideBarLayout
export default DashBoard
