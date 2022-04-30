import {ENDPOINT} from 'lib/queries/pokeapi';
import fetchGQL from "lib/fetchGQL";

const query =  `
  query pokemon_details($id: Number) {
    pokemon: pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      id
      name
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
        base_stat
        stat_id
        pokemon_v2_stat {
          name
        }
      }
      specy: pokemon_v2_pokemonspecy {
        flavorTexts: pokemon_v2_pokemonspeciesflavortexts(where: {version_id: {_eq: 1}}) {
          flavorText: flavor_text
          
        }
      }
    }
  }
`

const searchByIdQuery = (id: string) => fetchGQL(ENDPOINT, {query, variables: {id: Number(id)}, operationName: "pokemon_details"})

export default searchByIdQuery;