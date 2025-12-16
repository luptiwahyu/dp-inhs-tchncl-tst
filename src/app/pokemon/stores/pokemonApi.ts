import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/pokemon/',
  }),
  endpoints: (build) => ({
    getAllPokemon: build.query({
      query: (pageLimit: number) => ({
        url: '',
        params: {
          limit: pageLimit,
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
