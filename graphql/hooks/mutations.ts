import React from "react"
import { useMutation } from "@apollo/client"
import { CREATE_RESOURCE, CREATE_UPDATE_COURSE, CREATE_UPDATE_SECTION, DELETE_COURSE, DELETE_RESOURCE } from "@gql/requests/Mutations"
import { 
  CourseCreateUpdateMutation,
  MutationCreateUpdateCourseArgs,
  MutationCreateUpdateSectionArgs,
  SectionCreateUpdateMutation,
  CreateUpdateResourceMuations,
  MutationCreateUpdateResourceArgs,
  CourseDeleteMutation,
  MutationDeleteCourseArgs,
  ResourceDeleteMuation,
  MutationDeleteResourceArgs,
} from "@gql/types/graphql"
import { appendCourse } from "@features/store/slices/courseSlice"
import { useAppDispatch } from "@features/store/hooks"
import { useRouter } from "next/router"
import { appendSection, createSectionObj } from "@features/store/slices/sectionSlice"
import { dispatchCourseDetail } from "@features/store/slices/courseDetailSlice"
import { appendResource } from "@features/store/slices/resourceSlice"

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

/**
* Performs create, update, and delete mutations for a course.
* It returns functions for performing course creation,
* and course update, as well ass the loading state errors, 
* and the data returned.
*/
export const useCourseMutations = ()=>{
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [create, { loading, data, error }] = useMutation<
    { course: CourseCreateUpdateMutation },
    MutationCreateUpdateCourseArgs
    >(CREATE_UPDATE_COURSE, {
      variables: {
        ...defArgs
      }
    })
  const [delCourse, { loading: dLoading, data: dData, error: dError }] = useMutation<
    { delete: CourseDeleteMutation },
    MutationDeleteCourseArgs>(DELETE_COURSE, {
    variables: {
      courseId: ''
    }
  })

  /**
  * Performs course creation
  * @param {defRefObj} refs - an object of refs to the necessary HTML input elements
  * @param {string} sectionId - the `id` of the section this course might belogn to
  * @returns {Promise}
  */
  const createCourse = async (refs: defRefObj, sectionId?: string): Promise<any> => {
    const nameVal = refs.nameRef.current.value 
    const name = nameVal && nameVal !== '' ? nameVal : null
    const descVal = refs.descRef.current.value 
    const description = descVal && descVal !== '' ? descVal : null
    const startVal = refs.startRef.current.value 
    const startDate = startVal && startVal !== '' ? startVal : null
    const endVal = refs.endRef.current.value 
    const endDate = endVal && endVal !== '' ? endVal : null

    create({
      variables: {
        name,
        description,
        startDate,
        endDate,
        sectionId: sectionId
      }
    }).then(resp => {
        if (resp.data?.course.errors){
          router.replace('/signin')
        }
        if (resp.data?.course.success){
          dispatch(appendCourse(resp.data.course))
        }
      })
  }


  /**
  * Performs course creation
  * @param {defRefObj} refs - an object of refs to the necessary HTML input elements
  * @param {string} sectionId - the `id` of the section this course might belogn to
  * @param {string} courseId - the  `id` of the course the update should be performed on
  * @returns {Promise}
  */
   const updateCourse = async (refs: defRefObj, courseId: string, sectionId?: string): Promise<any> => {
    const nameVal = refs.nameRef.current.value 
    const name = nameVal && nameVal !== '' ? nameVal : null
    const descVal = refs.descRef.current.value 
    const description = descVal && descVal !== '' ? descVal : null
    const startVal = refs.startRef.current.value 
    const startDate = startVal && startVal !== '' ? startVal : null
    const endVal = refs.endRef.current.value 
    const endDate = endVal && endVal !== '' ? endVal : null

    create({
      variables: {
        name,
        description,
        startDate,
        endDate,
        courseId: courseId,
        sectionId: sectionId
        }
      }).then(resp => {
        dispatchCourseDetail(dispatch, resp.data?.course.course)
      })
    }

  const deleteCourse = async (courseId: string) => {
    return delCourse({
      variables: {courseId}
    })
  }
  return {createCourse, updateCourse, deleteCourse, loading, data, error, dLoading, dError, dData }
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

  const createSection = (refs: defRefObj, sectionId?: string)=>{
    const nameVal = refs.nameRef.current.value 
    const name = nameVal && nameVal !== '' ? nameVal : null
    const descVal = refs.descRef.current.value 
    const description = descVal && descVal !== '' ? descVal : null
    const startVal = refs.startRef.current.value 
    const startDate = startVal && startVal !== '' ? startVal : null
    const endVal = refs.endRef.current.value 
    const endDate = endVal && endVal !== '' ? endVal : null
    create({
      variables: {
        name,
        description,
        startDate,
        endDate,
        sectionId: sectionId
      }
    }).then(res => {
        if (res.data?.section.errors){
          router.replace('/signin')
        }
        if (res.data && res.data.section.success){
          const result = res.data.section.section
          dispatch(appendSection({section: createSectionObj(result)}))
        }
      })
  }
  return { createSection, loading, data, error }
}

interface defResourceRefObj {
  descRef:  React.MutableRefObject<HTMLTextAreaElement>
  documentRef: React.MutableRefObject<HTMLInputElement>
  imageRef: React.MutableRefObject<HTMLInputElement>
  audioRef: React.MutableRefObject<HTMLInputElement>
  videoRef: React.MutableRefObject<HTMLInputElement>
  linkRef: React.MutableRefObject<HTMLInputElement>
}

const resourceDefArgs = {
  description: '',
  document: null,
  image: null,
  audio: null,
  video: null,
  link: null,
  public: null
}

/**
* Performs create and update mutation for resource
* @param {string} courseId - The `id` of the course this resource belogns to.
*/
export const useCreateUpdateResource = (courseId: string) =>{
  const dispatch = useAppDispatch()
  const [create, { loading, data, error }] = useMutation<
    { resource: CreateUpdateResourceMuations },
    MutationCreateUpdateResourceArgs>(CREATE_RESOURCE, {
      variables: {
        courseId,
        ...resourceDefArgs
      }
    })
  
  /**
   * Performs create mutation for course.
   * @param {string} courseId - The `id` for the course this resource belogns to.
   * @param {defResourceRefObj} refs - React refs bellonging to the input elements for this resource
   * @param {boolean} pub - is this resource public or not
   */
  const createResource = (courseId: string, refs: defResourceRefObj, pub:boolean) => {
    const descVal = refs.descRef.current.value 
    const description = descVal && descVal !== '' ? descVal : null
    const audioVal = refs.audioRef.current.files 
    const audio = audioVal && audioVal.length > 0 ? audioVal[0] : null
    const imageVal = refs.imageRef.current.files 
    const image = imageVal && imageVal.length > 0 ? imageVal[0] : null
    const documentVal = refs.documentRef.current.files 
    const doc = documentVal && documentVal.length > 0 ? documentVal[0] : null
    const videoVal = refs.videoRef.current.files 
    const video = videoVal && videoVal.length > 0 ? videoVal[0] : null
    const linkVal = refs.linkRef.current.value 
    const link = linkVal && linkVal !== '' ? linkVal : null

    create({
      variables: {
        courseId,
        audio,
        description,
        document: doc,
        image,
        link,
        public: pub,
        video
      }
    }).then(resp => {
        if (resp.data?.resource){
          dispatch(appendResource(resp.data.resource))
        }
      })
    .catch()
  }
  return { createResource, loading, data, error }
}

export const useDeleteResource = () => {
  return useMutation<
    { delete: ResourceDeleteMuation },
    MutationDeleteResourceArgs>(DELETE_RESOURCE)
}
