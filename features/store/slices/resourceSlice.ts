import { ResourceType } from "@gql/types/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Maybe } from "graphql/jsutils/Maybe";
import { RootState } from "../config";
import { useAppDispatch } from "../hooks";

type ResourseStateType = {
  resource: {
    audio?: string | null,
    courseId: string | null,
    creatorId?: string | null,
    description?: string | null,
    document?: string | null,
    id: string,
    image?: string | null,
    link?: string | null,
    video?: string | null
  }
}

type ResourseStateList = {
  resources: ResourseStateType[]
}

const initialState: ResourseStateList = {
  resources: []
}

const resourceSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    setResources: (_state, action:PayloadAction<ResourseStateList>) => {
      const { resources } = action.payload
      return {
        resources: resources
      }
    },
    appendResource: (state, action: PayloadAction<ResourseStateType>) => {
      const { resource } = action.payload
      state.resources.push({resource})
    }
  },
})

export const { setResources, appendResource } = resourceSlice.actions
export default resourceSlice.reducer
export const selectResources = (state:RootState) => state.resources

type Dispatch = ReturnType<typeof useAppDispatch>

export const createResourceObj = (resource: Maybe<ResourceType>)=>{
  const resourceObj: ResourseStateType = {
    resource: {
      document: resource?.document,
      audio: resource?.audio,
      id: resource?.id ?? '',
      description: resource?.description,
      courseId: resource?.course.id ?? '',
      creatorId: resource?.creator?.id,
      image: resource?.image,
      link: resource?.link,
      video: resource?.video
    }
  }
  return resourceObj
}

export const createResourceList = (resources: Maybe<Maybe<ResourceType>[]>) => {
  let resourceList: ResourseStateList = {
    resources: []
  }
  resources?.forEach(resource => {
    resourceList.resources.push(createResourceObj(resource))
  })
  return resourceList
}
export const dispatchResourceList = (dispatch: Dispatch, resources:Maybe<Maybe<ResourceType>[]>) => {
  const resourceList = createResourceList(resources)
  dispatch(setResources(resourceList))
}