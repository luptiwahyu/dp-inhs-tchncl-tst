import { Skeleton } from '@/shared/components/ui/skeleton'

export default function CardLoading() {
  return (
    <div className="rounded-md border border-gray-100 shadow-md">
      <Skeleton className="h-[207px] md:h-[224px]" />
      <div className="p-4">
        <Skeleton className="h-7 mb-1" />
        <Skeleton className="h-6 mb-2 w-16" />
        <div className="flex items-center justify-end space-x-2">
          <Skeleton className="w-12 h-4" />
        </div>
      </div>
    </div>
  )
}
