import { CardLoading } from './CardLoading'
import { CardCountry } from './CardCountry'
import { useCountry } from '@/hooks/useCountry'
import { Toolbar } from '@/components/Toolbar'
import { URL_ALL } from '@/constants/const'

export function ListCountry (): JSX.Element {
  const { countries, loading } = useCountry({ url: URL_ALL })
  return (
    <>
      <Toolbar />
      <main className='grid grid-cols-auto-fill-minmax gap-16 max-w-[1440px] mx-auto mb-20 px-4 md:px-10 lg:px-20'>
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
      </main>
    </>
  )
}
