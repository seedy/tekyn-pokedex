import getPokemonIdsQuery, {Result} from "lib/queries/pokeapi/getPokemonIds";

describe('pokeapi getPokemonIds', () => {
  it('should not throw', async () => {
    await expect(getPokemonIdsQuery()).resolves.not.toThrow();
  })
  describe('result', () => {
    let result: Result;
    beforeAll(async() => {
      result = await getPokemonIdsQuery(2);
    })

    it('should not return errors', async () => {
      expect(result).not.toEqual(expect.objectContaining({errors: expect.any(Array)}))
    })
    it('should return pokemon ids', async () => {
      expect(result).toEqual(expect.objectContaining({
        data: {
          ids: [
            {id: 1},
            {id: 2}
          ]
        }
      }))
    })
  })
})