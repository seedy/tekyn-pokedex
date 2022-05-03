import getPokemonIdsNamesQuery, {Result} from "lib/queries/pokeapi/getPokemonIdsNames";
import mock from 'mocks/data/getPokemonIdsNames.json'

describe('pokeapi getPokemonIds', () => {
  it('should not throw', async () => {
    await expect(getPokemonIdsNamesQuery()).resolves.not.toThrow();
  })
  describe('result', () => {
    let result: Result;
    let mockData: Result
    beforeAll(async() => {
      result = await getPokemonIdsNamesQuery(10);
      mockData = mock['10'];
    })

    it('should not return errors', async () => {
      expect(result).not.toEqual(expect.objectContaining({errors: expect.any(Array)}))
    })
    it('should return pokemon ids', async () => {
      expect(result).toEqual(expect.objectContaining(mockData))
    })
  })
})