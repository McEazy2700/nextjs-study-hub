import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { Dialog } from '@headlessui/react'

interface ModType {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  title?: string
}

const MyModal = ({ title, open, children, onClose }:ModType)=>{
  return (
    <AnimatePresence>
      {open &&
      <Dialog
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={Math.random()}
        as={motion.div}
        onClose={onClose}
        className='relative z-50'
        // className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-transparent '
        open={open}>      
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
                <motion.div 
                  initial={{ z: -10 }}
                  animate={{ z: 0 }}
                  exit={{ z: -10 }}
                  key={Math.random()}
                  className="fixed inset-0 flex items-center justify-center p-4"
                  // className='flex dark:text-white flex-col items-center justify-center'
                >
                  <Dialog.Panel className='bg-white dark:bg-dark-bg p-2 rounded-md shadow-lg shadow-dark-accent'>
                    <Dialog.Title className='flex justify-start w-full dark:text-white font-semibold text-xl'>
                      {title}
                    </Dialog.Title>
                    {children}
                    </Dialog.Panel>
                </motion.div>
            </div>
          </div>
      </Dialog>}
    </AnimatePresence>
  )
}

export default MyModal
