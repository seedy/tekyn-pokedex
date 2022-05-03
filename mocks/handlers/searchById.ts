import mock from '../data/searchById.json'
import { DefaultRequestBody, ResponseComposition, RestContext, RestRequest } from 'msw';

const handler = (req: RestRequest<DefaultRequestBody>, res: ResponseComposition<DefaultRequestBody>, ctx: RestContext) => {
  const {variables} = JSON.parse(req.body as string);
  const {id} = variables
  const idMock = id !== undefined && Object.keys(mock).includes(id) ? (mock as any)[id] : mock['1'];
  return res(
    ctx.json(idMock)
  )
}

export default handler;