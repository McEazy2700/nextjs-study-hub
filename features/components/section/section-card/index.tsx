import { SectionStateType } from "@features/store/slices/sectionSlice"
import Link from "next/link"

interface SectionCardProps {
  section: SectionStateType
}

const SectionCard = ({ section }: SectionCardProps )=>{
  return (
    <Link className="p-4 shadow shadow-dark-accent/20 bg-secondary dark:bg-secondary/50 dark:text-secondary min-w-[15rem] flex-1 text-dark-accent rounded-md" href={`/user/courses/${section.section.id}`}>
      <h3 className="text-lg font-semibold">{section.section.name}</h3>
      <p className="overflow-hidden text-ellipsis max-h-[2ch] max-w-full whitespace-nowrap">{section.section.description}</p>
    </Link>
  )
}

export default SectionCard
