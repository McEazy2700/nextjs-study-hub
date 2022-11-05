import Input, { TextArea } from "@components/bank/form/input"
import SubmitButton from "@components/bank/form/button"
import Form from "@components/bank/form/form"
import { useCreateSectionRefs } from "./utils"
import React from "react"
import { useCreateSection } from "@gql/hooks/mutations"

interface FormProps {
  close: ()=>void
}
const CreateSection = ({ close }: FormProps)=> {
  const sectionRefs = useCreateSectionRefs()
  const {createSection} = useCreateSection()

  const createSectionHandler: React.FormEventHandler<HTMLFormElement> = (event)=>{
    event.preventDefault()
    createSection(sectionRefs)
    close()
  }
  return (
    <Form onSubmit={createSectionHandler}>
      <div className="flex-col flex gap-3">
        <Input
          label="Section name"
          ref={sectionRefs.nameRef}
          type='text'
          id="name"
          placeholder="300level Second Semester"/>
        <TextArea
          label="Goals (Description)"
          placeholder="My plan for this section or what I'm looking forward to..."
          rows={7}
          ref={sectionRefs.descRef}
          id='description' />
        <div className="flex justify-between gap-2">
          <Input
            ref={sectionRefs.startRef}
            label="Start date"
            id="start-date"
            type="date" />
          <Input
            ref={sectionRefs.endRef}
            label="End date"
            id="end-date"
            type="date" />
        </div>
      </div>
        <SubmitButton>Save</SubmitButton>
    </Form>
  )
}

export default CreateSection
