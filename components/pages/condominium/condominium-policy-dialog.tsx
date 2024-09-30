import { api } from '@/api/api'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CondominiumPolicyDialog({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  function formSubmit(e) {
    api.post('/create-policies', {
      title: e.get('title'),
      description: e.get('description'),
    })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <Card>
          <CardHeader>
            <CardTitle>Cadastrar nova politica</CardTitle>
            <CardDescription>
              Cadastre uma nova política para o condomínio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formSubmit} className="space-y-4">
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
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
