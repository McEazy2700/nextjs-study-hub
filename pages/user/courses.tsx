import CoursesPage from "@containers/courses"
import WithSidebar from "@features/layouts/with-sidebar"
import React from "react"

export async function getServerSideProps(){
  return {
    props: {
    }
  }
}

const Courses = () => {
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
