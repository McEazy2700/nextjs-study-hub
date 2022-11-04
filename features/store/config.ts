import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@store/slices/userSlice'
import coursesReducer from '@store/slices/courseSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    courses: coursesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
