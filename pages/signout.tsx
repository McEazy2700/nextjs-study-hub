import { useLogOut } from "@gql/hooks/auth"
import { useRouter } from "next/router"

const SignOut = ()=>{
  const router = useRouter()
  useLogOut()

  router.replace('/signin')
}

export default SignOut
