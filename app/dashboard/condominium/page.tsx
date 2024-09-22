import { CondominiumCard } from "@/components/pages/condominium/condominium-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ArrowUpRight, File, ListFilter, MoreHorizontal, Plus, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function CondominiumPage(){
    const policies = [
        { id: 1, title: 'Horário de Entregas', description: 'Das 8h às 22h' },
        { id: 2, title: 'Acesso de Entregadores', description: 'Somente com autorização prévia' },
        { id: 3, title: 'Uso do Elevador de Serviço', description: 'Obrigatório para todas as entregas' },
      ]

    return(
        <main className="grid gap-6 w-full p-8 grid-cols-3">
            <div className="col-span-2">
            <Card className="h-full">
                <CardHeader>
                  <CardTitle>Condominío</CardTitle>
                  <CardDescription>
                    Estes são os blocos e apartamentos deste condomínio
                  </CardDescription>
                </CardHeader>
            <Tabs defaultValue="blocoa">
                <TabsList className="ml-6">
                  <TabsTrigger value="blocoa">Bloco A</TabsTrigger>
                  <TabsTrigger value="blocob">Bloco B</TabsTrigger>
                  <TabsTrigger value="blococ">Bloco C</TabsTrigger>
                </TabsList>
              <TabsContent value="blocoa">
                  <CardContent>
                    <Table className="h-full">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="hidden w-[100px] sm:table-cell">
                            <span className="sr-only">Image</span>
                          </TableHead>
                          <TableHead>Morador</TableHead>
                          <TableHead>Apartamento</TableHead>
                          <TableHead>Profissão</TableHead>
                          <TableHead>
                            <span className="sr-only">Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody >
                        {Array.from({length: 5}).map((_, index) => (
                            <TableRow key={index}>
                            <TableCell className="hidden sm:table-cell">
                              <Image
                                alt="Product image"
                                className="aspect-square rounded-md object-cover"
                                height="64"
                                src="/avatar.png"
                                width="64"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              João Tranquilino
                            </TableCell>
                            <TableCell className="font-medium">
                              Apartamento 502
                            </TableCell>
                            <TableCell className="font-medium">
                              Sorveteiro
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button aria-haspopup="true" size="icon" variant="ghost">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem>Deletar</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}

                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <div className="text-xs text-muted-foreground">
                      Mostrando <strong>1-10</strong> of <strong>32</strong> moradores
                    </div>
                  </CardFooter>
              </TabsContent>
            </Tabs>
            </Card>
            </div>
            <div className="flex flex-col gap-4">
                <CondominiumCard/>
                <Card>
                    <CardHeader className="flex flex-row justify-between">
                        <div>
                            <CardTitle>Colaboradores</CardTitle>
                            <CardDescription>Lista de colaboradores no seu condominio</CardDescription>
                        </div>
                        <Button size="sm" variant={"link"} className="gap-1">
                            Ver todos
                            <ArrowUpRight className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex overflow-hidden">
                        {Array.from({length: 10}).map((_, index)=>{
                            return(
                                <Avatar className="size-16 mr-[-1rem] border-4 border-white" key={index}>
                                    <AvatarImage src="/avatar.png" alt={'João'} />
                                    <AvatarFallback>JT</AvatarFallback>
                                </Avatar>
                            )
                        })}
                    </CardContent>
                </Card>
                <Card className="">
                    <CardHeader className="flex flex-row justify-between">
                        <div>
                            <CardTitle>Políticas do Condomínio</CardTitle>
                            <CardDescription>Regras importantes para entregas e acesso</CardDescription>
                        </div>
                        <Button size="sm" variant={"link"} className="gap-1">
                            Adicionar nova politica
                            <Plus className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                    {policies.map((policy) => (
                        <div key={policy.id} className="mb-4">
                        <h3 className="font-semibold">{policy.title}</h3>
                        <p className="text-sm text-gray-600">{policy.description}</p>
                        </div>
                    ))}
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}