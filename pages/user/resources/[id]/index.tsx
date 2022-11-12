import Form from "@components/bank/form/form"
import PageLoadingRotation from "@components/bank/loading/LoadingRotation"
import { getSideBarLayout } from "@features/layouts/hooks"
import { useAppDispatch } from "@features/store/hooks"
import { dispatchResourceDetail } from "@features/store/slices/resourceDetailSlice"
import { useGetResourceByID } from "@gql/hooks/queries"
import { useRouter } from "next/router"
import { useEffect } from "react"
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
    <div className="py-4 pt-10">
      <ResourcePage />
    </div>
  )
}

ResourceDetails.getLayout = getSideBarLayout

export default ResourceDetails
