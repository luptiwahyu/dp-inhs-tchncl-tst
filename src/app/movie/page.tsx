'use client'

import { useQuery } from '@tanstack/react-query'
import Card from './components/card/card'
import Header from './components/header/header'
import type { Movie, MoviesResponse } from './models/movie'
import { fetchNowPlayingMovies } from './libs/movieApi'
import CardLoading from './components/card/card-loading'
import { useState } from 'react'
import { scrollToTop } from '@/shared/lib/helper'
import Pagination from './components/pagination/pagination'

export default function Movie() {
  const [page, setPage] = useState<number>(1)

  const { data, isLoading, isError, error, isFetching } = useQuery<
    MoviesResponse,
    Error
  >({
    queryKey: ['movies', page],
    queryFn: () => fetchNowPlayingMovies(page),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  const pageLimit: number = 20
  const movieSkeleton: number[] = new Array(pageLimit).fill(1)

  const handlePrev = (): void => {
    setPage(page - 1)
    scrollToTop()
  }

  const handleNext = (): void => {
    setPage(page + 1)
    scrollToTop()
  }

  return (
    <div>
      <Header />
      <main className="px-4 md:px-8 py-6">
        <div className="text-2xl font-semibold pb-4">Now Playing Movies</div>

        {!isLoading && !isError && !data?.results?.length && (
          <div className="text-xl">No movies playing now</div>
        )}

        {isError && (
          <div className="text-xl text-red-500">{error?.message}</div>
        )}

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6">
          {(isLoading || isFetching) &&
            movieSkeleton.map((movie, idx) => <CardLoading key={idx} />)}

          {!isLoading &&
            !isFetching &&
            data?.results.map((movie) => <Card key={movie.id} data={movie} />)}
        </div>

        {!isError && !!data && (
          <Pagination
            isFetching={isFetching}
            page={page}
            totalPage={data.total_pages}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </main>
    </div>
  )
}
