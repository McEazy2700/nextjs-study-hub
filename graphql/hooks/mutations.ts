import React from "react"
import { useMutation } from "@apollo/client"
import { CREATE_UPDATE_COURSE } from "@gql/requests/Mutations"
import { CourseCreateUpdateMutation, MutationCreateUpdateCourseArgs } from "@gql/types/graphql"
import { appendCourse } from "@features/store/slices/courseSlice"
import { useAppDispatch } from "@features/store/hooks"
import { createCourseObj } from "@components/course/course-list/utils"

interface refObj {
  nameRef: React.MutableRefObject<HTMLInputElement>
  descRef:  React.MutableRefObject<HTMLTextAreaElement>
  startRef: React.MutableRefObject<HTMLInputElement>
  endRef: React.MutableRefObject<HTMLInputElement>
}
export const useCreateCourse = ()=>{
  const dispatch = useAppDispatch()
  const courseArgs = {
    name: '',
    description: null,
    startDate: null,
    endDate: null
  }
  const [create, { loading, data, error }] = useMutation<
    { course: CourseCreateUpdateMutation },
    MutationCreateUpdateCourseArgs
    >(CREATE_UPDATE_COURSE, {
      variables: {
        ...courseArgs
      }
    })
  const createCourse = async (refs: refObj, sectoinId?: string, courseId?: string) => {
    create({
      variables: {
        name: refs.nameRef.current.value ?? null,
        description: refs.descRef.current.value ?? null,
        startDate: refs.startRef.current.value ?? null,
        endDate: refs.endRef.current.value ?? null,
        courseId: courseId,
        sectionId: sectoinId
      }
    }).then(resp => {
        if (resp.data?.course){
          const result = resp.data?.course.course
          dispatch(appendCourse({course: createCourseObj(result)}))
        }
      })
  }
  return {createCourse, loading, data, error }
}
