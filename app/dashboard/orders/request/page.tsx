import Image from 'next/image'
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MapPin,
  MoreHorizontal,
  MoreVertical,
  Timer,
  Truck,
} from 'lucide-react'

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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const description =
  'An pedidos dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent pedidos with a filter and export button. The main area also has a detailed view of a single pedido with pedido details, shipping information, billing information, customer information, and payment information.'

export default function RequestPage() {
  return (
    <main className="container mx-auto mt-6 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Pedidos</CardTitle>
            <CardDescription>Pedidos aguardando a entrega.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className=" w-[100px] sm:table-cell">
                    Empresa
                  </TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Tempo estimado:</TableHead>
                  <TableHead>Distância estimada:</TableHead>
                  <TableHead>Entregar em:</TableHead>
                  <TableHead>Buscar em:</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-fit"
                        height="64"
                        src="/brands/ifood-logo.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="">Kleber Miranda</TableCell>
                    <TableCell>
                      <div className="flex gap-1 items-center">
                        <Timer />
                        20 min
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1 items-center">
                        <MapPin />
                        12.4 km
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      Ilha Florianópolis
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      UFMG - Universidade Federal de Minas Gerais
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
              Mostrando <strong>1-10</strong> of <strong>32</strong> pedidos
            </div>
          </CardFooter>
        </Card>
      </div>
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Pedido -------
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Pedido ID</span>
              </Button>
            </CardTitle>
            <CardDescription>Cliente: Kleber Miranda</CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <Truck className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                Solicitar código
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Exportar</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Excluir</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <div className="font-semibold">Endereço de busca</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>João Tranquilo</span>
                <span>568 Rua Maria Efigênia</span>
                <span>São Paulo, SP 0000-00</span>
              </address>
            </div>
            <div className="grid gap-3">
              <div className="font-semibold">Endereço de entrega</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>João Tranquilo</span>
                <span>568 Rua Maria Efigênia</span>
                <span>São Paulo, SP 0000-00</span>
              </address>
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
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Atualizado <time dateTime="2024-09-19">19 de Setembro, 2024</time>
          </div>
          <Pagination className="ml-auto mr-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="sr-only">Previous Pedido</span>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span className="sr-only">Next Pedido</span>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </main>
  )
}
