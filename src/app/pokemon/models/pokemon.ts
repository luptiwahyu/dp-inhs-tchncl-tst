export interface Pokemon {
  name: string
  url: string
}

export interface ListResponse {
  count: number | undefined
  next: string | null
  previous: string | null
  results: Pokemon[]
}

export interface Pagination {
  pageLimit: number
  pageOffset: number
}

export interface ListState extends Pagination {
  totalRecord: number
}
