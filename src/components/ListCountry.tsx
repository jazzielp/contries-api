import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { CardLoading } from './CardLoading'
import { CardCountry } from './CardCountry'
import { useCountry } from '@/hooks/useCountry'
import { Toolbar } from '@/components/Toolbar'
import { URL_ALL, URL_NAME, URL_REGION } from '@/constants/const'

export function ListCountry (): JSX.Element {
  const [limit, setLimit] = useState(16)
  const { region, name } = useParams()
  let url = URL_ALL
  let param = ''
  if (region !== undefined) {
    url = URL_REGION
    param = region
  }
  if (name !== undefined) {
    url = URL_NAME
    param = name
  }

  const { countries, loading, error } = useCountry({ url, param })

  const handleScroll = (): void => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
      setLimit((prevLimit) => prevLimit + 16) // Aumenta el límite cuando llegas al final
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // Limpia el evento al desmontar
  }, [loading])

  if (error !== undefined && error !== null) return <h2>Error: {error}</h2>
  return (
    <>
      <Toolbar />
      <main className='grid grid-cols-auto-fill-minmax gap-16 max-w-[1440px] mx-auto mb-20 px-4 md:px-10 lg:px-20'>
        {
          loading
            ? (
              <>
                <CardLoading />
                <CardLoading />
                <CardLoading />
                <CardLoading />
              </>

              )
            : (
                countries?.slice(0, limit).map(country => (
                  <CardCountry country={country} key={country.name.common} />
                ))
              )
        }
      </main>
    </>
  )
}
