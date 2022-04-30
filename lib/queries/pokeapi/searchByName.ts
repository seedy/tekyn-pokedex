import {ENDPOINT} from 'lib/queries/pokeapi';
import fetchGQL from "lib/fetchGQL";

const query =  `
  query search_pokemon_by_name($nameLike: String) {
    pokemons: pokemon_v2_pokemon(where: {name: {_ilike: $nameLike}}, order_by: {id: asc}) {
      id
      name
    }
  }
`

const getNameLike = (name: string): string => name.endsWith('%') ? name : `${name}%`;


export type Result = {
  data: {
    pokemons: PokemonSearch[]
  }
}

const searchByNameQuery = (name: string): Promise<Result> => fetchGQL(ENDPOINT, {query, variables: {nameLike: getNameLike(name)}, operationName: "search_pokemon_by_name"})

export default searchByNameQuery;