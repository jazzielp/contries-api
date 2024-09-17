import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Region } from '@/types/types'
import { REGIONS } from '@/constants/const'

interface TypeDarkMode {
  darkmode: boolean
  search: string
  filter: Region
  setDarkmode: () => void
  setSearch: (search: string) => void
  setFilter: (filter: Region) => void
}

export const store = create<TypeDarkMode, [['zustand/persist', TypeDarkMode]]>(persist((set) => ({
  darkmode: false,
  search: '',
  filter: REGIONS.All,
  setDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
  setSearch: (search) => set(() => ({ search })),
  setFilter: (filter) => set(() => ({ filter }))
}),
{
  name: '__darkmode__countryapp__',
  storage: createJSONStorage(() => sessionStorage)
}
))
