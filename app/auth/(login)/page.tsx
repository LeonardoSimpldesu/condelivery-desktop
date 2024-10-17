import { SecondaryButton } from '@/components/pages/auth/secondary-button'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import { LoginForm } from './login-form'

export default function LogInPage() {
  return (
    <div className="flex min-h-screen xl:h-screen">
      <Image
        alt="Homem realizando uma entrega"
        className="hidden object-cover object-right md:block md:w-1/2 lg:w-3/4"
        height="1920"
        src="/auth/logIn.png"
        width="1920"
      />
      <div className="flex flex-col w-full py-20 items-center justify-between md:w-1/2 lg:w-1/4">
        <div className="text-center flex-1">
          <h3 className="font-bold text-lg mb-20">LOGIN</h3>
          <h2 className="font-bold text-4xl">CONDELIVERY</h2>
        </div>

        <div className="flex flex-col flex-1 w-full px-8 sm:px-12">
          <LoginForm />

          <Separator className="my-4" />
          <div className="flex flex-col gap-4">
            <SecondaryButton>Google</SecondaryButton>
            <SecondaryButton>Facebook</SecondaryButton>
          </div>

          <div className="flex flex-col flex-1 mt-10">
            <Link
              href={'auth/forgot-password'}
              className="my-6 mx-auto text-blue-700 relative inline-block group"
            >
              <span className="relative">
                Esqueci minha senha
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-blue-700 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </Link>
            <Link href={'auth/register'} className="text-center  text-blue-700">
              Não possui uma conta? <span className="underline">Cadastrar</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
