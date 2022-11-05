import { useQuery } from "@apollo/client"
import { GET_COURSE_BY_ID, USER_COURSES, USER_RESOURCES, USER_SECTIONS } from "@gql/requests/Queries"
import type { Query, QueryGetCourseByIdArgs, Maybe, ResourceType } from "@gql/types/graphql"

const QueryVal: Query = {}
export const useUserCourses = () => {
  return useQuery<{ courses: typeof QueryVal.userCourses }>(USER_COURSES)
}

export const useUserSections = ()=>{
  return useQuery<{ sections: typeof QueryVal.userSections }>(USER_SECTIONS)
}

export const useUserResources = ()=>{
  return useQuery<{ resources: typeof QueryVal.userResources }>(USER_RESOURCES)
}

export const useGetCourseByID = (id: string)=>{
  return useQuery<
    { course: typeof QueryVal.getCourseById },
    QueryGetCourseByIdArgs>(GET_COURSE_BY_ID, {
      variables: {
        id
      }
    })
}
