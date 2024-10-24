'use server'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Star,
  Search,
  CircleUser,
  Package,
  Plus,
  ArrowUpRight,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { TCollaborator } from '@/types/collaborator'
import { redirect } from 'next/navigation'
import * as motion from 'framer-motion/client'
import { twJoin } from 'tailwind-merge'

type CollaboratorTableProps = {
  collaborators: TCollaborator[]
  isHire?: boolean
  title: string
  description: string
}

export async function CollaboratorTable({
  collaborators,
  description,
  title,
  isHire = false,
}: CollaboratorTableProps) {
  async function handleFormSubmit(formData: FormData) {
    'use server'
    const collaboratorId = formData.get('collaborator')
    redirect(`collaborators/?collaborator=${collaboratorId}`)
  }

  return (
    <Card>
      <CardHeader className="flex">
        <div className="flex flex-col items-center mb-2 sm:flex-row">
          <div className="grid gap-2">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            className="ml-auto"
          >
            <Button
              asChild
              size="sm"
              className={twJoin(
                'w-full mt-4 gap-1 sm:ml-auto sm:w-fit sm:mt-0',
                isHire ? '' : 'hidden',
              )}
            >
              <Link href="/dashboard/collaborators">
                Meus Colaboradores
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant={'outline'}
              asChild
              size="sm"
              className={twJoin(
                'w-full mt-4 gap-1 sm:ml-auto sm:mr-4 sm:w-fit',
                isHire ? 'hidden' : '',
              )}
            >
              <Link href="/dashboard/collaborators/hire">
                Contratar novos colaboradores
                <Plus className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 pb-6">
          <Input
            placeholder="Pesquisar por nome ou endereço"
            className="flex-grow"
          />
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            className="ml-auto"
          >
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Pesquisar
            </Button>
          </motion.div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Avaliação</TableHead>
              <TableHead className="hidden sm:table-cell">Função</TableHead>
              <TableHead className="hidden xl:table-cell">Conosco à</TableHead>
              <TableHead className="hidden sm:table-cell">Serviços</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {collaborators.map(
              ({
                name,
                id,
                mediaRating,
                servicesProvided,
                operatingTimeInMonths,
                countDeliveries,
              }) => {
                const jobs = servicesProvided.map((job, i) => (
                  <p key={i}>{job} </p>
                ))
                return (
                  <TableRow key={id}>
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="50"
                        src="/avatar.png"
                        width="50"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{name}</TableCell>
                    <TableCell>
                      <div className="flex gap-1 items-center">
                        <span className="ml-2">{mediaRating.toFixed(1)}</span>
                        <Star
                          size={16}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {jobs}
                    </TableCell>
                    <TableCell className="hidden xl:table-cell">
                      {operatingTimeInMonths} meses
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <p className="flex items-center gap-1">
                        <span>
                          <Package size={16} />
                        </span>
                        {countDeliveries}
                      </p>
                    </TableCell>
                    <TableCell>
                      <form action={handleFormSubmit}>
                        <Input
                          className="sr-only hidden"
                          name="collaborator"
                          id="collaborator"
                          value={id}
                          readOnly
                        />
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="ml-auto"
                        >
                          <Button
                            type="submit"
                            className="ml-auto w-fit h-fit bg-primary p-2 rounded-full"
                          >
                            <CircleUser className="text-white" />
                          </Button>
                        </motion.div>
                      </form>
                    </TableCell>
                  </TableRow>
                )
              },
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Mostrando <strong>1-10</strong> of <strong>32</strong> moradores
        </div>
      </CardFooter>
    </Card>
  )
}
