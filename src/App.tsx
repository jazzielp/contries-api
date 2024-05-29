import { Header } from '@/components/Header'
import { Toolbar } from './components/Toolbar'
import { useCountry } from './hooks/country'
import { CardCountry } from './components/CardCountry'
function App (): JSX.Element {
  const { countries } = useCountry()
  return (
    <>
      <Header />
      <Toolbar />
      <main className='grid grid-cols-auto-fill-minmax gap-16 max-w-[1440px] mx-auto mb-20 px-4 md:px-10 lg:px-20'>
        {
          countries?.slice(0, 8).map(country => (
            <CardCountry contry={country} key={country.name.common} />
          ))
        }
      </main>
    </>
  )
}

export default App
