'use client'

import { useQuery } from '@tanstack/react-query'
import Card from './components/card/card'
import Header from './components/header/header'
import type { Movie } from './models/movie'
import { fetchNowPlayingMovies } from './libs/movieApi'
import { Skeleton } from '@/shared/components/ui/skeleton'
import CardLoading from './components/card/card-loading'

export default function Movie() {
  const { data, isLoading, isError, error } = useQuery<Movie[], Error>({
    queryKey: ['nowPlayingMovies'],
    queryFn: fetchNowPlayingMovies,
  })

  const movieSkeleton: number[] = new Array(16).fill(1)

  return (
    <div>
      <Header />
      <main className="px-4 md:px-8 py-6">
        <div className="text-2xl font-semibold pb-4">Now Playing Movies</div>

        {!isLoading && !isError && !data?.length && (
          <div className="text-xl">No movies playing now</div>
        )}

        {isError && (
          <div className="text-xl text-red-500">{error?.message}</div>
        )}

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6">
          {isLoading &&
            movieSkeleton.map((movie, idx) => <CardLoading key={idx} />)}

          {!isLoading &&
            data?.map((movie) => <Card key={movie.id} data={movie} />)}
        </div>
      </main>
    </div>
  )
}
