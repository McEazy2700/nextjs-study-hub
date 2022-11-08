import { useLogOut } from "@gql/hooks/auth"
import { useRouter } from "next/router"
import { useEffect } from "react"

const SignOut = ()=>{
  const router = useRouter()
  useLogOut()

  useEffect(()=>{
    router.replace('/signin')
  },[])
}

export default SignOut
