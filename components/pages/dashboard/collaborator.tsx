import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ChevronRight, Star } from 'lucide-react'
import { CollaboratorsDetailsModal } from './collaborator-details-modal'

type TCollaboratorProps = {
  collaborator: unknown
}

export function Collaborator({ collaborator }: TCollaboratorProps) {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))
  }

  return (
    <CollaboratorsDetailsModal collaborator={collaborator}>
      <Card className="min-w-fit overflow-hidden flex items-center gap-4 p-4 rounded-lg hover:bg-muted cursor-pointer">
        <CardContent className="flex items-center gap-4 py-1 px-2">
          <Avatar className="h-9 w-9 sm:flex">
            <AvatarImage src="/avatar.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-base font-bold leading-none">
              {collaborator.name}
            </p>
            <p className="flex items-center text-muted-foreground">
              {renderStars(collaborator.mediaRating)}
              <span className="ml-2">
                {collaborator.mediaRating.toFixed(1)}
              </span>
            </p>
          </div>
          <ChevronRight className="ml-auto font-medium hidden sm:block" />
        </CardContent>
      </Card>
    </CollaboratorsDetailsModal>
  )
}
