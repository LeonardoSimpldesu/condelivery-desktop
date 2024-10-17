export type TOrder = {
  id: number
  code: string
  createdAt: Date
  updatedAt: Date
  description: string
  status: 'EmRota' | 'Finalizado' | 'Avaliado'
  collaborator: {
    id: number
    name: string
  }
}

export type TOrderDetails = {
  id: number
  code: string
  collaboratorId: number
  createdAt: Date
  updatedAt: Date
  description: string
  status: 'EmRota' | 'Finalizado' | 'Avaliado'
  rating: number
  isEvaluated: boolean
  // products: {
  //   name: string
  //   value: number
  // }[]
  // tax: number
  // freight: number
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
  collaborator: {
    name: string
    email: string
    phone: string
  }
}
