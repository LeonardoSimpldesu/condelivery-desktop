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
  adress: {
    street: string
    country: string
    neighborhood: string
    state: string
    cep: string
    number: number
  }
  blocks: {
    id: number
    name: string
    condominiumId: number
  }[]
}
