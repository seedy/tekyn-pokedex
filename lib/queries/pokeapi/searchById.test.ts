import searchByIdQuery, {Result} from "lib/queries/pokeapi/searchById";
import mock from 'mocks/data/searchById.json'

describe('pokeapi searchById', () => {
  it('should not throw', async () => {
    await expect(searchByIdQuery('1')).resolves.not.toThrow();
  })
  describe('result', () => {
    let result: Result;
    let mockData: Result;
    beforeAll(async() => {
      result = await searchByIdQuery('1');
      mockData = mock['1'];
    })

    it('should not return errors', async () => {
      expect(result).not.toEqual(expect.objectContaining({errors: expect.any(Array)}))
    })
    it('should return pokemon name and id', async () => {
      expect(result).toEqual(expect.objectContaining(mockData))
    })
  })
})