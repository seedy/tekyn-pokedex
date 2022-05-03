import {rest} from 'msw';
import mock from './data/getPokemonIds.json'
import { ENDPOINT } from 'lib/queries/pokeapi';
import { GQLParams } from 'lib/fetchGQL';

export const handlers = [
  rest.post<GQLParams>(ENDPOINT, (req, res, ctx) => {
    const limit = req.body?.variables?.['limit'];
    if (limit && limit < 10) {
      const limitedIds = mock.data.ids.slice(0, Number(limit));
      return res(
        ctx.json({
          data: {
            ids: limitedIds
          }
        })
      );
    }
    return res(
      ctx.json(mock)
    )
  })
]