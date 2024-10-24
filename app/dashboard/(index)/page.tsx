import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import * as motion from 'framer-motion/client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Order } from '@/components/pages/dashboard/order'
import { Fetcher } from '@/lib/fetcher'
import { TOrder } from '@/types/order'
import { TCollaborator } from '@/types/collaborator'
import { CondominiumCard } from '@/components/pages/dashboard/condominium/condominium-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Collaborators } from '@/components/pages/dashboard/collaborators'

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

  // FRAMER MOTION
  const itemsCase = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  let orderComponent

  if (!orders || !Array.isArray(orders)) {
    orderComponent = <div className="">Nenhum pedido encontrado</div>
  } else {
    orderComponent = orders.map(({ code, description, status, id }) => (
      <motion.div key={id} variants={item}>
        <Order code={code} description={description} status={status} id={id} />
      </motion.div>
    ))
  }

  return (
    <main className="container mx-auto grid gap-4 xl:grid-cols-3">
      <div className="xl:col-span-2">
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <Collaborators
            collaborators={collaborators}
            title="Colaboradores Ativos"
            description="Colaboradores trabalhando neste momento"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5 },
          }}
        >
          <Card>
            <CardHeader className="flex">
              <div className="flex flex-col items-center mb-2 sm:flex-row">
                <div className="grid gap-2">
                  <CardTitle>Pedidos de Hoje</CardTitle>
                  <CardDescription>
                    Pedidos realizados no dia de hoje
                  </CardDescription>
                </div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="sm:ml-auto sm:w-fit"
                >
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
                </motion.div>
              </div>
            </CardHeader>
            <ScrollArea className="w-full h-[25rem] pb-4">
              <CardContent>
                <motion.div
                  variants={itemsCase}
                  initial="hidden"
                  animate="visible"
                  className="grid sm:grid-cols-2 gap-4 "
                >
                  {orderComponent}
                </motion.div>
              </CardContent>
            </ScrollArea>
          </Card>
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.75 },
        }}
      >
        <CondominiumCard />
      </motion.div>
    </main>
  )
}
