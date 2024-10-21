import { Collaborator } from '@/components/pages/dashboard/collaborator'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { TCollaborator } from '@/types/collaborator'
import * as motion from 'framer-motion/client'
import { ArrowUpRight, Plus } from 'lucide-react'
import Link from 'next/link'
import { twJoin } from 'tailwind-merge'

// FRAMER MOTION
const itemsCase = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

type CollaboratorsProps = {
  collaborators: TCollaborator[]
  isAdmin?: boolean
  title: string
  description: string
}

export function Collaborators({
  collaborators,
  isAdmin = false,
  description,
  title,
}: CollaboratorsProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="flex">
        <div className="flex flex-col items-center sm:flex-row">
          <div className="grid gap-2">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>

          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            className={twJoin('sm:w-fit', isAdmin ? 'sm:ml-auto' : 'hidden')}
          >
            <Button
              variant={'outline'}
              asChild
              size="sm"
              className="w-full mt-4 gap-1 sm:mr-4 sm:w-fit"
            >
              <Link href="/dashboard/collaborators/hire">
                Contratar novos colaboradores
                <Plus className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            className={twJoin('sm:w-fit', isAdmin ? '' : 'sm:ml-auto')}
          >
            <Button asChild size="sm" className="w-full mt-4 gap-1">
              <Link href="/dashboard/collaborators">
                Ver todos
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="whitespace-nowrap">
          <motion.div
            variants={itemsCase}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:grid sm:grid-cols-2 gap-6 py-3 xl:flex xl:flex-row overflow-y-hidden px-2"
          >
            {collaborators
              ? collaborators.map(({ active, mediaRating, id, name }) =>
                  active ? (
                    <motion.div
                      key={id}
                      variants={item}
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Collaborator
                        collaboratorId={id}
                        rating={mediaRating}
                        name={name}
                      />
                    </motion.div>
                  ) : (
                    ''
                  ),
                )
              : 'Nenhum Colaborador'}
          </motion.div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
