import axios from 'axios'
import type { Movie, MoviesResponse } from '../models/movie'

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

// export const fetchNowPlayingMovies = async (): Promise<Movie[]> => {
export const fetchNowPlayingMovies = async (page: number): Promise<MoviesResponse> => {
  // const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
  const url = `${BASE_URL}/movie/now_playing`
  const response = await axios.get(url, {
    params: {
      api_key: API_KEY,
      page,
    }
  })
  // return response.data.results
  return response.data
}
