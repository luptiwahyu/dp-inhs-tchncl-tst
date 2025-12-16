import { Button } from '@/shared/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { FC } from 'react'
import { useGetAllPokemonQuery } from '../../stores/pokemonApi'
import ListItem from './list-item'
import ListLoading from './list-loading'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hook'
import { next, prev } from '../../stores/pokemonSlice'

const List: FC = () => {
  const dispatch = useAppDispatch()
  const pageLimit = useAppSelector((state) => state.pokemon.pageLimit)
  const pageOffset = useAppSelector((state) => state.pokemon.pageOffset)
  const { data, isLoading, isFetching } = useGetAllPokemonQuery({
    pageLimit,
    pageOffset,
  })

  const totalPage = Math.ceil(data?.count / pageLimit)
  const currentPage = pageOffset / pageLimit + 1

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const handlePrev = (): void => {
    dispatch(prev())
    scrollToTop()
  }

  const handleNext = (): void => {
    dispatch(next())
    scrollToTop()
  }

  return (
    <>
      {(isLoading || isFetching) && <ListLoading />}

      {!isLoading && !data.results.length && (
        <div className="rounded-xl px-4 py-14 text-center bg-white border border-gray-200 shadow-lg">
          <div className="text-xl font-semibold pb-4">
            Pokémon tidak ditemukan
          </div>
          <div className="text-gray-500">
            Cobalah cari dengan nama atau ID yang berbeda
          </div>
        </div>
      )}

      {!isLoading && !isFetching && !!data.results.length && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {data.results.map((pokemon, idx) => (
            <ListItem key={idx} data={pokemon} />
          ))}
        </div>
      )}

      {!!data?.results.length && (
        <div className="py-14 px-20">
          <div className="md:hidden text-sm text-center pb-6">
            Page 1 of 200
          </div>
          <div className="flex items-center justify-center space-x-6">
            <Button
              variant="outline"
              disabled={pageOffset <= 0}
              onClick={handlePrev}
            >
              <ChevronLeftIcon />
              Prev
            </Button>
            <div className="hidden md:block text-sm">
              Page {currentPage} of {totalPage}
            </div>
            <Button
              variant="outline"
              disabled={pageOffset >= data?.count}
              onClick={handleNext}
            >
              Next
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default List
