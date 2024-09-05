import { useParams } from 'react-router'
export function CountryDetail (): JSX.Element {
  const { name } = useParams()
  return <h2>Contry - {name}</h2>
}
