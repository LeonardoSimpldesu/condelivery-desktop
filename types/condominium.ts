export type TCondominium = {
  id: number
  name: string
  description: string
  resident: {
    name: string
    apartment: string
    block: string
  }
  policies: {
    id: number
    title: string
    description: string
  }[]
  address: {
    city: string
    country: string
    neighborhood: string
    number: number
    state: string
    street: string
    zipCode: string
  }
  blocks: {
    id: number
    name: string
    condominiumId: number
  }[]
}
