import {ENDPOINT} from 'lib/queries/pokeapi';
import fetchGQL from "lib/fetchGQL";

const query =  `
  query search_pokemon_by_name($nameLike: String, $limit: Int) {
    pokemons: pokemon_v2_pokemon(where: {name: {_ilike: $nameLike}}, order_by: {id: asc}, limit: $limit) {
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

const searchByNameQuery = (name: string, limit?:number): Promise<Result> => {
  const nameLike = getNameLike(name);
  return fetchGQL(ENDPOINT, {query, variables: limit ? {limit, nameLike} : {nameLike}, operationName: "search_pokemon_by_name"});
}

export default searchByNameQuery;