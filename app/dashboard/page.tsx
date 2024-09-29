import Link from 'next/link'
import { ArrowUpRight, ChevronRight, Package, Star } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { OrderDetailsModal } from '@/components/pages/dashboard/order-details-modal'
import { CollaboratorsDetailsModal } from '@/components/pages/dashboard/collaborator-details-modal'
import { Collaborator } from '@/components/pages/dashboard/collaborator'
import { Order } from '@/components/pages/dashboard/order'

const policies = [
  { id: 1, title: 'Horário de Entregas', description: 'Das 8h às 22h' },
  {
    id: 2,
    title: 'Acesso de Entregadores',
    description: 'Somente com autorização prévia',
  },
  {
    id: 3,
    title: 'Uso do Elevador de Serviço',
    description: 'Obrigatório para todas as entregas',
  },
]

export default function DashboardPage() {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))
  }
  return (
    <main className="container mx-auto grid gap-4 xl:grid-cols-3">
      <div className="xl:col-span-2">
        <Card className="mb-4">
          <CardHeader className="flex">
            <div className="flex flex-col items-center mb-2 sm:flex-row">
              <div className="grid gap-2">
                <CardTitle>Colaboradores Ativos</CardTitle>
                <CardDescription>
                  Colaboradores trabalhando neste momento
                </CardDescription>
              </div>
              <Button
                asChild
                size="sm"
                className="w-full mt-4 gap-1 sm:ml-auto sm:w-fit"
              >
                <Link href="/dashboard/collaborators">
                  Ver todos
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col sm:grid sm:grid-cols-2 gap-6 overflow-x-scroll custom-scroll xl:flex xl:flex-row">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <Collaborator key={index}></Collaborator>
              )
            })}
          </CardContent>

        </Card>
        <Card className="">
          <CardHeader className="flex">
            <div className="flex flex-col items-center mb-2 sm:flex-row">
              <div className="grid gap-2">
                <CardTitle>Pedidos de Hoje</CardTitle>
                <CardDescription>
                  Pedidos realizados no dia de hoje
                </CardDescription>
              </div>
              <Button
                asChild
                size="sm"
                className="w-full mt-4 gap-1 sm:ml-auto sm:w-fit"
              >
                <Link href="/dashboard/orders">
                  Ver todos
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            {/* começa aq */}
            <Order status='Avaliado'></Order>
            {/* acaba aq */}
          </CardContent>
        </Card>
      </div>
      <Card className="">
        <CardHeader className="flex flex-row items-start rounded-t-lg bg-muted/50 p-0 overflow-hidden">
          <Image
            alt="Product image"
            className="aspect-video object-cover"
            height="1920"
            src="/dashboard/condominio.png"
            width="1920"
          />
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="">
            <CardTitle>Residência das Flores</CardTitle>
            <CardDescription>
              Condominío com 4 blocos e 70 apartamentos
            </CardDescription>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Políticas do Condomínio</div>
            <dl className="grid gap-3">
              {policies.map((policy) => (
                <div key={policy.id} className="flex flex-col">
                  <dt className="text-muted-foreground">{policy.title}</dt>
                  <dd>{policy.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Separator className="my-4" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-3">
              <div className="font-semibold">Informações de transporte</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>João Tranquilo</span>
                <span>568 Rua Maria Efigênia</span>
                <span>São Paulo, SP 0000-00</span>
              </address>
            </div>
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Endereço de cobrança</div>
              <div className="text-muted-foreground">
                Mesmo endereço de entrega
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
