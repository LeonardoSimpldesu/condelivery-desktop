import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import {
  Star,
  Globe,
  MapPin,
  BadgeInfo,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Image from 'next/image'

export function CollaboratorsDetailsModal({
  children,
  collaborator,
}: Readonly<{
  children: React.ReactNode
  collaborator: unknown
}>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="p-6 pt-8 flex gap-4 items-center bg-muted">
          <DialogTitle>Informações do colaborador</DialogTitle>

          <div className="flex flex-col items-center">
            <Image
              alt="Product image"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/avatar.png"
              width="64"
            />
            <h2 className="text-2xl font-light">{collaborator.name}</h2>
          </div>
          <div className="w-full grid grid-cols-3">
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-medium">
                {collaborator.countDeliveries}
              </p>
              <p className="text-muted-foreground">Serviços</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="flex items-center gap-2 text-2xl font-medium">
                {collaborator.mediaRating} <Star fill="true" size={16} />
              </p>
              <p className="text-muted-foreground">Avaliação</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-2xl font-medium">
                {collaborator.operatingTimeInMonths}
              </p>
              <p className="text-muted-foreground">Meses</p>
            </div>
          </div>
        </DialogHeader>
        <div className="grid gap-4 p-6 text-sm">
          <div className="flex items-center gap-4">
            <Globe size={32} strokeWidth={1} />
            <p className="">
              Fala <strong>{collaborator.languages}</strong>
            </p>
          </div>
          <Separator />
          <div className="flex items-center gap-4">
            <MapPin size={32} strokeWidth={1} />
            <p className="">
              De <strong>{collaborator.local}</strong>
            </p>
          </div>
          <Separator />
          <div className="flex items-center gap-4">
            <BadgeInfo size={32} strokeWidth={1} />
            <p className="">
              Outros serviços{' '}
              {collaborator.servicesProvided.split(';').map((value: string) => (
                <strong key={value}>{value}, </strong>
              ))}
            </p>
          </div>
          <Separator />
          <div className="">
            <h3 className="text-xl font-semibold">Destaques do colaborador</h3>
            <div className="flex gap-4 mt-4">
              {collaborator.tags.split(';').map((value: string) => (
                <Badge key={value}>{value}</Badge>
              ))}
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
        </div>
        <DialogFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
