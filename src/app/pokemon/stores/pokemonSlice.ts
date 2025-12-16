import { createSlice } from '@reduxjs/toolkit'
import { ListState } from '../models/pokemon'

const initialState: ListState = {
  pageLimit: 12,
  pageOffset: 0,
  totalRecord: 0,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    prev: (state) => {
      state.pageOffset -= state.pageLimit
    },
    next: (state) => {
      state.pageOffset += state.pageLimit
    },
  },
})

export const { prev, next } = pokemonSlice.actions
