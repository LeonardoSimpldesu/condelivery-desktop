import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function LogInPage(){
    return (
        <div className="flex h-screen">
            <Image
                alt="Homem realizando uma entrega"
                className="flex-1 object-cover object-right"
                height="1920"
                src="/auth/logIn.png"
                width="1920"
            />
            <div className="flex flex-col py-20 items-center justify-between w-1/4">
                <div className="text-center flex-1">
                    <h3 className="font-bold text-lg mb-20">LOGIN</h3>
                    <h2 className="font-bold text-4xl">CONDELIVERY</h2>
                </div>

                <div className="flex flex-col w-full px-12">
                    <div className="">
                        <div className="mb-2">
                            <Label>CPF</Label>
                            <Input />
                        </div>
                        <div className="">
                            <Label>Senha</Label>
                            <Input />
                        </div>
                    </div>
                    <Link href={'/'} className="my-6 text-center text-blue-700"> Esqueci minha senha</Link>
                    <div className="flex flex-col gap-4">
                    <Button className="py-6">Entrar</Button>
                        <Button variant={'outline'}>Google</Button>
                        <Button variant={'outline'}>Facebook</Button>
                    </div>
                    <Link href={'/'} className="text-center flex-1 mt-20 text-blue-700"> Não possui uma conta? <span className="underline">Cadastrar</span></Link>
                </div>
            </div>
        </div>
    )
}