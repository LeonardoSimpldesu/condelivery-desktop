import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Package,
  Package2,
  Search,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CondominiumCard } from "@/components/pages/condominium/condominium-card"


export const description = "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image."

export default function DashboardPage() {
  return (
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2"
          >
            <Tabs defaultValue="andamento">
            <CardHeader className="flex flex-col">
                <div className="flex flex-row items-center mb-2">
                    <div className="grid gap-2">
                        <CardTitle>Pedidos</CardTitle>
                        <CardDescription>
                        Seus pedidos pendentes e em andamento.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link href="/dashboard/orders">
                            Ver todos
                        <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                <TabsList className="w-fit">
                    <TabsTrigger value="andamento">Em Andamento</TabsTrigger>
                    <TabsTrigger value="pendente">Pendentes</TabsTrigger>
                </TabsList>
            </CardHeader>
            <CardContent>
            <TabsContent value="andamento" className="grid">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Pedido</TableHead>
                    <TableHead>Colaborador</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Previsão de entrega</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {Array.from({length: 5}).map((_, index) => (
                    <TableRow key={index} className="hover:bg-muted">
                        <TableCell className="hidden sm:table-cell">
                            <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="320"
                            src="/bag.png"
                            width="320"
                            />
                        </TableCell>
                        <TableCell>
                            <div className="font-medium">Pedido #1456</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                                IFood - Restaurante Sabor Caseiro
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                                liam@example.com
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="default">Confirmar Código</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                        <time dateTime="2024-09-19T14:02">19 de Setembro ás 14:02</time>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">R$499.99</TableCell>
                        <TableCell>
                            <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                <DropdownMenuItem>Confirmar código</DropdownMenuItem>
                                <DropdownMenuItem>Verificar pedido</DropdownMenuItem>
                                <DropdownMenuItem>Cancelar Pedido</DropdownMenuItem>
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
                </Table>
            </TabsContent>
            <TabsContent value="pendente">
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Pedido</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {Array.from({length: 5}).map((_, index) => (
                    <TableRow key={index} className="hover:bg-muted">
                        <TableCell className="hidden sm:table-cell">
                            <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="320"
                            src="/bag.png"
                            width="320"
                            />
                        </TableCell>
                        <TableCell>
                            <div className="font-medium">Pedido #1456</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                                IFood - Restaurante Sabor Caseiro
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline">Preparando</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">R$499.99</TableCell>
                        <TableCell>
                            <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                <DropdownMenuItem>Verificar pedido</DropdownMenuItem>
                                <DropdownMenuItem>Cancelar Pedido</DropdownMenuItem>
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
                </Table>
            </TabsContent>
            </CardContent>
            </Tabs>
            <CardFooter className="mt-auto">
                <div className="text-xs text-muted-foreground">
                  Mostrando <strong>1-10</strong> of <strong>32</strong> moradores
                </div>
            </CardFooter>
          </Card>
          <div className="flex flex-col gap-8">
            <CondominiumCard/>            
            <Card>
                <CardHeader>
                <CardTitle>Colaboradores Ativos</CardTitle>
                </CardHeader>
                    <CardContent >
                        {Array.from({length: 5}).map((_, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                <p className="text-base font-bold leading-none">
                                    Leonardo de Souza
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Há 2km de você
                                </p>
                                </div>
                                <MessageCircle className="ml-auto font-medium"/>
                            </div>
                        ))}
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
  )
}
