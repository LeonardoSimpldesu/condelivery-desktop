'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { MainButton } from '@/components/pages/auth/main-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CepInput } from './cep-input'
import { CpfInput } from './cpf-input'
import { Fetcher } from '@/lib/fetcher'

const RegisterSchema = z.object({
  name: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  cell: z.string(),
  cep: z.string(),
  cpf: z.string(),
  number: z.number(),
  complement: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  address: z.string(),
})

type TRegisterSchema = z.infer<typeof RegisterSchema>

export function RegisterForm() {
  const { register, handleSubmit, setValue } = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
  })

  async function handleRegister(data: TRegisterSchema) {
    await Fetcher('create-resident', {
      body: JSON.stringify(data),
    })
  }

  return (
    <form
      className="flex flex-col flex-1"
      onSubmit={handleSubmit(handleRegister)}
    >
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 mb-4">
        <div className="">
          <Label>Nome</Label>
          <Input placeholder="ex: João" {...register('name')} />
        </div>
        <div className="">
          <Label>Sobrenome</Label>
          <Input placeholder="ex: Tranquilino" {...register('lastName')} />
        </div>
        <div className="col-span-2">
          <Label>Email</Label>
          <Input
            placeholder="example@gmail.com"
            type="email"
            {...register('email')}
          />
        </div>
        <div className="col-span-2">
          <Label>Telefone</Label>
          <Input placeholder="(31) 98378-1618" {...register('cell')} />
        </div>
        <div className="">
          <Label>CPF</Label>
          <CpfInput
            {...register('cpf', {
              onChange: (e) => e.target.value,
            })}
          />
        </div>
        <div className="">
          <Label>CEP</Label>
          <CepInput
            onCepFound={(e: string) => setValue('address', e)}
            {...register('cep', {
              onChange: (e) => e.target.value,
            })}
          />
        </div>
        <div className="col-span-2">
          <Label>Endereço</Label>
          <Input
            disabled
            className="disabled:opacity-100 disabled:bg-gray-100"
            {...register('address')}
          />
        </div>
        <div className="">
          <Label>Número</Label>
          <Input placeholder="123" type="number" {...register('number')} />
        </div>
        <div className="">
          <Label>Complemento</Label>
          <Input placeholder="Apartamento 100" {...register('complement')} />
        </div>
        <div className="">
          <Label>Senha</Label>
          <Input
            placeholder="**********"
            type="password"
            {...register('password')}
          />
        </div>
        <div className="">
          <Label>Confirme senha</Label>
          <Input
            placeholder="**********"
            type="password"
            {...register('confirmPassword')}
          />
        </div>
      </div>
      <MainButton>Cadastrar</MainButton>
    </form>
  )
}
