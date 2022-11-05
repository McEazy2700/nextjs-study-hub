import React from "react"
import { useMutation } from "@apollo/client"
import { CREATE_UPDATE_COURSE, CREATE_UPDATE_SECTION } from "@gql/requests/Mutations"
import { 
  CourseCreateUpdateMutation,
  MutationCreateUpdateCourseArgs,
  MutationCreateUpdateSectionArgs,
  SectionCreateUpdateMutation
} from "@gql/types/graphql"
import { appendCourse } from "@features/store/slices/courseSlice"
import { useAppDispatch } from "@features/store/hooks"
import { createCourseObj } from "@store/slices/courseSlice"
import { useRouter } from "next/router"
import { appendSection, createSectionObj } from "@features/store/slices/sectionSlice"

interface defRefObj {
  nameRef: React.MutableRefObject<HTMLInputElement>
  descRef:  React.MutableRefObject<HTMLTextAreaElement>
  startRef: React.MutableRefObject<HTMLInputElement>
  endRef: React.MutableRefObject<HTMLInputElement>
}

const defArgs = {
  name: '',
  description: null,
  startDate: null,
  endDate: null
}

export const useCreateCourse = ()=>{
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [create, { loading, data, error }] = useMutation<
    { course: CourseCreateUpdateMutation },
    MutationCreateUpdateCourseArgs
    >(CREATE_UPDATE_COURSE, {
      variables: {
        ...defArgs
      }
    })

  if (error){
    console.log(error.message)
    router.replace('/signout')
  }
  
  const createCourse = async (refs: defRefObj, sectoinId?: string, courseId?: string) => {
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
      .catch(err => {
        console.log(err)
      })
  }
  return {createCourse, loading, data, error }
}

export const useCreateSection = ()=>{
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [create, { loading, data, error }] = useMutation<
    { section: SectionCreateUpdateMutation },
    MutationCreateUpdateSectionArgs
    >(CREATE_UPDATE_SECTION, {
    variables: {
      ...defArgs
    }
  })

  if (error){
    console.log(error.message)
    router.replace('/signout')
  }
  
  const createSection = (refs: defRefObj, sectionId?: string)=>{
    create({
      variables: {
        name: refs.nameRef.current.value,
        description: refs.descRef.current.value,
        startDate: refs.startRef.current.value,
        endDate: refs.endRef.current.value,
        sectionId: sectionId
      }
    }).then(res => {
        if (res.data && res.data.section.success){
          const result = res.data.section.section
          dispatch(appendSection({section: createSectionObj(result)}))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  return { createSection, loading, data, error }
}
