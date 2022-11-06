import React, { useEffect } from "react"
import CoursesPage from "@containers/courses/CoursePage"
import { useUserCourses, useUserSections } from "@gql/hooks/queries"
import { useAppDispatch } from "@features/store/hooks"
import { dispatchCourseList } from "@store/slices/courseSlice"
import { dispatchSectionList } from "@store/slices/sectionSlice"
import { getSideBarLayout } from "@features/layouts/hooks"

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

Courses.getLayout = getSideBarLayout

export default Courses
