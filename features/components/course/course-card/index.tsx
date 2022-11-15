import Link from "next/link"
import type { CourseType } from '@gql/types/graphql'

interface CourseCardProps {
  course: CourseType
}
const CourseCard = ({ course }: CourseCardProps)=>{
  return (
    <Link 
      className="p-4 flex text-dark-accent hover:border-dark-accent/70 hover:dark:border-secondary/30 transition-all dark:text-secondary shadow border border-dark-accent/50 min-h-[10rem] flex-col justify-end hover:bg-secondary/5 items-baseline overflow-hidden gap-1 text-ellipsis shadow-dark-accent/20 bg-dark-accent/10 min-w-[15rem] flex-1 rounded-md" 
      href={`/user/courses/${course.id}/`}>
      <p className="overflow-hidden text-ellipsis max-w-full text-sm max-h-20">{course.description}</p>
      <h3 className="overflow-hidden text-ellipsis font-semibold text-lg max-w-full whitespace-nowrap">{course.name}</h3>
    </Link>
  )
}

export default CourseCard
