import { useAppSelector } from '@features/store/hooks'
import React from 'react'
import { selectResource } from '@store/slices/resourceDetailSlice'
import Reader from '@components/resources/resource-pdf-reader/Reader'
import EditResource from '@components/resources/edit/EditResource'

const ReourcesPage = () => {
  const resource = useAppSelector(selectResource)
  return (
    <div>
      <EditResource />
      <Reader href={resource.document ?? ''} />
    </div>
)
}

export default ReourcesPage
