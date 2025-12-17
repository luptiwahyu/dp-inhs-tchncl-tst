import axios from 'axios'
import type { MoviesResponse } from '../models/movie'

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchNowPlayingMovies = async (
  page: number
): Promise<MoviesResponse> => {
  const url = `${BASE_URL}/movie/now_playing`
  const response = await axios.get(url, {
    params: {
      api_key: API_KEY,
      page,
    },
  })
  return response.data
}
