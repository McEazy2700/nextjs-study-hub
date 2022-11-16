import React, { useRef, useState } from "react"
import Link from "next/link"
import { emailValidator } from "@features/utils/validators/components"
import { MutationTokenAuthArgs } from "@gql/types/graphql"
import { useSignIn } from "@gql/hooks/auth"
import ErrorMessage from '@components/bank/errors'
import { useRouter } from "next/router"
import { useAppDispatch } from "@features/store/hooks"
import { setUser } from "@features/store/slices/userSlice"
import { prepUserData } from "@features/store/helpers/users"
import { setAuthToken } from "@features/utils/cookies"
import Label from "@components/bank/label"
import PageLoadingRotation from "@components/bank/loading/LoadingRotation"
import AuthWraper from "@components/bank/wrappers/AuthWraper"

const initialInput:MutationTokenAuthArgs = {
  email: '',
  password: ''
}
const SignInPage = ()=>{
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const pass1Ref = useRef() as React.MutableRefObject<HTMLInputElement>
  const router = useRouter()
  const [signInUser, { loading, data, error }] = useSignIn(initialInput)
  const [emailColor, setEmailColor] = useState('bg-dark-bg')
  const dispatch = useAppDispatch()
  const validateEmail = ()=>{
    const validEmail = emailValidator(emailRef)
    if (validEmail) {
      setEmailColor('bg-system-success')
    }else {
      setEmailColor('bg-system-error')
    }
  }
  const signInHandler: React.FormEventHandler = (event)=>{
    event.preventDefault()
    signInUser({
      variables: {
        email: emailRef.current.value.toLowerCase(),
        password: pass1Ref.current.value
      }
    }).then(resp => {
        if (resp.data?.signin.success && resp.data?.signin.user) {
          dispatch(setUser(prepUserData(resp.data.signin.user)))
          router.replace('/user/dashboard')
          setAuthToken(
            resp.data.signin.token ?? "", 
            resp.data.signin.refreshToken ?? "")
        }
      })
  }
  if (loading){
    return <PageLoadingRotation />
  }
  if (error) {
    return (
    <div className="fixed inset-0 flex items-center justify-center">
      <h3 className="bg-red-500/80 p-10 rounded-lg">{error.message}</h3>
    </div>)
  }
  return (

    <div className=''>
      <AuthWraper>
        <form 
          onSubmit={signInHandler}
          className='flex flex-col items-center justify-center gap-4 border-2 p-5 rounded-[3rem]'>
          <div className='flex flex-col gap-3 w-full'>
            <div className='mb-3 flex gap-3 w-full'>
              <Label htmlFor="email" className={`${emailColor}`}>
                Email
              </Label>
              <input
                ref={emailRef}
                required
                onChange={validateEmail}
                className='bg-transparent border-2 flex-1 rounded-[5rem] p-2 md:p-5 w-full text-dark-bg focus:shadow-xl transition-all shadow-dark-bg'
                type="email" id='email' placeholder='idev@gmail.com' />
            </div>
          </div>
          <div className='flex flex-col w-full gap-5'>
            <div className='flex flex-col gap-3 w-full'>
              <div className='border-2 w-full flex rounded-[5rem] '>
                <Label className="bg-dark-bg">Password</Label>
                <input
                  ref={pass1Ref}
                  required
                  className='bg-transparent rounded-[5rem] p-2 md:p-5 flex-1 outline-none px-5 w-full text-dark-bg'
                  type="password" id='password' placeholder='Password' />
              </div>
              {data?.signin.errors && data.signin.errors.nonFieldErrors &&
                <ErrorMessage errors={data.signin.errors.nonFieldErrors}/>
              }
            </div>
          </div>
          <button
           type='submit'
            className='bg-primary p-5 w-full rounded-[5rem] active:bg-primary/60 hover:bg-primary/60 transition-all'>Sign in</button>
          <p className='text-dark-bg'>Do not have an account? <Link className='text-primary' href="/signup">Sign up</Link></p>
        </form>
      </AuthWraper>
    </div>
  )
}

export default SignInPage
