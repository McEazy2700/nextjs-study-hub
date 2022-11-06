import SubmitButton from "@components/bank/form/button"
import { FormFull } from "@components/bank/form/form"
import { InputPill, TextAreaPill } from "@components/bank/form/input/variants"
import SectionDropDown from "@components/course/course-section-dropdown/SectionDropDown"
import { useCreateCourseRefs } from "../create-course/form/utils"
import { useState } from "react"
import { useCreateUpdateCourse } from "@gql/hooks/mutations"
import { useAppDispatch, useAppSelector } from "@features/store/hooks"
import { dispatchCourseDetail, selectCurrCourse } from "@features/store/slices/courseDetailSlice"

interface UpdateCourseProps {
}
const CourseUpdateForm = ({}: UpdateCourseProps)=>{
  const {updateCourse, loading, data } = useCreateUpdateCourse()
  const [sectionId, setSectionId] = useState('')
  const courseRefs = useCreateCourseRefs()
  const dispatch = useAppDispatch()
  const course = useAppSelector(selectCurrCourse)

  const updateCourseHandler: React.FormEventHandler = (event)=>{
    event.preventDefault()
    updateCourse(courseRefs, sectionId, course.id ?? '').then(() => {
      dispatchCourseDetail(dispatch, data?.course.course)
    })
  }
  console.log(sectionId, data)
  if (loading){
    return <div>Loading....</div>
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
            label="Description" className="flex-col" id="description" defaultValue={course.description}/>
        </div>
        <div className="flex gap-3 flex-1 flex-col relative max-h-full">
          <SectionDropDown currSectionId={course.sectionId} getCurrSection={value => setSectionId(value)}/>
          <div
            className="flex gap-3 flex-col lg:flex-row justify-between">
            <InputPill 
              ref={courseRefs.startRef}
              label="Start date" className="max-h-[2.5rem]" type='date' id="startDate" defaultValue={course.startDate}/>
            <InputPill 
              ref={courseRefs.endRef}
              label="End date" className="max-h-[2.5rem]" type='date' id="endDate" defaultValue={course.endDate}/>
          </div>
          <SubmitButton>Save</SubmitButton>
        </div>
      </div>
   </FormFull>
  )
}

export default CourseUpdateForm
