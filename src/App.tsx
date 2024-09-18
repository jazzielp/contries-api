import { Header } from '@/components/Header'
import { ListCountry } from '@/components/ListCountry'
import { Country } from '@/components/Country'
import { NotFound } from '@/components/NotFound'
import { Routes, Route } from 'react-router'
function App (): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ListCountry />} />
        <Route path='/filter/:region' element={<ListCountry />} />
        <Route path='/search/:name' element={<ListCountry />} />
        <Route path='/country/:name' element={<Country />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
