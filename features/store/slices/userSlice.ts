import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface User {
  user: {
    email: string,
    pk: string
  }
}

const initialState: User = {
  user: {
    email: '',
    pk: ''
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<User>) => {
      const { user } = action.payload
      return {
        user
      }
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
