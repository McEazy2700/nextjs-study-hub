import DropDown, { CurrentValType, DropContextType } from "@components/bank/dropdown/DropDown"
import DropDownItem from "@components/bank/dropdown/DropDownItem"
import { useAppSelector } from "@features/store/hooks"
import { selectSections } from "@features/store/slices/sectionSlice"
import React, { useContext, useEffect, useState } from "react"

interface SectionDropDownProps {
  currSectionId?: string,
  getCurrSection?: (value: string)=>void
}
const SectionDropDown = ({ getCurrSection, currSectionId }: SectionDropDownProps)=>{
  const [open, setOpen] = useState(true)
  const [current, setCurrent] = useState<CurrentValType>({label: '', value: ''})
  const defContextVal = { open, setOpen, current, setCurrent }
  const SectionDropDownContext = React.createContext<DropContextType>(defContextVal)
  const sections = useAppSelector(selectSections)
  const context = useContext(SectionDropDownContext)

  useEffect(()=>{
    const currSection = sections.sections.find(target => target.section.id === currSectionId)
    if (currSection) setCurrent({value:currSection.section.id, label: currSection.section.name})
  },[])

  useEffect(()=>{
    if (context.current && getCurrSection){
      getCurrSection(context.current.value)
    }
  },[context.current])

  return (
    <DropDown placeholder="Section" context={SectionDropDownContext} value={defContextVal}>
      {
      sections.sections.map(section => <DropDownItem 
        key={section.section.id} 
        value={section.section.id ?? ''}
        label={section.section.name ?? ''}
        context={SectionDropDownContext} />)
    }
    </DropDown>
  )
}

export default SectionDropDown
