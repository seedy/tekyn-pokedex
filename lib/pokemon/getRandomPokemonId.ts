const getRandomPokemonId = (ids: number[]) => {
  const min = 0;
  const max = ids.length - 1;
  const index = Math.floor(Math.random() * (max - min + 1) + min)
  return ids[index];
}

export default getRandomPokemonId