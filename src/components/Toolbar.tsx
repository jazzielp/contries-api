import { Search } from '@/assets/icons/Search'
import { Filters } from '@/components/Filters'
import { useNavigate } from 'react-router-dom'
import { store } from '@/store/store'
import { Clean } from '@/assets/icons/Clean'

export function Toolbar (): JSX.Element {
  const search = store((state) => state.search)
  const setSearch = store((state) => state.setSearch)

  const navigate = useNavigate()
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      navigate(`/search/${search}`)
    }
  }

  const handleClick = (): void => {
    setSearch('')
    navigate('/')
  }
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col items-start md:flex-row md:items-center md:justify-between gap-10  px-4 md:px-10 lg:px-20 py-12 '>
      <div className='w-full md:w-[400px] lg:w-[480px] h-14 flex items-center gap-4 px-8 bg-white dark:bg-dark-elements rounded-md shadow-nav'>
        <Search className='size-4 md:size-6 dark:text-white' />
        <input onChange={(event) => setSearch(event.target.value)} onKeyDown={handleKeyDown} className='w-full h-full dark:bg-dark-elements  outline-none font-nunito font-light text-sm text-light-text dark:text-white' value={search} type='text' placeholder='Search for a country' />
        <button onClick={() => handleClick()}>
          {search.length > 0 && <Clean className='size-4 md:size-6 dark:text-white hover:cursor-pointer hover:text-light-input' />}
        </button>
      </div>
      <Filters />
    </div>
  )
}
