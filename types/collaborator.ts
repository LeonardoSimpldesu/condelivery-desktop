type TRating = {
  id: number
  ratingNote: number
  recommendations: string
  orderId: number
  collaboratorId: number
}

export type TCollaborator = {
  id: number
  name: string
  countDeliveries: number
  mediaRating: number
  countRating: number
  operatingTimeInMonths: number
  tags: string
  languages: string
  local: string
  servicesProvided: string // Atualizar a API para isto ser um array
  active: boolean
  ratings: TRating[]
}

export type TCollaboratorDetails = {
  id: number
  name: string
  countDeliveries: number
  mediaRating: number
  countRating: number
  operatingTimeInMonths: number
  tags: string
  languages: string
  local: string
  servicesProvided: string
  active: boolean
  ratings: TRating[]
}
