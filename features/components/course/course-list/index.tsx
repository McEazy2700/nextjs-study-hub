import React from "react"
import { useAppSelector } from "@features/store/hooks"
import { selectCourses } from "@features/store/slices/courseSlice"
import CourseCard from "../course-card"
import NothingHere from "@components/bank/list/empty"
import ListContainer from "@components/bank/list/container"

interface CourseListProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const CourseList = ({onClick}: CourseListProps)=>{
  const courses = useAppSelector(selectCourses)

  return (
    <ListContainer title="Courses" addItem={onClick}>
      {courses && courses.length > 0 ?
        courses.map(course => course && <CourseCard key={course.id} course={course} /> )
        : <NothingHere onClick={onClick} />
      }
    </ListContainer>
  )
}

export default CourseList
