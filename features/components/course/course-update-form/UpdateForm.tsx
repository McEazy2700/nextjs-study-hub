import SubmitButton, { DeleteButton } from "@components/bank/form/button/Buttons"
import { FormFull } from "@components/bank/form/form"
import { InputPill, TextAreaPill } from "@components/bank/form/input/variants"
import SectionDropDown from "@components/course/course-section-dropdown/SectionDropDown"
import { useCreateCourseRefs } from "@utils/refs/createCourseRef"
import { useState } from "react"
import { useCourseMutations } from "@gql/hooks/mutations"
import { useAppDispatch, useAppSelector } from "@features/store/hooks"
import { dispatchCourseDetail, selectCurrCourse } from "@features/store/slices/courseDetailSlice"
import { useRouter } from "next/router"
import { dispatchRemoveCourse } from "@features/store/slices/courseSlice"
import PageLoadingRotation from "@components/bank/loading/LoadingRotation"
import Confirmation from "@components/bank/dialogs/Confirmation"

interface UpdateCourseProps {
}
const CourseUpdateForm = ({}: UpdateCourseProps)=>{
  const {updateCourse, deleteCourse, loading, data, dLoading } = useCourseMutations()
  const [sectionId, setSectionId] = useState('')
  const [delOpen, setDelOpen] = useState(false)
  const courseRefs = useCreateCourseRefs()
  const dispatch = useAppDispatch()
  const course = useAppSelector(selectCurrCourse)
  const router = useRouter()

  const openDel = () => setDelOpen(true)
  const closeDel = () => setDelOpen(false)

  const updateCourseHandler: React.FormEventHandler = (event)=>{
    event.preventDefault()
    updateCourse(courseRefs, course.id ?? '', sectionId).then(() => {
      dispatchCourseDetail(dispatch, data?.course.course)
    })
  }
  const deleteCourseHandler: React.MouseEventHandler = ()=>{
    closeDel()
    deleteCourse(course.id ?? '').then(resp => {
      if (resp.data?.delete.success){
        dispatchRemoveCourse(dispatch, course.id)
        router.push('/user/courses')
      }
    })
    .catch(err => {
        console.log(err)
      })
  }
  if (loading || dLoading){
    return <PageLoadingRotation />
  }

  return (
   <FormFull onSubmit={updateCourseHandler}>
      <div className="flex w-full gap-3 flex-col md:flex-row lg:max-h-[20rem]">
        <div className="flex flex-col gap-3 flex-1">
          <InputPill 
            ref={courseRefs.nameRef}
            type='text' label="Name" className="flex-col" id="name" defaultValue={course.name}/>
          <TextAreaPill
            rows={9}
            ref={courseRefs.descRef}
            label="Description" className="flex-col" id="description" defaultValue={course.description ?? ''}/>
        </div>
        <div className="flex gap-3 flex-1 flex-col relative max-h-full">
          <SectionDropDown currSectionId={course.section?.id} getCurrSection={value => setSectionId(value)}/>
          <div
            className="flex gap-3 flex-col lg:flex-row justify-between">
            <InputPill 
              ref={courseRefs.startRef}
              label="Start date" className="max-h-[2.5rem]" type='date' id="startDate" defaultValue={course.startDate}/>
            <InputPill 
              ref={courseRefs.endRef}
              label="End date" className="max-h-[2.5rem]" type='date' id="endDate" defaultValue={course.endDate}/>
          </div>
          <div className="flex gap-2">
            <SubmitButton>Save</SubmitButton>
            <DeleteButton onClick={openDel}>Delete</DeleteButton>
          </div>
        </div>
      </div>
        <Confirmation
        isOpen={delOpen}
        setIsOpen={setDelOpen}
        variant='delete'
        onConfirm={deleteCourseHandler}
        />
   </FormFull>
  )
}

export default CourseUpdateForm
