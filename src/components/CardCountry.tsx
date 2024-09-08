import { Country } from '@/types/types'
import { Link } from 'react-router-dom'

interface Props {
  country: Country
}

export function CardCountry ({ country }: Props): JSX.Element {
  return (
    <Link to={`/country/${country.name.common}`} className='w-[264px] h-[336px] mx-auto rounded-lg bg-white shadow-md overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-300 dark:bg-dark-elements'>
      <picture className=''>
        <img className='w-full h-1/2 object-cover font-nunito' src={country.flags.svg} alt={country.name.common} />
      </picture>
      <div className='p-6'>
        <h1 className='font-nunito text-lg text-light-text dark:text-white font-extrabold leading-[26px] mb-4'>{country.name.common}</h1>
        <p className='font-nunito text-sm font-light mb-2 dark:text-white'>
          <span className='font-semibold'>Population:</span> {country.population}
        </p>
        <p className='font-nunito text-sm font-light mb-2 dark:text-white'>
          <span className='font-semibold'>Region:</span> {country.region}
        </p>
        <p className='font-nunito text-sm font-light dark:text-white'>
          <span className='font-semibold'>Capital:</span> {country.capital[0]}
        </p>

      </div>
    </Link>
  )
}
