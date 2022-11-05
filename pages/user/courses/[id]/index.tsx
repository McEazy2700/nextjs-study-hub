import WithSidebar from "@features/layouts/with-sidebar"
import { createCourseObj } from "@features/store/slices/courseSlice"
import { createResourceList } from "@features/store/slices/resourceSlice"
import { useGetCourseByID } from "@gql/hooks/queries"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const CourseDetails = ()=>{
  const [resources, setResources] = useState<ReturnType<typeof createResourceList>>()
  const [course, setCourse] = useState<ReturnType<typeof createCourseObj>>({
    name: '',
    description: '',
    endDate: '',
    startDate: '',
    id: '',
    sectionId: ''
  })
  const router = useRouter()
  const { id } = router.query
  const { data, loading, error } = useGetCourseByID(id?.toString() ?? '')

  useEffect(()=>{
    if (!loading && !error) {
      setCourse(createCourseObj(data?.course))
      const resources = data?.course?.resources
      setResources(createResourceList(resources))
    }
  },[data])
  console.log(course)
  console.log(resources)
  if (loading){
    return <div>Loading....</div>
  }
  return (
    <div>Course { course.id }</div>
  )
}

CourseDetails.getLayout = (page: React.ReactElement) => {
  return (
    <WithSidebar>{page}</WithSidebar>
  )
}

export default CourseDetails

