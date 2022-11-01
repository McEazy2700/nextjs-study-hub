import WithSidebar from "@features/layouts/with-sidebar"
import { useAppSelector } from "@features/store/hooks"
import React from "react"

const DashBoard = ()=>{
  const selector = useAppSelector((state)=> state.users.user)
  return <div>DashBoard for {selector.username}</div>
}

DashBoard.getLayout = (page: React.ReactElement)=>{
  return (
    <WithSidebar>{page}</WithSidebar>
  )
}
export default DashBoard
