import { useNavigate } from 'react-router-dom'

import { Down } from '@/assets/icons/Down'
import { REGIONS } from '@/constants/const'
import { store } from '@/store/store'
import { Region } from '@/types/types'

export function Filters (): JSX.Element {
  const navigate = useNavigate()
  const filter = store((state) => state.filter)
  const setFilter = store((state) => state.setFilter)

  const handleClick = (region: Region): void => {
    document.getElementById('filter-items')?.classList.toggle('hidden')
    setFilter(region)
    if (region === REGIONS.All) {
      navigate('/')
    } else {
      navigate(`/filter/${region}`)
    }
  }
  return (
    <div id='filters' className='relative'>
      <div
        onClick={() => {
          document.getElementById('filter-items')?.classList.toggle('hidden')
        }}
        id='filter-button'
        className='border-2 border-white dark:border-dark-elements box-border w-[200px] flex items-center justify-between py-[18px] px-6 bg-white dark:bg-dark-elements rounded-md shadow-nav cursor-pointer hover:text-light-input hover:border-light-input transition-colors dark:text-white hover:dark:bg-light-input'
      >
        <span className='text-xs md:text-sm'>{filter === 'All' ? 'Filter by Region' : filter}</span>
        <Down className='size-6 transition-transform' />
      </div>
      <ul
        id='filter-items'
        className='w-[200px] bg-white dark:bg-dark-elements rounded-md shadow-nav py-4 px-1 absolute top-[100%] left-0 z-10 mt-1 hidden animate-fadeInDown'
      >
        {
          filter !== REGIONS.All &&
            <li onClick={() => handleClick(REGIONS.All)} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
              {REGIONS.All}
            </li>
        }
        <li onClick={() => handleClick(REGIONS.Africa)} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          {REGIONS.Africa}
        </li>
        <li onClick={() => handleClick(REGIONS.America)} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          {REGIONS.America}
        </li>
        <li onClick={() => handleClick(REGIONS.Asia)} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          {REGIONS.Asia}
        </li>
        <li onClick={() => handleClick(REGIONS.Europe)} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          {REGIONS.Europe}
        </li>
        <li onClick={() => handleClick(REGIONS.Oceania)} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          {REGIONS.Oceania}
        </li>
      </ul>
    </div>
  )
}
