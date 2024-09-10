import { useEffect, useState } from 'react'
import { Country } from '@/types/types'

interface UseCountry {
  countries: Country[]
  loading: boolean
  error: null | string
  setCountries: (countries: Country[]) => void
  setLoading: (loading: boolean) => void
}

interface TypeProps {
  url: string
  param?: string
}

export function useCountry ({ url, param }: TypeProps): UseCountry {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fullUrl = param !== null && param !== undefined ? url + param : url
  console.log('🚀 ~ useCountry ~ fullUrl:', fullUrl)

  useEffect(() => {
    setLoading(true)
    fetch('https://restcountries.com/v3.1/all')
      .then(async response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud:  ${response.status}`)
        }
        return await response.json()
      })
      .then(data => {
        setCountries(data)
        // Ahora puedes trabajar con la variable `countries`
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { countries, loading, setCountries, setLoading, error }
}
