import searchByIdQuery, {Result} from "lib/queries/pokeapi/searchById";

describe('pokeapi searchById', () => {
  it('should not throw', async () => {
    await expect(searchByIdQuery('1')).resolves.not.toThrow();
  })
  describe('result', () => {
    let result: Result;
    beforeAll(async() => {
      result = await searchByIdQuery('1');
    })

    it('should not return errors', async () => {
      expect(result).not.toEqual(expect.objectContaining({errors: expect.any(Array)}))
    })
    it('should return pokemon name and id', async () => {
      expect(result).toEqual(expect.objectContaining({
        data: {
          pokemons: [
            {
              id: 1,
              name: 'bulbasaur',
            }
          ]
        }
      }))
    })
  })
})