import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent, DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function CondominiumPolicyDialog({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Título da política</Label>
                    <Input
                      id="title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição da política</Label>
                    <Input id="description" />
                  </div>
                  <Button className="w-full">
                    Cadastrar política
                  </Button>
                </div>
              </CardContent>
            </Card>
      </DialogContent>
    </Dialog>
  )
}
