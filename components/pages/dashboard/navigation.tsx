'use client'

import Link from 'next/link'
import {
  ChevronDown,
  CircleUserRound,
  LogOut,
  Menu,
  Package2,
  User,
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 mb-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          prefetch
          href="/dashboard"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Condelivery</span>
        </Link>
        <Link
          prefetch
          href="/dashboard"
          className={`${pathname === '/dashboard' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
        >
          Dashboard
        </Link>
        <Link
          prefetch
          href="/dashboard/orders"
          className={`${pathname === '/dashboard/orders' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
        >
          Pedidos
        </Link>
        <Link
          prefetch
          href="/dashboard/condominium"
          className={`${pathname === '/dashboard/condominium' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
        >
          Condomínio
        </Link>
        <Link
          prefetch
          href="/dashboard/collaborators"
          className={`${pathname === '/dashboard/collaborators' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
        >
          Colaboradores
        </Link>
      </nav>
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
            <Link
              prefetch
              href="/dashboard/orders"
              className={`${pathname === '/dashboard/orders' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
            >
              Pedidos
            </Link>
            <Link
              prefetch
              href="/dashboard/condominium"
              className={`${pathname === '/dashboard/condominium' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
            >
              Condomínio
            </Link>
            <Link
              prefetch
              href="/dashboard/collaborators"
              className={`${pathname === '/dashboard/collaborators' ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
            >
              Colaboradores
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex select-none ml-auto items-center gap-2"
            >
              <User />
              <span>João Tranquilino</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="flex flex-col">
              <span>João Tranquilino</span>
              <span className="text-xs font-normal text-muted-foreground">
                joãotranquilino@gmail.com
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-muted-foreground" asChild>
              <Link href="/dashboard/settings" className={''}>
                <CircleUserRound className="mr-2 h-4 w-4" />
                Configurações
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-rose-500 dark:text-rose-400"
              asChild
            >
              <Link href={'/auth'}>
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
