import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@store/slices/userSlice'
import coursesReducer from '@store/slices/courseSlice'
import sectionReducer from '@store/slices/sectionSlice'
import resourceReducer from '@store/slices/resourceSlice'
import courseDetailReducer from '@store/slices/courseDetailSlice'
import resourceDetailReducer from '@store/slices/resourceDetailSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    courses: coursesReducer,
    sections: sectionReducer,
    resources: resourceReducer,
    courseDetail: courseDetailReducer,
    resourceDetail: resourceDetailReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
