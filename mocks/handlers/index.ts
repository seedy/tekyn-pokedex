import {rest} from 'msw';
import { ENDPOINT } from 'lib/queries/pokeapi';
import getPokemonIdsHandler from 'mocks/handlers/getPokemonIds';
import searchByIdHandler from 'mocks/handlers/searchById';
import searchByNameHandler from 'mocks/handlers/searchByName';
import pokemonDetailshandler from 'mocks/handlers/details';

export const handlers = [
  rest.post(ENDPOINT, (req, res, ctx) => {
    const body = JSON.parse(req.body as string);
    const {operationName} = body;
    switch(operationName) {
      case 'search_pokemon_by_name': {
        return searchByNameHandler(req, res, ctx);
      }
      case 'search_pokemon_by_id': {
        return searchByIdHandler(req, res, ctx);
      }
      case 'get_pokemon_ids': {
        return getPokemonIdsHandler(req, res, ctx);
      }
      case 'pokemon_details': {
        return pokemonDetailshandler(req, res, ctx);
      }
    }
  })
]