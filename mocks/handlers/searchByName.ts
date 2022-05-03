import mock from '../data/searchByName.json'
import { DefaultRequestBody, ResponseComposition, RestContext, RestRequest } from 'msw';

const handler = (req: RestRequest<DefaultRequestBody>, res: ResponseComposition<DefaultRequestBody>, ctx: RestContext) => {
  const {variables} = JSON.parse(req.body as string);
  const {nameLike} = variables;
  const nameMock = nameLike !== undefined && Object.keys(mock).includes(nameLike) ? (mock as any)[nameLike] : mock['charm%']
  return res(
    ctx.json(nameMock)
  )
}

export default handler;