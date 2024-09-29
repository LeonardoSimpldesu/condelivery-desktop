import { CondominiumCard } from '@/components/pages/condominium/condominium-card'
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
import { ArrowUpRight, ChevronRight, MoreHorizontal, Plus, Star } from 'lucide-react'
import Image from 'next/image'
import { CondominiumDialog } from '@/components/pages/condominium/condominium-dialog'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { CollaboratorsDetailsModal } from '@/components/pages/dashboard/collaborator-details-modal'
import { CondominiumPolicyDialog } from '@/components/pages/condominium/condominium-policy-dialog'

export default function CondominiumPage() {
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
              <Button variant={'outline'} asChild size="sm" className="w-full mt-4 gap-1 sm:ml-auto sm:mr-4 sm:w-fit">
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
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <CollaboratorsDetailsModal key={index}>
                  <Card className="min-w-fit overflow-hidden flex items-center gap-4 p-4 rounded-lg hover:bg-muted cursor-pointer">
                    <CardContent className="flex items-center gap-4 py-1 px-2">
                      <Avatar className="h-9 w-9 sm:flex">
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
                        <AvatarFallback>OM</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-base font-bold leading-none">
                          Leonardo de Souza
                        </p>
                        <p className="flex items-center text-muted-foreground">
                          {renderStars(4)}
                          <span className="ml-2">{(4).toFixed(1)}</span>
                        </p>
                      </div>
                      <ChevronRight className="ml-auto font-medium hidden sm:block" />
                    </CardContent>
                  </Card>
                </CollaboratorsDetailsModal>
              )
            })}
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
                      <TableHead className='hidden sm:table-cell'>Profissão</TableHead>
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
            <dl className="grid gap-3">
              {policies.map((policy) => (
                <div key={policy.id} className="flex flex-col">
                  <dt className="text-muted-foreground">{policy.title}</dt>
                  <dd>{policy.description}</dd>
                </div>
              ))}
            </dl>
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
