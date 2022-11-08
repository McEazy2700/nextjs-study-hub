import { useRouter } from "next/router"
import { useEffect } from "react"

const UserPage = ()=>{
  const router = useRouter()
  useEffect(()=>{
    router.replace('/user/dashboard/')
  },[])
}

export default UserPage
