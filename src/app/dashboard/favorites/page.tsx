import { SimplePokemon, PokemonResponse, PokemonGrid } from "@/pokemons"

export const metadata = {
  title: 'Favoritos',
  description:'SEO Pokemon data'
}

export default async function PokemonsPage() {

  return (
    <div>
      <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-500">Global state</small></span>
      <PokemonGrid pokemons={ [] } />
    </div>
  )
}