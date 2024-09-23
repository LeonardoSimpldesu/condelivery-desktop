import { Button } from '@/components/ui/button'
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
  CardContent
} from '@/components/ui/card'

export function Appearance() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Aparência</h2>
      <p className="text-muted-foreground mb-6">
        Costumize o visual do seu aplicativo. Troque entre tema escuro e claro.
      </p>

      <form className="space-y-6">
        <Separator />
        <div className="space-y-2">
          <Label htmlFor="font">Fonte</Label>
          <Select defaultValue={'inter'}>
            <SelectTrigger className="" id="font">
              <SelectValue placeholder="Selecione uma fonte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inter">Inter</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <div className="">
            <h2 className="text-lg font-semibold">Tema</h2>
            <p className="text-sm text-gray-400">
              Selecione o tema para a sua aplicação.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 bg-white rounded-md">
                <div className="w-full min-h-full">
                  <div className="w-full p-3 rounded-lg bg-slate-200">
                    <div className="w-2/4 h-3 bg-muted-foreground rounded-full"></div>
                    <div className="w-3/5 h-3 bg-muted-foreground rounded-full mt-2"></div>
                  </div>
                  <div className="flex items-center w-full p-3 rounded-lg bg-slate-200 mt-2">
                    <div className="size-6 bg-muted-foreground rounded-full mr-3"></div>
                    <div className="w-3/5 h-3 bg-muted-foreground rounded-full"></div>
                  </div>
                  <div className="flex items-center w-full p-3 rounded-lg bg-slate-200 mt-2">
                    <div className="size-6 bg-muted-foreground rounded-full mr-3"></div>
                    <div className="w-3/5 h-3 bg-muted-foreground rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 bg-gray-800 rounded-md">
                <div className="w-full min-h-full">
                  <div className="w-full p-3 rounded-lg bg-gray-700">
                    <div className="w-2/4 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3/5 h-3 bg-gray-500 rounded-full mt-2"></div>
                  </div>
                  <div className="flex items-center w-full p-3 rounded-lg bg-gray-700 mt-2">
                    <div className="size-6 bg-gray-500 rounded-full mr-3"></div>
                    <div className="w-3/5 h-3 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center w-full p-3 rounded-lg bg-gray-700 mt-2">
                    <div className="size-6 bg-gray-500 rounded-full mr-3"></div>
                    <div className="w-3/5 h-3 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Button type="submit">Atualizar preferências</Button>
      </form>
    </div>
  )
}
