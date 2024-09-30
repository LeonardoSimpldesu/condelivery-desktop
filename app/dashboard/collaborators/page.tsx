'use client'
import { Input } from '@/components/ui/input'
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
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Star,
  Search,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Globe,
  BadgeInfo,
  Quote,
  CircleUser,
  Package,
  Plus,
} from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { api } from '@/api/api'
import { useEffect, useState } from 'react'

export default function CollaboratorsPage() {
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

  return (
    <main className="container w-full mx-auto pt-4 grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 h-fit">
        <CardHeader className="flex">
          <div className="flex flex-col items-center mb-2 sm:flex-row">
            <div className="grid gap-2">
              <CardTitle>Colaboradores Contratados</CardTitle>
              <CardDescription>
                Estes são os colaboradores que estão contratados em seu
                condomínio
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
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 pb-6">
            <Input
              placeholder="Pesquisar por nome ou endereço"
              className="flex-grow"
            />
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Pesquisar
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Avaliação</TableHead>
                <TableHead className="hidden sm:table-cell">Função</TableHead>
                <TableHead className="hidden xl:table-cell">
                  Conosco à
                </TableHead>
                <TableHead className="hidden sm:table-cell">Serviços</TableHead>
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
                          height="50"
                          src="/avatar.png"
                          width="50"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {order.collaborator.name}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1 items-center">
                          <span className="ml-2">
                            {order.collaborator.mediaRating.toFixed(1)}
                          </span>
                          <Star
                            size={16}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {order.collaborator.servicesProvided.split(';')[0]}
                      </TableCell>
                      <TableCell className="hidden xl:table-cell">
                        {order.collaborator.operatingTimeInMonths} meses
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <p className="flex items-center gap-1">
                          <span>
                            <Package size={16} />
                          </span>
                          {order.collaborator.countDeliveries}
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="ml-auto w-fit h-fit bg-primary p-2 rounded-full">
                          <CircleUser className="text-white" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                : ''}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="">
          <div className="text-xs text-muted-foreground">
            Mostrando <strong>1-10</strong> of <strong>32</strong> moradores
          </div>
        </CardFooter>
      </Card>

      <Card className="h-fit">
        <CardHeader className="flex gap-4 items-center bg-muted">
          <CardTitle>Informações do colaborador</CardTitle>

          <div className="flex flex-col items-center">
            <Image
              alt="Product image"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/avatar.png"
              width="64"
            />
            <h2 className="text-2xl font-light">Tranquilino</h2>
          </div>
          <div className="w-full grid grid-cols-3">
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-medium">745</p>
              <p className="text-muted-foreground">Serviços</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="flex items-center gap-2 text-2xl font-medium">
                4.56 <Star fill="true" size={16} />
              </p>
              <p className="text-muted-foreground">Avaliação</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-medium">24</p>
              <p className="text-muted-foreground">Meses</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 p-6 text-sm">
          <div className="flex items-center gap-4">
            <Globe size={32} strokeWidth={1} />
            <p className="">
              Fala <strong>português</strong>
            </p>
          </div>
          <Separator />
          <div className="flex items-center gap-4">
            <MapPin size={32} strokeWidth={1} />
            <p className="">
              De <strong>São Paulo</strong>
            </p>
          </div>
          <Separator />
          <div className="flex items-center gap-4">
            <BadgeInfo size={32} strokeWidth={1} />
            <p className="">
              Outros serviços <strong>sorveteiro</strong>,{' '}
              <strong>desenvolvedor</strong>, <strong>modelo</strong>
            </p>
          </div>
          <Separator />
          <div className="">
            <h3 className="text-xl font-semibold">Destaques do colaborador</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <Badge>Esforçado</Badge>
              <Badge>Pontual</Badge>
              <Badge>Simpático</Badge>
              <Badge>Ótimo papo</Badge>
            </div>
          </div>
          <Separator />
          <div className="">
            <h3 className="text-xl font-semibold">Notas de agradecimento</h3>
            <div className="flex gap-4 items-center mt-4">
              <Quote className="text-muted-foreground" />{' '}
              <p className="font-medium text-muted-foreground">
                EXCELENTE!!! Me ajudou e muito. Super recomendo!!!
              </p>
            </div>
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
