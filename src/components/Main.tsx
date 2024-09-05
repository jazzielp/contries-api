import { TypeMain } from '@/types/types'

export function Main ({ children }: TypeMain): JSX.Element {
  return (
    <main className='grid grid-cols-auto-fill-minmax gap-16 max-w-[1440px] mx-auto mb-20 px-4 md:px-10 lg:px-20'>
      {children}
    </main>
  )
}
