import RightAngle from "@components/bank/waves/RightAngle"
import React from "react"

type Page = {
  children?: React.ReactNode | React.ReactElement
}
const WavePage = ({ children }: Page)=>{

  return (
    <main className="relative">
      <RightAngle />
        {children}
    </main>
  )
}

export default WavePage
