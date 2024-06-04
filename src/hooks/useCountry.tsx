import { useEffect, useState } from 'react'
import { Country } from '@/types/types'
import { getCountry } from '@/utils/getCountry'
import { URL_ALL } from '@/constants/const'

interface UseCountry {
  countries: Country[]
  loading: boolean
  setCountries: (countries: Country[]) => void
  setLoading: (loading: boolean) => void
}

export function useCountry (): UseCountry {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAllCountries = async (): Promise<void> => {
      setLoading(true)
      try {
        const data = await getCountry({ url: URL_ALL })
        setCountries(data)
      } catch (error) {
        console.error('Error al obtener los datos de los paises:', error)
      } finally {
        setLoading(false)
      }
    }
    getAllCountries().catch(console.error)
  }, [])

  return { countries, loading, setCountries, setLoading }
}
