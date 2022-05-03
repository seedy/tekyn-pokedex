import padPokemonId from "lib/pokemon/padPokemonId";

describe('padPokemonId', () => {
  it('should pad 1 into #001', () => {
    expect(padPokemonId(1)).toBe('#001');
  })
  it('should pad 100 into #100', () => {
    expect(padPokemonId(100)).toBe('#100')
  })
})