'use client'
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
import { ArrowUpRight, MoreHorizontal, Plus } from 'lucide-react'
import Image from 'next/image'
import { CondominiumDialog } from '@/components/pages/condominium/condominium-dialog'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { CondominiumPolicyDialog } from '@/components/pages/condominium/condominium-policy-dialog'
import { useEffect, useState } from 'react'
import { api } from '@/api/api'
import { Collaborator } from '@/components/pages/dashboard/collaborator'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function CondominiumPage() {
  const [order, setOrder] = useState(null)
  const [policies, setPolicy] = useState(null)

  async function getOrderData() {
    const { data } = await api.get('/get-order')

    if (data) {
      setOrder(data)
    }
  }
  async function getPolicyData() {
    const { data } = await api.get('/get-policies')

    if (data) {
      setPolicy(data)
    }
  }

  useEffect(() => {
    getOrderData()
    getPolicyData()
  }, [])

  return (
    <main className="container mx-auto grid gap-6 w-full lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="mb-4">
          <CardHeader className="flex">
            <div className="flex flex-col items-center mb-2 sm:flex-row">
              <div className="grid gap-2">
                <CardTitle>Colaboradores</CardTitle>
                <CardDescription>
                  Colaboradores trabalhando neste condomínio
                </CardDescription>
              </div>
              <Button
                variant={'outline'}
                asChild
                size="sm"
                className="w-full mt-4 gap-1 sm:ml-auto sm:mr-4 sm:w-fit"
              >
                <Link href="/dashboard/collaborators/hire">
                  Contratar novos colaboradores
                  <Plus className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" className="w-full mt-4 gap-1 sm:w-fit">
                <Link href="/dashboard/collaborators">
                  Ver todos
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col sm:grid sm:grid-cols-2 gap-6 overflow-x-scroll custom-scroll xl:flex xl:flex-row">
            {order != null
              ? order.map((order) => {
                  return (
                    <Collaborator
                      collaborator={order.collaborator}
                      key={order.collaboratorId}
                    ></Collaborator>
                  )
                })
              : ''}
          </CardContent>
        </Card>
        <Card className="">
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
      </div>
      <div className="flex flex-col gap-4">
        <Card className="">
          <CondominiumDialog>
            <CardHeader className="flex flex-row items-start rounded-t-lg bg-muted/50 p-0 overflow-hidden cursor-pointer">
              <Image
                alt="Product image"
                className="aspect-video object-cover"
                height="1920"
                src="/dashboard/condominio.png"
                width="1920"
              />
            </CardHeader>
          </CondominiumDialog>
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
              <ScrollArea className="h-40">
                <dl className="grid gap-3">
                  {policies != null
                    ? policies.policies.map((policy) => {
                        return (
                          <div key={policy.id} className="flex flex-col">
                            <dt className="text-muted-foreground">
                              {policy.title}
                            </dt>
                            <dd>{policy.description}</dd>
                          </div>
                        )
                      })
                    : ''}
                </dl>
              </ScrollArea>
              <CondominiumPolicyDialog>
                <Button size="sm" className="w-full mt-4 gap-1">
                  Adicionar nova política
                  <Plus className="h-4 w-4" />
                </Button>
              </CondominiumPolicyDialog>
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
      </div>
    </main>
  )
}
