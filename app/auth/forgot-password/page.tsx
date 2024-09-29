import { MainButton } from '@/components/pages/auth/main-button'
import { SecondaryButton } from '@/components/pages/auth/secondary-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen xl:h-screen">
      <Image
        alt="Homem realizando uma entrega"
        className="hidden object-cover object-right md:block md:w-1/2 xl:w-3/4"
        height="1920"
        src="/auth/forgotPassword.png"
        width="1920"
      />
      <div className="flex flex-col w-full py-20 items-center justify-between md:w-1/2 xl:w-1/4">
        <div className="text-center px-8 lg:px-24 xl:p-12">
          <h3 className="font-bold text-lg mb-20">Esqueci minha senha</h3>
          <h2 className="font-semibold text-xl">
            Digite seu e-mail para redefinir sua senha
          </h2>
        </div>

        <div className="flex flex-col flex-1 w-full px-8 sm:px-12 mt-28">
          <div className="mb-4">
            <Label>E-mail</Label>
            <Input />
          </div>
          <p className="text-center text-sm">
            Insere o endereço de e-mail que você usou para se registrar no
            Condelivery. Você receberá um e-mail para definir uma nova senha.
          </p>
          <MainButton className='my-auto'>Entrar</MainButton>
          <Link
            href={'/auth'}
            className="text-center mt-auto text-blue-700"
          >
            Já possui uma conta? <span className="underline">Entrar</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
