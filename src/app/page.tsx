'use client'

import { Provider } from 'react-redux'
import Pokemon from './pokemon/page'
import { store } from '@/shared/stores/store'

export default function Home() {
  return (
    <Provider store={store}>
      <Pokemon />
    </Provider>
  )
}
