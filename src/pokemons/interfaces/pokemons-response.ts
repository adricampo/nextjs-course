
export interface Result {
  name: string
  url: string
}

export interface PokemonResponse {
  count: number
  next: string
  previous: null
  results: Result[]
}