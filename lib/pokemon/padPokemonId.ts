const padPokemonId = (id: number) => `#${id.toString().padStart(3, "0")}`

export default padPokemonId;