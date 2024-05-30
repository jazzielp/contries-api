import { useState } from 'react'
import { Country } from '@/types/types'

interface UseCountry {
  countries: Country[]
  loading: boolean
  setCountries: (countries: Country[]) => void
  getCountries: ({ url }: { url: string }) => Promise<void>
}

export function useCountry (): UseCountry {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)

  const getCountries = async ({ url }: { url: string }): Promise<void> => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`)
    }
    const data = await response.json()
    setCountries(data)
    setLoading(false)
  }

  return { countries, loading, setCountries, getCountries }
}
