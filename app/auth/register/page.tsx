import { SecondaryButton } from '@/components/pages/auth/secondary-button'
import { VerifyCodeDialog } from '@/components/pages/auth/verify-code-dialog'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import { RegisterForm } from './register-form'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen xl:h-screen">
      <Image
        alt="Homem realizando uma entrega"
        className="hidden object-cover object-right lg:block w-1/2 2xl:w-3/4"
        height="1920"
        src="/auth/register.png"
        width="1920"
        priority
      />
      <div className="flex flex-col w-full py-20 items-center justify-between 2xl:w-1/4">
        <div className="text-center flex-1">
          <h3 className="font-bold text-lg mb-10">Cadastre-se</h3>
          <h2 className="font-bold text-4xl">CONDELIVERY</h2>
        </div>

        <div className="flex flex-col flex-1 w-full px-8 sm:px-12">
          <RegisterForm />
          <Separator className="my-6" />
          <div className="flex flex-col gap-4">
            <SecondaryButton>Google</SecondaryButton>
            <SecondaryButton>Facebook</SecondaryButton>
            <Link
              href={'/auth'}
              className="text-center flex-1 mt-10 text-blue-700"
            >
              Já possui uma conta? <span className="underline">Entrar</span>
            </Link>
          </div>
        </div>
      </div>
      <VerifyCodeDialog />
    </div>
  )
}
