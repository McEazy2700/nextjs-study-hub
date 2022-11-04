import React, { useEffect } from "react"
import CoursesPage from "@containers/courses"
import WithSidebar from "@features/layouts/with-sidebar"
import { useUserCourses } from "@gql/hooks/queries"
import { Maybe, CourseType } from '@gql/types/graphql'
import { useAppDispatch } from "@features/store/hooks"
import { dispatchCourseList } from "@components/course/course-list/utils"

interface CourseProps {
  courses: Maybe<Maybe<CourseType>[]>
}

export async function getServerSideProps(){
  return {
    props: {
      courses: []
    }
  }
}

const Courses = () => {
  const { loading, data, error } = useUserCourses()
  const dispatch = useAppDispatch()
  useEffect(()=>{
  },[data])
  if (!loading && !error){
    dispatchCourseList(dispatch, data?.courses ?? [])
  }

  if (loading){
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
