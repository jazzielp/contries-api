import { create } from 'zustand'
import { REGIONS } from '@/constants/const'

type Region = typeof REGIONS[number]

interface State {
  filter: Region
}

export const useToolsStore = create<State>((set, get) => {
  return {
    filter
  }
})
