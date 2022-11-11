import { getSideBarLayout } from "@features/layouts/hooks"
import { useRouter } from "next/router"

const ResourceDetails = ()=>{
  const router = useRouter()
  const { id } = router.query

  return (
    <form>
      <div >
        <label>Resource name</label>
        <input className="bg-transparent" type='text' placeholder="Some random input"/>
      </div>
    </form>
  )
}

ResourceDetails.getLayout = getSideBarLayout

export default ResourceDetails
