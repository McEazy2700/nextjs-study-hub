import { useState } from 'react'
import CreateCourse from "@components/course/create-course/form"
import Modal from '@hocs/modal'

const CoursesPage = () => {
  const [isOpen, setIsOpen]= useState(false)

  const open = ()=>setIsOpen(true)
  const close = ()=>setIsOpen(false)
  return (
  <div>
    <button onClick={open}>+ add </button>
    <div>
      <Modal title="Create course" onClose={close} open={isOpen}>
        <CreateCourse />
      </Modal>
    </div>
  </div>
  )
}

export default CoursesPage
