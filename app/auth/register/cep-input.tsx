import { Input } from '@/components/ui/input'
import { ChangeEvent, forwardRef, useState } from 'react'

type ViaCep =
  | {
      cep: string
      logradouro: string
      complemento: string
      unidade: string
      bairro: string
      localidade: string
      uf: string
      estado: string
      regiao: string
      ibge: string
      gia: string
      ddd: string
      siafi: string
    }
  | {
      erro: string
    }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CepInput = forwardRef<HTMLInputElement, any>(
  ({ onChange, onCepFound, ...rest }, ref) => {
    const [cepInputValue, setCepInputValue] = useState<string>('')

    async function handleSearchCep(data: ChangeEvent<HTMLInputElement>) {
      const value = data.target.value.replace(/\D/g, '')
      if (value.length === 8) {
        setCepInputValue(value.replace(/(\d{5})(\d{3})/, '$1-$2'))
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`)
        const result: ViaCep = await response.json()
        console.log(result)

        if ('erro' in result) {
          console.error('Erro na busca do CEP:', result.erro)
        } else {
          // Agora o TypeScript sabe que estamos lidando com o objeto de endereço
          const { logradouro, bairro, localidade, estado, cep } = result
          const address =
            logradouro +
            ' - ' +
            bairro +
            ', ' +
            localidade +
            ' - ' +
            estado +
            ', ' +
            cep

          if (onCepFound) {
            onCepFound(address)
          }

          return address
        }
      } else {
        setCepInputValue(value)
      }

      if (onChange) {
        onChange(data)
      }
    }

    return (
      <Input
        ref={ref}
        value={cepInputValue}
        maxLength={9}
        placeholder="00000-000"
        onChange={handleSearchCep}
        {...rest}
      />
    )
  },
)

CepInput.displayName = 'CepInput'
