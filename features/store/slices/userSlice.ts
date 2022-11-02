import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store/config'

export interface Profile {
  pk: number | string,
  imageUrl?: string
}

export type User = {
  user: {
    username: string;
    email: string;
    pk: number;
    profile: Profile;
  }
}

const initialState: User = {
  user: {
    username: '',
    email: '',
    pk: 0,
    profile: {
      pk: 0,
      imageUrl: ''
    }
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
export const selectUser = (state: RootState) => state.users
export default userSlice.reducer
