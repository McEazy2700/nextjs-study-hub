import Modal from '@features/hocs/modal/Modal'
import React from 'react'
import DeleteConfirmation from './DeleteConfirmation';

interface ConfirmationProps {
  onConfirm?: React.MouseEventHandler;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  variant: 'delete' | 'exit';
}
const Confirmation = (props:ConfirmationProps) => {
  const {variant = 'delete', isOpen, setIsOpen, onConfirm } = props
  const close = ()=> setIsOpen(false)
  if (variant === 'delete'){
    return (
      <Modal open={isOpen} onClose={close}>
        <DeleteConfirmation onConfirm={onConfirm} onCancel={close}/>
      </Modal>
    )
  }
  return (
    <Modal open={isOpen} onClose={close}>
      <DeleteConfirmation />
    </Modal>
  )
}

export default Confirmation
