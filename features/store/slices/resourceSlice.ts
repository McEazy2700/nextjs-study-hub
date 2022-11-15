import { ResourceType, CreateUpdateResourceMuations } from "@gql/types/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Maybe } from "graphql/jsutils/Maybe";
import { RootState } from "../config";
import { useAppDispatch } from "../hooks";


const resourceSlice = createSlice({
  name: 'resources',
  initialState: {} as { resources: Maybe<Maybe<ResourceType>[]>},
  reducers: {
    setResources: (_state, action:PayloadAction<Maybe<Maybe<ResourceType>[]> | undefined>) => {
      return {
        resources: action.payload ?? []
      }
    },
    appendResource: (state, action: PayloadAction<CreateUpdateResourceMuations>) => {
      state.resources?.push(action.payload.resource ?? {} as ResourceType)
    },
    removeResource: (state, action: PayloadAction<{ resourceId: string}>) => {
      return {
        resources: state.resources ? [...state.resources?.filter(resource => resource?.id === action.payload.resourceId)] : []
      }
    }
  }
})

export const { setResources, appendResource, removeResource } = resourceSlice.actions
export default resourceSlice.reducer
export const selectResources = (state:RootState) => state.resources

type Dispatch = ReturnType<typeof useAppDispatch>

/**
 * Prepares and dispatches the return data of a resource query
 * @param {Dispatch} dispatch - a dispatch function of type useAppDispatch
 * @param {Maybe<Maybe<ResourceType>} resources - the data returned from a resource query
 */
export const dispatchResourceList = (dispatch: Dispatch, resources: Maybe<Maybe<ResourceType>[]> | undefined) => {
  dispatch(setResources(resources))
}
