import React, { useEffect } from "react"
import CoursesPage from "@containers/courses"
import WithSidebar from "@features/layouts/with-sidebar"
import { useUserCourses, useUserSections } from "@gql/hooks/queries"
import { useAppDispatch } from "@features/store/hooks"
import { dispatchCourseList } from "@store/slices/courseSlice"
import { dispatchSectionList } from "@store/slices/sectionSlice"

export async function getServerSideProps(){
  return {
    props: {
      courses: []
    }
  }
}

const Courses = () => {
  const { loading: coursesLoading, data: courseData, error: coursesError } = useUserCourses()
  const { loading: sectionLoading, data: sectionData, error: sectionError } = useUserSections()
  const dispatch = useAppDispatch()
  useEffect(()=>{
  },[courseData])
  if (!coursesLoading && !coursesError){
    dispatchCourseList(dispatch, courseData?.courses ?? [])
  }
  if (!sectionLoading && !sectionError){
    dispatchSectionList(dispatch, sectionData?.sections)
  }

  if (coursesLoading || sectionLoading){
    return <div>Loading...</div>
  }

  return (
    <CoursesPage />
  )
}

Courses.getLayout = (page: React.ReactElement) => {
  return (
    <WithSidebar>{page}</WithSidebar>
  )
}

export default Courses
