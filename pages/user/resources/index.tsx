import { getSideBarLayout } from "@features/layouts/hooks"
import { useAppDispatch } from "@features/store/hooks"
import { dispatchResourceList } from "@features/store/slices/resourceSlice"
import { useUserResources } from "@gql/hooks/queries"
import React from "react"

const Resource = ()=>{
  const { loading, data, error } = useUserResources()
  const dispatch = useAppDispatch()
  if (!loading && !error){
    console.log(data?.resources)
    dispatchResourceList(dispatch, data?.resources)
  }

  if (loading){
    return <div>Loading....</div>
  }
  return (
    <div>Resources</div>
  )
}

Resource.getLayout = getSideBarLayout

export default Resource
