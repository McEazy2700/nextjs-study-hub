import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Maybe, ResourceType } from "@gql/types/graphql";
import { RootState } from "../config";
import { useAppDispatch } from "../hooks";

const resourceDetailSlice = createSlice({
  name: 'resource',
  initialState: {} as ResourceType,
  reducers: {
    setCurrResource: (state, action: PayloadAction<Maybe<ResourceType>>) => {
      const course = action.payload ?? {} as Maybe<ResourceType>
      const newState = Object.assign(state, course)
      return newState
    },
    clearCurrResource: (_state, _action) => {
      return {} as ResourceType
    }
  }
})

export const { setCurrResource, clearCurrResource } = resourceDetailSlice.actions
export default resourceDetailSlice.reducer
export const selectResource = (state: RootState) => state.resourceDetail

type Dispatch = ReturnType<typeof useAppDispatch>

export const dispatchResourceDetail = (dispatch: Dispatch, resource: Maybe<ResourceType> | undefined) => {
  dispatch(setCurrResource(resource ?? {} as ResourceType))
}
