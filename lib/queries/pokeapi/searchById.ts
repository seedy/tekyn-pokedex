import {ENDPOINT} from 'lib/queries/pokeapi';
import fetchGQL from "lib/fetchGQL";

const query =  `
  query search_pokemon_by_id($id: Int) {
    pokemons: pokemon_v2_pokemon(where: {id: {_eq: $id}}, order_by: {id: asc}) {
      id
      name
    }
  }
`

export type Result = {
  data: {
    pokemons: PokemonSearch[]
  }
}
const searchByIdQuery = (id: string): Promise<Result> => fetchGQL(ENDPOINT, {query, variables: {id: Number(id)}, operationName: "search_pokemon_by_id"})

export default searchByIdQuery;