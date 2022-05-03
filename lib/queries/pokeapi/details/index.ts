import {ENDPOINT} from 'lib/queries/pokeapi';
import fetchGQL from "lib/fetchGQL";

const query =  `
  query pokemon_details($id: Int) {
    pokemons: pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      id
      name
      evolutions: pokemon_v2_pokemonspecy {
        chain: pokemon_v2_evolutionchain {
          pokemons: pokemon_v2_pokemonspecies{
            id
            name
          }
        }
      }
      height
      weight
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
        }
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        base: base_stat
        stat: pokemon_v2_stat {
          name
        }
      }
      description: pokemon_v2_pokemonspecy {
        flavorTexts: pokemon_v2_pokemonspeciesflavortexts(where: {_and:[{pokemon_v2_language: {name: {_eq: "en"}}},{flavor_text: {_neq: ""}}]}, limit: 1) {
          flavorText: flavor_text
        }
      }
    }
  }
`
export type Result = {
  data: {
    pokemons: Pokemon[]
  }
}
const details = async (id: string): Promise<Result> => fetchGQL(ENDPOINT, {query, variables: {id: Number(id)}, operationName: "pokemon_details"})

export default details;