'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Fetcher } from '@/lib/fetcher'
import { revalidateData } from '@/lib/revalidate'
import { Star } from 'lucide-react'
import { useState } from 'react'

type TRate = {
  code: string
}

export function Rate({ code }: TRate) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  async function formSubmit(e: FormData) {
    await Fetcher('/create-rate', {
      method: 'POST',
      body: JSON.stringify({
        order_code: code,
        rating: Number(e.get('rate')),
        recommendations: e.get('recomendation'),
      }),
    })

    await revalidateData('get-orders-details')
    await revalidateData('get-orders')
    await revalidateData('get-collaborators')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="link"
          className="gap-1 p-0 m-0 h-5 relative group hover:no-underline"
        >
          <span className="relative whitespace-nowrap flex items-center">
            <Star className="h-3.5 w-3.5 group-hover:fill-primary" />
            Avaliar pedido
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-primary origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 w-3/12">
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
                <Input
                  name="rate"
                  id="rate"
                  type="number"
                  placeholder="Deixe uma avalição entre 1 e 5"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="recomendation">Recomendação</Label>
                <Input
                  name="recomendation"
                  id="recomendation"
                  placeholder="Deixe um comentário sobre o colaborador"
                />
              </div>
              <Button className="w-full">Avaliar</Button>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
