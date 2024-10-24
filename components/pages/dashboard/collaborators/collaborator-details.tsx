import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Star, Globe, MapPin, BadgeInfo, Quote, HeartCrack } from 'lucide-react'
import Image from 'next/image'
import { TCollaboratorDetails } from '@/types/collaborator'
import { Fetcher } from '@/lib/fetcher'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export async function CollaboratorsDetails({
  collaboratorId,
}: {
  collaboratorId: number
}) {
  const {
    name,
    countDeliveries,
    mediaRating,
    languages,
    local,
    operatingTimeInMonths,
    servicesProvided,
    tags,
    ratings,
  } = await Fetcher<TCollaboratorDetails>(
    `/get-collaborator-detail/${collaboratorId}`,
    {
      next: {
        tags: ['get-collaborators'],
      },
    },
  )

  return (
    <Card className="p-0">
      <CardHeader className="p-6 pt-8 flex gap-4 items-center bg-muted">
        <CardTitle>Informações do colaborador</CardTitle>

        <div className="flex flex-col items-center">
          <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="64"
            src="/avatar.png"
            width="64"
          />
          <h2 className="text-2xl font-light">{name}</h2>
        </div>
        <div className="w-full grid grid-cols-3">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-medium">{countDeliveries}</p>
            <p className="text-muted-foreground">Serviços</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="flex items-center gap-2 text-2xl font-medium">
              {mediaRating.toFixed(1)} <Star fill="true" size={16} />
            </p>
            <p className="text-muted-foreground">Avaliação</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-medium">{operatingTimeInMonths}</p>
            <p className="text-muted-foreground">Meses</p>
          </div>
        </div>
      </CardHeader>
      <div className="grid gap-4 p-6 text-sm">
        <div className="flex items-center gap-4">
          <Globe size={32} strokeWidth={1} />
          <p className="">
            Fala <strong>{languages}</strong>
          </p>
        </div>
        <Separator />
        <div className="flex items-center gap-4">
          <MapPin size={32} strokeWidth={1} />
          <p className="">
            De <strong>{local}</strong>
          </p>
        </div>
        <Separator />
        <div className="flex items-center gap-4">
          <BadgeInfo size={32} strokeWidth={1} />
          <p className="">
            Outros serviços{' '}
            {servicesProvided
              ? Array.isArray(servicesProvided)
                ? servicesProvided.map((value: string) => (
                    <strong key={value}>{value} </strong>
                  ))
                : 'Nenhum serviço disponível'
              : 'Nenhum serviço disponível'}
          </p>
        </div>
        <Separator />
        <div className="">
          <h3 className="text-xl font-semibold">Destaques do colaborador</h3>
          <div className="flex gap-4 mt-4">
            {tags
              ? Array.isArray(tags)
                ? tags.map((value: string) => (
                    <Badge key={value}>{value}</Badge>
                  ))
                : 'Nenhuma tag disponível'
              : 'Nenhuma tag disponível'}
          </div>
        </div>
        <Separator />
        <div className="">
          <h3 className="text-xl font-semibold">Notas de agradecimento</h3>
          <div className="flex gap-4 items-center mt-4">
            {ratings.length > 0 ? (
              <>
                <Quote className="text-muted-foreground" />
                <p className="font-medium text-muted-foreground">
                  {ratings[0].recommendations}
                </p>
              </>
            ) : (
              <>
                <HeartCrack className="text-red-500" />
                <p className="font-medium text-red-500">
                  Nenhuma nota de agradecimento
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
