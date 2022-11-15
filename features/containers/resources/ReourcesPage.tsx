import { useAppSelector } from '@features/store/hooks'
import React from 'react'
import { selectResource } from '@store/slices/resourceDetailSlice'
import EditResource from '@components/resources/edit/EditResource'
import { validateResourceURL } from '@components/resources/validation/validateResourceURL'
import { DocumentResource } from '@components/resources/resource-item/ResourceItem'

const ReourcesPage = () => {
  const resource = useAppSelector(selectResource)
  console.log(resource.document)
  const isValidDoc = resource.document && validateResourceURL(resource.document)
  console.log(isValidDoc)
  const res = {
    document: isValidDoc
  }
  return (
    <div className='pr-3 flex flex-col gap-3'>
      {res.document && <DocumentResource href={resource.document ?? ''} />}
      <EditResource />
    </div>
)
}

export default ReourcesPage
