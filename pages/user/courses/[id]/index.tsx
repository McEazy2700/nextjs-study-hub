import PageLoadingRotation from "@components/bank/loading/LoadingRotation"
import CourseUpdateForm from "@components/course/course-update-form/UpdateForm"
import CourseResourcesList from "@components/resources/resources-list/ResourcesList"
import { getSideBarLayout } from "@features/layouts/hooks"
import { useAppDispatch } from "@features/store/hooks"
import { dispatchCourseDetail } from "@features/store/slices/courseDetailSlice"
import { useGetCourseByID } from "@gql/hooks/queries"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

const CourseDetails = ()=>{
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { id } = router.query
  const { data, loading, error } = useGetCourseByID(id?.toString() ?? '')

  useEffect(()=>{
    if (!loading && !error) {
      dispatchCourseDetail(dispatch, data?.course)
    }
  },[data])

  if (loading){
    return <PageLoadingRotation />
  }
  return (
    <div className="p-2">
      <CourseUpdateForm />
      <CourseResourcesList courseId={data?.course?.id ?? ''} />
    </div>
  )
}

CourseDetails.getLayout = getSideBarLayout

export default CourseDetails

