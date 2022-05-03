import getRandomPokemonId from "lib/pokemon/getRandomPokemonId";

describe('getRandomPokemonId', () => {
  it('should not throw', () => {
    expect(() => getRandomPokemonId([1,2,3])).not.toThrow();
  })
  it('should return a value from list', () => {
    expect([1, 2, 3]).toContain(getRandomPokemonId([1, 2, 3]));
  })
})