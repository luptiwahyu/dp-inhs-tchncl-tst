import { FC } from 'react'
import type { Pokemon } from '../../models/pokemon'
import { useGetSinglePokemonQuery } from '../../stores/pokemonApi'
import Image from 'next/image'
import ListItemLoading from './list-item-loading'

interface Props {
  data: Pokemon
}

const ListItem: FC<Props> = ({ data }) => {
  const response = useGetSinglePokemonQuery(data.name)

  return (
    <>
      {response?.isLoading && <ListItemLoading />}

      {!response?.isLoading && (
        <div className="rounded-xl bg-white border border-gray-200 shadow-lg">
          <div className="flex items-center justify-center h-40 rounded-tl-xl rounded-tr-xl">
            <Image
              src={
                response.data?.sprites?.other?.dream_world?.front_default ||
                response.data?.sprites?.other?.['official-artwork']
                  ?.front_default
              }
              alt="pokemon-img"
              width={120}
              height={120}
            />
          </div>
          <div className="p-4">
            <div className="text-lg font-semibold capitalize">{data.name}</div>
            <div className="flex flex-wrap items-center pt-2">
              {response.data?.abilities?.map((ability, abilityIdx) => (
                <span
                  className="px-3 py-0.5 mt-2 mr-2 rounded-full bg-white text-sm font-semibold border border-gray-200 capitalize"
                  key={abilityIdx}
                >
                  {ability.ability?.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ListItem
