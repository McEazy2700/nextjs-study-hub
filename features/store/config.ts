import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@store/slices/userSlice'
import coursesReducer from '@store/slices/courseSlice'
import sectionReducer from '@store/slices/sectionSlice'
import resourceReducer from '@store/slices/resourceSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    courses: coursesReducer,
    sections: sectionReducer,
    resources: resourceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
