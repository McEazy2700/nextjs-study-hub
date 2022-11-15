import { useQuery } from "@apollo/client"
import { GET_COURSE_BY_ID, GET_RESOURCE_BY_COURSE_ID, GET_RESOURCE_BY_ID, USER_COURSES, USER_RESOURCES, USER_SECTIONS } from "@gql/requests/Queries"
import type { Query, QueryGetCourseByIdArgs, Maybe, ResourceType, QueryGetResourcesByCourseIdArgs, QueryGetResourceByIdArgs } from "@gql/types/graphql"

const QueryVal: Query = {}
export const useUserCourses = () => {
  return useQuery<{ courses: typeof QueryVal.userCourses }>(USER_COURSES, { fetchPolicy: 'no-cache'})
}

export const useUserSections = ()=>{
  return useQuery<{ sections: typeof QueryVal.userSections }>(USER_SECTIONS, { fetchPolicy: 'no-cache'})
}

export const useUserResources = ()=>{
  return useQuery<{ resources: typeof QueryVal.userResources }>(USER_RESOURCES, { fetchPolicy: 'no-cache'})
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

export const useGetResourceByCourseID = (courseId: string) => {
  return useQuery<
    { resources: typeof QueryVal.getResourcesByCourseId },
    QueryGetResourcesByCourseIdArgs>(GET_RESOURCE_BY_COURSE_ID, {
      variables: {
        courseId,
      },
      fetchPolicy: 'no-cache'
    })
}

export const useGetResourceByID = (resourceId: string) => {
  return useQuery<
    { resource: typeof QueryVal.getResourceById },
    QueryGetResourceByIdArgs>(GET_RESOURCE_BY_ID, {
      variables: {
        resourceId
      }
  })
}
