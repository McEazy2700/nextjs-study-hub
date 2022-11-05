import SubmitButton from "@components/bank/form/button"
import Form from "@components/bank/form/form"
import Input, { TextArea } from "@components/bank/form/input"
import { useCreateCourse } from "@gql/hooks/mutations"
import React from "react"
import { useCreateCourseRefs } from "./utils"

interface FormProps {
  close: ()=>void
}

const CreateCourse = ({close}:FormProps)=>{
  const courseRefs = useCreateCourseRefs()
  const { createCourse, loading } = useCreateCourse()

  const createCourseHandler: React.FormEventHandler = (event) => {
    event.preventDefault()
    createCourse(courseRefs)
    close()
  }

  if (loading){
    return <div>Loading...</div>
  }
  return (
    <Form onSubmit={createCourseHandler}>
      <div className="flex-col flex gap-3">
        <Input
          label="Course name"
          ref={courseRefs.nameRef}
          type='text'
          id="name"
          placeholder="Gel 321 (Metamorphic petrology)"/>
        <TextArea
          label="Description"
          placeholder="The study of metamorphic rocks..."
          rows={7}
          ref={courseRefs.descRef}
          id='description' />
        <div className="flex justify-between gap-2">
          <Input
            ref={courseRefs.startRef}
            label="Start date"
            id="start-date"
            type="date" />
          <Input
            ref={courseRefs.endRef}
            label="End date"
            id="end-date"
            type="date" />
        </div>
      </div>
        <SubmitButton>Save</SubmitButton>
    </Form>
  )
}

export default CreateCourse
