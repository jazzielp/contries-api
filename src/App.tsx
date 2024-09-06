import { Header } from '@/components/Header'
import { ListCountry } from '@/components/ListCountry'
import { Country } from '@/components/Country'
import { ErrorPage } from '@/components/ErrorPage'
import { Routes, Route } from 'react-router'
function App (): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ListCountry />} />
        <Route path='/country/:name' element={<Country />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
