import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ChevronRight, Star } from 'lucide-react'
import { CollaboratorsDetailsModal } from './collaborator-details-dialog'

type TCollaboratorProps = {
  collaboratorId: number
  name: string
  rating: number
}

export function Collaborator({
  collaboratorId,
  name,
  rating,
}: TCollaboratorProps) {
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
    <CollaboratorsDetailsModal collaboratorId={collaboratorId}>
      <Card className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted cursor-pointer">
        <CardContent className="flex items-center gap-4 py-1 px-2">
          <Avatar className="h-9 w-9 sm:flex">
            <AvatarImage src="/avatar.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-base font-bold leading-none text-nowrap">
              {name}
            </p>
            <p className="flex items-center text-muted-foreground">
              {renderStars(rating)}
              <span className="ml-2">{rating.toFixed(1)}</span>
            </p>
          </div>
          <ChevronRight className="ml-auto font-medium hidden sm:block" />
        </CardContent>
      </Card>
    </CollaboratorsDetailsModal>
  )
}
