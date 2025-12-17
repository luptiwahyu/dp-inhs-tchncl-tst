'use client'

import { useQuery } from '@tanstack/react-query'
import Card from './components/card/card'
import Header from './components/header/header'
import type { Movie, MoviesResponse } from './models/movie'
import { fetchNowPlayingMovies } from './libs/movieApi'
import CardLoading from './components/card/card-loading'
import { Button } from '@/shared/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useState } from 'react'
import { scrollToTop } from '@/shared/utils/helper'

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
          <div className="py-14 px-20">
            <div className="md:hidden text-sm text-center pb-6">
              Page {data.page} of {data.total_pages}
            </div>
            <div className="flex items-center justify-center space-x-6">
              <Button
                variant="outline"
                disabled={page <= 1}
                onClick={handlePrev}
              >
                <ChevronLeftIcon />
                Prev
              </Button>
              <div className="hidden md:block text-sm">
                Page {data.page} of {data.total_pages}
              </div>
              <Button
                variant="outline"
                disabled={isFetching || page >= data.total_pages}
                onClick={handleNext}
              >
                Next
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
