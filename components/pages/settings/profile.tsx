import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Profile() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Perfil</h2>
      <p className="text-muted-foreground mb-6">
        Assim é como os outros verão seu perfil.
      </p>

      <form className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/avatar.png" alt={'João'} />
            <AvatarFallback>JT</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold">João Tranquilino</h2>
            <h3 className="text-sm text-muted-foreground">
              joãotranquilino@gmail.com
            </h3>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="João Tranquilino" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" defaultValue="joãotranquilino@gmail.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cpf">CPF</Label>
          <Input id="cpf" defaultValue="123.456.789-00" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cpf">Celular</Label>
          <Input id="cpf" defaultValue="+55 (31) 98378-1618" />
        </div>
        <Button type="submit">Atualiar o pefil</Button>
        <Button type="button" variant={'destructive'} className="ml-8">
          Excluir perfil
        </Button>
      </form>
    </div>
  )
}
