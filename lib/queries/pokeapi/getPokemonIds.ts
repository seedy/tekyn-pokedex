import { ENDPOINT } from "lib/queries/pokeapi";
import fetchGQL from "lib/fetchGQL";

const query = `
  query get_pokemon_ids($limit: Int) {
    ids: pokemon_v2_pokemon(limit: $limit) {
      id
    }
  }
`

export type Result = {
  data: {
    ids: {id: number}[]
  }
}
const getPokemonIdsQuery = (limit?: number): Promise<Result> => fetchGQL(ENDPOINT, {query, variables: limit ? {limit} : {}, operationName: "get_pokemon_ids"})

export default getPokemonIdsQuery