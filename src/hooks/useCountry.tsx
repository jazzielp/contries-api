import { useEffect, useState } from 'react'
import { Country } from '@/types/types'

interface UseCountry {
  countries: Country[]
  loading: boolean
  error: null | string | number
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
  const [error, setError] = useState<string | null | number>(null)

  const fullUrl = param !== null && param !== undefined ? url + param : url

  useEffect(() => {
    setLoading(true)
    fetch(fullUrl)
      .then(async response => {
        if (!response.ok) {
          setError(response.status)
        } else {
          setError(null)
        }
        return await response.json()
      })
      .then(data => {
        setCountries(data)
        // Ahora puedes trabajar con la variable `countries`
      })
      .catch(error => {
        setError(error.menssage)
        console.log(error.menssage)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url, param])

  return { countries, loading, setCountries, setLoading, error }
}
