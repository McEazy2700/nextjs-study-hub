import React, { useRef, useState } from "react"
import Link from "next/link"
import { emailValidator } from "@features/utils/validators/components"

const SignInPage = ()=>{
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const pass1Ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const [emailColor, setEmailColor] = useState('dark-bg')
  const validateEmail = ()=>{
    const validEmail = emailValidator(emailRef)
    if (validEmail) {
      setEmailColor('green-700')
    }else {
      setEmailColor('red-600')
    }
  }
  const signInHandler = ()=>{

  }
  return (

    <div className=''>
      <div className='bg-accent items-center justify-center min-h-screen h-full flex p-10'>
        <form 
          onSubmit={signInHandler}
          className='flex flex-col items-center justify-center gap-4 border-2 p-5 rounded-[3rem]'>
          <div className='flex flex-col gap-3 w-full'>
            <div className='mb-3 flex gap-3 w-full'>
              <label className={`bg-${emailColor} rounded-[5rem] p-3 px-5 md:px-10 flex items-center justify-center `}>Email</label>
              <input
                ref={emailRef}
                required
                onChange={validateEmail}
                className='bg-transparent border-2 flex-1 rounded-[5rem] p-2 md:p-5 w-full text-dark-bg focus:shadow-xl transition-all shadow-dark-bg'
                type="email" id='email' placeholder='idev@gmail.com' />
            </div>
            {/* {data?.register.errors && data.register.errors.email && */}
            {/*   <ErrorMessage errors={data.register.errors.email}/> */}
            {/* } */}
          </div>
          <div className='flex flex-col w-full gap-5'>
            <div className='flex flex-col gap-3 w-full'>
              <div className='border-2 w-full flex rounded-[5rem] '>
                <label className={`bg-dark-bg rounded-[5rem] p-3 px-5 md:px-10 flex items-center justify-center `}>Password</label>
                <input
                  ref={pass1Ref}
                  required
                  className='bg-transparent p-2 md:p-5 flex-1 outline-none px-5 w-full text-dark-bg'
                  type="password" id='password' placeholder='Password' />
              </div>
              {/* {data?.register.errors && data.register.errors.password2 && */}
              {/*   <ErrorMessage errors={data.register.errors.password2}/> */}
              {/* } */}
            </div>
          </div>
          <button
           type='submit'
            className='bg-primary p-5 w-full rounded-[5rem] active:bg-primary/60 hover:bg-primary/60 transition-all'>Sign up</button>
          <p className='text-dark-bg'>Do not have an account? <Link className='text-primary' href="/signup">Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
