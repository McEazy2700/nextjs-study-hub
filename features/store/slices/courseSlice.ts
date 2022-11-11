import { useAppDispatch } from "@features/store/hooks"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/config";
import { Maybe, CourseType, CourseCreateUpdateMutation } from '@gql/types/graphql'

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {} as { courses: Maybe<Maybe<CourseType>[]> },
  reducers: {
    setCourses: (_state, action: PayloadAction<Maybe<Maybe<CourseType>[]>>) => {
      return {
        courses: action.payload
      }
    },
    appendCourse: (state, action: PayloadAction<CourseCreateUpdateMutation>) => {
      state.courses?.push(action.payload.course ?? {} as CourseType)
    },
    removeCourse: (state, action: PayloadAction<{ courseId: string}>) => {
      return {
        courses: state.courses ? [...state.courses?.filter(course => course?.id === action.payload.courseId)] : []
      }
    }
  }
})

export const { setCourses, appendCourse, removeCourse } = coursesSlice.actions
export default coursesSlice.reducer
export const selectCourses = (state:RootState) => state.courses.courses

type Dispatch = ReturnType<typeof useAppDispatch>

/**
 * Prepares and dispatches a courses list
 * @param {Dispatch} dispatch - dispatch object of type useAppDispatch
 * @param {Maybe<Maybe<CourseType>[]>} courses - returned course list
 */
export function dispatchCourseList(dispatch: Dispatch, courses: Maybe<Maybe<CourseType>[]>){
  dispatch(setCourses(courses))
}

export function dispatchRemoveCourse(dispatch: Dispatch, courseId: string){
  dispatch(removeCourse({courseId}))
}
