import { Main } from '@/components/Main'
import { CardLoading } from './CardLoading'
import { CardCountry } from './CardCountry'
import { useCountry } from '@/hooks/useCountry'

export function ListCountry (): JSX.Element {
  const { countries, loading } = useCountry()
  return (
    <Main>
      {
          loading
            ? (
              <>
                <CardLoading />
                <CardLoading />
                <CardLoading />
                <CardLoading />
              </>

              )
            : (
                countries?.slice(0, 8).map(country => (
                  <CardCountry country={country} key={country.name.common} />
                ))
              )
        }
    </Main>
  )
}
