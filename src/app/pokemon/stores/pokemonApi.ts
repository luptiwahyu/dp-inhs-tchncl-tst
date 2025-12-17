import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ListResponse, Pagination } from '../models/pokemon'
import type { PokemonDetail } from '../models/response'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/pokemon/',
  }),
  endpoints: (build) => ({
    getAllPokemon: build.query<ListResponse, Pagination>({
      query: (pagination: Pagination) => ({
        url: '',
        params: {
          limit: pagination.pageLimit,
          offset: pagination.pageOffset,
        },
      }),
    }),
    getSinglePokemon: build.query<PokemonDetail, string>({
      query: (name: string) => ({
        url: name,
      }),
    }),
  }),
})

export const { useGetAllPokemonQuery, useGetSinglePokemonQuery } = pokemonApi
