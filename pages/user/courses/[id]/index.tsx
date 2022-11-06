import CourseUpdateForm from "@components/course/course-update-form/UpdateForm"
import { getSideBarLayout } from "@features/layouts/hooks"
import { useAppDispatch } from "@features/store/hooks"
import { dispatchCourseDetail } from "@features/store/slices/courseDetailSlice"
import { createCourseObj } from "@features/store/slices/courseSlice"
import { createResourceList } from "@features/store/slices/resourceSlice"
import { useGetCourseByID } from "@gql/hooks/queries"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const CourseDetails = ()=>{
  const [resources, setResources] = useState<ReturnType<typeof createResourceList>>()
  const dispatch = useAppDispatch()
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
      dispatchCourseDetail(dispatch, data?.course)
      const resources = data?.course?.resources
      setResources(createResourceList(resources))
    }
  },[data])
  if (loading){
    return <div>Loading....</div>
  }
  return (
    <div className="p-2">
      <CourseUpdateForm />
    </div>
  )
}

CourseDetails.getLayout = getSideBarLayout

export default CourseDetails

