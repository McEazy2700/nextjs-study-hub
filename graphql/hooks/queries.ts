import { useQuery } from "@apollo/client"
import { USER_COURSES, USER_SECTIONS } from "@gql/requests/Queries"
import type { Query } from "@gql/types/graphql"

const QueryVal: Query = {}
export const useUserCourses = () => {
  return useQuery<{ courses: typeof QueryVal.userCourses }>(USER_COURSES)
}

export const useUserSections = ()=>{
  return useQuery<{ sections: typeof QueryVal.userSections }>(USER_SECTIONS)
}
