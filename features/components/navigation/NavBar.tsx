import React from 'react'
import { useTheme } from 'next-themes'
import { HiOutlineMoon } from 'react-icons/hi'
import { FiSun } from 'react-icons/fi'
import NavSearch from '@components/bank/search/NavSearch'


const NavBar = () => {
  const { setTheme, theme, systemTheme } = useTheme()
  const curTheme = theme === 'system' ? systemTheme : theme
  const darkTheme = curTheme === 'dark'
  const handleSetTheme = ()=>{
    if (darkTheme){
      setTheme('light')
    }else {
      setTheme('dark')
    }
  }
  return (
    <nav className='flex font-semibold absolute items-center justify-between text-secondary top-1 left-0 rounded-md w-[98.9%] shadow shadow-dark-bg/20 bg-dark-accent/90 p-1'>
      <NavSearch />
      <button className={`p-2 dark:hover:bg-secondary dark:hover:text-dark-bg aspect-square flex items-center justify-center w-9 h-9 hover:bg-dark-accent/90 hover:text-secondary transition-all rounded-full`} onClick={handleSetTheme}>
        {darkTheme ?
        <FiSun /> :
        <HiOutlineMoon />
        }
      </button>
    </nav>
  )
}

export default NavBar
