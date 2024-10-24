import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Fetcher } from '@/lib/fetcher'
import { TCondominium } from '@/types/condominium'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { CondominiumDialog } from './condominium-dialog'
import { Button } from '@/components/ui/button'
import { Plus, Trash } from 'lucide-react'
import { CondominiumPolicyDialog } from './condominium-policy-dialog'
import { cn } from '@/lib/utils'
import * as motion from 'framer-motion/client'

type TCondominiumCard = {
  isAdmin?: boolean
}

export async function CondominiumCard({ isAdmin = false }: TCondominiumCard) {
  const { name, policies, blocks, address } = await Fetcher<TCondominium>(
    '/get-condominiums',
    {
      next: {
        tags: ['get-condominiums'],
      },
    },
  )
  return (
    <Card className="h-full w-full">
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
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            Condomínio com {blocks.length} blocos
          </CardDescription>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="font-semibold">Políticas do Condomínio</div>
          <div className="grid gap-3">
            {policies.map((policy) => (
              <div key={policy.id} className="flex justify-between">
                <div className="">
                  <p className="text-muted-foreground">{policy.title}</p>
                  <p>{policy.description}</p>
                </div>
                <Button
                  className={isAdmin ? '' : 'hidden'}
                  variant={'ghost'}
                  size={'icon'}
                >
                  <Trash className="size-5 text-destructive" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <CondominiumPolicyDialog>
            <Button
              size="sm"
              className={cn('w-full mt-4 gap-1', isAdmin ? '' : 'hidden')}
            >
              Adicionar nova política
              <Plus className="h-4 w-4" />
            </Button>
          </CondominiumPolicyDialog>
        </motion.div>
        <Separator className="my-4" />
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-3">
            <div className="font-semibold">Informações de transporte</div>
            <address className="grid gap-0.5 not-italic text-muted-foreground">
              <span>João Tranquilino</span>
              <span>
                {address.city}, {address.street}
              </span>
              <span>
                {address.state}, {address.country}, {address.zipCode}
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
      </CardContent>
    </Card>
  )
}
