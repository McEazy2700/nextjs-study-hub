import ListContainer from "@components/bank/list/container"
import NothingHere from "@components/bank/list/empty"
import { useAppSelector } from "@features/store/hooks"
import { selectSections } from "@features/store/slices/sectionSlice"
import SectionCard from "../section-card"

interface SectionListProps {
  addItem?: () => void
}
const SectionList = ({ addItem }: SectionListProps)=>{
  const sections = useAppSelector(selectSections)

  return (
    <ListContainer title="Sections" addItem={addItem}>
      {sections.sections.length > 0 ?
        sections.sections.map(section => <SectionCard key={section.section.id} section={section} />)
      :<NothingHere />
      }
    </ListContainer>
  )
}

export default SectionList
