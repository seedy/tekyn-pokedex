import searchByNameQuery, {Result} from "lib/queries/pokeapi/searchByName";

describe('pokeapi searchByName', () => {
  it('should not throw', async () => {
    await expect(searchByNameQuery('charmander')).resolves.not.toThrow();
  })
  describe('result', () => {
    let result: Result;

    beforeAll(async () => {
      result = await searchByNameQuery('charm', 2);
    });
    it('should not return errors', async () => {
      expect(result).not.toEqual(expect.objectContaining({errors: expect.any(Array)}))
    })
    it('should return pokemon name and id', async () => {
      expect(result).toEqual(expect.objectContaining({
        data: {
          pokemons: [
            {
              id: 4,
              name: 'charmander',
            },
            {
              id: 5,
              name: 'charmeleon',
            },
          ]
        }
      }))
    })
    it('should return only limit results', async () => {
      expect(result.data.pokemons).toHaveLength(2);
    });
  });
});