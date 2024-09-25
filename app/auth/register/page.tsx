import { MainButton } from '@/components/pages/auth/main-button'
import { SecondaryButton } from '@/components/pages/auth/secondary-button'
import { VerifyCodeDialog } from '@/components/pages/auth/verify-code-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="flex h-screen">
      <Image
        alt="Homem realizando uma entrega"
        className="hidden flex-1 object-cover object-right lg:block"
        height="1920"
        src="/auth/register.png"
        width="1920"
      />
      <div className="flex flex-col py-20 items-center justify-between w-1/4">
        <div className="text-center flex-1">
          <h3 className="font-bold text-lg mb-10">Cadastre-se</h3>
          <h2 className="font-bold text-4xl">CONDELIVERY</h2>
        </div>

        <div className="flex flex-col w-full px-12">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="">
              <Label>Nome</Label>
              <Input />
            </div>
            <div className="">
              <Label>Sobrenome</Label>
              <Input />
            </div>
            <div className="col-span-2">
              <Label>Email</Label>
              <Input />
            </div>
            <div className="">
              <Label>CEP</Label>
              <Input />
            </div>
            <div className="">
              <Label>CPF</Label>
              <Input />
            </div>
            <div className="col-span-2">
              <Label>Endereço</Label>
              <Input />
            </div>
            <div className="">
              <Label>Senha</Label>
              <Input />
            </div>
            <div className="">
              <Label>Confirme senha</Label>
              <Input />
            </div>
          </div>
          <MainButton>Cadastrar</MainButton>
          <Separator className="my-6" />
          <div className="flex flex-col gap-4">
            <SecondaryButton>Google</SecondaryButton>
            <SecondaryButton>Facebook</SecondaryButton>
            <Link
              href={'auth/forgot-password'}
              className="text-center flex-1 mt-10 text-blue-700"
            >
              Já possui uma conta? <span className="underline">Entre aqui</span>
            </Link>
          </div>
        </div>
      </div>
      <VerifyCodeDialog />
    </div>
  )
}
