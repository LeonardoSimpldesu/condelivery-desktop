import Link from 'next/link'
import { Menu, Package2 } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const menuOptions = [
  {
    title: 'Sobre',
    id: 'sobre',
  },
  {
    title: 'Vantagens',
    id: 'vantagens',
  },
  {
    title: 'Recursos',
    id: 'recursos',
  },
  {
    title: 'Perguntas Frequentes',
    id: 'perguntas',
  },
  {
    title: 'Contato',
    id: 'contato',
  },
]

export function Navigation() {
  return (
    <header className="absolute z-50 inset-x-0 top-10 flex md:justify-center">
      <div className="hidden container w-full justify-center items-center gap-4 px-8 py-5 bg-[#E9EBF8] rounded-2xl md:flex">
        <nav className="w-full font-medium items-center justify-between gap-5 md:flex lg:gap-6">
          <div className="relative w-40 self-stretch">
            <Image
              src="/landing/logo-condelivery.png"
              alt="Logo Condelivery"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-8 w-fit">
            {menuOptions.map((option) => (
              <Link
                key={option.id}
                href={`#${option.id}`}
                className={
                  'text-muted-foreground transition-colors hover:text-foreground scroll-smooth'
                }
              >
                {option.title}
              </Link>
            ))}
          </div>
          <button className="px-6 py-2 rounded-lg text-lg text-[#E9EBF8] bg-[#F46D1F] cursor-pointer">
            Entrar
          </button>
        </nav>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Condelivery</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
