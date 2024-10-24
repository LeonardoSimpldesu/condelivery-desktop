'use server'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Fetcher } from '@/lib/fetcher'
import { revalidateTag } from 'next/cache'

export async function CondominiumPolicyDialog({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  async function formSubmit(e: FormData) {
    'use server'
    const response = await Fetcher('/create-policy', {
      method: 'POST',
      body: JSON.stringify({
        title: e.get('title'),
        description: e.get('description'),
      }),
    })

    revalidateTag('get-condominiums')

    console.log(response)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar nova politica</DialogTitle>
          <DialogDescription>
            Cadastre uma nova política para o condomínio
          </DialogDescription>
        </DialogHeader>
        <div>
          <form className="space-y-4" action={formSubmit}>
            <div className="space-y-2">
              <Label htmlFor="title">Título da política</Label>
              <Input name="title" id="title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição da política</Label>
              <Input name="description" id="description" />
            </div>
            <Button className="w-full">Cadastrar política</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
