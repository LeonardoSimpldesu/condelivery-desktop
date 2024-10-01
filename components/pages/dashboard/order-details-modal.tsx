import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Copy, CreditCard, Star } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { api } from '@/api/api'
import { TOrderDetails } from '@/types/order'
import { Fetcher } from '@/api/fetcher'

type OrderDetailsModalProps = {
  children: React.ReactNode
  orderId: number
}

export async function OrderDetailsModal({
  children,
  orderId,
}: OrderDetailsModalProps) {
  const { code, tax, freight, resident, rating, collaborator, updatedAt } =
    await Fetcher<TOrderDetails>({
      endpoint: '/get-order',
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

  function formSubmit(e) {
    api.post('/create-rating', {
      order_code: orderId,
      rating: Number(e.get('rate')),
      recommendations: e.get('recomendation'),
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="p-6 pt-8 bg-muted/50 flex flex-row items-start">
          <div className="grid gap-0.5">
            <DialogTitle className="group flex items-center gap-2 text-lg">
              Pedido #{code}
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Pedido ID</span>
              </Button>
            </DialogTitle>
            <DialogDescription>
              <p className="flex items-center text-muted-foreground">
                Avaliação:
                <span className="ml-2">{rating.toFixed(1)}</span>
                {renderStars(rating)}
              </p>
            </DialogDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Star className="h-3.5 w-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Avaliar pedido
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <Card>
                  <CardHeader>
                    <CardTitle>Avaliar pedido</CardTitle>
                    <CardDescription>
                      Coloque um valor entre 1 e 5 para avaliar o pedido
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" action={formSubmit}>
                      <div className="space-y-2">
                        <Label htmlFor="rate">Avalição</Label>
                        <Input name="rate" id="rate" type="number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="recomendation">Recomendação</Label>
                        <Input name="recomendation" id="recomendation" />
                      </div>
                      <Button className="w-full">Avaliar</Button>
                    </form>
                  </CardContent>
                </Card>
              </DialogContent>
            </Dialog>
          </div>
        </DialogHeader>
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
                <span>R${freight}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Taxa</span>
                <span>R${tax}</span>
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
        <DialogFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Atualizado <time dateTime="2024-09-19">{updatedAt.toString()}</time>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
