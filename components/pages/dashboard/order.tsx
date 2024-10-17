import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Package } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { OrderDetailsDialog } from './order-details-dialog'

type OrderProps = {
  id: number
  code: string
  description: string
  status: 'EmRota' | 'Finalizado' | 'Avaliado'
}

export function Order({ code, description, id, status }: OrderProps) {
  return (
    <Card className="min-w-fit overflow-hidden">
      <CardContent className="grid grid-cols-4 items-center gap-4 py-4">
        <div className="flex items-center gap-2 col-span-3">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="64"
            src="/bag.png"
            width="64"
          />
          <div className="">
            <div className="font-medium">Pedido #{code}</div>
            <div className="hidden text-sm text-muted-foreground md:inline">
              {description}
            </div>
          </div>
        </div>
        <OrderDetailsDialog orderId={id}>
          <Button className="ml-auto bg-primary p-2 rounded-full">
            <Package className="text-white" />
          </Button>
        </OrderDetailsDialog>
      </CardContent>
      <CardFooter
        className={cn(
          'p-0 py-1 ',
          status === 'EmRota'
            ? 'bg-red-500'
            : status === 'Finalizado'
              ? 'bg-green-500'
              : status === 'Avaliado'
                ? 'bg-primary'
                : '',
        )}
      >
        <p className="mx-auto font-semibold text-white">{status}</p>
      </CardFooter>
    </Card>
  )
}
