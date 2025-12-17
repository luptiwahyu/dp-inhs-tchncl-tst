import { create } from 'zustand'
import type { Cryptocurrency, CryptoState } from '../models/cryptocurrency'
import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API_KEY
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets'

export const useCryptoStore = create<CryptoState>((set) => ({
  currencies: [],
  loading: true,
  error: null,
  fetchCurrencies: async () => {
    set({ loading: true, error: null })

    try {
      const response = await axios.get<Cryptocurrency[]>(API_URL, {
        params: {
          x_cg_demo_api_key: API_KEY,
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 10,
        },
      })
      set({ currencies: response.data, loading: false })
    } catch (err) {
      if (axios.isAxiosError(err)) {
        set({ error: err.message, loading: false })
      } else {
        set({ error: 'An unknown error occurred', loading: false })
      }
    }
  },
}))
