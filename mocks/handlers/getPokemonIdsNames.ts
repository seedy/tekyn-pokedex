import mock from '../data/getPokemonIdsNames.json'
import { DefaultRequestBody, ResponseComposition, RestContext, RestRequest } from 'msw';

const handler = (req: RestRequest<DefaultRequestBody>, res: ResponseComposition<DefaultRequestBody>, ctx: RestContext) => {
  const {variables} = JSON.parse(req.body as string);
  const {limit} = variables;
  if (limit && limit < 10) {
    const limitedIds = mock['10'].data.idsNames.slice(0, Number(limit));
    return res(
      ctx.json({
        data: {
          ids: limitedIds
        }
      })
    );
  }
  return res(
    ctx.json(mock['10'])
  )
}

export default handler;