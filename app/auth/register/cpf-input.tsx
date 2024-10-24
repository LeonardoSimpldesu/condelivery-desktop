import { Input } from '@/components/ui/input'
import { ChangeEvent, forwardRef, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CpfInput = forwardRef<HTMLInputElement, any>(
  ({ onChange, ...rest }, ref) => {
    const [cpfInputValue, setCpfInputValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    function handleValidateCpf(data: ChangeEvent<HTMLInputElement>) {
      // Remove caracteres não numéricos
      const value = data.target.value.replace(/[^\d]+/g, '')
      setError(false)
      if (value.length === 11) {
        setCpfInputValue(
          value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
        )

        // Verifica se todos os dígitos são iguais (casos inválidos)
        if (/^(\d)\1+$/.test(value)) {
          setError(true)
          return
        }

        // Calcula o primeiro dígito verificador
        let sum = 0
        for (let i = 0; i < 9; i++) {
          sum += parseInt(value.charAt(i)) * (10 - i)
        }
        let firstVerifier = 11 - (sum % 11)
        if (firstVerifier >= 10) firstVerifier = 0

        // Verifica se o primeiro dígito está correto
        if (firstVerifier !== parseInt(value.charAt(9))) {
          setError(true)
          return
        }

        // Calcula o segundo dígito verificador
        sum = 0
        for (let i = 0; i < 10; i++) {
          sum += parseInt(value.charAt(i)) * (11 - i)
        }
        let secondVerifier = 11 - (sum % 11)
        if (secondVerifier >= 10) secondVerifier = 0

        // Verifica se o segundo dígito está correto
        if (secondVerifier !== parseInt(value.charAt(10))) {
          setError(true)
          return
        }

        if (onChange) {
          onChange(data)
        }
      } else {
        setCpfInputValue(value)
      }
    }

    return (
      <div>
        <Input
          data-error={error ? 'error' : 'success'}
          ref={ref}
          value={cpfInputValue}
          maxLength={12}
          placeholder="000.000.000-00"
          onChange={handleValidateCpf}
          {...rest}
          className="data-[error=error]:border-red-500 data-[error=error]:text-red-500 data-[error=success]:border-input data-[error=success]:text-foreground"
        />
        <p className="text-red-500">{error ? 'cpf inválido' : ''}</p>
      </div>
    )
  },
)

CpfInput.displayName = 'CpfInput'
