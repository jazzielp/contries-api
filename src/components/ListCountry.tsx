import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { CardCountry } from './CardCountry'
import { useCountry } from '@/hooks/useCountry'
import { Toolbar } from '@/components/Toolbar'
import { REGIONS, URL_ALL, URL_NAME, URL_REGION } from '@/constants/const'
import { NotFound } from './NotFound'
import { Loading } from './Loading'
import { store } from '@/store/store'
import { Region } from '@/types/types'

export function ListCountry (): JSX.Element {
  const [limit, setLimit] = useState(16)
  const { region, name } = useParams()
  const setSearch = store((state) => state.setSearch)
  const setFilter = store((state) => state.setFilter)

  let url = URL_ALL
  let param = ''
  if (region !== undefined && Object.values(REGIONS).includes(region as Region)) {
    url = URL_REGION
    param = region
    setFilter(region as Region)
  } else {
    setFilter(REGIONS.All)
  }

  if (name !== undefined) {
    url = URL_NAME
    param = name
    setSearch(name)
  } else {
    setSearch('')
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
  return (
    <>
      <Toolbar />
      <main className='grid grid-cols-auto-fill-minmax gap-16 max-w-[1440px] mx-auto mb-20 px-4 md:px-10 lg:px-20'>
        {(error !== null && error !== undefined) && <NotFound />}
        {loading && <Loading />}
        {countries.length > 0 && countries?.slice(0, limit).map(country => (
          <CardCountry country={country} key={country.name.common} />
        ))}
      </main>
    </>
  )
}
