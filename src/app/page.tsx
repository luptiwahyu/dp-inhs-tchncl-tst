import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center space-x-4 text-lg">
      <div className="text-center space-y-4">
        <div>
          <Link href="/moniveo" className="hover:text-blue-500">
            Moniveo
          </Link>
        </div>
        <hr />
        <div>
          <Link href="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
        </div>
        <hr />
        <div>
          <Link href="/pokemon" className="hover:text-blue-500">
            Pokémon
          </Link>
        </div>
        <hr />
        <div>
          <Link href="/movie" className="hover:text-blue-500">
            Movies
          </Link>
        </div>
        <hr />
        <div>
          <Link href="/cryptocurrency" className="hover:text-blue-500">
            Cryptocurrency
          </Link>
        </div>
      </div>
    </div>
  )
}
