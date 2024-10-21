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
import { Collaborator } from '@/components/pages/dashboard/collaborator'
import { Order } from '@/components/pages/dashboard/order'
import { Fetcher } from '@/lib/fetcher'
import { TOrder } from '@/types/order'
import { TCollaborator } from '@/types/collaborator'
import { CondominiumCard } from '@/components/pages/condominium/condominium-card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

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
          <Card className="mb-4">
            <CardHeader className="flex">
              <div className="flex flex-col items-center sm:flex-row">
                <div className="grid gap-2">
                  <CardTitle>Colaboradores Ativos</CardTitle>
                  <CardDescription>
                    Colaboradores trabalhando neste momento
                  </CardDescription>
                </div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="sm:ml-auto sm:w-fit"
                >
                  <Button asChild size="sm" className="w-full mt-4 gap-1">
                    <Link href="/dashboard/collaborators">
                      Ver todos
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </CardHeader>
            <CardContent className="">
              <ScrollArea className="whitespace-nowrap">
                <motion.div
                  variants={itemsCase}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col sm:grid sm:grid-cols-2 gap-6 py-3 xl:flex xl:flex-row overflow-y-hidden px-2"
                >
                  {collaborators
                    ? collaborators.map(({ active, mediaRating, id, name }) =>
                        active ? (
                          <motion.div
                            key={id}
                            variants={item}
                            whileHover={{
                              scale: 1.05,
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Collaborator
                              collaboratorId={id}
                              rating={mediaRating}
                              name={name}
                            />
                          </motion.div>
                        ) : (
                          ''
                        ),
                      )
                    : 'Nenhum Colaborador'}
                </motion.div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CardContent>
          </Card>
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
                  {orders.map(({ code, description, status, id }) => (
                    <motion.div key={id} variants={item}>
                      <Order
                        code={code}
                        description={description}
                        status={status}
                        id={id}
                      />
                    </motion.div>
                  ))}
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
