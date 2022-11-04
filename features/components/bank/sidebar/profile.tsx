import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SideBarContextType } from "@features/layouts/with-sidebar"
import { useAppSelector } from '@features/store/hooks';
import { selectUser } from '@features/store/slices/userSlice';
import Link from 'next/link';

interface Profile {
  context: React.Context<SideBarContextType>;
}
const SideBarProfile = ({ context }: Profile)=>{
  const user = useAppSelector(selectUser)
  const barContext = React.useContext(context)

  const imageUrl = user.user.profile.imageUrl && user.user.profile.imageUrl !== '' ?
    user.user.profile.imageUrl : '/assets/images/user.png'
  return (
    <Link 
      href='/user/profile'
      className={`w-full ml-1 items-center transition-all ${!barContext.isOpen ? 'justify-center' : 'justify-start px-4'} flex gap-3 px-2`}>
      <div className='w-10 overflow-hidden aspect-square rounded-full'>
        <img className='w-full object-cover' src={imageUrl} alt={user.user.username} loading='lazy'/>
      </div>
      <AnimatePresence>
      {barContext.isOpen &&
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          exit={{ x: 50 }}
          key={Math.random()}
          className='flex flex-col'>
          <span>{user.user.username}</span>
          <span className='text-xs'>{user.user.email}</span>
        </motion.div>
      }
      </AnimatePresence>
    </Link>
  )
}

export default SideBarProfile
