import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import Image from 'next/image'
import { CondominiumCard } from '@/components/pages/dashboard/condominium/condominium-card'
import { Fetcher } from '@/lib/fetcher'
import { TCollaborator } from '@/types/collaborator'
import { Collaborators } from '@/components/pages/dashboard/collaborators'
import * as motion from 'framer-motion/client'
import { Suspense } from 'react'

export default async function CondominiumPage() {
  const collaborators = await Fetcher<TCollaborator[]>('/get-collaborators', {
    next: {
      tags: ['get-collaborators'],
    },
  })

  return (
    <main className="container mx-auto grid gap-6 w-full lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Suspense fallback={<div>Carregando colaboradores...</div>}>
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
              description="Colaboradores trabalhando neste condomínio"
              title="Colaboradores"
              isAdmin
            />
          </motion.div>
        </Suspense>

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
            <CardHeader>
              <CardTitle>Condominío</CardTitle>
              <CardDescription>
                Estes são os blocos e apartamentos deste condomínio
              </CardDescription>
            </CardHeader>
            <Tabs defaultValue="blocoa">
              <TabsList className="ml-6">
                <TabsTrigger value="blocoa">Bloco A</TabsTrigger>
                <TabsTrigger value="blocob">Bloco B</TabsTrigger>
                <TabsTrigger value="blococ">Bloco C</TabsTrigger>
              </TabsList>
              <TabsContent value="blocoa">
                <CardContent>
                  <Table className="">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Morador</TableHead>
                        <TableHead>Apartamento</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Profissão
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Array.from({ length: 3 }).map((_, index) => (
                        <TableRow key={index}>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="50"
                              src="/avatar.png"
                              width="50"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            João Tranquilino
                          </TableCell>
                          <TableCell className="font-medium">
                            Apartamento 502
                          </TableCell>
                          <TableCell className="font-medium hidden sm:table-cell">
                            Sorveteiro
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                <DropdownMenuItem>Deletar</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Mostrando <strong>1-10</strong> of <strong>32</strong>{' '}
                    moradores
                  </div>
                </CardFooter>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>
      </div>
      <Suspense fallback={<div>Carregando detalhes do condominínio...</div>}>
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
          <CondominiumCard isAdmin />
        </motion.div>
      </Suspense>
    </main>
  )
}
