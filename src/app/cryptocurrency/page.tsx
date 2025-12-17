'use client'

import { useEffect } from 'react'
import Header from './components/header/header'
import TableList from './components/table-list/table-list'
import { useCryptoStore } from './libs/store'
import TableListLoading from './components/table-list/table-list-loading'

export default function CryptocurrencyList() {
  const { currencies, loading, error, fetchCurrencies } = useCryptoStore()

  useEffect(() => {
    fetchCurrencies()
  }, [fetchCurrencies])

  return (
    <div>
      <Header />
      <main className="px-4 md:px-8 py-6">
        <div className="text-2xl font-semibold pb-4">Top 10 Markets</div>
        {!!error && <div className="text-xl text-red-500 pb-4">{error}</div>}
        {loading && <TableListLoading />}
        {!loading && !error && <TableList data={currencies} />}
      </main>
    </div>
  )
}
