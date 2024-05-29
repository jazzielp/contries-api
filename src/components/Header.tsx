import { useState } from 'react'
import { Moon } from '@/assets/icons/Moon'
import { Sun } from '@/assets/icons/Sun'

export function Header (): JSX.Element {
  const [theme, setTheme] = useState('light')
  const changeTheme = (): void => {
    document.documentElement.classList.toggle('dark')
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <header className='flex items-center justify-between px-4 md:px-10 lg:px-20 py-7 shadow-nav dark:bg-dark-elements'>
      <h1 className='font-nunito font-extrabold text-sm md:text-2xl dark:text-white'>Where in the World?</h1>
      <button onClick={changeTheme} className='flex items-center justify-center gap-2 text-light-text hover:text-light-input dark:text-white dark:hover:text-light-input transition-colors duration-100'>
        {
          theme === 'light' ? <Moon className='size-4 md:size-6' /> : <Sun className='size-4 md:size-6' />
        }
        <span className='font-nunito font-semibold text-sm md:text-base'>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </header>
  )
}
