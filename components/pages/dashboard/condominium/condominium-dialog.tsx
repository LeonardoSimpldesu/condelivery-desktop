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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function CondominiumDialog({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <Tabs defaultValue="informations">
          <TabsList className="grid w-full grid-cols-2 mt-4">
            <TabsTrigger value="informations">Informações</TabsTrigger>
            <TabsTrigger value="payment">Pagamento</TabsTrigger>
          </TabsList>
          <TabsContent value="informations">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Condomínio</CardTitle>
                <CardDescription>
                  Configure a exibição do condominio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="condominium-name">Nome do Condomínio</Label>
                    <Input
                      id="condominium-name"
                      placeholder="Residencia das flores"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="adress">Endereço</Label>
                    <Input id="adress" placeholder="Rua das Acácias, 123" />
                  </div>
                  <Button className="w-full">
                    Atualizar Informações do Condomínio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciamento de Pagamento</CardTitle>
                <CardDescription>
                  Configure o pagamento da plataforma Condelivery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Número do Cartão</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Data de Expiração</Label>
                      <Input id="expiryDate" placeholder="MM/AA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <Button className="w-full">
                    Atualizar Informações de Pagamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
