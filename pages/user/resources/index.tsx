import ListContainer from "@components/bank/list/container"
import NothingHere from "@components/bank/list/empty"
import PageLoadingRotation from "@components/bank/loading/LoadingRotation"
import ResourceCard from "@components/resources/resource-card/ResourceCard"
import { getSideBarLayout } from "@features/layouts/hooks"
import { useAppDispatch, useAppSelector } from "@features/store/hooks"
import { dispatchResourceList, selectResources } from "@features/store/slices/resourceSlice"
import { useUserResources } from "@gql/hooks/queries"
import React, { useEffect } from "react"

const Resource = ()=>{
  const { loading, data, error } = useUserResources()
  const dispatch = useAppDispatch()
  const resources = useAppSelector(selectResources).resources
  useEffect(()=>{
    if (!loading && !error){
      dispatchResourceList(dispatch, data?.resources)
    }
  },[data])

  if (loading){
    return <PageLoadingRotation />
  }
  return (
    <div className="pt-6">
    <ListContainer maxHeight='90'>
      {resources.length > 0 ?
        resources.map(resource => <ResourceCard key={resource.resource.id} resource={resource} />)
      : <NothingHere />
      }
    </ListContainer>
    </div>
  )
}

Resource.getLayout = getSideBarLayout

export default Resource
