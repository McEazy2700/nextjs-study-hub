import Confirmation from '@components/bank/dialogs/Confirmation'
import { DeleteButton, UpdateButton } from '@components/bank/form/button/Buttons'
import { FormFull } from '@components/bank/form/form'
import PageLoadingRotation from '@components/bank/loading/LoadingRotation'
import { useAppDispatch, useAppSelector } from '@features/store/hooks'
import { clearCurrResource, selectResource } from '@features/store/slices/resourceDetailSlice'
import { removeResource } from '@features/store/slices/resourceSlice'
import { useDeleteResource } from '@gql/hooks/mutations'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const EditResource = () => {
  const resource = useAppSelector(selectResource)
  const [delOpen, setDelOpen] = useState(false)
  const [deleteResource, {loading}] = useDeleteResource()
  const router = useRouter()
  const dispatch = useAppDispatch()

  const open = ()=>setDelOpen(true)
  const close = ()=>setDelOpen(false)

  const handleDelete = ()=> {
    deleteResource({
      variables: {
        resourceId: resource.id
      }
    })
    close()
    dispatch(removeResource({resourceId: resource.id}))
    dispatch(clearCurrResource)
    router.replace('/user/resources')
  }
  if (loading){
    return <PageLoadingRotation />
  }
  return (
    <FormFull>
      <div className='flex gap-3 flex-col md:flex-row'>
        <p className='max-h-[4ch] bg-dark-accent/20 rounded-md font-semibold items-center justify-center flex overflow-hidden text-ellipsis flex-1'>{resource.description}</p>
        <div className='flex-1 flex gap-2'>
          <UpdateButton>Update</UpdateButton>
          <DeleteButton onClick={open} className='p-2'>Delete</DeleteButton>
        </div>
      </div>
      <Confirmation 
        variant='delete'
        onConfirm={handleDelete}
        isOpen={delOpen}
        setIsOpen={setDelOpen}/>
    </FormFull>
  )
}

export default EditResource
