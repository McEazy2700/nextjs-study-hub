import { getSideBarLayout } from "@features/layouts/hooks/getSidebarLayout"
import { useRouter } from "next/router"

const SectionDetail = ()=>{
  const router = useRouter()
  const { id } = router.query

  return (
    <div>Section {id}</div>
  )
}

SectionDetail.getLayout = getSideBarLayout

export default SectionDetail
