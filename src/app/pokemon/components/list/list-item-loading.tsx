import { Skeleton } from '@/shared/components/ui/skeleton'
import { FC } from 'react'

const ListItemLoading: FC = () => {
  return (
    <div className="rounded-xl bg-white border border-gray-200 shadow-lg">
      <Skeleton className="h-40 rounded-tl-xl rounded-tr-xl" />
      <div className="p-4">
        <Skeleton className="h-7 w-40" />
        <Skeleton className="mt-4 h-6" />
      </div>
    </div>
  )
}

export default ListItemLoading
