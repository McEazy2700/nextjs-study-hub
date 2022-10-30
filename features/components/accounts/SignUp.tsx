import React, { useRef, useState } from 'react'
import type { PageWithLayout } from 'pages/_app'
import Link from 'next/link'

const SignUp: PageWithLayout = () => {
  const pass1Ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const pass2Ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const [passColor, setPassColor] = useState('dark-bg')
  const passwordChangeHandler = ()=>{
    if (pass1Ref.current.value === pass2Ref.current.value){
      setPassColor('green-700')
    }
  }
  return (
    <div className=''>
      <div className='bg-accent items-center justify-center min-h-screen h-full flex p-10'>
        <form className='flex flex-col items-center justify-center gap-4 border-2 p-5 rounded-[3rem] md:max-w-[50vw]'>
          <div className='mb-5 flex gap-3 w-full'>
            <label className='bg-dark-bg rounded-[5rem] p-5'>Username</label>
            <input
              className='bg-transparent border-2 flex-1 rounded-[5rem] px-5 text-dark-bg focus:shadow-xl transition-all shadow-dark-bg'
              type="text" id='username' placeholder='LittleDev' />
          </div>
          <div className='mb-5 flex gap-3 w-full'>
            <label className='bg-dark-bg rounded-[5rem] p-5 px-10'>Email</label>
            <input
              className='bg-transparent border-2 flex-1 rounded-[5rem] px-5 text-dark-bg focus:shadow-xl transition-all shadow-dark-bg'
              type="email" id='email' placeholder='idev@gmail.com' />
          </div>
          <div className='flex flex-col w-full gap-5'>
            <div className='border-2 w-full flex rounded-[5rem] '>
              <label className={`bg-${passColor} rounded-[5rem] p-5 px-10`}>Password</label>
              <input
                ref={pass1Ref}
                className='bg-transparent p-5 flex-1 outline-none px-5 text-dark-bg'
                type="password" id='password' placeholder='Password' />
            </div>
            <div className='border-2 w-full flex rounded-[5rem] '>
              <label className={`bg-${passColor} rounded-[5rem] p-5 px-10`}>Confirm</label>
              <input
                ref={pass2Ref}
                onChange={passwordChangeHandler}
                className='bg-transparent p-5 flex-1 outline-none px-5 text-dark-bg'
                type="password" id='password' placeholder='Confirm Password' />
            </div>
          </div>
          <button
           type='submit'
            className='bg-primary p-5 w-full rounded-[5rem] active:bg-primary/60 hover:bg-primary/60 transition-all'>Sign up</button>
          <p className='text-dark-bg'>Already have an account? <Link className='text-primary' href="/signin">Sign in</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
