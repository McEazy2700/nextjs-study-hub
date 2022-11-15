import React from 'react'
import { CancelButton, DeleteButton } from '../form/button/Buttons';

interface DeleteConfirmationProps {
  onConfirm?: React.MouseEventHandler;
  onCancel?: React.MouseEventHandler;
}
type delMessagesType = {img: string; message: string; confirm: string; cancel: string; alt?: string}[]
const delMessages: delMessagesType = [
  {
    img: '/assets/images/beerus.png',
    alt: 'Beerus pointing',
    message: 'Are you sure you want to delete this..?',
    confirm: 'Yes! Delete',
    cancel: 'No! Go Back'
  }
]
const DeleteConfirmation = (props: DeleteConfirmationProps) => {
  const randomMessage = delMessages[Math.floor((Math.random() * delMessages.length))]
  const { onConfirm, onCancel } = props
  return (
    <div className='dark:text-secondary flex p-5 flex-col gap-4'>
      <div className='max-w-[15rem] p-5'>
        <img className='w-full' src={randomMessage.img} alt={randomMessage.alt} />
      </div>
      <p className='text-lg font-semibold'>{randomMessage.message}</p>
      <div className='flex gap-3'>
        <CancelButton className='p-4' onClick={onCancel}>{randomMessage.cancel}</CancelButton>
        <DeleteButton className='p-4' onClick={onConfirm}>{randomMessage.confirm}</DeleteButton>
      </div>
    </div>
  )
}

export default DeleteConfirmation
