'use server'
import { Fetcher } from '@/lib/fetcher'
import { TCollaborator } from '@/types/collaborator'
import { CollaboratorsDetails } from '@/components/pages/dashboard/collaborators/collaborator-details'
import { CollaboratorTable } from './collaborator-table'

export default async function CollaboratorsPage({
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
      <div className="lg:col-span-2 h-fit">
        <CollaboratorTable collaborators={collaborators} />
      </div>
      <CollaboratorsDetails
        collaboratorId={
          searchParams.collaborator
            ? Number(searchParams.collaborator)
            : collaborators[0].id
        }
      />
    </main>
  )
}
