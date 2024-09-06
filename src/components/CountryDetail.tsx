import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { URL_NAME } from '@/constants/const'

export function CountryDetail (): JSX.Element {
  const { name } = useParams <{ name: string }>()
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    if (typeof name === 'string' && name.trim() !== '') {
      fetch(`${URL_NAME}/${name}`)
        .then(async (resp) => {
          if (!resp.ok) {
            throw new Error('Error fetching country data')
          }
          return await resp.json()
        })
        .then((data) => {
          setCountry(data)
          setLoading(false)
        })
        .catch((err) => {
          setError(err.menssage)
          setLoading(false)
        })
    }
  }, [name])
  if (loading) return <h2>Loading...</h2>
  if (error !== undefined) return <h2>Error: {error}</h2>

  return (
    <>
      <h2>Country - {name}</h2>
      {console.log(country)}
    </>
  )
}
