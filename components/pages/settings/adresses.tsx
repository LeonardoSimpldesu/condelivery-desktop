import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Adresses() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Endereços</h2>
      <p className="text-muted-foreground mb-6">
        Estes são seus endereços cadastrados.
      </p>

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="adress">Endereço principal</Label>
          <Select defaultValue={'adress1'}>
            <SelectTrigger className="">
              <SelectValue placeholder="Selecione seu endereço principal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="adress1">LEONARDO DE SOUZA ALMEIDA</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>LEONARDO DE SOUZA ALMEIDA</CardTitle>
            <CardDescription>Este é o endereço padrão</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="font-semibold">Informações do endereço</div>
            <ul className="grid grid-cols-2">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-foreground">Endereço:</span>
                <span className="text-muted-foreground">
                  Rua Rio Negro, 514
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-foreground">Condomínio:</span>
                <span className="text-muted-foreground">Santa Efigênia</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-foreground">Cidade:</span>
                <span className="text-muted-foreground">Belo Horizonte</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-foreground">Bloco:</span>
                <span className="text-muted-foreground">3A</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-foreground">Bairro:</span>
                <span className="text-muted-foreground">Maria Elena</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-foreground">Apartamento:</span>
                <span className="text-muted-foreground">202</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant={'link'} className="p-0 mr-8 text-blue-700">
              Atualizar endereço
            </Button>
            <Button variant={'link'} className="p-0 text-destructive">
              Excluir endereço
            </Button>
          </CardFooter>
        </Card>

        <Separator />
        <div className="">
          <h2 className="text-xl font-semibold">Cadastrar um Novo Endereço</h2>
          <p className="text-muted-foreground mb-6">
            Cadastre um novo endereço para gerenciar onde serão suas entregas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2 col-span-2">
            <Label htmlFor="name">Come completo (nome e sobrenome)</Label>
            <Input id="name" name="name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" name="phone" />
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="endereco">Endereço</Label>
            <Input id="endereco" name="endereco" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cep">CEP</Label>
            <Input id="cep" name="cep" />
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="city">Cidade</Label>
            <Input id="city" name="city" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="neighborhood">Bairro</Label>
            <Input id="neighborhood" name="neighborhood" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="condominium">Condomínio</Label>
            <Input id="condominium" name="condominium" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bloc">Bloco</Label>
            <Input id="bloc" name="bloc" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apartment">Apartamento</Label>
            <Input id="apartment" name="apartment" />
          </div>
        </div>
        <Button type="submit">Atualiar o pefil</Button>
        <Button type="button" variant={'destructive'} className="ml-8">
          Excluir perfil
        </Button>
      </form>
    </div>
  )
}
