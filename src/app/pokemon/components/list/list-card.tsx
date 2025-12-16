import { Button } from '@/shared/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { FC } from 'react'
import { useGetAllPokemonQuery } from '../../stores/pokemonApi'
import ListItem from './list-item'
import ListLoading from './list-loading'
import { useAppSelector } from '@/shared/hooks/hook'

const List: FC = () => {
  const pageLimit = useAppSelector((state) => state.pokemon.pageLimit)
  const { data, isLoading, isFetching, isError } =
    useGetAllPokemonQuery(pageLimit)

  return (
    <>
      {isLoading && <ListLoading />}

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

      {!isLoading && !!data.results.length && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {data.results.map((pokemon, idx) => (
              <ListItem key={idx} data={pokemon} />
            ))}
          </div>

          <div className="py-14 px-20">
            <div className="md:hidden text-sm text-center pb-6">
              Page 1 of 200
            </div>
            <div className="flex items-center justify-center space-x-6">
              <Button variant="outline">
                <ChevronLeftIcon />
                Prev
              </Button>
              <div className="hidden md:block text-sm">Page 1 of 200</div>
              <Button variant="outline">
                Next
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default List
