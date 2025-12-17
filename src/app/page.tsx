import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center space-x-4 text-lg">
      <Link href="/pokemon" className="hover:text-blue-500">
        Pokémon
      </Link>
      <div>|</div>
      <Link href="/movie" className="hover:text-blue-500">
        Movies
      </Link>
      <div>|</div>
      <Link href="/cryptocurrency" className="hover:text-blue-500">
        Cryptocurrency
      </Link>
    </div>
  )
}
