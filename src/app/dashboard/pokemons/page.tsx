import { SimplePokemon, PokemonResponse, PokemonGrid } from "@/pokemons"

export const metadata = {
  title: '151 Pokemons',
  description:'SEO Pokemon data'
}

const getPokemons = async( limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))
  // throw new Error('BOOOM')
  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151)
  return (
    <div>
      <span className="text-5xl my-2">Listado de pokemons <small className="text-blue-500">estático</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}