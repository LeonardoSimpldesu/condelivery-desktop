'use client'
import Image from 'next/image'
import { Copy, CreditCard, File, ListFilter, Package, Star } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect, useState } from 'react'
import { api } from '@/api/api'

export default function OrdersPage() {
  const [order, setOrder] = useState(null)

  async function getOrderData() {
    const { data } = await api.get('/get-order')

    if (data) {
      setOrder(data)
    }
  }

  useEffect(() => {
    getOrderData()
  }, [])

  console.log(order)

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
    <main className="container mx-auto mt-6 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-3 xl:col-span-2">
        <Tabs defaultValue="semana">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="semana">Semana</TabsTrigger>
              <TabsTrigger value="mes">Mês</TabsTrigger>
              <TabsTrigger value="ano">Ano</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filtros</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>
                    Aguardando solicitação
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Em rota</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Finalizado
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Exportar</span>
              </Button>
            </div>
          </div>
          <TabsContent value="semana">
            <Card>
              <CardHeader>
                <CardTitle>Pedidos</CardTitle>
                <CardDescription>
                  Estes são seus pedidos recentes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                      </TableHead>
                      <TableHead>Pedido</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Colaborador
                      </TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden lg:table-cell">
                        Entregue/Previsão em:
                      </TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order != null
                      ? order.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="hidden sm:table-cell">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="/bag.png"
                                width="64"
                              />
                            </TableCell>
                            <TableCell>
                              <div className="font-medium">
                                Pedido #{order.code}
                              </div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                {order.description}
                              </div>
                            </TableCell>
                            <TableCell className="font-medium hidden sm:table-cell">
                              {order.collaborator.name}
                            </TableCell>
                            <TableCell>
                              <Badge
                                className={
                                  order.status === 'Em rota'
                                    ? 'bg-red-500'
                                    : order.status === 'Finalizado'
                                      ? 'bg-green-500'
                                      : order.status === 'Avaliado'
                                        ? 'bg-primary'
                                        : ''
                                }
                              >
                                {order.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden lg:table-cell">
                              {order.created_at}
                            </TableCell>
                            <TableCell>
                              <div className="ml-auto w-fit h-fit bg-primary p-2 rounded-full">
                                <Package className="text-white" />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      : ''}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Mostrando <strong>1-10</strong> of <strong>32</strong> pedidos
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="lg:col-span-3 xl:col-span-1">
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Pedido Oe31b70H
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Pedido ID</span>
                </Button>
              </CardTitle>
              <CardDescription className="flex items-center text-muted-foreground">
                Avaliação:
                <span className="ml-2">{(4).toFixed(1)}</span>
                {renderStars(4)}
              </CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <Star className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Avaliar pedido
                </span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Detalhes do Pedido</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Coca-cola x <span>2</span>
                  </span>
                  <span>R$12.00</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Pizza Gigante x <span>1</span>
                  </span>
                  <span>R$49.00</span>
                </li>
              </ul>
              <Separator className="my-2" />
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>R$299.00</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Frete</span>
                  <span>R$25.00</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Taxa</span>
                  <span>R$5.00</span>
                </li>
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">Total</span>
                  <span>R$329.00</span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid grid-cols-2 gap-4">
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
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Informações do Colaborador</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Colaborador</dt>
                  <dd>Kleber Miranda</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd>
                    <a href="mailto:">klebaograndao@gmail.com</a>
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Telefone</dt>
                  <dd>
                    <a href="tel:">+55 (31) 90000-0000</a>
                  </dd>
                </div>
              </dl>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Informações de Pagamento</div>
              <dl className="grid gap-3">
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-1 text-muted-foreground">
                    <CreditCard className="h-4 w-4" />
                    Visa
                  </dt>
                  <dd>**** **** **** 4532</dd>
                </div>
              </dl>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Atualizado <time dateTime="2024-09-19">19 de Setembro, 2024</time>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}
