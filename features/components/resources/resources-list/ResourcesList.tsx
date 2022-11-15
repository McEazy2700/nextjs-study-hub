import ListContainer from "@components/bank/list/container"
import NothingHere from "@components/bank/list/empty"
import PageLoadingRotation from "@components/bank/loading/LoadingRotation"
import Modal from "@features/hocs/modal/Modal"
import { useAppDispatch, useAppSelector } from "@features/store/hooks"
import { dispatchResourceList, selectResources } from "@features/store/slices/resourceSlice"
import { useGetResourceByCourseID } from "@gql/hooks/queries"
import { ResourceType } from "@gql/types/graphql"
import { useEffect, useState } from "react"
import CreateResourceForm from "../create-resource/CreateResourceForm"
import ResourceCard from "../resource-card/ResourceCard"

interface ResourcesListProps {
  courseId: string,
}
const CourseResourcesList = ({ courseId }: ResourcesListProps)=>{
  const { loading, data, error } = useGetResourceByCourseID(courseId)
  const [formOpen, setFormOpen] = useState(false)
  const dispatch = useAppDispatch()
  const resources = useAppSelector(selectResources).resources
  const openForm = ()=>setFormOpen(true)
  const closeForm = ()=>setFormOpen(false)

  useEffect(()=>{
    if (!loading && !error){
      dispatchResourceList(dispatch, data?.resources)
    }
  },[data])
  if (loading){
    return <PageLoadingRotation />
  }
  return (
    <>
    <Modal open={formOpen} onClose={closeForm}>
      <CreateResourceForm close={closeForm} courseId={courseId}/>
    </Modal>
    <ListContainer addItem={openForm} title="Course resources">
      {resources && resources.length > 0 ?
      resources.map(resource => <ResourceCard key={resource?.id} resource={resource ?? {} as ResourceType}/>)
      : <NothingHere onClick={openForm}/>}
    </ListContainer>
    </>
  )
}

export default CourseResourcesList
