import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "@store/hooks";
import { RootState } from "@store/config";
import { Maybe } from "graphql/jsutils/Maybe";
import { SectionType } from "@gql/types/graphql";

export type SectionStateType = {
  section: {
    id?: string,
    name?: string,
    description?: string,
    startDate?: any,
    endDate?: any,
  }
}

export type SectionListType = {
  sections: SectionStateType[]
}

const initialState: SectionListType = {
  sections: []
}

const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setSections: (_state, action:PayloadAction<SectionListType>) => {
      const { sections } = action.payload
      return {
        sections: sections
      }
    },
    appendSection: (state, action:PayloadAction<SectionStateType>) => {
      const { section } = action.payload
      state.sections.push({section})
    }
  }
})

export const { setSections, appendSection } = sectionSlice.actions
export default sectionSlice.reducer
export const selectSections = (state:RootState) => state.sections

type Dispatch = ReturnType<typeof useAppDispatch>

export function createSectionObj(section: Maybe<SectionType> | undefined){
  const sectionObj: SectionStateType = {
    section: {
      startDate: section?.startDate,
      endDate: section?.endDate,
      name: section?.name ?? '',
      id: section?.id,
      description: section?.description ?? ''
    }
  }
  return sectionObj.section
}

export function dispatchSectionList(dispatch: Dispatch, sections: Maybe<Maybe<SectionType>[]>){
  let sectionList: SectionListType = {
    sections:[]
  }
  sections?.forEach(section => {
    sectionList.sections.push({ section: createSectionObj(section)})
  })
  dispatch(setSections(sectionList))
}
