import unpadPokemonId from "lib/pokemon/unpadPokemonId";

describe('unpadPokemonId', () => {
  it('should pad #001 into 1', () => {
    expect(unpadPokemonId('#001')).toBe("1");
  })
  it('should pad #100 into #00', () => {
    expect(unpadPokemonId('#100')).toBe("100")
  })
})