import ListContainer from "@components/bank/list/container"
import NothingHere from "@components/bank/list/empty"
import { useAppSelector } from "@features/store/hooks"
import { selectResources } from "@features/store/slices/resourceSlice"

const ResourcesList = ()=>{
  const resources = useAppSelector(selectResources).resources
  return (
    <ListContainer>
      {resources.length > 0 ?
      resources.map(resource => <div>{resource.resource.description}</div>)
      : <NothingHere />}
    </ListContainer>
  )
}

export default ResourcesList
