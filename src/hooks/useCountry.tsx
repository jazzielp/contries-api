import { useEffect, useState } from 'react'
import { CountryMap } from '@/types/types'

interface UseCountry {
  countries: CountryMap[]
  loading: boolean
  setCountries: (countries: CountryMap[]) => void
  setLoading: (loading: boolean) => void
}

export function useCountry ({ url }: { url: string }): UseCountry {
  console.log('url', url)
  const [countries, setCountries] = useState<CountryMap[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://restcountries.com/v3.1/all')
      .then(async (response) => response.json())
      .then((data) => {
        setCountries(data)
        setLoading(false)
      })
  }, [])

  return { countries, loading, setCountries, setLoading }
}
