import { Down } from '@/assets/icons/Down'
import { REGIONS } from '@/constants/const'
// import { useCountry } from '@/hooks/useCountry'
import { Region } from '@/types/types'
export function Filters (): JSX.Element {
  const handleFilterByRegion = ({ region }: { region: Region }): void => {
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
        <span className='text-xs md:text-sm'>Filter by Region</span>
        <Down className='size-6 transition-transform' />
      </div>
      <ul
        id='filter-items'
        className='w-[200px] bg-white dark:bg-dark-elements rounded-md shadow-nav py-4 px-1 absolute top-[100%] left-0 z-10 mt-1 hidden animate-fadeInDown'
      >
        <li onClick={() => handleFilterByRegion({ region: REGIONS.Africa })} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          {REGIONS.Africa}
        </li>
        <li onClick={() => handleFilterByRegion({ region: REGIONS.America })} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          {REGIONS.America}
        </li>
        <li onClick={() => handleFilterByRegion({ region: REGIONS.Asia })} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          {REGIONS.Asia}
        </li>
        <li onClick={() => handleFilterByRegion({ region: REGIONS.Europe })} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          {REGIONS.Europe}
        </li>
        <li onClick={() => handleFilterByRegion({ region: REGIONS.Oceania })} className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          {REGIONS.Oceania}
        </li>
      </ul>
    </div>
  )
}
