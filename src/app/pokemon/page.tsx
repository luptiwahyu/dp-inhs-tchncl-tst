'use client'

import { Provider } from 'react-redux'
import Header from './components/header/header'
import List from './components/list/list'
import Title from './components/title/title'
import { store } from '@/shared/stores/store'

export default function Pokemon() {
  return (
    <Provider store={store}>
      <Header />
      <main className="px-4 md:px-8 py-6">
        <Title />
        <List />
      </main>
    </Provider>
  )
}
