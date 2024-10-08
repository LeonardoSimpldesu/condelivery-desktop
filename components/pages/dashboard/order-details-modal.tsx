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
import { ScrollArea } from '@/components/ui/scroll-area'

export function OrderDetailsModal({
  children,
  orderCode,
}: Readonly<{
  children: React.ReactNode
  orderCode: string
}>) {
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
      order_code: orderCode,
      rating: Number(e.get('rate')),
      recommendations: e.get('recomendation'),
    })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col p-0 max-h-[85svh] h-[85svh] max-w-xl">
        <DialogHeader className="p-6 pt-8 bg-muted/50 flex-shrink-0">
          <div className="flex justify-between items-start">
            <div className="grid gap-0.5">
              <DialogTitle className="group flex items-center gap-2 text-lg">
                Pedido Oe31b70H
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
                  <span className="ml-2">{(4).toFixed(1)}</span>
                  {renderStars(4)}
                </p>
              </DialogDescription>
            </div>
            <div className="flex items-center gap-1">
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
          </div>
        </DialogHeader>
        <ScrollArea className="flex-grow">
          <div className="px-6 text-sm">
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
                    <a href="mailto:klebaograndao@gmail.com">
                      klebaograndao@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">Telefone</dt>
                  <dd>
                    <a href="tel:+55319000000000">+55 (31) 90000-0000</a>
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
        </ScrollArea>
        <DialogFooter className="flex-shrink-0 border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Atualizado <time dateTime="2024-09-19">19 de Setembro, 2024</time>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
