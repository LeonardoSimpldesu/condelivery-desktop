'use server'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { File, ListFilter, Package } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Input } from '@/components/ui/input'
import { TOrder } from '@/types/order'

export default async function OrdersTable({ orders }: { orders: TOrder[] }) {
  async function handleRateFormSubmit(formData: FormData) {
    'use server'
    const orderId = formData.get('order')
    redirect(`orders/?order=${orderId}`)
  }

  return (
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
              <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
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
              <DropdownMenuCheckboxItem>Finalizado</DropdownMenuCheckboxItem>
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
            <CardDescription>Estes são seus pedidos recentes.</CardDescription>
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
                {orders.map(
                  ({
                    code,
                    collaborator,
                    description,
                    id,
                    status,
                    createdAt,
                  }) => {
                    const lastUpdate = format(
                      new Date(createdAt),
                      "dd/MM/yyyy 'às' HH:mm",
                      {
                        locale: ptBR,
                      },
                    )

                    return (
                      <TableRow key={id}>
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
                          <div className="font-medium">Pedido #{code}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {description}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium hidden sm:table-cell">
                          {/* {collaborator.name} */}
                          NOME PROVISÓRIO
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              status === 'EmRota'
                                ? 'bg-red-500'
                                : status === 'Finalizado'
                                  ? 'bg-green-500'
                                  : status === 'Avaliado'
                                    ? 'bg-primary'
                                    : ''
                            }
                          >
                            {status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
                          {lastUpdate}
                        </TableCell>
                        <TableCell>
                          <form action={handleRateFormSubmit}>
                            <Input
                              className="sr-only hidden"
                              name="order"
                              id="order"
                              value={id}
                              readOnly
                            />
                            <Button
                              type="submit"
                              className="ml-auto w-fit h-fit bg-primary p-2 rounded-full"
                            >
                              <Package className="text-white" />
                            </Button>
                          </form>
                        </TableCell>
                      </TableRow>
                    )
                  },
                )}
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
  )
}