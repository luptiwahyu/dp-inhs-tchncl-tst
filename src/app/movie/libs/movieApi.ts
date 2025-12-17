import axios from 'axios'
import type { Movie } from '../models/movie'

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchNowPlayingMovies = async (): Promise<Movie[]> => {
  const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
  const response = await axios.get(url)
  return response.data.results
}
