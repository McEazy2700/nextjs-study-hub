import React, { useRef, useState } from 'react'
import type { PageWithLayout } from 'pages/_app'
import Link from 'next/link'
import { useRegister } from '@gql/hooks/auth'
import { emailValidator } from '@features/utils/validators/components'
import { MutationRegisterArgs } from '@gql/types/graphql'
import ErrorMessage from '@components/bank/errors'
import { setAuthToken } from '@features/utils/cookies'
import { useRouter } from 'next/router'

const initialData: MutationRegisterArgs = {
  username: '',
  email: '',
  password1: '',
  password2: ''
}
const SignUp: PageWithLayout = () => {
  const [registerUser, { data, loading }] = useRegister(initialData)
  const pass1Ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const pass2Ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const usernameRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const router = useRouter()
  const [emailColor, setEmailColor] = useState('dark-bg')
  const [passColor, setPassColor] = useState('dark-bg')
  const passwordChangeHandler = ()=>{
    if (pass1Ref.current.value === pass2Ref.current.value){
      setPassColor('green-700')
    }else {
      setPassColor('red-600')
    }
  }
  const validateEmail = ()=>{
    const validEmail = emailValidator(emailRef)
    if (validEmail) {
      setEmailColor('green-700')
    }else {
      setEmailColor('red-600')
    }
  }
  const signUpHandler: React.FormEventHandler = (event)=>{
    event.preventDefault()
    registerUser({
      variables: {
          username: usernameRef.current.value,
          email: emailRef.current.value.toLowerCase(),
          password1: pass1Ref.current.value,
          password2: pass2Ref.current.value
        }
    }).then(resp => {
        if (resp.data?.register.success){
          const token = resp.data.register.token ?? ""
          const refreshToken = resp.data.register.refreshToken ?? ""
          setAuthToken(token, refreshToken)
          router.replace('/signin')
        }
      })
  }
  if (loading) {
    return <div>Loadding.....</div>
  }
  return (
    <div className=''>
      <div className='bg-accent items-center justify-center min-h-screen h-full flex p-10'>
        <form 
          onSubmit={signUpHandler}
          className='flex flex-col items-center justify-center gap-4 border-2 p-5 rounded-[3rem]'>
          <div className='flex flex-col gap-3 w-full'>
            <div className='mb-3 flex gap-3 w-full'>
              <label className='bg-dark-bg rounded-[5rem] p-3 px-5 md:px-10 flex items-center justify-center '>Username</label>
              <input
                ref={usernameRef}
                required
                className='bg-transparent border-2 flex-1 rounded-[5rem] w-full p-2 md:p-5 text-dark-bg focus:shadow-xl transition-all shadow-dark-bg'
                type="text" id='username' placeholder='LittleDev' />
            </div>
            {data?.register.errors && data.register.errors.username &&
              <ErrorMessage errors={data.register.errors.username}/>
            }
          </div>
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
            {data?.register.errors && data.register.errors.email &&
              <ErrorMessage errors={data.register.errors.email}/>
            }
          </div>
          <div className='flex flex-col w-full gap-5'>
            <div className='flex flex-col gap-3 w-full'>
              <div className='border-2 w-full flex rounded-[5rem] '>
                <label className={`bg-${passColor} rounded-[5rem] p-3 px-5 md:px-10 flex items-center justify-center `}>Password</label>
                <input
                  ref={pass1Ref}
                  required
                  className='bg-transparent p-2 rounded-[5rem] md:p-5 flex-1 outline-none px-5 w-full text-dark-bg'
                  type="password" id='password' placeholder='Password' />
              </div>
              {data?.register.errors && data.register.errors.password2 &&
                <ErrorMessage errors={data.register.errors.password2}/>
              }
            </div>
            <div className='border-2 w-full flex rounded-[5rem] '>
              <label className={`bg-${passColor} rounded-[5rem] p-3 px-5 md:px-10 flex items-center justify-center `}>Confirm</label>
              <input
                ref={pass2Ref}
                required
                onChange={passwordChangeHandler}
                className='bg-transparent p-2 md:p-5 rounded-[5rem] flex-1 outline-none px-5 w-full text-dark-bg'
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
