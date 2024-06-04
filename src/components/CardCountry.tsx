import { Country } from '@/types/types'

interface Props {
  contry: Country
}

export function CardCountry ({ contry }: Props): JSX.Element {
  return (
    <article className='w-[264px] h-[336px] mx-auto rounded-lg bg-white shadow-md overflow-hidden hover:cursor-pointer hover:scale-105 transition-all duration-300 dark:bg-dark-elements'>
      <picture className=''>
        <img className='w-full h-1/2 object-cover font-nunito' src={contry.flags.svg} alt={contry.name.common} />
      </picture>
      <div className='p-6'>
        <h1 className='font-nunito text-lg text-light-text dark:text-white font-extrabold leading-[26px] mb-4'>{contry.name.common}</h1>
        <p className='font-nunito text-sm font-light mb-2 dark:text-white'>
          <span className='font-semibold'>Population:</span> {contry.population}
        </p>
        <p className='font-nunito text-sm font-light mb-2 dark:text-white'>
          <span className='font-semibold'>Region:</span> {contry.region}
        </p>
        <p className='font-nunito text-sm font-light dark:text-white'>
          <span className='font-semibold'>Capital:</span> {contry.capital[0]}
        </p>

      </div>
    </article>
  )
}
