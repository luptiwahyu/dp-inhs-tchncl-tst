import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pagination } from '../models/pokemon'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/pokemon/',
  }),
  endpoints: (build) => ({
    getAllPokemon: build.query({
      query: (pagination: Pagination) => ({
        url: '',
        params: {
          limit: pagination.pageLimit,
          offset: pagination.pageOffset,
        },
      }),
    }),
    getSinglePokemon: build.query({
      query: (name: string) => ({
        url: name,
      }),
    }),
  }),
})

export const { useGetAllPokemonQuery, useGetSinglePokemonQuery } = pokemonApi
