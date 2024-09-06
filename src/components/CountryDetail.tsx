import { Back } from '@/assets/icons/Back'
import { Country } from '@/types/types'

interface TypeProps {
  country: Country
}

export function CountryDetail ({ country }: TypeProps): JSX.Element {
  return (
    <main className='lg:px-15 px-4 md:px-10 lg:px-20 py-10 mx-auto max-w-[1440px]'>
      <div className=''>
        <a className='flex items-center gap-3 text-sm text-light-text dark:text-white font-light bg-white dark:bg-dark-elements shadow-button py-[6px] px-[23px] w-[104px] rounded-sm font-nunito hover:bg-light-input dark:hover:bg-light-input transition-colors duration-150 ' href='/'>
          <Back />
          Back
        </a>
      </div>
      <section className='my-[64px] lg:flex justify-between items-center'>
        <picture className='mr-[120px]'>
          <img
            className='w-full rounded-md mb-[44px] lg:w-[560px] md:h-[401px] md:object-container md:object-center'
            src={country.flags.png}
            alt='country flag'
          />
        </picture>
        <div className=''>
          <h1
            className='font-nunito text-2xl font-extrabold text-light-text dark:text-white mb-4'
          >
            {country.name.common}
          </h1>
          <div className='flex flex-col md:flex-row md:justify-between gap-8'>
            <div>
              <p className='text-sm font-nunito font-light leading-8 text-light-text dark:text-white'>
                <span className='font-semibold'>Native Name: </span>{country.name.common}
              </p>
              <p className='text-sm font-nunito font-light leading-8 text-light-text dark:text-white'>
                <span className='font-semibold'>Population: </span>{country.population}
              </p>
              <p className='text-sm font-nunito font-light leading-8 text-light-text dark:text-white'>
                <span className='font-semibold'>Region: </span>{country.region}
              </p>
              <p className='text-sm font-nunito font-light leading-8 text-light-text dark:text-white'>
                <span className='font-semibold'>Sub Region: </span>{country.subregion}
              </p>
              <p className='text-sm font-nunito font-light leading-8 text-light-text dark:text-white'>
                <span className='font-semibold'>Capital: </span>{country.capital}
              </p>
            </div>
            <div>
              <p className='text-sm font-nunito font-light leading-8 text-light-text dark:text-white'>
                <span className='font-semibold'>top Level Domain: </span>
                {country.tld}
              </p>
              <p className='text-sm font-nunito font-light leading-8 text-light-text dark:text-white'>
                <span className='font-semibold'>Currencies: </span>
                {country.currencies}
              </p>
              <p className='text-sm font-nunito font-light leading-8 text-light-text dark:text-white'>
                <span className='font-semibold'>Languages: </span>
                {country.languages}
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row mt-8 lg:mt-16'>
            <p className='md:w-1/3 font-nunito font-semibold text-base dark:text-white mb-4 mr-4'>Border Countries:</p>

            <ul className='flex gap-4 w-full flex-wrap'>
              <li className='hover:scale-105 transition-transform duration-150'>
                <Link> France </Link>
              </li>
              <li className='hover:scale-105 transition-transform duration-150'>
                <Link> Germany </Link>
              </li>
              <li className='hover:scale-105 transition-transform duration-150'>
                <Link> Nether </Link>
              </li>
              <li className='hover:scale-105 transition-transform duration-150'>
                <Link> Netherlands </Link>
              </li>
              <li className='hover:scale-105 transition-transform duration-150'>
                <Link> Netherlands </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
