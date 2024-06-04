import { Header } from '@/components/Header'
import { Toolbar } from './components/Toolbar'
import { useCountry } from './hooks/useCountry'
import { CardCountry } from './components/CardCountry'
import { CardLoading } from './components/CardLoading'
import { URL_ALL } from './constants/const'
function App (): JSX.Element {
  console.log('url', URL_ALL)
  const { countries, loading } = useCountry({ url: URL_ALL })

  return (
    <>
      <Header />
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
                  <CardCountry contry={country} key={country.name} />
                ))
              )
        }
      </main>
    </>
  )
}

export default App
