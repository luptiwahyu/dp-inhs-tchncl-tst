import { Button } from '@/shared/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { FC } from 'react'

const List: FC = () => {
  // const pokemons = []
  const pokemons = [1, 2, 3, 4, 5, 6, 7]
  const abilities = [1, 2, 3, 4, 5, 6, 7]

  return (
    <>
      {!pokemons.length && (
        <div className="rounded-xl px-4 py-14 text-center bg-white border border-gray-200 shadow-lg">
          <div className="text-xl font-semibold pb-4">
            Pokémon tidak ditemukan
          </div>
          <div className="text-gray-500">
            Cobalah cari dengan nama atau ID yang berbeda
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {pokemons.map((pokemon) => (
          <div
            className="rounded-xl bg-white border border-gray-200 shadow-lg"
            key={pokemon}
          >
            <div className="h-40 bg-green-400 rounded-tl-xl rounded-tr-xl"></div>
            <div className="p-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="grow text-lg font-semibold">Bulbasaur</div>
                <div className="bg-gray-200 rounded-full text-sm px-2 py-1 font-semibold">
                  #1
                </div>
              </div>
              <div className="flex flex-wrap items-center pt-2">
                {abilities.map((ab) => (
                  <span className="px-3 py-0.5 mt-2 mr-2 rounded-full bg-green-500 text-white text-sm font-semibold" key={ab}>
                    grass
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center space-x-6 py-14 px-20">
        <Button variant="outline">
          <ChevronLeftIcon />
          Prev
        </Button>
        <div className="text-sm">Page 1 of 200</div>
        <Button variant="outline">
          Next
          <ChevronRightIcon />
        </Button>
      </div>
    </>
  )
}

export default List
