import { createSlice } from '@reduxjs/toolkit'

interface ListState {
  pageLimit: number
}

const initialState: ListState = {
  pageLimit: 12,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  selectors: {},
})

export const {} = pokemonSlice.actions
export const {} = pokemonSlice.selectors
