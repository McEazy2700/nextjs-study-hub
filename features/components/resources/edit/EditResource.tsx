import { DeleteButton } from '@components/bank/form/button/Buttons'
import { FormFull } from '@components/bank/form/form'
import { useAppSelector } from '@features/store/hooks'
import { selectResource } from '@features/store/slices/resourceDetailSlice'
import React from 'react'

const EditResource = () => {
  const resource = useAppSelector(selectResource)
  return (
    <FormFull>
      <div>
        <DeleteButton className='p-2'>Delete</DeleteButton>
      </div>
    </FormFull>
  )
}

export default EditResource
