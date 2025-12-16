import { Skeleton } from '@/shared/components/ui/skeleton'
import { FC } from 'react'
import { useAppSelector } from '@/shared/hooks/hook'

const ListLoading: FC = () => {
  const length = useAppSelector((state) => state.pokemon.pageLimit)
  const skeletonData: number[] = new Array(length).fill(1)

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {skeletonData.map((item, idx) => (
        <div
          className="rounded-xl bg-white border border-gray-200 shadow-lg"
          key={idx}
        >
          <Skeleton className="h-40 rounded-tl-xl rounded-tr-xl" />
          <div className="p-4">
            <Skeleton className="h-7 w-40" />
            <Skeleton className="mt-4 h-6" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListLoading
