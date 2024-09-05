import { Header } from '@/components/Header'
import { Toolbar } from '@/components/Toolbar'
import { ListCountry } from '@/components/ListCountry'
import { CountryDetail } from './components/CountryDetail'
import { Routes, Route } from 'react-router'
function App (): JSX.Element {
  return (
    <>
      <Header />
      <Toolbar />
      <Routes>
        <Route path='/' element={<ListCountry />} />
        <Route path='/country/:name' element={<CountryDetail />} />
      </Routes>
    </>
  )
}

export default App
