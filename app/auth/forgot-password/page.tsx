import { MainButton } from '@/components/pages/auth/main-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function ForgotPasswordPage() {
  return (
    <div className="flex h-screen">
      <Image
        alt="Homem realizando uma entrega"
        className="flex-1 object-cover object-right"
        height="1920"
        src="/auth/forgotPassword.png"
        width="1920"
      />
      <div className="flex flex-col py-20 items-center justify-between w-1/4">
        <div className="text-center flex-1 px-24">
          <h3 className="font-bold text-lg mb-20">Esqueci minha senha</h3>
          <h2 className="font-semibold text-xl">
            Digite seu e-mail para redefinir sua senha
          </h2>
        </div>

        <div className="flex flex-col flex-1 w-full px-12">
          <div className="mb-2">
            <Label>E-mail</Label>
            <Input />
          </div>
          <p className="text-center text-sm">
            Insere o endereço de e-mail que você usou para se registrar no
            Condelivery. Você receberá um e-mail para definir uma nova senha.
          </p>
          <MainButton className="mt-40">Entrar</MainButton>
        </div>
      </div>
    </div>
  )
}
