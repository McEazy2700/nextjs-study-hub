import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../config";

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
