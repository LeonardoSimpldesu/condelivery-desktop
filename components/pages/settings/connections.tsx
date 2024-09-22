import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"

export function Connections(){
    return(
        <div>
            <h2 className="text-xl font-semibold">Conexões</h2>
            <p className="text-muted-foreground mb-6">Configure as integrações com serviços de delivery para otimizar o recebimento de pedidos no condomínio.</p>

            <form className="space-y-6">
                <div className="space-y-2">
                <Card>
                        <CardContent className="flex justify-between items-center p-6">
                            <div className="flex items-center gap-3">
                                <Avatar className="size-14">
                                    <AvatarImage src="/settings/ifood-logo.svg" alt={'Ifood'} />
                                    <AvatarFallback>IF</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-semibold text-lg">iFood</h3>
                                    <p className="text-muted-foreground text-sm">Integração com o serviço de delivery iFood</p>
                                </div>
                            </div>
                            <Switch id="airplane-mode" />
                        </CardContent>
                    </Card>
                </div>

                <Button type="submit">Atualizar conexões</Button>
            </form>
        </div>
    )
} 