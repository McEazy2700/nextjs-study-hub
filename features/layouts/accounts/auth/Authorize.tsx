import { useRouter } from "next/router";
import { useAuthUser, useRefeshToken } from "@gql/hooks/auth"
import { getRefreshToken, setAuthToken } from "@features/utils/cookies"
import React, { useEffect } from "react";

interface Component {
  children?: React.ReactNode | React.ReactElement
}

const Authorize = ({ children }: Component) => {
  const refresh = getRefreshToken()
  const router = useRouter()
  const path = router.asPath
  useEffect(()=>{
    if (!refresh){
      router.replace('/signin')
    }
  },[])
  const {loading, data, refetch} = useAuthUser()
  const [refreshToken, { loading: refreshLoading }] = useRefeshToken(refresh ?? '')

  if (loading || refreshLoading) {
    return (
      <div>Loading....</div>
    )
  }
  if (!data?.user) {
    refreshToken({
      variables: {
        refreshToken: refresh ?? ''
      }
    }).then(resp => {
        if (resp.errors) {
          return <div>{
            resp.errors.map(error => {
              return (
                <div>
                  <h3>The Following errors occurred</h3>
                  <div key={Math.random()}>{error.message}</div>
                </div>
              )
            })
          }</div>
        }
        if (resp.data?.refreshToken.errors){
          router.replace('/signin')
          return <></>
        }
        setAuthToken(resp.data?.refreshToken.token ?? "", resp.data?.refreshToken.refreshToken ?? "")
        refetch().then(resp => {
          if (!resp.data.user) {
            router.replace('/signin')
            return <></>
          }
        })
      })
  }
  // router.replace('/user/dashboard')
  return (
    <>
      {children}
    </>
  )

}

export default Authorize
