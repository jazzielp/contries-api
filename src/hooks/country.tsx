import { useEffect, useState } from 'react'
import { Country } from '@/types/types'

interface UseCountry {
  countries: Country[]
  loading: boolean
}

export function useCountry (): UseCountry {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(async response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.status)
        }
        return await response.json()
      })
      .then(data => {
        setCountries(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud:', error)
      })
  }, [])
  return { countries, loading }
}
