import { Down } from '@/assets/icons/Down'
export function Filters (): JSX.Element {
  return (
    <div id='filters' className='relative'>
      <div
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
        <li className='p-3 dark:text-white rounded-md cursor-pointer hover:bg-light-input transition-colors'>
          Africa
        </li>
        <li className='p-3 dark:text-white rounded-md  cursor-pointer hover:bg-light-input  transition-colors'>
          America
        </li>
        <li className='p-3 dark:text-white rounded-md  cursor-pointer hover:bg-light-input transition-colors'>
          Asia
        </li>
        <li className='p-3 dark:text-white rounded-md  cursor-pointer hover:bg-light-input transition-colors'>
          Europe
        </li>
        <li className='p-3 dark:text-white rounded-md  cursor-pointer hover:bg-light-input transition-colors'>
          Oceania
        </li>
      </ul>
    </div>
  )
}
