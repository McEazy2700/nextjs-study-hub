import { useAppDispatch } from "@features/store/hooks"
import { CourseListType, setCourses } from "@features/store/slices/courseSlice"
import { Maybe, CourseType } from '@gql/types/graphql'

type Dispatch = ReturnType<typeof useAppDispatch>

export function createCourseObj(course: Maybe<CourseType> | undefined){
  const courseObj = {
    startDate: course?.startDate,
    endDate: course?.endDate,
    description: course?.description ?? '',
    sectionId: course?.section?.id,
    id: course?.id,
    name: course?.name
  }
  return courseObj
}
export function dispatchCourseList(dispatch: Dispatch, courses: Maybe<Maybe<CourseType>[]>){
  let courseList: CourseListType = {
    courses: []
  }
  courses?.forEach(courses => {
    courseList.courses.push({course:createCourseObj(courses)})
  })
  dispatch(setCourses(courseList))
}
