import { Button } from '@/shared/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { FC } from 'react'

interface Props {
  isFetching: boolean
  page: number
  totalPage: number
  onPrev: () => void
  onNext: () => void
}

const Pagination: FC<Props> = ({
  isFetching,
  page,
  totalPage,
  onPrev,
  onNext,
}) => {
  return (
    <div className="py-14 px-20">
      <div className="md:hidden text-sm text-center pb-6">
        Page {page} of {totalPage}
      </div>
      <div className="flex items-center justify-center space-x-6">
        <Button
          variant="outline"
          disabled={isFetching || page <= 1}
          onClick={onPrev}
        >
          <ChevronLeftIcon />
          Prev
        </Button>
        <div className="hidden md:block text-sm">
          Page {page} of {totalPage}
        </div>
        <Button
          variant="outline"
          disabled={isFetching || page >= totalPage}
          onClick={onNext}
        >
          Next
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  )
}

export default Pagination
