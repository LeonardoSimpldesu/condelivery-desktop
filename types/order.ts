export type TOrder = {
  id: number
  code: string
  collaboratorId: number
  description: string
  status: 'Em rota' | 'Finalizado' | 'Avaliado'
}

export type TOrderDetails = {
  id: number
  code: string
  collaboratorId: number
  createdAt: Date
  updatedAt: Date
  description: string
  status: 'Em rota' | 'Finalizado' | 'Avaliado'
  rating: number
  isEvaluated: boolean
  // products: {
  //   name: string
  //   value: number
  // }[]
  tax: number
  freight: number
  resident: {
    name: string
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
