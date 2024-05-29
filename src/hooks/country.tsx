import { useEffect, useState } from 'react'
import { Country } from '@/types/types'

interface UseCountry {
  countries: Country[]
}

export function useCountry (): UseCountry {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(async response => {
      // Verificar si la respuesta es exitosa
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.status)
        }
        // Convertir la respuesta a JSON
        return await response.json()
      })
      .then(data => {
      // Aquí puedes trabajar con los datos recibidos
        setCountries(data)
      })
      .catch(error => {
      // Manejar errores
        console.error('Hubo un problema con la solicitud:', error)
      })
  }, [])
  return { countries }
}
