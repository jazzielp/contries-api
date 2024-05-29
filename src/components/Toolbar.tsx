import { Search } from '@/assets/icons/Search'
import { Filters } from '@/components/Filters'

export function Toolbar (): JSX.Element {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col items-start md:flex-row md:items-center md:justify-between gap-10  px-4 md:px-10 lg:px-20 py-12 '>
      <div className='w-full md:w-[400px] lg:w-[480px] h-14 flex items-center gap-4 px-8 bg-white dark:bg-dark-elements rounded-md shadow-nav'>
        <Search className='size-4 md:size-6 dark:text-white' />
        <input className='w-full h-full dark:bg-dark-elements  outline-none font-nunito font-light text-sm text-light-text dark:text-white' type='text' placeholder='Search for a country' />
      </div>
      <Filters />
    </div>
  )
}
