'use client'
import { MainButton } from '@/components/pages/auth/main-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Fetcher } from '@/lib/fetcher'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type TLoginSchema = z.infer<typeof LoginSchema>

export function LoginForm() {
  const { register, handleSubmit } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  })

  async function handleLogin(data: TLoginSchema) {
    await Fetcher('login', {
      body: JSON.stringify(data),
    })
  }

  return (
    <form className="flex flex-col flex-1" onSubmit={handleSubmit(handleLogin)}>
      <div className="mb-2">
        <Label>E-mail</Label>
        <Input type="email" {...register('email')} />
      </div>
      <div className="">
        <Label>Senha</Label>
        <Input type="password" {...register('password')} />
      </div>
      <MainButton className="w-full mt-4">Entrar</MainButton>
    </form>
  )
}
