import { useState } from 'react'
import CreateCourse from "@components/course/create-course/form/CreateCourse"
import Modal from '@hocs/modal/Modal'
import CourseList from '@components/course/course-list'
import CreateSection from '@components/section/create-section-form'
import SectionList from '@components/section/section-list'

const CoursesPage = () => {
  const [courseCreateIsOpen, setCourseCreateIsOpen]= useState(false)
  const [sectionCreateIsOpen, setSectionCreateIsOpen]= useState(false)

  const sectionCreateOpen = ()=>setSectionCreateIsOpen(true)
  const sectionCreateClose = ()=>setSectionCreateIsOpen(false)
  const courseCreateOpen = ()=>setCourseCreateIsOpen(true)
  const courseCreateClose = ()=>setCourseCreateIsOpen(false)
  return (
  <div className='flex w-f flex-col relative pt-5'>
    <div className='flex lg:mr-5 flex-col gap-3'>
      <SectionList addItem={sectionCreateOpen} />
      <CourseList onClick={courseCreateOpen} />
      <Modal title='Create Section' onClose={sectionCreateClose} open={sectionCreateIsOpen}>
        <CreateSection close={sectionCreateClose}/>
      </Modal>
      <Modal title="Create Course" onClose={courseCreateClose} open={courseCreateIsOpen}>
        <CreateCourse close={courseCreateClose} />
      </Modal>
    </div>
  </div>
  )
}

export default CoursesPage
