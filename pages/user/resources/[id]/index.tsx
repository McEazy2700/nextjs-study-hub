import { getSideBarLayout } from "@features/layouts/hooks"
import { useRouter } from "next/router"

const ResourceDetails = ()=>{
  const router = useRouter()
  const { id } = router.query

  return (<div>Resource {id}</div>)
}

ResourceDetails.getLayout = getSideBarLayout

export default ResourceDetails
