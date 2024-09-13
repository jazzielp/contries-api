import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface TypeDarkMode {
  darkmode: boolean
  setDarkmode: () => void
}

export const useDarkMode = create<TypeDarkMode, [['zustand/persist', TypeDarkMode]]>(persist((set) => ({
  darkmode: false,
  setDarkmode: () => set((state) => ({ darkmode: !state.darkmode }))
}),
{
  name: '__darkmode__countryapp__',
  storage: createJSONStorage(() => sessionStorage)
}
))
