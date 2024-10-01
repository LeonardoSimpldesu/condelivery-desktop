export type TCondominium = {
  id: number
  name: string
  description: string
  resident: {
    name: string
    apartment: string
    block: string
    adress: {
      street: string
      country: string
      neighborhood: string
      state: string
      cep: string
      number: number
    }
  }
  policies: {
    id: number
    title: string
    description: string
  }[]
}
