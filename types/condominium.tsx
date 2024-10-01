export type TCondominium = {
  id: number
  name: string
  policies: {
    id: number
    title: string
    description: string
  }[]
}
