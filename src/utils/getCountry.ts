import { Country } from '@/types/types'
export async function getCountry ({ url }: { url: string }): Promise<Country[]> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error en la solicitud:  ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error)
    throw error
  }
}
