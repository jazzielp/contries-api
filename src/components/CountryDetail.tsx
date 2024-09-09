import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Back } from '@/assets/icons/Back'
import { Country, Currencies } from '@/types/types'
import { URL_CODES } from '../constants/const'

interface TypeProps {
  country: Country
}

const getCurrency = (currency: Currencies): string => {
  const currencyKey = Object.keys(currency)[0] as keyof Currencies
  const currencyName = currency[currencyKey].name
  if (currencyName !== undefined && currencyName !== null && currencyName !== '') return currencyName
  return ''
}

export function CountryDetail ({ country }: TypeProps): JSX.Element {
  const { borders } = country
  const [countriesBorder, setCountriesBorder] = useState<Country[]>()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (borders !== undefined) {
      const borderString = borders.join(',')
      fetch(`${URL_CODES}${borderString}`)
        .then(async (resp) => {
          if (!resp.ok) {
            throw new Error('Error fetching country data')
          }
          return await resp.json()
        })
        .then((data) => {
          setCountriesBorder(data)
        })
        .catch((err) => {
          setError(err.menssage)
        })
    }
  }, [borders])

  return (
    <main className='lg:px-15 px-4 md:px-10 lg:px-20 py-10 mx-auto max-w-[1440px]'>
      <div className=''>
        <Link to='/' className='flex items-center gap-3 text-sm text-light-text dark:text-white font-light bg-white dark:bg-dark-elements shadow-button py-[6px] px-[23px] w-[104px] rounded-sm font-nunito hover:bg-light-input hover:text-white dark:hover:bg-light-input transition-colors duration-150 '>
          <Back />
          Back
        </Link>
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
                {
                  getCurrency(country.currencies)
                }
              </p>
              <p className='text-sm font-nunito font-light leading-8 text-light-text dark:text-white'>
                <span className='font-semibold'>Languages: </span>
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row mt-8 lg:mt-16'>
            <p className='md:w-1/3 font-nunito font-semibold text-base dark:text-white mb-4 mr-4'>Border Countries:</p>

            {error !== undefined ? error : ''}
            <ul className='flex gap-4 w-full flex-wrap'>
              {
                  countriesBorder?.map((country) => (
                    <li key={country.cca2} className='hover:scale-105 transition-transform duration-150'>
                      <Link className='text-xs text-light-text dark:text-white font-normal bg-white shadow-nav dark:bg-dark-elements py-[6px] px-[23px] w-[104px] rounded-md font-nunito' to={`/country/${country.name.common}`}> {country.name.common} </Link>
                    </li>
                  ))
              }
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
