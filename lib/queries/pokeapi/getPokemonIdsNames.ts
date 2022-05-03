import { ENDPOINT } from "lib/queries/pokeapi";
import fetchGQL from "lib/fetchGQL";

const query = `
  query get_pokemon_ids_names($limit: Int) {
    idsNames: pokemon_v2_pokemon(limit: $limit) {
      id
      name
    }
  }
`

export type Result = {
  data: {
    idsNames: {id: number, name: string}[]
  }
}
const getPokemonIdsNamesQuery = (limit?: number): Promise<Result> => fetchGQL(ENDPOINT, {query, variables: limit ? {limit} : {}, operationName: "get_pokemon_ids_names"})

export default getPokemonIdsNamesQuery