import capitalizePokemonName from "lib/pokemon/capitalizePokemonName";

describe('capitalizePokemonName', () => {
  it('should transform drowzee into Drowzee', () => {
    expect(capitalizePokemonName('drowzee')).toBe('Drowzee');
  })
})