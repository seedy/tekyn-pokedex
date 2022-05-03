import {graphql, rest} from 'msw';
import data from './data/getPokemonIds.json'

export const handlers = [
  graphql.query('get_pokemon_ids', (req, res, ctx) => {
    const {limit} = req.variables;

    if (limit < 10) {
      const limitedIds = data.ids.slice(0, limit);
      return res(
        ctx.data({
          ids: limitedIds
        })
      );
    }
    return res(
      ctx.data(data)
    )
  })
]