import { useQuery } from "@apollo/client"
import { USER_COURSES } from "@gql/requests/Queries"
import type { CourseType, Query } from "@gql/types/graphql"

const QueryVal: Query = {}
export const useUserCourses = () => {
  return useQuery<{ courses: typeof QueryVal.userCourses }>(USER_COURSES)
}
