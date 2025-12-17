import { Skeleton } from '@/shared/components/ui/skeleton'

export default function TableListLoading() {
  const cryptoSkeleton: number[] = new Array(10).fill(1)

  return (
    <div className="space-y-4 mt-1.5">
      <Skeleton className="h-7" />
      {cryptoSkeleton.map((item, idx) => (
        <Skeleton className="h-10" key={idx} />
      ))}
    </div>
  )
}
