import { ReactNode } from 'react'
import { Providers } from './providers'

export default function MovieLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>
}
