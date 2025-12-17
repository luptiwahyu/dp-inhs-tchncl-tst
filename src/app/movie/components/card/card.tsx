import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import type { Movie } from '../../models/movie'
import { formattedDate } from '@/shared/utils/date'

interface Props {
  data: Movie
}

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w400'

const Card: FC<Props> = ({ data }) => {
  const date = (value: string): string => {
    return formattedDate(new Date(value))
  }

  return (
    <div className="rounded-md border border-gray-100 shadow-md">
      <Image
        src={BASE_URL_IMAGE + data.poster_path}
        alt="poster"
        width={300}
        height={400}
        className="rounded-tl-md rounded-tr-md bg-gray-100"
      />
      <div className="p-4">
        <div className="font-semibold pb-1">{data.original_title}</div>
        <div className="text-gray-500 text-xs pb-2">
          {date(data.release_date)}
        </div>
        <div className="flex items-center justify-end space-x-2">
          <StarIcon className="size-4 text-yellow-500" />
          <span className="text-xs">{data.vote_average.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
