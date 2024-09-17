import { useEffect } from 'react'
import { Moon } from '@/assets/icons/Moon'
import { Sun } from '@/assets/icons/Sun'
import { store } from '@/store/store'

export function Header (): JSX.Element {
  const setDarkmode = store((state) => state.setDarkmode)
  const darkmode = store((state) => state.darkmode)
  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkmode])
  return (
    <header className='flex items-center justify-between px-4 md:px-10 lg:px-20 py-7 shadow-nav dark:bg-dark-elements'>
      <h1 className='font-nunito font-extrabold text-sm md:text-2xl dark:text-white'>Where in the World?</h1>
      <button onClick={setDarkmode} className='flex items-center justify-center gap-2 text-light-text hover:text-light-input dark:text-white dark:hover:text-light-input transition-colors duration-100'>
        {
          darkmode ? <Sun className='size-4 md:size-6' /> : <Moon className='size-4 md:size-6' />
        }
        <span className='font-nunito font-semibold text-sm md:text-base'>{darkmode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </header>
  )
}
