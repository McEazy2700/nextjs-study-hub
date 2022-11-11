import Link from "next/link"
import type { CourseType } from '@gql/types/graphql'

interface CourseCardProps {
  course: CourseType
}
const CourseCard = ({ course }: CourseCardProps)=>{
  return (
    <Link className="p-4 shadow shadow-dark-accent/20 bg-secondary dark:bg-secondary/50 dark:text-secondary min-w-[15rem] flex-1 text-dark-accent rounded-md" href={`/user/courses/${course.id}/`}>
      <h3 className="text-lg font-semibold">{course.name}</h3>
      <p className="overflow-hidden text-ellipsis max-h-[2ch] max-w-full whitespace-nowrap">{course.description}</p>
    </Link>
  )
}

export default CourseCard
