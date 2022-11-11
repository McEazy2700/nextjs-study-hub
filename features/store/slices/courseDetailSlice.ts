import type { CourseType }  from "@gql/types/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Maybe } from "graphql/jsutils/Maybe";
import { RootState } from "../config";
import { useAppDispatch } from "../hooks";


const courseDetailSlice = createSlice({
  name: 'courseDetail',
  initialState: {} as CourseType,
  reducers: {
    setCurrCourse: (state, action: PayloadAction<Maybe<CourseType>>)=>{
      const newState = Object.assign(state, action.payload)
      return newState
    }
  }
})

export const { setCurrCourse } = courseDetailSlice.actions
export default courseDetailSlice.reducer
export const selectCurrCourse = (state:RootState) => state.courseDetail

type Dispatch = ReturnType<typeof useAppDispatch>

export function dispatchCourseDetail(dispatch: Dispatch, course: Maybe<CourseType> | undefined){
  dispatch(setCurrCourse(course))
}
