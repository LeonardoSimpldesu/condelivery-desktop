'use server'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Copy, CreditCard, Star } from 'lucide-react'
import { TOrderDetails } from '@/types/order'
import { Fetcher } from '@/lib/fetcher'
import { Rate } from '../rate'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type OrderDetailsProps = {
  orderId: number
}

export async function OrderDetails({ orderId }: OrderDetailsProps) {
  const { code, resident, rating, collaborator, updatedAt, status } =
    await Fetcher<TOrderDetails>(`/get-order-detail/${orderId}`, {
      next: {
        tags: ['get-orders-details'],
      },
    })

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

  const lastUpdate = format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm", {
    locale: ptBR,
  })

  return (
    <Card>
      <CardContent className="p-0">
        <CardHeader className="p-6 pt-8 bg-muted/50 flex flex-row items-start">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Pedido #{code}
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Pedido ID</span>
              </Button>
            </CardTitle>
            <CardDescription>
              {status === 'Finalizado' ? (
                <Rate code={code} />
              ) : status === 'Avaliado' ? (
                <span className="flex items-center text-muted-foreground">
                  Avaliação:
                  <span className="ml-2">{rating.toFixed(1)}</span>
                  {renderStars(rating)}
                </span>
              ) : (
                ''
              )}
            </CardDescription>
          </div>
        </CardHeader>
        <div className="p-6 text-sm">
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
                <span>R$5.00</span>
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
                <span>{resident.name}</span>
                <span>
                  {resident.adress.number} {resident.adress.street}
                </span>
                <span>
                  {resident.adress.state}, {resident.adress.country}{' '}
                  {resident.adress.cep}
                </span>
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
                <dd>{collaborator.name}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">{collaborator.email}</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Telefone</dt>
                <dd>
                  <a href="tel:">{collaborator.phone}</a>
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
        </div>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Atualizado <time dateTime={lastUpdate}>{lastUpdate}</time>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  )
}
