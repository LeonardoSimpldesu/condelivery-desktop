import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Collaborator } from '@/components/pages/dashboard/collaborator'
import { Order } from '@/components/pages/dashboard/order'
import { Fetcher } from '@/lib/fetcher'
import { TOrder } from '@/types/order'
import { TCollaborator } from '@/types/collaborator'
import { CondominiumCard } from '@/components/pages/condominium/condominium-card'
import { ScrollArea } from '@/components/ui/scroll-area'

export default async function DashboardPage() {
  const orders = await Fetcher<TOrder[]>('/get-orders', {
    next: {
      tags: ['get-orders'],
    },
  })

  const collaborators = await Fetcher<TCollaborator[]>('/get-collaborators', {
    next: {
      tags: ['get-collaborators'],
    },
  })

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
          <CardContent className="">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 pb-3 overflow-x-scroll custom-scroll xl:flex xl:flex-row">
              {collaborators
                ? collaborators.map(({ active, mediaRating, id, name }) =>
                    active ? (
                      <Collaborator
                        collaboratorId={id}
                        rating={mediaRating}
                        name={name}
                        key={id}
                      />
                    ) : (
                      ''
                    ),
                  )
                : 'Nenhum Colaborador'}
            </div>
          </CardContent>
        </Card>
        <Card>
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
          <ScrollArea className="w-full h-[25rem] pb-4">
            <CardContent className="grid sm:grid-cols-2 gap-4 ">
              {orders.map(({ code, description, status, id }) => (
                <Order
                  code={code}
                  description={description}
                  status={status}
                  key={id}
                  id={id}
                />
              ))}
            </CardContent>
          </ScrollArea>
        </Card>
      </div>
      <CondominiumCard />
    </main>
  )
}
