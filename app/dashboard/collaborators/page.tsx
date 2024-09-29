import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent, CardFooter,
  CardHeader,
  CardTitle
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
  ChevronRight, MapPin,
  Globe,
  BadgeInfo,
  Quote,
  MoreHorizontal
} from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function CollaboratorsPage() {
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
    <main className="container w-full mx-auto pt-4 grid grid-cols-3 gap-6">
      <Card className="col-span-2">
        <CardContent>
          <div className="flex gap-4 py-6">
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
                <TableHead>Destaque</TableHead>
                <TableHead>Tempo na Plataforma</TableHead>
                <TableHead>Endereço</TableHead>
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
                      className="aspect-square rounded-md object-cover"
                      height="50"
                      src="/avatar.png"
                      width="50"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    João Tranquilino
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {renderStars(4)}
                      <span className="ml-2">{(4).toFixed(1)}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge>Atencioso</Badge>
                  </TableCell>
                  <TableCell>2 anos</TableCell>
                  <TableCell>Rua são jose da lapa</TableCell>
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
                        <DropdownMenuItem>Detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Conversar</DropdownMenuItem>
                        <DropdownMenuItem>Contratar</DropdownMenuItem>
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
            Mostrando <strong>1-10</strong> of <strong>32</strong> moradores
          </div>
        </CardFooter>
      </Card>

      <Card className="">
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
            <div className="flex gap-4 mt-4">
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
