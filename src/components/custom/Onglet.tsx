import { formatDateToFrench } from '@/lib/utils'
import { format, parseISO } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Badge } from '../ui/badge'
import Link from 'next/link'

interface OngletProps {
  data: {
    id: number
    title: string
    list: Object[]
  }
}

export default function Onglet({ data }: Readonly<OngletProps>) {
  const { title, list } = data
  return (
    <div className="flex flex-col items-start justify-items-start pl-14 pr-14 w-full">
      <h2 className="text-3xl font-bold pb-5 text-est-secondary uppercase tracking-tighter">
        {title}
      </h2>
      <div className="p-1 w-full flex flex-col gap-4">
        {list.map((item: any) => {
          return (
            <div key={item.id} className="flex flex-col">
              <div>
                {!item.date && (
                  <Badge className="bg-amber-400 text-amber-50">
                    {formatDateToFrench(item.publishedAt)}
                  </Badge>
                )}
                {item.date && (
                  <Badge className="bg-amber-400">
                    {formatDateToFrench(item.date, true)}
                  </Badge>
                )}
                {item.distance == true && (
                  <Badge className="bg-blue-500 text-blue-100">Distance</Badge>
                )}
                {item.salaire > 0 && (
                  <Badge className="bg-lime-500 text-lime-100">
                    {item.salaire} DHs
                  </Badge>
                )}
                {item.type && (
                  <Badge className="bg-violet-500 text-violet-100">
                    {item.type}
                  </Badge>
                )}
              </div>
              <p className="text-lg text-est-secondary">{item.titre}</p>
            </div>
          )
        })}
      </div>
      <Link className="self-end pt-5 text-est-primary font-medium" href="">
        Plus de détails &rarr;
      </Link>
    </div>
  )
}
