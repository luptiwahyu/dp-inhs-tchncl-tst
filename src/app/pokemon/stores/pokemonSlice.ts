import { createSlice } from "@reduxjs/toolkit";

interface ListState {
  name: string
}

const initialState: ListState = {
  name: '',
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  selectors: {},
})

export const {} = pokemonSlice.actions
