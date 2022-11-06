import { CourseType } from "@gql/types/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseStateType, createCourseObj } from "@store/slices/courseSlice";
import { Maybe } from "graphql/jsutils/Maybe";
import { RootState } from "../config";
import { useAppDispatch } from "../hooks";

const initialState: CourseStateType = {
  course: {
    name: '',
    id: '',
    description: '',
    endDate: null,
    sectionId: '',
    startDate: null
  }
}

const courseDetailSlice = createSlice({
  name: 'courseDetail',
  initialState,
  reducers: {
    setCurrCourse: (state, action: PayloadAction<CourseStateType>)=>{
      const { course } = action.payload
      state.course = course
    }
  }
})

export const { setCurrCourse } = courseDetailSlice.actions
export default courseDetailSlice.reducer
export const selectCurrCourse = (state:RootState) => state.courseDetail.course

type Dispatch = ReturnType<typeof useAppDispatch>

export function dispatchCourseDetail(dispatch: Dispatch, course: Maybe<CourseType> | undefined){
  const courseObj = createCourseObj(course)
  dispatch(setCurrCourse({course:courseObj}))
}
