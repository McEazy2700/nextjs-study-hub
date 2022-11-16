import React from 'react'

interface AuthWraperProps {
  children?: React.ReactNode
}
const AuthWraper = (props: AuthWraperProps) => {
  const { children } = props
  return (
    <div className='bg-accent items-center justify-center min-h-screen h-full flex p-2 sm:p-10'>
      {children}
    </div>
  )
}

export default AuthWraper
