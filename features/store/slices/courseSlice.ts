import { useAppDispatch } from "@features/store/hooks"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/config";
import { Maybe, CourseType } from '@gql/types/graphql'

export type CourseStateType = {
  course: {
    id?: string,
    name?: string,
    description?: string,
    startDate?: any,
    endDate?: any,
    sectionId?: string
  }
}

export type CourseListType = {
  courses: CourseStateType[]
}

const initialValue:CourseListType = {
  courses: []
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState: initialValue,
  reducers: {
    setCourses: (_state, action: PayloadAction<CourseListType>) => {
      const { courses } = action.payload
      return {
        courses: courses
      }
    },
    appendCourse: (state, action: PayloadAction<CourseStateType>) => {
      const { course } = action.payload
      state.courses.push({course: course})
    }
  }
})

export const { setCourses, appendCourse } = coursesSlice.actions
export default coursesSlice.reducer
export const selectCourses = (state:RootState) => state.courses

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
