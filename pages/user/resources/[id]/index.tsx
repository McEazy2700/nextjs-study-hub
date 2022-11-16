import React, { useEffect } from "react"
import PageLoadingRotation from "@components/bank/loading/LoadingRotation"
import { getSideBarLayout } from "@features/layouts/hooks/getSidebarLayout"
import { useAppDispatch } from "@features/store/hooks"
import { dispatchResourceDetail } from "@features/store/slices/resourceDetailSlice"
import { useGetResourceByID } from "@gql/hooks/queries"
import { useRouter } from "next/router"
import ResourcePage from '@containers/resources/ReourcesPage'

const ResourceDetails = ()=>{
  const router = useRouter()
  const { id } = router.query
  const { data, loading, error } = useGetResourceByID(id?.toString() ?? '')
  const dispatch = useAppDispatch()
  useEffect(()=>{
    if (!loading && !error){
      dispatchResourceDetail(dispatch, data?.resource)
    }
  },[data])

  if (loading){
    return <PageLoadingRotation />
  }
  return (
    <div className="py-4">
      <ResourcePage />
    </div>
  )
}

ResourceDetails.getLayout = getSideBarLayout

export default ResourceDetails
