import React, { useState } from 'react'
import Form from "@components/bank/form/form"
import Input, { FileInput, TextArea } from "@components/bank/form/input"
import Toggle from "@components/bank/toggle/Toggle"
import SubmitButton from '@components/bank/form/button/Buttons'
import { createResourceRefs } from '@features/utils/refs/createResourceRef'
import { useCreateUpdateResource } from '@gql/hooks/mutations'

interface CreateResourceFormProps {
  courseId: string,
  close: ()=>void
}
const CreateResourceForm = ({ close, courseId }: CreateResourceFormProps)=>{
  const [isPublic, setPublic] = useState(false)
  const { createResource, loading } = useCreateUpdateResource(courseId)
  const resourceRefs = createResourceRefs()

  const resourceCreateHanlder: React.FormEventHandler = (event) => {
    event.preventDefault()
    createResource(courseId, resourceRefs, isPublic)
    close()
  }
  if (loading){
    return <div>Loading.....</div>
  }
  return (
    <Form onSubmit={resourceCreateHanlder}>
      <TextArea 
        ref={resourceRefs.descRef}
        label="Description"
        id="description"
        type='text' placeholder="What is this resource about" />
      <div className='grid grid-cols-2 gap-3 gap-y-4'>
        <FileInput 
          ref={resourceRefs.documentRef}
          labelClasses="cursor-pointer"
          id="document" type='file' placeholder="Upload file here" label="Upload Document" />
        <FileInput 
          ref={resourceRefs.imageRef}
          labelClasses="cursor-pointer"
          id="image" type='file' placeholder="Upload image files here" label="Upload Image" />
        <FileInput 
          ref={resourceRefs.audioRef}
          labelClasses="cursor-pointer"
          id="audio" type='file' placeholder="Upload audio files here" label="Upload Audio" />
        <FileInput 
          ref={resourceRefs.videoRef}
          labelClasses="cursor-pointer"
          id="video" type='file' placeholder="Upload video files here" label="Upload Video" />
      </div>
      <Input label="Link (url)"
        ref={resourceRefs.linkRef}
        id="link"
        type='url' placeholder="A url to some online resource" />
        <Toggle label='Public' setValue={setPublic}/>
      <SubmitButton>Save</SubmitButton>
    </Form>
  )
}

export default CreateResourceForm
