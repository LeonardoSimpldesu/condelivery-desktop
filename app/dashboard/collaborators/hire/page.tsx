'use server'
import { Fetcher } from '@/lib/fetcher'
import { TCollaborator } from '@/types/collaborator'
import { CollaboratorsDetails } from '@/components/pages/dashboard/collaborators/collaborator-details'
import { CollaboratorTable } from '@/components/pages/dashboard/collaborators/collaborator-table'
import * as motion from 'framer-motion/client'

export default async function CollaboratorsHirePage({
  searchParams,
}: {
  searchParams: {
    collaborator?: string
  }
}) {
  const collaborators = await Fetcher<TCollaborator[]>('/get-collaborators', {
    next: {
      tags: ['get-collaborators'],
    },
  })

  return (
    <main className="container w-full mx-auto pt-4 grid lg:grid-cols-3 gap-6">
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.25 },
        }}
        className="lg:col-span-2 h-fit"
      >
        <CollaboratorTable
          collaborators={collaborators}
          title="Contratar Colaboradores"
          description="Estes são os colaboradores disponíveis para serem contratados"
          isHire
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }}
      >
        <CollaboratorsDetails
          collaboratorId={
            searchParams.collaborator
              ? Number(searchParams.collaborator)
              : collaborators[0].id
          }
        />
      </motion.div>
    </main>
  )
}
