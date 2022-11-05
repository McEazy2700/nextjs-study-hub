import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@store/slices/userSlice'
import coursesReducer from '@store/slices/courseSlice'
import sectionReducer from '@store/slices/sectionSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    courses: coursesReducer,
    sections: sectionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
