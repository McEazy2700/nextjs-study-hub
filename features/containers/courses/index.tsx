import { useState } from 'react'
import CreateCourse from "@components/course/create-course/form"
import Modal from '@hocs/modal'
import CourseList from '@components/course/course-list'

const CoursesPage = () => {
  const [isOpen, setIsOpen]= useState(false)

  const open = ()=>setIsOpen(true)
  const close = ()=>setIsOpen(false)
  return (
  <div className='flex w-f flex-col relative'>
    <div>
      <CourseList onClick={open} />
      <Modal title="Create course" onClose={close} open={isOpen}>
        <CreateCourse close={close} />
      </Modal>
    </div>
  </div>
  )
}

export default CoursesPage
