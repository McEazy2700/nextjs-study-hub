import React from "react"
import { useAppSelector } from "@features/store/hooks"
import { selectCourses } from "@features/store/slices/courseSlice"
import CourseCard from "../course-card"

interface CourseListProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const CourseList = ({onClick}: CourseListProps)=>{
  const courses = useAppSelector(selectCourses)

  return (
    <div className="flex flex-col gap-2 p-2 bg-dark-accent/20 dark:bg-dark-accent/50 rounded-lg m-4 ml-0">
      <div className="relative flex">
        <h2 className="font-semibold text-lg">Courses</h2>
        <button 
        className='bg-primary p-2 max-w-[8rem] rounded-3xl absolute right-2 min-w-[6rem] mt-1' 
        onClick={onClick}>Add +</button>
      </div>
      <ul className="flex flex-wrap gap-2 max-h-[20rem] overflow-y-scroll">
        {courses.courses.length > 0 ?
        courses.courses.map(course => <CourseCard key={course.course.id} course={course.course} /> )
        : <div className="w-full p-2 flex flex-col items-center justify-center gap-2">
            <div className="max-w-[10rem]">
              <img className="w-full" src="/assets/images/whistling.png" alt="whistling" />
            </div>
            <div className="text-black/30 dark:text-secondary/30 font-semibold flex flex-col items-center justify-center">
              <p className="">There's nothing to see here. </p>
              <button onClick={onClick}>Add now!</button>
            </div>
          </div>
      }
      </ul>
    </div>
  )
}

export default CourseList
