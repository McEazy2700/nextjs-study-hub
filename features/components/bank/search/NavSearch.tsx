import React from 'react'

const NavSearch = () => {
  return (
    <div className='flex w-full max-w-lg p-1'>
      <input className='w-full px-4 bg-dark-bg/30 outline-none border border-black/30 focus:outline-3 focus:border-transparent transition-all focus:outline-blue-500 p-1 rounded' type='text' placeholder='Search anything'  />
    </div>
  )
}

export default NavSearch
